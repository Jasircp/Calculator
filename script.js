var a="",result,flag=1,mode=1;
function clr(){
    document.getElementById("screen").value=""
}
function clk(num){
    document.getElementById("screen").value+=num
    flag=0
}
function modeChange(){
    if(mode==1){
        mode=2;
    }
    else{
        mode=1
    }
    console.log(mode);
}
function op(oper){
    if(mode==1){
        if(flag==0){
            a+=document.getElementById("screen").value
            switch(oper){
                case '+':a+="+"
                break
                case '-':a+="-"
                break
                case '*':a+="*"
                break
                case '/':a+="/"
                break
            }
            document.getElementById("screen").value=""
            flag=1;
        }
    }
    else{
        if(flag==0){
            document.getElementById("screen").value+=oper
            flag=1
        }
    }
}
function ans(){
    a+=document.getElementById("screen").value
    result = eval(a)
    document.getElementById("screen").value=result
    a=""
}
function toggleTheme(){
          var btn = document.getElementById("myButton");
          if (btn.innerHTML == "Classic") {
            btn.innerHTML = "Modern";
          } else {
            btn.innerHTML = "Classic";
          }
}
