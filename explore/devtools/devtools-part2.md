1. the bug is the return result of `document.getElementById("num1").value;` is a string, not a number. Therefore, at the breakpoint when doing `num1+num2`, javascript will do concatenation operation but not type conversion then addition. 

2. to solve the issue, __assuming the input are valid numbers__, we only need to force convert `num1` and `num2` to numbers before `+`