import fHelloPoint from './shaders/fHelloPoint.glsl';
import vHelloPoint from './shaders/vHelloPoint.glsl';
import vTexture from './shaders/vTextured.glsl';
import fTexture from './shaders/fTextured.glsl'
import Drawing from "./drawing";
import setupHandlers from "./handlers";
import Texture from "./texture";


function main() {
    const canvas = document.createElement("canvas");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    document.body.appendChild(canvas);
    const gl = canvas.getContext("webgl");
    if (!gl) {
        console.log("no webgl context available");
        return;
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const texture = initializeTexture(canvas, gl);
    const drawing = initializeDrawing(canvas, gl);
    if (texture == null || drawing ==  null) {
        console.log("failed to initialize objects");
        return;
    }
    setupHandlers(canvas, gl, drawing, texture);


    const render = () => {
        gl.clear(gl.COLOR_BUFFER_BIT)
        texture?.draw(gl, drawing.transform);
        drawing?.renderBuffer(gl);
        requestAnimationFrame(render)
    }

    render();

}

function initializeTexture(canvas: HTMLCanvasElement, gl: WebGLRenderingContext): Texture | null {
    const program = initShaders(gl, vTexture, fTexture);
    if (program == null) {
        console.log("failed to initialize shaders")
        return null;
    }

    return new Texture(gl, program)
}

function initializeDrawing(canvas: HTMLCanvasElement, gl: WebGLRenderingContext): Drawing | null {

    const program = initShaders(gl, vHelloPoint, fHelloPoint);
    if (program == null) {
        console.log("failed to initialize shaders")
        return null;
    }

    const drawing = new Drawing(program);

    const a_Position = gl.getAttribLocation(program, 'a_Position');
    if (a_Position < 0) {
        console.log("failed to get the storage location of a_Position");
        return null;
    }

    const a_PointSize = gl.getAttribLocation(program, 'a_PointSize');
    if (a_PointSize < 0) {
        console.log("failed to get the storage location of a_PointSize");
        return null;
    }

    const u_FragColor = gl.getUniformLocation(program, 'u_FragColor');
    if (u_FragColor == null) {
        console.log("failed to get uniform u_fragColor");
        return null;
    }
    drawing.attributes.a_Position = a_Position;
    drawing.attributes.u_FragColor = u_FragColor;
    drawing.attributes.a_PointSize = a_PointSize;


    gl.vertexAttrib1f(a_PointSize, 20.0);


    drawing.setTransformUniform(gl, program);
    const n = drawing.initVertexBuffers(gl, program);
    gl.drawArrays(gl.POINTS, 0, n);
    return drawing;
}



function initShaders(gl: WebGLRenderingContext, vShader: string, fShader: string): WebGLProgram | null {
    const program = createProgram(gl, vShader, fShader);
    if (!program) {
        console.log("Failed to create program")
        return null;
    }
    gl.useProgram(program);
    return program;
}

function createProgram(gl: WebGLRenderingContext, vShader: string, fShader: string): WebGLProgram | null {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vShader);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fShader);
    if (!vertexShader || !fragmentShader) {
        return null;
    }

    const program = gl.createProgram();
    if (!program) {
        return null;
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const linked: GLboolean = gl.getProgramParameter(program, gl.LINK_STATUS)
    if (!linked) {
        const error = gl.getProgramInfoLog(program);
        console.log("Failed to link program, reason: " + error);
        gl.deleteProgram(program);
        gl.deleteShader(fragmentShader);
        gl.deleteShader(vertexShader);
        return null;
    }
    return program;
}

function loadShader(gl: WebGLRenderingContext, type: GLenum, source: string): WebGLShader | null {
    const shader = gl.createShader(type)
    if (shader == null) {
        console.log("failed to create shader");
        return null;
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const compiled: GLboolean = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        const error = gl.getShaderInfoLog(shader);
        console.log("Failed to compile shader, reason: " + error);
        gl.deleteShader(shader);
        return null;
    }
    return shader;

}
main();