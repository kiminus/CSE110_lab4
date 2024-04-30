### Question 1 & 2

```
values add: 20 //line 9
final result: 20 //line 13
```

> this works because it is declared with `var`, which can exist in its parent scope (elevated to function scope)
> there should be a single whitespace between `:` and `20`

### Question 3 & 4

```
values add: 20 //line 9
Uncaught ReferenceError ReferenceError: result is not defined //line 13
```

> question 4 result an `ReferenceError` because variable declared with `let` is only visible in its scope, and not visible in its parent/ancestors

### Question 5 & 6
```
Uncaught TypeError TypeError: Assignment to constant variable.
// line 13 will not run since exited prematurely 
```

> question 5 result an `TypeError` because variable declared with `const` cannot be modified

> question 6, or line 13 would not run since JavaScript Error handling will throw the exception from the bug line all the way back to the top. Since there is no `try-catch` statements to control the exception, it would terminate the program after line 9