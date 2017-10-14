class ShaderSprite extends Laya.Sprite {
    /** 顶点缓冲区。		 */
    private vBuffer: laya.webgl.utils.VertexBuffer2D;
    /** 片元缓冲区。		 */
    private iBuffer: laya.webgl.utils.IndexBuffer2D;
    private vbData: Float32Array;
    private ibData: Uint16Array;
    private iNum: number = 0;
    /** 着色器变量。		 */
    private shaderValue: myShaderValue;

    public constructor() {
        super();
    }

    public init(texture: Laya.Texture, vb: Array<any> = null, ib: Array<any> = null): void {
        this.vBuffer = laya.webgl.utils.VertexBuffer2D.create();
        this.iBuffer = laya.webgl.utils.IndexBuffer2D.create();

        var vbArray: Array<number>;
        var ibArray: Array<number>;

        if (vb) {
            vbArray = vb;
        }
        else {
            vbArray = [];
            var texWidth: number = texture.width;
            var texHeight: number = texture.height;

            //定义颜色值，取值范围0~1 浮点。
            var red: number = 1;
            var greed: number = 1;
            var blue: number = 1;
            var alpha: number = 1;

            //在顶点数组中放入4个顶点
            //每个顶点的数据：(坐标X,坐标Y,u,v,R,G,B,A)				
            vbArray.push(0, 0, 0, 0, red, greed, blue, alpha);
            vbArray.push(texWidth*8, 0, 1, 0, red, greed, blue, alpha);
            vbArray.push(texWidth*8, texHeight*8, 1, 1, red, greed, blue, alpha);
            vbArray.push(0, texHeight*8, 0, 1, red, greed, blue, alpha);
        }

        if (ib) {
            ibArray = ib;
        }
        else {
            ibArray = [];
            //在顶点索引数组中放入组成三角形的顶点索引。
            //三角形的顶点索引对应顶点数组vbArray 里的点索引，索引从0开始。
            ibArray.push(0, 1, 3);//第一个三角形的顶点索引。
            ibArray.push(3, 1, 2);//第二个三角形的顶点索引。			
        }
        this.iNum = ibArray.length;

        this.vbData = new Float32Array(vbArray);
        this.ibData = new Uint16Array(ibArray);

        this.vBuffer.append(this.vbData);
        this.iBuffer.append(this.ibData);

        this.shaderValue = new myShaderValue();
        this.shaderValue.textureHost = texture;
        this._renderType |= laya.renders.RenderSprite.CUSTOM;//设置当前显示对象的渲染模式为自定义渲染模式。		
    }

    //重写渲染函数。
    public customRender(context: laya.renders.RenderContext, x: number, y: number): void {
        (context.ctx as laya.webgl.canvas.WebGLContext2D).setIBVB(x, y, this.iBuffer, this.vBuffer, this.iNum, null, myShader.shader, this.shaderValue, 0, 0);
    }
}