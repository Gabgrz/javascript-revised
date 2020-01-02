/* 
Ways of creating JS objects

NOTES:
- Calling a method in the constructor function is not ideal.
It is best to define methods in the prototype property.

*/

// 1. Declaring an object literal

function newComponent(module, name, type){
	const obj = {};
  obj.module = module;
  obj.name = name;
  obj.type = type;
  obj.action = function(){
  	alert("I'm defined to do "+type+" actions");
  };
  
  return obj;
}

let aComponent = newComponent("a-module","Component","stateful");
console.log(aComponent);

// 2. Using a Constructor function

function Component(module, name, type){
	
  this.import = {
    module: module,
    name: name
  };
  
  this.action = function(){
  	alert("I'm defined to do "+type+" actions");
  };
}

let myComponent = new Component("a-module","Component","interactive");
console.log(myComponent.import);

// 3. Using the Object() constructor

let comp = new Object();
comp.name = "CoolComp";
comp['module'] = "cool-module"
comp.action = function(){
  alert("I'm defined to do interactive actions");
}

console.log(comp);

// 4. Using the create() method

let cloneComp = Object.create(comp);
console.log(cloneComp);