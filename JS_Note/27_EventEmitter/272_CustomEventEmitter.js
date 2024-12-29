/**
* In same file you cann't override class name
* 
* If you overwrite the imported EventEmitter unintentionally, 
* you lose access to the original functionality provided by the events module.
* 
*/

class CustomEventEmitter {

    #listeners = {};

    constructor() {
        this.#listeners = {};
    }

    addEventListener(eventName,callback) {
        const arr = this.#listeners[eventName] || [];
        arr.push(callback);
        this.#listeners[eventName] = arr;
    }

    /* improved 
        addEventListener(eventName, callback) {
            if (typeof callback !== 'function') {
                throw new TypeError(`Listener for event "${eventName}" must be a function`);
            }
            if (!this.#listeners[eventName]) {
                this.#listeners[eventName] = [];
            }
            this.#listeners[eventName].push(callback);
        }    
    */

    on(eventName,callback) {
        this.addEventListener(eventName,callback);
    }

    removeEventListener(eventName,callback) {
        if (typeof callback !== 'function') {
            throw new TypeError(`Listener for event "${eventName}" must be a function`);
        }
        const arr = this.#listeners[eventName];
        if(!arr) return;
        this.#listeners[eventName] = arr.filter(listener => listener !== callback);
        if (this.#listeners[eventName].length === 0) {
            delete this.#listeners[eventName];
        }
    }

    off(eventName,callback) {
        this.removeEventListener(eventName,callback);
    }

    once(eventName,callback) {
        function closureFunction() {
            let isExecuted = false;
            return function() {
                if(!isExecuted) {
                    isExecuted = true;
                    callback(...arguments);
                }
            } 
        }
        this.addEventListener(eventName,closureFunction())
    }

    /**
     *  once(eventName, callback) {
            this.#listeners[eventName] = this.#listeners[eventName] || [];
            const onceWrapper = () => {
              callback();
              this.off(eventName, onceWrapper);
            }
            this.#listeners[eventName].push(onceWrapper);
        }
     * 
     */

    emit(eventName,...args) {                   // spread operator
        const arr = this.#listeners[eventName];
        if(arr) {
            for(let i=0;i<arr.length;++i) {
                arr[i](...args)                 // rest operator
            }
        }
    }    
}

const customEvent = new CustomEventEmitter();

customEvent.once('bar', (hello) => {
    console.log('customEvent fired bar',hello);
});

customEvent.emit('bar',"hi");
customEvent.emit('bar');
customEvent.emit('bar');

customEvent.on('foo', (hello,hi) => {
    console.log('event fired foo',hello,hi);
});

const c1 = () => {
    console.log('event fired foo2');
}

customEvent.on('foo', c1);
customEvent.off('foo',c1);

customEvent.on('foo', function() {
    console.log('event fired foo3');
});

customEvent.emit('foo',"hello2","hi2");
