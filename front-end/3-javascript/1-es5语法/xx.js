// 网易云信的 key
let appKey = "846fb5540774a312dc250180da9a40e8"

// IM 对象 和 VoIP 对象
var nim = null;
var netcall = null;

// // 音视频呼叫信息
// // 是否被叫中
// let beCalling = false;
// // 呼叫类型
// let type = null;
// // 被叫信息
// let beCalledInfo = null;
// // 是否正忙
// let busy = false;

// ------------------------

// 1. 初始化方法
function init(userName, password) {
    initIM(userName, password);
    initWebRTC();
}

function initIM(userName, password) {
    console.log("init NIM...")

    // 初始化SDK
    nim = NIM.getInstance({
        appKey: appKey,
        account: userName,
        token: password,

        // 配置
        db: false, // 不使用数据库

        // 方法回调
        onconnect: onConnect,
        onerror: onError,
        onwillreconnect: onWillReconnect,
        ondisconnect: onDisconnect,

        onmsg: onMsg,
    });

    function onConnect() {
        console.log("连接成功")
    }

    function onError(err) {
        console.log(err)
    }

    function onWillReconnect(obj) {
        // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
        console.log('即将重连');
        console.log(obj.retryCount);
        console.log(obj.duration);
    }

    function onDisconnect(err) {
        // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
        console.log('丢失连接');
        console.log(err);
    }

    // 收到消息
    // 当前登录帐号在其它端发送消息之后也会收到此回调, 注意此时消息对象的from字段就是当前登录的帐号
    function onMsg(msg) {
        console.log('收到消息', msg.scene, msg.type, msg);
        if (msg.scene == "p2p") {
            if (msg.type == "image") {
                // name: 名字
                // size: 大小, 单位byte
                // md5: md5
                // url: url
                // ext: 扩展名
                // w: 宽, 单位px
                // h: 高, 单位px
                console.log(msg.file.name, msg.file.size)
            } else {
                console.log("收到的消息不是 image 图片类型,不做任何处理")
            }
        } else {
            console.log("收到的消息不是 p2p 点对点消息类型,不做任何处理")
        }
    }
}

function initWebRTC() {
    console.log("init WebRTC...")

    NIM.use(WebRTC)
    netcall = WebRTC.getInstance({
        nim: nim,
        container: document.getElementById("video-local"),
        remoteContainer: document.getElementById("video-remote"),
        debug: true
    })
}

// 2. 释放资源方法
function destroy() {
    console.log("destroy")
    if (nim) {
        // 调用 disconnect 还是 destroy ?
        // 还是同时调用
        nim.disconnect();
        nim.destroy({
            done: function (err) {
                console.log('实例已被完全清除', err)
            }
        })
    }
}

// ------------------------

/*

开始呼叫
  -> 主叫收到被叫接受
  -> 主叫收到被叫拒绝
 
被叫收到呼叫
  -> 接受呼叫
  -> 拒绝呼叫
 
挂断通话
  -> 收到挂断

sdk内部出现错误或者服务器反馈一些通知

音视频清理

*/

// 开始呼叫
function call(toUserName) {
    const pushConfig = {
        enable: true,
        needBadge: true,
        needPushNick: true,
        pushContent: '',
        custom: '',
        pushPayload: '',
        sound: '',
        forceKeepCalling: 0
    };

    const sessionConfig = {
        videoQuality: WebRTC.CHAT_VIDEO_QUALITY_HIGH,
        videoFrameRate: WebRTC.CHAT_VIDEO_FRAME_RATE_15,
        videoBitrate: 0,
        recordVideo: false,
        recordAudio: false,
        highAudio: false,
        bypassRtmp: false,
        rtmpUrl: '',
        rtmpRecord: false,
        splitMode: WebRTC.LAYOUT_SPLITLATTICETILE
    };

    netcall.call({
        type: WebRTC.NETCALL_TYPE_VIDEO,
        account: toUserName,
        pushConfig: pushConfig,
        sessionConfig: sessionConfig
    }).then(function (obj) {
        // 成功发起呼叫
        console.log('call success', obj);
    }).catch(function (err) {
        console.log(err)
        // 被叫不在线
        if (err.event.code === 11001) {
            console.log('callee offline', err);
        }
    });

    //   // 设置超时计时器
    //   let callTimer = setTimeout(function() {
    //     if (!netcall.callAccepted) {
    //       console.log('超时未接听, hangup');
    //       hangup();
    //     }
    //   }, 1000 * 30);
}

