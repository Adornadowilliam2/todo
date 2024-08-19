const btn = document.getElementById("tag")
const input = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function AddTask(){
    if(input.value == ''){
        alert("You must write something")
        input.style.borderColor = 'red'
        input.style.background = '#e08d8d'
       
    }else{
        input.style.borderColor = 'black'
        input.style.background = 'transparent'
        let li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li)
        input.value = ""
    }
    saveData();
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function  showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask()