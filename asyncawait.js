// async function learn_Async(topic) {
//     return topic;
// }

// learn_Async("Learning Asynchronus Function")
// // .then(result=>console.log(result))


// async function student()
// {
//     // console.log("we are learning Asyncawait");
    
//     let user_data = await fetch("https://jsonplaceholder.typicode.com/users");
//     let get_data = await user_data.json();
//     return get_data;
//     // return (await fetch("https://jsonplaceholder.typicode.com/users")).json();
// }

// // student()
// // .then(response=>console.log(response))
// // .catch(error=>console.log(error))


//Another way to do it
async function student2()
{
    try{   
        let user_data = await fetch("https://jsonplaceholder.typicode.com/users");
        let get_data = await user_data.json();
        return get_data;
    }
    catch(error)
    {
        console.log(error);
        
    }
}

student2()
.then(response=>console.log(response))