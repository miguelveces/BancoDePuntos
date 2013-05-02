var x;
x=$(document);
x.ready(inicializarEventos);
  function inicializarEventos()
  {
  	var item1, item2, item3;
     item1=$("#item1");
     item2=$("#item2");
     item3=$("#item3");     
    item1.click(tema_1);
    item2.click(tema_2);
    item3.click(tema_3);    

  }
function tema_1(){
document.getElementById("purchase").innerHTML=" <h3>Desea Cangear sus pontos por este producto</h3>  <p>Computadoras: MacBook Pro </p> <a href=\"cangear.html\" data-role=\"button\" data-rel=\"back\" data-theme=\"b\" data-icon=\"check\" data-inline=\"true\" data-mini=\"true\">Cangear 200 pts</a> <a href=\"catalogo.html\" data-role=\"button\" data-rel=\"back\" data-inline=\"true\" data-mini=\"true\">Cancel</a>"; 
}
function tema_2(){
document.getElementById("purchase").innerHTML=" <h3>Desea Cangear sus pontos por este producto</h3>  <p>Celulares: Nokia </p> <a href=\"cangear.html\" data-role=\"button\" data-rel=\"back\" data-theme=\"b\" data-icon=\"check\" data-inline=\"true\" data-mini=\"true\">Cangear 70 pts</a> <a href=\"catalogo.html\" data-role=\"button\" data-rel=\"back\" data-inline=\"true\" data-mini=\"true\">Cancel</a>";

}
function tema_3(){
document.getElementById("purchase").innerHTML=" <h3>Desea Cangear sus pontos por este producto</h3>  <p>Celulares: Samsung </p> <a href=\"cangear.html\" data-role=\"button\" data-rel=\"back\" data-theme=\"b\" data-icon=\"check\" data-inline=\"true\" data-mini=\"true\">Cangear 80 pts</a> <a href=\"catalogo.html\" data-role=\"button\" data-rel=\"back\" data-inline=\"true\" data-mini=\"true\">Cancel</a>";

}