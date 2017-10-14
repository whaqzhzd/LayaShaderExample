class myShaderValue extends laya.webgl.shader.d2.value.Value2D {
    public texcoord: any;

    public constructor() {
        super(0, 0);

        var _vlen: number = 8 * laya.webgl.utils.CONST3D2D.BYTES_PE;
        //设置在shader程序文件里定义的属性的相关描述：[属性长度, 属性类型,false, 属性起始位置索引 * CONST3D2D.BYTES_PE];
        this.position = [2, laya.webgl.WebGLContext.FLOAT, false, _vlen, 0];
        this.texcoord = [2, laya.webgl.WebGLContext.FLOAT, false, _vlen, 2 * laya.webgl.utils.CONST3D2D.BYTES_PE];
        this.color = [4, laya.webgl.WebGLContext.FLOAT, false, _vlen, 4 * laya.webgl.utils.CONST3D2D.BYTES_PE];
    }
}