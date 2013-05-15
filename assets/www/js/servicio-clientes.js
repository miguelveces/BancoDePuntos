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
        url: "http://bancoservicios.somee.com/BancoDePuntos/Business_Services/App_Services/WSCuenta.asmx/Login",
        data: '{}',
        success: function(msg) {
            jsonArray = $.parseJSON(msg.d);
            var user = document.getElementById('usuarioinput').value;
            var pass = document.getElementById('passwordinput').value;
            

            for (i = 0; i < jsonArray.length; i++)
            {
                var pts = jsonArray[i].Puntos;
                if (user == jsonArray[i].Nombre && pass == jsonArray[i].Numero) {
                    window.location = 'principal.html#catalogo?ptss=' + pts; 
                }
            }
        },
        error: function(msg) {
            alert("Error" + msg);
        }
    });
}