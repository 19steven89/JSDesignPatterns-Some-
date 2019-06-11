// module pattern basic structure

// JS IIFE ():
// (function(){
//     // declare private vars and functions

//     return {
//         // declare public vars and functions
//     };
// })();

// STANDARD module pattern
const UIctrolr = (function(){
    let text = "Hello world";

    //private function
    const changeHeading = () => {
        const header = document.querySelector("h1");
        header.textContent = text;
    }

    return {
        callChangeHeading: function(){
            changeHeading();
            console.log(text);
        }
    }
})();

UIctrolr.callChangeHeading();


// REVEALING module pattern
const Itemctrolr = (function(){
    let data = [];
    
    //private function
    function add(item){
        data.push(item);
        console.log(`Item: ${item} added`);
    };

    //private function
    function get(id){
        return data.find(item => {
            //return the item id, if its equal to the item thats passed into parameter
            return item.id === id;
        });
    };

    //make functions available by returning them to the caller
    return {
        add: add,
        get: get
    }

})();

Itemctrolr.add({id: 1, name: "John"});
Itemctrolr.add({id: 2, name: "Mark"});
console.log(Itemctrolr.get(2));
