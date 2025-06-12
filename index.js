// Fibonacci Sequence
// A great friend of yours, Fibonacci, just came up with a sequence of numbers that is really easy to compute. However, his time allows him to calculate by hand only the first 10-15 terms of the sequence; of course, he is busy trying to come up with some other interesting sequence. So he gives you the first terms and asks you to write an algorithm that will return the n-th term in the sequence.
// His sequence looks like this: 1 1 2 3 5 8 13 21 34 ...
// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.
// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.
// But these are small numbers, which can be computed by hand. What about bigger numbers? Let's see what results you will get for the following n's:

// n = 43 -> x
// n = 101 -> x
// n = 227 -> x
// n = 491 -> x
// n = 881 -> x

// define a function takes number as a parameter
// define three varaibels, and set ane variabel value to be 1
// for loop start from 1 and end at the givin number
// shift the value of the valiabels
// return the result 

function fib(n) {
    let seq1 = 1;
    let seq2 = 1;
    let next = 0;

    for (let i = 3; i <= n; i++) {
        next = seq1 + seq2;
        seq1 = seq2;
        seq2 = next;
    }

    return next;
}

console.log(fib(4));

// index i      seq1           seq2  next
// 3            1                1    2
// 4            1                2    3
