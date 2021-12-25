function myModule(){
    var msg = "Hello world!"

    function doSomething(){
        console.log('doSomething() -> ' + msg.toUpperCase());
    }

    function doOtherThing(){
        console.log('doOtherThing() -> ' + msg.toLowerCase());
    }

    return {
        doSomething: doSomething,
        doOtherThing: doOtherThing
    }
}