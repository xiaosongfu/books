
```
# tree
.
|-- autoload_configs
|   |-- abstraction.conf.xml
|   |-- acl.conf.xml
|   |-- alsa.conf.xml
|   |-- amqp.conf.xml
|   |-- amr.conf.xml
|   |-- amrwb.conf.xml
|   |-- av.conf.xml
|   |-- avmd.conf.xml
|   |-- blacklist.conf.xml
|   |-- callcenter.conf.xml
|   |-- cdr_csv.conf.xml
|   |-- cdr_mongodb.conf.xml
|   |-- cdr_pg_csv.conf.xml
|   |-- cdr_sqlite.conf.xml
|   |-- cepstral.conf.xml
|   |-- cidlookup.conf.xml
|   |-- conference.conf.xml
|   |-- conference_layouts.conf.xml
|   |-- console.conf.xml
|   |-- curl.conf.xml
|   |-- db.conf.xml
|   |-- dialplan_directory.conf.xml
|   |-- dingaling.conf.xml
|   |-- directory.conf.xml
|   |-- distributor.conf.xml
|   |-- easyroute.conf.xml
|   |-- enum.conf.xml
|   |-- erlang_event.conf.xml
|   |-- event_multicast.conf.xml
|   |-- event_socket.conf.xml
|   |-- fax.conf.xml
|   |-- fifo.conf.xml
|   |-- format_cdr.conf.xml
|   |-- graylog2.conf.xml
|   |-- hash.conf.xml
|   |-- hiredis.conf.xml
|   |-- httapi.conf.xml
|   |-- http_cache.conf.xml
|   |-- ivr.conf.xml
|   |-- java.conf.xml
|   |-- kazoo.conf.xml
|   |-- lcr.conf.xml
|   |-- local_stream.conf.xml
|   |-- logfile.conf.xml
|   |-- lua.conf.xml
|   |-- memcache.conf.xml
|   |-- modules.conf.xml
|   |-- mongo.conf.xml
|   |-- msrp.conf.xml
|   |-- nibblebill.conf.xml
|   |-- opal.conf.xml
|   |-- opus.conf.xml
|   |-- oreka.conf.xml
|   |-- osp.conf.xml
|   |-- perl.conf.xml
|   |-- pocketsphinx.conf.xml
|   |-- portaudio.conf.xml
|   |-- post_load_modules.conf.xml
|   |-- pre_load_modules.conf.xml
|   |-- presence_map.conf.xml
|   |-- python.conf.xml
|   |-- redis.conf.xml
|   |-- rss.conf.xml
|   |-- rtmp.conf.xml
|   |-- sangoma_codec.conf.xml
|   |-- shout.conf.xml
|   |-- skinny.conf.xml
|   |-- smpp.conf.xml
|   |-- sms_flowroute.conf.xml
|   |-- sofia.conf.xml
|   |-- spandsp.conf.xml
|   |-- switch.conf.xml
|   |-- syslog.conf.xml
|   |-- timezones.conf.xml
|   |-- translate.conf.xml
|   |-- tts_commandline.conf.xml
|   |-- unicall.conf.xml
|   |-- unimrcp.conf.xml
|   |-- v8.conf.xml
|   |-- verto.conf.xml
|   |-- voicemail.conf.xml
|   |-- voicemail_ivr.conf.xml
|   |-- vpx.conf.xml
|   |-- xml_cdr.conf.xml
|   |-- xml_curl.conf.xml
|   |-- xml_rpc.conf.xml
|   |-- xml_scgi.conf.xml
|   `-- zeroconf.conf.xml
|-- chatplan
|   `-- default.xml
|-- dialplan
|   |-- default
|   |   |-- 00_ladspa.xml
|   |   |-- 00_pizza_demo.xml
|   |   |-- 01_example.com.xml
|   |   `-- 01_Talking_Clock.xml
|   |-- default.xml
|   |-- features.xml
|   |-- public
|   |   `-- 00_inbound_did.xml
|   |-- public.xml
|   |-- skinny-patterns
|   |   |-- 20-Demo.xml
|   |   |-- 20-Local_extension.xml
|   |   |-- 90-External.xml
|   |   `-- 99-Default_Drop.xml
|   `-- skinny-patterns.xml
|-- directory
|   |-- default
|   |   |-- 1000.xml
|   |   |-- 1001.xml
|   |   |-- 1002.xml
|   |   |-- 1003.xml
|   |   |-- 1004.xml
|   |   |-- 1005.xml
|   |   |-- 1006.xml
|   |   |-- 1007.xml
|   |   |-- 1008.xml
|   |   |-- 1009.xml
|   |   |-- 1010.xml
|   |   |-- 1011.xml
|   |   |-- 1012.xml
|   |   |-- 1013.xml
|   |   |-- 1014.xml
|   |   |-- 1015.xml
|   |   |-- 1016.xml
|   |   |-- 1017.xml
|   |   |-- 1018.xml
|   |   |-- 1019.xml
|   |   |-- brian.xml
|   |   |-- default.xml
|   |   |-- example.com.xml
|   |   `-- skinny-example.xml
|   `-- default.xml
|-- extensions.conf
|-- freeswitch.xml
|-- fur_elise.ttml
|-- ivr_menus
|   |-- demo_ivr.xml
|   `-- new_demo_ivr.xml
|-- jingle_profiles
|   |-- client.xml
|   `-- server.xml
|-- lang
|   |-- de
|   |   |-- demo
|   |   |   `-- demo.xml
|   |   |-- de.xml
|   |   `-- vm
|   |       |-- sounds.xml
|   |       `-- tts.xml
|   |-- en
|   |   |-- demo
|   |   |   |-- demo-ivr.xml
|   |   |   |-- demo.xml
|   |   |   |-- funnies.xml
|   |   |   `-- new-demo-ivr.xml
|   |   |-- dir
|   |   |   |-- sounds.xml
|   |   |   `-- tts.xml
|   |   |-- en.xml
|   |   |-- ivr
|   |   |   `-- sounds.xml
|   |   `-- vm
|   |       |-- sounds.xml
|   |       |-- tts.xml
|   |       `-- voicemail_ivr.xml
|   |-- es
|   |   |-- demo
|   |   |   |-- demo-es-ES.xml
|   |   |   |-- demo-es-MX.xml
|   |   |   |-- demo-ivr-es-ES.xml
|   |   |   `-- demo-ivr-es-MX.xml
|   |   |-- dir
|   |   |   |-- sounds-es-ES.xml
|   |   |   |-- sounds-es-MX.xml
|   |   |   |-- tts-es-ES.xml
|   |   |   `-- tts-es-MX.xml
|   |   |-- es_ES.xml
|   |   |-- es_MX.xml
|   |   `-- vm
|   |       |-- sounds-es-ES.xml
|   |       |-- sounds-es-MX.xml
|   |       |-- tts-es-ES.xml
|   |       `-- tts-es-MX.xml
|   |-- fr
|   |   |-- demo
|   |   |   `-- demo.xml
|   |   |-- dir
|   |   |   |-- sounds.xml
|   |   |   `-- tts.xml
|   |   |-- fr.xml
|   |   `-- vm
|   |       `-- sounds.xml
|   |-- he
|   |   |-- demo
|   |   |   |-- demo-ivr.xml
|   |   |   `-- demo.xml
|   |   |-- dir
|   |   |   `-- sounds.xml
|   |   |-- he.xml
|   |   `-- vm
|   |       `-- sounds.xml
|   |-- pt
|   |   |-- demo
|   |   |   |-- demo-ivr-pt-BR.xml
|   |   |   |-- demo-ivr-pt-PT.xml
|   |   |   |-- demo-pt-BR.xml
|   |   |   `-- demo-pt-PT.xml
|   |   |-- dir
|   |   |   |-- sounds-pt-BR.xml
|   |   |   |-- sounds-pt-PT.xml
|   |   |   |-- tts-pt-BR.xml
|   |   |   `-- tts-pt-PT.xml
|   |   |-- pt_BR.xml
|   |   |-- pt_PT.xml
|   |   `-- vm
|   |       |-- sounds-pt-BR.xml
|   |       |-- sounds-pt-PT.xml
|   |       |-- tts-pt-BR.xml
|   |       `-- tts-pt-PT.xml
|   |-- ru
|   |   |-- demo
|   |   |   |-- demo-ivr.xml
|   |   |   `-- demo.xml
|   |   |-- dir
|   |   |   |-- sounds.xml
|   |   |   `-- tts.xml
|   |   |-- ru.xml
|   |   `-- vm
|   |       |-- sounds.xml
|   |       `-- tts.xml
|   `-- sv
|       |-- sv.xml
|       `-- vm
|           `-- sounds.xml
|-- mime.types
|-- mrcp_profiles
|   |-- loquendo-7-mrcp-v2.xml
|   |-- nuance-1.0.0-mrcp-v1.xml
|   |-- nuance-5.0-mrcp-v1.xml
|   |-- nuance-5.0-mrcp-v2.xml
|   |-- unimrcpserver-mrcp-v1.xml
|   |-- vestec-mrcp-v1.xml
|   `-- voxeo-prophecy-8.0-mrcp-v1.xml
|-- notify-voicemail.tpl
|-- sip_profiles
|   |-- external
|   |   `-- example.xml
|   |-- external-ipv6
|   |   `-- example.xml
|   |-- external-ipv6.xml
|   |-- external.xml
|   |-- internal-ipv6.xml
|   `-- internal.xml
|-- skinny_profiles
|   `-- internal.xml
|-- tetris.ttml
|-- vars.xml
|-- voicemail.tpl
`-- web-vm.tpl

46 directories, 216 files
```
