
某些 APP 有其对应的 API，如 bridge 和 uuid_bridge、transfer 和 uuid_transfer

## API Commands

uuid_bridge
uuid_transfer
uuid_playback
uuid_kill
uuid_broadcase
uuid_record


## App

&echo

&park

&hold

&playback(/tmp/welcome.wav)  -- 接通后直接播放声音
&endless_playback
&loop_playback

&speak


&record(/tmp/voice_record.wav)  -- 接通后直接录音

&bridge(user/1001)

---



answer -- 用于应答一路呼叫

bridge -- 

hangup

set -- 用于设置一个通道变量
unset
export -- 对 a-leg 和 b-leg 同时赋值
hash

echo



log


info -- 在日志中打印全部通道变量


transfer


ivr

read
play_and_get_digits

