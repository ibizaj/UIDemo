var data = [20,5,40,15,33];
var piedata = [], piecolor = [48,96,144,192,240];
var mouseAngle = 0, pieDelta = 0, hover = 0;

function setup() {
  createCanvas(640,480);
  total = data.reduce(function(a,b){ return a+b; }, 0);
  for(var i=0,count=0;i<data.length;i++) {
    piedata.push([Math.PI * 2 * count / total, Math.PI * 2 * (count + data[i]) / total]);
    count += data[i]; 
  }
}

function draw() {
  clear();
  for(var i=0,dx=0,dy=0;i<piedata.length;i++,dx=0,dy=0) {
    fill(piecolor[i%5]);
    if(mouseAngle >= piedata[i][0] && mouseAngle < piedata[i][1]) {
      dx = Math.cos((piedata[i][0] + piedata[i][1])/2) * 10;
      dy = Math.sin((piedata[i][0] + piedata[i][1])/2) * 10;
    }
    arc(320 + dx, 200 + dy, 300, 300, piedata[i][0], piedata[i][1], PIE);
  }
}

function mouseMoved() {
  mouseAngle = Math.PI / 2 - Math.atan((320 - mouseX) / (200 - mouseY));
  if(mouseY < 200) mouseAngle = mouseAngle + Math.PI;
}