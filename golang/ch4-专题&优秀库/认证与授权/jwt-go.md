## 生成 Token

```
claims := &jwt.StandardClaims{
    NotBefore: int64(time.Now().Unix()),
    ExpiresAt: int64(time.Now().Unix() + 1000),
    Issuer:    "Bitch",
}

token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
ss, err := token.SignedString([]byte(SecretKey))
if err != nil {
    logs.Error(err)
    return ""
}
```

---------------------

```
token := jwt.New(jwt.SigningMethodHS256)
claims := jwt.StandardClaims{
    ExpiresAt: time.Now().Add(time.Minute * 10).Unix(),
}
token.Claims = claims

tokenString, err := token.SignedString([]byte(SecretKey))
if err != nil {
    w.WriteHeader(http.StatusInternalServerError)
    fmt.Fprintln(w, "Error while signing the token")
    fatal(err)
}
```

##

```
// 校验token是否有效
func CheckToken(token string) bool {
	_, err := jwt.Parse(token, func(*jwt.Token) (interface{}, error) {
		return key, nil
	})
	if err != nil {
		fmt.Println("parase with claims failed.", err)
		return false
	}
	return true
}
```

```
token, err := request.ParseFromRequest(r, request.AuthorizationHeaderExtractor,
    func(token *jwt.Token) (interface{}, error) {
        return []byte(SecretKey), nil
})

if err == nil {
    if token.Valid {
        next(w, r)
    } else {
        w.WriteHeader(http.StatusUnauthorized)
        fmt.Fprint(w, "Token is not valid")
    }
} else {
    w.WriteHeader(http.StatusUnauthorized)
    fmt.Fprint(w, "Unauthorized access to this resource")
}
```

