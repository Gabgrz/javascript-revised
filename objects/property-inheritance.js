// Demonstration of properties inheritance

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