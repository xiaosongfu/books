本文整理自：[Report errors to a service
](https://flutter.dev/docs/cookbook/maintenance/error-reporting)

## 1. Get a DSN from Sentry

## 2. Import the Sentry package

```
dependencies:
  sentry: <latest_version>
```

## 3. 

## 4. Create a function to report errors

设置Sentry后，您可以开始报告错误。由于您不希望在开发期间向Sentry报告错误，因此首先要创建一个函数，让您知道自己是处于调试模式还是生产模式。

```
bool get isInDebugMode {
  // Assume you're in production mode
  bool inDebugMode = false;

  // Assert expressions are only evaluated during development. They are ignored
  // in production. Therefore, this code only sets `inDebugMode` to true
  // in a development environment.
  assert(inDebugMode = true);

  return inDebugMode;
}
```

> 因为在开发环境下不希望上报 crash，所以通过 assert 方法来保证在开发环境下 inDebugMode 的值一定不能是 true !!!

封装一个方法来统一处理错误信息：开发模式下打印出来，生产模式上报 sentry：

```
Future<void> _reportError(dynamic error, dynamic stackTrace) async {
  // Print the exception to the console
  print('Caught error: $error');
  if (isInDebugMode) {
    // Print the full stacktrace in debug mode
    print(stackTrace);
    return;
  } else {
    // Send the Exception and Stacktrace to Sentry in Production mode
    _sentry.captureException(
      exception: error,
      stackTrace: stackTrace,
    );
  }
}
```

## 5. Catch and report Dart errors

```
runZoned<Future<void>>(() async {
  runApp(CrashyApp());
}, onError: (error, stackTrace) {
  // Whenever an error occurs, call the `_reportError` function. This sends
  // Dart errors to the dev console or Sentry depending on the environment.
  _reportError(error, stackTrace);
});
```

## 6. Catch and report Flutter errors

```
// This captures errors reported by the Flutter framework.
FlutterError.onError = (FlutterErrorDetails details) {
  if (isInDebugMode) {
    // In development mode, simply print to console.
    FlutterError.dumpErrorToConsole(details);
  } else {
    // In production mode, report to the application zone to report to
    // Sentry.
    Zone.current.handleUncaughtError(details.exception, details.stack);
  }
};
```
