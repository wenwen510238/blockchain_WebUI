var add_btn=document.getElementById("add_btn");
var row1=document.getElementById("row1");
var require=document.getElementById("require_name");
var input_name=document.getElementById("input_name");
var input_addr=document.getElementById("input_addr");
var resume_content=document.getElementById("resume_content1");
var resume_btn=document.getElementsByClassName("resume_btn");
var resume_count=resume_btn.length;
var a=1;

/*if(a==1){
    row1.innerHTML = row1.innerHTML + `
    <td class="box" >
        <table width="148px" height="100px" style="text-align:center;  vertical-align: middle!important;">
            <tr height="70px" style="text-align:center;">
                <td class="font_roboto" style="text-align:center;" colspan="2">第二個商品</td>
            </tr>
            <tr>
                <td width="74px">
                    <button class="resume_btn produce_btn" type="button" data-bs-toggle="modal" data-bs-target="#resume2">履歷</button>
                    <div class="modal fade" id="resume2">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5>履歷</h5>
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    <div class="form-group" id="resume_content2">
                                        <!--用動態生成履歷內容(用p)-->
                                    </div>
                                </div>
                                <div class="modal-footer">

                                </div>
                            </div>
                        </div> 
                    </div>
                </td>
                <td>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#buy2" class="buy_btn" >購買</button>
                    <div class="modal fade" id="buy2">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div class="modal-body">
                                    價格:100
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-info" data-bs-dismiss="modal">購買</button>
                                    <button type="button" class="btn btn-info" data-bs-dismiss="modal">取消</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </td>
            </tr>
        </table>
    </td>
    `;
    a=0;
}*/

for(var i=0;i<resume_count;i++){
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
}

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

