var oldAniTime;
var gravity={
  x:0,
  y:0
};
function animation(timestamp){
  renderer.render(stage);
  var delta=timestamp-oldAniTime;
  oldAniTime=timestamp;
  player.position.x+=player.velocity.x/1000*delta;
  player.position.y+=player.velocity.y/1000*delta;
  player.velocity.y+=gravity.y;

  var box=player.getBounds();
  box.x+=stage.pivot.x;
  if(box.x<0){
    player.position.x=player.width/2;
  }else if(box.x+box.width>gameWindow.width){
    player.position.x=gameWindow.width-player.width/2;
  }
  if(box.y<-50){
    player.position.y=-50+player.height/2;
  }else if(box.y+box.height>height+100){
    (function(){
      alert("game over");
      location.reload();
    })();
    return;
  }
  if(player.position.x<width/2){
    stage.pivot.x=0;
    _container.background.b.pivot.x=0;
  }else if(player.position.x<=gameWindow.width-width/2){
    stage.pivot.x=player.position.x-width/2;
    _container.background.b.pivot.x-=Math.sign(player.velocity.x)*0.5;
  }
  requestAnimFrame(animation);
}
requestAnimFrame(animation);

var player=_container.player;
player.speed={
  x:250,
  y:200
};
player.velocity={
  x:0,
  y:0
};
window.onkeydown=function(e){
  var x=0,y=0;

  switch(e.keyCode){
    case 39:
    case 37:
      x=e.keyCode==39 ? 1 : -1;
      break;
    case 38:
    case 40:
      y=e.keyCode==38 ? -1 : 0;
      break;
  }
  if(x!==0){
    player.velocity.x=x*player.speed.x;

  }
  if(y!==0){
    player.velocity.y=y*player.speed.y;
  }
}
