window.onload = function(){
    var nav = document.getElementById("sec_nav");
    var toTop = document.getElementById("to_top");
    var navTop = nav.offsetTop;
    var begin = 0,end = 0,timer = null;

    window.onscroll = function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset;

        begin = scrollTop;

        if(scrollTop > 900){
            toTop.style.display = "block";
        }else{
            toTop.style.display = "none";
        }

        if(scrollTop >= navTop){
            nav.className = "nav-active sec-nav";
        }else{
            nav.className = "sec-nav";
        }

    }

    $('.pri-banner').terseBanner({
        "adaptive" : true,
        btn : false,
        auto:4000,
        thumb: {
            width: 150,
            height: 84,
            gap: 4,
            visible: 3
        }
    });

    var loginPanel = document.getElementById("loginPanel");
    var mask = document.getElementById("mask");
    var loginQ = document.getElementById("loginQ");
    var hole;
    loginPanel.onclick = function(event){
        preventBubble(event);

        mask.style.display = "block";
        loginQ.style.display = "block";

        hole = document.body || document.documentElement;

        hole.style.overflow = "hidden";
    }

    document.onclick = function(event){
        var e = event || window.event;
        var target = e.target || e.srcElement;
        if(target.id === "mask"){
            mask.style.display = "none";
            loginQ.style.display = "none";

            hole = document.body || document.documentElement;

            hole.style.overflow = "auto";
        }
    }


    toTop.onclick = function(){
        preventBubble(event);
        clearInterval(timer);
        timer = setInterval(function(){
            var speed = Math.floor(begin + (end - begin) / 20);
            window.scrollTo(0,speed);
            if(speed === end){
                clearInterval(timer);
            }
        },20)
    }
}

function preventBubble(event){
    if(event.stopPropagation){
        event.stopPropagation()
    }else{
        window.event.cancelBubble = true;
    }
}
