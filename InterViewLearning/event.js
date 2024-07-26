const EventEmitter = require("events");

const event = new EventEmitter();

const _callback = () => {
    console.log("a");
    event.removeListener('start', () => {
        console.log("insert a");
    });
}

const callback_ = () => {
    console.log("b");
    event.removeListener('start', () => {
        console.log("insert b");
    });
}   

event.on("start",_callback);
event.on("start",callback_);
event.on("start",_callback);

event.emit("start");