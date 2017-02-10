/*preload*/
(function(){
  var list=["../../resources/img/forest/bg_forest_layers/bg_forest_a.png",
            "../../resources/img/forest/bg_forest_layers/bg_forest_b.png",
            "../../resources/img/forest/bg_forest_layers/bg_forest_c.png",
            "../../resources/img/Tiles/box.png"
            ];
  var loader=PIXI.loader;
  for(var i=0; i<list.length; i++){
    loader.add('resource_'+i,list[i]);
  }
  loader.onComplete=onLoaded;
  loader.load(onLoaded);
})();
/*container*/
var _container={
  background:{
    a:new PIXI.DisplayObjectContainer(),
    b:new PIXI.DisplayObjectContainer(),
    c:new PIXI.DisplayObjectContainer()
  },
  player:new PIXI.DisplayObjectContainer()
}
stage.addChild(_container.background.a);
stage.addChild(_container.background.b);
stage.addChild(_container.background.c);
stage.addChild(_container.player);
/*******************set values**********************/
function onLoaded(){
  /*background*/
  (function(){
    var loop=Math.ceil(gameWindow.width/1280)+1;
    var container=_container.background;
    //background_a
    for(var i=0; i<loop; i++){
      setObject(['_background_a','../../resources/img/forest/bg_forest_layers/bg_forest_a.png'],function(){
        this.x=1280*i;
        container.a.addChild(this);
      });
    }
    //background_b
    for(var i=0; i<loop; i++){
      setObject(['_background_b'+i,'../../resources/img/forest/bg_forest_layers/bg_forest_b.png'],function(){
        this.x=1280*i;
        container.b.addChild(this);
      });
    }
    //background_c
    for(var i=0; i<loop; i++){
      setObject(['_background_c'+i,'../../resources/img/forest/bg_forest_layers/bg_forest_c.png'],function(){
        this.x=1280*i;
        container.c.addChild(this);
      });
    }
    container.b.position.y=height-381;
    container.c.position.y=height-360;
    resizeCallback.push(function(){
      container.b.position.y=height-381;
      container.c.position.y=height-360;
    });
  })();
  /*player*/
  (function(){
    _container.player.position.x=width/2;
    _container.player.position.y=height/2;
    setObject(['body',"../../resources/img/Tiles/box.png"],function(){
      this.anchor.x=0.5;
      this.anchor.y=0.5;
      _container.player.addChild(this);
    });
  })();
}
