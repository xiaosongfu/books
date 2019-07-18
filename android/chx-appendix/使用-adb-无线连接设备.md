摘自：https://github.com/Genymobile/scrcpy

1. Connect the device to the same Wi-Fi as your computer.
2. Get your device IP address (in Settings → About phone → Status).
3. Enable adb over TCP/IP on your device: adb tcpip 5555.
4. Unplug your device.
5. Connect to your device: adb connect DEVICE_IP:5555 (replace DEVICE_IP).