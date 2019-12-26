https://github.com/sanity-io/litter

---

This :

```
type Person struct {
	Name   string
	Age    int
	Parent *Person
}

litter.Dump(Person{
	Name:   "Bob",
	Age:    20,
	Parent: &Person{
		Name: "Jane",
		Age:  50,
	},
})
```

will output :

```
Person{
	Name: "Bob",
	Age: 20,
	Parent: &Person{
		Name: "Jane",
		Age: 50,
	},
}
```
