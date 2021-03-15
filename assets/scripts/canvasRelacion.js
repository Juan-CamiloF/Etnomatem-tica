//Apenas se cargue la pagina
window.onload = function () {
  const canvas4 = document.querySelectorAll(".linea");
  for (let i = 0; i < canvas4.length; i++) {
    if (canvas4[i] && canvas4[i].getContext) {
      let ctx = canvas4[i].getContext("2d");
      if (ctx) {
        //Manzana
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(255, 0, 0)";
        ctx.beginPath();
        //Primera linea
        ctx.moveTo(0, 100);
        ctx.lineTo(200, 70);
        //Flecha1
        ctx.moveTo(200, 70);
        ctx.lineTo(195, 55);
        //Flecha2
        ctx.moveTo(200, 70);
        ctx.lineTo(195, 85);
        //Segunda linea
        ctx.moveTo(0, 100);
        ctx.lineTo(200, 150);
        //Flecha1
        ctx.moveTo(200, 150);
        ctx.lineTo(195, 135);
        //Flecha2
        ctx.moveTo(200, 150);
        ctx.lineTo(195, 165);
        //Tercera linea
        ctx.moveTo(0, 100);
        ctx.lineTo(200, 240);
        //Flecha1
        ctx.moveTo(200, 240);
        ctx.lineTo(195, 250);
        //Flecha2
        ctx.moveTo(200, 240);
        ctx.lineTo(195, 225);
        ctx.stroke();
        //Pera
        ctx.strokeStyle = "rgb(0, 255, 0)";
        ctx.beginPath();
        //Primera linea
        ctx.moveTo(0, 200);
        ctx.lineTo(200, 80);
        //Flecha1
        ctx.moveTo(200, 80);
        ctx.lineTo(195, 95);
        //Flecha2
        ctx.moveTo(200, 80);
        ctx.lineTo(195, 65);
        //Segunda linea
        ctx.moveTo(0, 200);
        ctx.lineTo(200, 170);
        //Flecha1
        ctx.moveTo(200, 170);
        ctx.lineTo(195, 185);
        //Flecha2
        ctx.moveTo(200, 170);
        ctx.lineTo(195, 155);
        //Tercera linea
        ctx.moveTo(0, 200);
        ctx.lineTo(200, 250);
        //Flecha1
        ctx.moveTo(200, 250);
        ctx.lineTo(195, 265);
        //Flecha2
        ctx.moveTo(200, 250);
        ctx.lineTo(195, 235);
        ctx.stroke();
      }
    }
  }
  const canvas5 = document.getElementById("linea5");
  if(canvas5 && canvas5.getContext){
    let ctx = canvas5.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(255,255,0)";
      ctx.beginPath();
      //Primera Linea
      ctx.moveTo(0,120);
      ctx.lineTo(200,80);
      //Flechas
      ctx.moveTo(200,80);
      ctx.lineTo(195,95);
      ctx.moveTo(200,80);
      ctx.lineTo(195,65);
      //Segunda Linea
      ctx.moveTo(0,120);
      ctx.lineTo(200,150);
      //Flechas
      ctx.moveTo(200,150);
      ctx.lineTo(195,135);
      ctx.moveTo(200,150);
      ctx.lineTo(195,165);
      ctx.stroke();
      //Tercera Linea
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.beginPath();
      ctx.moveTo(0,220);
      ctx.lineTo(200,180);
      //Flechas
      ctx.moveTo(200,180);
      ctx.lineTo(195,195);
      ctx.moveTo(200,180);
      ctx.lineTo(195,165);
      //Cuarta Linea
      ctx.moveTo(0,220);
      ctx.lineTo(200,250);
      //Flechas
      ctx.moveTo(200,250);
      ctx.lineTo(195,265);
      ctx.moveTo(200,250);
      ctx.lineTo(195,235);
      ctx.stroke();
      //Quinta linea
      ctx.strokeStyle = "rgb(0,0,255)";
      ctx.beginPath();
      ctx.moveTo(0,320);
      ctx.lineTo(200,280);
      //Flechas
      ctx.moveTo(200,280);
      ctx.lineTo(195,295);
      ctx.moveTo(200,280);
      ctx.lineTo(195,265);
      //Sexta Linea
      ctx.moveTo(0,320);
      ctx.lineTo(200,350);
      //Flechas
      ctx.moveTo(200,350);
      ctx.lineTo(195,365)
      ctx.moveTo(200,350);
      ctx.lineTo(195,335)
      ctx.stroke();
    }
  }
};
