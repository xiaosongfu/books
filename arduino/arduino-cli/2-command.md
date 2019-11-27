





```
$ arduino-cli sketch new blink
Sketch created in: /Users/fuxiaosong/dev/project/arduino/blink
$ cd blink
$ tree
.
└── blink.ino

0 directories, 1 file
```




```
arduino-cli  board list
Downloading missing tool builtin:ctags@5.8-arduino11...
builtin:ctags@5.8-arduino11 downloaded
Installing builtin:ctags@5.8-arduino11...
builtin:ctags@5.8-arduino11 installed
Downloading missing tool builtin:serial-discovery@1.0.0...
builtin:serial-discovery@1.0.0 downloaded
Installing builtin:serial-discovery@1.0.0...
builtin:serial-discovery@1.0.0 installed
Updating index: library_index.json downloaded
Error loading index: loading json index file /Users/fuxiaosong/Library/Arduino15/package_index.json: open /Users/fuxiaosong/Library/Arduino15/package_index.json: no such file or directory
Error loading index: loading json index file /Users/fuxiaosong/Library/Arduino15/package_index.json: open /Users/fuxiaosong/Library/Arduino15/package_index.json: no such file or directory
Launch 'arduino-cli core update-index' to fix or download indexes.
```

$ arduino-cli core update-index
Updating index: package_index.json downloaded
Updating index: package_index.json downloaded

$ arduino-cli board list
Port                            Type              Board Name          FQBN            Core
/dev/cu.AirPods-WirelessiAP-1   Serial Port       Unknown
/dev/cu.Bluetooth-Incoming-Port Serial Port       Unknown
/dev/cu.MacBookPro-Bluetooth-In Serial Port       Unknown
/dev/cu.iPhone-WirelessiAP      Serial Port       Unknown
/dev/cu.usbmodem14201           Serial Port (USB) Arduino/Genuino Uno arduino:avr:uno arduino:avr
```


arduino-cli board listall
Board Name                        FQBN
Adafruit Circuit Playground       arduino:avr:circuitplay32u4cat
Arduino BT                        arduino:avr:bt
Arduino Duemilanove or Diecimila  arduino:avr:diecimila
Arduino Esplora                   arduino:avr:esplora
Arduino Ethernet                  arduino:avr:ethernet
Arduino Fio                       arduino:avr:fio
Arduino Gemma                     arduino:avr:gemma
Arduino Industrial 101            arduino:avr:chiwawa
Arduino Leonardo                  arduino:avr:leonardo
Arduino Leonardo ETH              arduino:avr:leonardoeth
Arduino Mega ADK                  arduino:avr:megaADK
Arduino Mini                      arduino:avr:mini
Arduino NG or older               arduino:avr:atmegang
Arduino Nano                      arduino:avr:nano
Arduino Pro or Pro Mini           arduino:avr:pro
Arduino Robot Control             arduino:avr:robotControl
Arduino Robot Motor               arduino:avr:robotMotor
Arduino Uno WiFi                  arduino:avr:unowifi
Arduino Yún                       arduino:avr:yun
Arduino Yún Mini                  arduino:avr:yunmini
Arduino/Genuino Mega or Mega 2560 arduino:avr:mega
Arduino/Genuino Micro             arduino:avr:micro
Arduino/Genuino Uno               arduino:avr:uno
LilyPad Arduino                   arduino:avr:lilypad
LilyPad Arduino USB               arduino:avr:LilyPadUSB
Linino One                        arduino:avr:one



```
$ arduino-cli core list

```

arduino-cli core install arduino:avr
Downloading packages...
arduino:avr-gcc@7.3.0-atmel3.6.1-arduino5 downloaded
arduino:avrdude@6.3.0-arduino17 downloaded
arduino:arduinoOTA@1.3.0 downloaded
arduino:avr@1.8.1 downloaded
Installing arduino:avr-gcc@7.3.0-atmel3.6.1-arduino5...
arduino:avr-gcc@7.3.0-atmel3.6.1-arduino5 installed
Installing arduino:avrdude@6.3.0-arduino17...
arduino:avrdude@6.3.0-arduino17 installed
Installing arduino:arduinoOTA@1.3.0...
arduino:arduinoOTA@1.3.0 installed
Installing arduino:avr@1.8.1...
arduino:avr@1.8.1 installed


arduino-cli core list
ID          Installed Latest Name
arduino:avr 1.8.1     1.8.1  Arduino AVR Boards



arduino-cli compile --fqbn arduino:avr:uno blink.ino
Sketch uses 936 bytes (2%) of program storage space. Maximum is 32256 bytes.
Global variables use 9 bytes (0%) of dynamic memory, leaving 2039 bytes for local variables. Maximum is 2048 bytes.
➜  blink



```
$ arduino pwd
/Users/fuxiaosong/dev/project/arduino
$ tree
.
└── blink
    └── blink.ino

1 directory, 1 files

$ arduino-cli compile --fqbn arduino:avr:uno blink
Sketch uses 936 bytes (2%) of program storage space. Maximum is 32256 bytes.
Global variables use 9 bytes (0%) of dynamic memory, leaving 2039 bytes for local variables. Maximum is 2048 bytes.

$ arduino-cli upload -p /dev/cu.usbmodem14201 --fqbn arduino:avr:uno blink

$ tree
.
└── blink
    ├── blink.arduino.avr.uno.elf
    ├── blink.arduino.avr.uno.hex
    ├── blink.ino
    ├── blink.ino.arduino.avr.uno.elf
    └── blink.ino.arduino.avr.uno.hex

1 directory, 5 files
```




$ arduino-cli config init




```
arduino-cli
Arduino Command Line Interface (arduino-cli).

Usage:
  arduino-cli [command]

Examples:
  arduino-cli <command> [flags...]

Available Commands:
  board         Arduino board commands.
  compile       Compiles Arduino sketches.
  config        Arduino Configuration Commands.
  core          Arduino Core operations.
  daemon        Run as a daemon on port :50051
  help          Help about any command
  lib           Arduino commands about libraries.
  sketch        Arduino CLI Sketch Commands.
  upload        Upload Arduino sketches.
  version       Shows version number of arduino CLI.

Flags:
      --additional-urls strings   Additional URLs for the board manager.
      --config-file string        The custom config file (if not specified the default will be used).
      --format string             The output format, can be [text|json]. (default "text")
  -h, --help                      help for arduino-cli
      --log-file string           Path to the file where logs will be written.
      --log-format string         The output format for the logs, can be [text|json]. (default "text")
      --log-level string          Messages with this level and above will be logged. (default "info")
  -v, --verbose                   Print the logs on the standard output.

Use "arduino-cli [command] --help" for more information about a command.
```
