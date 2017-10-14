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
var myShaderValue = (function (_super) {
    __extends(myShaderValue, _super);
    function myShaderValue() {
        var _this = _super.call(this, 0, 0) || this;
        var _vlen = 8 * laya.webgl.utils.CONST3D2D.BYTES_PE;
        //设置在shader程序文件里定义的属性的相关描述：[属性长度, 属性类型,false, 属性起始位置索引 * CONST3D2D.BYTES_PE];
        _this.position = [2, laya.webgl.WebGLContext.FLOAT, false, _vlen, 0];
        _this.texcoord = [2, laya.webgl.WebGLContext.FLOAT, false, _vlen, 2 * laya.webgl.utils.CONST3D2D.BYTES_PE];
        _this.color = [4, laya.webgl.WebGLContext.FLOAT, false, _vlen, 4 * laya.webgl.utils.CONST3D2D.BYTES_PE];
        return _this;
    }
    return myShaderValue;
}(laya.webgl.shader.d2.value.Value2D));
//# sourceMappingURL=myShaderValue.js.map