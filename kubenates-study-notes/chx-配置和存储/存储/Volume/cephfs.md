```
volumes:
  - name: ceph-volume
  cephfs:
    path: /some/path/in/side/cephfs
    monitors: "10.10.154.78:6789:
    secretFile: "/etc/ceph/admin.secret"
```