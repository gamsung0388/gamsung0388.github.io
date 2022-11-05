$(function(){

    //로컬스트리지
    $(document).on('click','[name=chk]',function(e){
        var chk_leng = $("[name=chk]:checked").length;
        console.log("chk_leng::::"+chk_leng);
        if(chk_leng>3){
            var checked_val =$(this).is(":checked");
            $(this).prop("checked",false);
            return alert("3개 이상 등록할수 없습니다"); 
                      
        }     
    });
    //로컬스트리지 버튼
    $('#localstBtn').on('click',function(){
        
        var chk_vals = $("[name=chk]:checked");
        
        console.log("chk_vals: ",chk_vals);

        for(i=0;i<chk_vals.length;i++){
            var chk_val = chk_vals[i].value;
            //console.log("chk_val: ",chk_val);
            localStorage.setItem(i+1,chk_val);
        }               
    });

    //이미지 삭제
    $('#imgCancle').on('click',function(){
        $("#imageFile").val('');
        $("#preview").attr("src", "");
    });

    //이미지 클릭
    $(document).on('click','#imgBtn',function(e){
        $("#imageFile").click();
    });

    //카메라 클릭
    $(document).on('click','#cameraBtn',function(e){
        $("#cameraFile").click();
    });

    //이미지 파일 change
    $("#imageFile").on("change", function(event) {
        var $width = $(this).attr("data-width");
        var $height = $(this).attr("data-height");
        
        var file = event.target.files[0];
        var reader = new FileReader(); 
        reader.onload = function(e) {
            $('#temp_img').attr('src', e.target.result);                          //파일을 선택했을 경우 정보를 $img 객체에 저장
        }
        var img = $('#temp_img');

        reader.readAsDataURL(file);
        
        /*********window함수가 안드로이드와 애플에서도 되는지 확인불가*****************/
        var _URL = window.URL || window.webkitURL;
        var img = new Image();
        img.src = _URL.createObjectURL(file);
        img.onload = function() {            
            if(img.width != $width || img.height != $height) {
                alert("이미지 가로 "+ $width +"px, 세로 "+$height+"px로 맞춰서 올려주세요.");
                $("#imageFile").val("");
                $('#temp_img').remove();
            }else{
                $("#preview").attr("src", _URL.createObjectURL(file))
            } 
        }
    });

    $("#cameraFile").on("change", function(event) {
        var $width = $(this).attr("data-width");
        var $height = $(this).attr("data-height");
        
        var file = event.target.files[0];
    
        var reader = new FileReader(); 
        reader.onload = function(e) {
            $('#temp_img').attr('src', e.target.result);                          //파일을 선택했을 경우 정보를 $img 객체에 저장
        }
        var img = $('#temp_img');

        reader.readAsDataURL(file);
        
        /*********window함수가 안드로이드와 애플에서도 되는지 확인불가*****************/
        var _URL = window.URL || window.webkitURL;
        var img = new Image();
        img.src = _URL.createObjectURL(file);
        img.onload = function() {            
            if(img.width != $width || img.height != $height) {
                alert("이미지 가로 "+ $width +"px, 세로 "+$height+"px로 맞춰서 올려주세요.");
                $(this).val("");
            }else{
                $("#preview").attr("src", _URL.createObjectURL(file))
            } 
        }
    });


    
    /**********************************/
    //파일리더로 맨처음 가져올때 이미지 로드가 되기전이라
    //이미지의 가로 세로를 가져올 수 없다.
    /*****************************/

    // $(document).on('change', 'input[type=file]', function(){
    //     var $width = $(this).attr('data-width');
    //     var $height = $(this).attr('data-height');
    //     var $target = $(this);

    //     if(window.FileReader){ //FileReader를 지원하는 브라우저의 경우 IE 10이상, 크롬..
    //       var reader = new FileReader();
            //   reader.onload = function (e) {
            //       $('body').append('<img src="" id="temp_img" style="display:none;" />');  //보이지 않는 임시 img 태그를 생성.
            //       $img = $('#temp_img').attr('src', e.target.result);                          //파일을 선택했을 경우 정보를 $img 객체에 저장
            //       if($img.width() != $width || $img.height() != $height){                  //가로 세로 사이즈 비교 후 반환
            //            alert('지정된 크기와 맞지 않습니다.('+$width + 'x'+ $height +')');
            //            $target.val('');
            //            $('#temp_img').remove(); //위에서 생성한 임시 img 태그 삭제
            //            return;
            //        }
            //  };
    //          reader.readAsDataURL($(this)[0].files[0]);  //파일을 img 태그에 보여줄 수 있도록 base64로 url을 생성합니다.
    //     } else {                                               //FileReader를 지원하지 않는 브라우저의 경우 IE 9 이하
    //        $(this)[0].select();
    //        var src = document.selection.createRange().text;
    //        $('body').append('<img src="" id="temp_img" style="display:none;" />');
    //        $img = $('#temp_img').attr('src', src);
    //        $('#temp_img').remove();
    //        if($img.width() != $width || $img.height() != $height){
    //            alert('지정된 크기와 맞지 않습니다.('+$width + 'x'+ $height +')');
    //            $(this).val('');
    //            return;
    //        }
    //     }
    //     $('#temp_img').remove();
    //    });

    
});