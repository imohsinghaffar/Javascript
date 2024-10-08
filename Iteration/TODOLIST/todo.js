let Inputfield = document.querySelector('.in-1');
let getSubmitBtn = document.querySelector('.in-2')
let finaldata = document.querySelector('.new-data')

getSubmitBtn.addEventListener('click', ()=>{
    let checkvalue = Inputfield.value.toUpperCase();
    let createNewelem = document.createElement('li')
    // let storeValue = finaldata.innerHTML
    createNewelem = checkvalue
    // storeValue = checkvalue
    finaldata.appendChild(createNewelem.innerHTML)
})

// let getfromh3 = document.querySelector('.calc').innerText;
// console.log(getfromh3);

// let btn = document.querySelector('button');
// btn.innerHTML = "Minus";

// btn.addEventListener('cilck', ()=>{
//     getfromh3 = 5
// })

