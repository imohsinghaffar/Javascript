//class Constructor and Static
//Static: Restrict to access that variable with which we use static
class fristClass {
    constructor(name, age, gender) {
        this.name = name
        this.age = age
        this.gender = gender
    }

    showDetails() //in class we define function like this without writing function keyw
    {
        return ` ${this.name}, ${this.age}, ${this.gender}`;
        
    }

    // capitalResult()
    // {
    //     return `${this.name.toUpperCase()}`
    // }
}

let getResult = new fristClass("Mohsin", 23, "Male")
// console.log(getResult.showDetails().toUpperCase());

//Inheritance
class User{
    constructor(name){
        this.name = name
    }
}
class Teacher extends User {
        constructor(name,email,qual) {
            super(name)
            this.email = email
            this.qual = qual
        }
        showDetails()
        {
            console.log(`${this.name.toUpperCase()}`);
            
        }
    }

    let findResult = new Teacher("Ayesha", "ay@gmail.com", "Master");
    findResult.showDetails()



