const object1 = { 
    a: 10, 
    b: 20, 
    c: function () { 
    console.log(this.a + this.b); 
    }, }; 
    const func = object1.c.bind(object1); 
    func();
    