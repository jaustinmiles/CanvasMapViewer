attribute vec4 a_Position;
attribute float a_PointSize;
uniform mat4 u_Transform;
void main() {
    gl_Position = u_Transform * a_Position;
    gl_PointSize = a_PointSize;
}