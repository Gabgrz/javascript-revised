let reactLibrary = {
    name: "d3js",
    spec: {
        language: "JS",
        developer: "Mike Bostock"
    },
    launchDate: 2011,
    description(){
        return "This library is written in "+this.spec.language;
    },
    getLaunchDate() {
        return this.launchDate;
    }
};

let anotherReactLibrary = {
    name: "material-ui",
    spec: {
        language: "JS",
        developer: "Material-UI"
    },
    launchDate: 2014,
    description(){
        return "This library is written in "+this.spec.language;
    },
    getLaunchDate() {
        return this.launchDate;
    },
    version: 1.0
};

// Properties of rightmost object overrides prior objects in the argument list
let cloneOfLibrary = Object.assign({}, reactLibrary, anotherReactLibrary);
console.log(cloneOfLibrary.name);

// It is possible to assign a value to an object property in the assign() method
let anotherCloneOfLibrary = Object.assign({}, reactLibrary, anotherReactLibrary,{version: 2.0});
console.log(anotherCloneOfLibrary.version);