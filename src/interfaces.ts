interface Vec2 {
    x: number
    y: number
}

function add(v1: Vec2, v2: Vec2): Vec2 {
    return {x: v1.x + v2.x, y: v1.y + v2.y}
}
function subtract(v1: Vec2, v2: Vec2): Vec2 {
    return {x: v1.x - v2.x, y: v1.y - v2.y}
}

function mult(mat: Float32Array, v: Vec2): Vec2 {
    return {x: mat[0] * v.x + mat[4] * v.y + mat[12], y: mat[1] * v.x + mat[5] * v.y + mat[13]}
}

export {Vec2, add, subtract, mult}