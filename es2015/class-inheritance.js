// Demonstration of inheritance between class-style (ECMAScript 2015

class Library{
    constructor(name, language, developer, launchDate){
        
        this.name = name;
        this.spec = {
            language,
            developer
        }
        this.launchDate = launchDate;
    };
    
    description(){
        return "This library is written in "+this.spec.language;
    };

    getLaunchDate(){
        return this.launchDate;
    };
}

class JsLibrary extends Library{
    constructor(name, language, developer, launchDate, packageManager){
        super(name, language, developer, launchDate);
        
        this.packageManager = packageManager;
        
    }
    
    doMagic(){
        return "Doing JS magic";
    };
}

let genericLibrary = new Library("Generic","C","Apache",1999);
let reactjs = new JsLibrary("React","JS","Facebook",2012,"npm");