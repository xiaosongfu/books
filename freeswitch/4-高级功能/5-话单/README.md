

* mod_cdr_csv      -> cdr_csv.conf.xml      -> 将话单以各种模板格式保存到 log/cdr-csv 目录下，如 1000.csv
* mod_cdr_mongodb  -> cdr_mongodb.conf.xml  -> 将话单保存到 mongodb 数据库
* mod_cdr_pg_csv   -> cdr_pg_csv.conf.xml   -> 将话单保存到 pg 数据库
* mod_cdr_sqlite   -> cdr_sqlite.conf.xml   -> 将话单保存到 sqlite 数据库

mod_xml_cdr    -> 该模块实现每次生成一个话单后将话单信息通过 http 请求发送到指定的服务器 -> xml 格式
mod_json_cdr-> 该模块实现每次生成一个话单后将话单信息通过 http 请求发送到指定的服务器 -> json 格式
mod_format_cdr-> 该模块实现每次生成一个话单后将话单信息通过 http 请求发送到指定的服务器 -> json/xml 格式

这3种方法要求服务器返回 200 OK，不然 FreeSwitch 会一直等待，从而产生很大僵尸 channel。如果写入话单失败，FreeSwitch 会将该话单存入一个本地的 xml 文件中，以免丢失话单，默认位置为：log/xml_cdr。


mod_odbc_cdr
