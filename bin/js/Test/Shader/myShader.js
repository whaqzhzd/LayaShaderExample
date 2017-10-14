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
var myShader = (function (_super) {
    __extends(myShader, _super);
    function myShader() {
        var _this = this;
        var vs = "\n                attribute vec4 position;\n                attribute vec2 texcoord;\n                attribute vec4 color;\n                uniform vec2 size;\n                uniform mat4 mmat;\n                varying vec2 v_texcoord;\n                varying vec4 v_color;\n                void main(){\n                    vec4 pos=mmat*position;\n                    gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n                    v_color = color;\n                    v_texcoord = texcoord;\n                 }\n        ";
        var ps = "\n            precision mediump float;\n            varying vec2 v_texcoord;\n            varying vec4 v_color;\n            uniform sampler2D texture;\n\n            vec4 composite(vec4 over, vec4 under){\n                return over + (1.0- over.a)*under;\n            }\n\n            void main(){\n                vec2 shadowOffset =vec2(0.01, -0.01);\n                vec4 t_color = texture2D(texture, v_texcoord);\n                float shadowMask = texture2D(texture,v_texcoord +shadowOffset ).a;\n                const float shadowOpacity = 0.5;\n                vec4 shadowColor = vec4(0,0,0,shadowMask*shadowOpacity);\n                gl_FragColor = composite(t_color,shadowColor);\n\n                //\u5C06\u6587\u7406\u5750\u6807\u8F6C\u5316\u4E3Argba.\n                //\u4F7F\u7528qq\u7684CTRL+SHIFT+A\u3002\u5BF9\u989C\u8272\u7684RG\u8FDB\u884C\u6821\u9A8C\uFF0C\u5355\u56FERG\u6709\u5E8F\u662F\u91C7\u6837\u6B63\u786E\n                //  vec4 t_color = texture2D(texture, v_texcoord);\n                //  gl_FragColor = vec4(v_texcoord,0,1);\n            }\n        ";
        _this = _super.call(this, vs, ps, "myShader") || this;
        return _this;
    }
    /**
     * 当前着色器的一个实例对象。
     */
    myShader.shader = new myShader();
    return myShader;
}(laya.webgl.shader.Shader));
//# sourceMappingURL=myShader.js.map