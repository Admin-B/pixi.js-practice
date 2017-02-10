var stage   = new PIXI.Stage(0xCEE6CF);
var renderer= PIXI.autoDetectRenderer(width,height);
document.body.append(renderer.view);
renderer.render(stage);
window.onresize=function(){
  renderer.resize(window.innerWidth,window.innerHeight);
  width =window.innerWidth;
  height=window.innerHeight;
  onResize();
}
var resizeCallback=[];
function onResize(){
  for(var i=0; i<resizeCallback.length; i++){
    resizeCallback[i]({
      width:width,
      height:height
    });
  }
}
//Custom variable
var gameWindow={
  width:50000
};
//set textures and sprites
var texture=new Object();
var sprite =new Object();
function setObject(info,callback){
  var tag=info[0];
  var src=info[1];
  if(!src){
    return;
  }
  var tex=texture[tag]=PIXI.Texture.fromImage(src);
  var spr=sprite[tag] =new PIXI.Sprite(texture[tag]);

  if(typeof callback=="function"){
    callback.apply(spr,[tex]);
  }
  return true;
}
