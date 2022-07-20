CSS.registerProperty({
    name: "--p",
    syntax: "<integer>",
    initialValue: 0,
    inherits: true,
  });


const submitButton = document.querySelector("button");
const progress= document.querySelector("progress");
const showlevel= document.querySelector("#level");
const img = document.querySelector("img");
var level;
let cnt=0;



function fchk() { 
    var chk_obj = document.getElementsByName("check");
    var chk_leng = chk_obj.length;
    for (i=0; i < chk_leng; i++) {
        if (chk_obj[i].checked == true) { 
            cnt += (chk_obj[i].value)*1;
        }
    }
}


function onSubmitBtnClick(){
    fchk();
    let exp = cnt;
    console.log(exp);
    
    if (exp<=10) {
        level=1;
        progress.max=10;
    }
    else if (exp>10 && exp<=20) {
        level=2;
        exp-=10;
        progress.max=10;
    }
    else {
        level=3;
        exp-=20;
        progress.max=20;
    }

    if (level==1){
        img.src="img/level1.jpeg";
    }
    else if (level==2){
        img.src="img/level2.jpeg";
    }
    else{
        img.src="img/level3.jpeg";
    }
    progress.value=exp;
    showlevel.value=level;
    showlevel.innerText='Lv.'+level;

    cnt=0;
    
}


submitButton.addEventListener("click", onSubmitBtnClick);