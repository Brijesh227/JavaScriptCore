var throttle = function(fn, t) {
    let timer = true;
    return function(...args) {
        if(timer) {
            fn(...args);
            timer = false;
            setTimeout(() => {
                timer = true;
            },t);
        }
    }
};

let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = throttle(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);
setTimeout(() => dlog(3), 115);