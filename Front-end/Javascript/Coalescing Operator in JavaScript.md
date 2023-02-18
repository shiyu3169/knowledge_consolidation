With the latest release of version 14, the Nullish Coalescing Operator (??) is now supported in NodeJS. In this post let us see what is the use case of this operator and how is it different from the logical OR.

Logical Or (||)
```
const paginate = (options = {}) => {
  return [1, 2, 3, 4, 5].splice(0, options.limit || 3);
}

paginate(1); // expected: [1], output: [1]
paginate(); // expected: [1, 2, 3], output: [1, 2, 3]
paginate(0); // expected: [], output: [1, 2, 3]
```

How the logical or operator functions is, it returns the right hand value if the left hand value coerce to false. And that not only includes undefined and null but also 0 and ''.

In many of our use cases, like the one above this causes unexpected results and we end up using the typeof operator.

Nullish Coalescing Operator (??)
```
This solves the problem for us. This operators returns the right hand value only if the left hand value is either null or undefined.
const paginate = (options = {}) => {
  return [1, 2, 3, 4, 5].splice(0, options.limit ?? 3);
}

paginate(1); // expected: [1], output: [1]
paginate(); // expected: [1, 2, 3], output: [1, 2, 3]
paginate(0); // expected: [], output: []
```
Share your quick JavaScript bites in comments.