// // 主叫收到被叫接受的通知
// --> 通话建立成功也是在这个事件 -> 所以要在这个事件里面开启自己的预览
// netcall.on("callAccepted", function (obj) {
//     // account	string	被叫账号
//     // type	number	音视频呼叫类型：音频、视频

//     console.log('on callAccepted', obj);

//     // // 如果呼叫之前，启动了超时倒计时，这里可以取消呼叫倒计时
//     // clearCallTimer();

//     // 缓存呼叫类型，后面开启音视频连接需要用到
//     type = obj.type;

//     // 可以开启音视频连接操作。。。
//     startPublishVideo()
// })

// // 主叫收到被叫拒绝的通知
// netcall.on("callRejected", function (obj) {
//     // account	string	被叫账号
//     // type	number	音视频呼叫类型：音频、视频

//     console.log('on callRejected', obj);

//     // // 如果呼叫之前，启动了超时倒计时，这里可以取消呼叫倒计时
//     // clearCallTimer();

//     // 挂断
//     hangup();
// })

// ------------------------

// // 被叫收到呼叫的通知
// netcall.on("beCalling", function (obj) {
//     // account	string	主叫 account
//     // type	number	主叫发起的通话类型（音频还是视频）
//     // channelId	string	该通呼叫会话的唯一 id 值，开发者可用于判断是否是同一通呼叫
//     console.log('on beCalling', obj);

//     const channelId = obj.channelId;

//     // 被叫回应主叫自己已经收到了通话请求
//     netcall.control({
//         channelId: channelId,
//         command: WebRTC.NETCALL_CONTROL_COMMAND_START_NOTIFY_RECEIVED
//     });

//     // 只有在没有通话并且没有被叫的时候才记录被叫信息, 否则通知对方忙并拒绝通话
//     if (!netcall.calling && !beCalling) {
//         type = obj.type;
//         beCalling = true;
//         beCalledInfo = obj;

//         // 接通或者拒绝或者弹一个对话框


//     } else {
//         if (netcall.calling) {
//             busy = netcall.notCurrentChannelId(obj);
//         } else if (beCalling) {
//             busy = beCalledInfo.channelId !== channelId;
//         }
//         if (busy) {
//             // 1 通知对方忙
//             netcall.control({
//                 channelId: channelId,
//                 command: WebRTC.NETCALL_CONTROL_COMMAND_BUSY
//             });
//             // 2 并拒绝通话
//             netcall.response({
//                 accepted: false,
//                 beCalledInfo: obj
//             });
//         }
//     }
// })

// 接受呼叫
function accept(beCalledInfo) {
    const sessionConfig = {
        videoQuality: WebRTC.CHAT_VIDEO_QUALITY_HIGH,
        videoFrameRate: WebRTC.CHAT_VIDEO_FRAME_RATE_15,
        videoBitrate: 0,
        recordVideo: false,
        recordAudio: false,
        highAudio: false,
        bypassRtmp: false,
        rtmpUrl: '',
        rtmpRecord: false,
        splitMode: WebRTC.LAYOUT_SPLITLATTICETILE
    };

    netcall.response({
        accepted: true,
        beCalledInfo: beCalledInfo,
        sessionConfig: sessionConfig
    }).catch(function (err) {
        reject(beCalledInfo);
        console.log('接听失败', err);
    });
}
// // 接受呼叫
// function accept() {
//     const sessionConfig = {
//         videoQuality: WebRTC.CHAT_VIDEO_QUALITY_HIGH,
//         videoFrameRate: WebRTC.CHAT_VIDEO_FRAME_RATE_15,
//         videoBitrate: 0,
//         recordVideo: false,
//         recordAudio: false,
//         highAudio: false,
//         bypassRtmp: false,
//         rtmpUrl: '',
//         rtmpRecord: false,
//         splitMode: WebRTC.LAYOUT_SPLITLATTICETILE
//     };

//     netcall.response({
//         accepted: true,
//         beCalledInfo: beCalledInfo,
//         sessionConfig: sessionConfig
//     }).catch(function (err) {
//         reject();
//         console.log('接听失败', err);
//     });
// }

