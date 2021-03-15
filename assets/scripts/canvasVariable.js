window.onload= function(){
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
}