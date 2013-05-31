
// ************************************************Java script que maneja la pagina de  vincular cuanta y catalogo****************************************************************
$(function() {
         obtener_get();
        var puntos = $.get("ptss");      
        //$('#punto').html('');
        $("#puntos").append(puntos);

    $('#vincular').on('pageshow', function() {

        $("#submit").on("click", function() { // empieza la funcion para validar el mail
            if ($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
                alert("La dirección e-mail parece incorrecta");
                return false;
            }
            var count = $("input:checked").length;
            var valores = '';
            for (i = 0; i < count; i++) {
                valores += ' ' + $("input:checked")[i].value + ',';
            }
            alert(valores);
            return false;
        }); // termina la funcion para validar el mail
        //empieza la parte para crear la lista
        var array = '[{"name": "Super Mercados El Rey", "value": "Punto de Oros"},{"name": "Novey", "value": "Novey"},{"name": "Doit Center", "value": "Doit Center"}]';
        $("#content").append('<ul id=listaempresa data-role="listview" class="ui-bar-c" data-theme="d" data-filter="true">');
        $("#content").append('<fieldset id="cbFieldSet" data-role="controlgroup">');
        var bancoempresas = JSON.parse(array); 
        var length = bancoempresas.length;
        for (var i = 0; i < length; i++) {
            $("#listaempresa").append('<li><input type="checkbox" name="cb-' + i + '" id="cb-' + i + '" value="' + bancoempresas[i].value + '"/><label for="cb-' + i + '">' + bancoempresas[i].name + '</label></li>');
        }
        $("#content").append('</ul>');
        $("#content").trigger("create");
        //$("#content").content("refresh");
        //termina la parte para crear la lista
    });

    $('#catalogo').on('pageshow', function() {      
        obtener_get();
        var puntos = $.get("ptss");      
        //$('#punto').html('');
        $("#punto").append(puntos);

        //json
        var productos_categoria = '[{"categoria": "Computadoras", "descripcion": "MacBook Pro", "costo": "200 pts", "id": "1", "imagen": "img/apple.png"},{"categoria": "Celulares", "descripcion": "Nokia", "costo": "70 pts", "id": "2", "imagen": "img/phone_lumia920.png"},{"categoria": "Celulares", "descripcion": "Samsung", "costo": "80 pts", "id": "3", "imagen": "img/phone_onex.png"},{"categoria": "Accesorios", "descripcion": "Reloj Digital", "costo": "300 pts", "id": "4", "imagen": "img/reloj.png"}]';

        $('[data-role=listview]').html('');
        var productos = JSON.parse(productos_categoria);
        var tamano = productos.length;
        //console.log(length);         
        for (var i = 0; i < tamano; i++) {
            $("#productos").append('<li> <a href="#"> <img src="' + productos[i].imagen + '"> <h2>' + productos[i].categoria + '</h2> <p>' + productos[i].descripcion + '<br>' + productos[i].costo + '</p></a> <a id="item1" href="#purchase' + productos[i].id + '" data-rel="popup" data-position-to="window" data-transition="pop">Ver detalles</a> </li>');
        }
        $("#productos").trigger("create");
        $('#productos').listview('refresh');
        $('#ventana_emergente').html('');
        for (var i = 0; i < tamano; i++) {
            $("#ventana_emergente").append('<div data-role="popup" id="purchase' + productos[i].id + '" data-theme="d" data-overlay-theme="b" class="ui-content" style="max-width:340px; padding-bottom:2em;"> <h3>Desea Canjear sus pontos por este producto?</h3>  <p>' + productos[i].categoria + ': ' + productos[i].descripcion + ' </p> <a href="canjear.html?canje=' + productos[i].costo + '" data-role="button"  data-theme="b" data-icon="check" data-inline="true" data-mini="true">Canjear ' + productos[i].costo + '</a> <a href="principal.html" data-role="button"  data-inline="true" data-mini="true">Cancel</a> </div>');

        }

        $("#ventana_emergente").trigger("create");
        //$("#ventana_emergente").trigger("refresh");
        //$('#purchase').listview('refresh');

    });


function obtener_get()
{
  $.get = function(key) {
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
}
});
