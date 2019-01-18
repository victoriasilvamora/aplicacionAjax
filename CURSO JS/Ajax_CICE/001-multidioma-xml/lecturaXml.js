
page('blog');

function page(info){
    switch(info){
        case 'blog':
            cargarEntradas();
            break;
        case 'nosotros':
            cargarNosotros();
            break;
    }
    localStorage.setItem("pagina",info);
}


$(".es").click(function(){
    localStorage.setItem("idioma","es");
    page(localStorage.getItem("pagina"));
});
$(".en").click(function(){
    localStorage.setItem("idioma","en");
    page(localStorage.getItem("pagina"));    
});


function cargarEntradas(){
    
    
    $(".content").empty();
    $("h1").empty().html("blog");
    
    var idioma=localStorage.getItem("idioma");
    if(idioma==null){
        idioma='es';
    }    
    
    //$.get();
    $.ajax({
        type:"GET",
        url:"xml/blog_"+idioma+".xml",
        dataType: "xml",
        success: function(xml){
            $(xml).find("blog").find("entrada").each(function(i,entrada){
                var id=$(entrada).children("id").text();
                var titulo=$(entrada).children("titulo").text();
                var fecha=$(entrada).children("fecha").text();
                var texto=$(entrada).children("texto").text();
                $(".content").append('<div class="entrada" id="entrada_'+id+'"><h2>'+titulo+'</h2><h3>'+fecha+'</h3><p>'+texto+'</p></div>');
            });
         }
    });
    
}
    
    


function cargarNosotros(){
    $(".content").empty();
    var idioma=localStorage.getItem("idioma");
    if(idioma==null){
        idioma='es';
    }  
    
    
    $.ajax({
        type:"GET",
        url:"xml/blog_"+idioma+".xml",
        dataType: "xml",
        success: function(xml){
            var titulo=$(xml).find("nosotros").children("titulo").text();
            var texto=$(xml).find("nosotros").children("texto").text();
            $("h1").empty().html(titulo);
            $(".content").append("<p>"+texto+"</p>");
        }
    });
    
    
}