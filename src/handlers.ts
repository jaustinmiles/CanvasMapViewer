import Drawing from "./drawing";
import {add} from "./interfaces";
import Texture from "./texture";

let leftMouseDown = 0;
let rightMouseDown = 0;

function setupHandlers(canvas: HTMLCanvasElement, gl: WebGLRenderingContext, drawing: Drawing, texture: Texture) {
    canvas.onmousedown = event => {
        if (event.button == 0) {
            leftMouseDown++;
            drawing.click(event, gl, canvas);
        } else if (event.button == 2) {
            rightMouseDown++;
        }
    }

    window.oncontextmenu = event => {
        event.preventDefault();
        return false;
    }

    canvas.onmouseup = event => {
        if (event.button == 0) {
            drawing.shapeIndices.push(drawing.gl_Points.length);
            leftMouseDown--;
        } else if (event.button == 2) {
            rightMouseDown--;
        }
    }

    canvas.onmousemove = event => {
        const shapeIndices = drawing.shapeIndices;
        if (leftMouseDown > 0) {
            drawing.click(event, gl, canvas);
            shapeIndices[shapeIndices.length - 1] = drawing.gl_Points.length;
        } else if (rightMouseDown > 0) {
            const deltaX = event.movementX;
            const deltaY = event.movementY;
            drawing.translation = add(drawing.translation, {x: deltaX * drawing.translationScale, y: -deltaY * drawing.translationScale});
            drawing.transformAndRender(gl, drawing.program);
        }
    }

    window.onkeydown = event => {
        console.log(event.code);
        switch (event.code) {
            case "KeyQ":
                changeRotation(gl, drawing.program, 0.1);
                break;
            case "KeyE":
                changeRotation(gl, drawing.program, -0.1);
                break;
            case "Digit1":
                texture.swapTextures(gl, 0);
                break;
            case "Digit2":
                texture.swapTextures(gl, 1);
                break;
        }
    }

    canvas.onwheel = event => {
        const dilation = event.deltaY < 0 ? 1.1 : 0.9;

        drawing.dilate(canvas, event.clientX, event.clientY, dilation);
        texture.dilate(canvas, event.clientX, event.clientY, dilation);
        drawing.renderBuffer(gl);
    }


    function changeRotation(gl: WebGLRenderingContext, program: WebGLProgram, value: number) {
        drawing.angle += value;
        drawing.transformAndRender(gl, program);
    }
}

export default setupHandlers;