class myShader extends laya.webgl.shader.Shader {
    /**
     * 当前着色器的一个实例对象。
     */
    public static shader: myShader = new myShader();

    public constructor() {
        var vs: string = `
                attribute vec4 position;
                attribute vec2 texcoord;
                attribute vec4 color;
                uniform vec2 size;
                uniform mat4 mmat;
                varying vec2 v_texcoord;
                varying vec4 v_color;
                void main(){
                    vec4 pos=mmat*position;
                    gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);
                    v_color = color;
                    v_texcoord = texcoord;
                 }
        `;
        var ps: string = `
            precision mediump float;
            varying vec2 v_texcoord;
            varying vec4 v_color;
            uniform sampler2D texture;

            vec4 composite(vec4 over, vec4 under){
                return over + (1.0- over.a)*under;
            }

            void main(){
                vec2 shadowOffset =vec2(0.01, -0.01);
                vec4 t_color = texture2D(texture, v_texcoord);
                float shadowMask = texture2D(texture,v_texcoord +shadowOffset ).a;
                const float shadowOpacity = 0.5;
                vec4 shadowColor = vec4(0,0,0,shadowMask*shadowOpacity);
                gl_FragColor = composite(t_color,shadowColor);

                //将文理坐标转化为rgba.
                //使用qq的CTRL+SHIFT+A。对颜色的RG进行校验，单图RG有序是采样正确
                //  vec4 t_color = texture2D(texture, v_texcoord);
                //  gl_FragColor = vec4(v_texcoord,0,1);
            }
        `;
        super(vs, ps, "myShader");
    }
}