function preloadImg(wrapId, imgId, iconId){
    //var到input
    var input = document.getElementById(wrapId);
    //监听input，数值变化onchange即用户上传了文件
    input.onchange = function(){
        //获取用户上传的文件对象
        var theFile = input.files[0];
        //实例化一个文件读取器
        var fileReader = new FileReader();
        //将用户上传的文件对象作为参数，传入文件读取器的方法readAsDataURL
        fileReader.readAsDataURL(theFile);
        //文件读取器方法执行完毕后调用函数
        fileReader.onload = function (){
            $('#'+ iconId).hide();
            $('#'+ imgId).css('width','100%');
            //文件读取器的result属性即fileReader.result，就是上传文件的dataURL
            $("#" + imgId)[0].src = fileReader.result;
        }
    }
}

// 身份证认证
preloadImg("idImgUpload",'id-preview','id-upload-icon');
// 照片
preloadImg("talentImg1","talentImg1-preview","talentImg1-icon");
preloadImg("talentImg2","talentImg2-preview","talentImg2-icon");
preloadImg("talentImg3","talentImg3-preview","talentImg3-icon");