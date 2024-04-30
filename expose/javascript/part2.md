### question 1

```
3
```

> `i` is visible since it is declared by `var`. Line 12 will only run when for loop is completed, that is when its termination condition is invalid, or `i = 3`

### Question 2

```
150
```

> similarly, `dp` records the output when input is the price of last element in `discounted`, or `300 * 0.5 = 150`

### Question 3

```
150
```

> similarly, `fp` records the final price of last element. Since the `dp` is integer, `Nath.round()` is equivalent to without it.

### Question 4

```
(3) [50, 100, 150]
```

> return the array of final price of goods. since the final price is pushed the the `discounted` array one by one in the for loop

### Question 5

```
Uncaught ReferenceError ReferenceError: i is not defined
```

> since `i` is declared with `let`, it is only visible inside the for loop

### Question 6

```
Uncaught ReferenceError ReferenceError: discountedPrice is not defined
```

> since `discountedPrice` is declared with `let`, it is only visible inside the for loop

### Question 7

```
150
```

> `finalPrice` is visible in the current scope

### Question 8

```
(3) [50, 100, 150]
```

> return the array of final price of goods. since the final price is pushed the the `discounted` array one by one in the for loop

### Question 9

```
Uncaught ReferenceError ReferenceError: i is not defined
```

> since `i` is declared with `let`, it is only visible inside the for loop

### Question 10

```
3
```

> `length` is a constant equal to the length of `prices` array

### Question 11

```
(3) [50, 100, 150]
```

> return the array of discounted price of goods. since the discounted price is pushed the the `discounted` array one by one in the for loop

### Question 12

```javascript
student.name; //A, or student["name"]
student["Grad Year"]; //B
student.greeting(); //C
student["Favorite Teacher"]["name"]; //D
student["courseLoad"][0]; //E
```

### Question 13

```javascript
32
1
3
3null
4
0
3undefined
NaN
```

### Question 14

```javascript
true
false
true
false
false
true
```

### Question 15

- `==` checks if values on both sides are equal after the type conversion. `===` is a strict equality check that also checks whether both sides have same type 

### question 16


```javascript
for (var key in statistics) {
  if (key.startsWith("r") || statistics[key] % 2 == 1) {
    console.log(statistics[key]);
  }
}
```


### question 17

`(3) [2, 4, 6]`

- first pass in `arr = [1,2,3]`, then in the for loop, store the result of `doSomething()` for each input element. For example, first element in the `arr` is `1`, it was taken in as parameter `num = 1`, and returned `2`, which is then pushed into the result array. after calling `doSomething()` for each element in the array, return the result array which is the `2.*[1,2,3]`
  
### Question 18

``` javascript
setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);
```


### Question 19

```
1 
4
3
2
```

> `1` and `4` should be printed immediately since they are synchronous expressions. `3`, although delayed by 0ms, is still an asynchronous function thus takes more time to process. `4` is delayed by 2. 