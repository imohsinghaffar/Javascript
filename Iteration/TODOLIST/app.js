let getInputValue = document.querySelector('.text');
let getSubmittBtn = document.querySelector('.btn')
let saveListItem  = document.querySelector('.list-item');
let showDeleteBtn  = document.querySelector('.delete-btn');


getSubmittBtn.addEventListener('click',createElement)

function createElement()
{
    let inputValue = getInputValue.value;
    if(inputValue){
        let createList = document.createElement('li');
        createList.innerHTML = inputValue;
        createList.setAttribute('class','new-list')
        saveListItem.appendChild(createList)
        let createDeletebtn = document.createElement('button');
        createDeletebtn.innerHTML = "Delete";
        createDeletebtn.setAttribute('class','new-btn')
        showDeleteBtn.appendChild(createDeletebtn)

        createDeletebtn.addEventListener('click',()=>
    {

        saveListItem.remove(createList)
        showDeleteBtn.remove(createDeletebtn)
    })
    }
}

