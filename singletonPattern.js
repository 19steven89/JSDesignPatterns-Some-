const Singleton = (function(){
        let instance;

        function createInstance(){
            const obj = new Object({name: "Steven"});
            return obj;
        }

        return {
            getInstance: function(){
                // if theres no instance, then create a new one
                if(!instance){
                    instance = createInstance();
                }

                return instance;
            }
        }
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);
