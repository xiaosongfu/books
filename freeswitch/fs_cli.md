
https://freeswitch.org/confluence/display/FREESWITCH/Command-Line+Interface+fs_cli

---

---

使用 -x 参数可以在执行一条命令后退出，这在编写脚本时非常有用：

```
fs_cli -x "version"
```

---

退出：`...`


/quit /bye /exit ctrl+D 都可以退出 fs_cli


其他一些以 / 开头的指令与 Event Socket 中相关的命令相同：

```
/event    -- 开启订阅事件
/noevent  -- 关闭事件订阅

/nixevent -- 取消订阅

/log info -- 设置 log 级别，如：`/log info`、`/log debug` 等
/nolog    -- 关闭 log

/filter   -- 过滤事件
```

---

```
$ fs_cli -x "help"

Valid Commands:

...,,Shutdown,mod_commands
acl,<ip> <list_name>,Compare an ip to an acl list,mod_commands
alias,[add|stickyadd] <alias> <command> | del [<alias>|*],Alias,mod_commands
banner,,Return the system banner,mod_commands
bg_system,<command>,Execute a system command in the background,mod_commands
bgapi,<command>[ <arg>],Execute an api command in a thread,mod_commands
break,<uuid> [all],uuid_break,mod_commands
cdr_csv,parameters,cdr_csv controls,mod_cdr_csv
chat,<proto>|<from>|<to>|<message>|[<content-type>],chat,mod_dptools
coalesce,[^^<delim>]<value1>,<value2>,...,Return first nonempty parameter,mod_commands
complete,add <word>|del [<word>|*],Complete,mod_commands
cond,<expr> ? <true val> : <false val>,Evaluate a conditional,mod_commands
conference,,Conference module commands,mod_conference
console_complete,<line>,,mod_commands
console_complete_xml,<line>,,mod_commands
create_uuid,<uuid> <other_uuid>,Create a uuid,mod_commands
db,[insert|delete|select|exists|count|list]/<realm>/<key>/<value>,db get/set,mod_db
db_cache,status,Manage db cache,mod_commands
domain_data,<domain> [var|param|attr] <name>,Find domain data,mod_commands
domain_exists,<domain>,Check if a domain exists,mod_commands
echo,<data>,Echo,mod_commands
enum,,ENUM,mod_enum
enum_auto,,ENUM,mod_enum
escape,<data>,Escape a string,mod_commands
eval,[uuid:<uuid> ]<expression>,eval (noop),mod_commands
event_channel_broadcast,<channel> <json>,Broadcast,mod_commands
event_sink,<web data>,event_sink,mod_event_socket
expand,[uuid:<uuid> ]<cmd> <args>,Execute an api with variable expansion,mod_commands
expr,<expr>,Eval an expression,mod_expr
fifo,list|list_verbose|count|debug|status|has_outbound|importance [<fifo name>]|reparse [del_all],Return data about a fifo,mod_fifo
fifo_add_outbound,<node> <url> [<priority>],Add outbound members to a fifo,mod_fifo
fifo_check_bridge,<uuid>|<outbound_id>,check if uuid is in a bridge,mod_fifo
fifo_member,[add <fifo_name> <originate_string> [<simo_count>] [<timeout>] [<lag>] [<expires>] [<taking_calls>] | del <fifo_name> <originate_string>],Add members to a fifo,mod_fifo
file_exists,<file>,Check if a file exists on server,mod_commands
find_user_xml,<key> <user> <domain>,Find a user,mod_commands
fsctl,[recover|send_sighup|hupall|pause [inbound|outbound]|resume [inbound|outbound]|shutdown [cancel|elegant|asap|now|restart]|sps|sps_peak_reset|sync_clock|sync_clock_when_idle|reclaim_mem|max_sessions|min_dtmf_duration [num]|max_dtmf_duration [num]|default_dtmf_duration [num]|min_idle_cpu|loglevel [level]|debug_level [level]],FS control messages,mod_commands
getcputime,[reset],Gets CPU time in milliseconds (user,kernel),mod_commands
getenv,<name>,getenv,mod_commands
gethost,,gethostbyname,mod_commands
global_getvar,<var>,Get global var,mod_commands
global_setvar,<var>=<value> [=<value2>],Set global var,mod_commands
group,[insert|delete|call]:<group name>:<url>,group [insert|delete|call],mod_db
group_call,<group>[@<domain>],Generate a dial string to call a group,mod_commands
hash,[insert|delete|select]/<realm>/<key>/<value>,hash get/set,mod_hash
hash_dump,all|limit|db [<realm>],dump hash/limit_hash data (used for synchronization),mod_hash
hash_remote,list|kill [name]|rescan,hash remote,mod_hash
help,,Show help for all the api commands,mod_commands
host_lookup,<hostname>,Lookup host,mod_commands
hostname,,Return the system hostname,mod_commands
httapi,[debug_on|debug_off],HT-TAPI Hypertext Telephony API,mod_httapi
hupall,<cause> [<var> <value>] [<var2> <value2>],hupall,mod_commands
in_group,<user>[@<domain>] <group_name>,Determine if a user is in a group,mod_commands
interface_ip,[auto|ipv4|ipv6] <ifname>,Return the primary IP of an interface,mod_commands
is_lan_addr,<ip>,See if an ip is a lan addr,mod_commands
json,JSON,JSON API,mod_commands
limit_hash_usage,<realm> <id>,Deprecated: gets the usage count of a limited resource,mod_commands
limit_interval_reset,<backend> <realm> <resource>,Reset the interval counter for a limited resource,mod_commands
limit_reset,<backend>,Reset the counters of a limit backend,mod_commands
limit_status,<backend>,Get the status of a limit backend,mod_commands
limit_usage,<backend> <realm> <id>,Get the usage count of a limited resource,mod_commands
list_users,[group <group>] [domain <domain>] [user <user>] [context <context>],List Users configured in Directory,mod_commands
load,<mod_name>,Load Module,mod_commands
local_stream,<show|start|reload|stop|hup> <local_stream_name>,manage local streams,mod_local_stream
log,<level> <message>,Log,mod_commands
lua,<script>,run a script as an api function,mod_lua
luarun,<script>,run a script,mod_lua
md5,<data>,Return md5 hash,mod_commands
module_exists,<module>,Check if module exists,mod_commands
msleep,<milliseconds>,Sleep N milliseconds,mod_commands
msrp,debug <on|off>|restart,MSRP Functions,mod_commands
nat_map,[status|republish|reinit] | [add|del] <port> [tcp|udp] [static],Manage NAT,mod_commands
originate,<call url> <exten>|&<application_name>(<app_args>) [<dialplan>] [<context>] [<cid_name>] [<cid_num>] [<timeout_sec>],Originate a call,mod_commands
page,(var1=val1,var2=val2)<var1=val1,var2=val2><chan1>[:_:<chanN>],Send a file as a page,mod_dptools
pause,<uuid> <on|off>,Pause media on a channel,mod_commands
presence,[in|out] <user> <rpid> <message>,presence,mod_dptools
quote_shell_arg,<data>,Quote/escape a string for use on shell command line,mod_commands
reg_url,<user>@<realm>,,mod_commands
regex,<data>|<pattern>[|<subst string>][n|b],Evaluate a regex,mod_commands
reload,[-f] <mod_name>,Reload module,mod_commands
reloadacl,,Reload XML,mod_commands
reloadxml,,Reload XML,mod_commands
replace,<data>|<string1>|<string2>,Replace a string,mod_commands
say_string,<module_name>[.<ext>] <lang>[.<ext>] <say_type> <say_method> [<say_gender>] <text>,,mod_commands
sched_api,[+@]<time> <group_name> <command_string>[&],Schedule an api command,mod_commands
sched_broadcast,[[+]<time>|@time] <uuid> <path> [aleg|bleg|both],Schedule a broadcast event to a running call,mod_commands
sched_del,<task_id>|<group_id>,Delete a scheduled task,mod_commands
sched_hangup,[+]<time> <uuid> [<cause>],Schedule a running call to hangup,mod_commands
sched_transfer,[+]<time> <uuid> <extension> [<dialplan>] [<context>],Schedule a transfer for a running call,mod_commands
show,codec|endpoint|application|api|dialplan|file|timer|calls [count]|channels [count|like <match string>]|calls|detailed_calls|bridged_calls|detailed_bridged_calls|aliases|complete|chat|management|modules|nat_map|say|interfaces|interface_types|tasks|limits|status,Show various reports,mod_commands
shutdown,,Shutdown,mod_commands
signalwire,token | adoption | adopted | reload | update | debug <level> | kslog <on|off|logfile e.g. /tmp/ks.log>,SignalWire API,mod_signalwire
sofia,<cmd> <args>,Sofia Controls,mod_sofia
sofia_contact,[profile/]<user>@<domain>,Sofia Contacts,mod_sofia
sofia_count_reg,[profile/]<user>@<domain>,Count Sofia registration,mod_sofia
sofia_dig,<url>,SIP DIG,mod_sofia
sofia_gateway_data,<gateway_name> [ivar|ovar|var] <name>,Get data from a sofia gateway,mod_sofia
sofia_presence_data,[list|status|rpid|user_agent] [profile/]<user>@domain,Sofia Presence Data,mod_sofia
sofia_username_of,[profile/]<user>@<domain>,Sofia Username Lookup,mod_sofia
spandsp_start_tone_detect,<uuid> <name>,Start background tone detection with cadence,mod_spandsp
spandsp_stop_tone_detect,<uuid>,Stop background tone detection with cadence,mod_spandsp
sql_escape,<string>,Escape a string to prevent sql injection,mod_commands
start_tdd_detect,<uuid>,Start background tdd detection,mod_spandsp
status,,Show current status,mod_commands
stop_tdd_detect,<uuid>,Stop background tdd detection,mod_spandsp
strepoch,<string>,Convert a date string into epoch time,mod_dptools
strftime,<format_string>,strftime,mod_dptools
strftime_tz,<timezone_name> [<epoch>|][format string],Display formatted time of timezone,mod_commands
strmicroepoch,<string>,Convert a date string into micoepoch time,mod_dptools
stun,<stun_server>[:port] [<source_ip>[:<source_port]],Execute STUN lookup,mod_commands
switchname,,Return the switch name,mod_commands
system,<command>,Execute a system command,mod_commands
time_test,<mss> [count],Show time jitter,mod_commands
timer_test,<10|20|40|60|120> [<1..200>] [<timer_name>],Exercise FS timer,mod_commands
tolower,<string>,Lower Case a string,mod_commands
tone_detect,<uuid> <key> <tone_spec> [<flags> <timeout> <app> <args> <hits>],Start tone detection on a channel,mod_commands
toupper,<string>,Upper Case a string,mod_commands
unload,[-f] <mod_name>,Unload module,mod_commands
unsched_api,<task_id>,Unschedule an api command,mod_commands
uptime,[us|ms|s|m|h|d|microseconds|milliseconds|seconds|minutes|hours|days],Show uptime,mod_commands
url_decode,<string>,Url decode a string,mod_commands
url_encode,<string>,Url encode a string,mod_commands
user_data,<user>@<domain> [var|param|attr] <name>,Find user data,mod_commands
user_exists,<key> <user> <domain>,Find a user,mod_commands
uuid_answer,<uuid>,answer,mod_commands
uuid_audio,<uuid> [start [read|write] [mute|level <level>]|stop],uuid_audio,mod_commands
uuid_break,<uuid> [all],Break out of media sent to channel,mod_commands
uuid_bridge,,Bridge call legs,mod_commands
uuid_broadcast,<uuid> <path> [aleg|bleg|holdb|both],Execute dialplan application,mod_commands
uuid_buglist,<uuid>,List media bugs on a session,mod_commands
uuid_capture_text,<uuid> <on|off>,start/stop capture_text,mod_commands
uuid_chat,<uuid> <text>,Send a chat message,mod_commands
uuid_codec_debug,<uuid> audio|video <level>,Send codec a debug message,mod_commands
uuid_codec_param,<uuid> audio|video read|write <param> <val>,Send codec a param,mod_commands
uuid_debug_media,<uuid> <read|write|both|vread|vwrite|vboth|all> <on|off>,Debug media,mod_commands
uuid_deflect,<uuid> <uri>,Send a deflect,mod_commands
uuid_displace,<uuid> [start|stop] <path> [<limit>] [mux],Displace audio,mod_commands
uuid_display,<uuid> <display>,Update phone display,mod_commands
uuid_drop_dtmf,<uuid> [on | off ] [ mask_digits <digits> | mask_file <file>],Drop all DTMF or replace it with a mask,mod_commands
uuid_dual_transfer,<uuid> <A-dest-exten>[/<A-dialplan>][/<A-context>] <B-dest-exten>[/<B-dialplan>][/<B-context>],Transfer a session and its partner,mod_commands
uuid_dump,<uuid> [format],Dump session vars,mod_commands
uuid_early_ok,<uuid>,stop ignoring early media,mod_commands
uuid_exists,<uuid>,Check if a uuid exists,mod_commands
uuid_fileman,<uuid> <cmd>:<val>,Manage session audio,mod_commands
uuid_flush_dtmf,<uuid>,Flush dtmf on a given uuid,mod_commands
uuid_getvar,<uuid> <var>,Get a variable from a channel,mod_commands
uuid_hold,[off|toggle] <uuid> [<display>],Place call on hold,mod_commands
uuid_jitterbuffer,<uuid> [0|<min_msec>[:<max_msec>]],uuid_jitterbuffer,mod_commands
uuid_kill,<uuid> [cause],Kill channel,mod_commands
uuid_limit,<uuid> <backend> <realm> <resource> [<max>[/interval]] [number [dialplan [context]]],Increase limit resource,mod_commands
uuid_limit_release,<uuid> <backend> [realm] [resource],Release limit resource,mod_commands
uuid_loglevel,<uuid> <level>,Set loglevel on session,mod_commands
uuid_media,[off] <uuid>,Reinvite FS in or out of media path,mod_commands
uuid_media_3p,[off] <uuid>,Reinvite FS in or out of media path using 3pcc,mod_commands
uuid_media_reneg,<uuid>[ <codec_string>],Media negotiation,mod_commands
uuid_msrp_send,<msg>,send msrp text,mod_commands
uuid_outgoing_answer,<uuid>,Answer outgoing channel,mod_commands
uuid_park,<uuid>,Park channel,mod_commands
uuid_pause,<uuid> <on|off>,Pause media on a channel,mod_commands
uuid_phone_event,<uuid>,Send an event to the phone,mod_commands
uuid_pre_answer,<uuid>,pre_answer,mod_commands
uuid_preprocess,<>,Pre-process Channel,mod_commands
uuid_record,<uuid> [start|stop|mask|unmask] <path> [<limit>] [<recording_vars>],Record session audio,mod_commands
uuid_recovery_refresh,<uuid> <uri>,Send a recovery_refresh,mod_commands
uuid_recv_dtmf,<uuid> <dtmf_data>,Receive dtmf digits,mod_commands
uuid_redirect,<uuid> <uri>,Send a redirect,mod_commands
uuid_ring_ready,<uuid> [queued],Sending ringing to a channel,mod_commands
uuid_send_dtmf,<uuid> <dtmf_data>,Send dtmf digits,mod_commands
uuid_send_info,<uuid> [<mime_type> <mime_subtype>] <message>,Send info to the endpoint,mod_commands
uuid_send_message,<uuid> <message>,Send MESSAGE to the endpoint,mod_commands
uuid_send_tdd,<uuid> <text>,send tdd data to a uuid,mod_spandsp
uuid_send_text,<uuid> <text>,Send text in real-time,mod_commands
uuid_session_heartbeat,<uuid> [sched] [0|<seconds>],uuid_session_heartbeat,mod_commands
uuid_set_media_stats,<uuid>,Set media stats,mod_commands
uuid_setvar,<uuid> <var> [value],Set a variable,mod_commands
uuid_setvar_multi,<uuid> <var>=<value>;<var>=<value>...,Set multiple variables,mod_commands
uuid_simplify,<uuid>,Try to cut out of a call path / attended xfer,mod_commands
uuid_transfer,<uuid> [-bleg|-both] <dest-exten> [<dialplan>] [<context>],Transfer a session,mod_commands
uuid_video_bandwidth,<uuid> <bitrate>,Send video bandwidth,mod_commands
uuid_video_bitrate,<uuid> <bitrate>,Send video bitrate req.,mod_commands
uuid_video_refresh,<uuid> [auto|manual],Send video refresh.,mod_commands
uuid_write_png,,grab an image from a call,mod_png
uuid_xfer_zombie,<uuid>,Allow A leg to hangup and continue originating,mod_commands
uuid_zombie_exec,<uuid>,Set zombie_exec flag on the specified uuid,mod_commands
valet_info,[<lot name>],Valet Parking Info,mod_valet_parking
version,[short],Version,mod_commands
verto,syntax,Verto API,mod_verto
verto_contact,user@domain,Generate a verto endpoint dialstring,mod_verto
vm_boxcount,[profile/]<user>@<domain>[|[new|saved|new-urgent|saved-urgent|all]],vm_boxcount,mod_voicemail
vm_delete,<id>@<domain>[/profile] [<uuid>],vm_delete,mod_voicemail
vm_fsdb_auth_login,<profile> <domain> <user> <password>,vm_fsdb_auth_login,mod_voicemail
vm_fsdb_msg_count,<format> <profile> <domain> <user> <folder>,vm_fsdb_msg_count,mod_voicemail
vm_fsdb_msg_delete,<profile> <domain> <user> <uuid>,vm_fsdb_msg_delete,mod_voicemail
vm_fsdb_msg_email,<profile> <domain> <user> <uuid> <email>,vm_fsdb_msg_email,mod_voicemail
vm_fsdb_msg_forward,<profile> <domain> <user> <uuid> <dst_domain> <dst_user> [prepend_file_location],vm_fsdb_msg_forward,mod_voicemail
vm_fsdb_msg_get,<format> <profile> <domain> <user> <uuid>,vm_fsdb_msg_get,mod_voicemail
vm_fsdb_msg_list,<format> <profile> <domain> <user> <folder> <filter> [msg-order = ASC | DESC],vm_fsdb_msg_list,mod_voicemail
vm_fsdb_msg_purge,<profile> <domain> <user>,vm_fsdb_msg_purge,mod_voicemail
vm_fsdb_msg_save,<profile> <domain> <user> <uuid>,vm_fsdb_msg_save,mod_voicemail
vm_fsdb_msg_undelete,<profile> <domain> <user> <uuid>,vm_fsdb_msg_undelete,mod_voicemail
vm_fsdb_pref_greeting_get,<format> <profile> <domain> <user> [slot],vm_fsdb_pref_greeting_get,mod_voicemail
vm_fsdb_pref_greeting_set,<profile> <domain> <user> <slot> [file-path],vm_fsdb_pref_greeting_set,mod_voicemail
vm_fsdb_pref_password_set,<profile> <domain> <user> <password>,vm_fsdb_pref_password_set,mod_voicemail
vm_fsdb_pref_recname_set,<profile> <domain> <user> <file-path>,vm_fsdb_pref_recname_set,mod_voicemail
vm_inject,[group=<group>[@domain]|domain=<domain>|<box>[@<domain>]] <sound_file> [<cid_num>] [<cid_name>],vm_inject,mod_voicemail
vm_list,<id>@<domain>[/profile] [xml],vm_list,mod_voicemail
vm_prefs,[profile/]<user>@<domain>[|[name_path|greeting_path|password]],vm_prefs,mod_voicemail
vm_read,<id>@<domain>[/profile] <read|unread> [<uuid>],vm_read,mod_voicemail
voicemail,rss [<host> <port> <uri> <user> <domain>] | [load|unload|reload] <profile> [reloadxml],voicemail,mod_voicemail
voicemail_inject,[group=<group>[@domain]|domain=<domain>|<box>[@<domain>]] <sound_file> [<cid_num>] [<cid_name>],voicemail_inject,mod_voicemail
xml_flush_cache,<id> <key> <val>,Clear xml cache,mod_commands
xml_locate,[root | <section> <tag> <tag_attr_name> <tag_attr_val>],Find some xml,mod_commands
xml_wrap,<command> <args>,Wrap another api command in xml,mod_commands
```