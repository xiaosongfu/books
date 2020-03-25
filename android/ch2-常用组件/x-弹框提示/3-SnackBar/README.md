https://developer.android.com/training/snackbar

---

```
Snackbar.make(
        findViewById(R.id.myCoordinatorLayout),
        R.string.email_sent,
        Snackbar.LENGTH_SHORT
).show()
```


```
val mySnackbar = Snackbar.make(findViewById(R.id.myCoordinatorLayout),
                                   R.string.email_archived, Snackbar.LENGTH_SHORT)
    mySnackbar.setAction(R.string.undo_string, MyUndoListener())
    mySnackbar.show()
```
