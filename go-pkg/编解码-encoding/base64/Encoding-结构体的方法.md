```
func (enc *Encoding) Decode(dst, src []byte) (n int, err error)
func (enc *Encoding) DecodeString(s string) ([]byte, error)
func (enc *Encoding) DecodedLen(n int) int

func (enc *Encoding) Encode(dst, src []byte)
func (enc *Encoding) EncodeToString(src []byte) string
func (enc *Encoding) EncodedLen(n int) int

func (enc Encoding) Strict() *Encoding

func (enc Encoding) WithPadding(padding rune) *Encoding
```