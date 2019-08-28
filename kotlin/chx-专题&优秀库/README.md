https://github.com/matrix-org/synapse

https://github.com/matrix-org/matrix-js-sdk
https://github.com/matrix-org/matrix-react-sdk

https://github.com/matrix-org/matrix-android-sdk
https://github.com/matrix-org/matrix-ios-sdk


---


https://github.com/vector-im/riot-web/

https://github.com/vector-im/riot-android
https://github.com/vector-im/riot-ios


https://github.com/vector-im/riotX-android  Android Matrix SDK & Riot rewrites

---


```
client <----> homeserver <=====================> homeserver <----> client
       https://somewhere.org/_matrix      https://elsewhere.net/_matrix
```

---


每个用户连接到一台服务器，这是他们的主服务器。用户可以参与在任何Matrix服务器上创建的房间，因为每个服务器都与其他Matrix服务器联合。这意味着您可以与任何服务器上的任何人通话。这也意味着您可以托管自己的服务器，让您可以控制所有数据。自托管还使您能够自定义您的服务器以满足您的需求，包括让您能够桥接到其他聊天网络（如IRC，XMPP，Discord，Telegram等）或托管机器人。

在房间中发送的每条消息都将同步到参与该房间的所有其他服务器。如果一台服务器脱机，房间里的其他人都可以继续通话。一旦该服务器重新联机，它将被发送它在关闭时丢失的所有消息。