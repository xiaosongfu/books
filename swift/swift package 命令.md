swift package --version

swift package init --type executable

swift package init --type library

swift package generate-xcodeproj

swift package update


swift package show-dependencies

swift build
swift run
swift test


---

## swift package

```
$ swift package --help
OVERVIEW: Perform operations on Swift packages

USAGE: swift package [options] subcommand

OPTIONS:
  --build-path            Specify build/cache directory [default: ./.build]
  --configuration, -c     Build with configuration (debug|release) [default: debug]
  --disable-automatic-resolution
                          Disable automatic resolution if Package.resolved file is out-of-date
  --disable-index-store   Disable indexing-while-building feature
  --disable-package-manifest-caching
                          Disable caching Package.swift manifests
  --disable-prefetching
  --disable-sandbox       Disable using the sandbox when executing subprocesses
  --enable-index-store    Enable indexing-while-building feature
  --enable-pubgrub-resolver
                          [Experimental] Enable the new Pubgrub dependency resolver
  --enable-test-discovery
                          Enable test discovery on platforms without Objective-C runtime
  --jobs, -j              The number of jobs to spawn in parallel during the build process
  --no-static-swift-stdlib
                          Do not link Swift stdlib statically [default]
  --package-path          Change working directory before any other operation
  --sanitize              Turn on runtime checks for erroneous behavior
  --skip-update           Skip updating dependencies from their remote during a resolution
  --static-swift-stdlib   Link Swift stdlib statically
  --verbose, -v           Increase verbosity of informational output
  -Xcc                    Pass flag through to all C compiler invocations
  -Xcxx                   Pass flag through to all C++ compiler invocations
  -Xlinker                Pass flag through to all linker invocations
  -Xswiftc                Pass flag through to all Swift compiler invocations
  --help                  Display available options

SUBCOMMANDS:
  clean                   Delete build artifacts
  completion-tool         Completion tool (for shell completions)
  config                  Manipulate configuration of the package
  describe                Describe the current package
  dump-package            Print parsed Package.swift as JSON
  edit                    Put a package in editable mode
  generate-xcodeproj      Generates an Xcode project
  init                    Initialize a new package
  reset                   Reset the complete cache/build directory
  resolve                 Resolve package dependencies
  show-dependencies       Print the resolved dependency graph
  tools-version           Manipulate tools version of the current package
  unedit                  Remove a package from editable mode
  update                  Update package dependencies

SEE ALSO: swift build, swift run, swift test
```

## swift package init

```
$ swift package init --help
OVERVIEW: Initialize a new package

OPTIONS:
  --name   Provide custom package name
  --type   empty|library|executable|system-module|manifest
```

## swift package generate-xcodeproj

```
$ swift package generate-xcodeproj --help
OVERVIEW: Generates an Xcode project

OPTIONS:
  --enable-code-coverage
                          Enable code coverage in the generated project
  --legacy-scheme-generator
                          Use the legacy scheme generator
  --output                Path where the Xcode project should be generated
  --skip-extra-files      Do not add file references for extra files to the generated Xcode project
  --watch                 Watch for changes to the Package manifest to regenerate the Xcode project
  --xcconfig-overrides    Path to xcconfig file
```


