const comboDOM = document.getElementById("combo");

const ball1DOM = document.getElementById("ball1")
const ball2DOM = document.getElementById("ball2")
const ball3DOM = document.getElementById("ball3")
const ball4DOM = document.getElementById("ball4")

const startClickHandler = () => {
    const selctValue = comboDOM.Value;

    if (selctValue === "") {
        return alert("공을 선택해주세요");
    } 

    //랜덤 생성을 위해 반복문을 여기서 실행
    setInterval(() => {
        let ran1 = Math.random() * 50 + 1;
        ran1 = Math.floor(ran1);
    
        let ran2 = Math.random() * 50 + 1;
        ran2 = Math.floor(ran2);
    
        let ran3 = Math.random() * 50 + 1;
        ran3 = Math.floor(ran3);
    
        let ran4 = Math.random() * 50 + 1;
        ran4 = Math.floor(ran4);
        
        
        if(ball1DOM.style.marginLeft === "") {
            ball1DOM.style.marginLeft = ran1 + "px";
        } else {
            let currneValue1 = ball1DOM.style.marginLeft;
            currneValue1 = currneValue1.split("p");
            currneValue1 = parseInt(currneValue1) + ran1;
            currneValue1 = currneValue1 + "px";
            ball1DOM.style.marginLeft = currneValue1;
        } 
        if(ball2DOM.style.marginLeft === "") {
            ball2DOM.style.marginLeft = ran2 + "px";
        } else {
            let currneValue2 = ball2DOM.style.marginLeft;
            currneValue2 = currneValue2.split("p");
            currneValue2 = parseInt(currneValue2) + ran2;
            currneValue2 = currneValue2 + "px";
            ball2DOM.style.marginLeft = currneValue2;
        }
        if(ball3DOM.style.marginLeft === "") {
                ball3DOM.style.marginLeft = ran3 + "px";
        } else {
            let currneValue3 = ball3DOM.style.marginLeft;
            currneValue3 = currneValue3.split("p");
            currneValue3 = parseInt(currneValue3) + ran3;
            currneValue3 = currneValue3 + "px";
            ball3DOM.style.marginLeft = currneValue3;
        }

        if(ball4DOM.style.marginLeft === "") {
                ball4DOM.style.marginLeft = ran4 + "px";
        } else {
            let currneValue4 = ball4DOM.style.marginLeft;
            currneValue4 = currneValue4.split("p");
            currneValue4 = parseInt(currneValue4) + ran4;
            currneValue4 = currneValue4 + "px";
            ball4DOM.style.marginLeft = currneValue4;
        }
        
    }, 60);
};