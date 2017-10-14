var Shader = (function () {
    function Shader() {
    }
    Shader.SHADOW_VS = "\n                attribute vec4 position;\n                attribute vec2 texcoord;\n                attribute vec4 color;\n                uniform vec2 size;\n                uniform mat4 mmat;\n                varying vec2 v_texcoord;\n                varying vec4 v_color;\n                void main(){\n                    vec4 pos=mmat*position;\n                    gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n                    v_color = color;\n                    v_texcoord = texcoord;\n                 }\n\n        \n    ";
    return Shader;
}());
//# sourceMappingURL=Shader.js.map