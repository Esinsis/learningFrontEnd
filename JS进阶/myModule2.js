(function myModule2(window){
    var msg = "Hello world!"

    function doSomething(){
        console.log('doSomething() -> ' + msg.toUpperCase());
    }

    function doOtherThing(){
        console.log('doOtherThing() -> ' + msg.toLowerCase());
    }

    window.myModule2 =  {
        doSomething: doSomething,
        doOtherThing: doOtherThing
    }
})(window);