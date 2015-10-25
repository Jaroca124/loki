function load() {
    $(document).ready(function() {
        $('#overlay1').fadeIn(2000);
        $('#banner_text').delay(1000).fadeIn(2000);
        window.onresize = resizing;
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y >= $('#banner').height()) {
            $('#header').fadeIn();
        } else {
            $('#header').fadeOut();
        }
    });
    
    //Section One Animation
    $(document).scroll(function() {
        var y = $(this).scrollTop() + 100;
        if (y >= $('#one').height()) {
            $('#iphone').slideDown();
        }
    });
    
    $(document).scroll(function() {
        var y = $(this).scrollTop() + 100;
        if (y >= $('#three').height()) {
            $('#pp_image').delay(500).slideDown();
        }
    });

    /*
    //Section Three Animation
    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y >= $('#three').height()) {
            $('#three_content').fadeIn(3000);
        }
    });*/

    //Arrow Action
    $('.goto-next').click(function(event) {
        var status = $(this).attr('id').split('_')[1];
        $('html, body').animate({
            scrollTop: $('#' + status).offset().top
        }, 500);
    });

    $('.goto-next-black').click(function(event) {
        var status = $(this).attr('id').split('_')[1];
        $('html, body').animate({
            scrollTop: $('#' + status).offset().top
        }, 500);
    });
    
    function resizing() {
        if (($(window).width() < 1140) || ($(window).height() < 560)) {
            $("#Z_hover").css("display", "block");
            $('#ZK_Container').css("background-color", "rgba(0, 0, 0, .8)");
            $("#J_hover").css("display", "block");
            $('#JC_Container').css("background-color", "rgba(0, 0, 0, .8)");
        }
        else {
            $("#Z_hover").css("display", "none");
            $('#ZK_Container').css("background-color", "rgba(0, 0, 0, 0)");
            $("#J_hover").css("display", "none");
            $('#JC_Container').css("background-color", "rgba(0, 0, 0, 0)");
        }
    }
    
    $("#ZK").hover(function() {
        if (($(window).width() > 1140) && ($(window).height() > 560)) {
            $("#Z_hover").css("display", "block");
            $('#ZK_Container').css("background-color", "rgba(0, 0, 0, .8)");
        }
    }, function(){
            if (($(window).width() > 1140) && ($(window).height() > 560)) {
                $("#Z_hover").css("display", "none");
                $('#ZK_Container').css("background-color", "rgba(0, 0, 0, 0)");
            }
    });
    
    $("#JC").hover(function() {
        //console.log("W: " + $(window).width() + ' ' + "H: " + $(window).height());
        if (($(window).width() > 1140) && ($(window).height() > 560)) {
            $("#J_hover").css("display", "block");
            $('#JC_Container').css("background-color", "rgba(0, 0, 0, .8)");
        }
    }, function(){
            if (($(window).width() > 1140) && ($(window).height() > 560)) {
                $("#J_hover").css("display", "none");
                $('#JC_Container').css("background-color", "rgba(0, 0, 0, 0)");
            }
    });
    
    
    //Change Background Div
    
    var i =0;
    var images = ['Assets/bg5.JPG', 'Assets/BG3.jpg', 'Assets/Cave-min.jpg', 'Assets/valley-min.jpg', 'Assets/pier-min.jpg', 'Assets/northern_lights-min.jpg', 'Assets/golden_gate-min.jpg', 'Assets/field-min.jpg'];
    var image = $('#dyn_bg');
    var images_2 = ['Assets/pin_1.png', 'Assets/pin_2.png', 'Assets/pin_3.png', 'Assets/pin_4.png', 'Assets/pin_1.png', 'Assets/pin_2.png', 'Assets/pin_3.png', 'Assets/pin_4.png'];
    var image_2 = $('#pin_view');
    //Initial Background image setup
    image.css('background-image', 'url(Assets/field-min.jpg)');
    if (($(window).width() > 1141) && ($(window).height() > 561)) {
        image_2.css('background-image', 'url(Assets/pin_4.png)');
    }
    //Change image at regular intervals
    setInterval(function() {  
        i++;
        if (($(window).width() < 1141) || ($(window).height() < 561)) {
            image_2.css('display', 'none');
        }
        else {
            image_2.css('display', 'block');
        }
        image.fadeOut(1000, function () {
            image.css('background-image', 'url(' + images [i] +')');
            image.fadeIn(1000);
        });
        if (($(window).width() > 1141) && ($(window).height() > 561)) {
            image_2.fadeOut(1000, function () {
                image_2.css('background-image', 'url(' + images_2 [i] +')');
                image_2.delay(1000).fadeIn(1000);
            });
        }
        if(i == images.length)
            i = 0;
        }, 7500);
    
}

function close_congrats() {
    $("#confirmation_banner").css("display", "none");
}

function signup() {
    var email;
    email = $('#email_input').val();
    if (!validateEmail(email)) {
        alert("Please enter a valid email address!");   
    }
    else {
        $('#confirmation_banner').fadeIn(1000);
        $('#email_input').val('');
        var parameters = "email=" + email;
        var request = new XMLHttpRequest();
        var url = "https://nameless-beach-1116.herokuapp.com/sendEmail";
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        /*
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
            }
        }*/

        request.send(parameters);
    }
    
}

function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}