var x = 9;
function myFunction() {
    return x * x;
}
document.write(myFunction());
x = 5;
document.write(myFunction());



var count=(function () {
    var counter=0;
    return {
        add:function () {
            return counter+=1;
        },
        reset:function () {
            counter=0;
        }
    } ;
}());


var make_adder = (function (x) {
    var counter=0;
    return function() {
        return counter+=x;
    };
});


var Employee = (function () {
    let name;
    let age;
    let salary;
    let setAge=function (newAge) {
        age=newAge;
    };
    let setSalary=function (newSalary) {
        salary=newSalary;
    };
    let setName=function (newName) {
        name=newName;
    };
    let getAge=function () {
        return age;
    };
    let getSalary=function () {
       return salary;
    };
    let getName=function () {
        return name;
    };
    let increaseSalary=function (percentage) {
        let s=getSalary();
       return s+=((s*percentage)/100);
    };
    let incrementAge=function () {
        let ag=getAge();
        return ag++;
    };
    return {
        setAge:setAge,
        setSalary:setSalary,
        setName:setName,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge
    };
})();


var Employee = (function () {
    let name;
    let age;
    let salary;
    let getAge=function () {
        return age;
    };
    let getSalary=function () {
       return salary;
    };
    let getName=function () {
        return name;
    };
    return {
        setAge: function (newAge) {
            age=newAge;},
        setSalary: function (newSalary) {
            salary=newSalary;},
        setName: function (newName) {
            name=newName;},
        increaseSalary: function (percentage) {
            let s=getSalary();
            return s+=((s*percentage)/100);},
        incrementAge: function () {
            let ag=getAge();
            return ag++;}
    };
})();



var Employee = (function () {
    let name;
    let age;
    let salary;
    let myObject= {};
    let getAge=function () {
        return age;
    };
    let getSalary=function () {
       return salary;
    };
    let getName=function () {
        return name;
    };
    myObject.setAge = function (newAge) {
        age=newAge;};
    myObject.setSalary = function (newSalary) {
        salary=newSalary;};
    myObject.setName = function (newName) {
        name=newName;};
    myObject.increaseSalary = function (percentage) {
        let s=getSalary();
        return s+=((s*percentage)/100);};
    myObject.incrementAge = function () {
        let ag=getAge();
        return ag++;};
    return myObject;
})();






var Employee = (function () {
    let name;
    let age;
    let salary;
    let setAge=function (newAge) {
        age=newAge;
    };
    let setSalary=function (newSalary) {
        salary=newSalary;
    };
    let setName=function (newName) {
        name=newName;
    };
    let getAge=function () {
        return age;
    };
    let getSalary=function () {
        return salary;
    };
    let getName=function () {
        return name;
    };
    let increaseSalary=function (percentage) {
        let s=getSalary();
        return s+=((s*percentage)/100);
    };
    let incrementAge=function () {
        let ag=getAge();
        return ag++;
    };
    return {
        setAge:setAge,
        setSalary:setSalary,
        setName:setName,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge
    };
})();
var address;
Employee.setAddress = function (newAddress) {
    address=newAddress;
};
Employee.gerAddress = function () {
    return address;
};





