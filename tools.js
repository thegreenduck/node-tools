async function retry(fn, retries) {
  let err;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      err = e;
    }
  }
  throw err;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function delayFn(fn, ms) {
  await sleep(ms);
  return await fn();
}

async function repeatFunction(fn, times, rate) {
  for (let i = 0; i < times; i++) {
    fn();
    await sleep(rate * 1000);
  }
}

function osInfo() {
  const os = require("os");
  const cpus = os.cpus();

  return {
    osType: os.type(),
    platform: os.platform(),
    version: os.release(),
    architecture: os.arch(),
    hostname: os.hostname(),
    uptimeSeconds: os.uptime(),
    totalMemory: (os.totalmem() / 1e9).toFixed(2),
    freeMemory: (os.freemem() / 1e9).toFixed(2),
    cpuCount: cpus.length,
    cpuModel: cpus[0]?.model,
    cpuSpeed: cpus[0]?.speed,
    user: os.userInfo(),
    network: os.networkInterfaces(),
  };
}

function getIP() {
  const os = require("os");
  const interfaces = os.networkInterfaces();
  for (const name in interfaces) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
}

module.exports = {
  retry,
  sleep,
  delayFn,
  repeatFunction,
  osInfo,
  getIP,
};
