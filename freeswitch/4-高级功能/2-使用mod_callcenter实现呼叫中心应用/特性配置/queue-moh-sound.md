可以使用 FreeSWITCH  playback 支持的任何类型的输入:

1. A direct path to a .wav file will play in a loop indefinitely.
2. The local stream, e.g. (local_stream://moh) or use $${hold_music} as defined in the default configuration.
3. The FreeSWITCH phrase system, e.g., (phrase:my-special-phrase). (I use this to play multiple prompts after each other.)
4. A tone stream as with ringing, e.g., (tone_stream://${us-ring};loops=-1).
