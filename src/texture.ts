import {glPosFromClient} from "./webgl_utils";
import {add, subtract} from "./interfaces";

interface Attributes {
    a_Position: number;
    a_TexCoord: number;
}

interface Uniforms {
    u_Sampler: WebGLUniformLocation | null
    u_Transform: WebGLUniformLocation | null
}

enum UniformNames {
    u_Sampler= 'u_Sampler',
    u_Transform = 'u_Transform',
}

enum AttributeNames {
    a_Position = 'a_Position',
    a_TexCoord = 'a_TexCoord',
}


class Texture {

    private attributes: Attributes;
    private uniforms: Uniforms;
    private n: number;
    private program: WebGLProgram;
    private coords: Float32Array;
    private buffer: WebGLBuffer | null;
    private textures: Array<WebGLTexture> = new Array<WebGLTexture>();
    private dirty = false;
    private transform = new Float32Array();
    private texIndex = 0;

    constructor(gl: WebGLRenderingContext, program: WebGLProgram) {
        this.attributes = {a_Position: -1, a_TexCoord: -1}
        this.uniforms = {u_Sampler: null, u_Transform: null}
        this.coords = new Float32Array([
            -1, 1, 0.0, 1.0,
            -1, -1, 0.0, 0.0,
            1, 1, 1.0, 1.0,
            1, -1, 1.0, 0.0
        ])
        this.n = 4;
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.coords, gl.STATIC_DRAW);
        const FSIZE = this.coords.BYTES_PER_ELEMENT;

        this.attributes.a_Position = gl.getAttribLocation(program, AttributeNames.a_Position);
        this.attributes.a_TexCoord = gl.getAttribLocation(program, AttributeNames.a_TexCoord);
        this.uniforms.u_Transform = gl.getUniformLocation(program, UniformNames.u_Transform);
        this.uniforms.u_Sampler = gl.getUniformLocation(program, UniformNames.u_Sampler)
        console.log(this.attributes);

        gl.vertexAttribPointer(this.attributes.a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
        gl.enableVertexAttribArray(this.attributes.a_Position);

        gl.vertexAttribPointer(this.attributes.a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
        gl.enableVertexAttribArray(this.attributes.a_TexCoord);

        this.textures.push(...this.initTextures(gl, program));
        this.program = program;
    }

    initTextures(gl: WebGLRenderingContext, program: WebGLProgram): Array<WebGLTexture> {
        const texture = gl.createTexture();
        const texture2 = gl.createTexture();
        if (texture == null || texture2 == null) {
            console.log("Couldn't create webgl texture")
            return [];
        }

        console.log(this.uniforms);
        const image = new Image();
        image.onload = () => this.loadTexture(gl, texture, image, gl.TEXTURE0, 0);
        image.src = './images/map.jpg';

        const image2 = new Image();
        image2.onload = () => this.loadTexture(gl, texture2, image2, gl.TEXTURE1, 1)
        image2.src = './images/map2.jpg';
        return [texture, texture2];
    }

    swapTextures(gl: WebGLRenderingContext, texNumber: number) {
        this.texIndex = texNumber;
        gl.useProgram(this.program);
        // gl.uniform1i(this.uniforms.u_Sampler, texNumber);
    }

    loadTexture(gl: WebGLRenderingContext, texture: WebGLTexture, image: HTMLImageElement, texNumberEnum: number, texNumber: number) {
        gl.useProgram(this.program);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.activeTexture(texNumberEnum);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
        gl.uniform1i(this.uniforms.u_Sampler, texNumber);

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.n);
        console.log("loaded");
    }

    public draw(gl: WebGLRenderingContext, transform: Float32Array) {
        gl.useProgram(this.program);
        gl.uniformMatrix4fv(this.uniforms.u_Transform, false, transform);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        if (this.dirty) gl.bufferData(gl.ARRAY_BUFFER, this.coords, gl.STATIC_DRAW);
        gl.bindTexture(gl.TEXTURE_2D, this.textures[this.texIndex]);
        const FSIZE = this.coords.BYTES_PER_ELEMENT;
        gl.vertexAttribPointer(this.attributes.a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
        gl.enableVertexAttribArray(this.attributes.a_Position);

        gl.vertexAttribPointer(this.attributes.a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
        gl.enableVertexAttribArray(this.attributes.a_TexCoord);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.n);
    }

    public dilate(canvas: HTMLCanvasElement, x: number, y: number, amount: number) {
        let inCanvas = glPosFromClient(canvas, x, y);
        for (let i = 0; i < this.coords.length; i++) {
            let tex = {x: this.coords[i * 4], y: this.coords[i * 4 + 1]}
            tex = subtract(tex, inCanvas);
            tex.x *= amount;
            tex.y *= amount;
            tex = add(tex, inCanvas);
            this.coords[i * 4] = tex.x;
            this.coords[i * 4 + 1] = tex.y;
        }
        this.dirty = true
    }

}

export default Texture