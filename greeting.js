const JsGreeting =document.querySelector(".js-greetings");
const GreetingInput = JsGreeting.querySelector("input");
const GreetingShow = JsGreeting.querySelector("h4");
const USER_LS="UserName";
const SHOWING="NonDisPlay";

//유저의 이름을 localStorage에 저장한다.
function Save_UserName(text){
    localStorage.setItem(USER_LS,text);
}

//입력창에서 입력이 발생하였을 경우로, 유저의 이름을 출력하고 유저의 이름을 localStorage에 저장한다.
function Handle_Submit(event){
    event.preventDefault();
    const InputValue=GreetingInput.value;
    Print_UserName(InputValue);
    Save_UserName(InputValue);
}

//입력창을 보이게 하고 입력할 경우 handler를 출력한다.
function Get_UserName(){
    GreetingInput.classList.remove("Nondisplay");
    JsGreeting.addEventListener("submit", Handle_Submit);
}

//유저의 이름과 인사를 출력한다.
function Print_UserName(text){
    GreetingInput.classList.add(SHOWING);
    GreetingInput.classList.remove(SHOWING);
    GreetingShow.innerText= `${text}님 
    좋은 하루 되세요.`;
}

//localStorage에 데이터가 있을 경우 출력하고 없을경우 입력받는다.
function Load_Name(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser==null){
        Get_UserName();
    }else{
        Print_UserName(currentUser);
    }
}

//초기실행을 위한 함수이다.
function init(){
    Load_Name();
}

init();