// 拒绝呼叫
function reject(beCalledInfo) {

    console.log(beCalledInfo)

    // 可以先通知对方自己忙, 拒绝的时候需要回传在 `beCalling` 事件里面接收到的对象
    // const beCalledInfo = beCalledInfo;

    // 先通知对方自己忙
    netcall.control({
        channelId: beCalledInfo.channelId,
        command: WebRTC.NETCALL_CONTROL_COMMAND_BUSY
    });

    // 再拒绝
    netcall.response({
        accepted: false,
        beCalledInfo
    });

    // beCalledInfo = null;
    // beCalling = false;
}
// // 拒绝呼叫
// function reject() {
//     // 可以先通知对方自己忙, 拒绝的时候需要回传在 `beCalling` 事件里面接收到的对象
//     // const beCalledInfo = beCalledInfo;

//     // 先通知对方自己忙
//     netcall.control({
//         channelId: beCalledInfo.channelId,
//         command: WebRTC.NETCALL_CONTROL_COMMAND_BUSY
//     });

//     // 再拒绝
//     netcall.response({
//         accepted: false,
//         beCalledInfo
//     });

//     beCalledInfo = null;
//     beCalling = false;
// }

// ------------------------

function startPublishVideo() {
    // 连接媒体网关
    netcall.startRtc().then(function () {
        // 开启麦克风
        return netcall.startDevice({
            type: WebRTC.DEVICE_TYPE_AUDIO_IN
        }).catch(function (err) {
            console.log('启动麦克风失败')
            console.error(err)
        })
    }).then(function () {
        // 设置采集音量
        netcall.setCaptureVolume(255)
        // 开启摄像头
        return netcall.startDevice({
            type: WebRTC.DEVICE_TYPE_VIDEO
        }).catch(function (err) {
            console.log('启动摄像头失败')
            console.error(err)
        })
    }).then(function () {
        //预览本地画面
        netcall.startLocalStream(document.getElementById('video-local'))

        // 设置本地预览画面大小
        netcall.setVideoViewSize({
            width: 500,
            height: 500,
            cut: true
        })
    }).catch(function (err) {
        console.log('发生错误')
        console.log(err)
        hangup()
    })
}

// // 监听对方加入通话
// netcall.on("remoteTrack", function (obj) {
//     console.log('user join', obj)

//     // 播放对方声音
//     netcall.startDevice({
//         type: WebRTC.DEVICE_TYPE_AUDIO_OUT_CHAT
//     }).catch(function (err) {
//         console.log('播放对方的声音失败')
//         console.error(err)
//     })

//     // 预览对方视频画面
//     netcall.startRemoteStream({
//         account: obj.account,
//         node: document.getElementById('video-remote')
//     })

//     // 设置对方预览画面大小
//     netcall.setVideoViewRemoteSize({
//         account: obj.account,
//         width: 500,
//         height: 500,
//         cut: true
//     })
// })

// ------------------------

// 挂断通话
function hangup() {
    console.log("hangup...")

    // beCalledInfo = null;
    // beCalling = false;

    // 5.6.0版本开始的sdk，为了减轻开发者负担，直接调用hangup接口即可完成清理工作
    netcall.hangup();
}

// // 收到挂断通知
// netcall.on("hangup", function (obj) {
//     // timetag	string	时间戳
//     // channelId	string	当前通话的唯一 id 值
//     // account	string	对方账号
//     // type	number	挂断类型：0 为正常挂断，-1 为异常挂断(超时等)

//     console.log('on hangup', obj);

//     // 判断需要挂断的通话是否是当前正在进行中的通话
//     if (!beCalledInfo || beCalledInfo.channelId === obj.channelId) {
//         // // 清理工作
//         // resetWhenHangup();

//         hangup()
//     }
// })

// ------------------------

// // sdk内部出现错误或者服务器反馈一些通知
// netcall.on('error', function (obj) {
//     // code	number	错误码
//     // desc	string	错误信息描述

//     console.log('sdk反馈错误信息', obj);

//     if (obj.code) {
//         if (obj.code == 509) {
//             console.warn('你被提出房间了');
//         }
//         else if (obj.code == 500) {
//             console.warn('你的web不支持H264视频编码，无法进行呼叫，请检测浏览器的H264插件是否正常');
//         }
//     }
// });

// ------------------------

// 音视频清理
// function xx(){}
// >>> 5.6.0版本开始的sdk为了减轻开发者工作，
//     在点对点通话中调用完hangup接口即可，sdk内部会做一系列的清除工作；
//     多人通话中调用完leaveChannel接口即可，sdk内部会做一系列的清除工作

// ------------------------------------

export { nim, netcall, init, destroy, call, accept, reject, startPublishVideo, hangup }
