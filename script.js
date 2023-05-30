var a="",result,flag=1;
function clr(){
    document.getElementById("screen").value=""
}
function clk(num){
    document.getElementById("screen").value+=num
    flag=0
}
/*function op(oper){
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
}*/
function op(oper){
    if(flag==0){
        document.getElementById("screen").value+=oper
        flag=1
    }
}
function ans(){
    a+=document.getElementById("screen").value
    result = eval(a)
    document.getElementById("screen").value=result
    a=""
}