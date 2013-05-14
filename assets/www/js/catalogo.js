var x;
x=$(document);
x.ready(inicializarEventos);
  function inicializarEventos()
  {  

 (function($) {  
    $.get = function(key)   {  
        key = key.replace(/[\[]/, '\\[');  
        key = key.replace(/[\]]/, '\\]');  
        var pattern = "[\\?&]" + key + "=([^&#]*)";  
        var regex = new RegExp(pattern);  
        var url = unescape(window.location.href);  
        var results = regex.exec(url);  
        if (results === null) {  
            return null;  
        } else {  
            return results[1];  
        }  
    }  
})(jQuery);
     var puntos = $.get("ptss");
     console.log(puntos);
     //$('#punto').html('');
     $("#punto").append('Puntos: '+ puntos);

    //json
   var productos_categoria = '[{"categoria": "Computadoras", "descripcion": "MacBook Pro", "costo": "200 pts", "id": "1", "imagen": "img/apple.png"},{"categoria": "Celulares", "descripcion": "Nokia", "costo": "70 pts", "id": "2", "imagen": "img/phone_lumia920.png"},{"categoria": "Celulares", "descripcion": "Samsung", "costo": "80 pts", "id": "3", "imagen": "img/phone_onex.png"},{"categoria": "Accesorios", "descripcion": "Reloj Digital", "costo": "300 pts", "id": "4", "imagen": "img/reloj.png"}]';  
        
        $('[data-role=listview]').html('');     
         var productos = JSON.parse(productos_categoria);
         var length = productos.length;
         //console.log(length);         
         for(var i=0;i<length;i++){
            $("#productos").append('<li> <a href="#"> <img src="'+ productos[i].imagen +'"> <h2>'+ productos[i].categoria +'</h2> <p>'+ productos[i].descripcion +'<br>'+ productos[i].costo +'</p></a> <a id="item1" href="#purchase'+productos[i].id+'" data-rel="popup" data-position-to="window" data-transition="pop">Ver detalles</a> </li>');           
           }
           $("#productos").trigger("create");           
      $('#productos').listview('refresh');  
      for(var i=0;i<length;i++){
          $("#ventana_emergente").append('<div data-role="popup" id="purchase'+productos[i].id+'" data-theme="d" data-overlay-theme="b" class="ui-content" style="max-width:340px; padding-bottom:2em;"> <h3>Desea Canjear sus puntos por este producto?</h3>  <p>'+ productos[i].categoria +': '+ productos[i].descripcion +' </p> <a href="canjear.html" data-role="button" data-rel="back" data-theme="b" data-icon="check" data-inline="true" data-mini="true">Canjear '+ productos[i].costo +'</a> <a href="catalogo.html" data-role="button" data-rel="back" data-inline="true" data-mini="true">Cancel</a> </div>'); 
       }
  
 $("#ventana_emergente").trigger("create");
 $("#ventana_emergente").trigger("refresh");
 //$('#purchase').listview('refresh');

  }

