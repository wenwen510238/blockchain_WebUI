var supply_1_btn=document.getElementById("supply_1");
var table_1=document.getElementById("table_1");
var body_1=document.getElementById("body_1");

var supply_2_btn=document.getElementById("supply_2");
var table_2=document.getElementById("table_2");
var body_2=document.getElementById("body_2");

supply_1_btn.addEventListener("click",function(){
    console.log("supply_1_btn click!!!!!!!");
    body_1.innerHTML = ``;
    body_1.innerHTML = body_1.innerHTML + `
    <p type="text" class="form-control" style="text-align: left;">成分:${table_1.rows[0].cells[0].innerHTML}</p>
    <p class="form-control" style="margin-top:13px; text-align: left;">製造日期 : </p>
    <p class="form-control" style="text-align: left;">製造商地址 : </p>
    <p class="form-control" style="text-align: left;">製造商名字 : </p>
    `;
})

supply_2_btn.addEventListener("click",function(){
    console.log("supply_2_btn click!!!!!!!");
    body_2.innerHTML = ``;
    body_2.innerHTML = body_2.innerHTML + `
    <p type="text" class="form-control" style="text-align: left;">成分:${table_2.rows[0].cells[0].innerHTML}</p>
    <p class="form-control" style="margin-top:13px; text-align: left;">製造日期 : </p>
    <p class="form-control" style="text-align: left;">製造商地址 : </p>
    <p class="form-control" style="text-align: left;">製造商名字 : </p>
    `;
    console.log(body_2.innerHTML)
})
