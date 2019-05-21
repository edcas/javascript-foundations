// Promises and Error Handling

try {
    throw new Error('my custom error');
}
catch(err) {
    console.log(err);
}
finally {
    console.log('this always executes');
}
console.log('continuing...');


const promise = new Promise(
    function(resolve, reject) {
        setTimeout(reject, 100, 'someValue');
    }
);

promise.then(
    res => console.log('fullfilled: ' + value),
    err => console.log('rejected: ' + err)
);

// XHR
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if(4 == this.readyState && 200 == this.status) {
        console.log(this.responseText);
    }
};
xhttp.open('GET', 'http://5cbdf615ecded20014c20d0d.mockapi.io/v1/users', true);
xhttp.send();