     $(document).ready(function(){
            $(".hambuger a").click(function(){
                $(".menu").fadeToggle();
                $(this).parent(".hambuger").toggleClass("openMenu")
            });
        });
