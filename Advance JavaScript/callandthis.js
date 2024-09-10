//Call and this
//This point to the current execution flow.
//when we are in window, this equals to window 
//when we are in node environment, this represents {}
//call pass current execution context to other function as well but have to explain in detail
function setUsername(username)
{
    this.username = username;
}

function CreateUser(username, email, passw)
{
    setUsername.call(this,username) //"this" keyword is our choice so here we have to use
    //call method and then pass username to get result
    this.email = email
    this.passw = passw
}

//new keyword creating new object of our function createuser
let checkResult = new CreateUser("Mohsin", "mohsin@gmail.com", 123) 
console.log(checkResult);
