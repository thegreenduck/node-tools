# Utility Functions Module

## A collection of useful asynchronous and system-related utility functions for Node.js.

Functions

1. retry(fn, retries)
   Retries an asynchronous function up to 'retries' times if it throws an error.
   Usage:
     await retry(asyncFunction, 3);

2. sleep(ms)
   Returns a promise that resolves after 'ms' milliseconds.
   Usage:
     await sleep(1000);  // Waits 1 second

3. delayFn(fn, ms)
   Delays execution of a function by 'ms' milliseconds.
   Usage:
     await delayFn(() => console.log('Hello after delay'), 2000);

4. repeatFunction(fn, times, rate)
   Repeats a function 'times' number of times with a delay of 'rate' seconds between calls.
   Usage:
     await repeatFunction(() => console.log('Repeat!'), 5, 2);

5. osInfo()
   Returns detailed information about the current operating system.
   Usage:
     const info = osInfo();
     console.log(info);

6. getIP()
   Returns the first non-internal IPv4 address found on the machine.
   Usage:
     const ip = getIP();
     console.log(ip);

---

## Installation

Place the 'tools.js' file in your project directory.

---

## Usage

### Import the module using CommonJS syntax:

  const utils = require('./main');

  utils.test();
  console.log(utils.getIP());

### Destructure specific functions:

  const { retry, getIP } = require('./main');

  retry(asyncFunction, 3);
  console.log(getIP());

