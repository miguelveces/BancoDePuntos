/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function LoginButton_onclick() {
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
//        url: "http://190.72.192.18/webservicedemo/service.asmx/HelloWorld",
        url: "http://bancoservicios.somee.com/BancoDePuntos/Business_Services/App_Services/WSCuenta.asmx/HelloWorld",
        data: '{}',
        success: function(msg) {
            jsonArray = $.parseJSON(msg.d);
            var $ul = $('<ul id="details">');
            for (i = 0; i < jsonArray.length; i++)
            {
                $("#details").append('<li id="' + i + '" name="head" >' + jsonArray[i].Nombre + '</li>');
            }
//            $('#details').listview('refresh');
            alert("redirecionar");
        },
        error: function(msg) {
            alert("Error" + msg);
        }
    });
}