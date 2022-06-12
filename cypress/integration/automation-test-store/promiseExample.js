let newPromise = new Promise((resolve, reject) => {
    
    let a = 1 + 1
    if(a == 4) {
        resolve('promise fulfilled')
    } else {
        reject('promise unfufilled')
    };
}) 

newPromise.then((message) => {
    console.log(message + ' promise passed')
});
newPromise.catch((message) => {
    console.log(message + ' promise failed')
});