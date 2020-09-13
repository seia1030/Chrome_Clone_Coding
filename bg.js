const Body=document.querySelector("body");
const Num_Of_Img=3;

//0~Num_of_Img의 범위의 난수를 생성합니다.
function Get_Random_Number(){
    const number= Math.floor((Math.random()*Num_Of_Img));
    return number;
}

//Get_Random_Number에서 생성한 난수를 인수로 받아 랜덤으로 배경화면을 선택합니다.
function Paint_Body(Img_Number){
    const img=new Image();
    img.src= `images/${Img_Number+1}.jpg`;
    img.classList.add("bgImage");
    Body.prepend(img);
}


function init(){
    const number= Get_Random_Number();
    Paint_Body(number);
}

init();