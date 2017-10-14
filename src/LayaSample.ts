// 程序入口
class GameMain {
    constructor() {
        //初始化引擎
        Laya.init(900, 700, Laya.WebGL);
        Laya.stage.bgColor = "#cfcfcf";

        Laya.Stat.show();
        //加载一个图片
        Laya.loader.load("res/person.png", Laya.Handler.create(this, this.loadComplete), null, Laya.Loader.IMAGE);
    }

    /**
		 * 加载资源完成处理函数。
		 */
    private loadComplete(): void {
        var texture: Laya.Texture = Laya.Loader.getRes("res/person.png");
        var spe: ShaderSprite = new ShaderSprite();
        spe.init(texture);
        // spe.pos(50, 50);
        spe.x = 300;
        spe.y = 300;
        Laya.stage.addChild(spe);


        // //创建一个发光滤镜
        // var glowFilter = new Laya.GlowFilter("#ffff00", 10,100, 100);
        // //设置滤镜集合为发光滤镜

        // let t2 = new Laya.Sprite();
        // t2.texture = Laya.Loader.getRes("res/person.png");
        // t2.x = 300;
        // t2.y = 300;
        // t2.filters = [glowFilter];
        // Laya.stage.addChild(t2);
    }
}
new GameMain();