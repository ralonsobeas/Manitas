var arrayLlave = [0,1];
var puntosJugador=0;
var puntosMaquina=0;

$(document).ready(function(){

  randomArray();

  $('p').mouseover(
      function() {
          $(this).css('border-radius', '10px');
      });

  $('p').mouseleave(
      function() {
          $(this).css('border-radius', '0px');
      });

  $(".manoCerrada").click(function(){
    if(encontrarLlave($(this).attr("id"))==true){
      puntosJugador+=1;
      $("#puntosJugador").text("Puntos del jugador: "+puntosJugador);
    }else{
      puntosMaquina+=1;
      $("#puntosMaquina").text("Puntos de la máquina: "+puntosMaquina);
    }

    randomArray();
  });

  $("#btnReiniciar").click(function(){
    puntosJugador=0;
    $("#puntosJugador").text("Puntos del jugador: "+puntosJugador);
    puntosMaquina=0;
    $("#puntosMaquina").text("Puntos de la máquina: "+puntosMaquina);
    randomArray();
  });

  $("#btnPista").click(function(){
    if(arrayLlave[0]===1){
      $("#closed1").toggle();
      $("#key1").toggle();
      setTimeout(function () {$("#key1").toggle();}, 1000);
      setTimeout(function () {$("#closed1").toggle();}, 1000);
    }
    if(arrayLlave[1]===1){
      $("#closed2").toggle();
      $("#key2").toggle();
      setTimeout(function () {$("#key2").toggle();}, 1000);
      setTimeout(function () {$("#closed2").toggle();}, 1000);
    }
  });

})
function randomArray(){
  var numeroAleatorio=Math.floor(Math.random()*2);

  arrayLlave=[0,0];
  arrayLlave[numeroAleatorio]=1;


}

function encontrarLlave(id){

  if(id === "closed1"){
    $("#closed1").toggle();
    if(arrayLlave[0]===1){
      $("#key1").toggle();
      setTimeout(function () {$("#key1").toggle();}, 1000);
      setTimeout(function () {$("#closed1").toggle();}, 1000);
      return true;
    }else{
      $("#left").toggle();
      setTimeout(function () {$("#left").toggle();}, 1000);
      setTimeout(function () {$("#closed1").toggle();}, 1000);
      return false;
    }


  }

  if(id === "closed2" ){
    $("#closed2").toggle();
    if(arrayLlave[1]===1){
      $("#key2").toggle();
      setTimeout(function () {$("#key2").toggle();}, 1000);
      setTimeout(function () {$("#closed2").toggle();}, 1000);

      return  true;
    }else{
      $("#right").toggle();
      setTimeout(function () {$("#right").toggle();}, 1000);
      setTimeout(function () {$("#closed2").toggle();}, 1000);
      return false;
    }

  }

}
/*
$(document).ready(function(){
      $("#form1").on("submit",function(event){
          //alert("He llegado aqui");
          //$.ajax(JSON).done() La parte de ajax es de envio y la parte de done es la de recepción de la respuesta.
          //$.ajax({data:{},type:"POST",url:"/proceso"}).done()
          $.ajax({data:{name:$("#idNombre").val(),email:$("#idEmail").val()},type:"POST",url:"/proceso"}).done(function(data){
              if(data.error){
                  $("#msgError").text(data.error);
              }else{
                  $("#idNombre").val(data.name);
              }
          });
          event.preventDefault();

      });
  })
  */
