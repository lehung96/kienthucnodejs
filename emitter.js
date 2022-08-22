// trong file này emitter sẽ phát ra một cái thông báo

function Emitter (){
    this.events = {}
}


Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);

}

Emitter.prototype.emit = function(type){
    // check
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        })
    }
}


module.exports = Emitter;