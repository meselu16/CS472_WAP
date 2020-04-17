//Answer for Q-6

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

//Answer for Q-8

var make_adder = (function (x) {
    var counter=0;
    return function() {
        return counter+=x;
    };
});

//Answer for Q-10

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


//Answer for Q-11
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

//Answer for Q-12

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




//Answer for Q-13

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





