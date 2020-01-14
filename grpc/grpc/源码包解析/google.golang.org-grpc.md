https://github.com/grpc/grpc-go

---

"google.golang.org/grpc"
"google.golang.org/grpc/codes"
"google.golang.org/grpc/status"

---

## google.golang.org/grpc/codes

> `codes.go`

```
type Code uint32

const (
	OK Code = 0
	Canceled Code = 1
	Unknown Code = 2
	InvalidArgument Code = 3
	DeadlineExceeded Code = 4
	NotFound Code = 5
	AlreadyExists Code = 6
	PermissionDenied Code = 7
	ResourceExhausted Code = 8
	FailedPrecondition Code = 9
	Aborted Code = 10
	OutOfRange Code = 11
	Unimplemented Code = 12
	Internal Code = 13
	Unavailable Code = 14
	DataLoss Code = 15
	Unauthenticated Code = 16
	_maxCode = 17
)

var strToCode = map[string]Code{
	`"OK"`: OK,
	`"CANCELLED"`:/* [sic] */ Canceled,
	`"UNKNOWN"`:             Unknown,
	`"INVALID_ARGUMENT"`:    InvalidArgument,
	`"DEADLINE_EXCEEDED"`:   DeadlineExceeded,
	`"NOT_FOUND"`:           NotFound,
	`"ALREADY_EXISTS"`:      AlreadyExists,
	`"PERMISSION_DENIED"`:   PermissionDenied,
	`"RESOURCE_EXHAUSTED"`:  ResourceExhausted,
	`"FAILED_PRECONDITION"`: FailedPrecondition,
	`"ABORTED"`:             Aborted,
	`"OUT_OF_RANGE"`:        OutOfRange,
	`"UNIMPLEMENTED"`:       Unimplemented,
	`"INTERNAL"`:            Internal,
	`"UNAVAILABLE"`:         Unavailable,
	`"DATA_LOSS"`:           DataLoss,
	`"UNAUTHENTICATED"`:     Unauthenticated,
}
```

```
// UnmarshalJSON unmarshals b into the Code.
func (c *Code) UnmarshalJSON(b []byte) error
```

> `code_string.go`

```
func (c Code) String() string
```

## google.golang.org/grpc/status

> `status.go`

```
// Status represents an RPC status code, message, and details.  It is immutable
// and should be created with New, Newf, or FromProto.
type Status struct {
	s *spb.Status
}
```

```
// New returns a Status representing c and msg.
func New(c codes.Code, msg string) *Status {
	return &Status{s: &spb.Status{Code: int32(c), Message: msg}}
}

// Newf returns New(c, fmt.Sprintf(format, a...)).
func Newf(c codes.Code, format string, a ...interface{}) *Status {
	return New(c, fmt.Sprintf(format, a...))
}

// Error returns an error representing c and msg.  If c is OK, returns nil.
func Error(c codes.Code, msg string) error {
	return New(c, msg).Err()
}

// Errorf returns Error(c, fmt.Sprintf(format, a...)).
func Errorf(c codes.Code, format string, a ...interface{}) error {
	return Error(c, fmt.Sprintf(format, a...))
}
```

