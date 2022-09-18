import {Vec2} from "./interfaces";

function glPosFromClient(canvas: HTMLCanvasElement, x: number, y: number): Vec2 {
    const rect = canvas.getBoundingClientRect();
    x = ((x - rect.left) - canvas.width/2) / (canvas.width/2);
    y = (canvas.height/2 - (y - rect.top))/(canvas.height/2);
    return {
        x: x,
        y: y,
    }
}

function unpack(array: Array<Array<GLfloat>>): Float32Array {
    const out = new Float32Array(array.length * 3);
    for (let i = 0; i < array.length; i++) {
        out[i * 3] = array[i][0];
        out[i * 3 + 1] = array[i][1];
        out[i * 3 + 2] = array[i][2];
    }
    return out;
}

export {glPosFromClient, unpack}