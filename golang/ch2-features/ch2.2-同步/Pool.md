

// Put adds x to the pool.
func (p *Pool) Put(x interface{})


// Get selects an arbitrary item from the Pool, removes it from the Pool, and returns it to the caller.
func (p *Pool) Get() interface{}