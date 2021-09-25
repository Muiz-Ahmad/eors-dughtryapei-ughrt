function setup()
{
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
t_c="";
}
function draw()
{
image(video,0,0,640,480);
tint(t_c);
}
function filter_color()
{
    t_c=document.getElementById("color").value;
}
function take_snapshot()
{
    save('my selfie.png')
}
function preload()
{

}