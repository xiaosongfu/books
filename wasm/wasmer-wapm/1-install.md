
安装命令：`curl https://get.wasmer.io -sSfL | sh`

```
$ curl https://get.wasmer.io -sSfL | sh
Installing Wasmer!
> Getting wasmer releases... ✓
> Downloading 0.5.0 release... ✓
x bin/wapm
x bin/wasmer
> Adding to bash profile... ✓
Note: We've added the following to your /Users/fuxiaosong/.bashrc
If this isn't the profile of your current shell then please add the following to your correct profile:

# Wasmer
export WASMER_DIR="/Users/fuxiaosong/.wasmer"
[ -s "$WASMER_DIR/wasmer.sh" ] && source "$WASMER_DIR/wasmer.sh"  # This loads wasmer

> Successfully installed wasmer 0.5.0!

If you want to have the command available now please execute:
source /Users/fuxiaosong/.wasmer/wasmer.sh

Otherwise, wasmer and wapm will be available the next time you open the terminal.
Note: during the alpha release of wapm, telemetry is enabled by default; if you would like to opt out, run `wapm config set telemetry.enabled false`.
If you notice anything wrong or have any issues, please file a bug at https://github.com/wasmerio/wapm-cli :)
```

安装完成后会安装 wasmer 和 wapm 两个可执行文件。


