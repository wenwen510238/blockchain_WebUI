//將合約傳來的資料放進data//
var data = [{
    product:'產品名稱1',
    ingredient:'大豆',
    supply_name:'製造商名字1',
    supply_address:'製造商地址1',
    supply_time:'製造日期1',
    process_name:'加工商名字1',
    process_address:'加工商地址1',
    process_method:'加工方法1',
    expiration_date:'有效期限1',
    agent_name:'代理商名稱1',
    agent_address:'代理商地址1'
},
{
    product:'產品名稱2',
    ingredient:'牛奶',
    supply_name:'製造商名字2',
    supply_address:'製造商地址2',
    supply_time:'製造日期2',
    process_name:'加工商名字2',
    process_address:'加工商地址2',
    process_method:'加工方法2',
    expiration_date:'有效期限2',
    agent_name:'代理商名稱2',
    agent_address:'代理商地址2'
},
{
    product:'產品名稱3',
    ingredient:'豬肉',
    supply_name:'製造商名字3',
    supply_address:'製造商地址3',
    supply_time:'製造日期3',
    process_name:'加工商名字3',
    process_address:'加工商地址3',
    process_method:'加工方法3',
    expiration_date:'有效期限3',
    agent_name:'代理商名稱3',
    agent_address:'代理商地址3'
},
{
    product:'產品名稱4',
    ingredient:'牛肉',
    supply_name:'製造商名字4',
    supply_address:'製造商地址4',
    supply_time:'製造日期4',
    process_name:'加工商名字4',
    process_address:'加工商地址4',
    process_method:'加工方法4',
    expiration_date:'有效期限4',
    agent_name:'代理商名稱4',
    agent_address:'代理商地址4'
},
{
    product:'產品名稱5',
    ingredient:'雞肉',
    supply_name:'製造商名字5',
    supply_address:'製造商地址5',
    supply_time:'製造日期5',
    process_name:'加工商名字5',
    process_address:'加工商地址5',
    process_method:'加工方法5',
    expiration_date:'有效期限5',
    agent_name:'代理商名稱5',
    agent_address:'代理商地址5'
},
{
    product:'產品名稱6',
    ingredient:'紅豆',
    supply_name:'製造商名字6',
    supply_address:'製造商地址6',
    supply_time:'製造日期6',
    process_name:'加工商名字6',
    process_address:'加工商地址6',
    process_method:'加工方法6',
    expiration_date:'有效期限6',
    agent_name:'代理商名稱6',
    agent_address:'代理商地址6'
},
{
    product:'產品名稱7',
    ingredient:'綠豆',
    supply_name:'製造商名字',
    supply_address:'製造商地址7',
    supply_time:'製造日期7',
    process_name:'加工商名字7',
    process_address:'加工商地址7',
    process_method:'加工方法7',
    expiration_date:'有效期限7',
    agent_name:'代理商名稱7',
    agent_address:'代理商地址7'
},
{
    product:'產品名稱8',
    ingredient:'小麥',
    supply_name:'製造商名字8',
    supply_address:'製造商地址8',
    supply_time:'製造日期8',
    process_name:'加工商名字8',
    process_address:'加工商地址8',
    process_method:'加工方法8',
    expiration_date:'有效期限8',
    agent_name:'代理商名稱8',
    agent_address:'代理商地址8'
},
{
    product:'產品名稱9',
    ingredient:'芒果',
    supply_name:'製造商名字9',
    supply_address:'製造商地址9',
    supply_time:'製造日期9',
    process_name:'加工商名字9',
    process_address:'加工商地址9',
    process_method:'加工方法9',
    expiration_date:'有效期限9',
    agent_name:'代理商名稱9',
    agent_address:'代理商地址9'
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
    console.log("data:" + data[i].product);
    td.innerHTML=data[i].product;
    tr.appendChild(td);

    tr = document.createElement('tr');//box內部table的第二row(裡面有兩個td)
    table.appendChild(tr);

    td = document.createElement('td');////box內部table的第二row的第一col(td)(放包裝按鈕)
    td.width='74px';
    tr.appendChild(td);
    //下面是加上生產按鈕及跳出小框框//
    td.innerHTML=td.innerHTML+`
    <button type="button" data-bs-toggle="modal" data-bs-target="#agent${i+1}" class="produce_btn" >包裝</button>
    <div class="modal fade" id="agent${i+1}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4>生產</h4>
                    <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control ingredient" style="margin-top:13px" placeholder="輸入產品名稱"/>
                            <input type="text" class="form-control ingredient" style="margin-top:13px" placeholder="輸入價格"/>
                            <input type="text" class="form-control ingredient" style="margin-top:13px"   placeholder="輸入提供的售後服務"/>
                            <input type="text" class="form-control ingredient" style="margin-top:13px"   placeholder="輸入包裝方法"/>
                            <p class="form-control" style="margin-top:13px; text-align: left;">成分: ${data[i].ingredient}</p>
                            <p class="form-control" style="margin-top:13px; text-align: left;">製造日期 : ${data[i].supply_time}</p>
                            <p class="form-control" style="text-align: left;">製造商地址 : ${data[i].supply_address}</p>
                            <p class="form-control" style="text-align: left;">製造商名字 : ${data[i].supply_name}</p>
                            <p class="form-control" style="margin-top:13px; text-align: left;">有效期限: ${data[i].expiration_date}</p>
                            <p class="form-control" style="margin-top:13px; text-align: left;">加工廠名字 : ${data[i].process_name}</p>
                            <p class="form-control" style="text-align: left;">加工廠地址 : ${data[i].process_address}</p>
                            <p class="form-control" style="text-align: left;">加工廠方法 : ${data[i].process_method}</p>
                            <p class="form-control" style="margin-top:13px; text-align: left;">代理商名字: ${data[i].agent_name}</p>
                            <p class="form-control" style="margin-top:13px; text-align: left;">代理商地址 : ${data[i].agent_address}</p>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-info" data-bs-dismiss="modal">加工</button>
                    <button type="button" class="btn btn-info" data-bs-dismiss="modal">取消</button>
                </div>
            </div>
        </div> 
    </div>
    `;
}