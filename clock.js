const JsClock =document.querySelector(".js-clock");
const Clock = JsClock.querySelector("h1");
var IntervalId=0;

//현재시간을 불러온다. 한 자리 수일경우 0을 붙여 출력한다.
function Load_Time(){
    const LoadedDate= new Date();
    const LoadedHours =LoadedDate.getHours();
    const LoadedMinutes =LoadedDate.getMinutes();
    const LoadedSeconds =LoadedDate.getSeconds();
    Clock.innerText=`${LoadedHours<10?`0${LoadedHours}`:LoadedHours}:${
        LoadedMinutes<10?`0${LoadedMinutes}`:LoadedMinutes}:${
        LoadedSeconds < 10 ?`0${LoadedSeconds}`:LoadedSeconds}`;
}

//시계의 시작과 정지를 더블클릭으로 제어할 수 있다.
//반복작업을 줄이기위해 toggle을 사용하였다.
function Control_Clock(){
    if(JsClock.classList.contains("run")){
        clearInterval(IntervalId);
    }
    else{
        IntervalId=setInterval(Load_Time,1000);
    }
    JsClock.classList.toggle("run");
}

//시계를 동작하게 하는 함수입니다. interval함수를 이용해 1초마다 재실행되게 합니다.
function Set_Clock(){
    JsClock.classList.add("run");
    IntervalId=setInterval(Load_Time,1000);
}

//시계에 run을 추가하고 실행시킨다.
function init(){
    Set_Clock();
    Load_Time();
    Clock.addEventListener("dblclick",Control_Clock);
}

init();