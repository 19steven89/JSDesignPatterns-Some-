class User {
    constructor(name){
        this.name = name;
        this.chatroom = null;
    }

    send(message, to){
        this.chatroom.send(message, this, to);
    }

    receive(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
};

class ChatRoom {

    constructor(){
        //list of users
        this.users = {};
    }

    register(user){
        this.users[user.name] = user;
        user.chatroom = this;
    }
    
    send (message, from, to){
        if(to){
            // single user message
            to.receive(message, from);

        }else{
            // mass message to multiple users in chat
            for(this.key in this.users){
                // if used so that sender of msg doesnt receive their own msg
                if(this.users[this.key] !== from){
                    this.users[this.key].receive(message, from);
                }
            }
        }
    }
}

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