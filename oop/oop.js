class Person{
    firstName;
    lastName;

    showFullName(){
        return `My name is ${this.firstName} ${this.lastName}`;
    }

    // constructor(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
}

// var me = new Person('Mahdi', 'Aloeess');
var me = new Person();

console.log(me.showFullName());

class User extends Person{
    userName;
    password;
}

var user_1 = new User();
user_1.firstName;