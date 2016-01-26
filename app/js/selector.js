$(function(){
    $(window).scroll(function(){
        page = 1;
        currentPage = null;
        while($("#pagina"+page).length != 0){
            $("a[href=\"#pagina"+page+"\"]").css({color: "#000000", "text-decoration": "none"});
            if($("#pagina"+page).offset().top <= window.scrollY){
                if($("#pagina"+(page+1)).length != 0){
                	if($("#pagina"+(page+1)).offset().top > window.scrollY){
                        $("a[href=\"#pagina"+page+"\"]").css({color: "#166CA3"});
                    }
                } else {
                    $("a[href=\"#pagina"+page+"\"]").css({color: "#166CA3"});
                }
            }
            page++;
        }
    });
});