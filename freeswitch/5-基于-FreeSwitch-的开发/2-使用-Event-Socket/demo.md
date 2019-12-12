

```
# nc localhost 8021
Content-Type: auth/request

auth ClueCon

Content-Type: command/reply
Reply-Text: +OK accepted


api version

Content-Type: api/response
Content-Length: 49

FreeSWITCH Version 1.10.0-release~64bit ( 64bit)


api status

Content-Type: api/response
Content-Length: 340

UP 0 years, 19 days, 19 hours, 51 minutes, 1 second, 231 milliseconds, 979 microseconds
FreeSWITCH (Version 1.10.0-release  64bit) is ready
213 session(s) since startup
0 session(s) - peak 3, last 5min 0
0 session(s) per Sec out of max 30, peak 2, last 5min 0
1000 session(s) max
min idle cpu 0.00/99.90
Current Stack Size/Max 240K/8192K


api uptime

Content-Type: api/response
Content-Length: 8

1713106


api sofia status

Content-Type: api/response
Content-Length: 822

                     Name	   Type	                                      Data	State
=================================================================================================
            external-ipv6	profile	                  sip:mod_sofia@[::1]:5080	RUNNING (0)
           192.168.160.46	  alias	                                  internal	ALIASED
                 external	profile	          sip:mod_sofia@222.85.230.14:5080	RUNNING (0)
    external::example.com	gateway	                   sip:joeuser@example.com	NOREG
            internal-ipv6	profile	                  sip:mod_sofia@[::1]:5060	RUNNING (0)
                 internal	profile	          sip:mod_sofia@222.85.230.14:5060	RUNNING (0)
=================================================================================================
4 profiles 1 alias
```