function createRow(name,attn,attv){
    var row=document.createElement(name);
    row.setAttribute(attn,attv);
    return row;
} 

function createBtn(num){
    var a=document.createElement("button");
    a.setAttribute("class","btn btn-light col-md-2 btns"); 
    a.setAttribute("id",num);
    a.setAttribute("value",num);
    a.innerHTML=num;  
    return a;
}

function appendd(i){    
    inp.value+=i;
}

function AllClear(){
    inp.value="";
}

function del(){
    inp.value=inp.value.substr( 0,inp.value.length-1);  
    // inp.value =display.value.slice(0, -1);
}

function cal(){
    if(inp.value==""){
        alert("Enter some values");
        return inp.value="";
    }
    inp.value=eval(inp.value);   
}
// _______________________________________________________________________________________________________________________________________________//

var title=document.createElement("h1");
title.setAttribute("id","title");
title.innerHTML="Calculator:";
document.body.append(title);

var description=document.createElement("p");
description.setAttribute("id","description");
description.innerHTML="This is our one of the module-3rd task.";
document.body.append(description);

var box=document.createElement("div");
box.setAttribute("class","box")

var container=document.createElement("div");
container.setAttribute("class","container");
container.style.margin="1px";
box.append(container);


var row0=createRow("div","class","row");
container.append(row0);
 
var inp=document.createElement("input");
inp.setAttribute("type","text"); 
inp.setAttribute("class","col-md-8 inp");
inp.setAttribute("id","result");
inp.setAttribute("placeholder","Enter the numbers to be calculated!");
row0.append(inp);


var row1=createRow("div","class","row");
container.append(row1);

var buttonAc=createBtn("AC");    
buttonAc.setAttribute("onclick","AllClear()");
buttonAc.setAttribute("id","clear");

var buttonDel=createBtn("del"); 
buttonDel.setAttribute("onclick","del()");

var buttonDiv=createBtn("/");  
buttonDiv.setAttribute("onclick","appendd('/')");

var buttonMul=createBtn("x"); 
buttonMul.setAttribute("onclick","appendd('*')");

row1.append(buttonAc,buttonDel,buttonDiv,buttonMul);


var row2=createRow("div","class","row");
container.append(row2);

var button7=createBtn(7); 
button7.setAttribute("onclick","appendd(7)");
var button8=createBtn(8); 
button8.setAttribute("onclick","appendd(8)");
var button9=createBtn(9); 
button9.setAttribute("onclick","appendd(9)");
var buttonMin=createBtn("-");  
buttonMin.setAttribute("onclick","appendd('-')");
buttonMin.setAttribute("id","subtract");
row2.append(button7,button8,button9,buttonMin);


var row3=createRow("div","class","row");
container.append(row3);

var button4=createBtn(4); 
button4.setAttribute("onclick","appendd(4)");
var button5=createBtn(5); 
button5.setAttribute("onclick","appendd(5)");
var button6=createBtn(6); 
button6.setAttribute("onclick","appendd(6)");
var buttonAdd=createBtn("+");  
buttonAdd.setAttribute("id","add");
buttonAdd.setAttribute("onclick",'appendd("+")');



row3.append(button4,button5,button6,buttonAdd);

var row4=createRow("div","class","row");
container.append(row4);

var button1=createBtn(1); 
button1.setAttribute("onclick","appendd(1)");
var button2=createBtn(2); 
button2.setAttribute("onclick","appendd(2)");
var button3=createBtn(3); 
button3.setAttribute("onclick","appendd(3)");
var buttonEql=createBtn("=");  
buttonEql.setAttribute("onclick","cal()");
buttonEql.setAttribute("id","equal");

row4.append(button1,button2,button3,buttonEql);

var row5=createRow("div","class","row");
container.append(row5);

var buttonbl1=createBtn(" "); 
var button0=createBtn(0); 
button0.setAttribute("onclick","appendd(0)");
var buttonDot=createBtn("."); 
buttonDot.setAttribute("onclick",'appendd(".")');
var buttonbl2=createBtn(" "); 

row5.append(buttonbl1,button0,buttonDot,buttonbl2);

document.body.append(box);



