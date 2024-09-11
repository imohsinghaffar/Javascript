//Getter and Setter

class library{
    constructor(bname, bauth)
    {
        this.bname = bname
        this.bauth = bauth
    }

    get bname()
    {
        return this.b_name
    }
    set bname(value)
    {
        this.b_name = value
    }

    get bauth()
    {
        return this.b_auth
    }
    set bauth(value)
    {
        this.b_auth = value
    }
}

let call = new library("Grow Rich", "Henry Putin")
// console.log(`Book Name: ${call.bname} Author: ${call.bauth}`);

//Another way to do this using defineProperty

function User(uname, pass)
{
    this._uname = uname //In this method what variable we define here same to same use
    //use in getter and setter like this._uname same in get and set
    this._pass = pass

    Object.defineProperty(this, "uname", {
        get: function()
        {
            return this._uname
        },
        set: function(value)
        {
            this._uname = value
        }
    })

    Object.defineProperty(this, "pass", {
        get: function()
        {
            return this._pass
        },
        set: function(value)
        {
            this._pass = value
        }
    })
}

let result = new User("Ahmad", 12345)
console.log(result.uname, result.pass);

