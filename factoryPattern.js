function MemberFactory(){
    this.createmember = function(name, type){
        let member;

        if(type === "simple"){
            member = new SimpleMembership(name);
        }else if(type === "standard"){
            member = new StandardMembership(name);
        }else if(type === "super"){
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function(name){
    this.name = name;
    this.cost = "£10";
}

const StandardMembership = function(name){
    this.name = name;
    this.cost = "£20";
}

const SuperMembership = function(name){
    this.name = name;
    this.cost = "£40";
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createmember("John Doe", "simple"));
members.push(factory.createmember("Joe Bloggs", "standard"));
members.push(factory.createmember("Bill Gates", "super"));

// print each member in the console by calling the define method
members.forEach(member => member.define());