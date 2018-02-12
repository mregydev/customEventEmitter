module.exports=class customEmitter extends EventEmitter {
    constructor() {
        super();
    }

    registerCallBacks(event, callBacks) {
        for (let callBack of callBacks) {
            this.addListener(event, callBack);
        }
    }


    removeCallBacks(event, callBacks) {
        if(!callBacks)
        {
            this.emit("error","CallBacks not defined");
        }

        for(let callBack of callBacks)
        {
            this.removeListener(event,callBack);
        }
    }
}
