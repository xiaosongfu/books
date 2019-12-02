
```
# certbot certonly
Saving debug log to /var/log/letsencrypt/letsencrypt.log

How would you like to authenticate with the ACME CA?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: Spin up a temporary webserver (standalone)
2: Place files in webroot directory (webroot)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 1
Plugins selected: Authenticator standalone, Installer None
Starting new HTTPS connection (1): acme-v02.api.letsencrypt.org
Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
to cancel): sip.xiaosongfu.com
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for sip.xiaosongfu.com
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/sip.xiaosongfu.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/sip.xiaosongfu.com/privkey.pem
   Your cert will expire on 2020-03-01. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```


```
$ cd /etc/letsencrypt/live/sip.xiaosongfu.com/

$ echo '' >> /etc/freeswitch/tls/wss.pem && cat cert.pem >> /etc/freeswitch/tls/wss.pem && cat privkey.pem >> /etc/freeswitch/tls/wss.pem && cat chain.pem >> /etc/freeswitch/tls/wss.pem
```
