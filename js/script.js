//lfekra enni bech naamel classe esmha pixel, 3ibara lpixel li sawrou luser , w n7otha fi array pixels, w baeed bech
// nparcouri w nsawer khat kol marra mebin i w i+1, lmochkla ki essayed ysayeb el souris, donc aamalt tableau esmou indexes
//ysajali les indexes li sayed sayeb fehom souris bech mayorbothomch belli baadhom

const FPS=40 ;//kade men image fi thenya  bech yet3ada (frame per second) tal3eb lol w taaref mak
var canvas=document.getElementById("myCanvas") ;
var context=canvas.getContext("2d") ;
var w = 4 ;//width mta3 lkhatt
var pixels=[] ;//the pixels that has the user drew
var activate=false;//nzel aal souris tetactiva sinon tedesativa
var indexes =[] ;  //list of indexes to skip when drawing


class PixelDrew {
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
}

setInterval(show,1000/FPS) ;
canvas.style.borderStyle="dotted" ;//juste nlimiti fil canvas chaalik feha

canvas.addEventListener("mousemove" , draw) ; //ki y7arek souris
canvas.addEventListener("mousedown" , ()=>{activate=true;}) ;//ki yenzel nactiviw mode taswir
canvas.addEventListener("mouseup" , ()=>{activate=false; indexes.push(pixels.length-1);}) ;//ki ysayeb
//ndesactiviwah w najoutiw fil indexes il index li sayeb fih

function show() {
    context.fillStyle="purple" ;
    context.fillRect(0 , 0,canvas.width,canvas.height) ;
    for(let i =0;i<pixels.length-1;i++){
        if(!indexes.includes(i)) /*nskip les indexes li sayeb fehom (kenou mech mawjoud ghady nsawrou)*/ {
            context.beginPath();
            context.lineWidth = w;
            context.strokeStyle = "black";
            context.moveTo(pixels[i].x - w / 2, pixels[i].y - w / 2);
            context.lineTo(pixels[i + 1].x - w / 2, pixels[i + 1].y - w / 2);
            context.stroke();
        }
    }
}
//hedhy li bech tajoutili lpixel li sawrou
function draw(e) {
    if(activate)
    pixels.push(new PixelDrew(e.clientX-canvas.offsetLeft , e.clientY-canvas.offsetTop))
}