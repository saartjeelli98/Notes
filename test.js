/* Object oriented programming

abstraction- hide complexity - i.e. all vehicles move, just differently.
encapsulation - hiding details of how a method works
inheritance -  allows objects to inherit from classes and other objects
polymorphism - something can take many different forms. something is polymorphic

classes to group code together in a logical way 
objects can be created from classes. an instance of a class (object = instance)


*/

//Classes:
//to group property and functionality together to provide representation of an object.
//do not take camelcase!!

// class Student{
//     constructor(){
//         this.firstName = "Sam";
//         this.lastName = "Smith";
//         this.phoneNumber = "4805555555";
//         this.grade = "A";
//     }
// }

//constructor is called when we create an instance of student. all properties are initialized
//anytime you create a student, they'd have the same values as above. But you want it to be dynamic.
//can add parameters to constructor

class Student{ 
    constructor(firstName, lastName, phoneNumber, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce(){ //giving method a name
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

let student1 = new Student('Tom', 'Sawyer', '6239485594', 'A');
let student2 = new Student('Sara', 'Elli', "6582948224", 'B');


student1.introduce();
student2.introduce();

//'this' keyword to specify the fill that belongs to the instance. represent the first name object created from class
//class is blueprint. can create as instances many as we want.
/*When to create a new class=
each class should be in charge of one things. if there's a new concept that needs a class, make one. 
each class will have a specific role, and each piece of data that is relevant should be in that class.
*/

//sometimes there are two classes that contain similar code (shared code). that code can sit in a parent class and the other inherit it.

//i.e. two notification classes- promotional, and collections

class NotificationSender{
    constructor(status){
        this.status = status;
    }
    sendNotification(notification){
        console.log(`Sending: ` + notification);
    }

    findUsersWithStatus(status){
        let users = getUsers(status);
        return users;
    }
}

class PromotionSender extends NotificationSender { //extends is used to inherit from another class
    constructor(status){
        super(status); //super refers to parent class. followed by (), refers to parent constructor. always need this
    }
   
    calculateDiscount(status){
        if (status === 'GOLD'){
            return .3;
        }
        if (status === 'SILVER'){
            return .15;
        }
        return 0;
    }
}

class CollectionsSender extends NotificationSender {
    constructor(status){
        super(status);
    }

    calculateFee (status){
        if (status === 'OVERDUE'){
            return 10;
        }
        if (status === 'DELINQUENT'){
            return 25;
        }
        return 5;
    }
}

let collectionsSender = new CollectionsSender('OVERDUE');
collectionsSender.sendNotification('this is a test collections notification');

//Exceptions:
//using other programs that fail, and code cant fix the issue. Want to make sure our program doesnt fail:
//exceptions can be thought of as an error. can wrap code in a try block, and followed by a catch block. 

try{
list.push("Hello"); 
}catch (err){
    console.log(err);
}
console.log("Goodbye"); //even tho there's an exceptiong thrown, goodbye is still printed
//only using try block when there are things outside of our control being used. not just when we write poor code.