function fibnaqie(number){
    return number <=2 ? 1 : fibnaqie(number - 1) + fibnaqie(number - 2);
}

var onmessage = function (event){
    var number = event.data;
    console.log("子线程接收到数据：" + number)

    var result = fibnaqie(number);
    postMessage(result);
    console.log("子线程向主线程发送数据：" + result)
}