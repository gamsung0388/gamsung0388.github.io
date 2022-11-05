$(function(){

    //ㅇ

    //로컬스트리지
    $(document).on('click','[name=chk]',function(e){
        var chk_leng = $("[name=chk]:checked").length;
        console.log("chk_leng::::"+chk_leng);
        if(chk_leng>3){
            var checked_val =$(this).is(":checked");
            return alert("3개 이상 등록할수 없습니다");            
        }        
    });
    
    //이미지 클릭
    $(document).on('click','#imgBtn',function(e){
        $("#imageFile").click();
    });

    //이미지 가로 세로크기 
    $("#imageFile").on("change", function(event) {
        var $width = $(this).attr("data-width");
        var $height = $(this).attr("data-height");
        
        
        var file = event.target.files[0];
    
        var reader = new FileReader(); 
        reader.onload = function(e) {
            
            $('body').append('<img src="" id="temp_img" style="display:none;" />');  //보이지 않는 임시 img 태그를 생성.

           $img = $('#temp_img').attr('src', e.target.result);                          //파일을 선택했을 경우 정보를 $img 객체에 저장

           console.log("이미지 가로: " + $img.width() + " 이미지세로: " + $img.height());

           if($img.width() != $width || $img.height() != $height){                  //가로 세로 사이즈 비교 후 반환
                alert('지정된 크기와 맞지 않습니다.('+$width + 'x'+ $height +')');
                $("#imageFile").val('');
                $('#temp_img').remove(); //위에서 생성한 임시 img 태그 삭제
                return;
            }else{
                $("#preview").attr("src", e.target.result);
            }
        }
    
        reader.readAsDataURL(file);
    });
    
});