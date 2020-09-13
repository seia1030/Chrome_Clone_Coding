const JsTodo=document.querySelector(".js-todo");
const JsUl=document.querySelector(".js-list");
const JsInput=JsTodo.querySelector("input");

//local storage내의 변수 이름입니다. 
const TODOS_LS="toDos";

//todolist를 관리할 배열입니다.
let toDos=[];

//버튼을 눌렀을 시에 작동합니다. 누른 버튼이 포함되어있는 li를 배열과 localstorage에서도 삭제합니다.
function Delete_Handler(event){
    const btn=event.target;
    const li=btn.parentNode;
    JsUl.removeChild(li);
    const cleantoDos = toDos.filter(function(todo){
        return todo.id!==parseInt(li.id);
    });
    toDos=cleantoDos;
    Save_toDos();
}

//local storage내에 ToDos영역이 존재하면 출력합니다.
function Load_toDos(){
    const Loaded_Todo=localStorage.getItem(TODOS_LS);
    if(Loaded_Todo!==null){
        const Parsed_ToDo=JSON.parse(Loaded_Todo);
        Parsed_ToDo.forEach(function(toDo){
            Paint_toDos(toDo.text);
        });
    }else{
    }
}

//입력을 관리합니다. 입력이 끝나는 시점에 입력칸이 비어있게 합니다.
function Input_Handler(event){
   event.preventDefault();
    const currentValue=JsInput.value;
    Paint_toDos(currentValue);
    JsInput.innerText="";
    JsInput.value="";
}

//toDos와 localstorage를 동기화합니다.
function Save_toDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

//입력된 항목을 리스트에 추가하는 역할을 합니다. 마지막엔 배열과 localstorage에도 저장합니다.
function Paint_toDos(text){
    const li= document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText=`✖️`;
    delBtn.addEventListener("click",Delete_Handler);
    const span=document.createElement("span");
    const newId= toDos.length+1;
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id=newId;
    JsUl.appendChild(li);
    const toDoObj={
        text:text,
        id:newId
    };
     toDos.push(toDoObj);
     Save_toDos();
}


function init(){
    Load_toDos();
    JsTodo.addEventListener("submit",Input_Handler);
}


init();