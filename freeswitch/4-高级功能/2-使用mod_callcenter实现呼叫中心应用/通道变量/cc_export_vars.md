

导出变量到坐席 leg


Export variables to the b-leg(s) of call center (the agents)

This is necessary because mod_callcenter originates B-leg calls in its own separate thread, therefore it has no access to variables set in the A-leg (as 'bridge' would).

Example usage:

```
<action application="set" data="hold_music=local_stream://example_moh"/>
<action application="set" data="origination_caller_id_name=Call Center"/>
<action application="set" data="origination_caller_id_number=9000"/>
<action application="set" data="cc_export_vars=hold_music,origination_caller_id_name,origination_caller_id_number"/>
<action application="callcenter" data="9000@callcenter"/>
```
