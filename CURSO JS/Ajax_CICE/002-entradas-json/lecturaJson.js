
var pag=0;

//cómo sabemos cuándo hemos llegado al final del documento => el max scroll que vamos a poder hacer, es la altura real del doc - la altura de la ventana, es decir, que cuándo hemos hecho tanto scroll cómo esa diferencia es que hemos llegado al final
$(window).scroll(function(){
    if( Math.round($(window).scrollTop())  ==  $(document).height()-$(window).height() ){
        pag++;
        cargardatos();
    }
});


function cargardatos(){
    
    //$.getJSON();
    $.ajax({
        type:"GET",
        url: "entradas_"+pag+".json",
        dataType: "json",
        success: function(json){
            $.each(json.blog,function(i,noticia){
                $(".content").append("<div class='entrada'><h2>"+noticia.titulo+"</h2><p>"+noticia.texto+"</p></div>");
            });
        },
        error: function(){
            alert("fin");
        },
        complete: function(){
            $(".throbber").css("display","none");
        }
    });
    
}