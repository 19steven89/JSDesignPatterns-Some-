function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        // filter out from the list whatever matches the callback function. If there is no match,
        // the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item){
            // remove the fn passed in as params to unsubscribe
            if(item !== fn){
                return item;
            }
        });

        console.log(`You are now unsubscribed from the ${fn.name}`);
    },

    fireEvent: function(){
        this.observers.forEach((observer) => observer.call());
    }
};

const click = new EventObserver();

// click handlers
const getCurrMilliSeconds = function(){
    console.log(`Currrent milliseconds ${new Date().getMilliseconds()}`);
};

const getCurrSeconds = function(){
    console.log(`Currrent seconds ${new Date().getSeconds()}`);
};

// event listeners
document.getElementById("subscribeMS").addEventListener("click", function(){
    click.subscribe(getCurrMilliSeconds);
});

document.getElementById("unsubscribeMS").addEventListener("click", function(){
    click.unsubscribe(getCurrMilliSeconds);
});

document.getElementById("subscribeS").addEventListener("click", function(){
    click.subscribe(getCurrSeconds);
});

document.getElementById("unsubscribeS").addEventListener("click", function(){
    click.unsubscribe(getCurrSeconds);
});

document.getElementById("fire").addEventListener("click", function(){
    click.fireEvent();
});

