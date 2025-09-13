import { usb, getDeviceList } from 'usb';
let devices: usb.Device[] = getDeviceList();
devices = getDeviceList();

for (const device of devices) {
    console.log(device); // Legacy device
}
