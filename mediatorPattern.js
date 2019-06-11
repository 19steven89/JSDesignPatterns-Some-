const User = function(name){
    this.name = name;
    this.chatroom = null;
};

User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
};

const ChatRoom = function(){
    //list of users
    let users = {};

    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to){
                // single user message
                to.receive(message, from);

            }else{
                // mass message to multiple users in chat
                for(key in users){
                    // if used so that sender of msg doesnt receive their own msg7
                    if(users[key] !== from){
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
};

const steven = new User("Steven");
const brad = new User("Brad");
const jeff = new User("Jeff");

const chatroom = new ChatRoom();

chatroom.register(steven);
chatroom.register(brad);
chatroom.register(jeff);

// 2nd param is who the message is being sent to
steven.send("Hello Jeff", jeff);
brad.send("Hello steven", steven);
jeff.send("Hello everyone");