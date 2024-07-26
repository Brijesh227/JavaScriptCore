//gfg : https://www.youtube.com/watch?v=ZgFCZct3Pq0

// function isPrime(n) {
//     if(n === 1) return false;

    // for(let i=2;i<n;++i){
    //     if(n%i === 0){
    //         return false;
    //     }
    // }
    // return true;

    // for(let i=2;i*i<=n;++i){
    //     if(n%i === 0){
    //         return false;
    //     }
    // }
    // return true;

//     if(n == 2 || n == 3){
//         return true;
//     }
//     if((n%2 == 0) || (n%3 == 0)) {
//         return false;
//     }
//     for(i=5;i*i<n;i=i+6){
//         if((n%i == 0) || (n%(i+2) == 0)){
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimeUptoNOtherSolution(n) {
//     if(isPrime(n)){
//         console.log(n,"is prime");
//     } else {
//         console.log(n,"is not prime");
//     }
// }

// printPrimeUptoNOtherSolution(29);


// printPrimeNumberUptoN(10);

// function printPrimeNumberUptoN(n){
//     const primeArray = [2];
//     for(let i=2;i<=n;++i){
//         let flag = false;
//         for(let j=2;j<i;++j) {
//             if(i%j === 0){
//                 break;
//             } else {
//                 flag = true;
//             }
//         }
//         if(flag) {
//             primeArray.push(i);
//         }
//     }
//     console.log(primeArray);
// }

// function nthPrimeNumber(n) {
//     if(n === 1){
//         return 2;
//     }
//     if(n === 2){
//         return 3;
//     }
//     let num = 3;
//     let count = 0;
//     while(count < n-2){
//         ++num;
//         let i;
//         for(i=2;i<num;++i){
//             if(num%i === 0){
//                 break;
//             }
//         }
//         if(i === num) {
//             ++count;
//         }
//     }
//     return num;
// }

// console.log(nthPrimeNumber(1000));

function sieveOfEratorthenes(n){
    // const arr = new Array(n);
    // arr.fill(true,2);
    // for(let i=2;i<=arr.length;++i){
    //     if(i == 2 || i ==3 || i==5){
    //         console.log(i);
    //     }
    //     if((i%2 == 0) || (i%3 == 0) || (i%5 == 0)) {
    //         arr[i] = false;
    //     }
    //     if(arr[i] == true){
    //         console.log(i);
    //     }
    // }

    const arr = Array.from({length:n+1},(_,i) => true);
    for(let num=2;num*num<=n;++num){
        if(arr[num] == true){
            for(let mul = num*num;mul<=n;mul +=num){
                arr[mul] = false;
            }
        }
    }
    for(let i=2;i<=n;++i){
        if(arr[i] === true){
            console.log(i);
        }
    }
}

// sieveOfEratorthenes(5);

function checkPrime(n){
    for(let i=2;i*i<=n;++i){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

// console.log(checkPrime(3) ? "is prime" : "is not prime");

