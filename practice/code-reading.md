# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
as the 'console.log' in line5 is in the block and can read the 'x=2'. 
the second 'console.log' can read 'x=1' as it is global.

## Question 2

Take a look at the following code:

```
let x = 10

function f1(){
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less?

the output would be '10' . the reason is that when f1 called it has access to 'let x = 10'. 'y' has not defined so it would be 'undefined'.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

<!-- What will be the output of this code. Explain your answer in 50 words or less.
'9' as the 'console.log' is outside the block in global area and has access to 'x=9'.
 for f2, {x:10} would be the result as y passed to f2.                                       -->
