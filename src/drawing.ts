import {glPosFromClient, unpack} from "./webgl_utils";
import {Vec2} from "./interfaces";
import {Matrix4, Vector4} from "math.gl";

interface Attributes {
    a_Position: number;
    u_FragColor: WebGLUniformLocation | null;
    a_PointSize: number;
}

class Drawing {

    public gl_Points: Array<Array<GLfloat>>;
    public gl_Colors: Array<Array<GLfloat>>;
    public shapeIndices: Array<number>;
    public angle: number;
    public translation: Vec2;
    public translationScale: number;
    public attributes: Attributes;
    public program: WebGLProgram;
    private vertexBuffer: WebGLBuffer | null;
    public transform = new Matrix4().identity();
    private dirty = false;
    private scale = new Matrix4().identity()

    constructor(program: WebGLProgram) {
        this.gl_Points = new Array<Array<GLfloat>>();
        this.gl_Colors = new Array<Array<GLfloat>>();

        this.shapeIndices = new Array<number>();
        this.shapeIndices.push(0);
        this.shapeIndices.push(0);

        this.angle = 0.0;
        this.translation = {x: 0, y: 0};
        this.translationScale = 0.005;
        this.attributes = {a_Position: -1, u_FragColor: null, a_PointSize: -1};

        this.program = program;
        this.vertexBuffer = null;
    }

    public click(event: MouseEvent, gl: WebGLRenderingContext, canvas: HTMLCanvasElement) {
        let x = event.clientX;
        let y = event.clientY;
        let glPos = glPosFromClient(canvas, x, y);
        glPos = this.getInv(glPos);
        this.gl_Points.push(new Array<GLfloat>(...[glPos.x, glPos.y, 0]));
        const norm = Math.sqrt(x * x + y * y);
        this.gl_Colors.push(new Array<GLfloat>(...[norm,1-norm,norm, 1]));
        this.renderBuffer(gl);
    }

    public updateTransform(gl: WebGLRenderingContext) {
        gl.useProgram(this.program);
        if (this.dirty) {
            this.setTransformUniform(gl, this.program);
            this.dirty = false;
        }
    }

    public renderBuffer(gl: WebGLRenderingContext) {
        gl.useProgram(this.program);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.vertexAttribPointer(this.attributes.a_Position, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.attributes.a_Position);
        gl.uniform4f(this.attributes.u_FragColor, 1, 0.3, 0.6, 1);
        gl.lineWidth(5);
        this.setBuffer(gl);
        const shapeIndices = this.shapeIndices;
        for (let i = 1; i < shapeIndices.length; i++) {
            gl.drawArrays(gl.LINE_STRIP, shapeIndices[i - 1], shapeIndices[i] - shapeIndices[i - 1]);
        }
    }

    setBuffer(gl: WebGLRenderingContext) {
        gl.bufferData(gl.ARRAY_BUFFER, unpack(this.gl_Points), gl.STATIC_DRAW);
    }

    public transformAndRender(gl: WebGLRenderingContext, program: WebGLProgram) {
        this.setTransformUniform(gl, program);
        this.renderBuffer(gl);
    }

    public setTransformUniform(gl: WebGLRenderingContext, program: WebGLProgram) {
        const u_Transform = gl.getUniformLocation(program, 'u_Transform');

        if (u_Transform == null) {
            console.log("Couldn't set uniforms for transformations");
            return;
        }
        const sin = Math.sin(this.angle);
        const cos = Math.cos(this.angle);
        this.transform = new Matrix4([
            cos ,    -sin,       0,   this.translation.x,
            sin,    cos,         0,   this.translation.y,
            0,       0,          1,   0,
            0,       0,          0,   1,
        ]).multiplyRight(this.scale);
        const copy_t = new Matrix4().copy(this.transform).transpose()
        gl.uniformMatrix4fv(u_Transform, false, copy_t);
        this.dirty = false;
    }

    private getInv(v: Vec2): Vec2 {
        const inv = (new Matrix4().copy(this.transform)).invert().transpose();
        let vec4 = new Vector4(v.x, v.y, 0, 1);
        vec4 = vec4.transform(inv);
        return {x: vec4[0], y: vec4[1]};
    }

    public dilate(canvas: HTMLCanvasElement, x: number, y: number, amount: number) {
        let inCanvas = glPosFromClient(canvas, x, y);

        const translation = new Matrix4([
            1, 0, 0, -inCanvas.x,
            0, 1, 0, -inCanvas.y,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ])
        const scale = new Matrix4().identity().scale([amount, amount, amount, 1]);
        const inv = new Matrix4().copy(translation).invert()
        this.scale = this.scale.multiplyRight(inv.multiplyLeft(scale.multiplyLeft(translation)))
        this.dirty = true;

    }

    public initVertexBuffers(gl: WebGLRenderingContext, program: WebGLProgram): number {
        const n = this.gl_Points.length / 2;
        this.vertexBuffer = gl.createBuffer();
        if (!this.vertexBuffer) {
            console.log("failed to create buffer");
            return -1;
        }

        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, unpack(this.gl_Points), gl.STATIC_DRAW);
        this.attributes.a_Position = gl.getAttribLocation(program, 'a_Position');
        gl.vertexAttribPointer(this.attributes.a_Position, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.attributes.a_Position);
        return n;
    }
}

export default Drawing;