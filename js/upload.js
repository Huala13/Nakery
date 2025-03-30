window.onload = function(){
    //上傳檔案
    let fileInput = document.getElementById("file-input");
    let uploadedFiles = document.getElementById("uploaded-files");

    fileInput.addEventListener("change", function() {
        // 取得上傳的檔案
        let file = fileInput.files[0];
        // 新增一個檔案名稱的元素
        let fileName = document.createElement("div");
        
        if (file) {
            fileName.innerHTML = file.name;
        } else {
            fileName.innerHTML = "請選擇檔案..";
        }
    
        uploadedFiles.innerHTML = fileName.innerHTML;
    });
};