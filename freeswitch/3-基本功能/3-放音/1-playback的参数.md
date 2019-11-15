```
<action application="playback" data="/tmp/1.wav">

<action application="playback" data="/tmp/2.mp3">

<action application="playback" data="shout://shoutcase-server/test.mp3"/>

<action application="playback" data="local_stream://moh">

<action application="playback" data="silence_stream://2000,1400">

<action application="playback" data="tone_stream://%(1000,4000,450)">

<action application="playback" data="file_string:///tmp/1.wav!/tmp/2.wav!/tmp/3.wav">
```

mod_sndfile
mod_shout
mod_native_file
mod_local_stream
silence_stream
mod_tone_stream

## 1. 声音文件

```
<action application="playback" data="/tmp/1.wav">
```

直接使用声音文件是因为默认加载了 mod_sndfile 模块，它底层使用 libsndfile 库，它支持的文件格式 FreeSwitch 就都支持了，如 wav，au，aiff，vox 等，但是想 mp3 是不支持的，这个需要 mod_shout 模块来支持。

安装并加载 mod_shout 模块后就可以直接配置使用 mp3 文件了：

```
<action application="playback" data="/tmp/2.mp3">
```

mod_shout 模块也支持直接播放远程 SHOUTcast 服务器上的 mp3 文件：

```
<action application="playback" data="shout://shoutcase-server/test.mp3"/>
```

此外，playback 也支持直接播放由 mod_native_file 模块支持的原生格式文件，如 PCMU、G729 等编码格式的文件：

```
<action application="playback" data="/tmp/test">
```

如果 test 为 PCMU 编码的文件，则会播放 test.PCMU 文件。


## 2. local_stream

```
<action application="playback" data="local_stream://moh">
```

mod_local 是由 mod_local_stream 模块实现的，该模块实现了一些 stream，即“流”。它与文件类似，不同的是，每个流在整个系统中只有一个实例，但可以同时被多个 channel 读取，这样，当系统中有成千上万个channel 是，便能节省很多系统资源。由于流的这个特性，使得它非常适合做保持音乐（Music on hold，moh）。

"local_stream://moh" 中指定了一个名字 moh，该名字在 local_stream.conf.xml 中配置，它最终指向了某个具体的音乐文件。

## 3. silence_stream

```
<action application="playback" data="silence_stream://2000,1400">
```

silence_stream 是一个静音流，它是在 mod_tone_stream 中实现的。通话会静音，但是还是有 RTP 包传输给对方的。

## 4. tone_stream

```
<action application="playback" data="tone_stream://%(1000,4000,450)">
```

tone_stream 是一个铃流，由 mod_tone_stream 实现的。它可以使用 TGML 语言生成各种信号音。

## 5. file_string

```
<action application="playback" data="file_string:///tmp/1.wav!/tmp/2.wav!/tmp/3.wav">
```

file_string 是一种更高级的文件格式，可以通过它将多个文件串起来，使得多个文件可以按顺序播放。

也可以指定多个文件间的播放时间间隔，单位毫秒：

```
<action application="set" data="playback_sleep_val=500" />
```
