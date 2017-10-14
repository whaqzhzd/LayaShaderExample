var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ShaderSprite = (function (_super) {
    __extends(ShaderSprite, _super);
    function ShaderSprite() {
        var _this = _super.call(this) || this;
        _this.iNum = 0;
        return _this;
    }
    ShaderSprite.prototype.init = function (texture, vb, ib) {
        if (vb === void 0) { vb = null; }
        if (ib === void 0) { ib = null; }
        this.vBuffer = laya.webgl.utils.VertexBuffer2D.create();
        this.iBuffer = laya.webgl.utils.IndexBuffer2D.create();
        var vbArray;
        var ibArray;
        if (vb) {
            vbArray = vb;
        }
        else {
            vbArray = [];
            var texWidth = texture.width;
            var texHeight = texture.height;
            //定义颜色值，取值范围0~1 浮点。
            var red = 1;
            var greed = 1;
            var blue = 1;
            var alpha = 1;
            //在顶点数组中放入4个顶点
            //每个顶点的数据：(坐标X,坐标Y,u,v,R,G,B,A)				
            vbArray.push(0, 0, 0, 0, red, greed, blue, alpha);
            vbArray.push(texWidth * 8, 0, 1, 0, red, greed, blue, alpha);
            vbArray.push(texWidth * 8, texHeight * 8, 1, 1, red, greed, blue, alpha);
            vbArray.push(0, texHeight * 8, 0, 1, red, greed, blue, alpha);
        }
        if (ib) {
            ibArray = ib;
        }
        else {
            ibArray = [];
            //在顶点索引数组中放入组成三角形的顶点索引。
            //三角形的顶点索引对应顶点数组vbArray 里的点索引，索引从0开始。
            ibArray.push(0, 1, 3); //第一个三角形的顶点索引。
            ibArray.push(3, 1, 2); //第二个三角形的顶点索引。			
        }
        this.iNum = ibArray.length;
        this.vbData = new Float32Array(vbArray);
        this.ibData = new Uint16Array(ibArray);
        this.vBuffer.append(this.vbData);
        this.iBuffer.append(this.ibData);
        this.shaderValue = new myShaderValue();
        this.shaderValue.textureHost = texture;
        this._renderType |= laya.renders.RenderSprite.CUSTOM; //设置当前显示对象的渲染模式为自定义渲染模式。		
    };
    //重写渲染函数。
    ShaderSprite.prototype.customRender = function (context, x, y) {
        context.ctx.setIBVB(x, y, this.iBuffer, this.vBuffer, this.iNum, null, myShader.shader, this.shaderValue, 0, 0);
    };
    return ShaderSprite;
}(Laya.Sprite));
//# sourceMappingURL=ShaderSprite.js.map