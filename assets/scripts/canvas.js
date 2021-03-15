//Apenas se cargue la pagina
window.onload = function () {
  const canvas = document.getElementById("linea1");
  if (canvas && canvas.getContext) {
    let ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(212, 39, 247)";
      ctx.beginPath();
      ctx.moveTo(30, 0);
      ctx.lineTo(30, 79);
      //Dibujar flecha 1
      ctx.moveTo(30, 79);
      ctx.lineTo(40, 70);
      //Dibuja flecha 2
      ctx.moveTo(30, 79);
      ctx.lineTo(20, 70);
      ctx.stroke();
    }
  }
  const canvas2 = document.getElementById("linea2");
  if (canvas2 && canvas2.getContext) {
    let ctx = canvas2.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(228, 113, 60, 0.87)";
      ctx.beginPath();
      ctx.moveTo(50, 1);
      ctx.lineTo(50, 80);
      //flecha 1
      ctx.moveTo(50, 1);
      ctx.lineTo(40, 10);
      //flecha 2
      ctx.moveTo(50, 1);
      ctx.lineTo(60, 10);
      ctx.stroke();
    }
  }
  if (screen.width > 810) {
    const canvas3 = document.getElementById("linea3");
    if (canvas3 && canvas3.getContext) {
      let ctx = canvas3.getContext("2d");
      if (ctx) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = "rgb(212, 39, 247)";
        ctx.beginPath();
        //Linea izquierda
        ctx.moveTo(200, 2);
        ctx.lineTo(2, 43);
        //Fechas
        ctx.moveTo(2, 43);
        ctx.lineTo(2, 33);
        ctx.moveTo(2, 43);
        ctx.lineTo(11, 50);
        //Linea medio
        ctx.moveTo(200, 2);
        ctx.lineTo(200, 50);
        //Fechas
        ctx.moveTo(200, 50);
        ctx.lineTo(190, 45);
        ctx.moveTo(200, 50);
        ctx.lineTo(210, 45);
        // ctx.moveTo(2,43);
        // ctx.lineTo(11,48);
        //Linea derecha
        ctx.moveTo(200, 2);
        ctx.lineTo(398, 43);
        //Flechas
        ctx.moveTo(398, 43);
        ctx.lineTo(398, 33);
        ctx.moveTo(398, 43);
        ctx.lineTo(33, 398);
        ctx.stroke();
      }
    }
  }
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
  const canvas6 = document.getElementById('linea6');
  if(canvas6 && canvas6.getContext){
    let ctx = canvas6.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(212, 39, 247)"
      ctx.beginPath();
      //Primer Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,100);
      //Flechas
      ctx.moveTo(198,100);
      ctx.lineTo(193,115);
      ctx.moveTo(198,100);
      ctx.lineTo(193,85);
      //Segunda Linea
      ctx.moveTo(0,220);
      ctx.lineTo(198,220);
      //Flechas
      ctx.moveTo(198,220);
      ctx.lineTo(193,235);
      ctx.moveTo(198,220);
      ctx.lineTo(193,205);
      //Tercera Linea
      ctx.moveTo(0,340);
      ctx.lineTo(198,340);
      //Flechas
      ctx.moveTo(198,340);
      ctx.lineTo(193,325);
      ctx.moveTo(198,340);
      ctx.lineTo(193,355);
      ctx.stroke();
    }
  }
  const canvas7 = document.getElementById('linea7');
  if(canvas7 && canvas7.getContext){
    let ctx = canvas7.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(212, 39, 247)"
      ctx.beginPath();
      //Primer Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,100);
      //Segunda Linea
      ctx.moveTo(0,220);
      ctx.lineTo(198,100);
      //Tercera Linea
      ctx.moveTo(0,340);
      ctx.lineTo(198,100);
      //Flechas
      ctx.moveTo(198,100);
      ctx.lineTo(193,115);
      ctx.moveTo(198,100);
      ctx.lineTo(193,85);

      ctx.stroke();
    }
  } 
  const canva8 = document.getElementById('linea8');
  if(canva8 && canva8.getContext){
    let ctx = canva8.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(212, 39, 247)"
      ctx.beginPath();
      //Primer Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,150);
      //Flechas
      ctx.moveTo(198,150);
      ctx.lineTo(193,165);
      ctx.moveTo(198,150);
      ctx.lineTo(193,135);
      //Segunda Linea
      ctx.moveTo(0,220);
      ctx.lineTo(198,280);
      //Flechas
      ctx.moveTo(198,280);
      ctx.lineTo(193,295);
      ctx.moveTo(198,280);
      ctx.lineTo(193,265);
      //Tercera Linea
      ctx.moveTo(0,340);
      ctx.lineTo(198,300);
      //Flechas
      ctx.moveTo(198,300);
      ctx.lineTo(193,315);
      ctx.moveTo(198,300);
      ctx.lineTo(193,285);

      ctx.stroke();
    }
  } 
  const canva9 = document.getElementById('linea9');
  if(canva9 && canva9.getContext){
    let ctx = canva9.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(255, 233, 0)"
      ctx.beginPath();
      //Primera Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,55);
      //Flechas
      ctx.moveTo(198,55);
      ctx.lineTo(193,70);
      ctx.moveTo(198,55);
      ctx.lineTo(193,40);
      //Segunda Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,150);
      //Flechas
      ctx.moveTo(198,150);
      ctx.lineTo(193,165);
      ctx.moveTo(198,150);
      ctx.lineTo(193,135);
      ctx.stroke();
      //Tercera Linea
      ctx.strokeStyle = "rgb(0,0,255)";
      ctx.beginPath();
      ctx.moveTo(0,200);
      ctx.lineTo(198,240);
      //Flechas
      ctx.moveTo(198,240);
      ctx.lineTo(193,255);
      ctx.moveTo(198,240);
      ctx.lineTo(193,225);
      ctx.stroke();
      //Cuarta Linea
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.beginPath();
      ctx.moveTo(0,300);
      ctx.lineTo(198,340);
      //Flechas
      ctx.moveTo(198,340);
      ctx.lineTo(193,355);
      ctx.moveTo(198,340);
      ctx.lineTo(193,325);

      ctx.stroke();
    }
  }
  const canva10 = document.getElementById('linea10');
  if(canva10 && canva10.getContext){
    let ctx = canva10.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(255, 233, 0)"
      ctx.beginPath();
      //Primera Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,240);
      //Flechas
      ctx.moveTo(198,240);
      ctx.lineTo(193,265);
      ctx.moveTo(198,240);
      ctx.lineTo(193,215);
      ctx.stroke();
      //Segunda Linea
      ctx.strokeStyle = "rgb(0,0,255)";
      ctx.beginPath();
      ctx.moveTo(0,200);
      ctx.lineTo(198,240);
      //Flechas
      ctx.moveTo(198,240);
      ctx.lineTo(193,255);
      ctx.moveTo(198,240);
      ctx.lineTo(193,225);
      ctx.stroke();
      //Tercera Linea
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.beginPath();
      ctx.moveTo(0,300);
      ctx.lineTo(198,240);
      //Flechas
      ctx.moveTo(198,240);
      ctx.lineTo(193,255);
      ctx.moveTo(198,240);
      ctx.lineTo(193,225);

      ctx.stroke();
    }
  } 
  const canva11 = document.getElementById('linea11');
  if(canva11 && canva11.getContext){
    let ctx = canva11.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(255, 233, 0)"
      ctx.beginPath();
      //Primera Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,55);
      //Flechas
      ctx.moveTo(198,55);
      ctx.lineTo(193,70);
      ctx.moveTo(198,55);
      ctx.lineTo(193,40);
      //Segunda Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,150);
      //Flechas
      ctx.moveTo(198,150);
      ctx.lineTo(193,165);
      ctx.moveTo(198,150);
      ctx.lineTo(193,135);
      //Tercera Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,240);
      //Flechas
      ctx.moveTo(198,240);
      ctx.lineTo(193,255);
      ctx.moveTo(198,240);
      ctx.lineTo(193,225);
      ctx.stroke();
      //Cuarta Linea
      ctx.strokeStyle = "rgb(0,0,255)";
      ctx.beginPath();
      ctx.moveTo(0,200);
      ctx.lineTo(198,320);
      //Flechas
      ctx.moveTo(198,320);
      ctx.lineTo(193,335);
      ctx.moveTo(198,320);
      ctx.lineTo(193,305);
      ctx.stroke();
      //Quinta Linea
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.beginPath();
      ctx.moveTo(0,300);
      ctx.lineTo(198,340);
      //Flechas
      ctx.moveTo(198,340);
      ctx.lineTo(193,355);
      ctx.moveTo(198,340);
      ctx.lineTo(193,325);

      ctx.stroke();
    }
  } 
  const canva12 = document.getElementById('linea12');
  if(canva12 && canva12.getContext){
    let ctx = canva12.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(255, 233, 0)"
      ctx.beginPath();
      //Primera Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,55);
      //Flechas
      ctx.moveTo(198,55);
      ctx.lineTo(193,70);
      ctx.moveTo(198,55);
      ctx.lineTo(193,40);
      ctx.stroke();
      //SegundaLinea
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.beginPath();
      ctx.moveTo(0,300);
      ctx.lineTo(198,340);
      //Flechas
      ctx.moveTo(198,340);
      ctx.lineTo(193,355);
      ctx.moveTo(198,340);
      ctx.lineTo(193,325);

      ctx.stroke();
    }
  } 
  const canva13 = document.getElementById('linea13');
  if(canva13 && canva13.getContext){
    let ctx = canva13.getContext("2d");
    if(ctx){
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgb(255, 233, 0)"
      ctx.beginPath();
      //Primera Linea
      ctx.moveTo(0,100);
      ctx.lineTo(198,100);
      //Flechas
      ctx.moveTo(198,100);
      ctx.lineTo(193,115);
      ctx.moveTo(198,100);
      ctx.lineTo(193,85);
      ctx.stroke();
      //Segunda Linea
      ctx.strokeStyle = "rgb(0,0,255)";
      ctx.beginPath();
      ctx.moveTo(0,200);
      ctx.lineTo(198,200);
      //Flechas
      ctx.moveTo(198,200);
      ctx.lineTo(193,215);
      ctx.moveTo(198,200);
      ctx.lineTo(193,185);
      ctx.stroke();
      //Tercera Linea
      ctx.strokeStyle = "rgb(255,0,0)";
      ctx.beginPath();
      ctx.moveTo(0,300);
      ctx.lineTo(198,300);
      //Flechas
      ctx.moveTo(198,300);
      ctx.lineTo(193,315);
      ctx.moveTo(198,300);
      ctx.lineTo(193,285);

      ctx.stroke();
    }
  }
  const canva14 = document.getElementById('linea14');
  if(canva14 && canva14.getContext){
    let ctx = canva14.getContext("2d");
    if(ctx){
      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgba(70, 111, 245, 0.87)"
      ctx.beginPath();
      //Linea
      ctx.moveTo(0,25);
      ctx.lineTo(100,25);
      //Flechas
      ctx.moveTo(100,25);
      ctx.lineTo(85,35)
      ctx.moveTo(100,25);
      ctx.lineTo(85,15)
      ctx.stroke();
    }
  } 
  const canva15 = document.getElementById('linea15');
  if(canva15 && canva15.getContext){
    let ctx = canva15.getContext("2d");
    if(ctx){
      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgba(70, 111, 245, 0.87)"
      ctx.beginPath();
      //Linea
      ctx.moveTo(0,25);
      ctx.lineTo(100,25);
      //Flechas
      ctx.moveTo(100,25);
      ctx.lineTo(85,35)
      ctx.moveTo(100,25);
      ctx.lineTo(85,15)
      ctx.stroke();
    }
  } 
  const canva16 = document.getElementById('linea16');
  if(canva16 && canva16.getContext){
    let ctx = canva16.getContext("2d");
    if(ctx){
      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgba(70, 111, 245, 0.87)"
      ctx.beginPath();
      //Linea
      ctx.moveTo(25,0);
      ctx.lineTo(25,50);
      //Flechas
      ctx.moveTo(25,50);
      ctx.lineTo(15,30)
      ctx.moveTo(25,50);
      ctx.lineTo(35,30)
      ctx.stroke();
    }
  }
  const canva17 = document.getElementById('linea17');
  if(canva17 && canva17.getContext){
    let ctx = canva17.getContext("2d");
    if(ctx){
      ctx.lineWidth = 5;
      ctx.strokeStyle = "rgba(70, 111, 245, 0.87)"
      ctx.beginPath();
      //Linea
      ctx.moveTo(25,0);
      ctx.lineTo(25,50);
      //Flechas
      ctx.moveTo(25,50);
      ctx.lineTo(15,30)
      ctx.moveTo(25,50);
      ctx.lineTo(35,30)
      ctx.stroke();
    }
  }
};
