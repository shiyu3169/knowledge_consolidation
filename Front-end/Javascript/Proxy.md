In JavaScript, a Proxy is a special object that allows you to intercept and customize the fundamental operations on another object (called the "target" object) such as reading or writing properties, calling methods, or accessing object metadata. This is done by defining a set of "traps" that are called when certain operations are performed on the proxy object, which can then handle those operations in a custom way before passing them on to the target object.

The Proxy object is created using the new Proxy(target, handler) constructor, which takes two arguments:

* target is the object that the proxy wraps and intercepts operations for
* handler is an object that contains the traps for each operation that the proxy can intercept and handle
Here is an example of creating a Proxy object:
```
const targetObj = {a: 1, b: 2};
const handler = {
  get: function(target, prop, receiver) {
    console.log(`Getting property '${prop}'`);
    return target[prop];
  },
  set: function(target, prop, value, receiver) {
    console.log(`Setting property '${prop}' to '${value}'`);
    target[prop] = value;
    return true;
  }
};
const proxyObj = new Proxy(targetObj, handler);
```

In this example, we create a target object targetObj and a handler object handler that defines two traps: get and set. The get trap intercepts property access on the proxy object and logs a message to the console before returning the property value of the target object. The set trap intercepts property assignment on the proxy object and logs a message to the console before setting the property value of the target object.

We then create a `Proxy` object `proxyObj` that wraps the `targetObj` object with the `handler` object. Now, any property access or assignment on the `proxyObj` object will be intercepted by the corresponding trap functions defined in the `handler` object.

```
console.log(proxyObj.a); // logs "Getting property 'a'" and returns 1
proxyObj.b = 3; // logs "Setting property 'b' to '3'"
console.log(targetObj.b); // logs 3
```

In this example, accessing the `a` property of the `proxyObj` object logs a message and returns the value of the a property of the `targetObj` object. Setting the `b` property of the `proxyObj` object logs a message and sets the `b` property of the `targetObj` object to 3. Accessing the `b` property of the `targetObj` object afterwards returns 3.