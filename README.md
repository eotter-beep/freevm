# FreeVM

FreeVM is a lightweight and modular virtual machine emulator. It leverages powerful JavaScript libraries to emulate CPU, GPU, USB, and memory operations.

## Features
- **CPU Emulation**: Uses the `6502-emulator` library for CPU operations.
- **GPU Detection**: Detects GPU capabilities using `detect-gpu`.
- **USB Device Management**: Supports USB device interactions via the `usb` library.
- **Memory Management**: Handles paged memory with `paged-memory`.
- Built with modularity and extensibility in mind.

## Configuration

Users are supposed to create the configuration.js

FreeVM can be configured through a `configuration.js` file. This file allows you to adjust various parameters such as memory allocation, CPU clock speed, GPU settings, and more.

### Example `configuration.js`

Below is an example of how `configuration.js` will look:

```javascript name=configuration.js
module.exports = {
  cpu: {
    clockSpeed: 1.79, // Clock speed in MHz (example for a 6502 CPU)
    enableIRQ: true,  // Enable IRQ interrupts
    enableNMI: true   // Enable NMI interrupts
  },
  memory: {
    pageSize: 1024,   // Page size in bytes
    totalPages: 64    // Total number of memory pages
  },
  gpu: {
    benchmarksURL: 'https://unpkg.com/detect-gpu@9.0.2/dist/benchmarks',
    failIfMajorPerformanceCaveat: false,
    mobileTiers: [0, 15, 30, 60],
    desktopTiers: [0, 15, 30, 60]
  },
  usb: {
    logDevicesOnStart: true // Log all connected USB devices on startup
  }
};
```

### How to Create and Configure

1. **Create the File**: Create a file named `configuration.js` in the root directory of the FreeVM project.
2. **Add Your Configuration**: Use the example above as a template and customize it according to your needs.
3. **Load Configuration in FreeVM**: Ensure that FreeVM loads and applies this configuration file. For example:
   ```javascript
   const config = require('./configuration.js');
   console.log('Configuration Loaded:', config);
   ```

## Getting Started

### Prerequisites

Ensure you have the following prerequisites installed:
- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/eotter-beep/freevm.git
   ```
2. Navigate to the project directory:
   ```bash
   cd freevm
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running FreeVM

To start FreeVM, run the following command:
```bash
node cpu.js
```

## File Overview

Here’s an overview of the key files in the FreeVM repository:

- **`bugtracker.js`**: Sets up diagnostics with OpenTelemetry.
- **`cpu.js`**: Implements CPU emulation using the `6502-emulator` library.
- **`gpu.js`**: Detects GPU capabilities using the `detect-gpu` library.
- **`usb.js`**: Manages USB devices with the `usb` library.
- **`meo.js`**: Handles paged memory management.

## License

This project is licensed under the terms of the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
