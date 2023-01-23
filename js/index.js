$(document).ready(function () {
    const inputs = document.getElementById('seatext');
    $(".seabox").hide()
    $(".mat").click(function(){
        setTimeout(() => {
            $(".seabox").fadeIn()
            $(".mainnav").hide()  
        }, 500);
        
    })
    $("#cancel").click(function(){
        inputs.value ="";
        setTimeout(() => {
            $(".seabox").hide()
            $(".mainnav").fadeIn() 
        }, 500);
        
    })
    $('.prevv').hide()
    $('.nextt').hide()
    $('.slid').hover(function(){
        $('.prevv').toggle()
        $('.nextt').toggle()
    })
    $(".valide").hide()
    $(".validatee").hide()
    $(".vli1").hide()
    $(".vli2").hide()
    $(".vli3").hide()
    const Name = document.getElementById('username');
    const Email = document.getElementById('useremail');
    const Comment = document.getElementById('comment');
    $(".submithover").click(function(){
        if(Name.value=="" && Email.value=="" && Comment.value==""){
            setTimeout(() => {
                $(".valide").hide()
                $(".validatee").show()
                $(".vli1").show()
                $(".vli2").show()
                $(".vli3").show()
                $("#username").addClass("required");
                $("#useremail").addClass("required");
                $("#comment").addClass("required");
            }, 1000);
            
        }
        if(Name.value=="" && Email.value==""){
            setTimeout(() => {
                $(".valide").hide()
                $(".validatee").show()
                $(".vli1").show()
                $(".vli2").show()
                $("#username").addClass("required");
                $("#useremail").addClass("required");
            }, 1000);
            
        }
        if(Name.value=="" && Comment.value==""){
            setTimeout(() => {
                $(".valide").hide()
                $(".validatee").show()
                $(".vli1").show()
                $(".vli3").show()
                $("#username").addClass("required");
                $("#comment").addClass("required");
            }, 1000);
            
        }
        if(Comment.value=="" && Email.value==""){
            setTimeout(() => {
                $(".valide").hide()
                $(".validatee").show()
                $(".vli2").show()
                $(".vli3").show()
                $("#useremail").addClass("required");
                $("#comment").addClass("required");
            }, 1000);
            
        }
        else if(Name.value==""){
            setTimeout(() => {
                $(".valide").hide()
                $(".validatee").show()
                $(".vli1").show()
                $("#username").addClass("required");
            }, 1000);
            
        }else if(Email.value==""){
            setTimeout(() => {
                $(".valide").hide()
                $(".validatee").show()
                $(".vli2").show()
                $("#useremail").addClass("required");
            }, 1000);
            
        }else if(Comment.value==""){
            setTimeout(() => {
                $(".valide").hide()
                $(".validatee").show()
                $(".vli3").show()
                $("#comment").addClass("required");
            }, 1000);
        }else{
            setTimeout(() => {
                $(".valide").show()
            }, 2000);
            $(".validatee").hide()
            $(".vli1").hide()
            $(".vli2").hide()
            $(".vli3").hide()
            $("#username").removeClass("required");
            $("#useremail").removeClass("required");
            $("#comment").removeClass("required");
        }
    })

    
});