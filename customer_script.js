var add_btn=document.getElementById("add_btn");
var require=document.getElementById("require_name");
var input_name=document.getElementById("input_name");
var input_addr=document.getElementById("input_addr");
var resume_btn=document.getElementById("resume_btn");

add_btn.addEventListener("click",function(){
    console.log("click!!!!!!!");
    var index=require.selectedIndex;//選第幾個
    if(index==0){
        alert("尚未選擇身份，請選擇一個身份");
    }
    else if(input_name.value=="" || input_addr.value==""){
        alert("請檢查是否輸入公司名字或公司名稱");
    }
    else{
        alert("你想申請的身分是:"+require.options[index].value+" , 公司名稱 : "+input_name.value+" , 公司地址 : "+input_addr.value);
    }
})
