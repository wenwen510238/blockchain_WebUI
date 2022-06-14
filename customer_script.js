/*var add_btn=document.getElementById("add_btn");
var row1=document.getElementById("row1");
var require=document.getElementById("require_name");
var input_name=document.getElementById("input_name");
var input_addr=document.getElementById("input_addr");
var resume_content=document.getElementById("resume_content1");
var resume_btn=document.getElementsByClassName("resume_btn");
var resume_count=resume_btn.length;
var a=1;*/

//將合約傳來的資料放進data//
var data = [{
    name:'商品名稱1',
    price:'價格1',
    ingredient:'大豆',
    supply_name:'製造商名字1',
    supply_address:'製造商地址1',
    supply_time:'製造日期1',
    process_name:'加工商名字1',
    process_address:'加工商地址1',
    process_method:'加工方法1',
    expiration_date:'有效期限1',
    agent_name:'代理商名稱1',
    agent_address:'代理商地址1',
    customer_service:'售後服務1'
},
{
    name:'商品名稱2',
    price:'價格2',
    ingredient:'大豆2',
    supply_name:'製造商名字2',
    supply_address:'製造商地址2',
    supply_time:'製造日期2',
    process_name:'加工商名字2',
    process_address:'加工商地址2',
    process_method:'加工方法2',
    expiration_date:'有效期限2',
    agent_name:'代理商名稱2',
    agent_address:'代理商地址2',
    customer_service:'售後服務2'
}
];

var size=data.length;
var tbody=document.querySelector('#main');
var tmp = Math.floor(size/8);
console.log("tmp : " + tmp);
for(var i = 0 ; i < Math.ceil(size/8) ; i++){//創建'box'
    console.log("i : " + i);
    var tr = document.createElement('tr');
    tr.style.cssText=';margin-left: 64px; text-align:center;  overflow: scroll';
    tr.id='row'+(i+1);
    tbody.appendChild(tr);
    if(i<tmp){
        for(var j=0 ; j<8 ; j++){
            var td = document.createElement('td');
            td.id='box'+(i*8+j+1);
            td.className = 'box';
            tr.appendChild(td);   
        }
    }
    else{
        for(var j=0 ; j<size-tmp*8 ; j++){
            var td = document.createElement('td');
            td.id='box'+(tmp*8+j+1);
            td.className = 'box';
            tr.appendChild(td);
        }
    }
}


console.log("data length : "+data.length);
for(var i=0;i<data.length;i++){
    var table = document.createElement('table');//每個box內部再變成一個table
    var box = document.querySelector('#box'+(i+1));
    table.width = '148px';
    table.id='box_table'+(i+1);
    table.style.cssText = 'text-align: center;vertical-align: middle !important;height: 100px;';
    box.appendChild(table);

    var tr = document.createElement('tr');//box內部table的第一row
    tr.style.cssText='text-align:center;height:65px;';
    table = document.querySelector('#box_table'+(i+1));
    table.appendChild(tr);

    var td = document.createElement('td');//box內部table的第一row的第一col(放產品名字)
    td.class='font_roboto';
    td.style.cssText='text-align:center';
    td.colSpan='2';
    console.log("data:" + data[i].name);
    td.innerHTML=data[i].name;
    tr.appendChild(td);

    tr = document.createElement('tr');//box內部table的第二row(裡面有兩個td)
    tr.className='inner_tr';
    table.appendChild(tr);

    td = document.createElement('td');////box內部table的第二row的第一col(td)(放履歷按鈕)
    td.width='74px';
    tr.appendChild(td);
    //下面是加上履歷按鈕及跳出小框框//
    td.innerHTML=td.innerHTML+`
    <button class="resume_btn produce_btn" type="button" data-bs-toggle="modal" data-bs-target="#resume${i+1}">履歷</button>
    <div class="modal fade" id="resume${i+1}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5>履歷</h5>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group" id="resume_content${i+1}">
                        <p class="form-control" style="margin-top:5px; text-align: left;">商品名稱 : ${data[i].name}</p>
                        <p class="form-control" style="text-align: left;">價格 : ${data[i].price}</p>
                        <p class="form-control" style="text-align: left;">成分 : ${data[i].ingredient}</p>
                        <p class="form-control" style="margin-top:13px; text-align: left;">製造商名字 : ${data[i].supply_name}</p>
                        <p class="form-control" style="text-align: left;">製造商地址 : ${data[i].supply_address}</p>
                        <p class="form-control" style="text-align: left;">製造日期 : ${data[i].supply_time}</p>
                        <p class="form-control" style="margin-top:13px; text-align: left;">加工商名字 : ${data[i].process_name}</p>
                        <p class="form-control" style="text-align: left;">加工商地址 : ${data[i].process_address}</p>
                        <p class="form-control" style="text-align: left;">加工方法 : ${data[i].process_method}</p>
                        <p class="form-control" style="margin-top:13px; text-align: left;">有效期限 : ${data[i].expiration_date}</p>
                        <p class="form-control" style="text-align: left;">代理商名稱 : ${data[i].agent_name}</p>
                        <p class="form-control" style="text-align: left;">代理商地址 : ${data[i].agent_address}</p>
                        <p class="form-control" style="text-align: left;">售後服務 : ${data[i].customer_service}</p>
                    </div>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div> 
    </div>
    `;

    td = document.createElement('td');////box內部table的第二row的第二col(td)(放購買按鈕)
    tr.appendChild(td);
    //下面是加上購買按鈕及跳出小框框//
    td.innerHTML = td.innerHTML + `
    <button type="button" data-bs-toggle="modal" data-bs-target="#buy${i+1}" class="buy_btn" >購買</button>
    <div class="modal fade" id="buy${i+1}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body" id="price${i+1}">
                    價格:${data[i].price}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info" data-bs-dismiss="modal">購買</button>
                    <button type="button" class="btn btn-info" data-bs-dismiss="modal">取消</button>
                </div>
            </div>
        </div> 
    </div>
    `;


}


/*for(var i=0;i<resume_count;i++){
    resume_btn[i].addEventListener("click",function(){
        console.log("click resume!!!!!!!");
        console.log(resume_content.innerHTML);
        //這邊需要先var一些變數讀取所有履歷要呈現的資料 將下面的 "加工廠名稱 : " 等等後面加上變數名稱 就可以在按下履歷按鈕時顯示出來 //
        resume_content.innerHTML=``;
        resume_content.innerHTML = resume_content.innerHTML + `
        <p class="form-control" style="text-align: left;">加工廠名稱 :  </p>
        <p class="form-control" style="text-align: left;">產品名稱 :  </p>
        <p class="form-control" style="text-align: left;">加工方法 :  </p>
        .
        .
        .
        .

        `;
    })
}*/

/*add_btn.addEventListener("click",function(){
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
})*/

/*resume_btn.addEventListener("click",function(){
    console.log("click resume!!!!!!!");
    console.log(resume_content.innerHTML);
    //這邊需要先var一些變數讀取所有履歷要呈現的資料 將下面的 "加工廠名稱 : " 等等後面加上變數名稱 就可以在按下履歷按鈕時顯示出來 //
    resume_content.innerHTML=``;
    resume_content.innerHTML = resume_content.innerHTML + `
    <p class="form-control" style="text-align: left;">加工廠名稱 :  </p>
    <p class="form-control" style="text-align: left;">產品名稱 :  </p>
    <p class="form-control" style="text-align: left;">加工方法 :  </p>
    .
    .
    .
    .

    `;
})*/

