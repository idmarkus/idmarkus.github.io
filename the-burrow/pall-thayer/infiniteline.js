var theCanvas = document.createElement("canvas");
theCanvas.id = "thecanvas";
theCanvas.width = $(document).width();
theCanvas.height = $(document).height() + 100;
theCanvas.position = "absolute";
theCanvas.top = "0px";
theCanvas.left = "0px";
document.body.appendChild(theCanvas);
var canvasSurface = theCanvas.getContext("2d");

var linePosition = 0;
var lineWidth = 5;
var lineHeight = 0;
var theFill = Math.random()*360;
var hPos = (Math.random()*20)-10;
var theWidth = (Math.random()*30)-15;

function extendCanvas() {
  if($(document).scrollTop()/($(document).height() - $(window).height()) > 0.9) {
    theCanvas.height += 800;
    drawLine();
  }
}

function drawLine() {
  var halfWin = $(document).width()/2;
  for(var i = linePosition;i < $(document).height();i += (Math.random()*20)+50) {
    theWidth += Math.abs((Math.random()*6)-3);
    theWidth = theWidth > 20 ? theWidth += -10 : theWidth;
    theWidth = theWidth < -20 ? theWidth += 10 : theWidth;
    hPos += (Math.random()*20)-10;
    if(hPos > 100) {hPos += -5;}
    if(hPos < -100) {hPos += 5;}
    linePosition = i;
    theFill += (Math.random()*50)-25;
    var addLength = Math.random()*20;
    var bakDiv = document.createElement("div");
    bakDiv.style.width = "100%";
    bakDiv.style.height = 65+addLength+"px";
    bakDiv.style.position = "absolute";
    bakDiv.style.left = "0px";
    bakDiv.style.top = linePosition+"px";
    bakDiv.style["background-color"] = "hsla("+theFill/2+", 60%, 20%, 0.5)";
    document.body.appendChild(bakDiv);
    var newDiv = document.createElement("div");
    newDiv.style.width = theWidth+"px";
    newDiv.style.height = (50+addLength)+"px";
    newDiv.style.position = "absolute";
    newDiv.style.left = (halfWin+hPos)+"px";
    newDiv.style.top = linePosition+"px";
    newDiv.style["background-color"] = "hsla("+theFill+", 80%, 50%, 0.5)";
    newDiv.style["border-radius"] = "20px"
    document.body.appendChild(newDiv);
  }
}

drawLine();

$(window).on('scroll', extendCanvas);
