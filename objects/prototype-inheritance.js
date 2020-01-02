// Demonstration of Prototype inheritance

function Library(name, language, developer, launchDate){
    this.name = name;
    
    this.spec = {
        language,
        developer
    }
    this.launchDate = launchDate;
}

Library.prototype.description = function(){
    return "This library is written in "+this.spec.language;
}

Library.prototype.getLaunchDate = function (){
    return this.launchDate;
}

function JsLibrary(name, language, developer, launchDate, packageManager){
    Library.call(this, name, language, developer, launchDate);
    this.packageManager = packageManager;
}

let genericLibrary = new Library("Generic","C","Apache",1999);
let reactjs = new JsLibrary("React","JS","Facebook",2012,"npm");

// Prototype inheritance starts here

JsLibrary.prototype = Object.create(Library.prototype);

Object.defineProperty(JsLibrary.prototype, 'constructor', {
    value: Teacher,
    enumerable: false, // // so that it does not appear in 'for in' loop
    writable: true
});

let myReact = new JsLibrary("React","JavaScript","Facebook",2013,"npm");



