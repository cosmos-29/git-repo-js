function numberToObject(num) { 
    if (num < 0) {
        throw new Error ("Число не может быть отрицательным.");
        return;
    }
    var keys = ['units', 'dozens', 'hundreds'];
    num = num + "";
    if (num.length > keys.length) {
        throw new Error ("Число не может быть таким большим!");
    }
    var obj = {};
    for (var i = num.length - 1; i >= 0; i--) {
        var key = keys[num.length - 1 - i];
        obj[key] = num[i];
    }
    return obj;
}