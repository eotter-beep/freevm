import { CPU6502, ReadWrite } from "6502-emulator";
const cpu = new CPU6502();
cpu.reset(); // trigger reset sequence
cpu.triggerIRQB(); // trigger IRQB interrupt
cpu.triggerNMIB(); // trigger NMIB interrupt
cpu.startClock(); // start/resume clock
const ramImagePath = (imagepath) => ({ imagepath });
const ramImage = fs.readFileSync(ramImagePath);
// set up memory
const ram = Uint8ClampedArray.from(ramImage);

const accessMemory = (readWrite, address, value) => {
  // capture a write to 0x6000 as a magic output address, print to console
  if (address === 0x6000 && readWrite === ReadWrite.write) {
    console.log("Output: ", value.toString(16));
    return;
  }
