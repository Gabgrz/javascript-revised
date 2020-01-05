// Example of a Promise

function asyncFunc(work) {
    return new Promise(function(resolve, reject) {
        if (work === "")
            reject(Error("Nothing"));
        setTimeout(function() {
            resolve(work);
        }, 1000);
    });
}

asyncFunc("Work 1") // Task 1
    .then(function(result) {
        console.log(result);
        return asyncFunc("Work 2"); // Task 2
    }, function(error) {
        console.log(error);
    })
    .then(function(result) {
        console.log(result);
    }, function(error) {
        console.log(error);
    });
console.log("End");

// A custom function that returns a Promise object.

function asyncFunc(data){
    return new Promise(function (resolve,reject) {
        if (data === "") {

            reject(function(){
                try{
                    Error("ERROR");
                }
                catch (e) {

                }
            });
        }
        else {
        setTimeout(function (){
            resolve(data);}
            ,2000);
        }
    });
}

asyncFunc("");
asyncFunc("Good data")
    .then(value => {
        return value+"-then added this";
    })
    .finally(() => {});

// Example of a custom fetch function that returns a Promise object

function fetchData(data){
    return new Promise(function(resolve,reject){
        if(data !== "")
            resolve("Data was received, let's process it");
        else
            reject("Data is empty, nothing is done");
        });
}