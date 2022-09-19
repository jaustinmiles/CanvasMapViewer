/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js":
/*!************************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MathArray)
/* harmony export */ });
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
function _extendableBuiltin(cls) {
  function ExtendableBuiltin() {
    var instance = Reflect.construct(cls, Array.from(arguments));
    Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
    return instance;
  }

  ExtendableBuiltin.prototype = Object.create(cls.prototype, {
    constructor: {
      value: cls,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });

  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(ExtendableBuiltin, cls);
  } else {
    ExtendableBuiltin.__proto__ = cls;
  }

  return ExtendableBuiltin;
}


class MathArray extends _extendableBuiltin(Array) {
  clone() {
    return new this.constructor().copy(this);
  }

  fromArray(array, offset = 0) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = array[i + offset];
    }

    return this.check();
  }

  toArray(targetArray = [], offset = 0) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      targetArray[offset + i] = this[i];
    }

    return targetArray;
  }

  from(arrayOrObject) {
    return Array.isArray(arrayOrObject) ? this.copy(arrayOrObject) : this.fromObject(arrayOrObject);
  }

  to(arrayOrObject) {
    if (arrayOrObject === this) {
      return this;
    }

    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.isArray)(arrayOrObject) ? this.toArray(arrayOrObject) : this.toObject(arrayOrObject);
  }

  toTarget(target) {
    return target ? this.to(target) : this;
  }

  toFloat32Array() {
    return new Float32Array(this);
  }

  toString() {
    return this.formatString(_lib_common__WEBPACK_IMPORTED_MODULE_0__.config);
  }

  formatString(opts) {
    let string = '';

    for (let i = 0; i < this.ELEMENTS; ++i) {
      string += (i > 0 ? ', ' : '') + (0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.formatValue)(this[i], opts);
    }

    return "".concat(opts.printTypes ? this.constructor.name : '', "[").concat(string, "]");
  }

  equals(array) {
    if (!array || this.length !== array.length) {
      return false;
    }

    for (let i = 0; i < this.ELEMENTS; ++i) {
      if (!(0,_lib_common__WEBPACK_IMPORTED_MODULE_0__.equals)(this[i], array[i])) {
        return false;
      }
    }

    return true;
  }

  exactEquals(array) {
    if (!array || this.length !== array.length) {
      return false;
    }

    for (let i = 0; i < this.ELEMENTS; ++i) {
      if (this[i] !== array[i]) {
        return false;
      }
    }

    return true;
  }

  negate() {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = -this[i];
    }

    return this.check();
  }

  lerp(a, b, t) {
    if (t === undefined) {
      return this.lerp(this, a, b);
    }

    for (let i = 0; i < this.ELEMENTS; ++i) {
      const ai = a[i];
      this[i] = ai + t * (b[i] - ai);
    }

    return this.check();
  }

  min(vector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(vector[i], this[i]);
    }

    return this.check();
  }

  max(vector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.max(vector[i], this[i]);
    }

    return this.check();
  }

  clamp(minVector, maxVector) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
    }

    return this.check();
  }

  add(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] += vector[i];
      }
    }

    return this.check();
  }

  subtract(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] -= vector[i];
      }
    }

    return this.check();
  }

  scale(scale) {
    if (typeof scale === 'number') {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= scale;
      }
    } else {
      for (let i = 0; i < this.ELEMENTS && i < scale.length; ++i) {
        this[i] *= scale[i];
      }
    }

    return this.check();
  }

  multiplyByScalar(scalar) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] *= scalar;
    }

    return this.check();
  }

  check() {
    if (_lib_common__WEBPACK_IMPORTED_MODULE_0__.config.debug && !this.validate()) {
      throw new Error("math.gl: ".concat(this.constructor.name, " some fields set to invalid numbers'"));
    }

    return this;
  }

  validate() {
    let valid = this.length === this.ELEMENTS;

    for (let i = 0; i < this.ELEMENTS; ++i) {
      valid = valid && Number.isFinite(this[i]);
    }

    return valid;
  }

  sub(a) {
    return this.subtract(a);
  }

  setScalar(a) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = a;
    }

    return this.check();
  }

  addScalar(a) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] += a;
    }

    return this.check();
  }

  subScalar(a) {
    return this.addScalar(-a);
  }

  multiplyScalar(scalar) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] *= scalar;
    }

    return this.check();
  }

  divideScalar(a) {
    return this.multiplyByScalar(1 / a);
  }

  clampScalar(min, max) {
    for (let i = 0; i < this.ELEMENTS; ++i) {
      this[i] = Math.min(Math.max(this[i], min), max);
    }

    return this.check();
  }

  get elements() {
    return this;
  }

}
//# sourceMappingURL=math-array.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/base/matrix.js":
/*!********************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/base/matrix.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Matrix)
/* harmony export */ });
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-array */ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");



class Matrix extends _math_array__WEBPACK_IMPORTED_MODULE_0__["default"] {
  toString() {
    let string = '[';

    if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.printRowMajor) {
      string += 'row-major:';

      for (let row = 0; row < this.RANK; ++row) {
        for (let col = 0; col < this.RANK; ++col) {
          string += " ".concat(this[col * this.RANK + row]);
        }
      }
    } else {
      string += 'column-major:';

      for (let i = 0; i < this.ELEMENTS; ++i) {
        string += " ".concat(this[i]);
      }
    }

    string += ']';
    return string;
  }

  getElementIndex(row, col) {
    return col * this.RANK + row;
  }

  getElement(row, col) {
    return this[col * this.RANK + row];
  }

  setElement(row, col, value) {
    this[col * this.RANK + row] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
    return this;
  }

  getColumn(columnIndex, result = new Array(this.RANK).fill(-0)) {
    const firstIndex = columnIndex * this.RANK;

    for (let i = 0; i < this.RANK; ++i) {
      result[i] = this[firstIndex + i];
    }

    return result;
  }

  setColumn(columnIndex, columnVector) {
    const firstIndex = columnIndex * this.RANK;

    for (let i = 0; i < this.RANK; ++i) {
      this[firstIndex + i] = columnVector[i];
    }

    return this;
  }

}
//# sourceMappingURL=matrix.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/base/vector.js":
/*!********************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/base/vector.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector)
/* harmony export */ });
/* harmony import */ var _math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math-array */ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");



class Vector extends _math_array__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get x() {
    return this[0];
  }

  set x(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get y() {
    return this[1];
  }

  set y(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  len() {
    return Math.sqrt(this.lengthSquared());
  }

  magnitude() {
    return this.len();
  }

  lengthSquared() {
    let length = 0;

    for (let i = 0; i < this.ELEMENTS; ++i) {
      length += this[i] * this[i];
    }

    return length;
  }

  magnitudeSquared() {
    return this.lengthSquared();
  }

  distance(mathArray) {
    return Math.sqrt(this.distanceSquared(mathArray));
  }

  distanceSquared(mathArray) {
    let length = 0;

    for (let i = 0; i < this.ELEMENTS; ++i) {
      const dist = this[i] - mathArray[i];
      length += dist * dist;
    }

    return (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(length);
  }

  dot(mathArray) {
    let product = 0;

    for (let i = 0; i < this.ELEMENTS; ++i) {
      product += this[i] * mathArray[i];
    }

    return (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(product);
  }

  normalize() {
    const length = this.magnitude();

    if (length !== 0) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] /= length;
      }
    }

    return this.check();
  }

  multiply(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] *= vector[i];
      }
    }

    return this.check();
  }

  divide(...vectors) {
    for (const vector of vectors) {
      for (let i = 0; i < this.ELEMENTS; ++i) {
        this[i] /= vector[i];
      }
    }

    return this.check();
  }

  lengthSq() {
    return this.lengthSquared();
  }

  distanceTo(vector) {
    return this.distance(vector);
  }

  distanceToSquared(vector) {
    return this.distanceSquared(vector);
  }

  getComponent(i) {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_2__["default"])(i >= 0 && i < this.ELEMENTS, 'index is out of range');
    return (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(this[i]);
  }

  setComponent(i, value) {
    (0,_lib_assert__WEBPACK_IMPORTED_MODULE_2__["default"])(i >= 0 && i < this.ELEMENTS, 'index is out of range');
    this[i] = value;
    return this.check();
  }

  addVectors(a, b) {
    return this.copy(a).add(b);
  }

  subVectors(a, b) {
    return this.copy(a).subtract(b);
  }

  multiplyVectors(a, b) {
    return this.copy(a).multiply(b);
  }

  addScaledVector(a, b) {
    return this.add(new this.constructor(a).multiplyScalar(b));
  }

}
//# sourceMappingURL=vector.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/euler.js":
/*!**************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/euler.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Euler)
/* harmony export */ });
/* harmony import */ var _base_math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/math-array */ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js");
/* harmony import */ var _quaternion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quaternion */ "./node_modules/@math.gl/core/dist/esm/classes/quaternion.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");




const ERR_UNKNOWN_ORDER = 'Unknown Euler angle order';
const ALMOST_ONE = 0.99999;
var RotationOrder;

(function (RotationOrder) {
  RotationOrder[RotationOrder["ZYX"] = 0] = "ZYX";
  RotationOrder[RotationOrder["YXZ"] = 1] = "YXZ";
  RotationOrder[RotationOrder["XZY"] = 2] = "XZY";
  RotationOrder[RotationOrder["ZXY"] = 3] = "ZXY";
  RotationOrder[RotationOrder["YZX"] = 4] = "YZX";
  RotationOrder[RotationOrder["XYZ"] = 5] = "XYZ";
})(RotationOrder || (RotationOrder = {}));

class Euler extends _base_math_array__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get ZYX() {
    return RotationOrder.ZYX;
  }

  static get YXZ() {
    return RotationOrder.YXZ;
  }

  static get XZY() {
    return RotationOrder.XZY;
  }

  static get ZXY() {
    return RotationOrder.ZXY;
  }

  static get YZX() {
    return RotationOrder.YZX;
  }

  static get XYZ() {
    return RotationOrder.XYZ;
  }

  static get RollPitchYaw() {
    return RotationOrder.ZYX;
  }

  static get DefaultOrder() {
    return RotationOrder.ZYX;
  }

  static get RotationOrders() {
    return RotationOrder;
  }

  static rotationOrder(order) {
    return RotationOrder[order];
  }

  get ELEMENTS() {
    return 4;
  }

  constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
    super(-0, -0, -0, -0);

    if (arguments.length > 0 && Array.isArray(arguments[0])) {
      this.fromVector3(...arguments);
    } else {
      this.set(x, y, z, order);
    }
  }

  fromQuaternion(quaternion) {
    const [x, y, z, w] = quaternion;
    const ysqr = y * y;
    const t0 = -2 * (ysqr + z * z) + 1;
    const t1 = +2 * (x * y + w * z);
    let t2 = -2 * (x * z - w * y);
    const t3 = +2 * (y * z + w * x);
    const t4 = -2 * (x * x + ysqr) + 1;
    t2 = t2 > 1 ? 1 : t2;
    t2 = t2 < -1 ? -1 : t2;
    const roll = Math.atan2(t3, t4);
    const pitch = Math.asin(t2);
    const yaw = Math.atan2(t1, t0);
    return this.set(roll, pitch, yaw, Euler.RollPitchYaw);
  }

  fromObject(object) {
    throw new Error('not implemented');
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = Number.isFinite(array[3]) || this.order;
    return this.check();
  }

  set(x = 0, y = 0, z = 0, order) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = Number.isFinite(order) ? order : this[3];
    return this.check();
  }

  validate() {
    return validateOrder(this[3]) && Number.isFinite(this[0]) && Number.isFinite(this[1]) && Number.isFinite(this[2]);
  }

  toArray(array = [], offset = 0) {
    array[offset] = this[0];
    array[offset + 1] = this[1];
    array[offset + 2] = this[2];
    return array;
  }

  toArray4(array = [], offset = 0) {
    array[offset] = this[0];
    array[offset + 1] = this[1];
    array[offset + 2] = this[2];
    array[offset + 3] = this[3];
    return array;
  }

  toVector3(result = [-0, -0, -0]) {
    result[0] = this[0];
    result[1] = this[1];
    result[2] = this[2];
    return result;
  }

  get x() {
    return this[0];
  }

  set x(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get y() {
    return this[1];
  }

  set y(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get z() {
    return this[2];
  }

  set z(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get alpha() {
    return this[0];
  }

  set alpha(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get beta() {
    return this[1];
  }

  set beta(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get gamma() {
    return this[2];
  }

  set gamma(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get phi() {
    return this[0];
  }

  set phi(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get theta() {
    return this[1];
  }

  set theta(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get psi() {
    return this[2];
  }

  set psi(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get roll() {
    return this[0];
  }

  set roll(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get pitch() {
    return this[1];
  }

  set pitch(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get yaw() {
    return this[2];
  }

  set yaw(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_1__.checkNumber)(value);
  }

  get order() {
    return this[3];
  }

  set order(value) {
    this[3] = checkOrder(value);
  }

  fromVector3(v, order) {
    return this.set(v[0], v[1], v[2], Number.isFinite(order) ? order : this[3]);
  }

  fromArray(array, offset = 0) {
    this[0] = array[0 + offset];
    this[1] = array[1 + offset];
    this[2] = array[2 + offset];

    if (array[3] !== undefined) {
      this[3] = array[3];
    }

    return this.check();
  }

  fromRollPitchYaw(roll, pitch, yaw) {
    return this.set(roll, pitch, yaw, RotationOrder.ZYX);
  }

  fromRotationMatrix(m, order = Euler.DefaultOrder) {
    this._fromRotationMatrix(m, order);

    return this.check();
  }

  getRotationMatrix(m) {
    return this._getRotationMatrix(m);
  }

  getQuaternion() {
    const q = new _quaternion__WEBPACK_IMPORTED_MODULE_2__["default"]();

    switch (this[4]) {
      case RotationOrder.XYZ:
        return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);

      case RotationOrder.YXZ:
        return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);

      case RotationOrder.ZXY:
        return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);

      case RotationOrder.ZYX:
        return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);

      case RotationOrder.YZX:
        return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);

      case RotationOrder.XZY:
        return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);

      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }
  }

  _fromRotationMatrix(m, order = Euler.DefaultOrder) {
    const m11 = m[0],
          m12 = m[4],
          m13 = m[8];
    const m21 = m[1],
          m22 = m[5],
          m23 = m[9];
    const m31 = m[2],
          m32 = m[6],
          m33 = m[10];
    order = order || this[3];

    switch (order) {
      case Euler.XYZ:
        this[1] = Math.asin((0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m13, -1, 1));

        if (Math.abs(m13) < ALMOST_ONE) {
          this[0] = Math.atan2(-m23, m33);
          this[2] = Math.atan2(-m12, m11);
        } else {
          this[0] = Math.atan2(m32, m22);
          this[2] = 0;
        }

        break;

      case Euler.YXZ:
        this[0] = Math.asin(-(0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m23, -1, 1));

        if (Math.abs(m23) < ALMOST_ONE) {
          this[1] = Math.atan2(m13, m33);
          this[2] = Math.atan2(m21, m22);
        } else {
          this[1] = Math.atan2(-m31, m11);
          this[2] = 0;
        }

        break;

      case Euler.ZXY:
        this[0] = Math.asin((0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m32, -1, 1));

        if (Math.abs(m32) < ALMOST_ONE) {
          this[1] = Math.atan2(-m31, m33);
          this[2] = Math.atan2(-m12, m22);
        } else {
          this[1] = 0;
          this[2] = Math.atan2(m21, m11);
        }

        break;

      case Euler.ZYX:
        this[1] = Math.asin(-(0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m31, -1, 1));

        if (Math.abs(m31) < ALMOST_ONE) {
          this[0] = Math.atan2(m32, m33);
          this[2] = Math.atan2(m21, m11);
        } else {
          this[0] = 0;
          this[2] = Math.atan2(-m12, m22);
        }

        break;

      case Euler.YZX:
        this[2] = Math.asin((0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m21, -1, 1));

        if (Math.abs(m21) < ALMOST_ONE) {
          this[0] = Math.atan2(-m23, m22);
          this[1] = Math.atan2(-m31, m11);
        } else {
          this[0] = 0;
          this[1] = Math.atan2(m13, m33);
        }

        break;

      case Euler.XZY:
        this[2] = Math.asin(-(0,_lib_common__WEBPACK_IMPORTED_MODULE_3__.clamp)(m12, -1, 1));

        if (Math.abs(m12) < ALMOST_ONE) {
          this[0] = Math.atan2(m32, m22);
          this[1] = Math.atan2(m13, m11);
        } else {
          this[0] = Math.atan2(-m23, m33);
          this[1] = 0;
        }

        break;

      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }

    this[3] = order;
    return this;
  }

  _getRotationMatrix(result) {
    const te = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
    const x = this.x,
          y = this.y,
          z = this.z;
    const a = Math.cos(x);
    const c = Math.cos(y);
    const e = Math.cos(z);
    const b = Math.sin(x);
    const d = Math.sin(y);
    const f = Math.sin(z);

    switch (this[3]) {
      case Euler.XYZ:
        {
          const ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;
          te[0] = c * e;
          te[4] = -c * f;
          te[8] = d;
          te[1] = af + be * d;
          te[5] = ae - bf * d;
          te[9] = -b * c;
          te[2] = bf - ae * d;
          te[6] = be + af * d;
          te[10] = a * c;
          break;
        }

      case Euler.YXZ:
        {
          const ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;
          te[0] = ce + df * b;
          te[4] = de * b - cf;
          te[8] = a * d;
          te[1] = a * f;
          te[5] = a * e;
          te[9] = -b;
          te[2] = cf * b - de;
          te[6] = df + ce * b;
          te[10] = a * c;
          break;
        }

      case Euler.ZXY:
        {
          const ce = c * e,
                cf = c * f,
                de = d * e,
                df = d * f;
          te[0] = ce - df * b;
          te[4] = -a * f;
          te[8] = de + cf * b;
          te[1] = cf + de * b;
          te[5] = a * e;
          te[9] = df - ce * b;
          te[2] = -a * d;
          te[6] = b;
          te[10] = a * c;
          break;
        }

      case Euler.ZYX:
        {
          const ae = a * e,
                af = a * f,
                be = b * e,
                bf = b * f;
          te[0] = c * e;
          te[4] = be * d - af;
          te[8] = ae * d + bf;
          te[1] = c * f;
          te[5] = bf * d + ae;
          te[9] = af * d - be;
          te[2] = -d;
          te[6] = b * c;
          te[10] = a * c;
          break;
        }

      case Euler.YZX:
        {
          const ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;
          te[0] = c * e;
          te[4] = bd - ac * f;
          te[8] = bc * f + ad;
          te[1] = f;
          te[5] = a * e;
          te[9] = -b * e;
          te[2] = -d * e;
          te[6] = ad * f + bc;
          te[10] = ac - bd * f;
          break;
        }

      case Euler.XZY:
        {
          const ac = a * c,
                ad = a * d,
                bc = b * c,
                bd = b * d;
          te[0] = c * e;
          te[4] = -f;
          te[8] = d * e;
          te[1] = ac * f + bd;
          te[5] = a * e;
          te[9] = ad * f - bc;
          te[2] = bc * f - ad;
          te[6] = b * e;
          te[10] = bd * f + ac;
          break;
        }

      default:
        throw new Error(ERR_UNKNOWN_ORDER);
    }

    te[3] = 0;
    te[7] = 0;
    te[11] = 0;
    te[12] = 0;
    te[13] = 0;
    te[14] = 0;
    te[15] = 1;
    return te;
  }

  toQuaternion() {
    const cy = Math.cos(this.yaw * 0.5);
    const sy = Math.sin(this.yaw * 0.5);
    const cr = Math.cos(this.roll * 0.5);
    const sr = Math.sin(this.roll * 0.5);
    const cp = Math.cos(this.pitch * 0.5);
    const sp = Math.sin(this.pitch * 0.5);
    const w = cy * cr * cp + sy * sr * sp;
    const x = cy * sr * cp - sy * cr * sp;
    const y = cy * cr * sp + sy * sr * cp;
    const z = sy * cr * cp - cy * sr * sp;
    return new _quaternion__WEBPACK_IMPORTED_MODULE_2__["default"](x, y, z, w);
  }

}

function validateOrder(value) {
  return value >= 0 && value < 6;
}

function checkOrder(value) {
  if (value < 0 && value >= 6) {
    throw new Error(ERR_UNKNOWN_ORDER);
  }

  return value;
}
//# sourceMappingURL=euler.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/matrix3.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/matrix3.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Matrix3)
/* harmony export */ });
/* harmony import */ var _base_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/matrix */ "./node_modules/@math.gl/core/dist/esm/classes/base/matrix.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");
/* harmony import */ var gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix/mat3 */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");






var INDICES;

(function (INDICES) {
  INDICES[INDICES["COL0ROW0"] = 0] = "COL0ROW0";
  INDICES[INDICES["COL0ROW1"] = 1] = "COL0ROW1";
  INDICES[INDICES["COL0ROW2"] = 2] = "COL0ROW2";
  INDICES[INDICES["COL1ROW0"] = 3] = "COL1ROW0";
  INDICES[INDICES["COL1ROW1"] = 4] = "COL1ROW1";
  INDICES[INDICES["COL1ROW2"] = 5] = "COL1ROW2";
  INDICES[INDICES["COL2ROW0"] = 6] = "COL2ROW0";
  INDICES[INDICES["COL2ROW1"] = 7] = "COL2ROW1";
  INDICES[INDICES["COL2ROW2"] = 8] = "COL2ROW2";
})(INDICES || (INDICES = {}));

const IDENTITY_MATRIX = Object.freeze([1, 0, 0, 0, 1, 0, 0, 0, 1]);
class Matrix3 extends _base_matrix__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get IDENTITY() {
    return getIdentityMatrix();
  }

  static get ZERO() {
    return getZeroMatrix();
  }

  get ELEMENTS() {
    return 9;
  }

  get RANK() {
    return 3;
  }

  get INDICES() {
    return INDICES;
  }

  constructor(array, ...args) {
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0);

    if (arguments.length === 1 && Array.isArray(array)) {
      this.copy(array);
    } else if (args.length > 0) {
      this.copy([array, ...args]);
    } else {
      this.identity();
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    this[4] = array[4];
    this[5] = array[5];
    this[6] = array[6];
    this[7] = array[7];
    this[8] = array[8];
    return this.check();
  }

  identity() {
    return this.copy(IDENTITY_MATRIX);
  }

  fromObject(object) {
    return this.check();
  }

  fromQuaternion(q) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.fromQuat(this, q);
    return this.check();
  }

  set(m00, m10, m20, m01, m11, m21, m02, m12, m22) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m01;
    this[4] = m11;
    this[5] = m21;
    this[6] = m02;
    this[7] = m12;
    this[8] = m22;
    return this.check();
  }

  setRowMajor(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m01;
    this[4] = m11;
    this[5] = m21;
    this[6] = m02;
    this[7] = m12;
    this[8] = m22;
    return this.check();
  }

  determinant() {
    return gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.determinant(this);
  }

  transpose() {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.transpose(this, this);
    return this.check();
  }

  invert() {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.invert(this, this);
    return this.check();
  }

  multiplyLeft(a) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.multiply(this, this, a);
    return this.check();
  }

  rotate(radians) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.rotate(this, this, radians);
    return this.check();
  }

  scale(factor) {
    if (Array.isArray(factor)) {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, factor);
    } else {
      gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, [factor, factor]);
    }

    return this.check();
  }

  translate(vec) {
    gl_matrix_mat3__WEBPACK_IMPORTED_MODULE_1__.translate(this, this, vec);
    return this.check();
  }

  transform(vector, result) {
    let out;

    switch (vector.length) {
      case 2:
        out = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_2__.transformMat3(result || [-0, -0], vector, this);
        break;

      case 3:
        out = gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformMat3(result || [-0, -0, -0], vector, this);
        break;

      case 4:
        out = (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec4_transformMat3)(result || [-0, -0, -0, -0], vector, this);
        break;

      default:
        throw new Error('Illegal vector');
    }

    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_5__.checkVector)(out, vector.length);
    return out;
  }

  transformVector(vector, result) {
    return this.transform(vector, result);
  }

  transformVector2(vector, result) {
    return this.transform(vector, result);
  }

  transformVector3(vector, result) {
    return this.transform(vector, result);
  }

}
let ZERO_MATRIX3;
let IDENTITY_MATRIX3;

function getZeroMatrix() {
  if (!ZERO_MATRIX3) {
    ZERO_MATRIX3 = new Matrix3([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Object.freeze(ZERO_MATRIX3);
  }

  return ZERO_MATRIX3;
}

function getIdentityMatrix() {
  if (!IDENTITY_MATRIX3) {
    IDENTITY_MATRIX3 = new Matrix3();
    Object.freeze(IDENTITY_MATRIX3);
  }

  return IDENTITY_MATRIX3;
}
//# sourceMappingURL=matrix3.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/matrix4.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/matrix4.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Matrix4)
/* harmony export */ });
/* harmony import */ var _base_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/matrix */ "./node_modules/@math.gl/core/dist/esm/classes/base/matrix.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");
/* harmony import */ var gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix/mat4 */ "./node_modules/gl-matrix/esm/mat4.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/vec4 */ "./node_modules/gl-matrix/esm/vec4.js");







var INDICES;

(function (INDICES) {
  INDICES[INDICES["COL0ROW0"] = 0] = "COL0ROW0";
  INDICES[INDICES["COL0ROW1"] = 1] = "COL0ROW1";
  INDICES[INDICES["COL0ROW2"] = 2] = "COL0ROW2";
  INDICES[INDICES["COL0ROW3"] = 3] = "COL0ROW3";
  INDICES[INDICES["COL1ROW0"] = 4] = "COL1ROW0";
  INDICES[INDICES["COL1ROW1"] = 5] = "COL1ROW1";
  INDICES[INDICES["COL1ROW2"] = 6] = "COL1ROW2";
  INDICES[INDICES["COL1ROW3"] = 7] = "COL1ROW3";
  INDICES[INDICES["COL2ROW0"] = 8] = "COL2ROW0";
  INDICES[INDICES["COL2ROW1"] = 9] = "COL2ROW1";
  INDICES[INDICES["COL2ROW2"] = 10] = "COL2ROW2";
  INDICES[INDICES["COL2ROW3"] = 11] = "COL2ROW3";
  INDICES[INDICES["COL3ROW0"] = 12] = "COL3ROW0";
  INDICES[INDICES["COL3ROW1"] = 13] = "COL3ROW1";
  INDICES[INDICES["COL3ROW2"] = 14] = "COL3ROW2";
  INDICES[INDICES["COL3ROW3"] = 15] = "COL3ROW3";
})(INDICES || (INDICES = {}));

const DEFAULT_FOVY = 45 * Math.PI / 180;
const DEFAULT_ASPECT = 1;
const DEFAULT_NEAR = 0.1;
const DEFAULT_FAR = 500;
const IDENTITY_MATRIX = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
class Matrix4 extends _base_matrix__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get IDENTITY() {
    return getIdentityMatrix();
  }

  static get ZERO() {
    return getZeroMatrix();
  }

  get ELEMENTS() {
    return 16;
  }

  get RANK() {
    return 4;
  }

  get INDICES() {
    return INDICES;
  }

  constructor(array) {
    super(-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0);

    if (arguments.length === 1 && Array.isArray(array)) {
      this.copy(array);
    } else {
      this.identity();
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    this[4] = array[4];
    this[5] = array[5];
    this[6] = array[6];
    this[7] = array[7];
    this[8] = array[8];
    this[9] = array[9];
    this[10] = array[10];
    this[11] = array[11];
    this[12] = array[12];
    this[13] = array[13];
    this[14] = array[14];
    this[15] = array[15];
    return this.check();
  }

  set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m30;
    this[4] = m01;
    this[5] = m11;
    this[6] = m21;
    this[7] = m31;
    this[8] = m02;
    this[9] = m12;
    this[10] = m22;
    this[11] = m32;
    this[12] = m03;
    this[13] = m13;
    this[14] = m23;
    this[15] = m33;
    return this.check();
  }

  setRowMajor(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    this[0] = m00;
    this[1] = m10;
    this[2] = m20;
    this[3] = m30;
    this[4] = m01;
    this[5] = m11;
    this[6] = m21;
    this[7] = m31;
    this[8] = m02;
    this[9] = m12;
    this[10] = m22;
    this[11] = m32;
    this[12] = m03;
    this[13] = m13;
    this[14] = m23;
    this[15] = m33;
    return this.check();
  }

  toRowMajor(result) {
    result[0] = this[0];
    result[1] = this[4];
    result[2] = this[8];
    result[3] = this[12];
    result[4] = this[1];
    result[5] = this[5];
    result[6] = this[9];
    result[7] = this[13];
    result[8] = this[2];
    result[9] = this[6];
    result[10] = this[10];
    result[11] = this[14];
    result[12] = this[3];
    result[13] = this[7];
    result[14] = this[11];
    result[15] = this[15];
    return result;
  }

  identity() {
    return this.copy(IDENTITY_MATRIX);
  }

  fromObject(object) {
    return this.check();
  }

  fromQuaternion(quaternion) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.fromQuat(this, quaternion);
    return this.check();
  }

  frustum(view) {
    const {
      left,
      right,
      bottom,
      top,
      near = DEFAULT_NEAR,
      far = DEFAULT_FAR
    } = view;

    if (far === Infinity) {
      computeInfinitePerspectiveOffCenter(this, left, right, bottom, top, near);
    } else {
      gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.frustum(this, left, right, bottom, top, near, far);
    }

    return this.check();
  }

  lookAt(view) {
    const {
      eye,
      center = [0, 0, 0],
      up = [0, 1, 0]
    } = view;
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.lookAt(this, eye, center, up);
    return this.check();
  }

  ortho(view) {
    const {
      left,
      right,
      bottom,
      top,
      near = DEFAULT_NEAR,
      far = DEFAULT_FAR
    } = view;
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.ortho(this, left, right, bottom, top, near, far);
    return this.check();
  }

  orthographic(view) {
    const {
      fovy = DEFAULT_FOVY,
      aspect = DEFAULT_ASPECT,
      focalDistance = 1,
      near = DEFAULT_NEAR,
      far = DEFAULT_FAR
    } = view;
    checkRadians(fovy);
    const halfY = fovy / 2;
    const top = focalDistance * Math.tan(halfY);
    const right = top * aspect;
    return this.ortho({
      left: -right,
      right,
      bottom: -top,
      top,
      near,
      far
    });
  }

  perspective(view) {
    const {
      fovy = 45 * Math.PI / 180,
      aspect = 1,
      near = 0.1,
      far = 500
    } = view;
    checkRadians(fovy);
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.perspective(this, fovy, aspect, near, far);
    return this.check();
  }

  determinant() {
    return gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.determinant(this);
  }

  getScale(result = [-0, -0, -0]) {
    result[0] = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
    result[1] = Math.sqrt(this[4] * this[4] + this[5] * this[5] + this[6] * this[6]);
    result[2] = Math.sqrt(this[8] * this[8] + this[9] * this[9] + this[10] * this[10]);
    return result;
  }

  getTranslation(result = [-0, -0, -0]) {
    result[0] = this[12];
    result[1] = this[13];
    result[2] = this[14];
    return result;
  }

  getRotation(result, scaleResult) {
    result = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
    scaleResult = scaleResult || [-0, -0, -0];
    const scale = this.getScale(scaleResult);
    const inverseScale0 = 1 / scale[0];
    const inverseScale1 = 1 / scale[1];
    const inverseScale2 = 1 / scale[2];
    result[0] = this[0] * inverseScale0;
    result[1] = this[1] * inverseScale1;
    result[2] = this[2] * inverseScale2;
    result[3] = 0;
    result[4] = this[4] * inverseScale0;
    result[5] = this[5] * inverseScale1;
    result[6] = this[6] * inverseScale2;
    result[7] = 0;
    result[8] = this[8] * inverseScale0;
    result[9] = this[9] * inverseScale1;
    result[10] = this[10] * inverseScale2;
    result[11] = 0;
    result[12] = 0;
    result[13] = 0;
    result[14] = 0;
    result[15] = 1;
    return result;
  }

  getRotationMatrix3(result, scaleResult) {
    result = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0];
    scaleResult = scaleResult || [-0, -0, -0];
    const scale = this.getScale(scaleResult);
    const inverseScale0 = 1 / scale[0];
    const inverseScale1 = 1 / scale[1];
    const inverseScale2 = 1 / scale[2];
    result[0] = this[0] * inverseScale0;
    result[1] = this[1] * inverseScale1;
    result[2] = this[2] * inverseScale2;
    result[3] = this[4] * inverseScale0;
    result[4] = this[5] * inverseScale1;
    result[5] = this[6] * inverseScale2;
    result[6] = this[8] * inverseScale0;
    result[7] = this[9] * inverseScale1;
    result[8] = this[10] * inverseScale2;
    return result;
  }

  transpose() {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.transpose(this, this);
    return this.check();
  }

  invert() {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.invert(this, this);
    return this.check();
  }

  multiplyLeft(a) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.multiply(this, a, this);
    return this.check();
  }

  multiplyRight(a) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.multiply(this, this, a);
    return this.check();
  }

  rotateX(radians) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.rotateX(this, this, radians);
    return this.check();
  }

  rotateY(radians) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.rotateY(this, this, radians);
    return this.check();
  }

  rotateZ(radians) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.rotateZ(this, this, radians);
    return this.check();
  }

  rotateXYZ(angleXYZ) {
    return this.rotateX(angleXYZ[0]).rotateY(angleXYZ[1]).rotateZ(angleXYZ[2]);
  }

  rotateAxis(radians, axis) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.rotate(this, this, radians, axis);
    return this.check();
  }

  scale(factor) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, Array.isArray(factor) ? factor : [factor, factor, factor]);
    return this.check();
  }

  translate(vector) {
    gl_matrix_mat4__WEBPACK_IMPORTED_MODULE_1__.translate(this, this, vector);
    return this.check();
  }

  transform(vector, result) {
    if (vector.length === 4) {
      result = gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_2__.transformMat4(result || [-0, -0, -0, -0], vector, this);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.checkVector)(result, 4);
      return result;
    }

    return this.transformAsPoint(vector, result);
  }

  transformAsPoint(vector, result) {
    const {
      length
    } = vector;
    let out;

    switch (length) {
      case 2:
        out = gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_4__.transformMat4(result || [-0, -0], vector, this);
        break;

      case 3:
        out = gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_5__.transformMat4(result || [-0, -0, -0], vector, this);
        break;

      default:
        throw new Error('Illegal vector');
    }

    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.checkVector)(out, vector.length);
    return out;
  }

  transformAsVector(vector, result) {
    let out;

    switch (vector.length) {
      case 2:
        out = (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_6__.vec2_transformMat4AsVector)(result || [-0, -0], vector, this);
        break;

      case 3:
        out = (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_6__.vec3_transformMat4AsVector)(result || [-0, -0, -0], vector, this);
        break;

      default:
        throw new Error('Illegal vector');
    }

    (0,_lib_validators__WEBPACK_IMPORTED_MODULE_3__.checkVector)(out, vector.length);
    return out;
  }

  transformPoint(vector, result) {
    return this.transformAsPoint(vector, result);
  }

  transformVector(vector, result) {
    return this.transformAsPoint(vector, result);
  }

  transformDirection(vector, result) {
    return this.transformAsVector(vector, result);
  }

  makeRotationX(radians) {
    return this.identity().rotateX(radians);
  }

  makeTranslation(x, y, z) {
    return this.identity().translate([x, y, z]);
  }

}
let ZERO;
let IDENTITY;

function getZeroMatrix() {
  if (!ZERO) {
    ZERO = new Matrix4([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    Object.freeze(ZERO);
  }

  return ZERO;
}

function getIdentityMatrix() {
  if (!IDENTITY) {
    IDENTITY = new Matrix4();
    Object.freeze(IDENTITY);
  }

  return IDENTITY;
}

function checkRadians(possiblyDegrees) {
  if (possiblyDegrees > Math.PI * 2) {
    throw Error('expected radians');
  }
}

function computeInfinitePerspectiveOffCenter(result, left, right, bottom, top, near) {
  const column0Row0 = 2 * near / (right - left);
  const column1Row1 = 2 * near / (top - bottom);
  const column2Row0 = (right + left) / (right - left);
  const column2Row1 = (top + bottom) / (top - bottom);
  const column2Row2 = -1;
  const column2Row3 = -1;
  const column3Row2 = -2 * near;
  result[0] = column0Row0;
  result[1] = 0;
  result[2] = 0;
  result[3] = 0;
  result[4] = 0;
  result[5] = column1Row1;
  result[6] = 0;
  result[7] = 0;
  result[8] = column2Row0;
  result[9] = column2Row1;
  result[10] = column2Row2;
  result[11] = column2Row3;
  result[12] = 0;
  result[13] = 0;
  result[14] = column3Row2;
  result[15] = 0;
  return result;
}
//# sourceMappingURL=matrix4.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/pose.js":
/*!*************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/pose.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Pose)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _matrix4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix4 */ "./node_modules/@math.gl/core/dist/esm/classes/matrix4.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vector3 */ "./node_modules/@math.gl/core/dist/esm/classes/vector3.js");
/* harmony import */ var _euler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./euler */ "./node_modules/@math.gl/core/dist/esm/classes/euler.js");




class Pose {
  constructor({
    x = 0,
    y = 0,
    z = 0,
    roll = 0,
    pitch = 0,
    yaw = 0,
    position,
    orientation
  } = {}) {
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "position", void 0);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "orientation", void 0);

    if (Array.isArray(position) && position.length === 3) {
      this.position = new _vector3__WEBPACK_IMPORTED_MODULE_1__["default"](position);
    } else {
      this.position = new _vector3__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, z);
    }

    if (Array.isArray(orientation) && orientation.length === 4) {
      this.orientation = new _euler__WEBPACK_IMPORTED_MODULE_2__["default"](orientation, orientation[3]);
    } else {
      this.orientation = new _euler__WEBPACK_IMPORTED_MODULE_2__["default"](roll, pitch, yaw, _euler__WEBPACK_IMPORTED_MODULE_2__["default"].RollPitchYaw);
    }
  }

  get x() {
    return this.position.x;
  }

  set x(value) {
    this.position.x = value;
  }

  get y() {
    return this.position.y;
  }

  set y(value) {
    this.position.y = value;
  }

  get z() {
    return this.position.z;
  }

  set z(value) {
    this.position.z = value;
  }

  get roll() {
    return this.orientation.roll;
  }

  set roll(value) {
    this.orientation.roll = value;
  }

  get pitch() {
    return this.orientation.pitch;
  }

  set pitch(value) {
    this.orientation.pitch = value;
  }

  get yaw() {
    return this.orientation.yaw;
  }

  set yaw(value) {
    this.orientation.yaw = value;
  }

  getPosition() {
    return this.position;
  }

  getOrientation() {
    return this.orientation;
  }

  equals(pose) {
    if (!pose) {
      return false;
    }

    return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
  }

  exactEquals(pose) {
    if (!pose) {
      return false;
    }

    return this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation);
  }

  getTransformationMatrix() {
    const sr = Math.sin(this.roll);
    const sp = Math.sin(this.pitch);
    const sw = Math.sin(this.yaw);
    const cr = Math.cos(this.roll);
    const cp = Math.cos(this.pitch);
    const cw = Math.cos(this.yaw);
    return new _matrix4__WEBPACK_IMPORTED_MODULE_3__["default"]().setRowMajor(cw * cp, -sw * cr + cw * sp * sr, sw * sr + cw * sp * cr, this.x, sw * cp, cw * cr + sw * sp * sr, -cw * sr + sw * sp * cr, this.y, -sp, cp * sr, cp * cr, this.z, 0, 0, 0, 1);
  }

  getTransformationMatrixFromPose(pose) {
    return new _matrix4__WEBPACK_IMPORTED_MODULE_3__["default"]().multiplyRight(this.getTransformationMatrix()).multiplyRight(pose.getTransformationMatrix().invert());
  }

  getTransformationMatrixToPose(pose) {
    return new _matrix4__WEBPACK_IMPORTED_MODULE_3__["default"]().multiplyRight(pose.getTransformationMatrix()).multiplyRight(this.getTransformationMatrix().invert());
  }

}
//# sourceMappingURL=pose.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/quaternion.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/quaternion.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quaternion)
/* harmony export */ });
/* harmony import */ var _base_math_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/math-array */ "./node_modules/@math.gl/core/dist/esm/classes/base/math-array.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var _vector4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector4 */ "./node_modules/@math.gl/core/dist/esm/classes/vector4.js");
/* harmony import */ var gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gl-matrix/quat */ "./node_modules/gl-matrix/esm/quat.js");
/* harmony import */ var gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gl-matrix/vec4 */ "./node_modules/gl-matrix/esm/vec4.js");





const IDENTITY_QUATERNION = [0, 0, 0, 1];
class Quaternion extends _base_math_array__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x = 0, y = 0, z = 0, w = 1) {
    super(-0, -0, -0, -0);

    if (Array.isArray(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      this.set(x, y, z, w);
    }
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    return this.check();
  }

  set(x, y, z, w) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
    return this.check();
  }

  fromObject(object) {
    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    this[3] = object.w;
    return this.check();
  }

  fromMatrix3(m) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.fromMat3(this, m);
    return this.check();
  }

  fromAxisRotation(axis, rad) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.setAxisAngle(this, axis, rad);
    return this.check();
  }

  identity() {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.identity(this);
    return this.check();
  }

  setAxisAngle(axis, rad) {
    return this.fromAxisRotation(axis, rad);
  }

  get ELEMENTS() {
    return 4;
  }

  get x() {
    return this[0];
  }

  set x(value) {
    this[0] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get y() {
    return this[1];
  }

  set y(value) {
    this[1] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get z() {
    return this[2];
  }

  set z(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get w() {
    return this[3];
  }

  set w(value) {
    this[3] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  len() {
    return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.length(this);
  }

  lengthSquared() {
    return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.squaredLength(this);
  }

  dot(a) {
    return gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.dot(this, a);
  }

  rotationTo(vectorA, vectorB) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.rotationTo(this, vectorA, vectorB);
    return this.check();
  }

  add(a) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.add(this, this, a);
    return this.check();
  }

  calculateW() {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.calculateW(this, this);
    return this.check();
  }

  conjugate() {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.conjugate(this, this);
    return this.check();
  }

  invert() {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.invert(this, this);
    return this.check();
  }

  lerp(a, b, t) {
    if (t === undefined) {
      return this.lerp(this, a, b);
    }

    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.lerp(this, a, b, t);
    return this.check();
  }

  multiplyRight(a) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.multiply(this, this, a);
    return this.check();
  }

  multiplyLeft(a) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.multiply(this, a, this);
    return this.check();
  }

  normalize() {
    const length = this.len();
    const l = length > 0 ? 1 / length : 0;
    this[0] = this[0] * l;
    this[1] = this[1] * l;
    this[2] = this[2] * l;
    this[3] = this[3] * l;

    if (length === 0) {
      this[3] = 1;
    }

    return this.check();
  }

  rotateX(rad) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.rotateX(this, this, rad);
    return this.check();
  }

  rotateY(rad) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.rotateY(this, this, rad);
    return this.check();
  }

  rotateZ(rad) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.rotateZ(this, this, rad);
    return this.check();
  }

  scale(b) {
    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.scale(this, this, b);
    return this.check();
  }

  slerp(arg0, arg1, arg2) {
    let start;
    let target;
    let ratio;

    switch (arguments.length) {
      case 1:
        ({
          start = IDENTITY_QUATERNION,
          target,
          ratio
        } = arg0);
        break;

      case 2:
        start = this;
        target = arg0;
        ratio = arg1;
        break;

      default:
        start = arg0;
        target = arg1;
        ratio = arg2;
    }

    gl_matrix_quat__WEBPACK_IMPORTED_MODULE_1__.slerp(this, start, target, ratio);
    return this.check();
  }

  transformVector4(vector, result = new _vector4__WEBPACK_IMPORTED_MODULE_3__["default"]()) {
    gl_matrix_vec4__WEBPACK_IMPORTED_MODULE_4__.transformQuat(result, vector, this);
    return (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkVector)(result, 4);
  }

  lengthSq() {
    return this.lengthSquared();
  }

  setFromAxisAngle(axis, rad) {
    return this.setAxisAngle(axis, rad);
  }

  premultiply(a) {
    return this.multiplyLeft(a);
  }

  multiply(a) {
    return this.multiplyRight(a);
  }

}
//# sourceMappingURL=quaternion.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/spherical-coordinates.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/spherical-coordinates.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SphericalCoordinates)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vector3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector3 */ "./node_modules/@math.gl/core/dist/esm/classes/vector3.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");





const EPSILON = 0.000001;
const EARTH_RADIUS_METERS = 6371000;
class SphericalCoordinates {
  constructor({
    phi = 0,
    theta = 0,
    radius = 1,
    bearing,
    pitch,
    altitude,
    radiusScale = EARTH_RADIUS_METERS
  } = {}) {
    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "phi", void 0);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "theta", void 0);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "radius", void 0);

    (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "radiusScale", void 0);

    this.phi = phi;
    this.theta = theta;
    this.radius = radius || altitude || 1;
    this.radiusScale = radiusScale || 1;

    if (bearing !== undefined) {
      this.bearing = bearing;
    }

    if (pitch !== undefined) {
      this.pitch = pitch;
    }

    this.check();
  }

  toString() {
    return this.formatString(_lib_common__WEBPACK_IMPORTED_MODULE_1__.config);
  }

  formatString({
    printTypes = false
  }) {
    const f = _lib_common__WEBPACK_IMPORTED_MODULE_1__.formatValue;
    return "".concat(printTypes ? 'Spherical' : '', "[rho:").concat(f(this.radius), ",theta:").concat(f(this.theta), ",phi:").concat(f(this.phi), "]");
  }

  equals(other) {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.equals)(this.radius, other.radius) && (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.equals)(this.theta, other.theta) && (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.equals)(this.phi, other.phi);
  }

  exactEquals(other) {
    return this.radius === other.radius && this.theta === other.theta && this.phi === other.phi;
  }

  get bearing() {
    return 180 - (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.degrees)(this.phi);
  }

  set bearing(v) {
    this.phi = Math.PI - (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.radians)(v);
  }

  get pitch() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.degrees)(this.theta);
  }

  set pitch(v) {
    this.theta = (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.radians)(v);
  }

  get longitude() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.degrees)(this.phi);
  }

  get latitude() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.degrees)(this.theta);
  }

  get lng() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.degrees)(this.phi);
  }

  get lat() {
    return (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.degrees)(this.theta);
  }

  get z() {
    return (this.radius - 1) * this.radiusScale;
  }

  set(radius, phi, theta) {
    this.radius = radius;
    this.phi = phi;
    this.theta = theta;
    return this.check();
  }

  clone() {
    return new SphericalCoordinates().copy(this);
  }

  copy(other) {
    this.radius = other.radius;
    this.phi = other.phi;
    this.theta = other.theta;
    return this.check();
  }

  fromLngLatZ([lng, lat, z]) {
    this.radius = 1 + z / this.radiusScale;
    this.phi = (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.radians)(lat);
    this.theta = (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.radians)(lng);
    return this.check();
  }

  fromVector3(v) {
    this.radius = gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_2__.length(v);

    if (this.radius > 0) {
      this.theta = Math.atan2(v[0], v[1]);
      this.phi = Math.acos((0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.clamp)(v[2] / this.radius, -1, 1));
    }

    return this.check();
  }

  toVector3() {
    return new _vector3__WEBPACK_IMPORTED_MODULE_3__["default"](0, 0, this.radius).rotateX({
      radians: this.theta
    }).rotateZ({
      radians: this.phi
    });
  }

  makeSafe() {
    this.phi = Math.max(EPSILON, Math.min(Math.PI - EPSILON, this.phi));
    return this;
  }

  check() {
    if (!Number.isFinite(this.phi) || !Number.isFinite(this.theta) || !(this.radius > 0)) {
      throw new Error('SphericalCoordinates: some fields set to invalid numbers');
    }

    return this;
  }

}
//# sourceMappingURL=spherical-coordinates.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/vector2.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/vector2.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector2)
/* harmony export */ });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/vector */ "./node_modules/@math.gl/core/dist/esm/classes/base/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec2 */ "./node_modules/gl-matrix/esm/vec2.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");





class Vector2 extends _base_vector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x = 0, y = 0) {
    super(2);

    if ((0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.isArray)(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(x);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(y);
      }

      this[0] = x;
      this[1] = y;
    }
  }

  set(x, y) {
    this[0] = x;
    this[1] = y;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    return this.check();
  }

  fromObject(object) {
    if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.x);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.y);
    }

    this[0] = object.x;
    this[1] = object.y;
    return this.check();
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    return object;
  }

  get ELEMENTS() {
    return 2;
  }

  horizontalAngle() {
    return Math.atan2(this.y, this.x);
  }

  verticalAngle() {
    return Math.atan2(this.x, this.y);
  }

  transform(matrix4) {
    return this.transformAsPoint(matrix4);
  }

  transformAsPoint(matrix4) {
    gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__.transformMat4(this, this, matrix4);
    return this.check();
  }

  transformAsVector(matrix4) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec2_transformMat4AsVector)(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__.transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2x3(matrix2x3) {
    gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__.transformMat2d(this, this, matrix2x3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    gl_matrix_vec2__WEBPACK_IMPORTED_MODULE_3__.transformMat2(this, this, matrix2);
    return this.check();
  }

}
//# sourceMappingURL=vector2.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/vector3.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/vector3.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector3)
/* harmony export */ });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/vector */ "./node_modules/@math.gl/core/dist/esm/classes/base/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");





const ORIGIN = [0, 0, 0];
let ZERO;
class Vector3 extends _base_vector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get ZERO() {
    if (!ZERO) {
      ZERO = new Vector3(0, 0, 0);
      Object.freeze(ZERO);
    }

    return ZERO;
  }

  constructor(x = 0, y = 0, z = 0) {
    super(-0, -0, -0);

    if (arguments.length === 1 && (0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.isArray)(x)) {
      this.copy(x);
    } else {
      if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(x);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(y);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(z);
      }

      this[0] = x;
      this[1] = y;
      this[2] = z;
    }
  }

  set(x, y, z) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    return this.check();
  }

  fromObject(object) {
    if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.x);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.y);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.z);
    }

    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    return this.check();
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    return object;
  }

  get ELEMENTS() {
    return 3;
  }

  get z() {
    return this[2];
  }

  set z(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  angle(vector) {
    return gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.angle(this, vector);
  }

  cross(vector) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.cross(this, this, vector);
    return this.check();
  }

  rotateX({
    radians,
    origin = ORIGIN
  }) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.rotateX(this, this, origin, radians);
    return this.check();
  }

  rotateY({
    radians,
    origin = ORIGIN
  }) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.rotateY(this, this, origin, radians);
    return this.check();
  }

  rotateZ({
    radians,
    origin = ORIGIN
  }) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.rotateZ(this, this, origin, radians);
    return this.check();
  }

  transform(matrix4) {
    return this.transformAsPoint(matrix4);
  }

  transformAsPoint(matrix4) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformMat4(this, this, matrix4);
    return this.check();
  }

  transformAsVector(matrix4) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec3_transformMat4AsVector)(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformMat3(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec3_transformMat2)(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformQuat(this, this, quaternion);
    return this.check();
  }

}
//# sourceMappingURL=vector3.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/classes/vector4.js":
/*!****************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/classes/vector4.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Vector4)
/* harmony export */ });
/* harmony import */ var _base_vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/vector */ "./node_modules/@math.gl/core/dist/esm/classes/base/vector.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");
/* harmony import */ var _lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/validators */ "./node_modules/@math.gl/core/dist/esm/lib/validators.js");
/* harmony import */ var gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gl-matrix/vec3 */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/gl-matrix-extras */ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js");





let ZERO;
class Vector4 extends _base_vector__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static get ZERO() {
    if (!ZERO) {
      ZERO = new Vector4(0, 0, 0, 0);
      Object.freeze(ZERO);
    }

    return ZERO;
  }

  constructor(x = 0, y = 0, z = 0, w = 0) {
    super(-0, -0, -0, -0);

    if ((0,_lib_common__WEBPACK_IMPORTED_MODULE_1__.isArray)(x) && arguments.length === 1) {
      this.copy(x);
    } else {
      if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(x);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(y);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(z);
        (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(w);
      }

      this[0] = x;
      this[1] = y;
      this[2] = z;
      this[3] = w;
    }
  }

  set(x, y, z, w) {
    this[0] = x;
    this[1] = y;
    this[2] = z;
    this[3] = w;
    return this.check();
  }

  copy(array) {
    this[0] = array[0];
    this[1] = array[1];
    this[2] = array[2];
    this[3] = array[3];
    return this.check();
  }

  fromObject(object) {
    if (_lib_common__WEBPACK_IMPORTED_MODULE_1__.config.debug) {
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.x);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.y);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.z);
      (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(object.w);
    }

    this[0] = object.x;
    this[1] = object.y;
    this[2] = object.z;
    this[3] = object.w;
    return this;
  }

  toObject(object) {
    object.x = this[0];
    object.y = this[1];
    object.z = this[2];
    object.w = this[3];
    return object;
  }

  get ELEMENTS() {
    return 4;
  }

  get z() {
    return this[2];
  }

  set z(value) {
    this[2] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  get w() {
    return this[3];
  }

  set w(value) {
    this[3] = (0,_lib_validators__WEBPACK_IMPORTED_MODULE_2__.checkNumber)(value);
  }

  transform(matrix4) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformMat4(this, this, matrix4);
    return this.check();
  }

  transformByMatrix3(matrix3) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec4_transformMat3)(this, this, matrix3);
    return this.check();
  }

  transformByMatrix2(matrix2) {
    (0,_lib_gl_matrix_extras__WEBPACK_IMPORTED_MODULE_4__.vec4_transformMat2)(this, this, matrix2);
    return this.check();
  }

  transformByQuaternion(quaternion) {
    gl_matrix_vec3__WEBPACK_IMPORTED_MODULE_3__.transformQuat(this, this, quaternion);
    return this.check();
  }

  applyMatrix4(m) {
    m.transform(this, this);
    return this;
  }

}
//# sourceMappingURL=vector4.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Euler": () => (/* reexport safe */ _classes_euler__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Matrix3": () => (/* reexport safe */ _classes_matrix3__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Matrix4": () => (/* reexport safe */ _classes_matrix4__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "Pose": () => (/* reexport safe */ _classes_pose__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "Quaternion": () => (/* reexport safe */ _classes_quaternion__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "SphericalCoordinates": () => (/* reexport safe */ _classes_spherical_coordinates__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "Vector2": () => (/* reexport safe */ _classes_vector2__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Vector3": () => (/* reexport safe */ _classes_vector3__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Vector4": () => (/* reexport safe */ _classes_vector4__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "_Euler": () => (/* reexport safe */ _classes_euler__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "_MathUtils": () => (/* reexport safe */ _lib_math_utils__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "_Pose": () => (/* reexport safe */ _classes_pose__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "_SphericalCoordinates": () => (/* reexport safe */ _classes_spherical_coordinates__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "acos": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.acos),
/* harmony export */   "asin": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.asin),
/* harmony export */   "assert": () => (/* reexport safe */ _lib_assert__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "atan": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.atan),
/* harmony export */   "clamp": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.clamp),
/* harmony export */   "clone": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.clone),
/* harmony export */   "config": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.config),
/* harmony export */   "configure": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.configure),
/* harmony export */   "cos": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.cos),
/* harmony export */   "degrees": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.degrees),
/* harmony export */   "equals": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.equals),
/* harmony export */   "exactEquals": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.exactEquals),
/* harmony export */   "formatValue": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.formatValue),
/* harmony export */   "isArray": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.isArray),
/* harmony export */   "lerp": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.lerp),
/* harmony export */   "radians": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.radians),
/* harmony export */   "sin": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.sin),
/* harmony export */   "tan": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.tan),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.toDegrees),
/* harmony export */   "toRadians": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.toRadians),
/* harmony export */   "withEpsilon": () => (/* reexport safe */ _lib_common__WEBPACK_IMPORTED_MODULE_11__.withEpsilon)
/* harmony export */ });
/* harmony import */ var _classes_vector2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/vector2 */ "./node_modules/@math.gl/core/dist/esm/classes/vector2.js");
/* harmony import */ var _classes_vector3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/vector3 */ "./node_modules/@math.gl/core/dist/esm/classes/vector3.js");
/* harmony import */ var _classes_vector4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/vector4 */ "./node_modules/@math.gl/core/dist/esm/classes/vector4.js");
/* harmony import */ var _classes_matrix3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/matrix3 */ "./node_modules/@math.gl/core/dist/esm/classes/matrix3.js");
/* harmony import */ var _classes_matrix4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/matrix4 */ "./node_modules/@math.gl/core/dist/esm/classes/matrix4.js");
/* harmony import */ var _classes_quaternion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/quaternion */ "./node_modules/@math.gl/core/dist/esm/classes/quaternion.js");
/* harmony import */ var _classes_spherical_coordinates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classes/spherical-coordinates */ "./node_modules/@math.gl/core/dist/esm/classes/spherical-coordinates.js");
/* harmony import */ var _classes_pose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/pose */ "./node_modules/@math.gl/core/dist/esm/classes/pose.js");
/* harmony import */ var _classes_euler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/euler */ "./node_modules/@math.gl/core/dist/esm/classes/euler.js");
/* harmony import */ var _lib_math_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/math-utils */ "./node_modules/@math.gl/core/dist/esm/lib/math-utils.js");
/* harmony import */ var _lib_assert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");
/* harmony import */ var _lib_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/assert.js":
/*!***********************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/assert.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assert)
/* harmony export */ });
function assert(condition, message) {
  if (!condition) {
    throw new Error("math.gl assertion ".concat(message));
  }
}
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/common.js":
/*!***********************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/common.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "acos": () => (/* binding */ acos),
/* harmony export */   "asin": () => (/* binding */ asin),
/* harmony export */   "atan": () => (/* binding */ atan),
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "configure": () => (/* binding */ configure),
/* harmony export */   "cos": () => (/* binding */ cos),
/* harmony export */   "degrees": () => (/* binding */ degrees),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "formatValue": () => (/* binding */ formatValue),
/* harmony export */   "isArray": () => (/* binding */ isArray),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "radians": () => (/* binding */ radians),
/* harmony export */   "sin": () => (/* binding */ sin),
/* harmony export */   "tan": () => (/* binding */ tan),
/* harmony export */   "toDegrees": () => (/* binding */ toDegrees),
/* harmony export */   "toRadians": () => (/* binding */ toRadians),
/* harmony export */   "withEpsilon": () => (/* binding */ withEpsilon)
/* harmony export */ });
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assert */ "./node_modules/@math.gl/core/dist/esm/lib/assert.js");

const RADIANS_TO_DEGREES = 1 / Math.PI * 180;
const DEGREES_TO_RADIANS = 1 / 180 * Math.PI;
const config = {
  EPSILON: 1e-12,
  debug: false,
  precision: 4,
  printTypes: false,
  printDegrees: false,
  printRowMajor: true
};
function configure(options) {
  for (const key in options) {
    (0,_assert__WEBPACK_IMPORTED_MODULE_0__["default"])(key in config);
    config[key] = options[key];
  }

  return config;
}
function formatValue(value, {
  precision = config.precision
} = {}) {
  value = round(value);
  return "".concat(parseFloat(value.toPrecision(precision)));
}
function isArray(value) {
  return Array.isArray(value) || ArrayBuffer.isView(value) && !(value instanceof DataView);
}
function clone(array) {
  return 'clone' in array ? array.clone() : array.slice();
}
function toRadians(degrees) {
  return radians(degrees);
}
function toDegrees(radians) {
  return degrees(radians);
}
function radians(degrees, result) {
  return map(degrees, degrees => degrees * DEGREES_TO_RADIANS, result);
}
function degrees(radians, result) {
  return map(radians, radians => radians * RADIANS_TO_DEGREES, result);
}
function sin(radians, result) {
  return map(radians, angle => Math.sin(angle), result);
}
function cos(radians, result) {
  return map(radians, angle => Math.cos(angle), result);
}
function tan(radians, result) {
  return map(radians, angle => Math.tan(angle), result);
}
function asin(radians, result) {
  return map(radians, angle => Math.asin(angle), result);
}
function acos(radians, result) {
  return map(radians, angle => Math.acos(angle), result);
}
function atan(radians, result) {
  return map(radians, angle => Math.atan(angle), result);
}
function clamp(value, min, max) {
  return map(value, value => Math.max(min, Math.min(max, value)));
}
function lerp(a, b, t) {
  if (isArray(a)) {
    return a.map((ai, i) => lerp(ai, b[i], t));
  }

  return t * b + (1 - t) * a;
}
function equals(a, b, epsilon) {
  const oldEpsilon = config.EPSILON;

  if (epsilon) {
    config.EPSILON = epsilon;
  }

  try {
    if (a === b) {
      return true;
    }

    if (isArray(a) && isArray(b)) {
      if (a.length !== b.length) {
        return false;
      }

      for (let i = 0; i < a.length; ++i) {
        if (!equals(a[i], b[i])) {
          return false;
        }
      }

      return true;
    }

    if (a && a.equals) {
      return a.equals(b);
    }

    if (b && b.equals) {
      return b.equals(a);
    }

    if (typeof a === 'number' && typeof b === 'number') {
      return Math.abs(a - b) <= config.EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
    }

    return false;
  } finally {
    config.EPSILON = oldEpsilon;
  }
}
function exactEquals(a, b) {
  if (a === b) {
    return true;
  }

  if (a && typeof a === 'object' && b && typeof b === 'object') {
    if (a.constructor !== b.constructor) {
      return false;
    }

    if (a.exactEquals) {
      return a.exactEquals(b);
    }
  }

  if (isArray(a) && isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; ++i) {
      if (!exactEquals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  return false;
}
function withEpsilon(epsilon, func) {
  const oldPrecision = config.EPSILON;
  config.EPSILON = epsilon;
  let value;

  try {
    value = func();
  } finally {
    config.EPSILON = oldPrecision;
  }

  return value;
}

function round(value) {
  return Math.round(value / config.EPSILON) * config.EPSILON;
}

function duplicateArray(array) {
  return array.clone ? array.clone() : new Array(array.length);
}

function map(value, func, result) {
  if (isArray(value)) {
    const array = value;
    result = result || duplicateArray(array);

    for (let i = 0; i < result.length && i < array.length; ++i) {
      result[i] = func(value[i], i, result);
    }

    return result;
  }

  return func(value);
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/gl-matrix-extras.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vec2_transformMat4AsVector": () => (/* binding */ vec2_transformMat4AsVector),
/* harmony export */   "vec3_transformMat2": () => (/* binding */ vec3_transformMat2),
/* harmony export */   "vec3_transformMat4AsVector": () => (/* binding */ vec3_transformMat4AsVector),
/* harmony export */   "vec4_transformMat2": () => (/* binding */ vec4_transformMat2),
/* harmony export */   "vec4_transformMat3": () => (/* binding */ vec4_transformMat3)
/* harmony export */ });
function vec2_transformMat4AsVector(out, a, m) {
  const x = a[0];
  const y = a[1];
  const w = m[3] * x + m[7] * y || 1.0;
  out[0] = (m[0] * x + m[4] * y) / w;
  out[1] = (m[1] * x + m[5] * y) / w;
  return out;
}
function vec3_transformMat4AsVector(out, a, m) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  const w = m[3] * x + m[7] * y + m[11] * z || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
  return out;
}
function vec3_transformMat2(out, a, m) {
  const x = a[0];
  const y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  out[2] = a[2];
  return out;
}
function vec4_transformMat2(out, a, m) {
  const x = a[0];
  const y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function vec4_transformMat3(out, a, m) {
  const x = a[0];
  const y = a[1];
  const z = a[2];
  out[0] = m[0] * x + m[3] * y + m[6] * z;
  out[1] = m[1] * x + m[4] * y + m[7] * z;
  out[2] = m[2] * x + m[5] * y + m[8] * z;
  out[3] = a[3];
  return out;
}
//# sourceMappingURL=gl-matrix-extras.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/math-utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/math-utils.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  EPSILON1: 1e-1,
  EPSILON2: 1e-2,
  EPSILON3: 1e-3,
  EPSILON4: 1e-4,
  EPSILON5: 1e-5,
  EPSILON6: 1e-6,
  EPSILON7: 1e-7,
  EPSILON8: 1e-8,
  EPSILON9: 1e-9,
  EPSILON10: 1e-10,
  EPSILON11: 1e-11,
  EPSILON12: 1e-12,
  EPSILON13: 1e-13,
  EPSILON14: 1e-14,
  EPSILON15: 1e-15,
  EPSILON16: 1e-16,
  EPSILON17: 1e-17,
  EPSILON18: 1e-18,
  EPSILON19: 1e-19,
  EPSILON20: 1e-20,
  PI_OVER_TWO: Math.PI / 2,
  PI_OVER_FOUR: Math.PI / 4,
  PI_OVER_SIX: Math.PI / 6,
  TWO_PI: Math.PI * 2
});
//# sourceMappingURL=math-utils.js.map

/***/ }),

/***/ "./node_modules/@math.gl/core/dist/esm/lib/validators.js":
/*!***************************************************************!*\
  !*** ./node_modules/@math.gl/core/dist/esm/lib/validators.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNumber": () => (/* binding */ checkNumber),
/* harmony export */   "checkVector": () => (/* binding */ checkVector),
/* harmony export */   "deprecated": () => (/* binding */ deprecated),
/* harmony export */   "validateVector": () => (/* binding */ validateVector)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./node_modules/@math.gl/core/dist/esm/lib/common.js");

function validateVector(v, length) {
  if (v.length !== length) {
    return false;
  }

  for (let i = 0; i < v.length; ++i) {
    if (!Number.isFinite(v[i])) {
      return false;
    }
  }

  return true;
}
function checkNumber(value) {
  if (!Number.isFinite(value)) {
    throw new Error("Invalid number ".concat(value));
  }

  return value;
}
function checkVector(v, length, callerName = '') {
  if (_common__WEBPACK_IMPORTED_MODULE_0__.config.debug && !validateVector(v, length)) {
    throw new Error("math.gl: ".concat(callerName, " some fields set to invalid numbers'"));
  }

  return v;
}
const map = {};
function deprecated(method, version) {
  if (!map[method]) {
    map[method] = true;
    console.warn("".concat(method, " has been removed in version ").concat(version, ", see upgrade guide for more information"));
  }
}
//# sourceMappingURL=validators.js.map

/***/ }),

/***/ "./node_modules/gl-matrix/esm/common.js":
/*!**********************************************!*\
  !*** ./node_modules/gl-matrix/esm/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARRAY_TYPE": () => (/* binding */ ARRAY_TYPE),
/* harmony export */   "EPSILON": () => (/* binding */ EPSILON),
/* harmony export */   "RANDOM": () => (/* binding */ RANDOM),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "setMatrixArrayType": () => (/* binding */ setMatrixArrayType),
/* harmony export */   "toRadian": () => (/* binding */ toRadian)
/* harmony export */ });
/**
 * Common utilities
 * @module glMatrix
 */
// Configuration Constants
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Float32ArrayConstructor | ArrayConstructor} type Array type, such as Float32Array or Array
 */

function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */

function toRadian(a) {
  return a * degree;
}
/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */

function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}
if (!Math.hypot) Math.hypot = function () {
  var y = 0,
      i = arguments.length;

  while (i--) {
    y += arguments[i] * arguments[i];
  }

  return Math.sqrt(y);
};

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "fromMat2d": () => (/* binding */ fromMat2d),
/* harmony export */   "fromMat4": () => (/* binding */ fromMat4),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "normalFromMat4": () => (/* binding */ normalFromMat4),
/* harmony export */   "projection": () => (/* binding */ projection),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }

  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}
/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {ReadonlyMat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}
/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */

function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */

function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}
/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}
/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the source matrix
 * @returns {mat3} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}
/**
 * Calculates the determinant of a mat3
 *
 * @param {ReadonlyMat3} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];
  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to translate
 * @param {ReadonlyVec2} v vector to translate by
 * @returns {mat3} out
 */

function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];
  out[0] = a00;
  out[1] = a01;
  out[2] = a02;
  out[3] = a10;
  out[4] = a11;
  out[5] = a12;
  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}
/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;
  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;
  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
}
/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to rotate
 * @param {ReadonlyVec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1];
  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];
  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Translation vector
 * @returns {mat3} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */

function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = -s;
  out[4] = c;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyVec2} v Scaling vector
 * @returns {mat3} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}
/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat2d} a the matrix to copy
 * @returns {mat3} out
 **/

function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;
  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;
  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}
/**
 * Calculates a 3x3 matrix from the given quaternion
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat3} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;
  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;
  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;
  return out;
}
/**
 * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {ReadonlyMat4} a Mat4 to derive the normal matrix from
 *
 * @returns {mat3} out
 */

function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  return out;
}
/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */

function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}
/**
 * Returns a string representation of a mat3
 *
 * @param {ReadonlyMat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
/**
 * Returns Frobenius norm of a mat3
 *
 * @param {ReadonlyMat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
}
/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @returns {mat3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {ReadonlyMat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}
/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {ReadonlyMat3} a the first operand
 * @param {ReadonlyMat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat3} a The first matrix.
 * @param {ReadonlyMat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
/**
 * Alias for {@link mat3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat3.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/mat4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/mat4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "adjoint": () => (/* binding */ adjoint),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "determinant": () => (/* binding */ determinant),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "frob": () => (/* binding */ frob),
/* harmony export */   "fromQuat": () => (/* binding */ fromQuat),
/* harmony export */   "fromQuat2": () => (/* binding */ fromQuat2),
/* harmony export */   "fromRotation": () => (/* binding */ fromRotation),
/* harmony export */   "fromRotationTranslation": () => (/* binding */ fromRotationTranslation),
/* harmony export */   "fromRotationTranslationScale": () => (/* binding */ fromRotationTranslationScale),
/* harmony export */   "fromRotationTranslationScaleOrigin": () => (/* binding */ fromRotationTranslationScaleOrigin),
/* harmony export */   "fromScaling": () => (/* binding */ fromScaling),
/* harmony export */   "fromTranslation": () => (/* binding */ fromTranslation),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "fromXRotation": () => (/* binding */ fromXRotation),
/* harmony export */   "fromYRotation": () => (/* binding */ fromYRotation),
/* harmony export */   "fromZRotation": () => (/* binding */ fromZRotation),
/* harmony export */   "frustum": () => (/* binding */ frustum),
/* harmony export */   "getRotation": () => (/* binding */ getRotation),
/* harmony export */   "getScaling": () => (/* binding */ getScaling),
/* harmony export */   "getTranslation": () => (/* binding */ getTranslation),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "lookAt": () => (/* binding */ lookAt),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "multiplyScalar": () => (/* binding */ multiplyScalar),
/* harmony export */   "multiplyScalarAndAdd": () => (/* binding */ multiplyScalarAndAdd),
/* harmony export */   "ortho": () => (/* binding */ ortho),
/* harmony export */   "orthoNO": () => (/* binding */ orthoNO),
/* harmony export */   "orthoZO": () => (/* binding */ orthoZO),
/* harmony export */   "perspective": () => (/* binding */ perspective),
/* harmony export */   "perspectiveFromFieldOfView": () => (/* binding */ perspectiveFromFieldOfView),
/* harmony export */   "perspectiveNO": () => (/* binding */ perspectiveNO),
/* harmony export */   "perspectiveZO": () => (/* binding */ perspectiveZO),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "targetTo": () => (/* binding */ targetTo),
/* harmony export */   "translate": () => (/* binding */ translate),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }

  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {ReadonlyMat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */

function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */

function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */

function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}
/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }

  det = 1.0 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the source matrix
 * @returns {mat4} out
 */

function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
/**
 * Calculates the determinant of a mat4
 *
 * @param {ReadonlyMat4} a the source matrix
 * @returns {Number} determinant of a
 */

function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15]; // Cache only the current line of the second matrix

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to translate
 * @param {ReadonlyVec3} v vector to translate by
 * @returns {mat4} out
 */

function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}
/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {ReadonlyVec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/

function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11]; // Construct the elements of the rotation matrix

  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  return out;
}
/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  } // Perform axis-specific matrix multiplication


  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyVec3} v Scaling vector
 * @returns {mat4} out
 */

function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {ReadonlyVec3} axis the axis to rotate around
 * @returns {mat4} out
 */

function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.hypot(x, y, z);
  var s, c, t;

  if (len < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c; // Perform rotation-specific matrix multiplication

  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */

function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad); // Perform axis-specific matrix multiplication

  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @returns {mat4} out
 */

function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a new mat4 from a dual quat.
 *
 * @param {mat4} out Matrix
 * @param {ReadonlyQuat2} a Dual Quaternion
 * @returns {mat4} mat4 receiving operation result
 */

function fromQuat2(out, a) {
  var translation = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  var bx = -a[0],
      by = -a[1],
      bz = -a[2],
      bw = a[3],
      ax = a[4],
      ay = a[5],
      az = a[6],
      aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw; //Only scale if it makes sense

  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }

  fromRotationTranslation(out, a, translation);
  return out;
}
/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */

function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {ReadonlyMat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */

function getRotation(out, mat) {
  var scaling = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }

  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @returns {mat4} out
 */

function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {ReadonlyVec3} v Translation vector
 * @param {ReadonlyVec3} s Scaling vector
 * @param {ReadonlyVec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */

function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {ReadonlyQuat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */

function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */

function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
/**
 * Generates a perspective projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }

  return out;
}
/**
 * Alias for {@link mat4.perspectiveNO}
 * @function
 */

var perspective = perspectiveNO;
/**
 * Generates a perspective projection matrix suitable for WebGPU with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 * Passing null/undefined/no value for far will generate infinite projection matrix.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum, can be null or Infinity
 * @returns {mat4} out
 */

function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2),
      nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;

  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }

  return out;
}
/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [-1, 1],
 * which matches WebGL/OpenGL's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
/**
 * Alias for {@link mat4.orthoNO}
 * @function
 */

var ortho = orthoNO;
/**
 * Generates a orthogonal projection matrix with the given bounds.
 * The near/far clip planes correspond to a normalized device coordinate Z range of [0, 1],
 * which matches WebGPU/Vulkan/DirectX/Metal's clip volume.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */

function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis.
 * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyey - centery) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON && Math.abs(eyez - centerz) < _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    return identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len = 1 / Math.hypot(z0, z1, z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.hypot(x0, x1, x2);

  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len = Math.hypot(y0, y1, y2);

  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {ReadonlyVec3} eye Position of the viewer
 * @param {ReadonlyVec3} center Point the viewer is looking at
 * @param {ReadonlyVec3} up vec3 pointing up
 * @returns {mat4} out
 */

function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];
  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];
  var len = z0 * z0 + z1 * z1 + z2 * z2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;
  len = x0 * x0 + x1 * x1 + x2 * x2;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
/**
 * Returns a string representation of a mat4
 *
 * @param {ReadonlyMat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */

function str(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
/**
 * Returns Frobenius norm of a mat4
 *
 * @param {ReadonlyMat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */

function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @returns {mat4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {ReadonlyMat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */

function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {ReadonlyMat4} a the first operand
 * @param {ReadonlyMat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */

function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}
/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {ReadonlyMat4} a The first matrix.
 * @param {ReadonlyMat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
/**
 * Alias for {@link mat4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link mat4.subtract}
 * @function
 */

var sub = subtract;

/***/ }),

/***/ "./node_modules/gl-matrix/esm/quat.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/quat.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "calculateW": () => (/* binding */ calculateW),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "conjugate": () => (/* binding */ conjugate),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "exp": () => (/* binding */ exp),
/* harmony export */   "fromEuler": () => (/* binding */ fromEuler),
/* harmony export */   "fromMat3": () => (/* binding */ fromMat3),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "getAngle": () => (/* binding */ getAngle),
/* harmony export */   "getAxisAngle": () => (/* binding */ getAxisAngle),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "ln": () => (/* binding */ ln),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "pow": () => (/* binding */ pow),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "rotationTo": () => (/* binding */ rotationTo),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "setAxes": () => (/* binding */ setAxes),
/* harmony export */   "setAxisAngle": () => (/* binding */ setAxisAngle),
/* harmony export */   "slerp": () => (/* binding */ slerp),
/* harmony export */   "sqlerp": () => (/* binding */ sqlerp),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "str": () => (/* binding */ str)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");
/* harmony import */ var _mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat3.js */ "./node_modules/gl-matrix/esm/mat3.js");
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vec3.js */ "./node_modules/gl-matrix/esm/vec3.js");
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vec4.js */ "./node_modules/gl-matrix/esm/vec4.js");




/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  out[3] = 1;
  return out;
}
/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyVec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/

function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {ReadonlyQuat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */

function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);

  if (s > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }

  return rad;
}
/**
 * Gets the angular distance between two unit quaternions
 *
 * @param  {ReadonlyQuat} a     Origin unit quaternion
 * @param  {ReadonlyQuat} b     Destination unit quaternion
 * @return {Number}     Angle, in radians, between the two quaternions
 */

function getAngle(a, b) {
  var dotproduct = dot(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 */

function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateX(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateY(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {ReadonlyQuat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */

function rotateZ(out, a, rad) {
  rad *= 0.5;
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate W component of
 * @returns {quat} out
 */

function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}
/**
 * Calculate the exponential of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function exp(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
/**
 * Calculate the natural logarithm of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @returns {quat} out
 */

function ln(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
/**
 * Calculate the scalar power of a unit quaternion.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate the exponential of
 * @param {Number} b amount to scale the quaternion by
 * @returns {quat} out
 */

function pow(out, a, b) {
  ln(out, a);
  scale(out, out, b);
  exp(out, out);
  return out;
}
/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];
  var omega, cosom, sinom, scale0, scale1; // calc cosine

  cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  } // calculate coefficients


  if (1.0 - cosom > _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  } // calculate final values


  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
/**
 * Generates a random unit quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */

function random(out) {
  // Implementation of http://planning.cs.uiuc.edu/node198.html
  // TODO: Calling random 3 times is probably not the fastest solution
  var u1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var u3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
  return out;
}
/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate inverse of
 * @returns {quat} out
 */

function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quat to calculate conjugate of
 * @returns {quat} out
 */

function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyMat3} m rotation matrix
 * @returns {quat} out
 * @function
 */

function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w

    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)

    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}
/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */

function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
/**
 * Returns a string representation of a quatenion
 *
 * @param {ReadonlyQuat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {ReadonlyQuat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */

var clone = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.clone;
/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */

var fromValues = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.fromValues;
/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the source quaternion
 * @returns {quat} out
 * @function
 */

var copy = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.copy;
/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */

var set = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.set;
/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {quat} out
 * @function
 */

var add = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.add;
/**
 * Alias for {@link quat.multiply}
 * @function
 */

var mul = multiply;
/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {ReadonlyQuat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */

var scale = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.scale;
/**
 * Calculates the dot product of two quat's
 *
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */

var dot = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.dot;
/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 * @function
 */

var lerp = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.lerp;
/**
 * Calculates the length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate length of
 * @returns {Number} length of a
 */

var length = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.length;
/**
 * Alias for {@link quat.length}
 * @function
 */

var len = length;
/**
 * Calculates the squared length of a quat
 *
 * @param {ReadonlyQuat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */

var squaredLength = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.squaredLength;
/**
 * Alias for {@link quat.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */

var normalize = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.normalize;
/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyQuat} a The first quaternion.
 * @param {ReadonlyQuat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var exactEquals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.exactEquals;
/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {ReadonlyQuat} a The first vector.
 * @param {ReadonlyQuat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

var equals = _vec4_js__WEBPACK_IMPORTED_MODULE_1__.equals;
/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {ReadonlyVec3} a the initial vector
 * @param {ReadonlyVec3} b the destination vector
 * @returns {quat} out
 */

var rotationTo = function () {
  var tmpvec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.create();
  var xUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(1, 0, 0);
  var yUnitVec3 = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.fromValues(0, 1, 0);
  return function (out, a, b) {
    var dot = _vec3_js__WEBPACK_IMPORTED_MODULE_2__.dot(a, b);

    if (dot < -0.999999) {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, xUnitVec3, a);
      if (_vec3_js__WEBPACK_IMPORTED_MODULE_2__.len(tmpvec3) < 0.000001) _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, yUnitVec3, a);
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      _vec3_js__WEBPACK_IMPORTED_MODULE_2__.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();
/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {ReadonlyQuat} a the first operand
 * @param {ReadonlyQuat} b the second operand
 * @param {ReadonlyQuat} c the third operand
 * @param {ReadonlyQuat} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {quat} out
 */

var sqlerp = function () {
  var temp1 = create();
  var temp2 = create();
  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {ReadonlyVec3} view  the vector representing the viewing direction
 * @param {ReadonlyVec3} right the vector representing the local "right" direction
 * @param {ReadonlyVec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */

var setAxes = function () {
  var matr = _mat3_js__WEBPACK_IMPORTED_MODULE_3__.create();
  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec2.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec2.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "transformMat2": () => (/* binding */ transformMat2),
/* harmony export */   "transformMat2d": () => (/* binding */ transformMat2d),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "zero": () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
  }

  return out;
}
/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {ReadonlyVec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */

function fromValues(x, y) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the source vector
 * @returns {vec2} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}
/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */

function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}
/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}
/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
}
/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
}
/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to ceil
 * @returns {vec2} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
}
/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to floor
 * @returns {vec2} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
}
/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
}
/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec2} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
}
/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to round
 * @returns {vec2} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
}
/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
}
/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
}
/**
 * Calculates the length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0],
      y = a[1];
  return Math.hypot(x, y);
}
/**
 * Calculates the squared length of a vec2
 *
 * @param {ReadonlyVec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
}
/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to negate
 * @returns {vec2} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
}
/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to invert
 * @returns {vec2} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
}
/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a vector to normalize
 * @returns {vec2} out
 */

function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  return out;
}
/**
 * Calculates the dot product of two vec2's
 *
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
}
/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
}
/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the first operand
 * @param {ReadonlyVec2} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec2} out
 */

function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
}
/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
}
/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat2d} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
}
/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat3} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {ReadonlyVec2} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec2} out
 */

function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}
/**
 * Rotate a 2D vector
 * @param {vec2} out The receiving vec2
 * @param {ReadonlyVec2} a The vec2 point to rotate
 * @param {ReadonlyVec2} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec2} out
 */

function rotate(out, a, b, rad) {
  //Translate point to the origin
  var p0 = a[0] - b[0],
      p1 = a[1] - b[1],
      sinC = Math.sin(rad),
      cosC = Math.cos(rad); //perform rotation and translate to correct position

  out[0] = p0 * cosC - p1 * sinC + b[0];
  out[1] = p0 * sinC + p1 * cosC + b[1];
  return out;
}
/**
 * Get the angle between two 2D vectors
 * @param {ReadonlyVec2} a The first operand
 * @param {ReadonlyVec2} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var x1 = a[0],
      y1 = a[1],
      x2 = b[0],
      y2 = b[1],
      // mag is the product of the magnitudes of a and b
  mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2),
      // mag &&.. short circuits if mag == 0
  cosine = mag && (x1 * x2 + y1 * y2) / mag; // Math.min(Math.max(cosine, -1), 1) clamps the cosine between -1 and 1

  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec2 to zero
 *
 * @param {vec2} out the receiving vector
 * @returns {vec2} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec2(" + a[0] + ", " + a[1] + ")";
}
/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec2} a The first vector.
 * @param {ReadonlyVec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
/**
 * Alias for {@link vec2.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec2.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec2.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec2.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec2.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec3.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec3.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "angle": () => (/* binding */ angle),
/* harmony export */   "bezier": () => (/* binding */ bezier),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "hermite": () => (/* binding */ hermite),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "rotateX": () => (/* binding */ rotateX),
/* harmony export */   "rotateY": () => (/* binding */ rotateY),
/* harmony export */   "rotateZ": () => (/* binding */ rotateZ),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "transformMat3": () => (/* binding */ transformMat3),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "zero": () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }

  return out;
}
/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {ReadonlyVec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Calculates the length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */

function fromValues(x, y, z) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the source vector
 * @returns {vec3} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */

function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to ceil
 * @returns {vec3} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to floor
 * @returns {vec3} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to round
 * @returns {vec3} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
/**
 * Calculates the squared length of a vec3
 *
 * @param {ReadonlyVec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to negate
 * @returns {vec3} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to invert
 * @returns {vec3} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}
/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a vector to normalize
 * @returns {vec3} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;

  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
  }

  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
/**
 * Calculates the dot product of two vec3's
 *
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @returns {vec3} out
 */

function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the first operand
 * @param {ReadonlyVec3} b the second operand
 * @param {ReadonlyVec3} c the third operand
 * @param {ReadonlyVec3} d the fourth operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec3} out
 */

function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */

function random(out, scale) {
  scale = scale || 1.0;
  var r = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 * Math.PI;
  var z = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}
/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec3} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyMat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */

function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
/**
 * Transforms the vec3 with a quat
 * Can also be used for dual quaternions. (Multiply it with the real part)
 *
 * @param {vec3} out the receiving vector
 * @param {ReadonlyVec3} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec3} out
 */

function transformQuat(out, a, q) {
  // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];
  var x = a[0],
      y = a[1],
      z = a[2]; // var qvec = [qx, qy, qz];
  // var uv = vec3.cross([], qvec, a);

  var uvx = qy * z - qz * y,
      uvy = qz * x - qx * z,
      uvz = qx * y - qy * x; // var uuv = vec3.cross([], qvec, uv);

  var uuvx = qy * uvz - qz * uvy,
      uuvy = qz * uvx - qx * uvz,
      uuvz = qx * uvy - qy * uvx; // vec3.scale(uv, uv, 2 * w);

  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2; // vec3.scale(uuv, uuv, 2);

  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2; // return vec3.add(out, a, vec3.add(out, uv, uuv));

  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateX(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateY(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad); //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {ReadonlyVec3} a The vec3 point to rotate
 * @param {ReadonlyVec3} b The origin of the rotation
 * @param {Number} rad The angle of rotation in radians
 * @returns {vec3} out
 */

function rotateZ(out, a, b, rad) {
  var p = [],
      r = []; //Translate point to the origin

  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2]; //perform rotation

  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2]; //translate to correct position

  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
/**
 * Get the angle between two 3D vectors
 * @param {ReadonlyVec3} a The first operand
 * @param {ReadonlyVec3} b The second operand
 * @returns {Number} The angle in radians
 */

function angle(a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      bx = b[0],
      by = b[1],
      bz = b[2],
      mag1 = Math.sqrt(ax * ax + ay * ay + az * az),
      mag2 = Math.sqrt(bx * bx + by * by + bz * bz),
      mag = mag1 * mag2,
      cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
/**
 * Set the components of a vec3 to zero
 *
 * @param {vec3} out the receiving vector
 * @returns {vec3} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec3} a The first vector.
 * @param {ReadonlyVec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
/**
 * Alias for {@link vec3.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec3.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec3.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec3.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec3.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/gl-matrix/esm/vec4.js":
/*!********************************************!*\
  !*** ./node_modules/gl-matrix/esm/vec4.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "ceil": () => (/* binding */ ceil),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "copy": () => (/* binding */ copy),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "cross": () => (/* binding */ cross),
/* harmony export */   "dist": () => (/* binding */ dist),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "div": () => (/* binding */ div),
/* harmony export */   "divide": () => (/* binding */ divide),
/* harmony export */   "dot": () => (/* binding */ dot),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "exactEquals": () => (/* binding */ exactEquals),
/* harmony export */   "floor": () => (/* binding */ floor),
/* harmony export */   "forEach": () => (/* binding */ forEach),
/* harmony export */   "fromValues": () => (/* binding */ fromValues),
/* harmony export */   "inverse": () => (/* binding */ inverse),
/* harmony export */   "len": () => (/* binding */ len),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "lerp": () => (/* binding */ lerp),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "mul": () => (/* binding */ mul),
/* harmony export */   "multiply": () => (/* binding */ multiply),
/* harmony export */   "negate": () => (/* binding */ negate),
/* harmony export */   "normalize": () => (/* binding */ normalize),
/* harmony export */   "random": () => (/* binding */ random),
/* harmony export */   "round": () => (/* binding */ round),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleAndAdd": () => (/* binding */ scaleAndAdd),
/* harmony export */   "set": () => (/* binding */ set),
/* harmony export */   "sqrDist": () => (/* binding */ sqrDist),
/* harmony export */   "sqrLen": () => (/* binding */ sqrLen),
/* harmony export */   "squaredDistance": () => (/* binding */ squaredDistance),
/* harmony export */   "squaredLength": () => (/* binding */ squaredLength),
/* harmony export */   "str": () => (/* binding */ str),
/* harmony export */   "sub": () => (/* binding */ sub),
/* harmony export */   "subtract": () => (/* binding */ subtract),
/* harmony export */   "transformMat4": () => (/* binding */ transformMat4),
/* harmony export */   "transformQuat": () => (/* binding */ transformQuat),
/* harmony export */   "zero": () => (/* binding */ zero)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/gl-matrix/esm/common.js");

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */

function create() {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);

  if (_common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }

  return out;
}
/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {ReadonlyVec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */

function clone(a) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */

function fromValues(x, y, z, w) {
  var out = new _common_js__WEBPACK_IMPORTED_MODULE_0__.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the source vector
 * @returns {vec4} out
 */

function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */

function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}
/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}
/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}
/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to ceil
 * @returns {vec4} out
 */

function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}
/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to floor
 * @returns {vec4} out
 */

function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}
/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}
/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {vec4} out
 */

function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}
/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to round
 * @returns {vec4} out
 */

function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}
/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */

function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */

function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}
/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} distance between a and b
 */

function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} squared distance between a and b
 */

function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Calculates the length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate length of
 * @returns {Number} length of a
 */

function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
/**
 * Calculates the squared length of a vec4
 *
 * @param {ReadonlyVec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */

function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to negate
 * @returns {vec4} out
 */

function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}
/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to invert
 * @returns {vec4} out
 */

function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}
/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a vector to normalize
 * @returns {vec4} out
 */

function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;

  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }

  out[0] = x * len;
  out[1] = y * len;
  out[2] = z * len;
  out[3] = w * len;
  return out;
}
/**
 * Calculates the dot product of two vec4's
 *
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @returns {Number} dot product of a and b
 */

function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
/**
 * Returns the cross-product of three vectors in a 4-dimensional space
 *
 * @param {ReadonlyVec4} result the receiving vector
 * @param {ReadonlyVec4} U the first vector
 * @param {ReadonlyVec4} V the second vector
 * @param {ReadonlyVec4} W the third vector
 * @returns {vec4} result
 */

function cross(out, u, v, w) {
  var A = v[0] * w[1] - v[1] * w[0],
      B = v[0] * w[2] - v[2] * w[0],
      C = v[0] * w[3] - v[3] * w[0],
      D = v[1] * w[2] - v[2] * w[1],
      E = v[1] * w[3] - v[3] * w[1],
      F = v[2] * w[3] - v[3] * w[2];
  var G = u[0];
  var H = u[1];
  var I = u[2];
  var J = u[3];
  out[0] = H * F - I * E + J * D;
  out[1] = -(G * F) + I * C - J * B;
  out[2] = G * E - H * C + J * A;
  out[3] = -(G * D) + H * B - I * A;
  return out;
}
/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the first operand
 * @param {ReadonlyVec4} b the second operand
 * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
 * @returns {vec4} out
 */

function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */

function random(out, scale) {
  scale = scale || 1.0; // Marsaglia, George. Choosing a Point from the Surface of a
  // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
  // http://projecteuclid.org/euclid.aoms/1177692644;

  var v1, v2, v3, v4;
  var s1, s2;

  do {
    v1 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v2 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s1 = v1 * v1 + v2 * v2;
  } while (s1 >= 1);

  do {
    v3 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    v4 = _common_js__WEBPACK_IMPORTED_MODULE_0__.RANDOM() * 2 - 1;
    s2 = v3 * v3 + v4 * v4;
  } while (s2 >= 1);

  var d = Math.sqrt((1 - s1) / s2);
  out[0] = scale * v1;
  out[1] = scale * v2;
  out[2] = scale * v3 * d;
  out[3] = scale * v4 * d;
  return out;
}
/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyMat4} m matrix to transform with
 * @returns {vec4} out
 */

function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}
/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {ReadonlyVec4} a the vector to transform
 * @param {ReadonlyQuat} q quaternion to transform with
 * @returns {vec4} out
 */

function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3]; // calculate quat * vec

  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}
/**
 * Set the components of a vec4 to zero
 *
 * @param {vec4} out the receiving vector
 * @returns {vec4} out
 */

function zero(out) {
  out[0] = 0.0;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  return out;
}
/**
 * Returns a string representation of a vector
 *
 * @param {ReadonlyVec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */

function str(a) {
  return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {ReadonlyVec4} a The first vector.
 * @param {ReadonlyVec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */

function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= _common_js__WEBPACK_IMPORTED_MODULE_0__.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
/**
 * Alias for {@link vec4.subtract}
 * @function
 */

var sub = subtract;
/**
 * Alias for {@link vec4.multiply}
 * @function
 */

var mul = multiply;
/**
 * Alias for {@link vec4.divide}
 * @function
 */

var div = divide;
/**
 * Alias for {@link vec4.distance}
 * @function
 */

var dist = distance;
/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */

var sqrDist = squaredDistance;
/**
 * Alias for {@link vec4.length}
 * @function
 */

var len = length;
/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */

var sqrLen = squaredLength;
/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */

var forEach = function () {
  var vec = create();
  return function (a, stride, offset, count, fn, arg) {
    var i, l;

    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),

/***/ "./node_modules/math.gl/dist/esm/index.js":
/*!************************************************!*\
  !*** ./node_modules/math.gl/dist/esm/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Euler": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.Euler),
/* harmony export */   "Matrix3": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.Matrix3),
/* harmony export */   "Matrix4": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.Matrix4),
/* harmony export */   "Pose": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.Pose),
/* harmony export */   "Quaternion": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.Quaternion),
/* harmony export */   "SphericalCoordinates": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.SphericalCoordinates),
/* harmony export */   "Vector2": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.Vector2),
/* harmony export */   "Vector3": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.Vector3),
/* harmony export */   "Vector4": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.Vector4),
/* harmony export */   "_Euler": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__._Euler),
/* harmony export */   "_MathUtils": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__._MathUtils),
/* harmony export */   "_Pose": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__._Pose),
/* harmony export */   "_SphericalCoordinates": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__._SphericalCoordinates),
/* harmony export */   "acos": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.acos),
/* harmony export */   "asin": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.asin),
/* harmony export */   "assert": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.assert),
/* harmony export */   "atan": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.atan),
/* harmony export */   "clamp": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.clamp),
/* harmony export */   "clone": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.clone),
/* harmony export */   "config": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.config),
/* harmony export */   "configure": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.configure),
/* harmony export */   "cos": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.cos),
/* harmony export */   "degrees": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.degrees),
/* harmony export */   "equals": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.equals),
/* harmony export */   "exactEquals": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.exactEquals),
/* harmony export */   "formatValue": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.formatValue),
/* harmony export */   "isArray": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.isArray),
/* harmony export */   "lerp": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.lerp),
/* harmony export */   "radians": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.radians),
/* harmony export */   "sin": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.sin),
/* harmony export */   "tan": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.tan),
/* harmony export */   "toDegrees": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.toDegrees),
/* harmony export */   "toRadians": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.toRadians),
/* harmony export */   "withEpsilon": () => (/* reexport safe */ _math_gl_core__WEBPACK_IMPORTED_MODULE_0__.withEpsilon)
/* harmony export */ });
/* harmony import */ var _math_gl_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @math.gl/core */ "./node_modules/@math.gl/core/dist/esm/index.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/drawing.ts":
/*!************************!*\
  !*** ./src/drawing.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl_utils */ "./src/webgl_utils.ts");
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! math.gl */ "./node_modules/math.gl/dist/esm/index.js");


class Drawing {
    constructor(program) {
        this.transform = new math_gl__WEBPACK_IMPORTED_MODULE_1__.Matrix4().identity();
        this.dirty = false;
        this.scale = new math_gl__WEBPACK_IMPORTED_MODULE_1__.Matrix4().identity();
        this.gl_Points = new Array();
        this.gl_Colors = new Array();
        this.shapeIndices = new Array();
        this.shapeIndices.push(0);
        this.shapeIndices.push(0);
        this.angle = 0.0;
        this.translation = { x: 0, y: 0 };
        this.translationScale = 0.005;
        this.attributes = { a_Position: -1, u_FragColor: null, a_PointSize: -1 };
        this.program = program;
        this.vertexBuffer = null;
    }
    click(event, gl, canvas) {
        let x = event.clientX;
        let y = event.clientY;
        let glPos = (0,_webgl_utils__WEBPACK_IMPORTED_MODULE_0__.glPosFromClient)(canvas, x, y);
        glPos = this.getInv(glPos);
        this.gl_Points.push(new Array(...[glPos.x, glPos.y, 0]));
        const norm = Math.sqrt(x * x + y * y);
        this.gl_Colors.push(new Array(...[norm, 1 - norm, norm, 1]));
        this.renderBuffer(gl);
    }
    updateTransform(gl) {
        gl.useProgram(this.program);
        if (this.dirty) {
            this.setTransformUniform(gl, this.program);
            this.dirty = false;
        }
    }
    renderBuffer(gl) {
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
    setBuffer(gl) {
        gl.bufferData(gl.ARRAY_BUFFER, (0,_webgl_utils__WEBPACK_IMPORTED_MODULE_0__.unpack)(this.gl_Points), gl.STATIC_DRAW);
    }
    transformAndRender(gl, program) {
        this.setTransformUniform(gl, program);
        this.renderBuffer(gl);
    }
    setTransformUniform(gl, program) {
        const u_Transform = gl.getUniformLocation(program, 'u_Transform');
        if (u_Transform == null) {
            console.log("Couldn't set uniforms for transformations");
            return;
        }
        const sin = Math.sin(this.angle);
        const cos = Math.cos(this.angle);
        this.transform = new math_gl__WEBPACK_IMPORTED_MODULE_1__.Matrix4([
            cos, -sin, 0, this.translation.x,
            sin, cos, 0, this.translation.y,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]).multiplyRight(this.scale);
        const copy_t = new math_gl__WEBPACK_IMPORTED_MODULE_1__.Matrix4().copy(this.transform).transpose();
        gl.uniformMatrix4fv(u_Transform, false, copy_t);
        this.dirty = false;
    }
    getInv(v) {
        const inv = (new math_gl__WEBPACK_IMPORTED_MODULE_1__.Matrix4().copy(this.transform)).invert().transpose();
        let vec4 = new math_gl__WEBPACK_IMPORTED_MODULE_1__.Vector4(v.x, v.y, 0, 1);
        vec4 = vec4.transform(inv);
        return { x: vec4[0], y: vec4[1] };
    }
    dilate(canvas, x, y, amount) {
        let inCanvas = (0,_webgl_utils__WEBPACK_IMPORTED_MODULE_0__.glPosFromClient)(canvas, x, y);
        const translation = new math_gl__WEBPACK_IMPORTED_MODULE_1__.Matrix4([
            1, 0, 0, -inCanvas.x,
            0, 1, 0, -inCanvas.y,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);
        const scale = new math_gl__WEBPACK_IMPORTED_MODULE_1__.Matrix4().identity().scale([amount, amount, amount, 1]);
        const inv = new math_gl__WEBPACK_IMPORTED_MODULE_1__.Matrix4().copy(translation).invert();
        this.scale = this.scale.multiplyRight(inv.multiplyLeft(scale.multiplyLeft(translation)));
        this.dirty = true;
    }
    initVertexBuffers(gl, program) {
        const n = this.gl_Points.length / 2;
        this.vertexBuffer = gl.createBuffer();
        if (!this.vertexBuffer) {
            console.log("failed to create buffer");
            return -1;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, (0,_webgl_utils__WEBPACK_IMPORTED_MODULE_0__.unpack)(this.gl_Points), gl.STATIC_DRAW);
        this.attributes.a_Position = gl.getAttribLocation(program, 'a_Position');
        gl.vertexAttribPointer(this.attributes.a_Position, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.attributes.a_Position);
        return n;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Drawing);


/***/ }),

/***/ "./src/handlers.ts":
/*!*************************!*\
  !*** ./src/handlers.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces */ "./src/interfaces.ts");

let leftMouseDown = 0;
let rightMouseDown = 0;
function setupHandlers(canvas, gl, drawing, texture) {
    canvas.onmousedown = event => {
        if (event.button == 0) {
            leftMouseDown++;
            drawing.click(event, gl, canvas);
        }
        else if (event.button == 2) {
            rightMouseDown++;
        }
    };
    window.oncontextmenu = event => {
        event.preventDefault();
        return false;
    };
    canvas.onmouseup = event => {
        if (event.button == 0) {
            drawing.shapeIndices.push(drawing.gl_Points.length);
            leftMouseDown--;
        }
        else if (event.button == 2) {
            rightMouseDown--;
        }
    };
    canvas.onmousemove = event => {
        const shapeIndices = drawing.shapeIndices;
        if (leftMouseDown > 0) {
            drawing.click(event, gl, canvas);
            shapeIndices[shapeIndices.length - 1] = drawing.gl_Points.length;
        }
        else if (rightMouseDown > 0) {
            const deltaX = event.movementX;
            const deltaY = event.movementY;
            drawing.translation = (0,_interfaces__WEBPACK_IMPORTED_MODULE_0__.add)(drawing.translation, { x: deltaX * drawing.translationScale, y: -deltaY * drawing.translationScale });
            drawing.transformAndRender(gl, drawing.program);
        }
    };
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
    };
    canvas.onwheel = event => {
        const dilation = event.deltaY < 0 ? 1.1 : 0.9;
        drawing.dilate(canvas, event.clientX, event.clientY, dilation);
        drawing.renderBuffer(gl);
    };
    function changeRotation(gl, program, value) {
        drawing.angle += value;
        drawing.transformAndRender(gl, program);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupHandlers);


/***/ }),

/***/ "./src/interfaces.ts":
/*!***************************!*\
  !*** ./src/interfaces.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "mult": () => (/* binding */ mult),
/* harmony export */   "subtract": () => (/* binding */ subtract)
/* harmony export */ });
function add(v1, v2) {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
}
function subtract(v1, v2) {
    return { x: v1.x - v2.x, y: v1.y - v2.y };
}
function mult(mat, v) {
    return { x: mat[0] * v.x + mat[4] * v.y + mat[12], y: mat[1] * v.x + mat[5] * v.y + mat[13] };
}



/***/ }),

/***/ "./src/texture.ts":
/*!************************!*\
  !*** ./src/texture.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _webgl_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webgl_utils */ "./src/webgl_utils.ts");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./src/interfaces.ts");


var UniformNames;
(function (UniformNames) {
    UniformNames["u_Sampler"] = "u_Sampler";
    UniformNames["u_Transform"] = "u_Transform";
})(UniformNames || (UniformNames = {}));
var AttributeNames;
(function (AttributeNames) {
    AttributeNames["a_Position"] = "a_Position";
    AttributeNames["a_TexCoord"] = "a_TexCoord";
})(AttributeNames || (AttributeNames = {}));
class Texture {
    constructor(gl, program) {
        this.textures = new Array();
        this.dirty = false;
        this.transform = new Float32Array();
        this.texIndex = 0;
        this.attributes = { a_Position: -1, a_TexCoord: -1 };
        this.uniforms = { u_Sampler: null, u_Transform: null };
        this.coords = new Float32Array([
            -1, 1, 0.0, 1.0,
            -1, -1, 0.0, 0.0,
            1, 1, 1.0, 1.0,
            1, -1, 1.0, 0.0
        ]);
        this.n = 4;
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.coords, gl.STATIC_DRAW);
        const FSIZE = this.coords.BYTES_PER_ELEMENT;
        this.attributes.a_Position = gl.getAttribLocation(program, AttributeNames.a_Position);
        this.attributes.a_TexCoord = gl.getAttribLocation(program, AttributeNames.a_TexCoord);
        this.uniforms.u_Transform = gl.getUniformLocation(program, UniformNames.u_Transform);
        this.uniforms.u_Sampler = gl.getUniformLocation(program, UniformNames.u_Sampler);
        console.log(this.attributes);
        gl.vertexAttribPointer(this.attributes.a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
        gl.enableVertexAttribArray(this.attributes.a_Position);
        gl.vertexAttribPointer(this.attributes.a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
        gl.enableVertexAttribArray(this.attributes.a_TexCoord);
        this.textures.push(...this.initTextures(gl, program));
        this.program = program;
    }
    initTextures(gl, program) {
        const texture = gl.createTexture();
        const texture2 = gl.createTexture();
        if (texture == null || texture2 == null) {
            console.log("Couldn't create webgl texture");
            return [];
        }
        console.log(this.uniforms);
        const image = new Image();
        image.onload = () => this.loadTexture(gl, texture, image, gl.TEXTURE0, 0);
        image.src = './images/map.jpg';
        const image2 = new Image();
        image2.onload = () => this.loadTexture(gl, texture2, image2, gl.TEXTURE1, 1);
        image2.src = './images/map2.jpg';
        return [texture, texture2];
    }
    swapTextures(gl, texNumber) {
        this.texIndex = texNumber;
        gl.useProgram(this.program);
        // gl.uniform1i(this.uniforms.u_Sampler, texNumber);
    }
    loadTexture(gl, texture, image, texNumberEnum, texNumber) {
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
    draw(gl, transform) {
        gl.useProgram(this.program);
        gl.uniformMatrix4fv(this.uniforms.u_Transform, false, transform);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        if (this.dirty)
            gl.bufferData(gl.ARRAY_BUFFER, this.coords, gl.STATIC_DRAW);
        gl.bindTexture(gl.TEXTURE_2D, this.textures[this.texIndex]);
        const FSIZE = this.coords.BYTES_PER_ELEMENT;
        gl.vertexAttribPointer(this.attributes.a_Position, 2, gl.FLOAT, false, FSIZE * 4, 0);
        gl.enableVertexAttribArray(this.attributes.a_Position);
        gl.vertexAttribPointer(this.attributes.a_TexCoord, 2, gl.FLOAT, false, FSIZE * 4, FSIZE * 2);
        gl.enableVertexAttribArray(this.attributes.a_TexCoord);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, this.n);
    }
    dilate(canvas, x, y, amount) {
        let inCanvas = (0,_webgl_utils__WEBPACK_IMPORTED_MODULE_0__.glPosFromClient)(canvas, x, y);
        for (let i = 0; i < this.coords.length; i++) {
            let tex = { x: this.coords[i * 4], y: this.coords[i * 4 + 1] };
            tex = (0,_interfaces__WEBPACK_IMPORTED_MODULE_1__.subtract)(tex, inCanvas);
            tex.x *= amount;
            tex.y *= amount;
            tex = (0,_interfaces__WEBPACK_IMPORTED_MODULE_1__.add)(tex, inCanvas);
            this.coords[i * 4] = tex.x;
            this.coords[i * 4 + 1] = tex.y;
        }
        this.dirty = true;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Texture);


/***/ }),

/***/ "./src/webgl_utils.ts":
/*!****************************!*\
  !*** ./src/webgl_utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "glPosFromClient": () => (/* binding */ glPosFromClient),
/* harmony export */   "unpack": () => (/* binding */ unpack)
/* harmony export */ });
function glPosFromClient(canvas, x, y) {
    const rect = canvas.getBoundingClientRect();
    x = ((x - rect.left) - canvas.width / 2) / (canvas.width / 2);
    y = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);
    return {
        x: x,
        y: y,
    };
}
function unpack(array) {
    const out = new Float32Array(array.length * 3);
    for (let i = 0; i < array.length; i++) {
        out[i * 3] = array[i][0];
        out[i * 3 + 1] = array[i][1];
        out[i * 3 + 2] = array[i][2];
    }
    return out;
}



/***/ }),

/***/ "./src/shaders/fHelloPoint.glsl":
/*!**************************************!*\
  !*** ./src/shaders/fHelloPoint.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("precision mediump float;\n\nuniform vec4 u_FragColor;\nvoid main() {\n    gl_FragColor = u_FragColor;\n}");

/***/ }),

/***/ "./src/shaders/fTextured.glsl":
/*!************************************!*\
  !*** ./src/shaders/fTextured.glsl ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#version 100\n\nprecision mediump float;\nuniform sampler2D u_Sampler;\nvarying vec2 v_TexCoord;\nvoid main() {\n    gl_FragColor = texture2D(u_Sampler, v_TexCoord);\n}");

/***/ }),

/***/ "./src/shaders/vHelloPoint.glsl":
/*!**************************************!*\
  !*** ./src/shaders/vHelloPoint.glsl ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("attribute vec4 a_Position;\nattribute float a_PointSize;\nuniform mat4 u_Transform;\nvoid main() {\n    gl_Position = u_Transform * a_Position;\n    gl_PointSize = a_PointSize;\n}");

/***/ }),

/***/ "./src/shaders/vTextured.glsl":
/*!************************************!*\
  !*** ./src/shaders/vTextured.glsl ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#version 100\n\nattribute vec4 a_Position;\nattribute vec2 a_TexCoord;\nuniform mat4 u_Transform;\nvarying vec2 v_TexCoord;\nvoid main() {\n    gl_Position = u_Transform * a_Position;\n    v_TexCoord = a_TexCoord;\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shaders_fHelloPoint_glsl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shaders/fHelloPoint.glsl */ "./src/shaders/fHelloPoint.glsl");
/* harmony import */ var _shaders_vHelloPoint_glsl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/vHelloPoint.glsl */ "./src/shaders/vHelloPoint.glsl");
/* harmony import */ var _shaders_vTextured_glsl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/vTextured.glsl */ "./src/shaders/vTextured.glsl");
/* harmony import */ var _shaders_fTextured_glsl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shaders/fTextured.glsl */ "./src/shaders/fTextured.glsl");
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawing */ "./src/drawing.ts");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handlers */ "./src/handlers.ts");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./texture */ "./src/texture.ts");
/* harmony import */ var math_gl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! math.gl */ "./node_modules/math.gl/dist/esm/index.js");








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
    if (texture == null || drawing == null) {
        console.log("failed to initialize objects");
        return;
    }
    (0,_handlers__WEBPACK_IMPORTED_MODULE_5__["default"])(canvas, gl, drawing, texture);
    const render = () => {
        gl.clear(gl.COLOR_BUFFER_BIT);
        drawing.updateTransform(gl);
        let target = new Float32Array(16);
        target = new math_gl__WEBPACK_IMPORTED_MODULE_7__.Matrix4().copy(drawing.transform).transpose().toArray(target);
        texture === null || texture === void 0 ? void 0 : texture.draw(gl, target);
        drawing === null || drawing === void 0 ? void 0 : drawing.renderBuffer(gl);
        requestAnimationFrame(render);
    };
    render();
}
function initializeTexture(canvas, gl) {
    const program = initShaders(gl, _shaders_vTextured_glsl__WEBPACK_IMPORTED_MODULE_2__["default"], _shaders_fTextured_glsl__WEBPACK_IMPORTED_MODULE_3__["default"]);
    if (program == null) {
        console.log("failed to initialize shaders");
        return null;
    }
    return new _texture__WEBPACK_IMPORTED_MODULE_6__["default"](gl, program);
}
function initializeDrawing(canvas, gl) {
    const program = initShaders(gl, _shaders_vHelloPoint_glsl__WEBPACK_IMPORTED_MODULE_1__["default"], _shaders_fHelloPoint_glsl__WEBPACK_IMPORTED_MODULE_0__["default"]);
    if (program == null) {
        console.log("failed to initialize shaders");
        return null;
    }
    const drawing = new _drawing__WEBPACK_IMPORTED_MODULE_4__["default"](program);
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
    gl.uniform4f(u_FragColor, 1, 0.1, 0.4, 1);
    drawing.attributes.a_Position = a_Position;
    drawing.attributes.u_FragColor = u_FragColor;
    drawing.attributes.a_PointSize = a_PointSize;
    gl.vertexAttrib1f(a_PointSize, 20.0);
    drawing.setTransformUniform(gl, program);
    const n = drawing.initVertexBuffers(gl, program);
    gl.drawArrays(gl.POINTS, 0, n);
    return drawing;
}
function initShaders(gl, vShader, fShader) {
    const program = createProgram(gl, vShader, fShader);
    if (!program) {
        console.log("Failed to create program");
        return null;
    }
    gl.useProgram(program);
    return program;
}
function createProgram(gl, vShader, fShader) {
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
    const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
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
function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    if (shader == null) {
        console.log("failed to create shader");
        return null;
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        const error = gl.getShaderInfoLog(shader);
        console.log("Failed to compile shader, reason: " + error);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNkJBQTZCLGtEQUFLOztBQUVsQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQVU7QUFDekI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDRDQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLCtEQUFRLEVBQUUsK0RBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFPO0FBQ3RCO0FBQ0E7QUFDQSxvQ0FBb0MsaUVBQVcsRUFBRSxpRUFBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvYmFzZS9tYXRoLWFycmF5LmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvYmFzZS9tYXRyaXguanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9iYXNlL3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL2V1bGVyLmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvbWF0cml4My5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL21hdHJpeDQuanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy9wb3NlLmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvcXVhdGVybmlvbi5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL3NwaGVyaWNhbC1jb29yZGluYXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9jbGFzc2VzL3ZlY3RvcjIuanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vY2xhc3Nlcy92ZWN0b3IzLmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2NsYXNzZXMvdmVjdG9yNC5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9ub2RlX21vZHVsZXMvQG1hdGguZ2wvY29yZS9kaXN0L2VzbS9saWIvYXNzZXJ0LmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9AbWF0aC5nbC9jb3JlL2Rpc3QvZXNtL2xpYi9jb21tb24uanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vbGliL2dsLW1hdHJpeC1leHRyYXMuanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vbGliL21hdGgtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL0BtYXRoLmdsL2NvcmUvZGlzdC9lc20vbGliL3ZhbGlkYXRvcnMuanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vY29tbW9uLmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL21hdDMuanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vbWF0NC5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS9xdWF0LmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9nbC1tYXRyaXgvZXNtL3ZlYzIuanMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vbm9kZV9tb2R1bGVzL2dsLW1hdHJpeC9lc20vdmVjMy5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9ub2RlX21vZHVsZXMvZ2wtbWF0cml4L2VzbS92ZWM0LmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9tYXRoLmdsL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL3NyYy9kcmF3aW5nLnRzIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL3NyYy9oYW5kbGVycy50cyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9zcmMvaW50ZXJmYWNlcy50cyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9zcmMvdGV4dHVyZS50cyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9zcmMvd2ViZ2xfdXRpbHMudHMiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzLy4vc3JjL3NoYWRlcnMvZkhlbGxvUG9pbnQuZ2xzbCIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9zcmMvc2hhZGVycy9mVGV4dHVyZWQuZ2xzbCIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9zcmMvc2hhZGVycy92SGVsbG9Qb2ludC5nbHNsIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL3NyYy9zaGFkZXJzL3ZUZXh0dXJlZC5nbHNsIiwid2VicGFjazovL3dlYmdsX2Jhc2ljcy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViZ2xfYmFzaWNzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJnbF9iYXNpY3MvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZGFibGVCdWlsdGluKGNscykge1xuICBmdW5jdGlvbiBFeHRlbmRhYmxlQnVpbHRpbigpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBSZWZsZWN0LmNvbnN0cnVjdChjbHMsIEFycmF5LmZyb20oYXJndW1lbnRzKSk7XG4gICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykpO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbiAgfVxuXG4gIEV4dGVuZGFibGVCdWlsdGluLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoY2xzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogY2xzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihFeHRlbmRhYmxlQnVpbHRpbiwgY2xzKTtcbiAgfSBlbHNlIHtcbiAgICBFeHRlbmRhYmxlQnVpbHRpbi5fX3Byb3RvX18gPSBjbHM7XG4gIH1cblxuICByZXR1cm4gRXh0ZW5kYWJsZUJ1aWx0aW47XG59XG5cbmltcG9ydCB7IGNvbmZpZywgZm9ybWF0VmFsdWUsIGVxdWFscywgaXNBcnJheSB9IGZyb20gJy4uLy4uL2xpYi9jb21tb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0aEFycmF5IGV4dGVuZHMgX2V4dGVuZGFibGVCdWlsdGluKEFycmF5KSB7XG4gIGNsb25lKCkge1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcigpLmNvcHkodGhpcyk7XG4gIH1cblxuICBmcm9tQXJyYXkoYXJyYXksIG9mZnNldCA9IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IGFycmF5W2kgKyBvZmZzZXRdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0b0FycmF5KHRhcmdldEFycmF5ID0gW10sIG9mZnNldCA9IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGFyZ2V0QXJyYXlbb2Zmc2V0ICsgaV0gPSB0aGlzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRBcnJheTtcbiAgfVxuXG4gIGZyb20oYXJyYXlPck9iamVjdCkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFycmF5T3JPYmplY3QpID8gdGhpcy5jb3B5KGFycmF5T3JPYmplY3QpIDogdGhpcy5mcm9tT2JqZWN0KGFycmF5T3JPYmplY3QpO1xuICB9XG5cbiAgdG8oYXJyYXlPck9iamVjdCkge1xuICAgIGlmIChhcnJheU9yT2JqZWN0ID09PSB0aGlzKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gaXNBcnJheShhcnJheU9yT2JqZWN0KSA/IHRoaXMudG9BcnJheShhcnJheU9yT2JqZWN0KSA6IHRoaXMudG9PYmplY3QoYXJyYXlPck9iamVjdCk7XG4gIH1cblxuICB0b1RhcmdldCh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0ID8gdGhpcy50byh0YXJnZXQpIDogdGhpcztcbiAgfVxuXG4gIHRvRmxvYXQzMkFycmF5KCkge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0U3RyaW5nKGNvbmZpZyk7XG4gIH1cblxuICBmb3JtYXRTdHJpbmcob3B0cykge1xuICAgIGxldCBzdHJpbmcgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBzdHJpbmcgKz0gKGkgPiAwID8gJywgJyA6ICcnKSArIGZvcm1hdFZhbHVlKHRoaXNbaV0sIG9wdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiLmNvbmNhdChvcHRzLnByaW50VHlwZXMgPyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgOiAnJywgXCJbXCIpLmNvbmNhdChzdHJpbmcsIFwiXVwiKTtcbiAgfVxuXG4gIGVxdWFscyhhcnJheSkge1xuICAgIGlmICghYXJyYXkgfHwgdGhpcy5sZW5ndGggIT09IGFycmF5Lmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBpZiAoIWVxdWFscyh0aGlzW2ldLCBhcnJheVtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZXhhY3RFcXVhbHMoYXJyYXkpIHtcbiAgICBpZiAoIWFycmF5IHx8IHRoaXMubGVuZ3RoICE9PSBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgaWYgKHRoaXNbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG5lZ2F0ZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IC10aGlzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBsZXJwKGEsIGIsIHQpIHtcbiAgICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZXJwKHRoaXMsIGEsIGIpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBjb25zdCBhaSA9IGFbaV07XG4gICAgICB0aGlzW2ldID0gYWkgKyB0ICogKGJbaV0gLSBhaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG1pbih2ZWN0b3IpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IE1hdGgubWluKHZlY3RvcltpXSwgdGhpc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG1heCh2ZWN0b3IpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IE1hdGgubWF4KHZlY3RvcltpXSwgdGhpc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNsYW1wKG1pblZlY3RvciwgbWF4VmVjdG9yKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzW2ldLCBtaW5WZWN0b3JbaV0pLCBtYXhWZWN0b3JbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBhZGQoLi4udmVjdG9ycykge1xuICAgIGZvciAoY29uc3QgdmVjdG9yIG9mIHZlY3RvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gKz0gdmVjdG9yW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzdWJ0cmFjdCguLi52ZWN0b3JzKSB7XG4gICAgZm9yIChjb25zdCB2ZWN0b3Igb2YgdmVjdG9ycykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgICAgdGhpc1tpXSAtPSB2ZWN0b3JbaV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNjYWxlKHNjYWxlKSB7XG4gICAgaWYgKHR5cGVvZiBzY2FsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gKj0gc2NhbGU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUyAmJiBpIDwgc2NhbGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdGhpc1tpXSAqPSBzY2FsZVtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdGhpc1tpXSAqPSBzY2FsYXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIGlmIChjb25maWcuZGVidWcgJiYgIXRoaXMudmFsaWRhdGUoKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWF0aC5nbDogXCIuY29uY2F0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgXCIgc29tZSBmaWVsZHMgc2V0IHRvIGludmFsaWQgbnVtYmVycydcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdmFsaWRhdGUoKSB7XG4gICAgbGV0IHZhbGlkID0gdGhpcy5sZW5ndGggPT09IHRoaXMuRUxFTUVOVFM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgdmFsaWQgPSB2YWxpZCAmJiBOdW1iZXIuaXNGaW5pdGUodGhpc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkO1xuICB9XG5cbiAgc3ViKGEpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJ0cmFjdChhKTtcbiAgfVxuXG4gIHNldFNjYWxhcihhKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSBhO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBhZGRTY2FsYXIoYSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldICs9IGE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHN1YlNjYWxhcihhKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkU2NhbGFyKC1hKTtcbiAgfVxuXG4gIG11bHRpcGx5U2NhbGFyKHNjYWxhcikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICB0aGlzW2ldICo9IHNjYWxhcjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZGl2aWRlU2NhbGFyKGEpIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBseUJ5U2NhbGFyKDEgLyBhKTtcbiAgfVxuXG4gIGNsYW1wU2NhbGFyKG1pbiwgbWF4KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIHRoaXNbaV0gPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzW2ldLCBtaW4pLCBtYXgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBnZXQgZWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0aC1hcnJheS5qcy5tYXAiLCJpbXBvcnQgTWF0aEFycmF5IGZyb20gJy4vbWF0aC1hcnJheSc7XG5pbXBvcnQgeyBjaGVja051bWJlciB9IGZyb20gJy4uLy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2xpYi9jb21tb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IGV4dGVuZHMgTWF0aEFycmF5IHtcbiAgdG9TdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9ICdbJztcblxuICAgIGlmIChjb25maWcucHJpbnRSb3dNYWpvcikge1xuICAgICAgc3RyaW5nICs9ICdyb3ctbWFqb3I6JztcblxuICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5SQU5LOyArK3Jvdykge1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCB0aGlzLlJBTks7ICsrY29sKSB7XG4gICAgICAgICAgc3RyaW5nICs9IFwiIFwiLmNvbmNhdCh0aGlzW2NvbCAqIHRoaXMuUkFOSyArIHJvd10pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmluZyArPSAnY29sdW1uLW1ham9yOic7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICAgIHN0cmluZyArPSBcIiBcIi5jb25jYXQodGhpc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RyaW5nICs9ICddJztcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgZ2V0RWxlbWVudEluZGV4KHJvdywgY29sKSB7XG4gICAgcmV0dXJuIGNvbCAqIHRoaXMuUkFOSyArIHJvdztcbiAgfVxuXG4gIGdldEVsZW1lbnQocm93LCBjb2wpIHtcbiAgICByZXR1cm4gdGhpc1tjb2wgKiB0aGlzLlJBTksgKyByb3ddO1xuICB9XG5cbiAgc2V0RWxlbWVudChyb3csIGNvbCwgdmFsdWUpIHtcbiAgICB0aGlzW2NvbCAqIHRoaXMuUkFOSyArIHJvd10gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBnZXRDb2x1bW4oY29sdW1uSW5kZXgsIHJlc3VsdCA9IG5ldyBBcnJheSh0aGlzLlJBTkspLmZpbGwoLTApKSB7XG4gICAgY29uc3QgZmlyc3RJbmRleCA9IGNvbHVtbkluZGV4ICogdGhpcy5SQU5LO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlJBTks7ICsraSkge1xuICAgICAgcmVzdWx0W2ldID0gdGhpc1tmaXJzdEluZGV4ICsgaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNldENvbHVtbihjb2x1bW5JbmRleCwgY29sdW1uVmVjdG9yKSB7XG4gICAgY29uc3QgZmlyc3RJbmRleCA9IGNvbHVtbkluZGV4ICogdGhpcy5SQU5LO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlJBTks7ICsraSkge1xuICAgICAgdGhpc1tmaXJzdEluZGV4ICsgaV0gPSBjb2x1bW5WZWN0b3JbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0cml4LmpzLm1hcCIsImltcG9ydCBNYXRoQXJyYXkgZnJvbSAnLi9tYXRoLWFycmF5JztcbmltcG9ydCB7IGNoZWNrTnVtYmVyIH0gZnJvbSAnLi4vLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IGFzc2VydCBmcm9tICcuLi8uLi9saWIvYXNzZXJ0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciBleHRlbmRzIE1hdGhBcnJheSB7XG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXNbMV07XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXNbMV0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBsZW4oKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxdWFyZWQoKSk7XG4gIH1cblxuICBtYWduaXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVuKCk7XG4gIH1cblxuICBsZW5ndGhTcXVhcmVkKCkge1xuICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIGxlbmd0aCArPSB0aGlzW2ldICogdGhpc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgbWFnbml0dWRlU3F1YXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGhTcXVhcmVkKCk7XG4gIH1cblxuICBkaXN0YW5jZShtYXRoQXJyYXkpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuZGlzdGFuY2VTcXVhcmVkKG1hdGhBcnJheSkpO1xuICB9XG5cbiAgZGlzdGFuY2VTcXVhcmVkKG1hdGhBcnJheSkge1xuICAgIGxldCBsZW5ndGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkVMRU1FTlRTOyArK2kpIHtcbiAgICAgIGNvbnN0IGRpc3QgPSB0aGlzW2ldIC0gbWF0aEFycmF5W2ldO1xuICAgICAgbGVuZ3RoICs9IGRpc3QgKiBkaXN0O1xuICAgIH1cblxuICAgIHJldHVybiBjaGVja051bWJlcihsZW5ndGgpO1xuICB9XG5cbiAgZG90KG1hdGhBcnJheSkge1xuICAgIGxldCBwcm9kdWN0ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICBwcm9kdWN0ICs9IHRoaXNbaV0gKiBtYXRoQXJyYXlbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoZWNrTnVtYmVyKHByb2R1Y3QpO1xuICB9XG5cbiAgbm9ybWFsaXplKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMubWFnbml0dWRlKCk7XG5cbiAgICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRUxFTUVOVFM7ICsraSkge1xuICAgICAgICB0aGlzW2ldIC89IGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHkoLi4udmVjdG9ycykge1xuICAgIGZvciAoY29uc3QgdmVjdG9yIG9mIHZlY3RvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gKj0gdmVjdG9yW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBkaXZpZGUoLi4udmVjdG9ycykge1xuICAgIGZvciAoY29uc3QgdmVjdG9yIG9mIHZlY3RvcnMpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTEVNRU5UUzsgKytpKSB7XG4gICAgICAgIHRoaXNbaV0gLz0gdmVjdG9yW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBsZW5ndGhTcSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZW5ndGhTcXVhcmVkKCk7XG4gIH1cblxuICBkaXN0YW5jZVRvKHZlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmRpc3RhbmNlKHZlY3Rvcik7XG4gIH1cblxuICBkaXN0YW5jZVRvU3F1YXJlZCh2ZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZVNxdWFyZWQodmVjdG9yKTtcbiAgfVxuXG4gIGdldENvbXBvbmVudChpKSB7XG4gICAgYXNzZXJ0KGkgPj0gMCAmJiBpIDwgdGhpcy5FTEVNRU5UUywgJ2luZGV4IGlzIG91dCBvZiByYW5nZScpO1xuICAgIHJldHVybiBjaGVja051bWJlcih0aGlzW2ldKTtcbiAgfVxuXG4gIHNldENvbXBvbmVudChpLCB2YWx1ZSkge1xuICAgIGFzc2VydChpID49IDAgJiYgaSA8IHRoaXMuRUxFTUVOVFMsICdpbmRleCBpcyBvdXQgb2YgcmFuZ2UnKTtcbiAgICB0aGlzW2ldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGFkZFZlY3RvcnMoYSwgYikge1xuICAgIHJldHVybiB0aGlzLmNvcHkoYSkuYWRkKGIpO1xuICB9XG5cbiAgc3ViVmVjdG9ycyhhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuY29weShhKS5zdWJ0cmFjdChiKTtcbiAgfVxuXG4gIG11bHRpcGx5VmVjdG9ycyhhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuY29weShhKS5tdWx0aXBseShiKTtcbiAgfVxuXG4gIGFkZFNjYWxlZFZlY3RvcihhLCBiKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRkKG5ldyB0aGlzLmNvbnN0cnVjdG9yKGEpLm11bHRpcGx5U2NhbGFyKGIpKTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IuanMubWFwIiwiaW1wb3J0IE1hdGhBcnJheSBmcm9tICcuL2Jhc2UvbWF0aC1hcnJheSc7XG5pbXBvcnQgUXVhdGVybmlvbiBmcm9tICcuL3F1YXRlcm5pb24nO1xuaW1wb3J0IHsgY2xhbXAgfSBmcm9tICcuLi9saWIvY29tbW9uJztcbmltcG9ydCB7IGNoZWNrTnVtYmVyIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuY29uc3QgRVJSX1VOS05PV05fT1JERVIgPSAnVW5rbm93biBFdWxlciBhbmdsZSBvcmRlcic7XG5jb25zdCBBTE1PU1RfT05FID0gMC45OTk5OTtcbnZhciBSb3RhdGlvbk9yZGVyO1xuXG4oZnVuY3Rpb24gKFJvdGF0aW9uT3JkZXIpIHtcbiAgUm90YXRpb25PcmRlcltSb3RhdGlvbk9yZGVyW1wiWllYXCJdID0gMF0gPSBcIlpZWFwiO1xuICBSb3RhdGlvbk9yZGVyW1JvdGF0aW9uT3JkZXJbXCJZWFpcIl0gPSAxXSA9IFwiWVhaXCI7XG4gIFJvdGF0aW9uT3JkZXJbUm90YXRpb25PcmRlcltcIlhaWVwiXSA9IDJdID0gXCJYWllcIjtcbiAgUm90YXRpb25PcmRlcltSb3RhdGlvbk9yZGVyW1wiWlhZXCJdID0gM10gPSBcIlpYWVwiO1xuICBSb3RhdGlvbk9yZGVyW1JvdGF0aW9uT3JkZXJbXCJZWlhcIl0gPSA0XSA9IFwiWVpYXCI7XG4gIFJvdGF0aW9uT3JkZXJbUm90YXRpb25PcmRlcltcIlhZWlwiXSA9IDVdID0gXCJYWVpcIjtcbn0pKFJvdGF0aW9uT3JkZXIgfHwgKFJvdGF0aW9uT3JkZXIgPSB7fSkpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdWxlciBleHRlbmRzIE1hdGhBcnJheSB7XG4gIHN0YXRpYyBnZXQgWllYKCkge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyLlpZWDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWVhaKCkge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyLllYWjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWFpZKCkge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyLlhaWTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWlhZKCkge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyLlpYWTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWVpYKCkge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyLllaWDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWFlaKCkge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyLlhZWjtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgUm9sbFBpdGNoWWF3KCkge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyLlpZWDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdE9yZGVyKCkge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyLlpZWDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgUm90YXRpb25PcmRlcnMoKSB7XG4gICAgcmV0dXJuIFJvdGF0aW9uT3JkZXI7XG4gIH1cblxuICBzdGF0aWMgcm90YXRpb25PcmRlcihvcmRlcikge1xuICAgIHJldHVybiBSb3RhdGlvbk9yZGVyW29yZGVyXTtcbiAgfVxuXG4gIGdldCBFTEVNRU5UUygpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIG9yZGVyID0gRXVsZXIuRGVmYXVsdE9yZGVyKSB7XG4gICAgc3VwZXIoLTAsIC0wLCAtMCwgLTApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzBdKSkge1xuICAgICAgdGhpcy5mcm9tVmVjdG9yMyguLi5hcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldCh4LCB5LCB6LCBvcmRlcik7XG4gICAgfVxuICB9XG5cbiAgZnJvbVF1YXRlcm5pb24ocXVhdGVybmlvbikge1xuICAgIGNvbnN0IFt4LCB5LCB6LCB3XSA9IHF1YXRlcm5pb247XG4gICAgY29uc3QgeXNxciA9IHkgKiB5O1xuICAgIGNvbnN0IHQwID0gLTIgKiAoeXNxciArIHogKiB6KSArIDE7XG4gICAgY29uc3QgdDEgPSArMiAqICh4ICogeSArIHcgKiB6KTtcbiAgICBsZXQgdDIgPSAtMiAqICh4ICogeiAtIHcgKiB5KTtcbiAgICBjb25zdCB0MyA9ICsyICogKHkgKiB6ICsgdyAqIHgpO1xuICAgIGNvbnN0IHQ0ID0gLTIgKiAoeCAqIHggKyB5c3FyKSArIDE7XG4gICAgdDIgPSB0MiA+IDEgPyAxIDogdDI7XG4gICAgdDIgPSB0MiA8IC0xID8gLTEgOiB0MjtcbiAgICBjb25zdCByb2xsID0gTWF0aC5hdGFuMih0MywgdDQpO1xuICAgIGNvbnN0IHBpdGNoID0gTWF0aC5hc2luKHQyKTtcbiAgICBjb25zdCB5YXcgPSBNYXRoLmF0YW4yKHQxLCB0MCk7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHJvbGwsIHBpdGNoLCB5YXcsIEV1bGVyLlJvbGxQaXRjaFlhdyk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgdGhpc1szXSA9IE51bWJlci5pc0Zpbml0ZShhcnJheVszXSkgfHwgdGhpcy5vcmRlcjtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0KHggPSAwLCB5ID0gMCwgeiA9IDAsIG9yZGVyKSB7XG4gICAgdGhpc1swXSA9IHg7XG4gICAgdGhpc1sxXSA9IHk7XG4gICAgdGhpc1syXSA9IHo7XG4gICAgdGhpc1szXSA9IE51bWJlci5pc0Zpbml0ZShvcmRlcikgPyBvcmRlciA6IHRoaXNbM107XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIHJldHVybiB2YWxpZGF0ZU9yZGVyKHRoaXNbM10pICYmIE51bWJlci5pc0Zpbml0ZSh0aGlzWzBdKSAmJiBOdW1iZXIuaXNGaW5pdGUodGhpc1sxXSkgJiYgTnVtYmVyLmlzRmluaXRlKHRoaXNbMl0pO1xuICB9XG5cbiAgdG9BcnJheShhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG4gICAgYXJyYXlbb2Zmc2V0XSA9IHRoaXNbMF07XG4gICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzWzFdO1xuICAgIGFycmF5W29mZnNldCArIDJdID0gdGhpc1syXTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cblxuICB0b0FycmF5NChhcnJheSA9IFtdLCBvZmZzZXQgPSAwKSB7XG4gICAgYXJyYXlbb2Zmc2V0XSA9IHRoaXNbMF07XG4gICAgYXJyYXlbb2Zmc2V0ICsgMV0gPSB0aGlzWzFdO1xuICAgIGFycmF5W29mZnNldCArIDJdID0gdGhpc1syXTtcbiAgICBhcnJheVtvZmZzZXQgKyAzXSA9IHRoaXNbM107XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgdG9WZWN0b3IzKHJlc3VsdCA9IFstMCwgLTAsIC0wXSkge1xuICAgIHJlc3VsdFswXSA9IHRoaXNbMF07XG4gICAgcmVzdWx0WzFdID0gdGhpc1sxXTtcbiAgICByZXN1bHRbMl0gPSB0aGlzWzJdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIHNldCB4KHZhbHVlKSB7XG4gICAgdGhpc1swXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IHkodmFsdWUpIHtcbiAgICB0aGlzWzFdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHooKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgeih2YWx1ZSkge1xuICAgIHRoaXNbMl0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgYWxwaGEoKSB7XG4gICAgcmV0dXJuIHRoaXNbMF07XG4gIH1cblxuICBzZXQgYWxwaGEodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IGJldGEoKSB7XG4gICAgcmV0dXJuIHRoaXNbMV07XG4gIH1cblxuICBzZXQgYmV0YSh2YWx1ZSkge1xuICAgIHRoaXNbMV0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgZ2FtbWEoKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgZ2FtbWEodmFsdWUpIHtcbiAgICB0aGlzWzJdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHBoaSgpIHtcbiAgICByZXR1cm4gdGhpc1swXTtcbiAgfVxuXG4gIHNldCBwaGkodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHRoZXRhKCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IHRoZXRhKHZhbHVlKSB7XG4gICAgdGhpc1sxXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBwc2koKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgcHNpKHZhbHVlKSB7XG4gICAgdGhpc1syXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCByb2xsKCkge1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9XG5cbiAgc2V0IHJvbGwodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHBpdGNoKCkge1xuICAgIHJldHVybiB0aGlzWzFdO1xuICB9XG5cbiAgc2V0IHBpdGNoKHZhbHVlKSB7XG4gICAgdGhpc1sxXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB5YXcoKSB7XG4gICAgcmV0dXJuIHRoaXNbMl07XG4gIH1cblxuICBzZXQgeWF3KHZhbHVlKSB7XG4gICAgdGhpc1syXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBvcmRlcigpIHtcbiAgICByZXR1cm4gdGhpc1szXTtcbiAgfVxuXG4gIHNldCBvcmRlcih2YWx1ZSkge1xuICAgIHRoaXNbM10gPSBjaGVja09yZGVyKHZhbHVlKTtcbiAgfVxuXG4gIGZyb21WZWN0b3IzKHYsIG9yZGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0KHZbMF0sIHZbMV0sIHZbMl0sIE51bWJlci5pc0Zpbml0ZShvcmRlcikgPyBvcmRlciA6IHRoaXNbM10pO1xuICB9XG5cbiAgZnJvbUFycmF5KGFycmF5LCBvZmZzZXQgPSAwKSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzAgKyBvZmZzZXRdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxICsgb2Zmc2V0XTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMiArIG9mZnNldF07XG5cbiAgICBpZiAoYXJyYXlbM10gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpc1szXSA9IGFycmF5WzNdO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tUm9sbFBpdGNoWWF3KHJvbGwsIHBpdGNoLCB5YXcpIHtcbiAgICByZXR1cm4gdGhpcy5zZXQocm9sbCwgcGl0Y2gsIHlhdywgUm90YXRpb25PcmRlci5aWVgpO1xuICB9XG5cbiAgZnJvbVJvdGF0aW9uTWF0cml4KG0sIG9yZGVyID0gRXVsZXIuRGVmYXVsdE9yZGVyKSB7XG4gICAgdGhpcy5fZnJvbVJvdGF0aW9uTWF0cml4KG0sIG9yZGVyKTtcblxuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBnZXRSb3RhdGlvbk1hdHJpeChtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFJvdGF0aW9uTWF0cml4KG0pO1xuICB9XG5cbiAgZ2V0UXVhdGVybmlvbigpIHtcbiAgICBjb25zdCBxID0gbmV3IFF1YXRlcm5pb24oKTtcblxuICAgIHN3aXRjaCAodGhpc1s0XSkge1xuICAgICAgY2FzZSBSb3RhdGlvbk9yZGVyLlhZWjpcbiAgICAgICAgcmV0dXJuIHEucm90YXRlWCh0aGlzWzBdKS5yb3RhdGVZKHRoaXNbMV0pLnJvdGF0ZVoodGhpc1syXSk7XG5cbiAgICAgIGNhc2UgUm90YXRpb25PcmRlci5ZWFo6XG4gICAgICAgIHJldHVybiBxLnJvdGF0ZVkodGhpc1swXSkucm90YXRlWCh0aGlzWzFdKS5yb3RhdGVaKHRoaXNbMl0pO1xuXG4gICAgICBjYXNlIFJvdGF0aW9uT3JkZXIuWlhZOlxuICAgICAgICByZXR1cm4gcS5yb3RhdGVaKHRoaXNbMF0pLnJvdGF0ZVgodGhpc1sxXSkucm90YXRlWSh0aGlzWzJdKTtcblxuICAgICAgY2FzZSBSb3RhdGlvbk9yZGVyLlpZWDpcbiAgICAgICAgcmV0dXJuIHEucm90YXRlWih0aGlzWzBdKS5yb3RhdGVZKHRoaXNbMV0pLnJvdGF0ZVgodGhpc1syXSk7XG5cbiAgICAgIGNhc2UgUm90YXRpb25PcmRlci5ZWlg6XG4gICAgICAgIHJldHVybiBxLnJvdGF0ZVkodGhpc1swXSkucm90YXRlWih0aGlzWzFdKS5yb3RhdGVYKHRoaXNbMl0pO1xuXG4gICAgICBjYXNlIFJvdGF0aW9uT3JkZXIuWFpZOlxuICAgICAgICByZXR1cm4gcS5yb3RhdGVYKHRoaXNbMF0pLnJvdGF0ZVoodGhpc1sxXSkucm90YXRlWSh0aGlzWzJdKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUl9VTktOT1dOX09SREVSKTtcbiAgICB9XG4gIH1cblxuICBfZnJvbVJvdGF0aW9uTWF0cml4KG0sIG9yZGVyID0gRXVsZXIuRGVmYXVsdE9yZGVyKSB7XG4gICAgY29uc3QgbTExID0gbVswXSxcbiAgICAgICAgICBtMTIgPSBtWzRdLFxuICAgICAgICAgIG0xMyA9IG1bOF07XG4gICAgY29uc3QgbTIxID0gbVsxXSxcbiAgICAgICAgICBtMjIgPSBtWzVdLFxuICAgICAgICAgIG0yMyA9IG1bOV07XG4gICAgY29uc3QgbTMxID0gbVsyXSxcbiAgICAgICAgICBtMzIgPSBtWzZdLFxuICAgICAgICAgIG0zMyA9IG1bMTBdO1xuICAgIG9yZGVyID0gb3JkZXIgfHwgdGhpc1szXTtcblxuICAgIHN3aXRjaCAob3JkZXIpIHtcbiAgICAgIGNhc2UgRXVsZXIuWFlaOlxuICAgICAgICB0aGlzWzFdID0gTWF0aC5hc2luKGNsYW1wKG0xMywgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTEzKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMigtbTIzLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKC1tMTIsIG0xMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1swXSA9IE1hdGguYXRhbjIobTMyLCBtMjIpO1xuICAgICAgICAgIHRoaXNbMl0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWVhaOlxuICAgICAgICB0aGlzWzBdID0gTWF0aC5hc2luKC1jbGFtcChtMjMsIC0xLCAxKSk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKG0yMykgPCBBTE1PU1RfT05FKSB7XG4gICAgICAgICAgdGhpc1sxXSA9IE1hdGguYXRhbjIobTEzLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKG0yMSwgbTIyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzFdID0gTWF0aC5hdGFuMigtbTMxLCBtMTEpO1xuICAgICAgICAgIHRoaXNbMl0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWlhZOlxuICAgICAgICB0aGlzWzBdID0gTWF0aC5hc2luKGNsYW1wKG0zMiwgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTMyKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzFdID0gTWF0aC5hdGFuMigtbTMxLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKC1tMTIsIG0yMik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1sxXSA9IDA7XG4gICAgICAgICAgdGhpc1syXSA9IE1hdGguYXRhbjIobTIxLCBtMTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWllYOlxuICAgICAgICB0aGlzWzFdID0gTWF0aC5hc2luKC1jbGFtcChtMzEsIC0xLCAxKSk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKG0zMSkgPCBBTE1PU1RfT05FKSB7XG4gICAgICAgICAgdGhpc1swXSA9IE1hdGguYXRhbjIobTMyLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMl0gPSBNYXRoLmF0YW4yKG0yMSwgbTExKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzBdID0gMDtcbiAgICAgICAgICB0aGlzWzJdID0gTWF0aC5hdGFuMigtbTEyLCBtMjIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWVpYOlxuICAgICAgICB0aGlzWzJdID0gTWF0aC5hc2luKGNsYW1wKG0yMSwgLTEsIDEpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnMobTIxKSA8IEFMTU9TVF9PTkUpIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMigtbTIzLCBtMjIpO1xuICAgICAgICAgIHRoaXNbMV0gPSBNYXRoLmF0YW4yKC1tMzEsIG0xMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpc1swXSA9IDA7XG4gICAgICAgICAgdGhpc1sxXSA9IE1hdGguYXRhbjIobTEzLCBtMzMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgRXVsZXIuWFpZOlxuICAgICAgICB0aGlzWzJdID0gTWF0aC5hc2luKC1jbGFtcChtMTIsIC0xLCAxKSk7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKG0xMikgPCBBTE1PU1RfT05FKSB7XG4gICAgICAgICAgdGhpc1swXSA9IE1hdGguYXRhbjIobTMyLCBtMjIpO1xuICAgICAgICAgIHRoaXNbMV0gPSBNYXRoLmF0YW4yKG0xMywgbTExKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzWzBdID0gTWF0aC5hdGFuMigtbTIzLCBtMzMpO1xuICAgICAgICAgIHRoaXNbMV0gPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJfVU5LTk9XTl9PUkRFUik7XG4gICAgfVxuXG4gICAgdGhpc1szXSA9IG9yZGVyO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgX2dldFJvdGF0aW9uTWF0cml4KHJlc3VsdCkge1xuICAgIGNvbnN0IHRlID0gcmVzdWx0IHx8IFstMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMF07XG4gICAgY29uc3QgeCA9IHRoaXMueCxcbiAgICAgICAgICB5ID0gdGhpcy55LFxuICAgICAgICAgIHogPSB0aGlzLno7XG4gICAgY29uc3QgYSA9IE1hdGguY29zKHgpO1xuICAgIGNvbnN0IGMgPSBNYXRoLmNvcyh5KTtcbiAgICBjb25zdCBlID0gTWF0aC5jb3Moeik7XG4gICAgY29uc3QgYiA9IE1hdGguc2luKHgpO1xuICAgIGNvbnN0IGQgPSBNYXRoLnNpbih5KTtcbiAgICBjb25zdCBmID0gTWF0aC5zaW4oeik7XG5cbiAgICBzd2l0Y2ggKHRoaXNbM10pIHtcbiAgICAgIGNhc2UgRXVsZXIuWFlaOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgYWUgPSBhICogZSxcbiAgICAgICAgICAgICAgICBhZiA9IGEgKiBmLFxuICAgICAgICAgICAgICAgIGJlID0gYiAqIGUsXG4gICAgICAgICAgICAgICAgYmYgPSBiICogZjtcbiAgICAgICAgICB0ZVswXSA9IGMgKiBlO1xuICAgICAgICAgIHRlWzRdID0gLWMgKiBmO1xuICAgICAgICAgIHRlWzhdID0gZDtcbiAgICAgICAgICB0ZVsxXSA9IGFmICsgYmUgKiBkO1xuICAgICAgICAgIHRlWzVdID0gYWUgLSBiZiAqIGQ7XG4gICAgICAgICAgdGVbOV0gPSAtYiAqIGM7XG4gICAgICAgICAgdGVbMl0gPSBiZiAtIGFlICogZDtcbiAgICAgICAgICB0ZVs2XSA9IGJlICsgYWYgKiBkO1xuICAgICAgICAgIHRlWzEwXSA9IGEgKiBjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgRXVsZXIuWVhaOlxuICAgICAgICB7XG4gICAgICAgICAgY29uc3QgY2UgPSBjICogZSxcbiAgICAgICAgICAgICAgICBjZiA9IGMgKiBmLFxuICAgICAgICAgICAgICAgIGRlID0gZCAqIGUsXG4gICAgICAgICAgICAgICAgZGYgPSBkICogZjtcbiAgICAgICAgICB0ZVswXSA9IGNlICsgZGYgKiBiO1xuICAgICAgICAgIHRlWzRdID0gZGUgKiBiIC0gY2Y7XG4gICAgICAgICAgdGVbOF0gPSBhICogZDtcbiAgICAgICAgICB0ZVsxXSA9IGEgKiBmO1xuICAgICAgICAgIHRlWzVdID0gYSAqIGU7XG4gICAgICAgICAgdGVbOV0gPSAtYjtcbiAgICAgICAgICB0ZVsyXSA9IGNmICogYiAtIGRlO1xuICAgICAgICAgIHRlWzZdID0gZGYgKyBjZSAqIGI7XG4gICAgICAgICAgdGVbMTBdID0gYSAqIGM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBFdWxlci5aWFk6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBjZSA9IGMgKiBlLFxuICAgICAgICAgICAgICAgIGNmID0gYyAqIGYsXG4gICAgICAgICAgICAgICAgZGUgPSBkICogZSxcbiAgICAgICAgICAgICAgICBkZiA9IGQgKiBmO1xuICAgICAgICAgIHRlWzBdID0gY2UgLSBkZiAqIGI7XG4gICAgICAgICAgdGVbNF0gPSAtYSAqIGY7XG4gICAgICAgICAgdGVbOF0gPSBkZSArIGNmICogYjtcbiAgICAgICAgICB0ZVsxXSA9IGNmICsgZGUgKiBiO1xuICAgICAgICAgIHRlWzVdID0gYSAqIGU7XG4gICAgICAgICAgdGVbOV0gPSBkZiAtIGNlICogYjtcbiAgICAgICAgICB0ZVsyXSA9IC1hICogZDtcbiAgICAgICAgICB0ZVs2XSA9IGI7XG4gICAgICAgICAgdGVbMTBdID0gYSAqIGM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSBFdWxlci5aWVg6XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBhZSA9IGEgKiBlLFxuICAgICAgICAgICAgICAgIGFmID0gYSAqIGYsXG4gICAgICAgICAgICAgICAgYmUgPSBiICogZSxcbiAgICAgICAgICAgICAgICBiZiA9IGIgKiBmO1xuICAgICAgICAgIHRlWzBdID0gYyAqIGU7XG4gICAgICAgICAgdGVbNF0gPSBiZSAqIGQgLSBhZjtcbiAgICAgICAgICB0ZVs4XSA9IGFlICogZCArIGJmO1xuICAgICAgICAgIHRlWzFdID0gYyAqIGY7XG4gICAgICAgICAgdGVbNV0gPSBiZiAqIGQgKyBhZTtcbiAgICAgICAgICB0ZVs5XSA9IGFmICogZCAtIGJlO1xuICAgICAgICAgIHRlWzJdID0gLWQ7XG4gICAgICAgICAgdGVbNl0gPSBiICogYztcbiAgICAgICAgICB0ZVsxMF0gPSBhICogYztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIEV1bGVyLllaWDpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGFjID0gYSAqIGMsXG4gICAgICAgICAgICAgICAgYWQgPSBhICogZCxcbiAgICAgICAgICAgICAgICBiYyA9IGIgKiBjLFxuICAgICAgICAgICAgICAgIGJkID0gYiAqIGQ7XG4gICAgICAgICAgdGVbMF0gPSBjICogZTtcbiAgICAgICAgICB0ZVs0XSA9IGJkIC0gYWMgKiBmO1xuICAgICAgICAgIHRlWzhdID0gYmMgKiBmICsgYWQ7XG4gICAgICAgICAgdGVbMV0gPSBmO1xuICAgICAgICAgIHRlWzVdID0gYSAqIGU7XG4gICAgICAgICAgdGVbOV0gPSAtYiAqIGU7XG4gICAgICAgICAgdGVbMl0gPSAtZCAqIGU7XG4gICAgICAgICAgdGVbNl0gPSBhZCAqIGYgKyBiYztcbiAgICAgICAgICB0ZVsxMF0gPSBhYyAtIGJkICogZjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICBjYXNlIEV1bGVyLlhaWTpcbiAgICAgICAge1xuICAgICAgICAgIGNvbnN0IGFjID0gYSAqIGMsXG4gICAgICAgICAgICAgICAgYWQgPSBhICogZCxcbiAgICAgICAgICAgICAgICBiYyA9IGIgKiBjLFxuICAgICAgICAgICAgICAgIGJkID0gYiAqIGQ7XG4gICAgICAgICAgdGVbMF0gPSBjICogZTtcbiAgICAgICAgICB0ZVs0XSA9IC1mO1xuICAgICAgICAgIHRlWzhdID0gZCAqIGU7XG4gICAgICAgICAgdGVbMV0gPSBhYyAqIGYgKyBiZDtcbiAgICAgICAgICB0ZVs1XSA9IGEgKiBlO1xuICAgICAgICAgIHRlWzldID0gYWQgKiBmIC0gYmM7XG4gICAgICAgICAgdGVbMl0gPSBiYyAqIGYgLSBhZDtcbiAgICAgICAgICB0ZVs2XSA9IGIgKiBlO1xuICAgICAgICAgIHRlWzEwXSA9IGJkICogZiArIGFjO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJfVU5LTk9XTl9PUkRFUik7XG4gICAgfVxuXG4gICAgdGVbM10gPSAwO1xuICAgIHRlWzddID0gMDtcbiAgICB0ZVsxMV0gPSAwO1xuICAgIHRlWzEyXSA9IDA7XG4gICAgdGVbMTNdID0gMDtcbiAgICB0ZVsxNF0gPSAwO1xuICAgIHRlWzE1XSA9IDE7XG4gICAgcmV0dXJuIHRlO1xuICB9XG5cbiAgdG9RdWF0ZXJuaW9uKCkge1xuICAgIGNvbnN0IGN5ID0gTWF0aC5jb3ModGhpcy55YXcgKiAwLjUpO1xuICAgIGNvbnN0IHN5ID0gTWF0aC5zaW4odGhpcy55YXcgKiAwLjUpO1xuICAgIGNvbnN0IGNyID0gTWF0aC5jb3ModGhpcy5yb2xsICogMC41KTtcbiAgICBjb25zdCBzciA9IE1hdGguc2luKHRoaXMucm9sbCAqIDAuNSk7XG4gICAgY29uc3QgY3AgPSBNYXRoLmNvcyh0aGlzLnBpdGNoICogMC41KTtcbiAgICBjb25zdCBzcCA9IE1hdGguc2luKHRoaXMucGl0Y2ggKiAwLjUpO1xuICAgIGNvbnN0IHcgPSBjeSAqIGNyICogY3AgKyBzeSAqIHNyICogc3A7XG4gICAgY29uc3QgeCA9IGN5ICogc3IgKiBjcCAtIHN5ICogY3IgKiBzcDtcbiAgICBjb25zdCB5ID0gY3kgKiBjciAqIHNwICsgc3kgKiBzciAqIGNwO1xuICAgIGNvbnN0IHogPSBzeSAqIGNyICogY3AgLSBjeSAqIHNyICogc3A7XG4gICAgcmV0dXJuIG5ldyBRdWF0ZXJuaW9uKHgsIHksIHosIHcpO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVPcmRlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8IDY7XG59XG5cbmZ1bmN0aW9uIGNoZWNrT3JkZXIodmFsdWUpIHtcbiAgaWYgKHZhbHVlIDwgMCAmJiB2YWx1ZSA+PSA2KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKEVSUl9VTktOT1dOX09SREVSKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV1bGVyLmpzLm1hcCIsImltcG9ydCBNYXRyaXggZnJvbSAnLi9iYXNlL21hdHJpeCc7XG5pbXBvcnQgeyBjaGVja1ZlY3RvciB9IGZyb20gJy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCB7IHZlYzRfdHJhbnNmb3JtTWF0MyB9IGZyb20gJy4uL2xpYi9nbC1tYXRyaXgtZXh0cmFzJztcbmltcG9ydCAqIGFzIG1hdDMgZnJvbSAnZ2wtbWF0cml4L21hdDMnO1xuaW1wb3J0ICogYXMgdmVjMiBmcm9tICdnbC1tYXRyaXgvdmVjMic7XG5pbXBvcnQgKiBhcyB2ZWMzIGZyb20gJ2dsLW1hdHJpeC92ZWMzJztcbnZhciBJTkRJQ0VTO1xuXG4oZnVuY3Rpb24gKElORElDRVMpIHtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMFJPVzBcIl0gPSAwXSA9IFwiQ09MMFJPVzBcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMFJPVzFcIl0gPSAxXSA9IFwiQ09MMFJPVzFcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMFJPVzJcIl0gPSAyXSA9IFwiQ09MMFJPVzJcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMVJPVzBcIl0gPSAzXSA9IFwiQ09MMVJPVzBcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMVJPVzFcIl0gPSA0XSA9IFwiQ09MMVJPVzFcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMVJPVzJcIl0gPSA1XSA9IFwiQ09MMVJPVzJcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMlJPVzBcIl0gPSA2XSA9IFwiQ09MMlJPVzBcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMlJPVzFcIl0gPSA3XSA9IFwiQ09MMlJPVzFcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMlJPVzJcIl0gPSA4XSA9IFwiQ09MMlJPVzJcIjtcbn0pKElORElDRVMgfHwgKElORElDRVMgPSB7fSkpO1xuXG5jb25zdCBJREVOVElUWV9NQVRSSVggPSBPYmplY3QuZnJlZXplKFsxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxXSk7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXRyaXgzIGV4dGVuZHMgTWF0cml4IHtcbiAgc3RhdGljIGdldCBJREVOVElUWSgpIHtcbiAgICByZXR1cm4gZ2V0SWRlbnRpdHlNYXRyaXgoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgWkVSTygpIHtcbiAgICByZXR1cm4gZ2V0WmVyb01hdHJpeCgpO1xuICB9XG5cbiAgZ2V0IEVMRU1FTlRTKCkge1xuICAgIHJldHVybiA5O1xuICB9XG5cbiAgZ2V0IFJBTksoKSB7XG4gICAgcmV0dXJuIDM7XG4gIH1cblxuICBnZXQgSU5ESUNFUygpIHtcbiAgICByZXR1cm4gSU5ESUNFUztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFycmF5LCAuLi5hcmdzKSB7XG4gICAgc3VwZXIoLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCk7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSAmJiBBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgdGhpcy5jb3B5KGFycmF5KTtcbiAgICB9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5jb3B5KFthcnJheSwgLi4uYXJnc10pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlkZW50aXR5KCk7XG4gICAgfVxuICB9XG5cbiAgY29weShhcnJheSkge1xuICAgIHRoaXNbMF0gPSBhcnJheVswXTtcbiAgICB0aGlzWzFdID0gYXJyYXlbMV07XG4gICAgdGhpc1syXSA9IGFycmF5WzJdO1xuICAgIHRoaXNbM10gPSBhcnJheVszXTtcbiAgICB0aGlzWzRdID0gYXJyYXlbNF07XG4gICAgdGhpc1s1XSA9IGFycmF5WzVdO1xuICAgIHRoaXNbNl0gPSBhcnJheVs2XTtcbiAgICB0aGlzWzddID0gYXJyYXlbN107XG4gICAgdGhpc1s4XSA9IGFycmF5WzhdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBpZGVudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3B5KElERU5USVRZX01BVFJJWCk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tUXVhdGVybmlvbihxKSB7XG4gICAgbWF0My5mcm9tUXVhdCh0aGlzLCBxKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0KG0wMCwgbTEwLCBtMjAsIG0wMSwgbTExLCBtMjEsIG0wMiwgbTEyLCBtMjIpIHtcbiAgICB0aGlzWzBdID0gbTAwO1xuICAgIHRoaXNbMV0gPSBtMTA7XG4gICAgdGhpc1syXSA9IG0yMDtcbiAgICB0aGlzWzNdID0gbTAxO1xuICAgIHRoaXNbNF0gPSBtMTE7XG4gICAgdGhpc1s1XSA9IG0yMTtcbiAgICB0aGlzWzZdID0gbTAyO1xuICAgIHRoaXNbN10gPSBtMTI7XG4gICAgdGhpc1s4XSA9IG0yMjtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0Um93TWFqb3IobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICAgIHRoaXNbMF0gPSBtMDA7XG4gICAgdGhpc1sxXSA9IG0xMDtcbiAgICB0aGlzWzJdID0gbTIwO1xuICAgIHRoaXNbM10gPSBtMDE7XG4gICAgdGhpc1s0XSA9IG0xMTtcbiAgICB0aGlzWzVdID0gbTIxO1xuICAgIHRoaXNbNl0gPSBtMDI7XG4gICAgdGhpc1s3XSA9IG0xMjtcbiAgICB0aGlzWzhdID0gbTIyO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBkZXRlcm1pbmFudCgpIHtcbiAgICByZXR1cm4gbWF0My5kZXRlcm1pbmFudCh0aGlzKTtcbiAgfVxuXG4gIHRyYW5zcG9zZSgpIHtcbiAgICBtYXQzLnRyYW5zcG9zZSh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgaW52ZXJ0KCkge1xuICAgIG1hdDMuaW52ZXJ0KHRoaXMsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBtdWx0aXBseUxlZnQoYSkge1xuICAgIG1hdDMubXVsdGlwbHkodGhpcywgYSwgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG11bHRpcGx5UmlnaHQoYSkge1xuICAgIG1hdDMubXVsdGlwbHkodGhpcywgdGhpcywgYSk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZShyYWRpYW5zKSB7XG4gICAgbWF0My5yb3RhdGUodGhpcywgdGhpcywgcmFkaWFucyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNjYWxlKGZhY3Rvcikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZhY3RvcikpIHtcbiAgICAgIG1hdDMuc2NhbGUodGhpcywgdGhpcywgZmFjdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0My5zY2FsZSh0aGlzLCB0aGlzLCBbZmFjdG9yLCBmYWN0b3JdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNsYXRlKHZlYykge1xuICAgIG1hdDMudHJhbnNsYXRlKHRoaXMsIHRoaXMsIHZlYyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2ZWN0b3IsIHJlc3VsdCkge1xuICAgIGxldCBvdXQ7XG5cbiAgICBzd2l0Y2ggKHZlY3Rvci5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgb3V0ID0gdmVjMi50cmFuc2Zvcm1NYXQzKHJlc3VsdCB8fCBbLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgb3V0ID0gdmVjMy50cmFuc2Zvcm1NYXQzKHJlc3VsdCB8fCBbLTAsIC0wLCAtMF0sIHZlY3RvciwgdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQ6XG4gICAgICAgIG91dCA9IHZlYzRfdHJhbnNmb3JtTWF0MyhyZXN1bHQgfHwgWy0wLCAtMCwgLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCB2ZWN0b3InKTtcbiAgICB9XG5cbiAgICBjaGVja1ZlY3RvcihvdXQsIHZlY3Rvci5sZW5ndGgpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICB0cmFuc2Zvcm1WZWN0b3IodmVjdG9yLCByZXN1bHQpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm0odmVjdG9yLCByZXN1bHQpO1xuICB9XG5cbiAgdHJhbnNmb3JtVmVjdG9yMih2ZWN0b3IsIHJlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybSh2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxuICB0cmFuc2Zvcm1WZWN0b3IzKHZlY3RvciwgcmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtKHZlY3RvciwgcmVzdWx0KTtcbiAgfVxuXG59XG5sZXQgWkVST19NQVRSSVgzO1xubGV0IElERU5USVRZX01BVFJJWDM7XG5cbmZ1bmN0aW9uIGdldFplcm9NYXRyaXgoKSB7XG4gIGlmICghWkVST19NQVRSSVgzKSB7XG4gICAgWkVST19NQVRSSVgzID0gbmV3IE1hdHJpeDMoWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdKTtcbiAgICBPYmplY3QuZnJlZXplKFpFUk9fTUFUUklYMyk7XG4gIH1cblxuICByZXR1cm4gWkVST19NQVRSSVgzO1xufVxuXG5mdW5jdGlvbiBnZXRJZGVudGl0eU1hdHJpeCgpIHtcbiAgaWYgKCFJREVOVElUWV9NQVRSSVgzKSB7XG4gICAgSURFTlRJVFlfTUFUUklYMyA9IG5ldyBNYXRyaXgzKCk7XG4gICAgT2JqZWN0LmZyZWV6ZShJREVOVElUWV9NQVRSSVgzKTtcbiAgfVxuXG4gIHJldHVybiBJREVOVElUWV9NQVRSSVgzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0cml4My5qcy5tYXAiLCJpbXBvcnQgTWF0cml4IGZyb20gJy4vYmFzZS9tYXRyaXgnO1xuaW1wb3J0IHsgY2hlY2tWZWN0b3IgfSBmcm9tICcuLi9saWIvdmFsaWRhdG9ycyc7XG5pbXBvcnQgeyB2ZWMyX3RyYW5zZm9ybU1hdDRBc1ZlY3RvciwgdmVjM190cmFuc2Zvcm1NYXQ0QXNWZWN0b3IgfSBmcm9tICcuLi9saWIvZ2wtbWF0cml4LWV4dHJhcyc7XG5pbXBvcnQgKiBhcyBtYXQ0IGZyb20gJ2dsLW1hdHJpeC9tYXQ0JztcbmltcG9ydCAqIGFzIHZlYzIgZnJvbSAnZ2wtbWF0cml4L3ZlYzInO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tICdnbC1tYXRyaXgvdmVjMyc7XG5pbXBvcnQgKiBhcyB2ZWM0IGZyb20gJ2dsLW1hdHJpeC92ZWM0JztcbnZhciBJTkRJQ0VTO1xuXG4oZnVuY3Rpb24gKElORElDRVMpIHtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMFJPVzBcIl0gPSAwXSA9IFwiQ09MMFJPVzBcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMFJPVzFcIl0gPSAxXSA9IFwiQ09MMFJPVzFcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMFJPVzJcIl0gPSAyXSA9IFwiQ09MMFJPVzJcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMFJPVzNcIl0gPSAzXSA9IFwiQ09MMFJPVzNcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMVJPVzBcIl0gPSA0XSA9IFwiQ09MMVJPVzBcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMVJPVzFcIl0gPSA1XSA9IFwiQ09MMVJPVzFcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMVJPVzJcIl0gPSA2XSA9IFwiQ09MMVJPVzJcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMVJPVzNcIl0gPSA3XSA9IFwiQ09MMVJPVzNcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMlJPVzBcIl0gPSA4XSA9IFwiQ09MMlJPVzBcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMlJPVzFcIl0gPSA5XSA9IFwiQ09MMlJPVzFcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MMlJPVzJcIl0gPSAxMF0gPSBcIkNPTDJST1cyXCI7XG4gIElORElDRVNbSU5ESUNFU1tcIkNPTDJST1czXCJdID0gMTFdID0gXCJDT0wyUk9XM1wiO1xuICBJTkRJQ0VTW0lORElDRVNbXCJDT0wzUk9XMFwiXSA9IDEyXSA9IFwiQ09MM1JPVzBcIjtcbiAgSU5ESUNFU1tJTkRJQ0VTW1wiQ09MM1JPVzFcIl0gPSAxM10gPSBcIkNPTDNST1cxXCI7XG4gIElORElDRVNbSU5ESUNFU1tcIkNPTDNST1cyXCJdID0gMTRdID0gXCJDT0wzUk9XMlwiO1xuICBJTkRJQ0VTW0lORElDRVNbXCJDT0wzUk9XM1wiXSA9IDE1XSA9IFwiQ09MM1JPVzNcIjtcbn0pKElORElDRVMgfHwgKElORElDRVMgPSB7fSkpO1xuXG5jb25zdCBERUZBVUxUX0ZPVlkgPSA0NSAqIE1hdGguUEkgLyAxODA7XG5jb25zdCBERUZBVUxUX0FTUEVDVCA9IDE7XG5jb25zdCBERUZBVUxUX05FQVIgPSAwLjE7XG5jb25zdCBERUZBVUxUX0ZBUiA9IDUwMDtcbmNvbnN0IElERU5USVRZX01BVFJJWCA9IE9iamVjdC5mcmVlemUoWzEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDFdKTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeDQgZXh0ZW5kcyBNYXRyaXgge1xuICBzdGF0aWMgZ2V0IElERU5USVRZKCkge1xuICAgIHJldHVybiBnZXRJZGVudGl0eU1hdHJpeCgpO1xuICB9XG5cbiAgc3RhdGljIGdldCBaRVJPKCkge1xuICAgIHJldHVybiBnZXRaZXJvTWF0cml4KCk7XG4gIH1cblxuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgcmV0dXJuIDE2O1xuICB9XG5cbiAgZ2V0IFJBTksoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBnZXQgSU5ESUNFUygpIHtcbiAgICByZXR1cm4gSU5ESUNFUztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGFycmF5KSB7XG4gICAgc3VwZXIoLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTApO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgIHRoaXMuY29weShhcnJheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWRlbnRpdHkoKTtcbiAgICB9XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgdGhpc1szXSA9IGFycmF5WzNdO1xuICAgIHRoaXNbNF0gPSBhcnJheVs0XTtcbiAgICB0aGlzWzVdID0gYXJyYXlbNV07XG4gICAgdGhpc1s2XSA9IGFycmF5WzZdO1xuICAgIHRoaXNbN10gPSBhcnJheVs3XTtcbiAgICB0aGlzWzhdID0gYXJyYXlbOF07XG4gICAgdGhpc1s5XSA9IGFycmF5WzldO1xuICAgIHRoaXNbMTBdID0gYXJyYXlbMTBdO1xuICAgIHRoaXNbMTFdID0gYXJyYXlbMTFdO1xuICAgIHRoaXNbMTJdID0gYXJyYXlbMTJdO1xuICAgIHRoaXNbMTNdID0gYXJyYXlbMTNdO1xuICAgIHRoaXNbMTRdID0gYXJyYXlbMTRdO1xuICAgIHRoaXNbMTVdID0gYXJyYXlbMTVdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzZXQobTAwLCBtMTAsIG0yMCwgbTMwLCBtMDEsIG0xMSwgbTIxLCBtMzEsIG0wMiwgbTEyLCBtMjIsIG0zMiwgbTAzLCBtMTMsIG0yMywgbTMzKSB7XG4gICAgdGhpc1swXSA9IG0wMDtcbiAgICB0aGlzWzFdID0gbTEwO1xuICAgIHRoaXNbMl0gPSBtMjA7XG4gICAgdGhpc1szXSA9IG0zMDtcbiAgICB0aGlzWzRdID0gbTAxO1xuICAgIHRoaXNbNV0gPSBtMTE7XG4gICAgdGhpc1s2XSA9IG0yMTtcbiAgICB0aGlzWzddID0gbTMxO1xuICAgIHRoaXNbOF0gPSBtMDI7XG4gICAgdGhpc1s5XSA9IG0xMjtcbiAgICB0aGlzWzEwXSA9IG0yMjtcbiAgICB0aGlzWzExXSA9IG0zMjtcbiAgICB0aGlzWzEyXSA9IG0wMztcbiAgICB0aGlzWzEzXSA9IG0xMztcbiAgICB0aGlzWzE0XSA9IG0yMztcbiAgICB0aGlzWzE1XSA9IG0zMztcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0Um93TWFqb3IobTAwLCBtMDEsIG0wMiwgbTAzLCBtMTAsIG0xMSwgbTEyLCBtMTMsIG0yMCwgbTIxLCBtMjIsIG0yMywgbTMwLCBtMzEsIG0zMiwgbTMzKSB7XG4gICAgdGhpc1swXSA9IG0wMDtcbiAgICB0aGlzWzFdID0gbTEwO1xuICAgIHRoaXNbMl0gPSBtMjA7XG4gICAgdGhpc1szXSA9IG0zMDtcbiAgICB0aGlzWzRdID0gbTAxO1xuICAgIHRoaXNbNV0gPSBtMTE7XG4gICAgdGhpc1s2XSA9IG0yMTtcbiAgICB0aGlzWzddID0gbTMxO1xuICAgIHRoaXNbOF0gPSBtMDI7XG4gICAgdGhpc1s5XSA9IG0xMjtcbiAgICB0aGlzWzEwXSA9IG0yMjtcbiAgICB0aGlzWzExXSA9IG0zMjtcbiAgICB0aGlzWzEyXSA9IG0wMztcbiAgICB0aGlzWzEzXSA9IG0xMztcbiAgICB0aGlzWzE0XSA9IG0yMztcbiAgICB0aGlzWzE1XSA9IG0zMztcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdG9Sb3dNYWpvcihyZXN1bHQpIHtcbiAgICByZXN1bHRbMF0gPSB0aGlzWzBdO1xuICAgIHJlc3VsdFsxXSA9IHRoaXNbNF07XG4gICAgcmVzdWx0WzJdID0gdGhpc1s4XTtcbiAgICByZXN1bHRbM10gPSB0aGlzWzEyXTtcbiAgICByZXN1bHRbNF0gPSB0aGlzWzFdO1xuICAgIHJlc3VsdFs1XSA9IHRoaXNbNV07XG4gICAgcmVzdWx0WzZdID0gdGhpc1s5XTtcbiAgICByZXN1bHRbN10gPSB0aGlzWzEzXTtcbiAgICByZXN1bHRbOF0gPSB0aGlzWzJdO1xuICAgIHJlc3VsdFs5XSA9IHRoaXNbNl07XG4gICAgcmVzdWx0WzEwXSA9IHRoaXNbMTBdO1xuICAgIHJlc3VsdFsxMV0gPSB0aGlzWzE0XTtcbiAgICByZXN1bHRbMTJdID0gdGhpc1szXTtcbiAgICByZXN1bHRbMTNdID0gdGhpc1s3XTtcbiAgICByZXN1bHRbMTRdID0gdGhpc1sxMV07XG4gICAgcmVzdWx0WzE1XSA9IHRoaXNbMTVdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZGVudGl0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3B5KElERU5USVRZX01BVFJJWCk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tUXVhdGVybmlvbihxdWF0ZXJuaW9uKSB7XG4gICAgbWF0NC5mcm9tUXVhdCh0aGlzLCBxdWF0ZXJuaW9uKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZnJ1c3R1bSh2aWV3KSB7XG4gICAgY29uc3Qge1xuICAgICAgbGVmdCxcbiAgICAgIHJpZ2h0LFxuICAgICAgYm90dG9tLFxuICAgICAgdG9wLFxuICAgICAgbmVhciA9IERFRkFVTFRfTkVBUixcbiAgICAgIGZhciA9IERFRkFVTFRfRkFSXG4gICAgfSA9IHZpZXc7XG5cbiAgICBpZiAoZmFyID09PSBJbmZpbml0eSkge1xuICAgICAgY29tcHV0ZUluZmluaXRlUGVyc3BlY3RpdmVPZmZDZW50ZXIodGhpcywgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWF0NC5mcnVzdHVtKHRoaXMsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbG9va0F0KHZpZXcpIHtcbiAgICBjb25zdCB7XG4gICAgICBleWUsXG4gICAgICBjZW50ZXIgPSBbMCwgMCwgMF0sXG4gICAgICB1cCA9IFswLCAxLCAwXVxuICAgIH0gPSB2aWV3O1xuICAgIG1hdDQubG9va0F0KHRoaXMsIGV5ZSwgY2VudGVyLCB1cCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG9ydGhvKHZpZXcpIHtcbiAgICBjb25zdCB7XG4gICAgICBsZWZ0LFxuICAgICAgcmlnaHQsXG4gICAgICBib3R0b20sXG4gICAgICB0b3AsXG4gICAgICBuZWFyID0gREVGQVVMVF9ORUFSLFxuICAgICAgZmFyID0gREVGQVVMVF9GQVJcbiAgICB9ID0gdmlldztcbiAgICBtYXQ0Lm9ydGhvKHRoaXMsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgb3J0aG9ncmFwaGljKHZpZXcpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3Z5ID0gREVGQVVMVF9GT1ZZLFxuICAgICAgYXNwZWN0ID0gREVGQVVMVF9BU1BFQ1QsXG4gICAgICBmb2NhbERpc3RhbmNlID0gMSxcbiAgICAgIG5lYXIgPSBERUZBVUxUX05FQVIsXG4gICAgICBmYXIgPSBERUZBVUxUX0ZBUlxuICAgIH0gPSB2aWV3O1xuICAgIGNoZWNrUmFkaWFucyhmb3Z5KTtcbiAgICBjb25zdCBoYWxmWSA9IGZvdnkgLyAyO1xuICAgIGNvbnN0IHRvcCA9IGZvY2FsRGlzdGFuY2UgKiBNYXRoLnRhbihoYWxmWSk7XG4gICAgY29uc3QgcmlnaHQgPSB0b3AgKiBhc3BlY3Q7XG4gICAgcmV0dXJuIHRoaXMub3J0aG8oe1xuICAgICAgbGVmdDogLXJpZ2h0LFxuICAgICAgcmlnaHQsXG4gICAgICBib3R0b206IC10b3AsXG4gICAgICB0b3AsXG4gICAgICBuZWFyLFxuICAgICAgZmFyXG4gICAgfSk7XG4gIH1cblxuICBwZXJzcGVjdGl2ZSh2aWV3KSB7XG4gICAgY29uc3Qge1xuICAgICAgZm92eSA9IDQ1ICogTWF0aC5QSSAvIDE4MCxcbiAgICAgIGFzcGVjdCA9IDEsXG4gICAgICBuZWFyID0gMC4xLFxuICAgICAgZmFyID0gNTAwXG4gICAgfSA9IHZpZXc7XG4gICAgY2hlY2tSYWRpYW5zKGZvdnkpO1xuICAgIG1hdDQucGVyc3BlY3RpdmUodGhpcywgZm92eSwgYXNwZWN0LCBuZWFyLCBmYXIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBkZXRlcm1pbmFudCgpIHtcbiAgICByZXR1cm4gbWF0NC5kZXRlcm1pbmFudCh0aGlzKTtcbiAgfVxuXG4gIGdldFNjYWxlKHJlc3VsdCA9IFstMCwgLTAsIC0wXSkge1xuICAgIHJlc3VsdFswXSA9IE1hdGguc3FydCh0aGlzWzBdICogdGhpc1swXSArIHRoaXNbMV0gKiB0aGlzWzFdICsgdGhpc1syXSAqIHRoaXNbMl0pO1xuICAgIHJlc3VsdFsxXSA9IE1hdGguc3FydCh0aGlzWzRdICogdGhpc1s0XSArIHRoaXNbNV0gKiB0aGlzWzVdICsgdGhpc1s2XSAqIHRoaXNbNl0pO1xuICAgIHJlc3VsdFsyXSA9IE1hdGguc3FydCh0aGlzWzhdICogdGhpc1s4XSArIHRoaXNbOV0gKiB0aGlzWzldICsgdGhpc1sxMF0gKiB0aGlzWzEwXSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldFRyYW5zbGF0aW9uKHJlc3VsdCA9IFstMCwgLTAsIC0wXSkge1xuICAgIHJlc3VsdFswXSA9IHRoaXNbMTJdO1xuICAgIHJlc3VsdFsxXSA9IHRoaXNbMTNdO1xuICAgIHJlc3VsdFsyXSA9IHRoaXNbMTRdO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRSb3RhdGlvbihyZXN1bHQsIHNjYWxlUmVzdWx0KSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0IHx8IFstMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMF07XG4gICAgc2NhbGVSZXN1bHQgPSBzY2FsZVJlc3VsdCB8fCBbLTAsIC0wLCAtMF07XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLmdldFNjYWxlKHNjYWxlUmVzdWx0KTtcbiAgICBjb25zdCBpbnZlcnNlU2NhbGUwID0gMSAvIHNjYWxlWzBdO1xuICAgIGNvbnN0IGludmVyc2VTY2FsZTEgPSAxIC8gc2NhbGVbMV07XG4gICAgY29uc3QgaW52ZXJzZVNjYWxlMiA9IDEgLyBzY2FsZVsyXTtcbiAgICByZXN1bHRbMF0gPSB0aGlzWzBdICogaW52ZXJzZVNjYWxlMDtcbiAgICByZXN1bHRbMV0gPSB0aGlzWzFdICogaW52ZXJzZVNjYWxlMTtcbiAgICByZXN1bHRbMl0gPSB0aGlzWzJdICogaW52ZXJzZVNjYWxlMjtcbiAgICByZXN1bHRbM10gPSAwO1xuICAgIHJlc3VsdFs0XSA9IHRoaXNbNF0gKiBpbnZlcnNlU2NhbGUwO1xuICAgIHJlc3VsdFs1XSA9IHRoaXNbNV0gKiBpbnZlcnNlU2NhbGUxO1xuICAgIHJlc3VsdFs2XSA9IHRoaXNbNl0gKiBpbnZlcnNlU2NhbGUyO1xuICAgIHJlc3VsdFs3XSA9IDA7XG4gICAgcmVzdWx0WzhdID0gdGhpc1s4XSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzldID0gdGhpc1s5XSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzEwXSA9IHRoaXNbMTBdICogaW52ZXJzZVNjYWxlMjtcbiAgICByZXN1bHRbMTFdID0gMDtcbiAgICByZXN1bHRbMTJdID0gMDtcbiAgICByZXN1bHRbMTNdID0gMDtcbiAgICByZXN1bHRbMTRdID0gMDtcbiAgICByZXN1bHRbMTVdID0gMTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0Um90YXRpb25NYXRyaXgzKHJlc3VsdCwgc2NhbGVSZXN1bHQpIHtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgWy0wLCAtMCwgLTAsIC0wLCAtMCwgLTAsIC0wLCAtMCwgLTBdO1xuICAgIHNjYWxlUmVzdWx0ID0gc2NhbGVSZXN1bHQgfHwgWy0wLCAtMCwgLTBdO1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5nZXRTY2FsZShzY2FsZVJlc3VsdCk7XG4gICAgY29uc3QgaW52ZXJzZVNjYWxlMCA9IDEgLyBzY2FsZVswXTtcbiAgICBjb25zdCBpbnZlcnNlU2NhbGUxID0gMSAvIHNjYWxlWzFdO1xuICAgIGNvbnN0IGludmVyc2VTY2FsZTIgPSAxIC8gc2NhbGVbMl07XG4gICAgcmVzdWx0WzBdID0gdGhpc1swXSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzFdID0gdGhpc1sxXSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzJdID0gdGhpc1syXSAqIGludmVyc2VTY2FsZTI7XG4gICAgcmVzdWx0WzNdID0gdGhpc1s0XSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzRdID0gdGhpc1s1XSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzVdID0gdGhpc1s2XSAqIGludmVyc2VTY2FsZTI7XG4gICAgcmVzdWx0WzZdID0gdGhpc1s4XSAqIGludmVyc2VTY2FsZTA7XG4gICAgcmVzdWx0WzddID0gdGhpc1s5XSAqIGludmVyc2VTY2FsZTE7XG4gICAgcmVzdWx0WzhdID0gdGhpc1sxMF0gKiBpbnZlcnNlU2NhbGUyO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0cmFuc3Bvc2UoKSB7XG4gICAgbWF0NC50cmFuc3Bvc2UodGhpcywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGludmVydCgpIHtcbiAgICBtYXQ0LmludmVydCh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgbXVsdGlwbHlMZWZ0KGEpIHtcbiAgICBtYXQ0Lm11bHRpcGx5KHRoaXMsIGEsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBtdWx0aXBseVJpZ2h0KGEpIHtcbiAgICBtYXQ0Lm11bHRpcGx5KHRoaXMsIHRoaXMsIGEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGVYKHJhZGlhbnMpIHtcbiAgICBtYXQ0LnJvdGF0ZVgodGhpcywgdGhpcywgcmFkaWFucyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVkocmFkaWFucykge1xuICAgIG1hdDQucm90YXRlWSh0aGlzLCB0aGlzLCByYWRpYW5zKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWihyYWRpYW5zKSB7XG4gICAgbWF0NC5yb3RhdGVaKHRoaXMsIHRoaXMsIHJhZGlhbnMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGVYWVooYW5nbGVYWVopIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGVYKGFuZ2xlWFlaWzBdKS5yb3RhdGVZKGFuZ2xlWFlaWzFdKS5yb3RhdGVaKGFuZ2xlWFlaWzJdKTtcbiAgfVxuXG4gIHJvdGF0ZUF4aXMocmFkaWFucywgYXhpcykge1xuICAgIG1hdDQucm90YXRlKHRoaXMsIHRoaXMsIHJhZGlhbnMsIGF4aXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzY2FsZShmYWN0b3IpIHtcbiAgICBtYXQ0LnNjYWxlKHRoaXMsIHRoaXMsIEFycmF5LmlzQXJyYXkoZmFjdG9yKSA/IGZhY3RvciA6IFtmYWN0b3IsIGZhY3RvciwgZmFjdG9yXSk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZSh2ZWN0b3IpIHtcbiAgICBtYXQ0LnRyYW5zbGF0ZSh0aGlzLCB0aGlzLCB2ZWN0b3IpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm0odmVjdG9yLCByZXN1bHQpIHtcbiAgICBpZiAodmVjdG9yLmxlbmd0aCA9PT0gNCkge1xuICAgICAgcmVzdWx0ID0gdmVjNC50cmFuc2Zvcm1NYXQ0KHJlc3VsdCB8fCBbLTAsIC0wLCAtMCwgLTBdLCB2ZWN0b3IsIHRoaXMpO1xuICAgICAgY2hlY2tWZWN0b3IocmVzdWx0LCA0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQXNQb2ludCh2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1BvaW50KHZlY3RvciwgcmVzdWx0KSB7XG4gICAgY29uc3Qge1xuICAgICAgbGVuZ3RoXG4gICAgfSA9IHZlY3RvcjtcbiAgICBsZXQgb3V0O1xuXG4gICAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgb3V0ID0gdmVjMi50cmFuc2Zvcm1NYXQ0KHJlc3VsdCB8fCBbLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgb3V0ID0gdmVjMy50cmFuc2Zvcm1NYXQ0KHJlc3VsdCB8fCBbLTAsIC0wLCAtMF0sIHZlY3RvciwgdGhpcyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgdmVjdG9yJyk7XG4gICAgfVxuXG4gICAgY2hlY2tWZWN0b3Iob3V0LCB2ZWN0b3IubGVuZ3RoKTtcbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgdHJhbnNmb3JtQXNWZWN0b3IodmVjdG9yLCByZXN1bHQpIHtcbiAgICBsZXQgb3V0O1xuXG4gICAgc3dpdGNoICh2ZWN0b3IubGVuZ3RoKSB7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIG91dCA9IHZlYzJfdHJhbnNmb3JtTWF0NEFzVmVjdG9yKHJlc3VsdCB8fCBbLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgb3V0ID0gdmVjM190cmFuc2Zvcm1NYXQ0QXNWZWN0b3IocmVzdWx0IHx8IFstMCwgLTAsIC0wXSwgdmVjdG9yLCB0aGlzKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCB2ZWN0b3InKTtcbiAgICB9XG5cbiAgICBjaGVja1ZlY3RvcihvdXQsIHZlY3Rvci5sZW5ndGgpO1xuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICB0cmFuc2Zvcm1Qb2ludCh2ZWN0b3IsIHJlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUFzUG9pbnQodmVjdG9yLCByZXN1bHQpO1xuICB9XG5cbiAgdHJhbnNmb3JtVmVjdG9yKHZlY3RvciwgcmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtQXNQb2ludCh2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxuICB0cmFuc2Zvcm1EaXJlY3Rpb24odmVjdG9yLCByZXN1bHQpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Bc1ZlY3Rvcih2ZWN0b3IsIHJlc3VsdCk7XG4gIH1cblxuICBtYWtlUm90YXRpb25YKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGl0eSgpLnJvdGF0ZVgocmFkaWFucyk7XG4gIH1cblxuICBtYWtlVHJhbnNsYXRpb24oeCwgeSwgeikge1xuICAgIHJldHVybiB0aGlzLmlkZW50aXR5KCkudHJhbnNsYXRlKFt4LCB5LCB6XSk7XG4gIH1cblxufVxubGV0IFpFUk87XG5sZXQgSURFTlRJVFk7XG5cbmZ1bmN0aW9uIGdldFplcm9NYXRyaXgoKSB7XG4gIGlmICghWkVSTykge1xuICAgIFpFUk8gPSBuZXcgTWF0cml4NChbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0pO1xuICAgIE9iamVjdC5mcmVlemUoWkVSTyk7XG4gIH1cblxuICByZXR1cm4gWkVSTztcbn1cblxuZnVuY3Rpb24gZ2V0SWRlbnRpdHlNYXRyaXgoKSB7XG4gIGlmICghSURFTlRJVFkpIHtcbiAgICBJREVOVElUWSA9IG5ldyBNYXRyaXg0KCk7XG4gICAgT2JqZWN0LmZyZWV6ZShJREVOVElUWSk7XG4gIH1cblxuICByZXR1cm4gSURFTlRJVFk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUmFkaWFucyhwb3NzaWJseURlZ3JlZXMpIHtcbiAgaWYgKHBvc3NpYmx5RGVncmVlcyA+IE1hdGguUEkgKiAyKSB7XG4gICAgdGhyb3cgRXJyb3IoJ2V4cGVjdGVkIHJhZGlhbnMnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wdXRlSW5maW5pdGVQZXJzcGVjdGl2ZU9mZkNlbnRlcihyZXN1bHQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhcikge1xuICBjb25zdCBjb2x1bW4wUm93MCA9IDIgKiBuZWFyIC8gKHJpZ2h0IC0gbGVmdCk7XG4gIGNvbnN0IGNvbHVtbjFSb3cxID0gMiAqIG5lYXIgLyAodG9wIC0gYm90dG9tKTtcbiAgY29uc3QgY29sdW1uMlJvdzAgPSAocmlnaHQgKyBsZWZ0KSAvIChyaWdodCAtIGxlZnQpO1xuICBjb25zdCBjb2x1bW4yUm93MSA9ICh0b3AgKyBib3R0b20pIC8gKHRvcCAtIGJvdHRvbSk7XG4gIGNvbnN0IGNvbHVtbjJSb3cyID0gLTE7XG4gIGNvbnN0IGNvbHVtbjJSb3czID0gLTE7XG4gIGNvbnN0IGNvbHVtbjNSb3cyID0gLTIgKiBuZWFyO1xuICByZXN1bHRbMF0gPSBjb2x1bW4wUm93MDtcbiAgcmVzdWx0WzFdID0gMDtcbiAgcmVzdWx0WzJdID0gMDtcbiAgcmVzdWx0WzNdID0gMDtcbiAgcmVzdWx0WzRdID0gMDtcbiAgcmVzdWx0WzVdID0gY29sdW1uMVJvdzE7XG4gIHJlc3VsdFs2XSA9IDA7XG4gIHJlc3VsdFs3XSA9IDA7XG4gIHJlc3VsdFs4XSA9IGNvbHVtbjJSb3cwO1xuICByZXN1bHRbOV0gPSBjb2x1bW4yUm93MTtcbiAgcmVzdWx0WzEwXSA9IGNvbHVtbjJSb3cyO1xuICByZXN1bHRbMTFdID0gY29sdW1uMlJvdzM7XG4gIHJlc3VsdFsxMl0gPSAwO1xuICByZXN1bHRbMTNdID0gMDtcbiAgcmVzdWx0WzE0XSA9IGNvbHVtbjNSb3cyO1xuICByZXN1bHRbMTVdID0gMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hdHJpeDQuanMubWFwIiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmltcG9ydCBNYXRyaXg0IGZyb20gJy4vbWF0cml4NCc7XG5pbXBvcnQgVmVjdG9yMyBmcm9tICcuL3ZlY3RvcjMnO1xuaW1wb3J0IEV1bGVyIGZyb20gJy4vZXVsZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9zZSB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICB4ID0gMCxcbiAgICB5ID0gMCxcbiAgICB6ID0gMCxcbiAgICByb2xsID0gMCxcbiAgICBwaXRjaCA9IDAsXG4gICAgeWF3ID0gMCxcbiAgICBwb3NpdGlvbixcbiAgICBvcmllbnRhdGlvblxuICB9ID0ge30pIHtcbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJwb3NpdGlvblwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwib3JpZW50YXRpb25cIiwgdm9pZCAwKTtcblxuICAgIGlmIChBcnJheS5pc0FycmF5KHBvc2l0aW9uKSAmJiBwb3NpdGlvbi5sZW5ndGggPT09IDMpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMyhwb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcmllbnRhdGlvbikgJiYgb3JpZW50YXRpb24ubGVuZ3RoID09PSA0KSB7XG4gICAgICB0aGlzLm9yaWVudGF0aW9uID0gbmV3IEV1bGVyKG9yaWVudGF0aW9uLCBvcmllbnRhdGlvblszXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3JpZW50YXRpb24gPSBuZXcgRXVsZXIocm9sbCwgcGl0Y2gsIHlhdywgRXVsZXIuUm9sbFBpdGNoWWF3KTtcbiAgICB9XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB5KCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnk7XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXMucG9zaXRpb24ueSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHooKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uejtcbiAgfVxuXG4gIHNldCB6KHZhbHVlKSB7XG4gICAgdGhpcy5wb3NpdGlvbi56ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcm9sbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbi5yb2xsO1xuICB9XG5cbiAgc2V0IHJvbGwodmFsdWUpIHtcbiAgICB0aGlzLm9yaWVudGF0aW9uLnJvbGwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBwaXRjaCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcmllbnRhdGlvbi5waXRjaDtcbiAgfVxuXG4gIHNldCBwaXRjaCh2YWx1ZSkge1xuICAgIHRoaXMub3JpZW50YXRpb24ucGl0Y2ggPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCB5YXcoKSB7XG4gICAgcmV0dXJuIHRoaXMub3JpZW50YXRpb24ueWF3O1xuICB9XG5cbiAgc2V0IHlhdyh2YWx1ZSkge1xuICAgIHRoaXMub3JpZW50YXRpb24ueWF3ID0gdmFsdWU7XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIGdldE9yaWVudGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9yaWVudGF0aW9uO1xuICB9XG5cbiAgZXF1YWxzKHBvc2UpIHtcbiAgICBpZiAoIXBvc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5lcXVhbHMocG9zZS5wb3NpdGlvbikgJiYgdGhpcy5vcmllbnRhdGlvbi5lcXVhbHMocG9zZS5vcmllbnRhdGlvbik7XG4gIH1cblxuICBleGFjdEVxdWFscyhwb3NlKSB7XG4gICAgaWYgKCFwb3NlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24uZXhhY3RFcXVhbHMocG9zZS5wb3NpdGlvbikgJiYgdGhpcy5vcmllbnRhdGlvbi5leGFjdEVxdWFscyhwb3NlLm9yaWVudGF0aW9uKTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCkge1xuICAgIGNvbnN0IHNyID0gTWF0aC5zaW4odGhpcy5yb2xsKTtcbiAgICBjb25zdCBzcCA9IE1hdGguc2luKHRoaXMucGl0Y2gpO1xuICAgIGNvbnN0IHN3ID0gTWF0aC5zaW4odGhpcy55YXcpO1xuICAgIGNvbnN0IGNyID0gTWF0aC5jb3ModGhpcy5yb2xsKTtcbiAgICBjb25zdCBjcCA9IE1hdGguY29zKHRoaXMucGl0Y2gpO1xuICAgIGNvbnN0IGN3ID0gTWF0aC5jb3ModGhpcy55YXcpO1xuICAgIHJldHVybiBuZXcgTWF0cml4NCgpLnNldFJvd01ham9yKGN3ICogY3AsIC1zdyAqIGNyICsgY3cgKiBzcCAqIHNyLCBzdyAqIHNyICsgY3cgKiBzcCAqIGNyLCB0aGlzLngsIHN3ICogY3AsIGN3ICogY3IgKyBzdyAqIHNwICogc3IsIC1jdyAqIHNyICsgc3cgKiBzcCAqIGNyLCB0aGlzLnksIC1zcCwgY3AgKiBzciwgY3AgKiBjciwgdGhpcy56LCAwLCAwLCAwLCAxKTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybWF0aW9uTWF0cml4RnJvbVBvc2UocG9zZSkge1xuICAgIHJldHVybiBuZXcgTWF0cml4NCgpLm11bHRpcGx5UmlnaHQodGhpcy5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpKS5tdWx0aXBseVJpZ2h0KHBvc2UuZ2V0VHJhbnNmb3JtYXRpb25NYXRyaXgoKS5pbnZlcnQoKSk7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeFRvUG9zZShwb3NlKSB7XG4gICAgcmV0dXJuIG5ldyBNYXRyaXg0KCkubXVsdGlwbHlSaWdodChwb3NlLmdldFRyYW5zZm9ybWF0aW9uTWF0cml4KCkpLm11bHRpcGx5UmlnaHQodGhpcy5nZXRUcmFuc2Zvcm1hdGlvbk1hdHJpeCgpLmludmVydCgpKTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb3NlLmpzLm1hcCIsImltcG9ydCBNYXRoQXJyYXkgZnJvbSAnLi9iYXNlL21hdGgtYXJyYXknO1xuaW1wb3J0IHsgY2hlY2tOdW1iZXIsIGNoZWNrVmVjdG9yIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0IFZlY3RvcjQgZnJvbSAnLi92ZWN0b3I0JztcbmltcG9ydCAqIGFzIHF1YXQgZnJvbSAnZ2wtbWF0cml4L3F1YXQnO1xuaW1wb3J0ICogYXMgdmVjNCBmcm9tICdnbC1tYXRyaXgvdmVjNCc7XG5jb25zdCBJREVOVElUWV9RVUFURVJOSU9OID0gWzAsIDAsIDAsIDFdO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVhdGVybmlvbiBleHRlbmRzIE1hdGhBcnJheSB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDAsIHcgPSAxKSB7XG4gICAgc3VwZXIoLTAsIC0wLCAtMCwgLTApO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoeCkgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5jb3B5KHgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldCh4LCB5LCB6LCB3KTtcbiAgICB9XG4gIH1cblxuICBjb3B5KGFycmF5KSB7XG4gICAgdGhpc1swXSA9IGFycmF5WzBdO1xuICAgIHRoaXNbMV0gPSBhcnJheVsxXTtcbiAgICB0aGlzWzJdID0gYXJyYXlbMl07XG4gICAgdGhpc1szXSA9IGFycmF5WzNdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzZXQoeCwgeSwgeiwgdykge1xuICAgIHRoaXNbMF0gPSB4O1xuICAgIHRoaXNbMV0gPSB5O1xuICAgIHRoaXNbMl0gPSB6O1xuICAgIHRoaXNbM10gPSB3O1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIHRoaXNbMF0gPSBvYmplY3QueDtcbiAgICB0aGlzWzFdID0gb2JqZWN0Lnk7XG4gICAgdGhpc1syXSA9IG9iamVjdC56O1xuICAgIHRoaXNbM10gPSBvYmplY3QudztcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZnJvbU1hdHJpeDMobSkge1xuICAgIHF1YXQuZnJvbU1hdDModGhpcywgbSk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGZyb21BeGlzUm90YXRpb24oYXhpcywgcmFkKSB7XG4gICAgcXVhdC5zZXRBeGlzQW5nbGUodGhpcywgYXhpcywgcmFkKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgaWRlbnRpdHkoKSB7XG4gICAgcXVhdC5pZGVudGl0eSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgc2V0QXhpc0FuZ2xlKGF4aXMsIHJhZCkge1xuICAgIHJldHVybiB0aGlzLmZyb21BeGlzUm90YXRpb24oYXhpcywgcmFkKTtcbiAgfVxuXG4gIGdldCBFTEVNRU5UUygpIHtcbiAgICByZXR1cm4gNDtcbiAgfVxuXG4gIGdldCB4KCkge1xuICAgIHJldHVybiB0aGlzWzBdO1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzWzBdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXNbMV07XG4gIH1cblxuICBzZXQgeSh2YWx1ZSkge1xuICAgIHRoaXNbMV0gPSBjaGVja051bWJlcih2YWx1ZSk7XG4gIH1cblxuICBnZXQgeigpIHtcbiAgICByZXR1cm4gdGhpc1syXTtcbiAgfVxuXG4gIHNldCB6KHZhbHVlKSB7XG4gICAgdGhpc1syXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB3KCkge1xuICAgIHJldHVybiB0aGlzWzNdO1xuICB9XG5cbiAgc2V0IHcodmFsdWUpIHtcbiAgICB0aGlzWzNdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgbGVuKCkge1xuICAgIHJldHVybiBxdWF0Lmxlbmd0aCh0aGlzKTtcbiAgfVxuXG4gIGxlbmd0aFNxdWFyZWQoKSB7XG4gICAgcmV0dXJuIHF1YXQuc3F1YXJlZExlbmd0aCh0aGlzKTtcbiAgfVxuXG4gIGRvdChhKSB7XG4gICAgcmV0dXJuIHF1YXQuZG90KHRoaXMsIGEpO1xuICB9XG5cbiAgcm90YXRpb25Ubyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgcXVhdC5yb3RhdGlvblRvKHRoaXMsIHZlY3RvckEsIHZlY3RvckIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBhZGQoYSkge1xuICAgIHF1YXQuYWRkKHRoaXMsIHRoaXMsIGEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBjYWxjdWxhdGVXKCkge1xuICAgIHF1YXQuY2FsY3VsYXRlVyh0aGlzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY29uanVnYXRlKCkge1xuICAgIHF1YXQuY29uanVnYXRlKHRoaXMsIHRoaXMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBpbnZlcnQoKSB7XG4gICAgcXVhdC5pbnZlcnQodGhpcywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGxlcnAoYSwgYiwgdCkge1xuICAgIGlmICh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlcnAodGhpcywgYSwgYik7XG4gICAgfVxuXG4gICAgcXVhdC5sZXJwKHRoaXMsIGEsIGIsIHQpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBtdWx0aXBseVJpZ2h0KGEpIHtcbiAgICBxdWF0Lm11bHRpcGx5KHRoaXMsIHRoaXMsIGEpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBtdWx0aXBseUxlZnQoYSkge1xuICAgIHF1YXQubXVsdGlwbHkodGhpcywgYSwgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIG5vcm1hbGl6ZSgpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmxlbigpO1xuICAgIGNvbnN0IGwgPSBsZW5ndGggPiAwID8gMSAvIGxlbmd0aCA6IDA7XG4gICAgdGhpc1swXSA9IHRoaXNbMF0gKiBsO1xuICAgIHRoaXNbMV0gPSB0aGlzWzFdICogbDtcbiAgICB0aGlzWzJdID0gdGhpc1syXSAqIGw7XG4gICAgdGhpc1szXSA9IHRoaXNbM10gKiBsO1xuXG4gICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpc1szXSA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVgocmFkKSB7XG4gICAgcXVhdC5yb3RhdGVYKHRoaXMsIHRoaXMsIHJhZCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVkocmFkKSB7XG4gICAgcXVhdC5yb3RhdGVZKHRoaXMsIHRoaXMsIHJhZCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVoocmFkKSB7XG4gICAgcXVhdC5yb3RhdGVaKHRoaXMsIHRoaXMsIHJhZCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHNjYWxlKGIpIHtcbiAgICBxdWF0LnNjYWxlKHRoaXMsIHRoaXMsIGIpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBzbGVycChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgbGV0IHN0YXJ0O1xuICAgIGxldCB0YXJnZXQ7XG4gICAgbGV0IHJhdGlvO1xuXG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgICh7XG4gICAgICAgICAgc3RhcnQgPSBJREVOVElUWV9RVUFURVJOSU9OLFxuICAgICAgICAgIHRhcmdldCxcbiAgICAgICAgICByYXRpb1xuICAgICAgICB9ID0gYXJnMCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHN0YXJ0ID0gdGhpcztcbiAgICAgICAgdGFyZ2V0ID0gYXJnMDtcbiAgICAgICAgcmF0aW8gPSBhcmcxO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3RhcnQgPSBhcmcwO1xuICAgICAgICB0YXJnZXQgPSBhcmcxO1xuICAgICAgICByYXRpbyA9IGFyZzI7XG4gICAgfVxuXG4gICAgcXVhdC5zbGVycCh0aGlzLCBzdGFydCwgdGFyZ2V0LCByYXRpbyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybVZlY3RvcjQodmVjdG9yLCByZXN1bHQgPSBuZXcgVmVjdG9yNCgpKSB7XG4gICAgdmVjNC50cmFuc2Zvcm1RdWF0KHJlc3VsdCwgdmVjdG9yLCB0aGlzKTtcbiAgICByZXR1cm4gY2hlY2tWZWN0b3IocmVzdWx0LCA0KTtcbiAgfVxuXG4gIGxlbmd0aFNxKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aFNxdWFyZWQoKTtcbiAgfVxuXG4gIHNldEZyb21BeGlzQW5nbGUoYXhpcywgcmFkKSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0QXhpc0FuZ2xlKGF4aXMsIHJhZCk7XG4gIH1cblxuICBwcmVtdWx0aXBseShhKSB7XG4gICAgcmV0dXJuIHRoaXMubXVsdGlwbHlMZWZ0KGEpO1xuICB9XG5cbiAgbXVsdGlwbHkoYSkge1xuICAgIHJldHVybiB0aGlzLm11bHRpcGx5UmlnaHQoYSk7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cXVhdGVybmlvbi5qcy5tYXAiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IFZlY3RvcjMgZnJvbSAnLi92ZWN0b3IzJztcbmltcG9ydCB7IGZvcm1hdFZhbHVlLCBlcXVhbHMsIGNvbmZpZyB9IGZyb20gJy4uL2xpYi9jb21tb24nO1xuaW1wb3J0IHsgZGVncmVlcywgcmFkaWFucywgY2xhbXAgfSBmcm9tICcuLi9saWIvY29tbW9uJztcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSAnZ2wtbWF0cml4L3ZlYzMnO1xuY29uc3QgRVBTSUxPTiA9IDAuMDAwMDAxO1xuY29uc3QgRUFSVEhfUkFESVVTX01FVEVSUyA9IDYzNzEwMDA7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGhlcmljYWxDb29yZGluYXRlcyB7XG4gIGNvbnN0cnVjdG9yKHtcbiAgICBwaGkgPSAwLFxuICAgIHRoZXRhID0gMCxcbiAgICByYWRpdXMgPSAxLFxuICAgIGJlYXJpbmcsXG4gICAgcGl0Y2gsXG4gICAgYWx0aXR1ZGUsXG4gICAgcmFkaXVzU2NhbGUgPSBFQVJUSF9SQURJVVNfTUVURVJTXG4gIH0gPSB7fSkge1xuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInBoaVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidGhldGFcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJhZGl1c1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmFkaXVzU2NhbGVcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMucGhpID0gcGhpO1xuICAgIHRoaXMudGhldGEgPSB0aGV0YTtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCBhbHRpdHVkZSB8fCAxO1xuICAgIHRoaXMucmFkaXVzU2NhbGUgPSByYWRpdXNTY2FsZSB8fCAxO1xuXG4gICAgaWYgKGJlYXJpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5iZWFyaW5nID0gYmVhcmluZztcbiAgICB9XG5cbiAgICBpZiAocGl0Y2ggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5waXRjaCA9IHBpdGNoO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdFN0cmluZyhjb25maWcpO1xuICB9XG5cbiAgZm9ybWF0U3RyaW5nKHtcbiAgICBwcmludFR5cGVzID0gZmFsc2VcbiAgfSkge1xuICAgIGNvbnN0IGYgPSBmb3JtYXRWYWx1ZTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQocHJpbnRUeXBlcyA/ICdTcGhlcmljYWwnIDogJycsIFwiW3JobzpcIikuY29uY2F0KGYodGhpcy5yYWRpdXMpLCBcIix0aGV0YTpcIikuY29uY2F0KGYodGhpcy50aGV0YSksIFwiLHBoaTpcIikuY29uY2F0KGYodGhpcy5waGkpLCBcIl1cIik7XG4gIH1cblxuICBlcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gZXF1YWxzKHRoaXMucmFkaXVzLCBvdGhlci5yYWRpdXMpICYmIGVxdWFscyh0aGlzLnRoZXRhLCBvdGhlci50aGV0YSkgJiYgZXF1YWxzKHRoaXMucGhpLCBvdGhlci5waGkpO1xuICB9XG5cbiAgZXhhY3RFcXVhbHMob3RoZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yYWRpdXMgPT09IG90aGVyLnJhZGl1cyAmJiB0aGlzLnRoZXRhID09PSBvdGhlci50aGV0YSAmJiB0aGlzLnBoaSA9PT0gb3RoZXIucGhpO1xuICB9XG5cbiAgZ2V0IGJlYXJpbmcoKSB7XG4gICAgcmV0dXJuIDE4MCAtIGRlZ3JlZXModGhpcy5waGkpO1xuICB9XG5cbiAgc2V0IGJlYXJpbmcodikge1xuICAgIHRoaXMucGhpID0gTWF0aC5QSSAtIHJhZGlhbnModik7XG4gIH1cblxuICBnZXQgcGl0Y2goKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXModGhpcy50aGV0YSk7XG4gIH1cblxuICBzZXQgcGl0Y2godikge1xuICAgIHRoaXMudGhldGEgPSByYWRpYW5zKHYpO1xuICB9XG5cbiAgZ2V0IGxvbmdpdHVkZSgpIHtcbiAgICByZXR1cm4gZGVncmVlcyh0aGlzLnBoaSk7XG4gIH1cblxuICBnZXQgbGF0aXR1ZGUoKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXModGhpcy50aGV0YSk7XG4gIH1cblxuICBnZXQgbG5nKCkge1xuICAgIHJldHVybiBkZWdyZWVzKHRoaXMucGhpKTtcbiAgfVxuXG4gIGdldCBsYXQoKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXModGhpcy50aGV0YSk7XG4gIH1cblxuICBnZXQgeigpIHtcbiAgICByZXR1cm4gKHRoaXMucmFkaXVzIC0gMSkgKiB0aGlzLnJhZGl1c1NjYWxlO1xuICB9XG5cbiAgc2V0KHJhZGl1cywgcGhpLCB0aGV0YSkge1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMucGhpID0gcGhpO1xuICAgIHRoaXMudGhldGEgPSB0aGV0YTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBTcGhlcmljYWxDb29yZGluYXRlcygpLmNvcHkodGhpcyk7XG4gIH1cblxuICBjb3B5KG90aGVyKSB7XG4gICAgdGhpcy5yYWRpdXMgPSBvdGhlci5yYWRpdXM7XG4gICAgdGhpcy5waGkgPSBvdGhlci5waGk7XG4gICAgdGhpcy50aGV0YSA9IG90aGVyLnRoZXRhO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tTG5nTGF0WihbbG5nLCBsYXQsIHpdKSB7XG4gICAgdGhpcy5yYWRpdXMgPSAxICsgeiAvIHRoaXMucmFkaXVzU2NhbGU7XG4gICAgdGhpcy5waGkgPSByYWRpYW5zKGxhdCk7XG4gICAgdGhpcy50aGV0YSA9IHJhZGlhbnMobG5nKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZnJvbVZlY3RvcjModikge1xuICAgIHRoaXMucmFkaXVzID0gdmVjMy5sZW5ndGgodik7XG5cbiAgICBpZiAodGhpcy5yYWRpdXMgPiAwKSB7XG4gICAgICB0aGlzLnRoZXRhID0gTWF0aC5hdGFuMih2WzBdLCB2WzFdKTtcbiAgICAgIHRoaXMucGhpID0gTWF0aC5hY29zKGNsYW1wKHZbMl0gLyB0aGlzLnJhZGl1cywgLTEsIDEpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdG9WZWN0b3IzKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMygwLCAwLCB0aGlzLnJhZGl1cykucm90YXRlWCh7XG4gICAgICByYWRpYW5zOiB0aGlzLnRoZXRhXG4gICAgfSkucm90YXRlWih7XG4gICAgICByYWRpYW5zOiB0aGlzLnBoaVxuICAgIH0pO1xuICB9XG5cbiAgbWFrZVNhZmUoKSB7XG4gICAgdGhpcy5waGkgPSBNYXRoLm1heChFUFNJTE9OLCBNYXRoLm1pbihNYXRoLlBJIC0gRVBTSUxPTiwgdGhpcy5waGkpKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNoZWNrKCkge1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHRoaXMucGhpKSB8fCAhTnVtYmVyLmlzRmluaXRlKHRoaXMudGhldGEpIHx8ICEodGhpcy5yYWRpdXMgPiAwKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTcGhlcmljYWxDb29yZGluYXRlczogc29tZSBmaWVsZHMgc2V0IHRvIGludmFsaWQgbnVtYmVycycpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNwaGVyaWNhbC1jb29yZGluYXRlcy5qcy5tYXAiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4vYmFzZS92ZWN0b3InO1xuaW1wb3J0IHsgY29uZmlnLCBpc0FycmF5IH0gZnJvbSAnLi4vbGliL2NvbW1vbic7XG5pbXBvcnQgeyBjaGVja051bWJlciB9IGZyb20gJy4uL2xpYi92YWxpZGF0b3JzJztcbmltcG9ydCAqIGFzIHZlYzIgZnJvbSAnZ2wtbWF0cml4L3ZlYzInO1xuaW1wb3J0IHsgdmVjMl90cmFuc2Zvcm1NYXQ0QXNWZWN0b3IgfSBmcm9tICcuLi9saWIvZ2wtbWF0cml4LWV4dHJhcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyIGV4dGVuZHMgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG4gICAgc3VwZXIoMik7XG5cbiAgICBpZiAoaXNBcnJheSh4KSAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLmNvcHkoeCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgICAgY2hlY2tOdW1iZXIoeCk7XG4gICAgICAgIGNoZWNrTnVtYmVyKHkpO1xuICAgICAgfVxuXG4gICAgICB0aGlzWzBdID0geDtcbiAgICAgIHRoaXNbMV0gPSB5O1xuICAgIH1cbiAgfVxuXG4gIHNldCh4LCB5KSB7XG4gICAgdGhpc1swXSA9IHg7XG4gICAgdGhpc1sxXSA9IHk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGNvcHkoYXJyYXkpIHtcbiAgICB0aGlzWzBdID0gYXJyYXlbMF07XG4gICAgdGhpc1sxXSA9IGFycmF5WzFdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC54KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC55KTtcbiAgICB9XG5cbiAgICB0aGlzWzBdID0gb2JqZWN0Lng7XG4gICAgdGhpc1sxXSA9IG9iamVjdC55O1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0b09iamVjdChvYmplY3QpIHtcbiAgICBvYmplY3QueCA9IHRoaXNbMF07XG4gICAgb2JqZWN0LnkgPSB0aGlzWzFdO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBob3Jpem9udGFsQW5nbGUoKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICB9XG5cbiAgdmVydGljYWxBbmdsZSgpIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICB0cmFuc2Zvcm0obWF0cml4NCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybUFzUG9pbnQobWF0cml4NCk7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1BvaW50KG1hdHJpeDQpIHtcbiAgICB2ZWMyLnRyYW5zZm9ybU1hdDQodGhpcywgdGhpcywgbWF0cml4NCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUFzVmVjdG9yKG1hdHJpeDQpIHtcbiAgICB2ZWMyX3RyYW5zZm9ybU1hdDRBc1ZlY3Rvcih0aGlzLCB0aGlzLCBtYXRyaXg0KTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlNYXRyaXgzKG1hdHJpeDMpIHtcbiAgICB2ZWMyLnRyYW5zZm9ybU1hdDModGhpcywgdGhpcywgbWF0cml4Myk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MngzKG1hdHJpeDJ4Mykge1xuICAgIHZlYzIudHJhbnNmb3JtTWF0MmQodGhpcywgdGhpcywgbWF0cml4MngzKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlNYXRyaXgyKG1hdHJpeDIpIHtcbiAgICB2ZWMyLnRyYW5zZm9ybU1hdDIodGhpcywgdGhpcywgbWF0cml4Mik7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IyLmpzLm1hcCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9iYXNlL3ZlY3Rvcic7XG5pbXBvcnQgeyBjb25maWcsIGlzQXJyYXkgfSBmcm9tICcuLi9saWIvY29tbW9uJztcbmltcG9ydCB7IGNoZWNrTnVtYmVyIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0ICogYXMgdmVjMyBmcm9tICdnbC1tYXRyaXgvdmVjMyc7XG5pbXBvcnQgeyB2ZWMzX3RyYW5zZm9ybU1hdDIsIHZlYzNfdHJhbnNmb3JtTWF0NEFzVmVjdG9yIH0gZnJvbSAnLi4vbGliL2dsLW1hdHJpeC1leHRyYXMnO1xuY29uc3QgT1JJR0lOID0gWzAsIDAsIDBdO1xubGV0IFpFUk87XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IzIGV4dGVuZHMgVmVjdG9yIHtcbiAgc3RhdGljIGdldCBaRVJPKCkge1xuICAgIGlmICghWkVSTykge1xuICAgICAgWkVSTyA9IG5ldyBWZWN0b3IzKDAsIDAsIDApO1xuICAgICAgT2JqZWN0LmZyZWV6ZShaRVJPKTtcbiAgICB9XG5cbiAgICByZXR1cm4gWkVSTztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCwgeiA9IDApIHtcbiAgICBzdXBlcigtMCwgLTAsIC0wKTtcblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIGlzQXJyYXkoeCkpIHtcbiAgICAgIHRoaXMuY29weSh4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgICAgICBjaGVja051bWJlcih4KTtcbiAgICAgICAgY2hlY2tOdW1iZXIoeSk7XG4gICAgICAgIGNoZWNrTnVtYmVyKHopO1xuICAgICAgfVxuXG4gICAgICB0aGlzWzBdID0geDtcbiAgICAgIHRoaXNbMV0gPSB5O1xuICAgICAgdGhpc1syXSA9IHo7XG4gICAgfVxuICB9XG5cbiAgc2V0KHgsIHksIHopIHtcbiAgICB0aGlzWzBdID0geDtcbiAgICB0aGlzWzFdID0geTtcbiAgICB0aGlzWzJdID0gejtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY29weShhcnJheSkge1xuICAgIHRoaXNbMF0gPSBhcnJheVswXTtcbiAgICB0aGlzWzFdID0gYXJyYXlbMV07XG4gICAgdGhpc1syXSA9IGFycmF5WzJdO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICBmcm9tT2JqZWN0KG9iamVjdCkge1xuICAgIGlmIChjb25maWcuZGVidWcpIHtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC54KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC55KTtcbiAgICAgIGNoZWNrTnVtYmVyKG9iamVjdC56KTtcbiAgICB9XG5cbiAgICB0aGlzWzBdID0gb2JqZWN0Lng7XG4gICAgdGhpc1sxXSA9IG9iamVjdC55O1xuICAgIHRoaXNbMl0gPSBvYmplY3QuejtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdG9PYmplY3Qob2JqZWN0KSB7XG4gICAgb2JqZWN0LnggPSB0aGlzWzBdO1xuICAgIG9iamVjdC55ID0gdGhpc1sxXTtcbiAgICBvYmplY3QueiA9IHRoaXNbMl07XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIGdldCBFTEVNRU5UUygpIHtcbiAgICByZXR1cm4gMztcbiAgfVxuXG4gIGdldCB6KCkge1xuICAgIHJldHVybiB0aGlzWzJdO1xuICB9XG5cbiAgc2V0IHoodmFsdWUpIHtcbiAgICB0aGlzWzJdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgYW5nbGUodmVjdG9yKSB7XG4gICAgcmV0dXJuIHZlYzMuYW5nbGUodGhpcywgdmVjdG9yKTtcbiAgfVxuXG4gIGNyb3NzKHZlY3Rvcikge1xuICAgIHZlYzMuY3Jvc3ModGhpcywgdGhpcywgdmVjdG9yKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgcm90YXRlWCh7XG4gICAgcmFkaWFucyxcbiAgICBvcmlnaW4gPSBPUklHSU5cbiAgfSkge1xuICAgIHZlYzMucm90YXRlWCh0aGlzLCB0aGlzLCBvcmlnaW4sIHJhZGlhbnMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICByb3RhdGVZKHtcbiAgICByYWRpYW5zLFxuICAgIG9yaWdpbiA9IE9SSUdJTlxuICB9KSB7XG4gICAgdmVjMy5yb3RhdGVZKHRoaXMsIHRoaXMsIG9yaWdpbiwgcmFkaWFucyk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHJvdGF0ZVooe1xuICAgIHJhZGlhbnMsXG4gICAgb3JpZ2luID0gT1JJR0lOXG4gIH0pIHtcbiAgICB2ZWMzLnJvdGF0ZVoodGhpcywgdGhpcywgb3JpZ2luLCByYWRpYW5zKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtKG1hdHJpeDQpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1Bc1BvaW50KG1hdHJpeDQpO1xuICB9XG5cbiAgdHJhbnNmb3JtQXNQb2ludChtYXRyaXg0KSB7XG4gICAgdmVjMy50cmFuc2Zvcm1NYXQ0KHRoaXMsIHRoaXMsIG1hdHJpeDQpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1Bc1ZlY3RvcihtYXRyaXg0KSB7XG4gICAgdmVjM190cmFuc2Zvcm1NYXQ0QXNWZWN0b3IodGhpcywgdGhpcywgbWF0cml4NCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MyhtYXRyaXgzKSB7XG4gICAgdmVjMy50cmFuc2Zvcm1NYXQzKHRoaXMsIHRoaXMsIG1hdHJpeDMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1CeU1hdHJpeDIobWF0cml4Mikge1xuICAgIHZlYzNfdHJhbnNmb3JtTWF0Mih0aGlzLCB0aGlzLCBtYXRyaXgyKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlRdWF0ZXJuaW9uKHF1YXRlcm5pb24pIHtcbiAgICB2ZWMzLnRyYW5zZm9ybVF1YXQodGhpcywgdGhpcywgcXVhdGVybmlvbik7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12ZWN0b3IzLmpzLm1hcCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9iYXNlL3ZlY3Rvcic7XG5pbXBvcnQgeyBjb25maWcsIGlzQXJyYXkgfSBmcm9tICcuLi9saWIvY29tbW9uJztcbmltcG9ydCB7IGNoZWNrTnVtYmVyIH0gZnJvbSAnLi4vbGliL3ZhbGlkYXRvcnMnO1xuaW1wb3J0ICogYXMgdmVjNCBmcm9tICdnbC1tYXRyaXgvdmVjMyc7XG5pbXBvcnQgeyB2ZWM0X3RyYW5zZm9ybU1hdDIsIHZlYzRfdHJhbnNmb3JtTWF0MyB9IGZyb20gJy4uL2xpYi9nbC1tYXRyaXgtZXh0cmFzJztcbmxldCBaRVJPO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yNCBleHRlbmRzIFZlY3RvciB7XG4gIHN0YXRpYyBnZXQgWkVSTygpIHtcbiAgICBpZiAoIVpFUk8pIHtcbiAgICAgIFpFUk8gPSBuZXcgVmVjdG9yNCgwLCAwLCAwLCAwKTtcbiAgICAgIE9iamVjdC5mcmVlemUoWkVSTyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFpFUk87XG4gIH1cblxuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHogPSAwLCB3ID0gMCkge1xuICAgIHN1cGVyKC0wLCAtMCwgLTAsIC0wKTtcblxuICAgIGlmIChpc0FycmF5KHgpICYmIGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuY29weSh4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbmZpZy5kZWJ1Zykge1xuICAgICAgICBjaGVja051bWJlcih4KTtcbiAgICAgICAgY2hlY2tOdW1iZXIoeSk7XG4gICAgICAgIGNoZWNrTnVtYmVyKHopO1xuICAgICAgICBjaGVja051bWJlcih3KTtcbiAgICAgIH1cblxuICAgICAgdGhpc1swXSA9IHg7XG4gICAgICB0aGlzWzFdID0geTtcbiAgICAgIHRoaXNbMl0gPSB6O1xuICAgICAgdGhpc1szXSA9IHc7XG4gICAgfVxuICB9XG5cbiAgc2V0KHgsIHksIHosIHcpIHtcbiAgICB0aGlzWzBdID0geDtcbiAgICB0aGlzWzFdID0geTtcbiAgICB0aGlzWzJdID0gejtcbiAgICB0aGlzWzNdID0gdztcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgY29weShhcnJheSkge1xuICAgIHRoaXNbMF0gPSBhcnJheVswXTtcbiAgICB0aGlzWzFdID0gYXJyYXlbMV07XG4gICAgdGhpc1syXSA9IGFycmF5WzJdO1xuICAgIHRoaXNbM10gPSBhcnJheVszXTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgZnJvbU9iamVjdChvYmplY3QpIHtcbiAgICBpZiAoY29uZmlnLmRlYnVnKSB7XG4gICAgICBjaGVja051bWJlcihvYmplY3QueCk7XG4gICAgICBjaGVja051bWJlcihvYmplY3QueSk7XG4gICAgICBjaGVja051bWJlcihvYmplY3Queik7XG4gICAgICBjaGVja051bWJlcihvYmplY3Qudyk7XG4gICAgfVxuXG4gICAgdGhpc1swXSA9IG9iamVjdC54O1xuICAgIHRoaXNbMV0gPSBvYmplY3QueTtcbiAgICB0aGlzWzJdID0gb2JqZWN0Lno7XG4gICAgdGhpc1szXSA9IG9iamVjdC53O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9PYmplY3Qob2JqZWN0KSB7XG4gICAgb2JqZWN0LnggPSB0aGlzWzBdO1xuICAgIG9iamVjdC55ID0gdGhpc1sxXTtcbiAgICBvYmplY3QueiA9IHRoaXNbMl07XG4gICAgb2JqZWN0LncgPSB0aGlzWzNdO1xuICAgIHJldHVybiBvYmplY3Q7XG4gIH1cblxuICBnZXQgRUxFTUVOVFMoKSB7XG4gICAgcmV0dXJuIDQ7XG4gIH1cblxuICBnZXQgeigpIHtcbiAgICByZXR1cm4gdGhpc1syXTtcbiAgfVxuXG4gIHNldCB6KHZhbHVlKSB7XG4gICAgdGhpc1syXSA9IGNoZWNrTnVtYmVyKHZhbHVlKTtcbiAgfVxuXG4gIGdldCB3KCkge1xuICAgIHJldHVybiB0aGlzWzNdO1xuICB9XG5cbiAgc2V0IHcodmFsdWUpIHtcbiAgICB0aGlzWzNdID0gY2hlY2tOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgdHJhbnNmb3JtKG1hdHJpeDQpIHtcbiAgICB2ZWM0LnRyYW5zZm9ybU1hdDQodGhpcywgdGhpcywgbWF0cml4NCk7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIHRyYW5zZm9ybUJ5TWF0cml4MyhtYXRyaXgzKSB7XG4gICAgdmVjNF90cmFuc2Zvcm1NYXQzKHRoaXMsIHRoaXMsIG1hdHJpeDMpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1CeU1hdHJpeDIobWF0cml4Mikge1xuICAgIHZlYzRfdHJhbnNmb3JtTWF0Mih0aGlzLCB0aGlzLCBtYXRyaXgyKTtcbiAgICByZXR1cm4gdGhpcy5jaGVjaygpO1xuICB9XG5cbiAgdHJhbnNmb3JtQnlRdWF0ZXJuaW9uKHF1YXRlcm5pb24pIHtcbiAgICB2ZWM0LnRyYW5zZm9ybVF1YXQodGhpcywgdGhpcywgcXVhdGVybmlvbik7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKTtcbiAgfVxuXG4gIGFwcGx5TWF0cml4NChtKSB7XG4gICAgbS50cmFuc2Zvcm0odGhpcywgdGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dmVjdG9yNC5qcy5tYXAiLCJleHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvcjIgfSBmcm9tICcuL2NsYXNzZXMvdmVjdG9yMic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvcjMgfSBmcm9tICcuL2NsYXNzZXMvdmVjdG9yMyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZlY3RvcjQgfSBmcm9tICcuL2NsYXNzZXMvdmVjdG9yNCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeDMgfSBmcm9tICcuL2NsYXNzZXMvbWF0cml4Myc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hdHJpeDQgfSBmcm9tICcuL2NsYXNzZXMvbWF0cml4NCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFF1YXRlcm5pb24gfSBmcm9tICcuL2NsYXNzZXMvcXVhdGVybmlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNwaGVyaWNhbENvb3JkaW5hdGVzIH0gZnJvbSAnLi9jbGFzc2VzL3NwaGVyaWNhbC1jb29yZGluYXRlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBvc2UgfSBmcm9tICcuL2NsYXNzZXMvcG9zZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEV1bGVyIH0gZnJvbSAnLi9jbGFzc2VzL2V1bGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgX01hdGhVdGlscyB9IGZyb20gJy4vbGliL21hdGgtdXRpbHMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NlcnQgfSBmcm9tICcuL2xpYi9hc3NlcnQnO1xuZXhwb3J0IHsgY29uZmlnLCBjb25maWd1cmUsIGZvcm1hdFZhbHVlLCBpc0FycmF5LCBjbG9uZSwgZXF1YWxzLCBleGFjdEVxdWFscywgdG9SYWRpYW5zLCB0b0RlZ3JlZXMsIHJhZGlhbnMsIGRlZ3JlZXMsIHNpbiwgY29zLCB0YW4sIGFzaW4sIGFjb3MsIGF0YW4sIGNsYW1wLCBsZXJwLCB3aXRoRXBzaWxvbiB9IGZyb20gJy4vbGliL2NvbW1vbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIF9TcGhlcmljYWxDb29yZGluYXRlcyB9IGZyb20gJy4vY2xhc3Nlcy9zcGhlcmljYWwtY29vcmRpbmF0ZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBfUG9zZSB9IGZyb20gJy4vY2xhc3Nlcy9wb3NlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgX0V1bGVyIH0gZnJvbSAnLi9jbGFzc2VzL2V1bGVyJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJtYXRoLmdsIGFzc2VydGlvbiBcIi5jb25jYXQobWVzc2FnZSkpO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hc3NlcnQuanMubWFwIiwiaW1wb3J0IGFzc2VydCBmcm9tICcuL2Fzc2VydCc7XG5jb25zdCBSQURJQU5TX1RPX0RFR1JFRVMgPSAxIC8gTWF0aC5QSSAqIDE4MDtcbmNvbnN0IERFR1JFRVNfVE9fUkFESUFOUyA9IDEgLyAxODAgKiBNYXRoLlBJO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgRVBTSUxPTjogMWUtMTIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgcHJlY2lzaW9uOiA0LFxuICBwcmludFR5cGVzOiBmYWxzZSxcbiAgcHJpbnREZWdyZWVzOiBmYWxzZSxcbiAgcHJpbnRSb3dNYWpvcjogdHJ1ZVxufTtcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUob3B0aW9ucykge1xuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgYXNzZXJ0KGtleSBpbiBjb25maWcpO1xuICAgIGNvbmZpZ1trZXldID0gb3B0aW9uc1trZXldO1xuICB9XG5cbiAgcmV0dXJuIGNvbmZpZztcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRWYWx1ZSh2YWx1ZSwge1xuICBwcmVjaXNpb24gPSBjb25maWcucHJlY2lzaW9uXG59ID0ge30pIHtcbiAgdmFsdWUgPSByb3VuZCh2YWx1ZSk7XG4gIHJldHVybiBcIlwiLmNvbmNhdChwYXJzZUZsb2F0KHZhbHVlLnRvUHJlY2lzaW9uKHByZWNpc2lvbikpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSB8fCBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRhVmlldyk7XG59XG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYXJyYXkpIHtcbiAgcmV0dXJuICdjbG9uZScgaW4gYXJyYXkgPyBhcnJheS5jbG9uZSgpIDogYXJyYXkuc2xpY2UoKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbnMoZGVncmVlcykge1xuICByZXR1cm4gcmFkaWFucyhkZWdyZWVzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0RlZ3JlZXMocmFkaWFucykge1xuICByZXR1cm4gZGVncmVlcyhyYWRpYW5zKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByYWRpYW5zKGRlZ3JlZXMsIHJlc3VsdCkge1xuICByZXR1cm4gbWFwKGRlZ3JlZXMsIGRlZ3JlZXMgPT4gZGVncmVlcyAqIERFR1JFRVNfVE9fUkFESUFOUywgcmVzdWx0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWdyZWVzKHJhZGlhbnMsIHJlc3VsdCkge1xuICByZXR1cm4gbWFwKHJhZGlhbnMsIHJhZGlhbnMgPT4gcmFkaWFucyAqIFJBRElBTlNfVE9fREVHUkVFUywgcmVzdWx0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaW4ocmFkaWFucywgcmVzdWx0KSB7XG4gIHJldHVybiBtYXAocmFkaWFucywgYW5nbGUgPT4gTWF0aC5zaW4oYW5nbGUpLCByZXN1bHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvcyhyYWRpYW5zLCByZXN1bHQpIHtcbiAgcmV0dXJuIG1hcChyYWRpYW5zLCBhbmdsZSA9PiBNYXRoLmNvcyhhbmdsZSksIHJlc3VsdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gdGFuKHJhZGlhbnMsIHJlc3VsdCkge1xuICByZXR1cm4gbWFwKHJhZGlhbnMsIGFuZ2xlID0+IE1hdGgudGFuKGFuZ2xlKSwgcmVzdWx0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhc2luKHJhZGlhbnMsIHJlc3VsdCkge1xuICByZXR1cm4gbWFwKHJhZGlhbnMsIGFuZ2xlID0+IE1hdGguYXNpbihhbmdsZSksIHJlc3VsdCk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWNvcyhyYWRpYW5zLCByZXN1bHQpIHtcbiAgcmV0dXJuIG1hcChyYWRpYW5zLCBhbmdsZSA9PiBNYXRoLmFjb3MoYW5nbGUpLCByZXN1bHQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGF0YW4ocmFkaWFucywgcmVzdWx0KSB7XG4gIHJldHVybiBtYXAocmFkaWFucywgYW5nbGUgPT4gTWF0aC5hdGFuKGFuZ2xlKSwgcmVzdWx0KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIG1hcCh2YWx1ZSwgdmFsdWUgPT4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHZhbHVlKSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCkge1xuICBpZiAoaXNBcnJheShhKSkge1xuICAgIHJldHVybiBhLm1hcCgoYWksIGkpID0+IGxlcnAoYWksIGJbaV0sIHQpKTtcbiAgfVxuXG4gIHJldHVybiB0ICogYiArICgxIC0gdCkgKiBhO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiLCBlcHNpbG9uKSB7XG4gIGNvbnN0IG9sZEVwc2lsb24gPSBjb25maWcuRVBTSUxPTjtcblxuICBpZiAoZXBzaWxvbikge1xuICAgIGNvbmZpZy5FUFNJTE9OID0gZXBzaWxvbjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KGEpICYmIGlzQXJyYXkoYikpIHtcbiAgICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKCFlcXVhbHMoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGEgJiYgYS5lcXVhbHMpIHtcbiAgICAgIHJldHVybiBhLmVxdWFscyhiKTtcbiAgICB9XG5cbiAgICBpZiAoYiAmJiBiLmVxdWFscykge1xuICAgICAgcmV0dXJuIGIuZXF1YWxzKGEpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGIgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpIDw9IGNvbmZpZy5FUFNJTE9OICogTWF0aC5tYXgoMSwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZmluYWxseSB7XG4gICAgY29uZmlnLkVQU0lMT04gPSBvbGRFcHNpbG9uO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZXhhY3RFcXVhbHMoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGEgJiYgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmIGIgJiYgdHlwZW9mIGIgPT09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoYS5leGFjdEVxdWFscykge1xuICAgICAgcmV0dXJuIGEuZXhhY3RFcXVhbHMoYik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGlzQXJyYXkoYSkgJiYgaXNBcnJheShiKSkge1xuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmICghZXhhY3RFcXVhbHMoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhFcHNpbG9uKGVwc2lsb24sIGZ1bmMpIHtcbiAgY29uc3Qgb2xkUHJlY2lzaW9uID0gY29uZmlnLkVQU0lMT047XG4gIGNvbmZpZy5FUFNJTE9OID0gZXBzaWxvbjtcbiAgbGV0IHZhbHVlO1xuXG4gIHRyeSB7XG4gICAgdmFsdWUgPSBmdW5jKCk7XG4gIH0gZmluYWxseSB7XG4gICAgY29uZmlnLkVQU0lMT04gPSBvbGRQcmVjaXNpb247XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHJvdW5kKHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gY29uZmlnLkVQU0lMT04pICogY29uZmlnLkVQU0lMT047XG59XG5cbmZ1bmN0aW9uIGR1cGxpY2F0ZUFycmF5KGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5jbG9uZSA/IGFycmF5LmNsb25lKCkgOiBuZXcgQXJyYXkoYXJyYXkubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gbWFwKHZhbHVlLCBmdW5jLCByZXN1bHQpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgY29uc3QgYXJyYXkgPSB2YWx1ZTtcbiAgICByZXN1bHQgPSByZXN1bHQgfHwgZHVwbGljYXRlQXJyYXkoYXJyYXkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoICYmIGkgPCBhcnJheS5sZW5ndGg7ICsraSkge1xuICAgICAgcmVzdWx0W2ldID0gZnVuYyh2YWx1ZVtpXSwgaSwgcmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmModmFsdWUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbW9uLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiB2ZWMyX3RyYW5zZm9ybU1hdDRBc1ZlY3RvcihvdXQsIGEsIG0pIHtcbiAgY29uc3QgeCA9IGFbMF07XG4gIGNvbnN0IHkgPSBhWzFdO1xuICBjb25zdCB3ID0gbVszXSAqIHggKyBtWzddICogeSB8fCAxLjA7XG4gIG91dFswXSA9IChtWzBdICogeCArIG1bNF0gKiB5KSAvIHc7XG4gIG91dFsxXSA9IChtWzFdICogeCArIG1bNV0gKiB5KSAvIHc7XG4gIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmVjM190cmFuc2Zvcm1NYXQ0QXNWZWN0b3Iob3V0LCBhLCBtKSB7XG4gIGNvbnN0IHggPSBhWzBdO1xuICBjb25zdCB5ID0gYVsxXTtcbiAgY29uc3QgeiA9IGFbMl07XG4gIGNvbnN0IHcgPSBtWzNdICogeCArIG1bN10gKiB5ICsgbVsxMV0gKiB6IHx8IDEuMDtcbiAgb3V0WzBdID0gKG1bMF0gKiB4ICsgbVs0XSAqIHkgKyBtWzhdICogeikgLyB3O1xuICBvdXRbMV0gPSAobVsxXSAqIHggKyBtWzVdICogeSArIG1bOV0gKiB6KSAvIHc7XG4gIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6KSAvIHc7XG4gIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmVjM190cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICBjb25zdCB4ID0gYVswXTtcbiAgY29uc3QgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHk7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHk7XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmVjNF90cmFuc2Zvcm1NYXQyKG91dCwgYSwgbSkge1xuICBjb25zdCB4ID0gYVswXTtcbiAgY29uc3QgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHk7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHk7XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG5leHBvcnQgZnVuY3Rpb24gdmVjNF90cmFuc2Zvcm1NYXQzKG91dCwgYSwgbSkge1xuICBjb25zdCB4ID0gYVswXTtcbiAgY29uc3QgeSA9IGFbMV07XG4gIGNvbnN0IHogPSBhWzJdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bM10gKiB5ICsgbVs2XSAqIHo7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs0XSAqIHkgKyBtWzddICogejtcbiAgb3V0WzJdID0gbVsyXSAqIHggKyBtWzVdICogeSArIG1bOF0gKiB6O1xuICBvdXRbM10gPSBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2wtbWF0cml4LWV4dHJhcy5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCB7XG4gIEVQU0lMT04xOiAxZS0xLFxuICBFUFNJTE9OMjogMWUtMixcbiAgRVBTSUxPTjM6IDFlLTMsXG4gIEVQU0lMT040OiAxZS00LFxuICBFUFNJTE9ONTogMWUtNSxcbiAgRVBTSUxPTjY6IDFlLTYsXG4gIEVQU0lMT043OiAxZS03LFxuICBFUFNJTE9OODogMWUtOCxcbiAgRVBTSUxPTjk6IDFlLTksXG4gIEVQU0lMT04xMDogMWUtMTAsXG4gIEVQU0lMT04xMTogMWUtMTEsXG4gIEVQU0lMT04xMjogMWUtMTIsXG4gIEVQU0lMT04xMzogMWUtMTMsXG4gIEVQU0lMT04xNDogMWUtMTQsXG4gIEVQU0lMT04xNTogMWUtMTUsXG4gIEVQU0lMT04xNjogMWUtMTYsXG4gIEVQU0lMT04xNzogMWUtMTcsXG4gIEVQU0lMT04xODogMWUtMTgsXG4gIEVQU0lMT04xOTogMWUtMTksXG4gIEVQU0lMT04yMDogMWUtMjAsXG4gIFBJX09WRVJfVFdPOiBNYXRoLlBJIC8gMixcbiAgUElfT1ZFUl9GT1VSOiBNYXRoLlBJIC8gNCxcbiAgUElfT1ZFUl9TSVg6IE1hdGguUEkgLyA2LFxuICBUV09fUEk6IE1hdGguUEkgKiAyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWF0aC11dGlscy5qcy5tYXAiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbW1vbic7XG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVWZWN0b3IodiwgbGVuZ3RoKSB7XG4gIGlmICh2Lmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2Lmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodltpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja051bWJlcih2YWx1ZSkge1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIG51bWJlciBcIi5jb25jYXQodmFsdWUpKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1ZlY3Rvcih2LCBsZW5ndGgsIGNhbGxlck5hbWUgPSAnJykge1xuICBpZiAoY29uZmlnLmRlYnVnICYmICF2YWxpZGF0ZVZlY3Rvcih2LCBsZW5ndGgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwibWF0aC5nbDogXCIuY29uY2F0KGNhbGxlck5hbWUsIFwiIHNvbWUgZmllbGRzIHNldCB0byBpbnZhbGlkIG51bWJlcnMnXCIpKTtcbiAgfVxuXG4gIHJldHVybiB2O1xufVxuY29uc3QgbWFwID0ge307XG5leHBvcnQgZnVuY3Rpb24gZGVwcmVjYXRlZChtZXRob2QsIHZlcnNpb24pIHtcbiAgaWYgKCFtYXBbbWV0aG9kXSkge1xuICAgIG1hcFttZXRob2RdID0gdHJ1ZTtcbiAgICBjb25zb2xlLndhcm4oXCJcIi5jb25jYXQobWV0aG9kLCBcIiBoYXMgYmVlbiByZW1vdmVkIGluIHZlcnNpb24gXCIpLmNvbmNhdCh2ZXJzaW9uLCBcIiwgc2VlIHVwZ3JhZGUgZ3VpZGUgZm9yIG1vcmUgaW5mb3JtYXRpb25cIikpO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD12YWxpZGF0b3JzLmpzLm1hcCIsIi8qKlxuICogQ29tbW9uIHV0aWxpdGllc1xuICogQG1vZHVsZSBnbE1hdHJpeFxuICovXG4vLyBDb25maWd1cmF0aW9uIENvbnN0YW50c1xuZXhwb3J0IHZhciBFUFNJTE9OID0gMC4wMDAwMDE7XG5leHBvcnQgdmFyIEFSUkFZX1RZUEUgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyA/IEZsb2F0MzJBcnJheSA6IEFycmF5O1xuZXhwb3J0IHZhciBSQU5ET00gPSBNYXRoLnJhbmRvbTtcbi8qKlxuICogU2V0cyB0aGUgdHlwZSBvZiBhcnJheSB1c2VkIHdoZW4gY3JlYXRpbmcgbmV3IHZlY3RvcnMgYW5kIG1hdHJpY2VzXG4gKlxuICogQHBhcmFtIHtGbG9hdDMyQXJyYXlDb25zdHJ1Y3RvciB8IEFycmF5Q29uc3RydWN0b3J9IHR5cGUgQXJyYXkgdHlwZSwgc3VjaCBhcyBGbG9hdDMyQXJyYXkgb3IgQXJyYXlcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TWF0cml4QXJyYXlUeXBlKHR5cGUpIHtcbiAgQVJSQVlfVFlQRSA9IHR5cGU7XG59XG52YXIgZGVncmVlID0gTWF0aC5QSSAvIDE4MDtcbi8qKlxuICogQ29udmVydCBEZWdyZWUgVG8gUmFkaWFuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgQW5nbGUgaW4gRGVncmVlc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JhZGlhbihhKSB7XG4gIHJldHVybiBhICogZGVncmVlO1xufVxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCB0aGUgYXJndW1lbnRzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSB2YWx1ZSwgd2l0aGluIGFuIGFic29sdXRlXG4gKiBvciByZWxhdGl2ZSB0b2xlcmFuY2Ugb2YgZ2xNYXRyaXguRVBTSUxPTiAoYW4gYWJzb2x1dGUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIHZhbHVlcyBsZXNzXG4gKiB0aGFuIG9yIGVxdWFsIHRvIDEuMCwgYW5kIGEgcmVsYXRpdmUgdG9sZXJhbmNlIGlzIHVzZWQgZm9yIGxhcmdlciB2YWx1ZXMpXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IG51bWJlciB0byB0ZXN0LlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCBudW1iZXIgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBudW1iZXJzIGFyZSBhcHByb3hpbWF0ZWx5IGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYikgPD0gRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYSksIE1hdGguYWJzKGIpKTtcbn1cbmlmICghTWF0aC5oeXBvdCkgTWF0aC5oeXBvdCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHkgPSAwLFxuICAgICAgaSA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgd2hpbGUgKGktLSkge1xuICAgIHkgKz0gYXJndW1lbnRzW2ldICogYXJndW1lbnRzW2ldO1xuICB9XG5cbiAgcmV0dXJuIE1hdGguc3FydCh5KTtcbn07IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcbiAqIDN4MyBNYXRyaXhcbiAqIEBtb2R1bGUgbWF0M1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQzXG4gKlxuICogQHJldHVybnMge21hdDN9IGEgbmV3IDN4MyBtYXRyaXhcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gICAgb3V0WzVdID0gMDtcbiAgICBvdXRbNl0gPSAwO1xuICAgIG91dFs3XSA9IDA7XG4gIH1cblxuICBvdXRbMF0gPSAxO1xuICBvdXRbNF0gPSAxO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDb3BpZXMgdGhlIHVwcGVyLWxlZnQgM3gzIHZhbHVlcyBpbnRvIHRoZSBnaXZlbiBtYXQzLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgM3gzIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgICB0aGUgc291cmNlIDR4NCBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDQob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbNF07XG4gIG91dFs0XSA9IGFbNV07XG4gIG91dFs1XSA9IGFbNl07XG4gIG91dFs2XSA9IGFbOF07XG4gIG91dFs3XSA9IGFbOV07XG4gIG91dFs4XSA9IGFbMTBdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG1hdDMgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSBtYXRyaXggdG8gY2xvbmVcbiAqIEByZXR1cm5zIHttYXQzfSBhIG5ldyAzeDMgbWF0cml4XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDkpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICBvdXRbM10gPSBhWzNdO1xuICBvdXRbNF0gPSBhWzRdO1xuICBvdXRbNV0gPSBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgbWF0MyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENyZWF0ZSBhIG5ldyBtYXQzIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDAgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDEgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggMSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMDIgQ29tcG9uZW50IGluIGNvbHVtbiAwLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTAgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTEgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMTIgQ29tcG9uZW50IGluIGNvbHVtbiAxLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggNSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjAgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMCBwb3NpdGlvbiAoaW5kZXggNilcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjEgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMSBwb3NpdGlvbiAoaW5kZXggNylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjIgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggOClcbiAqIEByZXR1cm5zIHttYXQzfSBBIG5ldyBtYXQzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMobTAwLCBtMDEsIG0wMiwgbTEwLCBtMTEsIG0xMiwgbTIwLCBtMjEsIG0yMikge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoOSk7XG4gIG91dFswXSA9IG0wMDtcbiAgb3V0WzFdID0gbTAxO1xuICBvdXRbMl0gPSBtMDI7XG4gIG91dFszXSA9IG0xMDtcbiAgb3V0WzRdID0gbTExO1xuICBvdXRbNV0gPSBtMTI7XG4gIG91dFs2XSA9IG0yMDtcbiAgb3V0WzddID0gbTIxO1xuICBvdXRbOF0gPSBtMjI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIG1hdDMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge051bWJlcn0gbTAwIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDAgcG9zaXRpb24gKGluZGV4IDApXG4gKiBAcGFyYW0ge051bWJlcn0gbTAxIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDEgcG9zaXRpb24gKGluZGV4IDEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTAyIENvbXBvbmVudCBpbiBjb2x1bW4gMCwgcm93IDIgcG9zaXRpb24gKGluZGV4IDIpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEwIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDAgcG9zaXRpb24gKGluZGV4IDMpXG4gKiBAcGFyYW0ge051bWJlcn0gbTExIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDEgcG9zaXRpb24gKGluZGV4IDQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTEyIENvbXBvbmVudCBpbiBjb2x1bW4gMSwgcm93IDIgcG9zaXRpb24gKGluZGV4IDUpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIwIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDAgcG9zaXRpb24gKGluZGV4IDYpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIxIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDEgcG9zaXRpb24gKGluZGV4IDcpXG4gKiBAcGFyYW0ge051bWJlcn0gbTIyIENvbXBvbmVudCBpbiBjb2x1bW4gMiwgcm93IDIgcG9zaXRpb24gKGluZGV4IDgpXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIG0wMCwgbTAxLCBtMDIsIG0xMCwgbTExLCBtMTIsIG0yMCwgbTIxLCBtMjIpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTEwO1xuICBvdXRbNF0gPSBtMTE7XG4gIG91dFs1XSA9IG0xMjtcbiAgb3V0WzZdID0gbTIwO1xuICBvdXRbN10gPSBtMjE7XG4gIG91dFs4XSA9IG0yMjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogU2V0IGEgbWF0MyB0byB0aGUgaWRlbnRpdHkgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkob3V0KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDE7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFRyYW5zcG9zZSB0aGUgdmFsdWVzIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0LCBhKSB7XG4gIC8vIElmIHdlIGFyZSB0cmFuc3Bvc2luZyBvdXJzZWx2ZXMgd2UgY2FuIHNraXAgYSBmZXcgc3RlcHMgYnV0IGhhdmUgdG8gY2FjaGUgc29tZSB2YWx1ZXNcbiAgaWYgKG91dCA9PT0gYSkge1xuICAgIHZhciBhMDEgPSBhWzFdLFxuICAgICAgICBhMDIgPSBhWzJdLFxuICAgICAgICBhMTIgPSBhWzVdO1xuICAgIG91dFsxXSA9IGFbM107XG4gICAgb3V0WzJdID0gYVs2XTtcbiAgICBvdXRbM10gPSBhMDE7XG4gICAgb3V0WzVdID0gYVs3XTtcbiAgICBvdXRbNl0gPSBhMDI7XG4gICAgb3V0WzddID0gYTEyO1xuICB9IGVsc2Uge1xuICAgIG91dFswXSA9IGFbMF07XG4gICAgb3V0WzFdID0gYVszXTtcbiAgICBvdXRbMl0gPSBhWzZdO1xuICAgIG91dFszXSA9IGFbMV07XG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzddO1xuICAgIG91dFs2XSA9IGFbMl07XG4gICAgb3V0WzddID0gYVs1XTtcbiAgICBvdXRbOF0gPSBhWzhdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdO1xuICB2YXIgYjAxID0gYTIyICogYTExIC0gYTEyICogYTIxO1xuICB2YXIgYjExID0gLWEyMiAqIGExMCArIGExMiAqIGEyMDtcbiAgdmFyIGIyMSA9IGEyMSAqIGExMCAtIGExMSAqIGEyMDsgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuXG4gIHZhciBkZXQgPSBhMDAgKiBiMDEgKyBhMDEgKiBiMTEgKyBhMDIgKiBiMjE7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRldCA9IDEuMCAvIGRldDtcbiAgb3V0WzBdID0gYjAxICogZGV0O1xuICBvdXRbMV0gPSAoLWEyMiAqIGEwMSArIGEwMiAqIGEyMSkgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTIgKiBhMDEgLSBhMDIgKiBhMTEpICogZGV0O1xuICBvdXRbM10gPSBiMTEgKiBkZXQ7XG4gIG91dFs0XSA9IChhMjIgKiBhMDAgLSBhMDIgKiBhMjApICogZGV0O1xuICBvdXRbNV0gPSAoLWExMiAqIGEwMCArIGEwMiAqIGExMCkgKiBkZXQ7XG4gIG91dFs2XSA9IGIyMSAqIGRldDtcbiAgb3V0WzddID0gKC1hMjEgKiBhMDAgKyBhMDEgKiBhMjApICogZGV0O1xuICBvdXRbOF0gPSAoYTExICogYTAwIC0gYTAxICogYTEwKSAqIGRldDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgYWRqdWdhdGUgb2YgYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkam9pbnQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl07XG4gIHZhciBhMTAgPSBhWzNdLFxuICAgICAgYTExID0gYVs0XSxcbiAgICAgIGExMiA9IGFbNV07XG4gIHZhciBhMjAgPSBhWzZdLFxuICAgICAgYTIxID0gYVs3XSxcbiAgICAgIGEyMiA9IGFbOF07XG4gIG91dFswXSA9IGExMSAqIGEyMiAtIGExMiAqIGEyMTtcbiAgb3V0WzFdID0gYTAyICogYTIxIC0gYTAxICogYTIyO1xuICBvdXRbMl0gPSBhMDEgKiBhMTIgLSBhMDIgKiBhMTE7XG4gIG91dFszXSA9IGExMiAqIGEyMCAtIGExMCAqIGEyMjtcbiAgb3V0WzRdID0gYTAwICogYTIyIC0gYTAyICogYTIwO1xuICBvdXRbNV0gPSBhMDIgKiBhMTAgLSBhMDAgKiBhMTI7XG4gIG91dFs2XSA9IGExMCAqIGEyMSAtIGExMSAqIGEyMDtcbiAgb3V0WzddID0gYTAxICogYTIwIC0gYTAwICogYTIxO1xuICBvdXRbOF0gPSBhMDAgKiBhMTEgLSBhMDEgKiBhMTA7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRldGVybWluYW50IG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkZXRlcm1pbmFudCBvZiBhXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRldGVybWluYW50KGEpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXTtcbiAgdmFyIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XTtcbiAgdmFyIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XTtcbiAgcmV0dXJuIGEwMCAqIChhMjIgKiBhMTEgLSBhMTIgKiBhMjEpICsgYTAxICogKC1hMjIgKiBhMTAgKyBhMTIgKiBhMjApICsgYTAyICogKGEyMSAqIGExMCAtIGExMSAqIGEyMCk7XG59XG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIG1hdDMnc1xuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdO1xuICB2YXIgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdO1xuICB2YXIgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdO1xuICB2YXIgYjAwID0gYlswXSxcbiAgICAgIGIwMSA9IGJbMV0sXG4gICAgICBiMDIgPSBiWzJdO1xuICB2YXIgYjEwID0gYlszXSxcbiAgICAgIGIxMSA9IGJbNF0sXG4gICAgICBiMTIgPSBiWzVdO1xuICB2YXIgYjIwID0gYls2XSxcbiAgICAgIGIyMSA9IGJbN10sXG4gICAgICBiMjIgPSBiWzhdO1xuICBvdXRbMF0gPSBiMDAgKiBhMDAgKyBiMDEgKiBhMTAgKyBiMDIgKiBhMjA7XG4gIG91dFsxXSA9IGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMTtcbiAgb3V0WzJdID0gYjAwICogYTAyICsgYjAxICogYTEyICsgYjAyICogYTIyO1xuICBvdXRbM10gPSBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjA7XG4gIG91dFs0XSA9IGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMTtcbiAgb3V0WzVdID0gYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyO1xuICBvdXRbNl0gPSBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjA7XG4gIG91dFs3XSA9IGIyMCAqIGEwMSArIGIyMSAqIGExMSArIGIyMiAqIGEyMTtcbiAgb3V0WzhdID0gYjIwICogYTAyICsgYjIxICogYTEyICsgYjIyICogYTIyO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQzIGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTEwID0gYVszXSxcbiAgICAgIGExMSA9IGFbNF0sXG4gICAgICBhMTIgPSBhWzVdLFxuICAgICAgYTIwID0gYVs2XSxcbiAgICAgIGEyMSA9IGFbN10sXG4gICAgICBhMjIgPSBhWzhdLFxuICAgICAgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXTtcbiAgb3V0WzBdID0gYTAwO1xuICBvdXRbMV0gPSBhMDE7XG4gIG91dFsyXSA9IGEwMjtcbiAgb3V0WzNdID0gYTEwO1xuICBvdXRbNF0gPSBhMTE7XG4gIG91dFs1XSA9IGExMjtcbiAgb3V0WzZdID0geCAqIGEwMCArIHkgKiBhMTAgKyBhMjA7XG4gIG91dFs3XSA9IHggKiBhMDEgKyB5ICogYTExICsgYTIxO1xuICBvdXRbOF0gPSB4ICogYTAyICsgeSAqIGExMiArIGEyMjtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUm90YXRlcyBhIG1hdDMgYnkgdGhlIGdpdmVuIGFuZ2xlXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGExMCA9IGFbM10sXG4gICAgICBhMTEgPSBhWzRdLFxuICAgICAgYTEyID0gYVs1XSxcbiAgICAgIGEyMCA9IGFbNl0sXG4gICAgICBhMjEgPSBhWzddLFxuICAgICAgYTIyID0gYVs4XSxcbiAgICAgIHMgPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGMgKiBhMDAgKyBzICogYTEwO1xuICBvdXRbMV0gPSBjICogYTAxICsgcyAqIGExMTtcbiAgb3V0WzJdID0gYyAqIGEwMiArIHMgKiBhMTI7XG4gIG91dFszXSA9IGMgKiBhMTAgLSBzICogYTAwO1xuICBvdXRbNF0gPSBjICogYTExIC0gcyAqIGEwMTtcbiAgb3V0WzVdID0gYyAqIGExMiAtIHMgKiBhMDI7XG4gIG91dFs2XSA9IGEyMDtcbiAgb3V0WzddID0gYTIxO1xuICBvdXRbOF0gPSBhMjI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFNjYWxlcyB0aGUgbWF0MyBieSB0aGUgZGltZW5zaW9ucyBpbiB0aGUgZ2l2ZW4gdmVjMlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IHYgdGhlIHZlYzIgdG8gc2NhbGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDN9IG91dFxuICoqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCB2KSB7XG4gIHZhciB4ID0gdlswXSxcbiAgICAgIHkgPSB2WzFdO1xuICBvdXRbMF0gPSB4ICogYVswXTtcbiAgb3V0WzFdID0geCAqIGFbMV07XG4gIG91dFsyXSA9IHggKiBhWzJdO1xuICBvdXRbM10gPSB5ICogYVszXTtcbiAgb3V0WzRdID0geSAqIGFbNF07XG4gIG91dFs1XSA9IHkgKiBhWzVdO1xuICBvdXRbNl0gPSBhWzZdO1xuICBvdXRbN10gPSBhWzddO1xuICBvdXRbOF0gPSBhWzhdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSB2ZWN0b3IgdHJhbnNsYXRpb25cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDMudHJhbnNsYXRlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21UcmFuc2xhdGlvbihvdXQsIHYpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gdlswXTtcbiAgb3V0WzddID0gdlsxXTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgZ2l2ZW4gYW5nbGVcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDMucm90YXRlKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGMgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSBzO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAtcztcbiAgb3V0WzRdID0gYztcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHNjYWxpbmdcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQzLmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDMuc2NhbGUoZGVzdCwgZGVzdCwgdmVjKTtcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gdiBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tU2NhbGluZyhvdXQsIHYpIHtcbiAgb3V0WzBdID0gdlswXTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gdlsxXTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgZnJvbSBhIG1hdDJkIGludG8gYSBtYXQzXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQyZH0gYSB0aGUgbWF0cml4IHRvIGNvcHlcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21NYXQyZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gYVsyXTtcbiAgb3V0WzRdID0gYVszXTtcbiAgb3V0WzVdID0gMDtcbiAgb3V0WzZdID0gYVs0XTtcbiAgb3V0WzddID0gYVs1XTtcbiAgb3V0WzhdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyBhIDN4MyBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IG1hdDMgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIFF1YXRlcm5pb24gdG8gY3JlYXRlIG1hdHJpeCBmcm9tXG4gKlxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdChvdXQsIHEpIHtcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB5eCA9IHkgKiB4MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgenggPSB6ICogeDI7XG4gIHZhciB6eSA9IHogKiB5MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICBvdXRbMF0gPSAxIC0geXkgLSB6ejtcbiAgb3V0WzNdID0geXggLSB3ejtcbiAgb3V0WzZdID0genggKyB3eTtcbiAgb3V0WzFdID0geXggKyB3ejtcbiAgb3V0WzRdID0gMSAtIHh4IC0geno7XG4gIG91dFs3XSA9IHp5IC0gd3g7XG4gIG91dFsyXSA9IHp4IC0gd3k7XG4gIG91dFs1XSA9IHp5ICsgd3g7XG4gIG91dFs4XSA9IDEgLSB4eCAtIHl5O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgM3gzIG5vcm1hbCBtYXRyaXggKHRyYW5zcG9zZSBpbnZlcnNlKSBmcm9tIHRoZSA0eDQgbWF0cml4XG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgbWF0MyByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgTWF0NCB0byBkZXJpdmUgdGhlIG5vcm1hbCBtYXRyaXggZnJvbVxuICpcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsRnJvbU1hdDQob3V0LCBhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgdmFyIGRldCA9IGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcblxuICBpZiAoIWRldCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZGV0ID0gMS4wIC8gZGV0O1xuICBvdXRbMF0gPSAoYTExICogYjExIC0gYTEyICogYjEwICsgYTEzICogYjA5KSAqIGRldDtcbiAgb3V0WzFdID0gKGExMiAqIGIwOCAtIGExMCAqIGIxMSAtIGExMyAqIGIwNykgKiBkZXQ7XG4gIG91dFsyXSA9IChhMTAgKiBiMTAgLSBhMTEgKiBiMDggKyBhMTMgKiBiMDYpICogZGV0O1xuICBvdXRbM10gPSAoYTAyICogYjEwIC0gYTAxICogYjExIC0gYTAzICogYjA5KSAqIGRldDtcbiAgb3V0WzRdID0gKGEwMCAqIGIxMSAtIGEwMiAqIGIwOCArIGEwMyAqIGIwNykgKiBkZXQ7XG4gIG91dFs1XSA9IChhMDEgKiBiMDggLSBhMDAgKiBiMTAgLSBhMDMgKiBiMDYpICogZGV0O1xuICBvdXRbNl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzddID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs4XSA9IChhMzAgKiBiMDQgLSBhMzEgKiBiMDIgKyBhMzMgKiBiMDApICogZGV0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBHZW5lcmF0ZXMgYSAyRCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHNcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCBtYXQzIGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGggV2lkdGggb2YgeW91ciBnbCBjb250ZXh0XG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiBnbCBjb250ZXh0XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3Rpb24ob3V0LCB3aWR0aCwgaGVpZ2h0KSB7XG4gIG91dFswXSA9IDIgLyB3aWR0aDtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gLTIgLyBoZWlnaHQ7XG4gIG91dFs1XSA9IDA7XG4gIG91dFs2XSA9IC0xO1xuICBvdXRbN10gPSAxO1xuICBvdXRbOF0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgbWF0M1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIG1hdHJpeCB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbWF0cml4XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcIm1hdDMoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIiwgXCIgKyBhWzNdICsgXCIsIFwiICsgYVs0XSArIFwiLCBcIiArIGFbNV0gKyBcIiwgXCIgKyBhWzZdICsgXCIsIFwiICsgYVs3XSArIFwiLCBcIiArIGFbOF0gKyBcIilcIjtcbn1cbi8qKlxuICogUmV0dXJucyBGcm9iZW5pdXMgbm9ybSBvZiBhIG1hdDNcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIGNhbGN1bGF0ZSBGcm9iZW5pdXMgbm9ybSBvZlxuICogQHJldHVybnMge051bWJlcn0gRnJvYmVuaXVzIG5vcm1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvYihhKSB7XG4gIHJldHVybiBNYXRoLmh5cG90KGFbMF0sIGFbMV0sIGFbMl0sIGFbM10sIGFbNF0sIGFbNV0sIGFbNl0sIGFbN10sIGFbOF0pO1xufVxuLyoqXG4gKiBBZGRzIHR3byBtYXQzJ3NcbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl07XG4gIG91dFszXSA9IGFbM10gKyBiWzNdO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XTtcbiAgb3V0WzVdID0gYVs1XSArIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdO1xuICBvdXRbN10gPSBhWzddICsgYls3XTtcbiAgb3V0WzhdID0gYVs4XSArIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQzfSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIE11bHRpcGx5IGVhY2ggZWxlbWVudCBvZiB0aGUgbWF0cml4IGJ5IGEgc2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7bWF0M30gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYSB0aGUgbWF0cml4IHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIG1hdHJpeCdzIGVsZW1lbnRzIGJ5XG4gKiBAcmV0dXJucyB7bWF0M30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5U2NhbGFyKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYjtcbiAgb3V0WzFdID0gYVsxXSAqIGI7XG4gIG91dFsyXSA9IGFbMl0gKiBiO1xuICBvdXRbM10gPSBhWzNdICogYjtcbiAgb3V0WzRdID0gYVs0XSAqIGI7XG4gIG91dFs1XSA9IGFbNV0gKiBiO1xuICBvdXRbNl0gPSBhWzZdICogYjtcbiAgb3V0WzddID0gYVs3XSAqIGI7XG4gIG91dFs4XSA9IGFbOF0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBBZGRzIHR3byBtYXQzJ3MgYWZ0ZXIgbXVsdGlwbHlpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21hdDN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYidzIGVsZW1lbnRzIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHttYXQzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHlTY2FsYXJBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICBvdXRbM10gPSBhWzNdICsgYlszXSAqIHNjYWxlO1xuICBvdXRbNF0gPSBhWzRdICsgYls0XSAqIHNjYWxlO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XSAqIHNjYWxlO1xuICBvdXRbNl0gPSBhWzZdICsgYls2XSAqIHNjYWxlO1xuICBvdXRbN10gPSBhWzddICsgYls3XSAqIHNjYWxlO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBtYXRyaWNlcyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IGEgVGhlIGZpcnN0IG1hdHJpeC5cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBiIFRoZSBzZWNvbmQgbWF0cml4LlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIG1hdHJpY2VzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV0gJiYgYVsyXSA9PT0gYlsyXSAmJiBhWzNdID09PSBiWzNdICYmIGFbNF0gPT09IGJbNF0gJiYgYVs1XSA9PT0gYls1XSAmJiBhWzZdID09PSBiWzZdICYmIGFbN10gPT09IGJbN10gJiYgYVs4XSA9PT0gYls4XTtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgbWF0cmljZXMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBhIFRoZSBmaXJzdCBtYXRyaXguXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0M30gYiBUaGUgc2Vjb25kIG1hdHJpeC5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSBtYXRyaWNlcyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXSxcbiAgICAgIGE0ID0gYVs0XSxcbiAgICAgIGE1ID0gYVs1XSxcbiAgICAgIGE2ID0gYVs2XSxcbiAgICAgIGE3ID0gYVs3XSxcbiAgICAgIGE4ID0gYVs4XTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXSxcbiAgICAgIGIzID0gYlszXSxcbiAgICAgIGI0ID0gYls0XSxcbiAgICAgIGI1ID0gYls1XSxcbiAgICAgIGI2ID0gYls2XSxcbiAgICAgIGI3ID0gYls3XSxcbiAgICAgIGI4ID0gYls4XTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpICYmIE1hdGguYWJzKGEzIC0gYjMpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEzKSwgTWF0aC5hYnMoYjMpKSAmJiBNYXRoLmFicyhhNCAtIGI0KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNCksIE1hdGguYWJzKGI0KSkgJiYgTWF0aC5hYnMoYTUgLSBiNSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTUpLCBNYXRoLmFicyhiNSkpICYmIE1hdGguYWJzKGE2IC0gYjYpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE2KSwgTWF0aC5hYnMoYjYpKSAmJiBNYXRoLmFicyhhNyAtIGI3KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNyksIE1hdGguYWJzKGI3KSkgJiYgTWF0aC5hYnMoYTggLSBiOCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTgpLCBNYXRoLmFicyhiOCkpO1xufVxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDMubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDMuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0OyIsImltcG9ydCAqIGFzIGdsTWF0cml4IGZyb20gXCIuL2NvbW1vbi5qc1wiO1xuLyoqXG4gKiA0eDQgTWF0cml4PGJyPkZvcm1hdDogY29sdW1uLW1ham9yLCB3aGVuIHR5cGVkIG91dCBpdCBsb29rcyBsaWtlIHJvdy1tYWpvcjxicj5UaGUgbWF0cmljZXMgYXJlIGJlaW5nIHBvc3QgbXVsdGlwbGllZC5cbiAqIEBtb2R1bGUgbWF0NFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBtYXQ0XG4gKlxuICogQHJldHVybnMge21hdDR9IGEgbmV3IDR4NCBtYXRyaXhcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMTYpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFsxXSA9IDA7XG4gICAgb3V0WzJdID0gMDtcbiAgICBvdXRbM10gPSAwO1xuICAgIG91dFs0XSA9IDA7XG4gICAgb3V0WzZdID0gMDtcbiAgICBvdXRbN10gPSAwO1xuICAgIG91dFs4XSA9IDA7XG4gICAgb3V0WzldID0gMDtcbiAgICBvdXRbMTFdID0gMDtcbiAgICBvdXRbMTJdID0gMDtcbiAgICBvdXRbMTNdID0gMDtcbiAgICBvdXRbMTRdID0gMDtcbiAgfVxuXG4gIG91dFswXSA9IDE7XG4gIG91dFs1XSA9IDE7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgbWF0cml4XG4gKlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgbWF0cml4IHRvIGNsb25lXG4gKiBAcmV0dXJucyB7bWF0NH0gYSBuZXcgNHg0IG1hdHJpeFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShhKSB7XG4gIHZhciBvdXQgPSBuZXcgZ2xNYXRyaXguQVJSQVlfVFlQRSgxNik7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIG91dFs0XSA9IGFbNF07XG4gIG91dFs1XSA9IGFbNV07XG4gIG91dFs2XSA9IGFbNl07XG4gIG91dFs3XSA9IGFbN107XG4gIG91dFs4XSA9IGFbOF07XG4gIG91dFs5XSA9IGFbOV07XG4gIG91dFsxMF0gPSBhWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdO1xuICBvdXRbMTJdID0gYVsxMl07XG4gIG91dFsxM10gPSBhWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdO1xuICBvdXRbMTVdID0gYVsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSBtYXQ0IHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgb3V0WzJdID0gYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgb3V0WzRdID0gYVs0XTtcbiAgb3V0WzVdID0gYVs1XTtcbiAgb3V0WzZdID0gYVs2XTtcbiAgb3V0WzddID0gYVs3XTtcbiAgb3V0WzhdID0gYVs4XTtcbiAgb3V0WzldID0gYVs5XTtcbiAgb3V0WzEwXSA9IGFbMTBdO1xuICBvdXRbMTFdID0gYVsxMV07XG4gIG91dFsxMl0gPSBhWzEyXTtcbiAgb3V0WzEzXSA9IGFbMTNdO1xuICBvdXRbMTRdID0gYVsxNF07XG4gIG91dFsxNV0gPSBhWzE1XTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlIGEgbmV3IG1hdDQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IEEgbmV3IG1hdDRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVZhbHVlcyhtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDE2KTtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBTZXQgdGhlIGNvbXBvbmVudHMgb2YgYSBtYXQ0IHRvIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMCBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAwIHBvc2l0aW9uIChpbmRleCAwKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMSBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMiBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0wMyBDb21wb25lbnQgaW4gY29sdW1uIDAsIHJvdyAzIHBvc2l0aW9uIChpbmRleCAzKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMCBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA0KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMSBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA1KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMiBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAyIHBvc2l0aW9uIChpbmRleCA2KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0xMyBDb21wb25lbnQgaW4gY29sdW1uIDEsIHJvdyAzIHBvc2l0aW9uIChpbmRleCA3KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMCBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAwIHBvc2l0aW9uIChpbmRleCA4KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMSBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAxIHBvc2l0aW9uIChpbmRleCA5KVxuICogQHBhcmFtIHtOdW1iZXJ9IG0yMiBDb21wb25lbnQgaW4gY29sdW1uIDIsIHJvdyAyIHBvc2l0aW9uIChpbmRleCAxMClcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMjMgQ29tcG9uZW50IGluIGNvbHVtbiAyLCByb3cgMyBwb3NpdGlvbiAoaW5kZXggMTEpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMwIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDAgcG9zaXRpb24gKGluZGV4IDEyKVxuICogQHBhcmFtIHtOdW1iZXJ9IG0zMSBDb21wb25lbnQgaW4gY29sdW1uIDMsIHJvdyAxIHBvc2l0aW9uIChpbmRleCAxMylcbiAqIEBwYXJhbSB7TnVtYmVyfSBtMzIgQ29tcG9uZW50IGluIGNvbHVtbiAzLCByb3cgMiBwb3NpdGlvbiAoaW5kZXggMTQpXG4gKiBAcGFyYW0ge051bWJlcn0gbTMzIENvbXBvbmVudCBpbiBjb2x1bW4gMywgcm93IDMgcG9zaXRpb24gKGluZGV4IDE1KVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCBtMDAsIG0wMSwgbTAyLCBtMDMsIG0xMCwgbTExLCBtMTIsIG0xMywgbTIwLCBtMjEsIG0yMiwgbTIzLCBtMzAsIG0zMSwgbTMyLCBtMzMpIHtcbiAgb3V0WzBdID0gbTAwO1xuICBvdXRbMV0gPSBtMDE7XG4gIG91dFsyXSA9IG0wMjtcbiAgb3V0WzNdID0gbTAzO1xuICBvdXRbNF0gPSBtMTA7XG4gIG91dFs1XSA9IG0xMTtcbiAgb3V0WzZdID0gbTEyO1xuICBvdXRbN10gPSBtMTM7XG4gIG91dFs4XSA9IG0yMDtcbiAgb3V0WzldID0gbTIxO1xuICBvdXRbMTBdID0gbTIyO1xuICBvdXRbMTFdID0gbTIzO1xuICBvdXRbMTJdID0gbTMwO1xuICBvdXRbMTNdID0gbTMxO1xuICBvdXRbMTRdID0gbTMyO1xuICBvdXRbMTVdID0gbTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBTZXQgYSBtYXQ0IHRvIHRoZSBpZGVudGl0eSBtYXRyaXhcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eShvdXQpIHtcbiAgb3V0WzBdID0gMTtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gMTtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogVHJhbnNwb3NlIHRoZSB2YWx1ZXMgb2YgYSBtYXQ0XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBzb3VyY2UgbWF0cml4XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZShvdXQsIGEpIHtcbiAgLy8gSWYgd2UgYXJlIHRyYW5zcG9zaW5nIG91cnNlbHZlcyB3ZSBjYW4gc2tpcCBhIGZldyBzdGVwcyBidXQgaGF2ZSB0byBjYWNoZSBzb21lIHZhbHVlc1xuICBpZiAob3V0ID09PSBhKSB7XG4gICAgdmFyIGEwMSA9IGFbMV0sXG4gICAgICAgIGEwMiA9IGFbMl0sXG4gICAgICAgIGEwMyA9IGFbM107XG4gICAgdmFyIGExMiA9IGFbNl0sXG4gICAgICAgIGExMyA9IGFbN107XG4gICAgdmFyIGEyMyA9IGFbMTFdO1xuICAgIG91dFsxXSA9IGFbNF07XG4gICAgb3V0WzJdID0gYVs4XTtcbiAgICBvdXRbM10gPSBhWzEyXTtcbiAgICBvdXRbNF0gPSBhMDE7XG4gICAgb3V0WzZdID0gYVs5XTtcbiAgICBvdXRbN10gPSBhWzEzXTtcbiAgICBvdXRbOF0gPSBhMDI7XG4gICAgb3V0WzldID0gYTEyO1xuICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICBvdXRbMTJdID0gYTAzO1xuICAgIG91dFsxM10gPSBhMTM7XG4gICAgb3V0WzE0XSA9IGEyMztcbiAgfSBlbHNlIHtcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbNF07XG4gICAgb3V0WzJdID0gYVs4XTtcbiAgICBvdXRbM10gPSBhWzEyXTtcbiAgICBvdXRbNF0gPSBhWzFdO1xuICAgIG91dFs1XSA9IGFbNV07XG4gICAgb3V0WzZdID0gYVs5XTtcbiAgICBvdXRbN10gPSBhWzEzXTtcbiAgICBvdXRbOF0gPSBhWzJdO1xuICAgIG91dFs5XSA9IGFbNl07XG4gICAgb3V0WzEwXSA9IGFbMTBdO1xuICAgIG91dFsxMV0gPSBhWzE0XTtcbiAgICBvdXRbMTJdID0gYVszXTtcbiAgICBvdXRbMTNdID0gYVs3XTtcbiAgICBvdXRbMTRdID0gYVsxMV07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogSW52ZXJ0cyBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIHNvdXJjZSBtYXRyaXhcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gaW52ZXJ0KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgICBhMTEgPSBhWzVdLFxuICAgICAgYTEyID0gYVs2XSxcbiAgICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgICAgYTIxID0gYVs5XSxcbiAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICAgIGEzMSA9IGFbMTNdLFxuICAgICAgYTMyID0gYVsxNF0sXG4gICAgICBhMzMgPSBhWzE1XTtcbiAgdmFyIGIwMCA9IGEwMCAqIGExMSAtIGEwMSAqIGExMDtcbiAgdmFyIGIwMSA9IGEwMCAqIGExMiAtIGEwMiAqIGExMDtcbiAgdmFyIGIwMiA9IGEwMCAqIGExMyAtIGEwMyAqIGExMDtcbiAgdmFyIGIwMyA9IGEwMSAqIGExMiAtIGEwMiAqIGExMTtcbiAgdmFyIGIwNCA9IGEwMSAqIGExMyAtIGEwMyAqIGExMTtcbiAgdmFyIGIwNSA9IGEwMiAqIGExMyAtIGEwMyAqIGExMjtcbiAgdmFyIGIwNiA9IGEyMCAqIGEzMSAtIGEyMSAqIGEzMDtcbiAgdmFyIGIwNyA9IGEyMCAqIGEzMiAtIGEyMiAqIGEzMDtcbiAgdmFyIGIwOCA9IGEyMCAqIGEzMyAtIGEyMyAqIGEzMDtcbiAgdmFyIGIwOSA9IGEyMSAqIGEzMiAtIGEyMiAqIGEzMTtcbiAgdmFyIGIxMCA9IGEyMSAqIGEzMyAtIGEyMyAqIGEzMTtcbiAgdmFyIGIxMSA9IGEyMiAqIGEzMyAtIGEyMyAqIGEzMjsgLy8gQ2FsY3VsYXRlIHRoZSBkZXRlcm1pbmFudFxuXG4gIHZhciBkZXQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKCFkZXQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGRldCA9IDEuMCAvIGRldDtcbiAgb3V0WzBdID0gKGExMSAqIGIxMSAtIGExMiAqIGIxMCArIGExMyAqIGIwOSkgKiBkZXQ7XG4gIG91dFsxXSA9IChhMDIgKiBiMTAgLSBhMDEgKiBiMTEgLSBhMDMgKiBiMDkpICogZGV0O1xuICBvdXRbMl0gPSAoYTMxICogYjA1IC0gYTMyICogYjA0ICsgYTMzICogYjAzKSAqIGRldDtcbiAgb3V0WzNdID0gKGEyMiAqIGIwNCAtIGEyMSAqIGIwNSAtIGEyMyAqIGIwMykgKiBkZXQ7XG4gIG91dFs0XSA9IChhMTIgKiBiMDggLSBhMTAgKiBiMTEgLSBhMTMgKiBiMDcpICogZGV0O1xuICBvdXRbNV0gPSAoYTAwICogYjExIC0gYTAyICogYjA4ICsgYTAzICogYjA3KSAqIGRldDtcbiAgb3V0WzZdID0gKGEzMiAqIGIwMiAtIGEzMCAqIGIwNSAtIGEzMyAqIGIwMSkgKiBkZXQ7XG4gIG91dFs3XSA9IChhMjAgKiBiMDUgLSBhMjIgKiBiMDIgKyBhMjMgKiBiMDEpICogZGV0O1xuICBvdXRbOF0gPSAoYTEwICogYjEwIC0gYTExICogYjA4ICsgYTEzICogYjA2KSAqIGRldDtcbiAgb3V0WzldID0gKGEwMSAqIGIwOCAtIGEwMCAqIGIxMCAtIGEwMyAqIGIwNikgKiBkZXQ7XG4gIG91dFsxMF0gPSAoYTMwICogYjA0IC0gYTMxICogYjAyICsgYTMzICogYjAwKSAqIGRldDtcbiAgb3V0WzExXSA9IChhMjEgKiBiMDIgLSBhMjAgKiBiMDQgLSBhMjMgKiBiMDApICogZGV0O1xuICBvdXRbMTJdID0gKGExMSAqIGIwNyAtIGExMCAqIGIwOSAtIGExMiAqIGIwNikgKiBkZXQ7XG4gIG91dFsxM10gPSAoYTAwICogYjA5IC0gYTAxICogYjA3ICsgYTAyICogYjA2KSAqIGRldDtcbiAgb3V0WzE0XSA9IChhMzEgKiBiMDEgLSBhMzAgKiBiMDMgLSBhMzIgKiBiMDApICogZGV0O1xuICBvdXRbMTVdID0gKGEyMCAqIGIwMyAtIGEyMSAqIGIwMSArIGEyMiAqIGIwMCkgKiBkZXQ7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGFkanVnYXRlIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGpvaW50KG91dCwgYSkge1xuICB2YXIgYTAwID0gYVswXSxcbiAgICAgIGEwMSA9IGFbMV0sXG4gICAgICBhMDIgPSBhWzJdLFxuICAgICAgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF0sXG4gICAgICBhMTEgPSBhWzVdLFxuICAgICAgYTEyID0gYVs2XSxcbiAgICAgIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdLFxuICAgICAgYTIxID0gYVs5XSxcbiAgICAgIGEyMiA9IGFbMTBdLFxuICAgICAgYTIzID0gYVsxMV07XG4gIHZhciBhMzAgPSBhWzEyXSxcbiAgICAgIGEzMSA9IGFbMTNdLFxuICAgICAgYTMyID0gYVsxNF0sXG4gICAgICBhMzMgPSBhWzE1XTtcbiAgb3V0WzBdID0gYTExICogKGEyMiAqIGEzMyAtIGEyMyAqIGEzMikgLSBhMjEgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSArIGEzMSAqIChhMTIgKiBhMjMgLSBhMTMgKiBhMjIpO1xuICBvdXRbMV0gPSAtKGEwMSAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIxICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKSk7XG4gIG91dFsyXSA9IGEwMSAqIChhMTIgKiBhMzMgLSBhMTMgKiBhMzIpIC0gYTExICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzEgKiAoYTAyICogYTEzIC0gYTAzICogYTEyKTtcbiAgb3V0WzNdID0gLShhMDEgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMSAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIxICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbNF0gPSAtKGExMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGExMiAqIGEzMyAtIGExMyAqIGEzMikgKyBhMzAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSk7XG4gIG91dFs1XSA9IGEwMCAqIChhMjIgKiBhMzMgLSBhMjMgKiBhMzIpIC0gYTIwICogKGEwMiAqIGEzMyAtIGEwMyAqIGEzMikgKyBhMzAgKiAoYTAyICogYTIzIC0gYTAzICogYTIyKTtcbiAgb3V0WzZdID0gLShhMDAgKiAoYTEyICogYTMzIC0gYTEzICogYTMyKSAtIGExMCAqIChhMDIgKiBhMzMgLSBhMDMgKiBhMzIpICsgYTMwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMikpO1xuICBvdXRbN10gPSBhMDAgKiAoYTEyICogYTIzIC0gYTEzICogYTIyKSAtIGExMCAqIChhMDIgKiBhMjMgLSBhMDMgKiBhMjIpICsgYTIwICogKGEwMiAqIGExMyAtIGEwMyAqIGExMik7XG4gIG91dFs4XSA9IGExMCAqIChhMjEgKiBhMzMgLSBhMjMgKiBhMzEpIC0gYTIwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgKyBhMzAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKTtcbiAgb3V0WzldID0gLShhMDAgKiAoYTIxICogYTMzIC0gYTIzICogYTMxKSAtIGEyMCAqIChhMDEgKiBhMzMgLSBhMDMgKiBhMzEpICsgYTMwICogKGEwMSAqIGEyMyAtIGEwMyAqIGEyMSkpO1xuICBvdXRbMTBdID0gYTAwICogKGExMSAqIGEzMyAtIGExMyAqIGEzMSkgLSBhMTAgKiAoYTAxICogYTMzIC0gYTAzICogYTMxKSArIGEzMCAqIChhMDEgKiBhMTMgLSBhMDMgKiBhMTEpO1xuICBvdXRbMTFdID0gLShhMDAgKiAoYTExICogYTIzIC0gYTEzICogYTIxKSAtIGExMCAqIChhMDEgKiBhMjMgLSBhMDMgKiBhMjEpICsgYTIwICogKGEwMSAqIGExMyAtIGEwMyAqIGExMSkpO1xuICBvdXRbMTJdID0gLShhMTAgKiAoYTIxICogYTMyIC0gYTIyICogYTMxKSAtIGEyMCAqIChhMTEgKiBhMzIgLSBhMTIgKiBhMzEpICsgYTMwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkpO1xuICBvdXRbMTNdID0gYTAwICogKGEyMSAqIGEzMiAtIGEyMiAqIGEzMSkgLSBhMjAgKiAoYTAxICogYTMyIC0gYTAyICogYTMxKSArIGEzMCAqIChhMDEgKiBhMjIgLSBhMDIgKiBhMjEpO1xuICBvdXRbMTRdID0gLShhMDAgKiAoYTExICogYTMyIC0gYTEyICogYTMxKSAtIGExMCAqIChhMDEgKiBhMzIgLSBhMDIgKiBhMzEpICsgYTMwICogKGEwMSAqIGExMiAtIGEwMiAqIGExMSkpO1xuICBvdXRbMTVdID0gYTAwICogKGExMSAqIGEyMiAtIGExMiAqIGEyMSkgLSBhMTAgKiAoYTAxICogYTIyIC0gYTAyICogYTIxKSArIGEyMCAqIChhMDEgKiBhMTIgLSBhMDIgKiBhMTEpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkZXRlcm1pbmFudCBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgc291cmNlIG1hdHJpeFxuICogQHJldHVybnMge051bWJlcn0gZGV0ZXJtaW5hbnQgb2YgYVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmFudChhKSB7XG4gIHZhciBhMDAgPSBhWzBdLFxuICAgICAgYTAxID0gYVsxXSxcbiAgICAgIGEwMiA9IGFbMl0sXG4gICAgICBhMDMgPSBhWzNdO1xuICB2YXIgYTEwID0gYVs0XSxcbiAgICAgIGExMSA9IGFbNV0sXG4gICAgICBhMTIgPSBhWzZdLFxuICAgICAgYTEzID0gYVs3XTtcbiAgdmFyIGEyMCA9IGFbOF0sXG4gICAgICBhMjEgPSBhWzldLFxuICAgICAgYTIyID0gYVsxMF0sXG4gICAgICBhMjMgPSBhWzExXTtcbiAgdmFyIGEzMCA9IGFbMTJdLFxuICAgICAgYTMxID0gYVsxM10sXG4gICAgICBhMzIgPSBhWzE0XSxcbiAgICAgIGEzMyA9IGFbMTVdO1xuICB2YXIgYjAwID0gYTAwICogYTExIC0gYTAxICogYTEwO1xuICB2YXIgYjAxID0gYTAwICogYTEyIC0gYTAyICogYTEwO1xuICB2YXIgYjAyID0gYTAwICogYTEzIC0gYTAzICogYTEwO1xuICB2YXIgYjAzID0gYTAxICogYTEyIC0gYTAyICogYTExO1xuICB2YXIgYjA0ID0gYTAxICogYTEzIC0gYTAzICogYTExO1xuICB2YXIgYjA1ID0gYTAyICogYTEzIC0gYTAzICogYTEyO1xuICB2YXIgYjA2ID0gYTIwICogYTMxIC0gYTIxICogYTMwO1xuICB2YXIgYjA3ID0gYTIwICogYTMyIC0gYTIyICogYTMwO1xuICB2YXIgYjA4ID0gYTIwICogYTMzIC0gYTIzICogYTMwO1xuICB2YXIgYjA5ID0gYTIxICogYTMyIC0gYTIyICogYTMxO1xuICB2YXIgYjEwID0gYTIxICogYTMzIC0gYTIzICogYTMxO1xuICB2YXIgYjExID0gYTIyICogYTMzIC0gYTIzICogYTMyOyAvLyBDYWxjdWxhdGUgdGhlIGRldGVybWluYW50XG5cbiAgcmV0dXJuIGIwMCAqIGIxMSAtIGIwMSAqIGIxMCArIGIwMiAqIGIwOSArIGIwMyAqIGIwOCAtIGIwNCAqIGIwNyArIGIwNSAqIGIwNjtcbn1cbi8qKlxuICogTXVsdGlwbGllcyB0d28gbWF0NHNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgdmFyIGEwMCA9IGFbMF0sXG4gICAgICBhMDEgPSBhWzFdLFxuICAgICAgYTAyID0gYVsyXSxcbiAgICAgIGEwMyA9IGFbM107XG4gIHZhciBhMTAgPSBhWzRdLFxuICAgICAgYTExID0gYVs1XSxcbiAgICAgIGExMiA9IGFbNl0sXG4gICAgICBhMTMgPSBhWzddO1xuICB2YXIgYTIwID0gYVs4XSxcbiAgICAgIGEyMSA9IGFbOV0sXG4gICAgICBhMjIgPSBhWzEwXSxcbiAgICAgIGEyMyA9IGFbMTFdO1xuICB2YXIgYTMwID0gYVsxMl0sXG4gICAgICBhMzEgPSBhWzEzXSxcbiAgICAgIGEzMiA9IGFbMTRdLFxuICAgICAgYTMzID0gYVsxNV07IC8vIENhY2hlIG9ubHkgdGhlIGN1cnJlbnQgbGluZSBvZiB0aGUgc2Vjb25kIG1hdHJpeFxuXG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl0sXG4gICAgICBiMyA9IGJbM107XG4gIG91dFswXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbMV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzJdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFszXSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICBiMCA9IGJbNF07XG4gIGIxID0gYls1XTtcbiAgYjIgPSBiWzZdO1xuICBiMyA9IGJbN107XG4gIG91dFs0XSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbNV0gPSBiMCAqIGEwMSArIGIxICogYTExICsgYjIgKiBhMjEgKyBiMyAqIGEzMTtcbiAgb3V0WzZdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFs3XSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICBiMCA9IGJbOF07XG4gIGIxID0gYls5XTtcbiAgYjIgPSBiWzEwXTtcbiAgYjMgPSBiWzExXTtcbiAgb3V0WzhdID0gYjAgKiBhMDAgKyBiMSAqIGExMCArIGIyICogYTIwICsgYjMgKiBhMzA7XG4gIG91dFs5XSA9IGIwICogYTAxICsgYjEgKiBhMTEgKyBiMiAqIGEyMSArIGIzICogYTMxO1xuICBvdXRbMTBdID0gYjAgKiBhMDIgKyBiMSAqIGExMiArIGIyICogYTIyICsgYjMgKiBhMzI7XG4gIG91dFsxMV0gPSBiMCAqIGEwMyArIGIxICogYTEzICsgYjIgKiBhMjMgKyBiMyAqIGEzMztcbiAgYjAgPSBiWzEyXTtcbiAgYjEgPSBiWzEzXTtcbiAgYjIgPSBiWzE0XTtcbiAgYjMgPSBiWzE1XTtcbiAgb3V0WzEyXSA9IGIwICogYTAwICsgYjEgKiBhMTAgKyBiMiAqIGEyMCArIGIzICogYTMwO1xuICBvdXRbMTNdID0gYjAgKiBhMDEgKyBiMSAqIGExMSArIGIyICogYTIxICsgYjMgKiBhMzE7XG4gIG91dFsxNF0gPSBiMCAqIGEwMiArIGIxICogYTEyICsgYjIgKiBhMjIgKyBiMyAqIGEzMjtcbiAgb3V0WzE1XSA9IGIwICogYTAzICsgYjEgKiBhMTMgKyBiMiAqIGEyMyArIGIzICogYTMzO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBUcmFuc2xhdGUgYSBtYXQ0IGJ5IHRoZSBnaXZlbiB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byB0cmFuc2xhdGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IHZlY3RvciB0byB0cmFuc2xhdGUgYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXSxcbiAgICAgIHogPSB2WzJdO1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuXG4gIGlmIChhID09PSBvdXQpIHtcbiAgICBvdXRbMTJdID0gYVswXSAqIHggKyBhWzRdICogeSArIGFbOF0gKiB6ICsgYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMV0gKiB4ICsgYVs1XSAqIHkgKyBhWzldICogeiArIGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzJdICogeCArIGFbNl0gKiB5ICsgYVsxMF0gKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbM10gKiB4ICsgYVs3XSAqIHkgKyBhWzExXSAqIHogKyBhWzE1XTtcbiAgfSBlbHNlIHtcbiAgICBhMDAgPSBhWzBdO1xuICAgIGEwMSA9IGFbMV07XG4gICAgYTAyID0gYVsyXTtcbiAgICBhMDMgPSBhWzNdO1xuICAgIGExMCA9IGFbNF07XG4gICAgYTExID0gYVs1XTtcbiAgICBhMTIgPSBhWzZdO1xuICAgIGExMyA9IGFbN107XG4gICAgYTIwID0gYVs4XTtcbiAgICBhMjEgPSBhWzldO1xuICAgIGEyMiA9IGFbMTBdO1xuICAgIGEyMyA9IGFbMTFdO1xuICAgIG91dFswXSA9IGEwMDtcbiAgICBvdXRbMV0gPSBhMDE7XG4gICAgb3V0WzJdID0gYTAyO1xuICAgIG91dFszXSA9IGEwMztcbiAgICBvdXRbNF0gPSBhMTA7XG4gICAgb3V0WzVdID0gYTExO1xuICAgIG91dFs2XSA9IGExMjtcbiAgICBvdXRbN10gPSBhMTM7XG4gICAgb3V0WzhdID0gYTIwO1xuICAgIG91dFs5XSA9IGEyMTtcbiAgICBvdXRbMTBdID0gYTIyO1xuICAgIG91dFsxMV0gPSBhMjM7XG4gICAgb3V0WzEyXSA9IGEwMCAqIHggKyBhMTAgKiB5ICsgYTIwICogeiArIGFbMTJdO1xuICAgIG91dFsxM10gPSBhMDEgKiB4ICsgYTExICogeSArIGEyMSAqIHogKyBhWzEzXTtcbiAgICBvdXRbMTRdID0gYTAyICogeCArIGExMiAqIHkgKyBhMjIgKiB6ICsgYVsxNF07XG4gICAgb3V0WzE1XSA9IGEwMyAqIHggKyBhMTMgKiB5ICsgYTIzICogeiArIGFbMTVdO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogU2NhbGVzIHRoZSBtYXQ0IGJ5IHRoZSBkaW1lbnNpb25zIGluIHRoZSBnaXZlbiB2ZWMzIG5vdCB1c2luZyB2ZWN0b3JpemF0aW9uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gc2NhbGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IHRoZSB2ZWMzIHRvIHNjYWxlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlKG91dCwgYSwgdikge1xuICB2YXIgeCA9IHZbMF0sXG4gICAgICB5ID0gdlsxXSxcbiAgICAgIHogPSB2WzJdO1xuICBvdXRbMF0gPSBhWzBdICogeDtcbiAgb3V0WzFdID0gYVsxXSAqIHg7XG4gIG91dFsyXSA9IGFbMl0gKiB4O1xuICBvdXRbM10gPSBhWzNdICogeDtcbiAgb3V0WzRdID0gYVs0XSAqIHk7XG4gIG91dFs1XSA9IGFbNV0gKiB5O1xuICBvdXRbNl0gPSBhWzZdICogeTtcbiAgb3V0WzddID0gYVs3XSAqIHk7XG4gIG91dFs4XSA9IGFbOF0gKiB6O1xuICBvdXRbOV0gPSBhWzldICogejtcbiAgb3V0WzEwXSA9IGFbMTBdICogejtcbiAgb3V0WzExXSA9IGFbMTFdICogejtcbiAgb3V0WzEyXSA9IGFbMTJdO1xuICBvdXRbMTNdID0gYVsxM107XG4gIG91dFsxNF0gPSBhWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0NCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBnaXZlbiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGF4aXMgdGhlIGF4aXMgdG8gcm90YXRlIGFyb3VuZFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGUob3V0LCBhLCByYWQsIGF4aXMpIHtcbiAgdmFyIHggPSBheGlzWzBdLFxuICAgICAgeSA9IGF4aXNbMV0sXG4gICAgICB6ID0gYXhpc1syXTtcbiAgdmFyIGxlbiA9IE1hdGguaHlwb3QoeCwgeSwgeik7XG4gIHZhciBzLCBjLCB0O1xuICB2YXIgYTAwLCBhMDEsIGEwMiwgYTAzO1xuICB2YXIgYTEwLCBhMTEsIGExMiwgYTEzO1xuICB2YXIgYTIwLCBhMjEsIGEyMiwgYTIzO1xuICB2YXIgYjAwLCBiMDEsIGIwMjtcbiAgdmFyIGIxMCwgYjExLCBiMTI7XG4gIHZhciBiMjAsIGIyMSwgYjIyO1xuXG4gIGlmIChsZW4gPCBnbE1hdHJpeC5FUFNJTE9OKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZW4gPSAxIC8gbGVuO1xuICB4ICo9IGxlbjtcbiAgeSAqPSBsZW47XG4gIHogKj0gbGVuO1xuICBzID0gTWF0aC5zaW4ocmFkKTtcbiAgYyA9IE1hdGguY29zKHJhZCk7XG4gIHQgPSAxIC0gYztcbiAgYTAwID0gYVswXTtcbiAgYTAxID0gYVsxXTtcbiAgYTAyID0gYVsyXTtcbiAgYTAzID0gYVszXTtcbiAgYTEwID0gYVs0XTtcbiAgYTExID0gYVs1XTtcbiAgYTEyID0gYVs2XTtcbiAgYTEzID0gYVs3XTtcbiAgYTIwID0gYVs4XTtcbiAgYTIxID0gYVs5XTtcbiAgYTIyID0gYVsxMF07XG4gIGEyMyA9IGFbMTFdOyAvLyBDb25zdHJ1Y3QgdGhlIGVsZW1lbnRzIG9mIHRoZSByb3RhdGlvbiBtYXRyaXhcblxuICBiMDAgPSB4ICogeCAqIHQgKyBjO1xuICBiMDEgPSB5ICogeCAqIHQgKyB6ICogcztcbiAgYjAyID0geiAqIHggKiB0IC0geSAqIHM7XG4gIGIxMCA9IHggKiB5ICogdCAtIHogKiBzO1xuICBiMTEgPSB5ICogeSAqIHQgKyBjO1xuICBiMTIgPSB6ICogeSAqIHQgKyB4ICogcztcbiAgYjIwID0geCAqIHogKiB0ICsgeSAqIHM7XG4gIGIyMSA9IHkgKiB6ICogdCAtIHggKiBzO1xuICBiMjIgPSB6ICogeiAqIHQgKyBjOyAvLyBQZXJmb3JtIHJvdGF0aW9uLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IGEwMCAqIGIwMCArIGExMCAqIGIwMSArIGEyMCAqIGIwMjtcbiAgb3V0WzFdID0gYTAxICogYjAwICsgYTExICogYjAxICsgYTIxICogYjAyO1xuICBvdXRbMl0gPSBhMDIgKiBiMDAgKyBhMTIgKiBiMDEgKyBhMjIgKiBiMDI7XG4gIG91dFszXSA9IGEwMyAqIGIwMCArIGExMyAqIGIwMSArIGEyMyAqIGIwMjtcbiAgb3V0WzRdID0gYTAwICogYjEwICsgYTEwICogYjExICsgYTIwICogYjEyO1xuICBvdXRbNV0gPSBhMDEgKiBiMTAgKyBhMTEgKiBiMTEgKyBhMjEgKiBiMTI7XG4gIG91dFs2XSA9IGEwMiAqIGIxMCArIGExMiAqIGIxMSArIGEyMiAqIGIxMjtcbiAgb3V0WzddID0gYTAzICogYjEwICsgYTEzICogYjExICsgYTIzICogYjEyO1xuICBvdXRbOF0gPSBhMDAgKiBiMjAgKyBhMTAgKiBiMjEgKyBhMjAgKiBiMjI7XG4gIG91dFs5XSA9IGEwMSAqIGIyMCArIGExMSAqIGIyMSArIGEyMSAqIGIyMjtcbiAgb3V0WzEwXSA9IGEwMiAqIGIyMCArIGExMiAqIGIyMSArIGEyMiAqIGIyMjtcbiAgb3V0WzExXSA9IGEwMyAqIGIyMCArIGExMyAqIGIyMSArIGEyMyAqIGIyMjtcblxuICBpZiAoYSAhPT0gb3V0KSB7XG4gICAgLy8gSWYgdGhlIHNvdXJjZSBhbmQgZGVzdGluYXRpb24gZGlmZmVyLCBjb3B5IHRoZSB1bmNoYW5nZWQgbGFzdCByb3dcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSb3RhdGVzIGEgbWF0cml4IGJ5IHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgbWF0cml4IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG4gIHZhciBhMjAgPSBhWzhdO1xuICB2YXIgYTIxID0gYVs5XTtcbiAgdmFyIGEyMiA9IGFbMTBdO1xuICB2YXIgYTIzID0gYVsxMV07XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIHJvd3NcbiAgICBvdXRbMF0gPSBhWzBdO1xuICAgIG91dFsxXSA9IGFbMV07XG4gICAgb3V0WzJdID0gYVsyXTtcbiAgICBvdXRbM10gPSBhWzNdO1xuICAgIG91dFsxMl0gPSBhWzEyXTtcbiAgICBvdXRbMTNdID0gYVsxM107XG4gICAgb3V0WzE0XSA9IGFbMTRdO1xuICAgIG91dFsxNV0gPSBhWzE1XTtcbiAgfSAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cblxuICBvdXRbNF0gPSBhMTAgKiBjICsgYTIwICogcztcbiAgb3V0WzVdID0gYTExICogYyArIGEyMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgKyBhMjIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjICsgYTIzICogcztcbiAgb3V0WzhdID0gYTIwICogYyAtIGExMCAqIHM7XG4gIG91dFs5XSA9IGEyMSAqIGMgLSBhMTEgKiBzO1xuICBvdXRbMTBdID0gYTIyICogYyAtIGExMiAqIHM7XG4gIG91dFsxMV0gPSBhMjMgKiBjIC0gYTEzICogcztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUm90YXRlcyBhIG1hdHJpeCBieSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7XG4gIHZhciBhMDAgPSBhWzBdO1xuICB2YXIgYTAxID0gYVsxXTtcbiAgdmFyIGEwMiA9IGFbMl07XG4gIHZhciBhMDMgPSBhWzNdO1xuICB2YXIgYTIwID0gYVs4XTtcbiAgdmFyIGEyMSA9IGFbOV07XG4gIHZhciBhMjIgPSBhWzEwXTtcbiAgdmFyIGEyMyA9IGFbMTFdO1xuXG4gIGlmIChhICE9PSBvdXQpIHtcbiAgICAvLyBJZiB0aGUgc291cmNlIGFuZCBkZXN0aW5hdGlvbiBkaWZmZXIsIGNvcHkgdGhlIHVuY2hhbmdlZCByb3dzXG4gICAgb3V0WzRdID0gYVs0XTtcbiAgICBvdXRbNV0gPSBhWzVdO1xuICAgIG91dFs2XSA9IGFbNl07XG4gICAgb3V0WzddID0gYVs3XTtcbiAgICBvdXRbMTJdID0gYVsxMl07XG4gICAgb3V0WzEzXSA9IGFbMTNdO1xuICAgIG91dFsxNF0gPSBhWzE0XTtcbiAgICBvdXRbMTVdID0gYVsxNV07XG4gIH0gLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG5cbiAgb3V0WzBdID0gYTAwICogYyAtIGEyMCAqIHM7XG4gIG91dFsxXSA9IGEwMSAqIGMgLSBhMjEgKiBzO1xuICBvdXRbMl0gPSBhMDIgKiBjIC0gYTIyICogcztcbiAgb3V0WzNdID0gYTAzICogYyAtIGEyMyAqIHM7XG4gIG91dFs4XSA9IGEwMCAqIHMgKyBhMjAgKiBjO1xuICBvdXRbOV0gPSBhMDEgKiBzICsgYTIxICogYztcbiAgb3V0WzEwXSA9IGEwMiAqIHMgKyBhMjIgKiBjO1xuICBvdXRbMTFdID0gYTAzICogcyArIGEyMyAqIGM7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJvdGF0ZXMgYSBtYXRyaXggYnkgdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gcm90YXRlXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB2YXIgYTAwID0gYVswXTtcbiAgdmFyIGEwMSA9IGFbMV07XG4gIHZhciBhMDIgPSBhWzJdO1xuICB2YXIgYTAzID0gYVszXTtcbiAgdmFyIGExMCA9IGFbNF07XG4gIHZhciBhMTEgPSBhWzVdO1xuICB2YXIgYTEyID0gYVs2XTtcbiAgdmFyIGExMyA9IGFbN107XG5cbiAgaWYgKGEgIT09IG91dCkge1xuICAgIC8vIElmIHRoZSBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGRpZmZlciwgY29weSB0aGUgdW5jaGFuZ2VkIGxhc3Qgcm93XG4gICAgb3V0WzhdID0gYVs4XTtcbiAgICBvdXRbOV0gPSBhWzldO1xuICAgIG91dFsxMF0gPSBhWzEwXTtcbiAgICBvdXRbMTFdID0gYVsxMV07XG4gICAgb3V0WzEyXSA9IGFbMTJdO1xuICAgIG91dFsxM10gPSBhWzEzXTtcbiAgICBvdXRbMTRdID0gYVsxNF07XG4gICAgb3V0WzE1XSA9IGFbMTVdO1xuICB9IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuXG4gIG91dFswXSA9IGEwMCAqIGMgKyBhMTAgKiBzO1xuICBvdXRbMV0gPSBhMDEgKiBjICsgYTExICogcztcbiAgb3V0WzJdID0gYTAyICogYyArIGExMiAqIHM7XG4gIG91dFszXSA9IGEwMyAqIGMgKyBhMTMgKiBzO1xuICBvdXRbNF0gPSBhMTAgKiBjIC0gYTAwICogcztcbiAgb3V0WzVdID0gYTExICogYyAtIGEwMSAqIHM7XG4gIG91dFs2XSA9IGExMiAqIGMgLSBhMDIgKiBzO1xuICBvdXRbN10gPSBhMTMgKiBjIC0gYTAzICogcztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBkZXN0LCB2ZWMpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVHJhbnNsYXRpb24ob3V0LCB2KSB7XG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSAxO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF07XG4gIG91dFsxM10gPSB2WzFdO1xuICBvdXRbMTRdID0gdlsyXTtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHZlY3RvciBzY2FsaW5nXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIGRlc3QsIHZlYyk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgU2NhbGluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVNjYWxpbmcob3V0LCB2KSB7XG4gIG91dFswXSA9IHZbMF07XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IHZbMV07XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSB2WzJdO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIGdpdmVuIGFuZ2xlIGFyb3VuZCBhIGdpdmVuIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlKGRlc3QsIGRlc3QsIHJhZCwgYXhpcyk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBheGlzIHRoZSBheGlzIHRvIHJvdGF0ZSBhcm91bmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJvdGF0aW9uKG91dCwgcmFkLCBheGlzKSB7XG4gIHZhciB4ID0gYXhpc1swXSxcbiAgICAgIHkgPSBheGlzWzFdLFxuICAgICAgeiA9IGF4aXNbMl07XG4gIHZhciBsZW4gPSBNYXRoLmh5cG90KHgsIHksIHopO1xuICB2YXIgcywgYywgdDtcblxuICBpZiAobGVuIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGVuID0gMSAvIGxlbjtcbiAgeCAqPSBsZW47XG4gIHkgKj0gbGVuO1xuICB6ICo9IGxlbjtcbiAgcyA9IE1hdGguc2luKHJhZCk7XG4gIGMgPSBNYXRoLmNvcyhyYWQpO1xuICB0ID0gMSAtIGM7IC8vIFBlcmZvcm0gcm90YXRpb24tc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0geCAqIHggKiB0ICsgYztcbiAgb3V0WzFdID0geSAqIHggKiB0ICsgeiAqIHM7XG4gIG91dFsyXSA9IHogKiB4ICogdCAtIHkgKiBzO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4ICogeSAqIHQgLSB6ICogcztcbiAgb3V0WzVdID0geSAqIHkgKiB0ICsgYztcbiAgb3V0WzZdID0geiAqIHkgKiB0ICsgeCAqIHM7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHggKiB6ICogdCArIHkgKiBzO1xuICBvdXRbOV0gPSB5ICogeiAqIHQgLSB4ICogcztcbiAgb3V0WzEwXSA9IHogKiB6ICogdCArIGM7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhcm91bmQgdGhlIFggYXhpc1xuICogVGhpcyBpcyBlcXVpdmFsZW50IHRvIChidXQgbXVjaCBmYXN0ZXIgdGhhbik6XG4gKlxuICogICAgIG1hdDQuaWRlbnRpdHkoZGVzdCk7XG4gKiAgICAgbWF0NC5yb3RhdGVYKGRlc3QsIGRlc3QsIHJhZCk7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCB0aGUgYW5nbGUgdG8gcm90YXRlIHRoZSBtYXRyaXggYnlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVhSb3RhdGlvbihvdXQsIHJhZCkge1xuICB2YXIgcyA9IE1hdGguc2luKHJhZCk7XG4gIHZhciBjID0gTWF0aC5jb3MocmFkKTsgLy8gUGVyZm9ybSBheGlzLXNwZWNpZmljIG1hdHJpeCBtdWx0aXBsaWNhdGlvblxuXG4gIG91dFswXSA9IDE7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGM7XG4gIG91dFs2XSA9IHM7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IC1zO1xuICBvdXRbMTBdID0gYztcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAwO1xuICBvdXRbMTNdID0gMDtcbiAgb3V0WzE0XSA9IDA7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gdGhlIGdpdmVuIGFuZ2xlIGFyb3VuZCB0aGUgWSBheGlzXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnJvdGF0ZVkoZGVzdCwgZGVzdCwgcmFkKTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIHRoZSBhbmdsZSB0byByb3RhdGUgdGhlIG1hdHJpeCBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tWVJvdGF0aW9uKG91dCwgcmFkKSB7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgdmFyIGMgPSBNYXRoLmNvcyhyYWQpOyAvLyBQZXJmb3JtIGF4aXMtc3BlY2lmaWMgbWF0cml4IG11bHRpcGxpY2F0aW9uXG5cbiAgb3V0WzBdID0gYztcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gLXM7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IDE7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IHM7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMF0gPSBjO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSB0aGUgZ2l2ZW4gYW5nbGUgYXJvdW5kIHRoZSBaIGF4aXNcbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQucm90YXRlWihkZXN0LCBkZXN0LCByYWQpO1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIHRvIHJvdGF0ZSB0aGUgbWF0cml4IGJ5XG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21aUm90YXRpb24ob3V0LCByYWQpIHtcbiAgdmFyIHMgPSBNYXRoLnNpbihyYWQpO1xuICB2YXIgYyA9IE1hdGguY29zKHJhZCk7IC8vIFBlcmZvcm0gYXhpcy1zcGVjaWZpYyBtYXRyaXggbXVsdGlwbGljYXRpb25cblxuICBvdXRbMF0gPSBjO1xuICBvdXRbMV0gPSBzO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAtcztcbiAgb3V0WzVdID0gYztcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IDE7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSAwO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG1hdHJpeCBmcm9tIGEgcXVhdGVybmlvbiByb3RhdGlvbiBhbmQgdmVjdG9yIHRyYW5zbGF0aW9uXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge3F1YXQ0fSBxIFJvdGF0aW9uIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB2IFRyYW5zbGF0aW9uIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvbihvdXQsIHEsIHYpIHtcbiAgLy8gUXVhdGVybmlvbiBtYXRoXG4gIHZhciB4ID0gcVswXSxcbiAgICAgIHkgPSBxWzFdLFxuICAgICAgeiA9IHFbMl0sXG4gICAgICB3ID0gcVszXTtcbiAgdmFyIHgyID0geCArIHg7XG4gIHZhciB5MiA9IHkgKyB5O1xuICB2YXIgejIgPSB6ICsgejtcbiAgdmFyIHh4ID0geCAqIHgyO1xuICB2YXIgeHkgPSB4ICogeTI7XG4gIHZhciB4eiA9IHggKiB6MjtcbiAgdmFyIHl5ID0geSAqIHkyO1xuICB2YXIgeXogPSB5ICogejI7XG4gIHZhciB6eiA9IHogKiB6MjtcbiAgdmFyIHd4ID0gdyAqIHgyO1xuICB2YXIgd3kgPSB3ICogeTI7XG4gIHZhciB3eiA9IHcgKiB6MjtcbiAgb3V0WzBdID0gMSAtICh5eSArIHp6KTtcbiAgb3V0WzFdID0geHkgKyB3ejtcbiAgb3V0WzJdID0geHogLSB3eTtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0geHkgLSB3ejtcbiAgb3V0WzVdID0gMSAtICh4eCArIHp6KTtcbiAgb3V0WzZdID0geXogKyB3eDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0geHogKyB3eTtcbiAgb3V0WzldID0geXogLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSAoeHggKyB5eSk7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gdlswXTtcbiAgb3V0WzEzXSA9IHZbMV07XG4gIG91dFsxNF0gPSB2WzJdO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBtYXQ0IGZyb20gYSBkdWFsIHF1YXQuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgTWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdDJ9IGEgRHVhbCBRdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7bWF0NH0gbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUXVhdDIob3V0LCBhKSB7XG4gIHZhciB0cmFuc2xhdGlvbiA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICB2YXIgYnggPSAtYVswXSxcbiAgICAgIGJ5ID0gLWFbMV0sXG4gICAgICBieiA9IC1hWzJdLFxuICAgICAgYncgPSBhWzNdLFxuICAgICAgYXggPSBhWzRdLFxuICAgICAgYXkgPSBhWzVdLFxuICAgICAgYXogPSBhWzZdLFxuICAgICAgYXcgPSBhWzddO1xuICB2YXIgbWFnbml0dWRlID0gYnggKiBieCArIGJ5ICogYnkgKyBieiAqIGJ6ICsgYncgKiBidzsgLy9Pbmx5IHNjYWxlIGlmIGl0IG1ha2VzIHNlbnNlXG5cbiAgaWYgKG1hZ25pdHVkZSA+IDApIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDIgLyBtYWduaXR1ZGU7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyIC8gbWFnbml0dWRlO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMiAvIG1hZ25pdHVkZTtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc2xhdGlvblswXSA9IChheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5KSAqIDI7XG4gICAgdHJhbnNsYXRpb25bMV0gPSAoYXkgKiBidyArIGF3ICogYnkgKyBheiAqIGJ4IC0gYXggKiBieikgKiAyO1xuICAgIHRyYW5zbGF0aW9uWzJdID0gKGF6ICogYncgKyBhdyAqIGJ6ICsgYXggKiBieSAtIGF5ICogYngpICogMjtcbiAgfVxuXG4gIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKG91dCwgYSwgdHJhbnNsYXRpb24pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3IgY29tcG9uZW50IG9mIGEgdHJhbnNmb3JtYXRpb25cbiAqICBtYXRyaXguIElmIGEgbWF0cml4IGlzIGJ1aWx0IHdpdGggZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sXG4gKiAgdGhlIHJldHVybmVkIHZlY3RvciB3aWxsIGJlIHRoZSBzYW1lIGFzIHRoZSB0cmFuc2xhdGlvbiB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHRyYW5zbGF0aW9uIGNvbXBvbmVudFxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKG91dCwgbWF0KSB7XG4gIG91dFswXSA9IG1hdFsxMl07XG4gIG91dFsxXSA9IG1hdFsxM107XG4gIG91dFsyXSA9IG1hdFsxNF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudCBvZiBhIHRyYW5zZm9ybWF0aW9uXG4gKiAgbWF0cml4LiBJZiBhIG1hdHJpeCBpcyBidWlsdCB3aXRoIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uU2NhbGVcbiAqICB3aXRoIGEgbm9ybWFsaXplZCBRdWF0ZXJuaW9uIHBhcmFtdGVyLCB0aGUgcmV0dXJuZWQgdmVjdG9yIHdpbGwgYmVcbiAqICB0aGUgc2FtZSBhcyB0aGUgc2NhbGluZyB2ZWN0b3JcbiAqICBvcmlnaW5hbGx5IHN1cHBsaWVkLlxuICogQHBhcmFtICB7dmVjM30gb3V0IFZlY3RvciB0byByZWNlaXZlIHNjYWxpbmcgZmFjdG9yIGNvbXBvbmVudFxuICogQHBhcmFtICB7UmVhZG9ubHlNYXQ0fSBtYXQgTWF0cml4IHRvIGJlIGRlY29tcG9zZWQgKGlucHV0KVxuICogQHJldHVybiB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjYWxpbmcob3V0LCBtYXQpIHtcbiAgdmFyIG0xMSA9IG1hdFswXTtcbiAgdmFyIG0xMiA9IG1hdFsxXTtcbiAgdmFyIG0xMyA9IG1hdFsyXTtcbiAgdmFyIG0yMSA9IG1hdFs0XTtcbiAgdmFyIG0yMiA9IG1hdFs1XTtcbiAgdmFyIG0yMyA9IG1hdFs2XTtcbiAgdmFyIG0zMSA9IG1hdFs4XTtcbiAgdmFyIG0zMiA9IG1hdFs5XTtcbiAgdmFyIG0zMyA9IG1hdFsxMF07XG4gIG91dFswXSA9IE1hdGguaHlwb3QobTExLCBtMTIsIG0xMyk7XG4gIG91dFsxXSA9IE1hdGguaHlwb3QobTIxLCBtMjIsIG0yMyk7XG4gIG91dFsyXSA9IE1hdGguaHlwb3QobTMxLCBtMzIsIG0zMyk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJldHVybnMgYSBxdWF0ZXJuaW9uIHJlcHJlc2VudGluZyB0aGUgcm90YXRpb25hbCBjb21wb25lbnRcbiAqICBvZiBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeC4gSWYgYSBtYXRyaXggaXMgYnVpbHQgd2l0aFxuICogIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uLCB0aGUgcmV0dXJuZWQgcXVhdGVybmlvbiB3aWxsIGJlIHRoZVxuICogIHNhbWUgYXMgdGhlIHF1YXRlcm5pb24gb3JpZ2luYWxseSBzdXBwbGllZC5cbiAqIEBwYXJhbSB7cXVhdH0gb3V0IFF1YXRlcm5pb24gdG8gcmVjZWl2ZSB0aGUgcm90YXRpb24gY29tcG9uZW50XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gbWF0IE1hdHJpeCB0byBiZSBkZWNvbXBvc2VkIChpbnB1dClcbiAqIEByZXR1cm4ge3F1YXR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3RhdGlvbihvdXQsIG1hdCkge1xuICB2YXIgc2NhbGluZyA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBnZXRTY2FsaW5nKHNjYWxpbmcsIG1hdCk7XG4gIHZhciBpczEgPSAxIC8gc2NhbGluZ1swXTtcbiAgdmFyIGlzMiA9IDEgLyBzY2FsaW5nWzFdO1xuICB2YXIgaXMzID0gMSAvIHNjYWxpbmdbMl07XG4gIHZhciBzbTExID0gbWF0WzBdICogaXMxO1xuICB2YXIgc20xMiA9IG1hdFsxXSAqIGlzMjtcbiAgdmFyIHNtMTMgPSBtYXRbMl0gKiBpczM7XG4gIHZhciBzbTIxID0gbWF0WzRdICogaXMxO1xuICB2YXIgc20yMiA9IG1hdFs1XSAqIGlzMjtcbiAgdmFyIHNtMjMgPSBtYXRbNl0gKiBpczM7XG4gIHZhciBzbTMxID0gbWF0WzhdICogaXMxO1xuICB2YXIgc20zMiA9IG1hdFs5XSAqIGlzMjtcbiAgdmFyIHNtMzMgPSBtYXRbMTBdICogaXMzO1xuICB2YXIgdHJhY2UgPSBzbTExICsgc20yMiArIHNtMzM7XG4gIHZhciBTID0gMDtcblxuICBpZiAodHJhY2UgPiAwKSB7XG4gICAgUyA9IE1hdGguc3FydCh0cmFjZSArIDEuMCkgKiAyO1xuICAgIG91dFszXSA9IDAuMjUgKiBTO1xuICAgIG91dFswXSA9IChzbTIzIC0gc20zMikgLyBTO1xuICAgIG91dFsxXSA9IChzbTMxIC0gc20xMykgLyBTO1xuICAgIG91dFsyXSA9IChzbTEyIC0gc20yMSkgLyBTO1xuICB9IGVsc2UgaWYgKHNtMTEgPiBzbTIyICYmIHNtMTEgPiBzbTMzKSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTExIC0gc20yMiAtIHNtMzMpICogMjtcbiAgICBvdXRbM10gPSAoc20yMyAtIHNtMzIpIC8gUztcbiAgICBvdXRbMF0gPSAwLjI1ICogUztcbiAgICBvdXRbMV0gPSAoc20xMiArIHNtMjEpIC8gUztcbiAgICBvdXRbMl0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgfSBlbHNlIGlmIChzbTIyID4gc20zMykge1xuICAgIFMgPSBNYXRoLnNxcnQoMS4wICsgc20yMiAtIHNtMTEgLSBzbTMzKSAqIDI7XG4gICAgb3V0WzNdID0gKHNtMzEgLSBzbTEzKSAvIFM7XG4gICAgb3V0WzBdID0gKHNtMTIgKyBzbTIxKSAvIFM7XG4gICAgb3V0WzFdID0gMC4yNSAqIFM7XG4gICAgb3V0WzJdID0gKHNtMjMgKyBzbTMyKSAvIFM7XG4gIH0gZWxzZSB7XG4gICAgUyA9IE1hdGguc3FydCgxLjAgKyBzbTMzIC0gc20xMSAtIHNtMjIpICogMjtcbiAgICBvdXRbM10gPSAoc20xMiAtIHNtMjEpIC8gUztcbiAgICBvdXRbMF0gPSAoc20zMSArIHNtMTMpIC8gUztcbiAgICBvdXRbMV0gPSAoc20yMyArIHNtMzIpIC8gUztcbiAgICBvdXRbMl0gPSAwLjI1ICogUztcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBtYXRyaXggZnJvbSBhIHF1YXRlcm5pb24gcm90YXRpb24sIHZlY3RvciB0cmFuc2xhdGlvbiBhbmQgdmVjdG9yIHNjYWxlXG4gKiBUaGlzIGlzIGVxdWl2YWxlbnQgdG8gKGJ1dCBtdWNoIGZhc3RlciB0aGFuKTpcbiAqXG4gKiAgICAgbWF0NC5pZGVudGl0eShkZXN0KTtcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCB2ZWMpO1xuICogICAgIGxldCBxdWF0TWF0ID0gbWF0NC5jcmVhdGUoKTtcbiAqICAgICBxdWF0NC50b01hdDQocXVhdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5tdWx0aXBseShkZXN0LCBxdWF0TWF0KTtcbiAqICAgICBtYXQ0LnNjYWxlKGRlc3QsIHNjYWxlKVxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7cXVhdDR9IHEgUm90YXRpb24gcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHYgVHJhbnNsYXRpb24gdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gcyBTY2FsaW5nIHZlY3RvclxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlKG91dCwgcSwgdiwgcykge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB4eSA9IHggKiB5MjtcbiAgdmFyIHh6ID0geCAqIHoyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB5eiA9IHkgKiB6MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICB2YXIgc3ggPSBzWzBdO1xuICB2YXIgc3kgPSBzWzFdO1xuICB2YXIgc3ogPSBzWzJdO1xuICBvdXRbMF0gPSAoMSAtICh5eSArIHp6KSkgKiBzeDtcbiAgb3V0WzFdID0gKHh5ICsgd3opICogc3g7XG4gIG91dFsyXSA9ICh4eiAtIHd5KSAqIHN4O1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAoeHkgLSB3eikgKiBzeTtcbiAgb3V0WzVdID0gKDEgLSAoeHggKyB6eikpICogc3k7XG4gIG91dFs2XSA9ICh5eiArIHd4KSAqIHN5O1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAoeHogKyB3eSkgKiBzejtcbiAgb3V0WzldID0gKHl6IC0gd3gpICogc3o7XG4gIG91dFsxMF0gPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSB2WzBdO1xuICBvdXRbMTNdID0gdlsxXTtcbiAgb3V0WzE0XSA9IHZbMl07XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbWF0cml4IGZyb20gYSBxdWF0ZXJuaW9uIHJvdGF0aW9uLCB2ZWN0b3IgdHJhbnNsYXRpb24gYW5kIHZlY3RvciBzY2FsZSwgcm90YXRpbmcgYW5kIHNjYWxpbmcgYXJvdW5kIHRoZSBnaXZlbiBvcmlnaW5cbiAqIFRoaXMgaXMgZXF1aXZhbGVudCB0byAoYnV0IG11Y2ggZmFzdGVyIHRoYW4pOlxuICpcbiAqICAgICBtYXQ0LmlkZW50aXR5KGRlc3QpO1xuICogICAgIG1hdDQudHJhbnNsYXRlKGRlc3QsIHZlYyk7XG4gKiAgICAgbWF0NC50cmFuc2xhdGUoZGVzdCwgb3JpZ2luKTtcbiAqICAgICBsZXQgcXVhdE1hdCA9IG1hdDQuY3JlYXRlKCk7XG4gKiAgICAgcXVhdDQudG9NYXQ0KHF1YXQsIHF1YXRNYXQpO1xuICogICAgIG1hdDQubXVsdGlwbHkoZGVzdCwgcXVhdE1hdCk7XG4gKiAgICAgbWF0NC5zY2FsZShkZXN0LCBzY2FsZSlcbiAqICAgICBtYXQ0LnRyYW5zbGF0ZShkZXN0LCBuZWdhdGl2ZU9yaWdpbik7XG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtxdWF0NH0gcSBSb3RhdGlvbiBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdiBUcmFuc2xhdGlvbiB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBzIFNjYWxpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gbyBUaGUgb3JpZ2luIHZlY3RvciBhcm91bmQgd2hpY2ggdG8gc2NhbGUgYW5kIHJvdGF0ZVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tUm90YXRpb25UcmFuc2xhdGlvblNjYWxlT3JpZ2luKG91dCwgcSwgdiwgcywgbykge1xuICAvLyBRdWF0ZXJuaW9uIG1hdGhcbiAgdmFyIHggPSBxWzBdLFxuICAgICAgeSA9IHFbMV0sXG4gICAgICB6ID0gcVsyXSxcbiAgICAgIHcgPSBxWzNdO1xuICB2YXIgeDIgPSB4ICsgeDtcbiAgdmFyIHkyID0geSArIHk7XG4gIHZhciB6MiA9IHogKyB6O1xuICB2YXIgeHggPSB4ICogeDI7XG4gIHZhciB4eSA9IHggKiB5MjtcbiAgdmFyIHh6ID0geCAqIHoyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB5eiA9IHkgKiB6MjtcbiAgdmFyIHp6ID0geiAqIHoyO1xuICB2YXIgd3ggPSB3ICogeDI7XG4gIHZhciB3eSA9IHcgKiB5MjtcbiAgdmFyIHd6ID0gdyAqIHoyO1xuICB2YXIgc3ggPSBzWzBdO1xuICB2YXIgc3kgPSBzWzFdO1xuICB2YXIgc3ogPSBzWzJdO1xuICB2YXIgb3ggPSBvWzBdO1xuICB2YXIgb3kgPSBvWzFdO1xuICB2YXIgb3ogPSBvWzJdO1xuICB2YXIgb3V0MCA9ICgxIC0gKHl5ICsgenopKSAqIHN4O1xuICB2YXIgb3V0MSA9ICh4eSArIHd6KSAqIHN4O1xuICB2YXIgb3V0MiA9ICh4eiAtIHd5KSAqIHN4O1xuICB2YXIgb3V0NCA9ICh4eSAtIHd6KSAqIHN5O1xuICB2YXIgb3V0NSA9ICgxIC0gKHh4ICsgenopKSAqIHN5O1xuICB2YXIgb3V0NiA9ICh5eiArIHd4KSAqIHN5O1xuICB2YXIgb3V0OCA9ICh4eiArIHd5KSAqIHN6O1xuICB2YXIgb3V0OSA9ICh5eiAtIHd4KSAqIHN6O1xuICB2YXIgb3V0MTAgPSAoMSAtICh4eCArIHl5KSkgKiBzejtcbiAgb3V0WzBdID0gb3V0MDtcbiAgb3V0WzFdID0gb3V0MTtcbiAgb3V0WzJdID0gb3V0MjtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gb3V0NDtcbiAgb3V0WzVdID0gb3V0NTtcbiAgb3V0WzZdID0gb3V0NjtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gb3V0ODtcbiAgb3V0WzldID0gb3V0OTtcbiAgb3V0WzEwXSA9IG91dDEwO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IHZbMF0gKyBveCAtIChvdXQwICogb3ggKyBvdXQ0ICogb3kgKyBvdXQ4ICogb3opO1xuICBvdXRbMTNdID0gdlsxXSArIG95IC0gKG91dDEgKiBveCArIG91dDUgKiBveSArIG91dDkgKiBveik7XG4gIG91dFsxNF0gPSB2WzJdICsgb3ogLSAob3V0MiAqIG94ICsgb3V0NiAqIG95ICsgb3V0MTAgKiBveik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIGEgNHg0IG1hdHJpeCBmcm9tIHRoZSBnaXZlbiBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IHEgUXVhdGVybmlvbiB0byBjcmVhdGUgbWF0cml4IGZyb21cbiAqXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21RdWF0KG91dCwgcSkge1xuICB2YXIgeCA9IHFbMF0sXG4gICAgICB5ID0gcVsxXSxcbiAgICAgIHogPSBxWzJdLFxuICAgICAgdyA9IHFbM107XG4gIHZhciB4MiA9IHggKyB4O1xuICB2YXIgeTIgPSB5ICsgeTtcbiAgdmFyIHoyID0geiArIHo7XG4gIHZhciB4eCA9IHggKiB4MjtcbiAgdmFyIHl4ID0geSAqIHgyO1xuICB2YXIgeXkgPSB5ICogeTI7XG4gIHZhciB6eCA9IHogKiB4MjtcbiAgdmFyIHp5ID0geiAqIHkyO1xuICB2YXIgenogPSB6ICogejI7XG4gIHZhciB3eCA9IHcgKiB4MjtcbiAgdmFyIHd5ID0gdyAqIHkyO1xuICB2YXIgd3ogPSB3ICogejI7XG4gIG91dFswXSA9IDEgLSB5eSAtIHp6O1xuICBvdXRbMV0gPSB5eCArIHd6O1xuICBvdXRbMl0gPSB6eCAtIHd5O1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB5eCAtIHd6O1xuICBvdXRbNV0gPSAxIC0geHggLSB6ejtcbiAgb3V0WzZdID0genkgKyB3eDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0genggKyB3eTtcbiAgb3V0WzldID0genkgLSB3eDtcbiAgb3V0WzEwXSA9IDEgLSB4eCAtIHl5O1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTRdID0gMDtcbiAgb3V0WzE1XSA9IDE7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEdlbmVyYXRlcyBhIGZydXN0dW0gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7TnVtYmVyfSBsZWZ0IExlZnQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSByaWdodCBSaWdodCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtOdW1iZXJ9IGJvdHRvbSBCb3R0b20gYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7TnVtYmVyfSB0b3AgVG9wIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge051bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcnVzdHVtKG91dCwgbGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgdmFyIHJsID0gMSAvIChyaWdodCAtIGxlZnQpO1xuICB2YXIgdGIgPSAxIC8gKHRvcCAtIGJvdHRvbSk7XG4gIHZhciBuZiA9IDEgLyAobmVhciAtIGZhcik7XG4gIG91dFswXSA9IG5lYXIgKiAyICogcmw7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IG5lYXIgKiAyICogdGI7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IChyaWdodCArIGxlZnQpICogcmw7XG4gIG91dFs5XSA9ICh0b3AgKyBib3R0b20pICogdGI7XG4gIG91dFsxMF0gPSAoZmFyICsgbmVhcikgKiBuZjtcbiAgb3V0WzExXSA9IC0xO1xuICBvdXRbMTJdID0gMDtcbiAgb3V0WzEzXSA9IDA7XG4gIG91dFsxNF0gPSBmYXIgKiBuZWFyICogMiAqIG5mO1xuICBvdXRbMTVdID0gMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gYm91bmRzLlxuICogVGhlIG5lYXIvZmFyIGNsaXAgcGxhbmVzIGNvcnJlc3BvbmQgdG8gYSBub3JtYWxpemVkIGRldmljZSBjb29yZGluYXRlIFogcmFuZ2Ugb2YgWy0xLCAxXSxcbiAqIHdoaWNoIG1hdGNoZXMgV2ViR0wvT3BlbkdMJ3MgY2xpcCB2b2x1bWUuXG4gKiBQYXNzaW5nIG51bGwvdW5kZWZpbmVkL25vIHZhbHVlIGZvciBmYXIgd2lsbCBnZW5lcmF0ZSBpbmZpbml0ZSBwcm9qZWN0aW9uIG1hdHJpeC5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bSwgY2FuIGJlIG51bGwgb3IgSW5maW5pdHlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVOTyhvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgbmY7XG4gIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGY7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMV0gPSAtMTtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTVdID0gMDtcblxuICBpZiAoZmFyICE9IG51bGwgJiYgZmFyICE9PSBJbmZpbml0eSkge1xuICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTBdID0gKGZhciArIG5lYXIpICogbmY7XG4gICAgb3V0WzE0XSA9IDIgKiBmYXIgKiBuZWFyICogbmY7XG4gIH0gZWxzZSB7XG4gICAgb3V0WzEwXSA9IC0xO1xuICAgIG91dFsxNF0gPSAtMiAqIG5lYXI7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQucGVyc3BlY3RpdmVOT31cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgcGVyc3BlY3RpdmUgPSBwZXJzcGVjdGl2ZU5PO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBwZXJzcGVjdGl2ZSBwcm9qZWN0aW9uIG1hdHJpeCBzdWl0YWJsZSBmb3IgV2ViR1BVIHdpdGggdGhlIGdpdmVuIGJvdW5kcy5cbiAqIFRoZSBuZWFyL2ZhciBjbGlwIHBsYW5lcyBjb3JyZXNwb25kIHRvIGEgbm9ybWFsaXplZCBkZXZpY2UgY29vcmRpbmF0ZSBaIHJhbmdlIG9mIFswLCAxXSxcbiAqIHdoaWNoIG1hdGNoZXMgV2ViR1BVL1Z1bGthbi9EaXJlY3RYL01ldGFsJ3MgY2xpcCB2b2x1bWUuXG4gKiBQYXNzaW5nIG51bGwvdW5kZWZpbmVkL25vIHZhbHVlIGZvciBmYXIgd2lsbCBnZW5lcmF0ZSBpbmZpbml0ZSBwcm9qZWN0aW9uIG1hdHJpeC5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gZm92eSBWZXJ0aWNhbCBmaWVsZCBvZiB2aWV3IGluIHJhZGlhbnNcbiAqIEBwYXJhbSB7bnVtYmVyfSBhc3BlY3QgQXNwZWN0IHJhdGlvLiB0eXBpY2FsbHkgdmlld3BvcnQgd2lkdGgvaGVpZ2h0XG4gKiBAcGFyYW0ge251bWJlcn0gbmVhciBOZWFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gZmFyIEZhciBib3VuZCBvZiB0aGUgZnJ1c3R1bSwgY2FuIGJlIG51bGwgb3IgSW5maW5pdHlcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmVaTyhvdXQsIGZvdnksIGFzcGVjdCwgbmVhciwgZmFyKSB7XG4gIHZhciBmID0gMS4wIC8gTWF0aC50YW4oZm92eSAvIDIpLFxuICAgICAgbmY7XG4gIG91dFswXSA9IGYgLyBhc3BlY3Q7XG4gIG91dFsxXSA9IDA7XG4gIG91dFsyXSA9IDA7XG4gIG91dFszXSA9IDA7XG4gIG91dFs0XSA9IDA7XG4gIG91dFs1XSA9IGY7XG4gIG91dFs2XSA9IDA7XG4gIG91dFs3XSA9IDA7XG4gIG91dFs4XSA9IDA7XG4gIG91dFs5XSA9IDA7XG4gIG91dFsxMV0gPSAtMTtcbiAgb3V0WzEyXSA9IDA7XG4gIG91dFsxM10gPSAwO1xuICBvdXRbMTVdID0gMDtcblxuICBpZiAoZmFyICE9IG51bGwgJiYgZmFyICE9PSBJbmZpbml0eSkge1xuICAgIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgICBvdXRbMTBdID0gZmFyICogbmY7XG4gICAgb3V0WzE0XSA9IGZhciAqIG5lYXIgKiBuZjtcbiAgfSBlbHNlIHtcbiAgICBvdXRbMTBdID0gLTE7XG4gICAgb3V0WzE0XSA9IC1uZWFyO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGEgcGVyc3BlY3RpdmUgcHJvamVjdGlvbiBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZmllbGQgb2Ygdmlldy5cbiAqIFRoaXMgaXMgcHJpbWFyaWx5IHVzZWZ1bCBmb3IgZ2VuZXJhdGluZyBwcm9qZWN0aW9uIG1hdHJpY2VzIHRvIGJlIHVzZWRcbiAqIHdpdGggdGhlIHN0aWxsIGV4cGVyaWVtZW50YWwgV2ViVlIgQVBJLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7T2JqZWN0fSBmb3YgT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGZvbGxvd2luZyB2YWx1ZXM6IHVwRGVncmVlcywgZG93bkRlZ3JlZXMsIGxlZnREZWdyZWVzLCByaWdodERlZ3JlZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcnNwZWN0aXZlRnJvbUZpZWxkT2ZWaWV3KG91dCwgZm92LCBuZWFyLCBmYXIpIHtcbiAgdmFyIHVwVGFuID0gTWF0aC50YW4oZm92LnVwRGVncmVlcyAqIE1hdGguUEkgLyAxODAuMCk7XG4gIHZhciBkb3duVGFuID0gTWF0aC50YW4oZm92LmRvd25EZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIGxlZnRUYW4gPSBNYXRoLnRhbihmb3YubGVmdERlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwLjApO1xuICB2YXIgcmlnaHRUYW4gPSBNYXRoLnRhbihmb3YucmlnaHREZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wKTtcbiAgdmFyIHhTY2FsZSA9IDIuMCAvIChsZWZ0VGFuICsgcmlnaHRUYW4pO1xuICB2YXIgeVNjYWxlID0gMi4wIC8gKHVwVGFuICsgZG93blRhbik7XG4gIG91dFswXSA9IHhTY2FsZTtcbiAgb3V0WzFdID0gMC4wO1xuICBvdXRbMl0gPSAwLjA7XG4gIG91dFszXSA9IDAuMDtcbiAgb3V0WzRdID0gMC4wO1xuICBvdXRbNV0gPSB5U2NhbGU7XG4gIG91dFs2XSA9IDAuMDtcbiAgb3V0WzddID0gMC4wO1xuICBvdXRbOF0gPSAtKChsZWZ0VGFuIC0gcmlnaHRUYW4pICogeFNjYWxlICogMC41KTtcbiAgb3V0WzldID0gKHVwVGFuIC0gZG93blRhbikgKiB5U2NhbGUgKiAwLjU7XG4gIG91dFsxMF0gPSBmYXIgLyAobmVhciAtIGZhcik7XG4gIG91dFsxMV0gPSAtMS4wO1xuICBvdXRbMTJdID0gMC4wO1xuICBvdXRbMTNdID0gMC4wO1xuICBvdXRbMTRdID0gZmFyICogbmVhciAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzE1XSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGEgb3J0aG9nb25hbCBwcm9qZWN0aW9uIG1hdHJpeCB3aXRoIHRoZSBnaXZlbiBib3VuZHMuXG4gKiBUaGUgbmVhci9mYXIgY2xpcCBwbGFuZXMgY29ycmVzcG9uZCB0byBhIG5vcm1hbGl6ZWQgZGV2aWNlIGNvb3JkaW5hdGUgWiByYW5nZSBvZiBbLTEsIDFdLFxuICogd2hpY2ggbWF0Y2hlcyBXZWJHTC9PcGVuR0wncyBjbGlwIHZvbHVtZS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBMZWZ0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gcmlnaHQgUmlnaHQgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBib3R0b20gQm90dG9tIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gdG9wIFRvcCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IG5lYXIgTmVhciBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IGZhciBGYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gb3J0aG9OTyhvdXQsIGxlZnQsIHJpZ2h0LCBib3R0b20sIHRvcCwgbmVhciwgZmFyKSB7XG4gIHZhciBsciA9IDEgLyAobGVmdCAtIHJpZ2h0KTtcbiAgdmFyIGJ0ID0gMSAvIChib3R0b20gLSB0b3ApO1xuICB2YXIgbmYgPSAxIC8gKG5lYXIgLSBmYXIpO1xuICBvdXRbMF0gPSAtMiAqIGxyO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSAwO1xuICBvdXRbNV0gPSAtMiAqIGJ0O1xuICBvdXRbNl0gPSAwO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSAwO1xuICBvdXRbOV0gPSAwO1xuICBvdXRbMTBdID0gMiAqIG5mO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICBvdXRbMTRdID0gKGZhciArIG5lYXIpICogbmY7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIG1hdDQub3J0aG9OT31cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgb3J0aG8gPSBvcnRob05PO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBvcnRob2dvbmFsIHByb2plY3Rpb24gbWF0cml4IHdpdGggdGhlIGdpdmVuIGJvdW5kcy5cbiAqIFRoZSBuZWFyL2ZhciBjbGlwIHBsYW5lcyBjb3JyZXNwb25kIHRvIGEgbm9ybWFsaXplZCBkZXZpY2UgY29vcmRpbmF0ZSBaIHJhbmdlIG9mIFswLCAxXSxcbiAqIHdoaWNoIG1hdGNoZXMgV2ViR1BVL1Z1bGthbi9EaXJlY3RYL01ldGFsJ3MgY2xpcCB2b2x1bWUuXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgbWF0NCBmcnVzdHVtIG1hdHJpeCB3aWxsIGJlIHdyaXR0ZW4gaW50b1xuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgTGVmdCBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFJpZ2h0IGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcGFyYW0ge251bWJlcn0gYm90dG9tIEJvdHRvbSBib3VuZCBvZiB0aGUgZnJ1c3R1bVxuICogQHBhcmFtIHtudW1iZXJ9IHRvcCBUb3AgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBuZWFyIE5lYXIgYm91bmQgb2YgdGhlIGZydXN0dW1cbiAqIEBwYXJhbSB7bnVtYmVyfSBmYXIgRmFyIGJvdW5kIG9mIHRoZSBmcnVzdHVtXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG9ydGhvWk8ob3V0LCBsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICB2YXIgbHIgPSAxIC8gKGxlZnQgLSByaWdodCk7XG4gIHZhciBidCA9IDEgLyAoYm90dG9tIC0gdG9wKTtcbiAgdmFyIG5mID0gMSAvIChuZWFyIC0gZmFyKTtcbiAgb3V0WzBdID0gLTIgKiBscjtcbiAgb3V0WzFdID0gMDtcbiAgb3V0WzJdID0gMDtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gMDtcbiAgb3V0WzVdID0gLTIgKiBidDtcbiAgb3V0WzZdID0gMDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gMDtcbiAgb3V0WzldID0gMDtcbiAgb3V0WzEwXSA9IG5mO1xuICBvdXRbMTFdID0gMDtcbiAgb3V0WzEyXSA9IChsZWZ0ICsgcmlnaHQpICogbHI7XG4gIG91dFsxM10gPSAodG9wICsgYm90dG9tKSAqIGJ0O1xuICBvdXRbMTRdID0gbmVhciAqIG5mO1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGEgbG9vay1hdCBtYXRyaXggd2l0aCB0aGUgZ2l2ZW4gZXllIHBvc2l0aW9uLCBmb2NhbCBwb2ludCwgYW5kIHVwIGF4aXMuXG4gKiBJZiB5b3Ugd2FudCBhIG1hdHJpeCB0aGF0IGFjdHVhbGx5IG1ha2VzIGFuIG9iamVjdCBsb29rIGF0IGFub3RoZXIgb2JqZWN0LCB5b3Ugc2hvdWxkIHVzZSB0YXJnZXRUbyBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IG1hdDQgZnJ1c3R1bSBtYXRyaXggd2lsbCBiZSB3cml0dGVuIGludG9cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBleWUgUG9zaXRpb24gb2YgdGhlIHZpZXdlclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGNlbnRlciBQb2ludCB0aGUgdmlld2VyIGlzIGxvb2tpbmcgYXRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSB1cCB2ZWMzIHBvaW50aW5nIHVwXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxvb2tBdChvdXQsIGV5ZSwgY2VudGVyLCB1cCkge1xuICB2YXIgeDAsIHgxLCB4MiwgeTAsIHkxLCB5MiwgejAsIHoxLCB6MiwgbGVuO1xuICB2YXIgZXlleCA9IGV5ZVswXTtcbiAgdmFyIGV5ZXkgPSBleWVbMV07XG4gIHZhciBleWV6ID0gZXllWzJdO1xuICB2YXIgdXB4ID0gdXBbMF07XG4gIHZhciB1cHkgPSB1cFsxXTtcbiAgdmFyIHVweiA9IHVwWzJdO1xuICB2YXIgY2VudGVyeCA9IGNlbnRlclswXTtcbiAgdmFyIGNlbnRlcnkgPSBjZW50ZXJbMV07XG4gIHZhciBjZW50ZXJ6ID0gY2VudGVyWzJdO1xuXG4gIGlmIChNYXRoLmFicyhleWV4IC0gY2VudGVyeCkgPCBnbE1hdHJpeC5FUFNJTE9OICYmIE1hdGguYWJzKGV5ZXkgLSBjZW50ZXJ5KSA8IGdsTWF0cml4LkVQU0lMT04gJiYgTWF0aC5hYnMoZXlleiAtIGNlbnRlcnopIDwgZ2xNYXRyaXguRVBTSUxPTikge1xuICAgIHJldHVybiBpZGVudGl0eShvdXQpO1xuICB9XG5cbiAgejAgPSBleWV4IC0gY2VudGVyeDtcbiAgejEgPSBleWV5IC0gY2VudGVyeTtcbiAgejIgPSBleWV6IC0gY2VudGVyejtcbiAgbGVuID0gMSAvIE1hdGguaHlwb3QoejAsIHoxLCB6Mik7XG4gIHowICo9IGxlbjtcbiAgejEgKj0gbGVuO1xuICB6MiAqPSBsZW47XG4gIHgwID0gdXB5ICogejIgLSB1cHogKiB6MTtcbiAgeDEgPSB1cHogKiB6MCAtIHVweCAqIHoyO1xuICB4MiA9IHVweCAqIHoxIC0gdXB5ICogejA7XG4gIGxlbiA9IE1hdGguaHlwb3QoeDAsIHgxLCB4Mik7XG5cbiAgaWYgKCFsZW4pIHtcbiAgICB4MCA9IDA7XG4gICAgeDEgPSAwO1xuICAgIHgyID0gMDtcbiAgfSBlbHNlIHtcbiAgICBsZW4gPSAxIC8gbGVuO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG5cbiAgeTAgPSB6MSAqIHgyIC0gejIgKiB4MTtcbiAgeTEgPSB6MiAqIHgwIC0gejAgKiB4MjtcbiAgeTIgPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgbGVuID0gTWF0aC5oeXBvdCh5MCwgeTEsIHkyKTtcblxuICBpZiAoIWxlbikge1xuICAgIHkwID0gMDtcbiAgICB5MSA9IDA7XG4gICAgeTIgPSAwO1xuICB9IGVsc2Uge1xuICAgIGxlbiA9IDEgLyBsZW47XG4gICAgeTAgKj0gbGVuO1xuICAgIHkxICo9IGxlbjtcbiAgICB5MiAqPSBsZW47XG4gIH1cblxuICBvdXRbMF0gPSB4MDtcbiAgb3V0WzFdID0geTA7XG4gIG91dFsyXSA9IHowO1xuICBvdXRbM10gPSAwO1xuICBvdXRbNF0gPSB4MTtcbiAgb3V0WzVdID0geTE7XG4gIG91dFs2XSA9IHoxO1xuICBvdXRbN10gPSAwO1xuICBvdXRbOF0gPSB4MjtcbiAgb3V0WzldID0geTI7XG4gIG91dFsxMF0gPSB6MjtcbiAgb3V0WzExXSA9IDA7XG4gIG91dFsxMl0gPSAtKHgwICogZXlleCArIHgxICogZXlleSArIHgyICogZXlleik7XG4gIG91dFsxM10gPSAtKHkwICogZXlleCArIHkxICogZXlleSArIHkyICogZXlleik7XG4gIG91dFsxNF0gPSAtKHowICogZXlleCArIHoxICogZXlleSArIHoyICogZXlleik7XG4gIG91dFsxNV0gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBtYXRyaXggdGhhdCBtYWtlcyBzb21ldGhpbmcgbG9vayBhdCBzb21ldGhpbmcgZWxzZS5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCBtYXQ0IGZydXN0dW0gbWF0cml4IHdpbGwgYmUgd3JpdHRlbiBpbnRvXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gZXllIFBvc2l0aW9uIG9mIHRoZSB2aWV3ZXJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBjZW50ZXIgUG9pbnQgdGhlIHZpZXdlciBpcyBsb29raW5nIGF0XG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdXAgdmVjMyBwb2ludGluZyB1cFxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0YXJnZXRUbyhvdXQsIGV5ZSwgdGFyZ2V0LCB1cCkge1xuICB2YXIgZXlleCA9IGV5ZVswXSxcbiAgICAgIGV5ZXkgPSBleWVbMV0sXG4gICAgICBleWV6ID0gZXllWzJdLFxuICAgICAgdXB4ID0gdXBbMF0sXG4gICAgICB1cHkgPSB1cFsxXSxcbiAgICAgIHVweiA9IHVwWzJdO1xuICB2YXIgejAgPSBleWV4IC0gdGFyZ2V0WzBdLFxuICAgICAgejEgPSBleWV5IC0gdGFyZ2V0WzFdLFxuICAgICAgejIgPSBleWV6IC0gdGFyZ2V0WzJdO1xuICB2YXIgbGVuID0gejAgKiB6MCArIHoxICogejEgKyB6MiAqIHoyO1xuXG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIHowICo9IGxlbjtcbiAgICB6MSAqPSBsZW47XG4gICAgejIgKj0gbGVuO1xuICB9XG5cbiAgdmFyIHgwID0gdXB5ICogejIgLSB1cHogKiB6MSxcbiAgICAgIHgxID0gdXB6ICogejAgLSB1cHggKiB6MixcbiAgICAgIHgyID0gdXB4ICogejEgLSB1cHkgKiB6MDtcbiAgbGVuID0geDAgKiB4MCArIHgxICogeDEgKyB4MiAqIHgyO1xuXG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbGVuID0gMSAvIE1hdGguc3FydChsZW4pO1xuICAgIHgwICo9IGxlbjtcbiAgICB4MSAqPSBsZW47XG4gICAgeDIgKj0gbGVuO1xuICB9XG5cbiAgb3V0WzBdID0geDA7XG4gIG91dFsxXSA9IHgxO1xuICBvdXRbMl0gPSB4MjtcbiAgb3V0WzNdID0gMDtcbiAgb3V0WzRdID0gejEgKiB4MiAtIHoyICogeDE7XG4gIG91dFs1XSA9IHoyICogeDAgLSB6MCAqIHgyO1xuICBvdXRbNl0gPSB6MCAqIHgxIC0gejEgKiB4MDtcbiAgb3V0WzddID0gMDtcbiAgb3V0WzhdID0gejA7XG4gIG91dFs5XSA9IHoxO1xuICBvdXRbMTBdID0gejI7XG4gIG91dFsxMV0gPSAwO1xuICBvdXRbMTJdID0gZXlleDtcbiAgb3V0WzEzXSA9IGV5ZXk7XG4gIG91dFsxNF0gPSBleWV6O1xuICBvdXRbMTVdID0gMTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIG1hdDRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBtYXRyaXggdG8gcmVwcmVzZW50IGFzIGEgc3RyaW5nXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG1hdHJpeFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzdHIoYSkge1xuICByZXR1cm4gXCJtYXQ0KFwiICsgYVswXSArIFwiLCBcIiArIGFbMV0gKyBcIiwgXCIgKyBhWzJdICsgXCIsIFwiICsgYVszXSArIFwiLCBcIiArIGFbNF0gKyBcIiwgXCIgKyBhWzVdICsgXCIsIFwiICsgYVs2XSArIFwiLCBcIiArIGFbN10gKyBcIiwgXCIgKyBhWzhdICsgXCIsIFwiICsgYVs5XSArIFwiLCBcIiArIGFbMTBdICsgXCIsIFwiICsgYVsxMV0gKyBcIiwgXCIgKyBhWzEyXSArIFwiLCBcIiArIGFbMTNdICsgXCIsIFwiICsgYVsxNF0gKyBcIiwgXCIgKyBhWzE1XSArIFwiKVwiO1xufVxuLyoqXG4gKiBSZXR1cm5zIEZyb2Jlbml1cyBub3JtIG9mIGEgbWF0NFxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBtYXRyaXggdG8gY2FsY3VsYXRlIEZyb2Jlbml1cyBub3JtIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBGcm9iZW5pdXMgbm9ybVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9iKGEpIHtcbiAgcmV0dXJuIE1hdGguaHlwb3QoYVswXSwgYVsxXSwgYVsyXSwgYVszXSwgYVs0XSwgYVs1XSwgYVs2XSwgYVs3XSwgYVs4XSwgYVs5XSwgYVsxMF0sIGFbMTFdLCBhWzEyXSwgYVsxM10sIGFbMTRdLCBhWzE1XSk7XG59XG4vKipcbiAqIEFkZHMgdHdvIG1hdDQnc1xuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgbWF0cml4XG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7bWF0NH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdO1xuICBvdXRbNV0gPSBhWzVdICsgYls1XTtcbiAgb3V0WzZdID0gYVs2XSArIGJbNl07XG4gIG91dFs3XSA9IGFbN10gKyBiWzddO1xuICBvdXRbOF0gPSBhWzhdICsgYls4XTtcbiAgb3V0WzldID0gYVs5XSArIGJbOV07XG4gIG91dFsxMF0gPSBhWzEwXSArIGJbMTBdO1xuICBvdXRbMTFdID0gYVsxMV0gKyBiWzExXTtcbiAgb3V0WzEyXSA9IGFbMTJdICsgYlsxMl07XG4gIG91dFsxM10gPSBhWzEzXSArIGJbMTNdO1xuICBvdXRbMTRdID0gYVsxNF0gKyBiWzE0XTtcbiAgb3V0WzE1XSA9IGFbMTVdICsgYlsxNV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFN1YnRyYWN0cyBtYXRyaXggYiBmcm9tIG1hdHJpeCBhXG4gKlxuICogQHBhcmFtIHttYXQ0fSBvdXQgdGhlIHJlY2VpdmluZyBtYXRyaXhcbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHttYXQ0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICBvdXRbNF0gPSBhWzRdIC0gYls0XTtcbiAgb3V0WzVdID0gYVs1XSAtIGJbNV07XG4gIG91dFs2XSA9IGFbNl0gLSBiWzZdO1xuICBvdXRbN10gPSBhWzddIC0gYls3XTtcbiAgb3V0WzhdID0gYVs4XSAtIGJbOF07XG4gIG91dFs5XSA9IGFbOV0gLSBiWzldO1xuICBvdXRbMTBdID0gYVsxMF0gLSBiWzEwXTtcbiAgb3V0WzExXSA9IGFbMTFdIC0gYlsxMV07XG4gIG91dFsxMl0gPSBhWzEyXSAtIGJbMTJdO1xuICBvdXRbMTNdID0gYVsxM10gLSBiWzEzXTtcbiAgb3V0WzE0XSA9IGFbMTRdIC0gYlsxNF07XG4gIG91dFsxNV0gPSBhWzE1XSAtIGJbMTVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBNdWx0aXBseSBlYWNoIGVsZW1lbnQgb2YgdGhlIG1hdHJpeCBieSBhIHNjYWxhci5cbiAqXG4gKiBAcGFyYW0ge21hdDR9IG91dCB0aGUgcmVjZWl2aW5nIG1hdHJpeFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGEgdGhlIG1hdHJpeCB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSBtYXRyaXgncyBlbGVtZW50cyBieVxuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhcihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICBvdXRbMl0gPSBhWzJdICogYjtcbiAgb3V0WzNdID0gYVszXSAqIGI7XG4gIG91dFs0XSA9IGFbNF0gKiBiO1xuICBvdXRbNV0gPSBhWzVdICogYjtcbiAgb3V0WzZdID0gYVs2XSAqIGI7XG4gIG91dFs3XSA9IGFbN10gKiBiO1xuICBvdXRbOF0gPSBhWzhdICogYjtcbiAgb3V0WzldID0gYVs5XSAqIGI7XG4gIG91dFsxMF0gPSBhWzEwXSAqIGI7XG4gIG91dFsxMV0gPSBhWzExXSAqIGI7XG4gIG91dFsxMl0gPSBhWzEyXSAqIGI7XG4gIG91dFsxM10gPSBhWzEzXSAqIGI7XG4gIG91dFsxNF0gPSBhWzE0XSAqIGI7XG4gIG91dFsxNV0gPSBhWzE1XSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEFkZHMgdHdvIG1hdDQncyBhZnRlciBtdWx0aXBseWluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlY29uZCBvcGVyYW5kIGJ5IGEgc2NhbGFyIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bWF0NH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiJ3MgZWxlbWVudHMgYnkgYmVmb3JlIGFkZGluZ1xuICogQHJldHVybnMge21hdDR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseVNjYWxhckFuZEFkZChvdXQsIGEsIGIsIHNjYWxlKSB7XG4gIG91dFswXSA9IGFbMF0gKyBiWzBdICogc2NhbGU7XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdICogc2NhbGU7XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdICogc2NhbGU7XG4gIG91dFszXSA9IGFbM10gKyBiWzNdICogc2NhbGU7XG4gIG91dFs0XSA9IGFbNF0gKyBiWzRdICogc2NhbGU7XG4gIG91dFs1XSA9IGFbNV0gKyBiWzVdICogc2NhbGU7XG4gIG91dFs2XSA9IGFbNl0gKyBiWzZdICogc2NhbGU7XG4gIG91dFs3XSA9IGFbN10gKyBiWzddICogc2NhbGU7XG4gIG91dFs4XSA9IGFbOF0gKyBiWzhdICogc2NhbGU7XG4gIG91dFs5XSA9IGFbOV0gKyBiWzldICogc2NhbGU7XG4gIG91dFsxMF0gPSBhWzEwXSArIGJbMTBdICogc2NhbGU7XG4gIG91dFsxMV0gPSBhWzExXSArIGJbMTFdICogc2NhbGU7XG4gIG91dFsxMl0gPSBhWzEyXSArIGJbMTJdICogc2NhbGU7XG4gIG91dFsxM10gPSBhWzEzXSArIGJbMTNdICogc2NhbGU7XG4gIG91dFsxNF0gPSBhWzE0XSArIGJbMTRdICogc2NhbGU7XG4gIG91dFsxNV0gPSBhWzE1XSArIGJbMTVdICogc2NhbGU7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbiAod2hlbiBjb21wYXJlZCB3aXRoID09PSlcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM10gJiYgYVs0XSA9PT0gYls0XSAmJiBhWzVdID09PSBiWzVdICYmIGFbNl0gPT09IGJbNl0gJiYgYVs3XSA9PT0gYls3XSAmJiBhWzhdID09PSBiWzhdICYmIGFbOV0gPT09IGJbOV0gJiYgYVsxMF0gPT09IGJbMTBdICYmIGFbMTFdID09PSBiWzExXSAmJiBhWzEyXSA9PT0gYlsxMl0gJiYgYVsxM10gPT09IGJbMTNdICYmIGFbMTRdID09PSBiWzE0XSAmJiBhWzE1XSA9PT0gYlsxNV07XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIG1hdHJpY2VzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0NH0gYSBUaGUgZmlyc3QgbWF0cml4LlxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IGIgVGhlIHNlY29uZCBtYXRyaXguXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgbWF0cmljZXMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFscyhhLCBiKSB7XG4gIHZhciBhMCA9IGFbMF0sXG4gICAgICBhMSA9IGFbMV0sXG4gICAgICBhMiA9IGFbMl0sXG4gICAgICBhMyA9IGFbM107XG4gIHZhciBhNCA9IGFbNF0sXG4gICAgICBhNSA9IGFbNV0sXG4gICAgICBhNiA9IGFbNl0sXG4gICAgICBhNyA9IGFbN107XG4gIHZhciBhOCA9IGFbOF0sXG4gICAgICBhOSA9IGFbOV0sXG4gICAgICBhMTAgPSBhWzEwXSxcbiAgICAgIGExMSA9IGFbMTFdO1xuICB2YXIgYTEyID0gYVsxMl0sXG4gICAgICBhMTMgPSBhWzEzXSxcbiAgICAgIGExNCA9IGFbMTRdLFxuICAgICAgYTE1ID0gYVsxNV07XG4gIHZhciBiMCA9IGJbMF0sXG4gICAgICBiMSA9IGJbMV0sXG4gICAgICBiMiA9IGJbMl0sXG4gICAgICBiMyA9IGJbM107XG4gIHZhciBiNCA9IGJbNF0sXG4gICAgICBiNSA9IGJbNV0sXG4gICAgICBiNiA9IGJbNl0sXG4gICAgICBiNyA9IGJbN107XG4gIHZhciBiOCA9IGJbOF0sXG4gICAgICBiOSA9IGJbOV0sXG4gICAgICBiMTAgPSBiWzEwXSxcbiAgICAgIGIxMSA9IGJbMTFdO1xuICB2YXIgYjEyID0gYlsxMl0sXG4gICAgICBiMTMgPSBiWzEzXSxcbiAgICAgIGIxNCA9IGJbMTRdLFxuICAgICAgYjE1ID0gYlsxNV07XG4gIHJldHVybiBNYXRoLmFicyhhMCAtIGIwKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMCksIE1hdGguYWJzKGIwKSkgJiYgTWF0aC5hYnMoYTEgLSBiMSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEpLCBNYXRoLmFicyhiMSkpICYmIE1hdGguYWJzKGEyIC0gYjIpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEyKSwgTWF0aC5hYnMoYjIpKSAmJiBNYXRoLmFicyhhMyAtIGIzKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMyksIE1hdGguYWJzKGIzKSkgJiYgTWF0aC5hYnMoYTQgLSBiNCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTQpLCBNYXRoLmFicyhiNCkpICYmIE1hdGguYWJzKGE1IC0gYjUpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE1KSwgTWF0aC5hYnMoYjUpKSAmJiBNYXRoLmFicyhhNiAtIGI2KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhNiksIE1hdGguYWJzKGI2KSkgJiYgTWF0aC5hYnMoYTcgLSBiNykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTcpLCBNYXRoLmFicyhiNykpICYmIE1hdGguYWJzKGE4IC0gYjgpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGE4KSwgTWF0aC5hYnMoYjgpKSAmJiBNYXRoLmFicyhhOSAtIGI5KSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhOSksIE1hdGguYWJzKGI5KSkgJiYgTWF0aC5hYnMoYTEwIC0gYjEwKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTApLCBNYXRoLmFicyhiMTApKSAmJiBNYXRoLmFicyhhMTEgLSBiMTEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExMSksIE1hdGguYWJzKGIxMSkpICYmIE1hdGguYWJzKGExMiAtIGIxMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTEyKSwgTWF0aC5hYnMoYjEyKSkgJiYgTWF0aC5hYnMoYTEzIC0gYjEzKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMTMpLCBNYXRoLmFicyhiMTMpKSAmJiBNYXRoLmFicyhhMTQgLSBiMTQpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExNCksIE1hdGguYWJzKGIxNCkpICYmIE1hdGguYWJzKGExNSAtIGIxNSkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTE1KSwgTWF0aC5hYnMoYjE1KSk7XG59XG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5tdWx0aXBseX1cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgbXVsID0gbXVsdGlwbHk7XG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgbWF0NC5zdWJ0cmFjdH1cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgc3ViID0gc3VidHJhY3Q7IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBtYXQzIGZyb20gXCIuL21hdDMuanNcIjtcbmltcG9ydCAqIGFzIHZlYzMgZnJvbSBcIi4vdmVjMy5qc1wiO1xuaW1wb3J0ICogYXMgdmVjNCBmcm9tIFwiLi92ZWM0LmpzXCI7XG4vKipcbiAqIFF1YXRlcm5pb25cbiAqIEBtb2R1bGUgcXVhdFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpZGVudGl0eSBxdWF0XG4gKlxuICogQHJldHVybnMge3F1YXR9IGEgbmV3IHF1YXRlcm5pb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICAgIG91dFsyXSA9IDA7XG4gIH1cblxuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBTZXQgYSBxdWF0IHRvIHRoZSBpZGVudGl0eSBxdWF0ZXJuaW9uXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KG91dCkge1xuICBvdXRbMF0gPSAwO1xuICBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSAwO1xuICBvdXRbM10gPSAxO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBTZXRzIGEgcXVhdCBmcm9tIHRoZSBnaXZlbiBhbmdsZSBhbmQgcm90YXRpb24gYXhpcyxcbiAqIHRoZW4gcmV0dXJucyBpdC5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBheGlzIHRoZSBheGlzIGFyb3VuZCB3aGljaCB0byByb3RhdGVcbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgdGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF4aXNBbmdsZShvdXQsIGF4aXMsIHJhZCkge1xuICByYWQgPSByYWQgKiAwLjU7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkKTtcbiAgb3V0WzBdID0gcyAqIGF4aXNbMF07XG4gIG91dFsxXSA9IHMgKiBheGlzWzFdO1xuICBvdXRbMl0gPSBzICogYXhpc1syXTtcbiAgb3V0WzNdID0gTWF0aC5jb3MocmFkKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2V0cyB0aGUgcm90YXRpb24gYXhpcyBhbmQgYW5nbGUgZm9yIGEgZ2l2ZW5cbiAqICBxdWF0ZXJuaW9uLiBJZiBhIHF1YXRlcm5pb24gaXMgY3JlYXRlZCB3aXRoXG4gKiAgc2V0QXhpc0FuZ2xlLCB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiB0aGUgc2FtZVxuICogIHZhbHVlcyBhcyBwcm92aWRpZWQgaW4gdGhlIG9yaWdpbmFsIHBhcmFtZXRlciBsaXN0XG4gKiAgT1IgZnVuY3Rpb25hbGx5IGVxdWl2YWxlbnQgdmFsdWVzLlxuICogRXhhbXBsZTogVGhlIHF1YXRlcm5pb24gZm9ybWVkIGJ5IGF4aXMgWzAsIDAsIDFdIGFuZFxuICogIGFuZ2xlIC05MCBpcyB0aGUgc2FtZSBhcyB0aGUgcXVhdGVybmlvbiBmb3JtZWQgYnlcbiAqICBbMCwgMCwgMV0gYW5kIDI3MC4gVGhpcyBtZXRob2QgZmF2b3JzIHRoZSBsYXR0ZXIuXG4gKiBAcGFyYW0gIHt2ZWMzfSBvdXRfYXhpcyAgVmVjdG9yIHJlY2VpdmluZyB0aGUgYXhpcyBvZiByb3RhdGlvblxuICogQHBhcmFtICB7UmVhZG9ubHlRdWF0fSBxICAgICBRdWF0ZXJuaW9uIHRvIGJlIGRlY29tcG9zZWRcbiAqIEByZXR1cm4ge051bWJlcn0gICAgIEFuZ2xlLCBpbiByYWRpYW5zLCBvZiB0aGUgcm90YXRpb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXhpc0FuZ2xlKG91dF9heGlzLCBxKSB7XG4gIHZhciByYWQgPSBNYXRoLmFjb3MocVszXSkgKiAyLjA7XG4gIHZhciBzID0gTWF0aC5zaW4ocmFkIC8gMi4wKTtcblxuICBpZiAocyA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICBvdXRfYXhpc1swXSA9IHFbMF0gLyBzO1xuICAgIG91dF9heGlzWzFdID0gcVsxXSAvIHM7XG4gICAgb3V0X2F4aXNbMl0gPSBxWzJdIC8gcztcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBzIGlzIHplcm8sIHJldHVybiBhbnkgYXhpcyAobm8gcm90YXRpb24gLSBheGlzIGRvZXMgbm90IG1hdHRlcilcbiAgICBvdXRfYXhpc1swXSA9IDE7XG4gICAgb3V0X2F4aXNbMV0gPSAwO1xuICAgIG91dF9heGlzWzJdID0gMDtcbiAgfVxuXG4gIHJldHVybiByYWQ7XG59XG4vKipcbiAqIEdldHMgdGhlIGFuZ3VsYXIgZGlzdGFuY2UgYmV0d2VlbiB0d28gdW5pdCBxdWF0ZXJuaW9uc1xuICpcbiAqIEBwYXJhbSAge1JlYWRvbmx5UXVhdH0gYSAgICAgT3JpZ2luIHVuaXQgcXVhdGVybmlvblxuICogQHBhcmFtICB7UmVhZG9ubHlRdWF0fSBiICAgICBEZXN0aW5hdGlvbiB1bml0IHF1YXRlcm5pb25cbiAqIEByZXR1cm4ge051bWJlcn0gICAgIEFuZ2xlLCBpbiByYWRpYW5zLCBiZXR3ZWVuIHRoZSB0d28gcXVhdGVybmlvbnNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5nbGUoYSwgYikge1xuICB2YXIgZG90cHJvZHVjdCA9IGRvdChhLCBiKTtcbiAgcmV0dXJuIE1hdGguYWNvcygyICogZG90cHJvZHVjdCAqIGRvdHByb2R1Y3QgLSAxKTtcbn1cbi8qKlxuICogTXVsdGlwbGllcyB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYXcgPSBhWzNdO1xuICB2YXIgYnggPSBiWzBdLFxuICAgICAgYnkgPSBiWzFdLFxuICAgICAgYnogPSBiWzJdLFxuICAgICAgYncgPSBiWzNdO1xuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieCArIGF5ICogYnogLSBheiAqIGJ5O1xuICBvdXRbMV0gPSBheSAqIGJ3ICsgYXcgKiBieSArIGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXcgKiBieiArIGF4ICogYnkgLSBheSAqIGJ4O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieCAtIGF5ICogYnkgLSBheiAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSb3RhdGVzIGEgcXVhdGVybmlvbiBieSB0aGUgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIFggYXhpc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHF1YXQgcmVjZWl2aW5nIG9wZXJhdGlvbiByZXN1bHRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gcmFkIGFuZ2xlIChpbiByYWRpYW5zKSB0byByb3RhdGVcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIHJhZCkge1xuICByYWQgKj0gMC41O1xuICB2YXIgYXggPSBhWzBdLFxuICAgICAgYXkgPSBhWzFdLFxuICAgICAgYXogPSBhWzJdLFxuICAgICAgYXcgPSBhWzNdO1xuICB2YXIgYnggPSBNYXRoLnNpbihyYWQpLFxuICAgICAgYncgPSBNYXRoLmNvcyhyYWQpO1xuICBvdXRbMF0gPSBheCAqIGJ3ICsgYXcgKiBieDtcbiAgb3V0WzFdID0gYXkgKiBidyArIGF6ICogYng7XG4gIG91dFsyXSA9IGF6ICogYncgLSBheSAqIGJ4O1xuICBvdXRbM10gPSBhdyAqIGJ3IC0gYXggKiBieDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUm90YXRlcyBhIHF1YXRlcm5pb24gYnkgdGhlIGdpdmVuIGFuZ2xlIGFib3V0IHRoZSBZIGF4aXNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCBxdWF0IHJlY2VpdmluZyBvcGVyYXRpb24gcmVzdWx0XG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IHJhZCBhbmdsZSAoaW4gcmFkaWFucykgdG8gcm90YXRlXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCByYWQpIHtcbiAgcmFkICo9IDAuNTtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXSxcbiAgICAgIGF3ID0gYVszXTtcbiAgdmFyIGJ5ID0gTWF0aC5zaW4ocmFkKSxcbiAgICAgIGJ3ID0gTWF0aC5jb3MocmFkKTtcbiAgb3V0WzBdID0gYXggKiBidyAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF5ICogYncgKyBhdyAqIGJ5O1xuICBvdXRbMl0gPSBheiAqIGJ3ICsgYXggKiBieTtcbiAgb3V0WzNdID0gYXcgKiBidyAtIGF5ICogYnk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJvdGF0ZXMgYSBxdWF0ZXJuaW9uIGJ5IHRoZSBnaXZlbiBhbmdsZSBhYm91dCB0aGUgWiBheGlzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgcXVhdCByZWNlaXZpbmcgb3BlcmF0aW9uIHJlc3VsdFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byByb3RhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSByYWQgYW5nbGUgKGluIHJhZGlhbnMpIHRvIHJvdGF0ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgcmFkKSB7XG4gIHJhZCAqPSAwLjU7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIHZhciBieiA9IE1hdGguc2luKHJhZCksXG4gICAgICBidyA9IE1hdGguY29zKHJhZCk7XG4gIG91dFswXSA9IGF4ICogYncgKyBheSAqIGJ6O1xuICBvdXRbMV0gPSBheSAqIGJ3IC0gYXggKiBiejtcbiAgb3V0WzJdID0gYXogKiBidyArIGF3ICogYno7XG4gIG91dFszXSA9IGF3ICogYncgLSBheiAqIGJ6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBXIGNvbXBvbmVudCBvZiBhIHF1YXQgZnJvbSB0aGUgWCwgWSwgYW5kIFogY29tcG9uZW50cy5cbiAqIEFzc3VtZXMgdGhhdCBxdWF0ZXJuaW9uIGlzIDEgdW5pdCBpbiBsZW5ndGguXG4gKiBBbnkgZXhpc3RpbmcgVyBjb21wb25lbnQgd2lsbCBiZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgVyBjb21wb25lbnQgb2ZcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlVyhvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgb3V0WzNdID0gTWF0aC5zcXJ0KE1hdGguYWJzKDEuMCAtIHggKiB4IC0geSAqIHkgLSB6ICogeikpO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIGV4cG9uZW50aWFsIG9mIGEgdW5pdCBxdWF0ZXJuaW9uLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgdGhlIGV4cG9uZW50aWFsIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4cChvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICB2YXIgciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgZXQgPSBNYXRoLmV4cCh3KTtcbiAgdmFyIHMgPSByID4gMCA/IGV0ICogTWF0aC5zaW4ocikgLyByIDogMDtcbiAgb3V0WzBdID0geCAqIHM7XG4gIG91dFsxXSA9IHkgKiBzO1xuICBvdXRbMl0gPSB6ICogcztcbiAgb3V0WzNdID0gZXQgKiBNYXRoLmNvcyhyKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBuYXR1cmFsIGxvZ2FyaXRobSBvZiBhIHVuaXQgcXVhdGVybmlvbi5cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXQgdG8gY2FsY3VsYXRlIHRoZSBleHBvbmVudGlhbCBvZlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsbihvdXQsIGEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXSxcbiAgICAgIHcgPSBhWzNdO1xuICB2YXIgciA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5ICsgeiAqIHopO1xuICB2YXIgdCA9IHIgPiAwID8gTWF0aC5hdGFuMihyLCB3KSAvIHIgOiAwO1xuICBvdXRbMF0gPSB4ICogdDtcbiAgb3V0WzFdID0geSAqIHQ7XG4gIG91dFsyXSA9IHogKiB0O1xuICBvdXRbM10gPSAwLjUgKiBNYXRoLmxvZyh4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdyk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZSB0aGUgc2NhbGFyIHBvd2VyIG9mIGEgdW5pdCBxdWF0ZXJuaW9uLlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgdGhlIGV4cG9uZW50aWFsIG9mXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHF1YXRlcm5pb24gYnlcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcG93KG91dCwgYSwgYikge1xuICBsbihvdXQsIGEpO1xuICBzY2FsZShvdXQsIG91dCwgYik7XG4gIGV4cChvdXQsIG91dCk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFBlcmZvcm1zIGEgc3BoZXJpY2FsIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2xlcnAob3V0LCBhLCBiLCB0KSB7XG4gIC8vIGJlbmNobWFya3M6XG4gIC8vICAgIGh0dHA6Ly9qc3BlcmYuY29tL3F1YXRlcm5pb24tc2xlcnAtaW1wbGVtZW50YXRpb25zXG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBhdyA9IGFbM107XG4gIHZhciBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl0sXG4gICAgICBidyA9IGJbM107XG4gIHZhciBvbWVnYSwgY29zb20sIHNpbm9tLCBzY2FsZTAsIHNjYWxlMTsgLy8gY2FsYyBjb3NpbmVcblxuICBjb3NvbSA9IGF4ICogYnggKyBheSAqIGJ5ICsgYXogKiBieiArIGF3ICogYnc7IC8vIGFkanVzdCBzaWducyAoaWYgbmVjZXNzYXJ5KVxuXG4gIGlmIChjb3NvbSA8IDAuMCkge1xuICAgIGNvc29tID0gLWNvc29tO1xuICAgIGJ4ID0gLWJ4O1xuICAgIGJ5ID0gLWJ5O1xuICAgIGJ6ID0gLWJ6O1xuICAgIGJ3ID0gLWJ3O1xuICB9IC8vIGNhbGN1bGF0ZSBjb2VmZmljaWVudHNcblxuXG4gIGlmICgxLjAgLSBjb3NvbSA+IGdsTWF0cml4LkVQU0lMT04pIHtcbiAgICAvLyBzdGFuZGFyZCBjYXNlIChzbGVycClcbiAgICBvbWVnYSA9IE1hdGguYWNvcyhjb3NvbSk7XG4gICAgc2lub20gPSBNYXRoLnNpbihvbWVnYSk7XG4gICAgc2NhbGUwID0gTWF0aC5zaW4oKDEuMCAtIHQpICogb21lZ2EpIC8gc2lub207XG4gICAgc2NhbGUxID0gTWF0aC5zaW4odCAqIG9tZWdhKSAvIHNpbm9tO1xuICB9IGVsc2Uge1xuICAgIC8vIFwiZnJvbVwiIGFuZCBcInRvXCIgcXVhdGVybmlvbnMgYXJlIHZlcnkgY2xvc2VcbiAgICAvLyAgLi4uIHNvIHdlIGNhbiBkbyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uXG4gICAgc2NhbGUwID0gMS4wIC0gdDtcbiAgICBzY2FsZTEgPSB0O1xuICB9IC8vIGNhbGN1bGF0ZSBmaW5hbCB2YWx1ZXNcblxuXG4gIG91dFswXSA9IHNjYWxlMCAqIGF4ICsgc2NhbGUxICogYng7XG4gIG91dFsxXSA9IHNjYWxlMCAqIGF5ICsgc2NhbGUxICogYnk7XG4gIG91dFsyXSA9IHNjYWxlMCAqIGF6ICsgc2NhbGUxICogYno7XG4gIG91dFszXSA9IHNjYWxlMCAqIGF3ICsgc2NhbGUxICogYnc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEdlbmVyYXRlcyBhIHJhbmRvbSB1bml0IHF1YXRlcm5pb25cbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCkge1xuICAvLyBJbXBsZW1lbnRhdGlvbiBvZiBodHRwOi8vcGxhbm5pbmcuY3MudWl1Yy5lZHUvbm9kZTE5OC5odG1sXG4gIC8vIFRPRE86IENhbGxpbmcgcmFuZG9tIDMgdGltZXMgaXMgcHJvYmFibHkgbm90IHRoZSBmYXN0ZXN0IHNvbHV0aW9uXG4gIHZhciB1MSA9IGdsTWF0cml4LlJBTkRPTSgpO1xuICB2YXIgdTIgPSBnbE1hdHJpeC5SQU5ET00oKTtcbiAgdmFyIHUzID0gZ2xNYXRyaXguUkFORE9NKCk7XG4gIHZhciBzcXJ0MU1pbnVzVTEgPSBNYXRoLnNxcnQoMSAtIHUxKTtcbiAgdmFyIHNxcnRVMSA9IE1hdGguc3FydCh1MSk7XG4gIG91dFswXSA9IHNxcnQxTWludXNVMSAqIE1hdGguc2luKDIuMCAqIE1hdGguUEkgKiB1Mik7XG4gIG91dFsxXSA9IHNxcnQxTWludXNVMSAqIE1hdGguY29zKDIuMCAqIE1hdGguUEkgKiB1Mik7XG4gIG91dFsyXSA9IHNxcnRVMSAqIE1hdGguc2luKDIuMCAqIE1hdGguUEkgKiB1Myk7XG4gIG91dFszXSA9IHNxcnRVMSAqIE1hdGguY29zKDIuMCAqIE1hdGguUEkgKiB1Myk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGludmVyc2Ugb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0IHRvIGNhbGN1bGF0ZSBpbnZlcnNlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydChvdXQsIGEpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXSxcbiAgICAgIGEzID0gYVszXTtcbiAgdmFyIGRvdCA9IGEwICogYTAgKyBhMSAqIGExICsgYTIgKiBhMiArIGEzICogYTM7XG4gIHZhciBpbnZEb3QgPSBkb3QgPyAxLjAgLyBkb3QgOiAwOyAvLyBUT0RPOiBXb3VsZCBiZSBmYXN0ZXIgdG8gcmV0dXJuIFswLDAsMCwwXSBpbW1lZGlhdGVseSBpZiBkb3QgPT0gMFxuXG4gIG91dFswXSA9IC1hMCAqIGludkRvdDtcbiAgb3V0WzFdID0gLWExICogaW52RG90O1xuICBvdXRbMl0gPSAtYTIgKiBpbnZEb3Q7XG4gIG91dFszXSA9IGEzICogaW52RG90O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjb25qdWdhdGUgb2YgYSBxdWF0XG4gKiBJZiB0aGUgcXVhdGVybmlvbiBpcyBub3JtYWxpemVkLCB0aGlzIGZ1bmN0aW9uIGlzIGZhc3RlciB0aGFuIHF1YXQuaW52ZXJzZSBhbmQgcHJvZHVjZXMgdGhlIHNhbWUgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgcXVhdCB0byBjYWxjdWxhdGUgY29uanVnYXRlIG9mXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmp1Z2F0ZShvdXQsIGEpIHtcbiAgb3V0WzBdID0gLWFbMF07XG4gIG91dFsxXSA9IC1hWzFdO1xuICBvdXRbMl0gPSAtYVsyXTtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIHF1YXRlcm5pb24gZnJvbSB0aGUgZ2l2ZW4gM3gzIHJvdGF0aW9uIG1hdHJpeC5cbiAqXG4gKiBOT1RFOiBUaGUgcmVzdWx0YW50IHF1YXRlcm5pb24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIHlvdSBzaG91bGQgYmUgc3VyZVxuICogdG8gcmVub3JtYWxpemUgdGhlIHF1YXRlcm5pb24geW91cnNlbGYgd2hlcmUgbmVjZXNzYXJ5LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IG0gcm90YXRpb24gbWF0cml4XG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbU1hdDMob3V0LCBtKSB7XG4gIC8vIEFsZ29yaXRobSBpbiBLZW4gU2hvZW1ha2UncyBhcnRpY2xlIGluIDE5ODcgU0lHR1JBUEggY291cnNlIG5vdGVzXG4gIC8vIGFydGljbGUgXCJRdWF0ZXJuaW9uIENhbGN1bHVzIGFuZCBGYXN0IEFuaW1hdGlvblwiLlxuICB2YXIgZlRyYWNlID0gbVswXSArIG1bNF0gKyBtWzhdO1xuICB2YXIgZlJvb3Q7XG5cbiAgaWYgKGZUcmFjZSA+IDAuMCkge1xuICAgIC8vIHx3fCA+IDEvMiwgbWF5IGFzIHdlbGwgY2hvb3NlIHcgPiAxLzJcbiAgICBmUm9vdCA9IE1hdGguc3FydChmVHJhY2UgKyAxLjApOyAvLyAyd1xuXG4gICAgb3V0WzNdID0gMC41ICogZlJvb3Q7XG4gICAgZlJvb3QgPSAwLjUgLyBmUm9vdDsgLy8gMS8oNHcpXG5cbiAgICBvdXRbMF0gPSAobVs1XSAtIG1bN10pICogZlJvb3Q7XG4gICAgb3V0WzFdID0gKG1bNl0gLSBtWzJdKSAqIGZSb290O1xuICAgIG91dFsyXSA9IChtWzFdIC0gbVszXSkgKiBmUm9vdDtcbiAgfSBlbHNlIHtcbiAgICAvLyB8d3wgPD0gMS8yXG4gICAgdmFyIGkgPSAwO1xuICAgIGlmIChtWzRdID4gbVswXSkgaSA9IDE7XG4gICAgaWYgKG1bOF0gPiBtW2kgKiAzICsgaV0pIGkgPSAyO1xuICAgIHZhciBqID0gKGkgKyAxKSAlIDM7XG4gICAgdmFyIGsgPSAoaSArIDIpICUgMztcbiAgICBmUm9vdCA9IE1hdGguc3FydChtW2kgKiAzICsgaV0gLSBtW2ogKiAzICsgal0gLSBtW2sgKiAzICsga10gKyAxLjApO1xuICAgIG91dFtpXSA9IDAuNSAqIGZSb290O1xuICAgIGZSb290ID0gMC41IC8gZlJvb3Q7XG4gICAgb3V0WzNdID0gKG1baiAqIDMgKyBrXSAtIG1bayAqIDMgKyBqXSkgKiBmUm9vdDtcbiAgICBvdXRbal0gPSAobVtqICogMyArIGldICsgbVtpICogMyArIGpdKSAqIGZSb290O1xuICAgIG91dFtrXSA9IChtW2sgKiAzICsgaV0gKyBtW2kgKiAzICsga10pICogZlJvb3Q7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgcXVhdGVybmlvbiBmcm9tIHRoZSBnaXZlbiBldWxlciBhbmdsZSB4LCB5LCB6LlxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHt4fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFggYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHt5fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFkgYXhpcyBpbiBkZWdyZWVzLlxuICogQHBhcmFtIHt6fSBBbmdsZSB0byByb3RhdGUgYXJvdW5kIFogYXhpcyBpbiBkZWdyZWVzLlxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21FdWxlcihvdXQsIHgsIHksIHopIHtcbiAgdmFyIGhhbGZUb1JhZCA9IDAuNSAqIE1hdGguUEkgLyAxODAuMDtcbiAgeCAqPSBoYWxmVG9SYWQ7XG4gIHkgKj0gaGFsZlRvUmFkO1xuICB6ICo9IGhhbGZUb1JhZDtcbiAgdmFyIHN4ID0gTWF0aC5zaW4oeCk7XG4gIHZhciBjeCA9IE1hdGguY29zKHgpO1xuICB2YXIgc3kgPSBNYXRoLnNpbih5KTtcbiAgdmFyIGN5ID0gTWF0aC5jb3MoeSk7XG4gIHZhciBzeiA9IE1hdGguc2luKHopO1xuICB2YXIgY3ogPSBNYXRoLmNvcyh6KTtcbiAgb3V0WzBdID0gc3ggKiBjeSAqIGN6IC0gY3ggKiBzeSAqIHN6O1xuICBvdXRbMV0gPSBjeCAqIHN5ICogY3ogKyBzeCAqIGN5ICogc3o7XG4gIG91dFsyXSA9IGN4ICogY3kgKiBzeiAtIHN4ICogc3kgKiBjejtcbiAgb3V0WzNdID0gY3ggKiBjeSAqIGN6ICsgc3ggKiBzeSAqIHN6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgcXVhdGVuaW9uXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwicXVhdChcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIilcIjtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgcXVhdGVybmlvblxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHF1YXRlcm5pb24gdG8gY2xvbmVcbiAqIEByZXR1cm5zIHtxdWF0fSBhIG5ldyBxdWF0ZXJuaW9uXG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIGNsb25lID0gdmVjNC5jbG9uZTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBxdWF0IGluaXRpYWxpemVkIHdpdGggdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHogWiBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB3IFcgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7cXVhdH0gYSBuZXcgcXVhdGVybmlvblxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBmcm9tVmFsdWVzID0gdmVjNC5mcm9tVmFsdWVzO1xuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgcXVhdCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgc291cmNlIHF1YXRlcm5pb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgY29weSA9IHZlYzQuY29weTtcbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgcXVhdCB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBzZXQgPSB2ZWM0LnNldDtcbi8qKlxuICogQWRkcyB0d28gcXVhdCdzXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIGFkZCA9IHZlYzQuYWRkO1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHF1YXQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXG4gKiBTY2FsZXMgYSBxdWF0IGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBzY2FsZSA9IHZlYzQuc2NhbGU7XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byBxdWF0J3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIGRvdCA9IHZlYzQuZG90O1xuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHF1YXQnc1xuICpcbiAqIEBwYXJhbSB7cXVhdH0gb3V0IHRoZSByZWNlaXZpbmcgcXVhdGVybmlvblxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBsZXJwID0gdmVjNC5sZXJwO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cblxuZXhwb3J0IHZhciBsZW5ndGggPSB2ZWM0Lmxlbmd0aDtcbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayBxdWF0Lmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgbGVuID0gbGVuZ3RoO1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIHNxdWFyZWQgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGxlbmd0aCBvZiBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIHNxdWFyZWRMZW5ndGggPSB2ZWM0LnNxdWFyZWRMZW5ndGg7XG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgcXVhdC5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXG4gKiBOb3JtYWxpemUgYSBxdWF0XG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBxdWF0ZXJuaW9uIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3F1YXR9IG91dFxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBub3JtYWxpemUgPSB2ZWM0Lm5vcm1hbGl6ZTtcbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcXVhdGVybmlvbnMgaGF2ZSBleGFjdGx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIFRoZSBmaXJzdCBxdWF0ZXJuaW9uLlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgVGhlIHNlY29uZCBxdWF0ZXJuaW9uLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuZXhwb3J0IHZhciBleGFjdEVxdWFscyA9IHZlYzQuZXhhY3RFcXVhbHM7XG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHF1YXRlcm5pb25zIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHtSZWFkb25seVF1YXR9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuXG5leHBvcnQgdmFyIGVxdWFscyA9IHZlYzQuZXF1YWxzO1xuLyoqXG4gKiBTZXRzIGEgcXVhdGVybmlvbiB0byByZXByZXNlbnQgdGhlIHNob3J0ZXN0IHJvdGF0aW9uIGZyb20gb25lXG4gKiB2ZWN0b3IgdG8gYW5vdGhlci5cbiAqXG4gKiBCb3RoIHZlY3RvcnMgYXJlIGFzc3VtZWQgdG8gYmUgdW5pdCBsZW5ndGguXG4gKlxuICogQHBhcmFtIHtxdWF0fSBvdXQgdGhlIHJlY2VpdmluZyBxdWF0ZXJuaW9uLlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGluaXRpYWwgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgZGVzdGluYXRpb24gdmVjdG9yXG4gKiBAcmV0dXJucyB7cXVhdH0gb3V0XG4gKi9cblxuZXhwb3J0IHZhciByb3RhdGlvblRvID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG1wdmVjMyA9IHZlYzMuY3JlYXRlKCk7XG4gIHZhciB4VW5pdFZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMSwgMCwgMCk7XG4gIHZhciB5VW5pdFZlYzMgPSB2ZWMzLmZyb21WYWx1ZXMoMCwgMSwgMCk7XG4gIHJldHVybiBmdW5jdGlvbiAob3V0LCBhLCBiKSB7XG4gICAgdmFyIGRvdCA9IHZlYzMuZG90KGEsIGIpO1xuXG4gICAgaWYgKGRvdCA8IC0wLjk5OTk5OSkge1xuICAgICAgdmVjMy5jcm9zcyh0bXB2ZWMzLCB4VW5pdFZlYzMsIGEpO1xuICAgICAgaWYgKHZlYzMubGVuKHRtcHZlYzMpIDwgMC4wMDAwMDEpIHZlYzMuY3Jvc3ModG1wdmVjMywgeVVuaXRWZWMzLCBhKTtcbiAgICAgIHZlYzMubm9ybWFsaXplKHRtcHZlYzMsIHRtcHZlYzMpO1xuICAgICAgc2V0QXhpc0FuZ2xlKG91dCwgdG1wdmVjMywgTWF0aC5QSSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSBpZiAoZG90ID4gMC45OTk5OTkpIHtcbiAgICAgIG91dFswXSA9IDA7XG4gICAgICBvdXRbMV0gPSAwO1xuICAgICAgb3V0WzJdID0gMDtcbiAgICAgIG91dFszXSA9IDE7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZWMzLmNyb3NzKHRtcHZlYzMsIGEsIGIpO1xuICAgICAgb3V0WzBdID0gdG1wdmVjM1swXTtcbiAgICAgIG91dFsxXSA9IHRtcHZlYzNbMV07XG4gICAgICBvdXRbMl0gPSB0bXB2ZWMzWzJdO1xuICAgICAgb3V0WzNdID0gMSArIGRvdDtcbiAgICAgIHJldHVybiBub3JtYWxpemUob3V0LCBvdXQpO1xuICAgIH1cbiAgfTtcbn0oKTtcbi8qKlxuICogUGVyZm9ybXMgYSBzcGhlcmljYWwgbGluZWFyIGludGVycG9sYXRpb24gd2l0aCB0d28gY29udHJvbCBwb2ludHNcbiAqXG4gKiBAcGFyYW0ge3F1YXR9IG91dCB0aGUgcmVjZWl2aW5nIHF1YXRlcm5pb25cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBjIHRoZSB0aGlyZCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gZCB0aGUgZm91cnRoIG9wZXJhbmRcbiAqIEBwYXJhbSB7TnVtYmVyfSB0IGludGVycG9sYXRpb24gYW1vdW50LCBpbiB0aGUgcmFuZ2UgWzAtMV0sIGJldHdlZW4gdGhlIHR3byBpbnB1dHNcbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuXG5leHBvcnQgdmFyIHNxbGVycCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlbXAxID0gY3JlYXRlKCk7XG4gIHZhciB0ZW1wMiA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKG91dCwgYSwgYiwgYywgZCwgdCkge1xuICAgIHNsZXJwKHRlbXAxLCBhLCBkLCB0KTtcbiAgICBzbGVycCh0ZW1wMiwgYiwgYywgdCk7XG4gICAgc2xlcnAob3V0LCB0ZW1wMSwgdGVtcDIsIDIgKiB0ICogKDEgLSB0KSk7XG4gICAgcmV0dXJuIG91dDtcbiAgfTtcbn0oKTtcbi8qKlxuICogU2V0cyB0aGUgc3BlY2lmaWVkIHF1YXRlcm5pb24gd2l0aCB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgZ2l2ZW5cbiAqIGF4ZXMuIEVhY2ggYXhpcyBpcyBhIHZlYzMgYW5kIGlzIGV4cGVjdGVkIHRvIGJlIHVuaXQgbGVuZ3RoIGFuZFxuICogcGVycGVuZGljdWxhciB0byBhbGwgb3RoZXIgc3BlY2lmaWVkIGF4ZXMuXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHZpZXcgIHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSB2aWV3aW5nIGRpcmVjdGlvblxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IHJpZ2h0IHRoZSB2ZWN0b3IgcmVwcmVzZW50aW5nIHRoZSBsb2NhbCBcInJpZ2h0XCIgZGlyZWN0aW9uXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gdXAgICAgdGhlIHZlY3RvciByZXByZXNlbnRpbmcgdGhlIGxvY2FsIFwidXBcIiBkaXJlY3Rpb25cbiAqIEByZXR1cm5zIHtxdWF0fSBvdXRcbiAqL1xuXG5leHBvcnQgdmFyIHNldEF4ZXMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBtYXRyID0gbWF0My5jcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvdXQsIHZpZXcsIHJpZ2h0LCB1cCkge1xuICAgIG1hdHJbMF0gPSByaWdodFswXTtcbiAgICBtYXRyWzNdID0gcmlnaHRbMV07XG4gICAgbWF0cls2XSA9IHJpZ2h0WzJdO1xuICAgIG1hdHJbMV0gPSB1cFswXTtcbiAgICBtYXRyWzRdID0gdXBbMV07XG4gICAgbWF0cls3XSA9IHVwWzJdO1xuICAgIG1hdHJbMl0gPSAtdmlld1swXTtcbiAgICBtYXRyWzVdID0gLXZpZXdbMV07XG4gICAgbWF0cls4XSA9IC12aWV3WzJdO1xuICAgIHJldHVybiBub3JtYWxpemUob3V0LCBmcm9tTWF0MyhvdXQsIG1hdHIpKTtcbiAgfTtcbn0oKTsiLCJpbXBvcnQgKiBhcyBnbE1hdHJpeCBmcm9tIFwiLi9jb21tb24uanNcIjtcbi8qKlxuICogMiBEaW1lbnNpb25hbCBWZWN0b3JcbiAqIEBtb2R1bGUgdmVjMlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgdmVjMlxuICpcbiAqIEByZXR1cm5zIHt2ZWMyfSBhIG5ldyAyRCB2ZWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMik7XG5cbiAgaWYgKGdsTWF0cml4LkFSUkFZX1RZUEUgIT0gRmxvYXQzMkFycmF5KSB7XG4gICAgb3V0WzBdID0gMDtcbiAgICBvdXRbMV0gPSAwO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMyIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDIpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzIgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjMn0gYSBuZXcgMkQgdmVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb21WYWx1ZXMoeCwgeSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoMik7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENvcHkgdGhlIHZhbHVlcyBmcm9tIG9uZSB2ZWMyIHRvIGFub3RoZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIHNvdXJjZSB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY29weShvdXQsIGEpIHtcbiAgb3V0WzBdID0gYVswXTtcbiAgb3V0WzFdID0gYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMiB0byB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFggY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geSBZIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEFkZHMgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIE11bHRpcGxpZXMgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICogYlswXTtcbiAgb3V0WzFdID0gYVsxXSAqIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB2ZWN0b3IgdG8gZmxvb3JcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogTWF0aC5yb3VuZCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIHJvdW5kXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kKG91dCwgYSkge1xuICBvdXRbMF0gPSBNYXRoLnJvdW5kKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLnJvdW5kKGFbMV0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBTY2FsZXMgYSB2ZWMyIGJ5IGEgc2NhbGFyIG51bWJlclxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgdmVjdG9yIHRvIHNjYWxlXG4gKiBAcGFyYW0ge051bWJlcn0gYiBhbW91bnQgdG8gc2NhbGUgdGhlIHZlY3RvciBieVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGI7XG4gIG91dFsxXSA9IGFbMV0gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBBZGRzIHR3byB2ZWMyJ3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF0sXG4gICAgICB5ID0gYlsxXSAtIGFbMV07XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHkpO1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdLFxuICAgICAgeSA9IGJbMV0gLSBhWzFdO1xuICByZXR1cm4geCAqIHggKyB5ICogeTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgbGVuZ3RoIG9mXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBsZW5ndGggb2YgYVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgoYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSk7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjMlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdO1xuICByZXR1cm4geCAqIHggKyB5ICogeTtcbn1cbi8qKlxuICogTmVnYXRlcyB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIG5lZ2F0ZVxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBuZWdhdGUob3V0LCBhKSB7XG4gIG91dFswXSA9IC1hWzBdO1xuICBvdXRbMV0gPSAtYVsxXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzJcbiAqXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzJ9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWMyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgdmFyIGxlbiA9IHggKiB4ICsgeSAqIHk7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuXG4gIG91dFswXSA9IGFbMF0gKiBsZW47XG4gIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMyJ3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdO1xufVxuLyoqXG4gKiBDb21wdXRlcyB0aGUgY3Jvc3MgcHJvZHVjdCBvZiB0d28gdmVjMidzXG4gKiBOb3RlIHRoYXQgdGhlIGNyb3NzIHByb2R1Y3QgbXVzdCBieSBkZWZpbml0aW9uIHByb2R1Y2UgYSAzRCB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgdmFyIHogPSBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdO1xuICBvdXRbMF0gPSBvdXRbMV0gPSAwO1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHZlYzInc1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAob3V0LCBhLCBiLCB0KSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV07XG4gIG91dFswXSA9IGF4ICsgdCAqIChiWzBdIC0gYXgpO1xuICBvdXRbMV0gPSBheSArIHQgKiAoYlsxXSAtIGF5KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjA7XG4gIHZhciByID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgKiBNYXRoLlBJO1xuICBvdXRbMF0gPSBNYXRoLmNvcyhyKSAqIHNjYWxlO1xuICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQyXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0Mn0gbSBtYXRyaXggdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtTWF0MihvdXQsIGEsIG0pIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV07XG4gIG91dFswXSA9IG1bMF0gKiB4ICsgbVsyXSAqIHk7XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDJkXG4gKlxuICogQHBhcmFtIHt2ZWMyfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1JlYWRvbmx5TWF0MmR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDJkKG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzJdICogeSArIG1bNF07XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVszXSAqIHkgKyBtWzVdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMyIHdpdGggYSBtYXQzXG4gKiAzcmQgdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtSZWFkb25seU1hdDN9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bM10gKiB5ICsgbVs2XTtcbiAgb3V0WzFdID0gbVsxXSAqIHggKyBtWzRdICogeSArIG1bN107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzIgd2l0aCBhIG1hdDRcbiAqIDNyZCB2ZWN0b3IgY29tcG9uZW50IGlzIGltcGxpY2l0bHkgJzAnXG4gKiA0dGggdmVjdG9yIGNvbXBvbmVudCBpcyBpbXBsaWNpdGx5ICcxJ1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICBvdXRbMF0gPSBtWzBdICogeCArIG1bNF0gKiB5ICsgbVsxMl07XG4gIG91dFsxXSA9IG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzEzXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUm90YXRlIGEgMkQgdmVjdG9yXG4gKiBAcGFyYW0ge3ZlYzJ9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzJcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIFRoZSB2ZWMyIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHt2ZWMyfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlKG91dCwgYSwgYiwgcmFkKSB7XG4gIC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cbiAgdmFyIHAwID0gYVswXSAtIGJbMF0sXG4gICAgICBwMSA9IGFbMV0gLSBiWzFdLFxuICAgICAgc2luQyA9IE1hdGguc2luKHJhZCksXG4gICAgICBjb3NDID0gTWF0aC5jb3MocmFkKTsgLy9wZXJmb3JtIHJvdGF0aW9uIGFuZCB0cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHAwICogY29zQyAtIHAxICogc2luQyArIGJbMF07XG4gIG91dFsxXSA9IHAwICogc2luQyArIHAxICogY29zQyArIGJbMV07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEdldCB0aGUgYW5nbGUgYmV0d2VlbiB0d28gMkQgdmVjdG9yc1xuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgVGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBiIFRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYW5nbGUoYSwgYikge1xuICB2YXIgeDEgPSBhWzBdLFxuICAgICAgeTEgPSBhWzFdLFxuICAgICAgeDIgPSBiWzBdLFxuICAgICAgeTIgPSBiWzFdLFxuICAgICAgLy8gbWFnIGlzIHRoZSBwcm9kdWN0IG9mIHRoZSBtYWduaXR1ZGVzIG9mIGEgYW5kIGJcbiAgbWFnID0gTWF0aC5zcXJ0KHgxICogeDEgKyB5MSAqIHkxKSAqIE1hdGguc3FydCh4MiAqIHgyICsgeTIgKiB5MiksXG4gICAgICAvLyBtYWcgJiYuLiBzaG9ydCBjaXJjdWl0cyBpZiBtYWcgPT0gMFxuICBjb3NpbmUgPSBtYWcgJiYgKHgxICogeDIgKyB5MSAqIHkyKSAvIG1hZzsgLy8gTWF0aC5taW4oTWF0aC5tYXgoY29zaW5lLCAtMSksIDEpIGNsYW1wcyB0aGUgY29zaW5lIGJldHdlZW4gLTEgYW5kIDFcblxuICByZXR1cm4gTWF0aC5hY29zKE1hdGgubWluKE1hdGgubWF4KGNvc2luZSwgLTEpLCAxKSk7XG59XG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzIgdG8gemVyb1xuICpcbiAqIEBwYXJhbSB7dmVjMn0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjMn0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm8ob3V0KSB7XG4gIG91dFswXSA9IDAuMDtcbiAgb3V0WzFdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzJ9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwidmVjMihcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIpXCI7XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgZXhhY3RseSBoYXZlIHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uICh3aGVuIGNvbXBhcmVkIHdpdGggPT09KVxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBleGFjdEVxdWFscyhhLCBiKSB7XG4gIHJldHVybiBhWzBdID09PSBiWzBdICYmIGFbMV0gPT09IGJbMV07XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMyfSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjMn0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKTtcbn1cbi8qKlxuICogQWxpYXMgZm9yIHtAbGluayB2ZWMyLmxlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgbGVuID0gbGVuZ3RoO1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuZGl2aWRlfVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMi5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZERpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzIuc3F1YXJlZExlbmd0aH1cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgc3FyTGVuID0gc3F1YXJlZExlbmd0aDtcbi8qKlxuICogUGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvdmVyIGFuIGFycmF5IG9mIHZlYzJzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGEgdGhlIGFycmF5IG9mIHZlY3RvcnMgdG8gaXRlcmF0ZSBvdmVyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RyaWRlIE51bWJlciBvZiBlbGVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydCBvZiBlYWNoIHZlYzIuIElmIDAgYXNzdW1lcyB0aWdodGx5IHBhY2tlZFxuICogQHBhcmFtIHtOdW1iZXJ9IG9mZnNldCBOdW1iZXIgb2YgZWxlbWVudHMgdG8gc2tpcCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IE51bWJlciBvZiB2ZWMycyB0byBpdGVyYXRlIG92ZXIuIElmIDAgaXRlcmF0ZXMgb3ZlciBlbnRpcmUgYXJyYXlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggdmVjdG9yIGluIHRoZSBhcnJheVxuICogQHBhcmFtIHtPYmplY3R9IFthcmddIGFkZGl0aW9uYWwgYXJndW1lbnQgdG8gcGFzcyB0byBmblxuICogQHJldHVybnMge0FycmF5fSBhXG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIGZvckVhY2ggPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB2ZWMgPSBjcmVhdGUoKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhLCBzdHJpZGUsIG9mZnNldCwgY291bnQsIGZuLCBhcmcpIHtcbiAgICB2YXIgaSwgbDtcblxuICAgIGlmICghc3RyaWRlKSB7XG4gICAgICBzdHJpZGUgPSAyO1xuICAgIH1cblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAwO1xuICAgIH1cblxuICAgIGlmIChjb3VudCkge1xuICAgICAgbCA9IE1hdGgubWluKGNvdW50ICogc3RyaWRlICsgb2Zmc2V0LCBhLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGwgPSBhLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmb3IgKGkgPSBvZmZzZXQ7IGkgPCBsOyBpICs9IHN0cmlkZSkge1xuICAgICAgdmVjWzBdID0gYVtpXTtcbiAgICAgIHZlY1sxXSA9IGFbaSArIDFdO1xuICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICBhW2ldID0gdmVjWzBdO1xuICAgICAgYVtpICsgMV0gPSB2ZWNbMV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG59KCk7IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcbiAqIDMgRGltZW5zaW9uYWwgVmVjdG9yXG4gKiBAbW9kdWxlIHZlYzNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzNcbiAqXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyB2ZWMzIGluaXRpYWxpemVkIHdpdGggdmFsdWVzIGZyb20gYW4gZXhpc3RpbmcgdmVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNsb25lXG4gKiBAcmV0dXJucyB7dmVjM30gYSBuZXcgM0QgdmVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKGEpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSBhWzBdO1xuICBvdXRbMV0gPSBhWzFdO1xuICBvdXRbMl0gPSBhWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBsZW5ndGggb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGxlbmd0aCBvZiBhXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHopO1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzMgaW5pdGlhbGl6ZWQgd2l0aCB0aGUgZ2l2ZW4gdmFsdWVzXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHggWCBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFkgY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0geiBaIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzN9IGEgbmV3IDNEIHZlY3RvclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHopIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDMpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjMyB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzMgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNldChvdXQsIHgsIHksIHopIHtcbiAgb3V0WzBdID0geDtcbiAgb3V0WzFdID0geTtcbiAgb3V0WzJdID0gejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQWRkcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBTdWJ0cmFjdHMgdmVjdG9yIGIgZnJvbSB2ZWN0b3IgYVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC0gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAtIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLSBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogRGl2aWRlcyB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZGl2aWRlKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBhWzBdIC8gYlswXTtcbiAgb3V0WzFdID0gYVsxXSAvIGJbMV07XG4gIG91dFsyXSA9IGFbMl0gLyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBNYXRoLmNlaWwgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjZWlsXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNlaWwob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguY2VpbChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5jZWlsKGFbMV0pO1xuICBvdXRbMl0gPSBNYXRoLmNlaWwoYVsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIE1hdGguZmxvb3IgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBmbG9vclxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmbG9vcihvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5mbG9vcihhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5mbG9vcihhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5mbG9vcihhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgbWluaW11bSBvZiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWluKG91dCwgYSwgYikge1xuICBvdXRbMF0gPSBNYXRoLm1pbihhWzBdLCBiWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5taW4oYVsxXSwgYlsxXSk7XG4gIG91dFsyXSA9IE1hdGgubWluKGFbMl0sIGJbMl0pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtYXhpbXVtIG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXgob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICBvdXRbMV0gPSBNYXRoLm1heChhWzFdLCBiWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5tYXgoYVsyXSwgYlsyXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5yb3VuZChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogU2NhbGVzIGEgdmVjMyBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEFkZHMgdHdvIHZlYzMncyBhZnRlciBzY2FsaW5nIHRoZSBzZWNvbmQgb3BlcmFuZCBieSBhIHNjYWxhciB2YWx1ZVxuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGUgdGhlIGFtb3VudCB0byBzY2FsZSBiIGJ5IGJlZm9yZSBhZGRpbmdcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVBbmRBZGQob3V0LCBhLCBiLCBzY2FsZSkge1xuICBvdXRbMF0gPSBhWzBdICsgYlswXSAqIHNjYWxlO1xuICBvdXRbMV0gPSBhWzFdICsgYlsxXSAqIHNjYWxlO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXSAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRpYW4gZGlzdGFuY2UgYmV0d2VlbiB0d28gdmVjMydzXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge051bWJlcn0gZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKGEsIGIpIHtcbiAgdmFyIHggPSBiWzBdIC0gYVswXTtcbiAgdmFyIHkgPSBiWzFdIC0gYVsxXTtcbiAgdmFyIHogPSBiWzJdIC0gYVsyXTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSwgeik7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzMnc1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgZGlzdGFuY2UgYmV0d2VlbiBhIGFuZCBiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNxdWFyZWREaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgbGVuZ3RoIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBjYWxjdWxhdGUgc3F1YXJlZCBsZW5ndGggb2ZcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHNxdWFyZWQgbGVuZ3RoIG9mIGFcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3F1YXJlZExlbmd0aChhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHJldHVybiB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG59XG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWMzXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbnZlcnNlIG9mIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjM1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB2ZWN0b3IgdG8gaW52ZXJ0XG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2Uob3V0LCBhKSB7XG4gIG91dFswXSA9IDEuMCAvIGFbMF07XG4gIG91dFsxXSA9IDEuMCAvIGFbMV07XG4gIG91dFsyXSA9IDEuMCAvIGFbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIE5vcm1hbGl6ZSBhIHZlYzNcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdmVjdG9yIHRvIG5vcm1hbGl6ZVxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUob3V0LCBhKSB7XG4gIHZhciB4ID0gYVswXTtcbiAgdmFyIHkgPSBhWzFdO1xuICB2YXIgeiA9IGFbMl07XG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHo7XG5cbiAgaWYgKGxlbiA+IDApIHtcbiAgICAvL1RPRE86IGV2YWx1YXRlIHVzZSBvZiBnbG1faW52c3FydCBoZXJlP1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuXG4gIG91dFswXSA9IGFbMF0gKiBsZW47XG4gIG91dFsxXSA9IGFbMV0gKiBsZW47XG4gIG91dFsyXSA9IGFbMl0gKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl07XG59XG4vKipcbiAqIENvbXB1dGVzIHRoZSBjcm9zcyBwcm9kdWN0IG9mIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcm9zcyhvdXQsIGEsIGIpIHtcbiAgdmFyIGF4ID0gYVswXSxcbiAgICAgIGF5ID0gYVsxXSxcbiAgICAgIGF6ID0gYVsyXTtcbiAgdmFyIGJ4ID0gYlswXSxcbiAgICAgIGJ5ID0gYlsxXSxcbiAgICAgIGJ6ID0gYlsyXTtcbiAgb3V0WzBdID0gYXkgKiBieiAtIGF6ICogYnk7XG4gIG91dFsxXSA9IGF6ICogYnggLSBheCAqIGJ6O1xuICBvdXRbMl0gPSBheCAqIGJ5IC0gYXkgKiBieDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWMzJ3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYXggPSBhWzBdO1xuICB2YXIgYXkgPSBhWzFdO1xuICB2YXIgYXogPSBhWzJdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBQZXJmb3JtcyBhIGhlcm1pdGUgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGhlcm1pdGUob3V0LCBhLCBiLCBjLCBkLCB0KSB7XG4gIHZhciBmYWN0b3JUaW1lczIgPSB0ICogdDtcbiAgdmFyIGZhY3RvcjEgPSBmYWN0b3JUaW1lczIgKiAoMiAqIHQgLSAzKSArIDE7XG4gIHZhciBmYWN0b3IyID0gZmFjdG9yVGltZXMyICogKHQgLSAyKSArIHQ7XG4gIHZhciBmYWN0b3IzID0gZmFjdG9yVGltZXMyICogKHQgLSAxKTtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiAoMyAtIDIgKiB0KTtcbiAgb3V0WzBdID0gYVswXSAqIGZhY3RvcjEgKyBiWzBdICogZmFjdG9yMiArIGNbMF0gKiBmYWN0b3IzICsgZFswXSAqIGZhY3RvcjQ7XG4gIG91dFsxXSA9IGFbMV0gKiBmYWN0b3IxICsgYlsxXSAqIGZhY3RvcjIgKyBjWzFdICogZmFjdG9yMyArIGRbMV0gKiBmYWN0b3I0O1xuICBvdXRbMl0gPSBhWzJdICogZmFjdG9yMSArIGJbMl0gKiBmYWN0b3IyICsgY1syXSAqIGZhY3RvcjMgKyBkWzJdICogZmFjdG9yNDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUGVyZm9ybXMgYSBiZXppZXIgaW50ZXJwb2xhdGlvbiB3aXRoIHR3byBjb250cm9sIHBvaW50c1xuICpcbiAqIEBwYXJhbSB7dmVjM30gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYyB0aGUgdGhpcmQgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGQgdGhlIGZvdXJ0aCBvcGVyYW5kXG4gKiBAcGFyYW0ge051bWJlcn0gdCBpbnRlcnBvbGF0aW9uIGFtb3VudCwgaW4gdGhlIHJhbmdlIFswLTFdLCBiZXR3ZWVuIHRoZSB0d28gaW5wdXRzXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJlemllcihvdXQsIGEsIGIsIGMsIGQsIHQpIHtcbiAgdmFyIGludmVyc2VGYWN0b3IgPSAxIC0gdDtcbiAgdmFyIGludmVyc2VGYWN0b3JUaW1lc1R3byA9IGludmVyc2VGYWN0b3IgKiBpbnZlcnNlRmFjdG9yO1xuICB2YXIgZmFjdG9yVGltZXMyID0gdCAqIHQ7XG4gIHZhciBmYWN0b3IxID0gaW52ZXJzZUZhY3RvclRpbWVzVHdvICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvcjIgPSAzICogdCAqIGludmVyc2VGYWN0b3JUaW1lc1R3bztcbiAgdmFyIGZhY3RvcjMgPSAzICogZmFjdG9yVGltZXMyICogaW52ZXJzZUZhY3RvcjtcbiAgdmFyIGZhY3RvcjQgPSBmYWN0b3JUaW1lczIgKiB0O1xuICBvdXRbMF0gPSBhWzBdICogZmFjdG9yMSArIGJbMF0gKiBmYWN0b3IyICsgY1swXSAqIGZhY3RvcjMgKyBkWzBdICogZmFjdG9yNDtcbiAgb3V0WzFdID0gYVsxXSAqIGZhY3RvcjEgKyBiWzFdICogZmFjdG9yMiArIGNbMV0gKiBmYWN0b3IzICsgZFsxXSAqIGZhY3RvcjQ7XG4gIG91dFsyXSA9IGFbMl0gKiBmYWN0b3IxICsgYlsyXSAqIGZhY3RvcjIgKyBjWzJdICogZmFjdG9yMyArIGRbMl0gKiBmYWN0b3I0O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBHZW5lcmF0ZXMgYSByYW5kb20gdmVjdG9yIHdpdGggdGhlIGdpdmVuIHNjYWxlXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7TnVtYmVyfSBbc2NhbGVdIExlbmd0aCBvZiB0aGUgcmVzdWx0aW5nIHZlY3Rvci4gSWYgb21taXR0ZWQsIGEgdW5pdCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20ob3V0LCBzY2FsZSkge1xuICBzY2FsZSA9IHNjYWxlIHx8IDEuMDtcbiAgdmFyIHIgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIuMCAqIE1hdGguUEk7XG4gIHZhciB6ID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyLjAgLSAxLjA7XG4gIHZhciB6U2NhbGUgPSBNYXRoLnNxcnQoMS4wIC0geiAqIHopICogc2NhbGU7XG4gIG91dFswXSA9IE1hdGguY29zKHIpICogelNjYWxlO1xuICBvdXRbMV0gPSBNYXRoLnNpbihyKSAqIHpTY2FsZTtcbiAgb3V0WzJdID0geiAqIHNjYWxlO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWMzIHdpdGggYSBtYXQ0LlxuICogNHRoIHZlY3RvciBjb21wb25lbnQgaXMgaW1wbGljaXRseSAnMSdcbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQ0fSBtIG1hdHJpeCB0byB0cmFuc2Zvcm0gd2l0aFxuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1NYXQ0KG91dCwgYSwgbSkge1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdO1xuICB2YXIgdyA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XTtcbiAgdyA9IHcgfHwgMS4wO1xuICBvdXRbMF0gPSAobVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0pIC8gdztcbiAgb3V0WzFdID0gKG1bMV0gKiB4ICsgbVs1XSAqIHkgKyBtWzldICogeiArIG1bMTNdKSAvIHc7XG4gIG91dFsyXSA9IChtWzJdICogeCArIG1bNl0gKiB5ICsgbVsxMF0gKiB6ICsgbVsxNF0pIC8gdztcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogVHJhbnNmb3JtcyB0aGUgdmVjMyB3aXRoIGEgbWF0My5cbiAqXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7UmVhZG9ubHlNYXQzfSBtIHRoZSAzeDMgbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDMob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl07XG4gIG91dFswXSA9IHggKiBtWzBdICsgeSAqIG1bM10gKyB6ICogbVs2XTtcbiAgb3V0WzFdID0geCAqIG1bMV0gKyB5ICogbVs0XSArIHogKiBtWzddO1xuICBvdXRbMl0gPSB4ICogbVsyXSArIHkgKiBtWzVdICsgeiAqIG1bOF07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzMgd2l0aCBhIHF1YXRcbiAqIENhbiBhbHNvIGJlIHVzZWQgZm9yIGR1YWwgcXVhdGVybmlvbnMuIChNdWx0aXBseSBpdCB3aXRoIHRoZSByZWFsIHBhcnQpXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHRoZSB2ZWN0b3IgdG8gdHJhbnNmb3JtXG4gKiBAcGFyYW0ge1JlYWRvbmx5UXVhdH0gcSBxdWF0ZXJuaW9uIHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybVF1YXQob3V0LCBhLCBxKSB7XG4gIC8vIGJlbmNobWFya3M6IGh0dHBzOi8vanNwZXJmLmNvbS9xdWF0ZXJuaW9uLXRyYW5zZm9ybS12ZWMzLWltcGxlbWVudGF0aW9ucy1maXhlZFxuICB2YXIgcXggPSBxWzBdLFxuICAgICAgcXkgPSBxWzFdLFxuICAgICAgcXogPSBxWzJdLFxuICAgICAgcXcgPSBxWzNdO1xuICB2YXIgeCA9IGFbMF0sXG4gICAgICB5ID0gYVsxXSxcbiAgICAgIHogPSBhWzJdOyAvLyB2YXIgcXZlYyA9IFtxeCwgcXksIHF6XTtcbiAgLy8gdmFyIHV2ID0gdmVjMy5jcm9zcyhbXSwgcXZlYywgYSk7XG5cbiAgdmFyIHV2eCA9IHF5ICogeiAtIHF6ICogeSxcbiAgICAgIHV2eSA9IHF6ICogeCAtIHF4ICogeixcbiAgICAgIHV2eiA9IHF4ICogeSAtIHF5ICogeDsgLy8gdmFyIHV1diA9IHZlYzMuY3Jvc3MoW10sIHF2ZWMsIHV2KTtcblxuICB2YXIgdXV2eCA9IHF5ICogdXZ6IC0gcXogKiB1dnksXG4gICAgICB1dXZ5ID0gcXogKiB1dnggLSBxeCAqIHV2eixcbiAgICAgIHV1dnogPSBxeCAqIHV2eSAtIHF5ICogdXZ4OyAvLyB2ZWMzLnNjYWxlKHV2LCB1diwgMiAqIHcpO1xuXG4gIHZhciB3MiA9IHF3ICogMjtcbiAgdXZ4ICo9IHcyO1xuICB1dnkgKj0gdzI7XG4gIHV2eiAqPSB3MjsgLy8gdmVjMy5zY2FsZSh1dXYsIHV1diwgMik7XG5cbiAgdXV2eCAqPSAyO1xuICB1dXZ5ICo9IDI7XG4gIHV1dnogKj0gMjsgLy8gcmV0dXJuIHZlYzMuYWRkKG91dCwgYSwgdmVjMy5hZGQob3V0LCB1diwgdXV2KSk7XG5cbiAgb3V0WzBdID0geCArIHV2eCArIHV1dng7XG4gIG91dFsxXSA9IHkgKyB1dnkgKyB1dXZ5O1xuICBvdXRbMl0gPSB6ICsgdXZ6ICsgdXV2ejtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUm90YXRlIGEgM0QgdmVjdG9yIGFyb3VuZCB0aGUgeC1heGlzXG4gKiBAcGFyYW0ge3ZlYzN9IG91dCBUaGUgcmVjZWl2aW5nIHZlYzNcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIFRoZSB2ZWMzIHBvaW50IHRvIHJvdGF0ZVxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIG9yaWdpbiBvZiB0aGUgcm90YXRpb25cbiAqIEBwYXJhbSB7TnVtYmVyfSByYWQgVGhlIGFuZ2xlIG9mIHJvdGF0aW9uIGluIHJhZGlhbnNcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlWChvdXQsIGEsIGIsIHJhZCkge1xuICB2YXIgcCA9IFtdLFxuICAgICAgciA9IFtdOyAvL1RyYW5zbGF0ZSBwb2ludCB0byB0aGUgb3JpZ2luXG5cbiAgcFswXSA9IGFbMF0gLSBiWzBdO1xuICBwWzFdID0gYVsxXSAtIGJbMV07XG4gIHBbMl0gPSBhWzJdIC0gYlsyXTsgLy9wZXJmb3JtIHJvdGF0aW9uXG5cbiAgclswXSA9IHBbMF07XG4gIHJbMV0gPSBwWzFdICogTWF0aC5jb3MocmFkKSAtIHBbMl0gKiBNYXRoLnNpbihyYWQpO1xuICByWzJdID0gcFsxXSAqIE1hdGguc2luKHJhZCkgKyBwWzJdICogTWF0aC5jb3MocmFkKTsgLy90cmFuc2xhdGUgdG8gY29ycmVjdCBwb3NpdGlvblxuXG4gIG91dFswXSA9IHJbMF0gKyBiWzBdO1xuICBvdXRbMV0gPSByWzFdICsgYlsxXTtcbiAgb3V0WzJdID0gclsyXSArIGJbMl07XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJvdGF0ZSBhIDNEIHZlY3RvciBhcm91bmQgdGhlIHktYXhpc1xuICogQHBhcmFtIHt2ZWMzfSBvdXQgVGhlIHJlY2VpdmluZyB2ZWMzXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgdmVjMyBwb2ludCB0byByb3RhdGVcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBvcmlnaW4gb2YgdGhlIHJvdGF0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gcmFkIFRoZSBhbmdsZSBvZiByb3RhdGlvbiBpbiByYWRpYW5zXG4gKiBAcmV0dXJucyB7dmVjM30gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVkob3V0LCBhLCBiLCByYWQpIHtcbiAgdmFyIHAgPSBbXSxcbiAgICAgIHIgPSBbXTsgLy9UcmFuc2xhdGUgcG9pbnQgdG8gdGhlIG9yaWdpblxuXG4gIHBbMF0gPSBhWzBdIC0gYlswXTtcbiAgcFsxXSA9IGFbMV0gLSBiWzFdO1xuICBwWzJdID0gYVsyXSAtIGJbMl07IC8vcGVyZm9ybSByb3RhdGlvblxuXG4gIHJbMF0gPSBwWzJdICogTWF0aC5zaW4ocmFkKSArIHBbMF0gKiBNYXRoLmNvcyhyYWQpO1xuICByWzFdID0gcFsxXTtcbiAgclsyXSA9IHBbMl0gKiBNYXRoLmNvcyhyYWQpIC0gcFswXSAqIE1hdGguc2luKHJhZCk7IC8vdHJhbnNsYXRlIHRvIGNvcnJlY3QgcG9zaXRpb25cblxuICBvdXRbMF0gPSByWzBdICsgYlswXTtcbiAgb3V0WzFdID0gclsxXSArIGJbMV07XG4gIG91dFsyXSA9IHJbMl0gKyBiWzJdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSb3RhdGUgYSAzRCB2ZWN0b3IgYXJvdW5kIHRoZSB6LWF4aXNcbiAqIEBwYXJhbSB7dmVjM30gb3V0IFRoZSByZWNlaXZpbmcgdmVjM1xuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIHZlYzMgcG9pbnQgdG8gcm90YXRlXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYiBUaGUgb3JpZ2luIG9mIHRoZSByb3RhdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IHJhZCBUaGUgYW5nbGUgb2Ygcm90YXRpb24gaW4gcmFkaWFuc1xuICogQHJldHVybnMge3ZlYzN9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVaKG91dCwgYSwgYiwgcmFkKSB7XG4gIHZhciBwID0gW10sXG4gICAgICByID0gW107IC8vVHJhbnNsYXRlIHBvaW50IHRvIHRoZSBvcmlnaW5cblxuICBwWzBdID0gYVswXSAtIGJbMF07XG4gIHBbMV0gPSBhWzFdIC0gYlsxXTtcbiAgcFsyXSA9IGFbMl0gLSBiWzJdOyAvL3BlcmZvcm0gcm90YXRpb25cblxuICByWzBdID0gcFswXSAqIE1hdGguY29zKHJhZCkgLSBwWzFdICogTWF0aC5zaW4ocmFkKTtcbiAgclsxXSA9IHBbMF0gKiBNYXRoLnNpbihyYWQpICsgcFsxXSAqIE1hdGguY29zKHJhZCk7XG4gIHJbMl0gPSBwWzJdOyAvL3RyYW5zbGF0ZSB0byBjb3JyZWN0IHBvc2l0aW9uXG5cbiAgb3V0WzBdID0gclswXSArIGJbMF07XG4gIG91dFsxXSA9IHJbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSByWzJdICsgYlsyXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHR3byAzRCB2ZWN0b3JzXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYW5nbGUgaW4gcmFkaWFuc1xuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBhbmdsZShhLCBiKSB7XG4gIHZhciBheCA9IGFbMF0sXG4gICAgICBheSA9IGFbMV0sXG4gICAgICBheiA9IGFbMl0sXG4gICAgICBieCA9IGJbMF0sXG4gICAgICBieSA9IGJbMV0sXG4gICAgICBieiA9IGJbMl0sXG4gICAgICBtYWcxID0gTWF0aC5zcXJ0KGF4ICogYXggKyBheSAqIGF5ICsgYXogKiBheiksXG4gICAgICBtYWcyID0gTWF0aC5zcXJ0KGJ4ICogYnggKyBieSAqIGJ5ICsgYnogKiBieiksXG4gICAgICBtYWcgPSBtYWcxICogbWFnMixcbiAgICAgIGNvc2luZSA9IG1hZyAmJiBkb3QoYSwgYikgLyBtYWc7XG4gIHJldHVybiBNYXRoLmFjb3MoTWF0aC5taW4oTWF0aC5tYXgoY29zaW5lLCAtMSksIDEpKTtcbn1cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjMyB0byB6ZXJvXG4gKlxuICogQHBhcmFtIHt2ZWMzfSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWMzfSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gemVybyhvdXQpIHtcbiAgb3V0WzBdID0gMC4wO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZlY3RvclxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBhIHZlY3RvciB0byByZXByZXNlbnQgYXMgYSBzdHJpbmdcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cihhKSB7XG4gIHJldHVybiBcInZlYzMoXCIgKyBhWzBdICsgXCIsIFwiICsgYVsxXSArIFwiLCBcIiArIGFbMl0gKyBcIilcIjtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWMzfSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB2ZWN0b3JzIGhhdmUgYXBwcm94aW1hdGVseSB0aGUgc2FtZSBlbGVtZW50cyBpbiB0aGUgc2FtZSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjM30gYSBUaGUgZmlyc3QgdmVjdG9yLlxuICogQHBhcmFtIHtSZWFkb25seVZlYzN9IGIgVGhlIHNlY29uZCB2ZWN0b3IuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmVjdG9ycyBhcmUgZXF1YWwsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgdmFyIGEwID0gYVswXSxcbiAgICAgIGExID0gYVsxXSxcbiAgICAgIGEyID0gYVsyXTtcbiAgdmFyIGIwID0gYlswXSxcbiAgICAgIGIxID0gYlsxXSxcbiAgICAgIGIyID0gYlsyXTtcbiAgcmV0dXJuIE1hdGguYWJzKGEwIC0gYjApIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGEwKSwgTWF0aC5hYnMoYjApKSAmJiBNYXRoLmFicyhhMSAtIGIxKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMSksIE1hdGguYWJzKGIxKSkgJiYgTWF0aC5hYnMoYTIgLSBiMikgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTIpLCBNYXRoLmFicyhiMikpO1xufVxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuZGl2aWRlfVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMuc3F1YXJlZERpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzMubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjMy5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjM3MuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjMy4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzNzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuXG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDM7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldO1xuICAgICAgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICB2ZWNbMl0gPSBhW2kgKyAyXTtcbiAgICAgIGZuKHZlYywgdmVjLCBhcmcpO1xuICAgICAgYVtpXSA9IHZlY1swXTtcbiAgICAgIGFbaSArIDFdID0gdmVjWzFdO1xuICAgICAgYVtpICsgMl0gPSB2ZWNbMl07XG4gICAgfVxuXG4gICAgcmV0dXJuIGE7XG4gIH07XG59KCk7IiwiaW1wb3J0ICogYXMgZ2xNYXRyaXggZnJvbSBcIi4vY29tbW9uLmpzXCI7XG4vKipcbiAqIDQgRGltZW5zaW9uYWwgVmVjdG9yXG4gKiBAbW9kdWxlIHZlYzRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHZlYzRcbiAqXG4gKiBAcmV0dXJucyB7dmVjNH0gYSBuZXcgNEQgdmVjdG9yXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuXG4gIGlmIChnbE1hdHJpeC5BUlJBWV9UWVBFICE9IEZsb2F0MzJBcnJheSkge1xuICAgIG91dFswXSA9IDA7XG4gICAgb3V0WzFdID0gMDtcbiAgICBvdXRbMl0gPSAwO1xuICAgIG91dFszXSA9IDA7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHZlYzQgaW5pdGlhbGl6ZWQgd2l0aCB2YWx1ZXMgZnJvbSBhbiBleGlzdGluZyB2ZWN0b3JcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2xvbmVcbiAqIEByZXR1cm5zIHt2ZWM0fSBhIG5ldyA0RCB2ZWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYSkge1xuICB2YXIgb3V0ID0gbmV3IGdsTWF0cml4LkFSUkFZX1RZUEUoNCk7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdmVjNCBpbml0aWFsaXplZCB3aXRoIHRoZSBnaXZlbiB2YWx1ZXNcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IGEgbmV3IDREIHZlY3RvclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBmcm9tVmFsdWVzKHgsIHksIHosIHcpIHtcbiAgdmFyIG91dCA9IG5ldyBnbE1hdHJpeC5BUlJBWV9UWVBFKDQpO1xuICBvdXRbMF0gPSB4O1xuICBvdXRbMV0gPSB5O1xuICBvdXRbMl0gPSB6O1xuICBvdXRbM10gPSB3O1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBDb3B5IHRoZSB2YWx1ZXMgZnJvbSBvbmUgdmVjNCB0byBhbm90aGVyXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBzb3VyY2UgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcHkob3V0LCBhKSB7XG4gIG91dFswXSA9IGFbMF07XG4gIG91dFsxXSA9IGFbMV07XG4gIG91dFsyXSA9IGFbMl07XG4gIG91dFszXSA9IGFbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFNldCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzQgdG8gdGhlIGdpdmVuIHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0geCBYIGNvbXBvbmVudFxuICogQHBhcmFtIHtOdW1iZXJ9IHkgWSBjb21wb25lbnRcbiAqIEBwYXJhbSB7TnVtYmVyfSB6IFogY29tcG9uZW50XG4gKiBAcGFyYW0ge051bWJlcn0gdyBXIGNvbXBvbmVudFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXQob3V0LCB4LCB5LCB6LCB3KSB7XG4gIG91dFswXSA9IHg7XG4gIG91dFsxXSA9IHk7XG4gIG91dFsyXSA9IHo7XG4gIG91dFszXSA9IHc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIEFkZHMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICsgYlsyXTtcbiAgb3V0WzNdID0gYVszXSArIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFN1YnRyYWN0cyB2ZWN0b3IgYiBmcm9tIHZlY3RvciBhXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Qob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gLSBiWzBdO1xuICBvdXRbMV0gPSBhWzFdIC0gYlsxXTtcbiAgb3V0WzJdID0gYVsyXSAtIGJbMl07XG4gIG91dFszXSA9IGFbM10gLSBiWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAqIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gKiBiWzFdO1xuICBvdXRbMl0gPSBhWzJdICogYlsyXTtcbiAgb3V0WzNdID0gYVszXSAqIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIERpdmlkZXMgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRpdmlkZShvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gYVswXSAvIGJbMF07XG4gIG91dFsxXSA9IGFbMV0gLyBiWzFdO1xuICBvdXRbMl0gPSBhWzJdIC8gYlsyXTtcbiAgb3V0WzNdID0gYVszXSAvIGJbM107XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIE1hdGguY2VpbCB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNlaWxcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY2VpbChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5jZWlsKGFbMF0pO1xuICBvdXRbMV0gPSBNYXRoLmNlaWwoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguY2VpbChhWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5jZWlsKGFbM10pO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBNYXRoLmZsb29yIHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNFxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gZmxvb3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZmxvb3Iob3V0LCBhKSB7XG4gIG91dFswXSA9IE1hdGguZmxvb3IoYVswXSk7XG4gIG91dFsxXSA9IE1hdGguZmxvb3IoYVsxXSk7XG4gIG91dFsyXSA9IE1hdGguZmxvb3IoYVsyXSk7XG4gIG91dFszXSA9IE1hdGguZmxvb3IoYVszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIG1pbmltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbihvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5taW4oYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWluKGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1pbihhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5taW4oYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIG1heGltdW0gb2YgdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1heChvdXQsIGEsIGIpIHtcbiAgb3V0WzBdID0gTWF0aC5tYXgoYVswXSwgYlswXSk7XG4gIG91dFsxXSA9IE1hdGgubWF4KGFbMV0sIGJbMV0pO1xuICBvdXRbMl0gPSBNYXRoLm1heChhWzJdLCBiWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5tYXgoYVszXSwgYlszXSk7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIE1hdGgucm91bmQgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byByb3VuZFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZChvdXQsIGEpIHtcbiAgb3V0WzBdID0gTWF0aC5yb3VuZChhWzBdKTtcbiAgb3V0WzFdID0gTWF0aC5yb3VuZChhWzFdKTtcbiAgb3V0WzJdID0gTWF0aC5yb3VuZChhWzJdKTtcbiAgb3V0WzNdID0gTWF0aC5yb3VuZChhWzNdKTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogU2NhbGVzIGEgdmVjNCBieSBhIHNjYWxhciBudW1iZXJcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHZlY3RvciB0byBzY2FsZVxuICogQHBhcmFtIHtOdW1iZXJ9IGIgYW1vdW50IHRvIHNjYWxlIHRoZSB2ZWN0b3IgYnlcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc2NhbGUob3V0LCBhLCBiKSB7XG4gIG91dFswXSA9IGFbMF0gKiBiO1xuICBvdXRbMV0gPSBhWzFdICogYjtcbiAgb3V0WzJdID0gYVsyXSAqIGI7XG4gIG91dFszXSA9IGFbM10gKiBiO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBBZGRzIHR3byB2ZWM0J3MgYWZ0ZXIgc2NhbGluZyB0aGUgc2Vjb25kIG9wZXJhbmQgYnkgYSBzY2FsYXIgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlIHRoZSBhbW91bnQgdG8gc2NhbGUgYiBieSBiZWZvcmUgYWRkaW5nXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlQW5kQWRkKG91dCwgYSwgYiwgc2NhbGUpIHtcbiAgb3V0WzBdID0gYVswXSArIGJbMF0gKiBzY2FsZTtcbiAgb3V0WzFdID0gYVsxXSArIGJbMV0gKiBzY2FsZTtcbiAgb3V0WzJdID0gYVsyXSArIGJbMl0gKiBzY2FsZTtcbiAgb3V0WzNdID0gYVszXSArIGJbM10gKiBzY2FsZTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZXVjbGlkaWFuIGRpc3RhbmNlIGJldHdlZW4gdHdvIHZlYzQnc1xuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHRoZSBmaXJzdCBvcGVyYW5kXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXN0YW5jZShhLCBiKSB7XG4gIHZhciB4ID0gYlswXSAtIGFbMF07XG4gIHZhciB5ID0gYlsxXSAtIGFbMV07XG4gIHZhciB6ID0gYlsyXSAtIGFbMl07XG4gIHZhciB3ID0gYlszXSAtIGFbM107XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHksIHosIHcpO1xufVxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzcXVhcmVkIGV1Y2xpZGlhbiBkaXN0YW5jZSBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBzcXVhcmVkIGRpc3RhbmNlIGJldHdlZW4gYSBhbmQgYlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkRGlzdGFuY2UoYSwgYikge1xuICB2YXIgeCA9IGJbMF0gLSBhWzBdO1xuICB2YXIgeSA9IGJbMV0gLSBhWzFdO1xuICB2YXIgeiA9IGJbMl0gLSBhWzJdO1xuICB2YXIgdyA9IGJbM10gLSBhWzNdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB2ZWN0b3IgdG8gY2FsY3VsYXRlIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gbGVuZ3RoIG9mIGFcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5LCB6LCB3KTtcbn1cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3F1YXJlZCBsZW5ndGggb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGNhbGN1bGF0ZSBzcXVhcmVkIGxlbmd0aCBvZlxuICogQHJldHVybnMge051bWJlcn0gc3F1YXJlZCBsZW5ndGggb2YgYVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBzcXVhcmVkTGVuZ3RoKGEpIHtcbiAgdmFyIHggPSBhWzBdO1xuICB2YXIgeSA9IGFbMV07XG4gIHZhciB6ID0gYVsyXTtcbiAgdmFyIHcgPSBhWzNdO1xuICByZXR1cm4geCAqIHggKyB5ICogeSArIHogKiB6ICsgdyAqIHc7XG59XG4vKipcbiAqIE5lZ2F0ZXMgdGhlIGNvbXBvbmVudHMgb2YgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBuZWdhdGVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKG91dCwgYSkge1xuICBvdXRbMF0gPSAtYVswXTtcbiAgb3V0WzFdID0gLWFbMV07XG4gIG91dFsyXSA9IC1hWzJdO1xuICBvdXRbM10gPSAtYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaW52ZXJzZSBvZiB0aGUgY29tcG9uZW50cyBvZiBhIHZlYzRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIGludmVydFxuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlKG91dCwgYSkge1xuICBvdXRbMF0gPSAxLjAgLyBhWzBdO1xuICBvdXRbMV0gPSAxLjAgLyBhWzFdO1xuICBvdXRbMl0gPSAxLjAgLyBhWzJdO1xuICBvdXRbM10gPSAxLjAgLyBhWzNdO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBOb3JtYWxpemUgYSB2ZWM0XG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIHZlY3RvciB0byBub3JtYWxpemVcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKG91dCwgYSkge1xuICB2YXIgeCA9IGFbMF07XG4gIHZhciB5ID0gYVsxXTtcbiAgdmFyIHogPSBhWzJdO1xuICB2YXIgdyA9IGFbM107XG4gIHZhciBsZW4gPSB4ICogeCArIHkgKiB5ICsgeiAqIHogKyB3ICogdztcblxuICBpZiAobGVuID4gMCkge1xuICAgIGxlbiA9IDEgLyBNYXRoLnNxcnQobGVuKTtcbiAgfVxuXG4gIG91dFswXSA9IHggKiBsZW47XG4gIG91dFsxXSA9IHkgKiBsZW47XG4gIG91dFsyXSA9IHogKiBsZW47XG4gIG91dFszXSA9IHcgKiBsZW47XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGRvdCBwcm9kdWN0IG9mIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGIgdGhlIHNlY29uZCBvcGVyYW5kXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBkb3QgcHJvZHVjdCBvZiBhIGFuZCBiXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdChhLCBiKSB7XG4gIHJldHVybiBhWzBdICogYlswXSArIGFbMV0gKiBiWzFdICsgYVsyXSAqIGJbMl0gKyBhWzNdICogYlszXTtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgY3Jvc3MtcHJvZHVjdCBvZiB0aHJlZSB2ZWN0b3JzIGluIGEgNC1kaW1lbnNpb25hbCBzcGFjZVxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSByZXN1bHQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBVIHRoZSBmaXJzdCB2ZWN0b3JcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBWIHRoZSBzZWNvbmQgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gVyB0aGUgdGhpcmQgdmVjdG9yXG4gKiBAcmV0dXJucyB7dmVjNH0gcmVzdWx0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyb3NzKG91dCwgdSwgdiwgdykge1xuICB2YXIgQSA9IHZbMF0gKiB3WzFdIC0gdlsxXSAqIHdbMF0sXG4gICAgICBCID0gdlswXSAqIHdbMl0gLSB2WzJdICogd1swXSxcbiAgICAgIEMgPSB2WzBdICogd1szXSAtIHZbM10gKiB3WzBdLFxuICAgICAgRCA9IHZbMV0gKiB3WzJdIC0gdlsyXSAqIHdbMV0sXG4gICAgICBFID0gdlsxXSAqIHdbM10gLSB2WzNdICogd1sxXSxcbiAgICAgIEYgPSB2WzJdICogd1szXSAtIHZbM10gKiB3WzJdO1xuICB2YXIgRyA9IHVbMF07XG4gIHZhciBIID0gdVsxXTtcbiAgdmFyIEkgPSB1WzJdO1xuICB2YXIgSiA9IHVbM107XG4gIG91dFswXSA9IEggKiBGIC0gSSAqIEUgKyBKICogRDtcbiAgb3V0WzFdID0gLShHICogRikgKyBJICogQyAtIEogKiBCO1xuICBvdXRbMl0gPSBHICogRSAtIEggKiBDICsgSiAqIEE7XG4gIG91dFszXSA9IC0oRyAqIEQpICsgSCAqIEIgLSBJICogQTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogUGVyZm9ybXMgYSBsaW5lYXIgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byB2ZWM0J3NcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIGZpcnN0IG9wZXJhbmRcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIHRoZSBzZWNvbmQgb3BlcmFuZFxuICogQHBhcmFtIHtOdW1iZXJ9IHQgaW50ZXJwb2xhdGlvbiBhbW91bnQsIGluIHRoZSByYW5nZSBbMC0xXSwgYmV0d2VlbiB0aGUgdHdvIGlucHV0c1xuICogQHJldHVybnMge3ZlYzR9IG91dFxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKG91dCwgYSwgYiwgdCkge1xuICB2YXIgYXggPSBhWzBdO1xuICB2YXIgYXkgPSBhWzFdO1xuICB2YXIgYXogPSBhWzJdO1xuICB2YXIgYXcgPSBhWzNdO1xuICBvdXRbMF0gPSBheCArIHQgKiAoYlswXSAtIGF4KTtcbiAgb3V0WzFdID0gYXkgKyB0ICogKGJbMV0gLSBheSk7XG4gIG91dFsyXSA9IGF6ICsgdCAqIChiWzJdIC0gYXopO1xuICBvdXRbM10gPSBhdyArIHQgKiAoYlszXSAtIGF3KTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogR2VuZXJhdGVzIGEgcmFuZG9tIHZlY3RvciB3aXRoIHRoZSBnaXZlbiBzY2FsZVxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gW3NjYWxlXSBMZW5ndGggb2YgdGhlIHJlc3VsdGluZyB2ZWN0b3IuIElmIG9tbWl0dGVkLCBhIHVuaXQgdmVjdG9yIHdpbGwgYmUgcmV0dXJuZWRcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tKG91dCwgc2NhbGUpIHtcbiAgc2NhbGUgPSBzY2FsZSB8fCAxLjA7IC8vIE1hcnNhZ2xpYSwgR2VvcmdlLiBDaG9vc2luZyBhIFBvaW50IGZyb20gdGhlIFN1cmZhY2Ugb2YgYVxuICAvLyBTcGhlcmUuIEFubi4gTWF0aC4gU3RhdGlzdC4gNDMgKDE5NzIpLCBuby4gMiwgNjQ1LS02NDYuXG4gIC8vIGh0dHA6Ly9wcm9qZWN0ZXVjbGlkLm9yZy9ldWNsaWQuYW9tcy8xMTc3NjkyNjQ0O1xuXG4gIHZhciB2MSwgdjIsIHYzLCB2NDtcbiAgdmFyIHMxLCBzMjtcblxuICBkbyB7XG4gICAgdjEgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIgLSAxO1xuICAgIHYyID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyIC0gMTtcbiAgICBzMSA9IHYxICogdjEgKyB2MiAqIHYyO1xuICB9IHdoaWxlIChzMSA+PSAxKTtcblxuICBkbyB7XG4gICAgdjMgPSBnbE1hdHJpeC5SQU5ET00oKSAqIDIgLSAxO1xuICAgIHY0ID0gZ2xNYXRyaXguUkFORE9NKCkgKiAyIC0gMTtcbiAgICBzMiA9IHYzICogdjMgKyB2NCAqIHY0O1xuICB9IHdoaWxlIChzMiA+PSAxKTtcblxuICB2YXIgZCA9IE1hdGguc3FydCgoMSAtIHMxKSAvIHMyKTtcbiAgb3V0WzBdID0gc2NhbGUgKiB2MTtcbiAgb3V0WzFdID0gc2NhbGUgKiB2MjtcbiAgb3V0WzJdID0gc2NhbGUgKiB2MyAqIGQ7XG4gIG91dFszXSA9IHNjYWxlICogdjQgKiBkO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBUcmFuc2Zvcm1zIHRoZSB2ZWM0IHdpdGggYSBtYXQ0LlxuICpcbiAqIEBwYXJhbSB7dmVjNH0gb3V0IHRoZSByZWNlaXZpbmcgdmVjdG9yXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYSB0aGUgdmVjdG9yIHRvIHRyYW5zZm9ybVxuICogQHBhcmFtIHtSZWFkb25seU1hdDR9IG0gbWF0cml4IHRvIHRyYW5zZm9ybSB3aXRoXG4gKiBAcmV0dXJucyB7dmVjNH0gb3V0XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybU1hdDQob3V0LCBhLCBtKSB7XG4gIHZhciB4ID0gYVswXSxcbiAgICAgIHkgPSBhWzFdLFxuICAgICAgeiA9IGFbMl0sXG4gICAgICB3ID0gYVszXTtcbiAgb3V0WzBdID0gbVswXSAqIHggKyBtWzRdICogeSArIG1bOF0gKiB6ICsgbVsxMl0gKiB3O1xuICBvdXRbMV0gPSBtWzFdICogeCArIG1bNV0gKiB5ICsgbVs5XSAqIHogKyBtWzEzXSAqIHc7XG4gIG91dFsyXSA9IG1bMl0gKiB4ICsgbVs2XSAqIHkgKyBtWzEwXSAqIHogKyBtWzE0XSAqIHc7XG4gIG91dFszXSA9IG1bM10gKiB4ICsgbVs3XSAqIHkgKyBtWzExXSAqIHogKyBtWzE1XSAqIHc7XG4gIHJldHVybiBvdXQ7XG59XG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIHZlYzQgd2l0aCBhIHF1YXRcbiAqXG4gKiBAcGFyYW0ge3ZlYzR9IG91dCB0aGUgcmVjZWl2aW5nIHZlY3RvclxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdGhlIHZlY3RvciB0byB0cmFuc2Zvcm1cbiAqIEBwYXJhbSB7UmVhZG9ubHlRdWF0fSBxIHF1YXRlcm5pb24gdG8gdHJhbnNmb3JtIHdpdGhcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtUXVhdChvdXQsIGEsIHEpIHtcbiAgdmFyIHggPSBhWzBdLFxuICAgICAgeSA9IGFbMV0sXG4gICAgICB6ID0gYVsyXTtcbiAgdmFyIHF4ID0gcVswXSxcbiAgICAgIHF5ID0gcVsxXSxcbiAgICAgIHF6ID0gcVsyXSxcbiAgICAgIHF3ID0gcVszXTsgLy8gY2FsY3VsYXRlIHF1YXQgKiB2ZWNcblxuICB2YXIgaXggPSBxdyAqIHggKyBxeSAqIHogLSBxeiAqIHk7XG4gIHZhciBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcbiAgdmFyIGl6ID0gcXcgKiB6ICsgcXggKiB5IC0gcXkgKiB4O1xuICB2YXIgaXcgPSAtcXggKiB4IC0gcXkgKiB5IC0gcXogKiB6OyAvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG5cbiAgb3V0WzBdID0gaXggKiBxdyArIGl3ICogLXF4ICsgaXkgKiAtcXogLSBpeiAqIC1xeTtcbiAgb3V0WzFdID0gaXkgKiBxdyArIGl3ICogLXF5ICsgaXogKiAtcXggLSBpeCAqIC1xejtcbiAgb3V0WzJdID0gaXogKiBxdyArIGl3ICogLXF6ICsgaXggKiAtcXkgLSBpeSAqIC1xeDtcbiAgb3V0WzNdID0gYVszXTtcbiAgcmV0dXJuIG91dDtcbn1cbi8qKlxuICogU2V0IHRoZSBjb21wb25lbnRzIG9mIGEgdmVjNCB0byB6ZXJvXG4gKlxuICogQHBhcmFtIHt2ZWM0fSBvdXQgdGhlIHJlY2VpdmluZyB2ZWN0b3JcbiAqIEByZXR1cm5zIHt2ZWM0fSBvdXRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gemVybyhvdXQpIHtcbiAgb3V0WzBdID0gMC4wO1xuICBvdXRbMV0gPSAwLjA7XG4gIG91dFsyXSA9IDAuMDtcbiAgb3V0WzNdID0gMC4wO1xuICByZXR1cm4gb3V0O1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmVjdG9yXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgdmVjdG9yIHRvIHJlcHJlc2VudCBhcyBhIHN0cmluZ1xuICogQHJldHVybnMge1N0cmluZ30gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyKGEpIHtcbiAgcmV0dXJuIFwidmVjNChcIiArIGFbMF0gKyBcIiwgXCIgKyBhWzFdICsgXCIsIFwiICsgYVsyXSArIFwiLCBcIiArIGFbM10gKyBcIilcIjtcbn1cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgdmVjdG9ycyBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWxlbWVudHMgaW4gdGhlIHNhbWUgcG9zaXRpb24gKHdoZW4gY29tcGFyZWQgd2l0aCA9PT0pXG4gKlxuICogQHBhcmFtIHtSZWFkb25seVZlYzR9IGEgVGhlIGZpcnN0IHZlY3Rvci5cbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBiIFRoZSBzZWNvbmQgdmVjdG9yLlxuICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWYgdGhlIHZlY3RvcnMgYXJlIGVxdWFsLCBmYWxzZSBvdGhlcndpc2UuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0RXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIGFbMF0gPT09IGJbMF0gJiYgYVsxXSA9PT0gYlsxXSAmJiBhWzJdID09PSBiWzJdICYmIGFbM10gPT09IGJbM107XG59XG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHZlY3RvcnMgaGF2ZSBhcHByb3hpbWF0ZWx5IHRoZSBzYW1lIGVsZW1lbnRzIGluIHRoZSBzYW1lIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVhZG9ubHlWZWM0fSBhIFRoZSBmaXJzdCB2ZWN0b3IuXG4gKiBAcGFyYW0ge1JlYWRvbmx5VmVjNH0gYiBUaGUgc2Vjb25kIHZlY3Rvci5cbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmIHRoZSB2ZWN0b3JzIGFyZSBlcXVhbCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbHMoYSwgYikge1xuICB2YXIgYTAgPSBhWzBdLFxuICAgICAgYTEgPSBhWzFdLFxuICAgICAgYTIgPSBhWzJdLFxuICAgICAgYTMgPSBhWzNdO1xuICB2YXIgYjAgPSBiWzBdLFxuICAgICAgYjEgPSBiWzFdLFxuICAgICAgYjIgPSBiWzJdLFxuICAgICAgYjMgPSBiWzNdO1xuICByZXR1cm4gTWF0aC5hYnMoYTAgLSBiMCkgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTApLCBNYXRoLmFicyhiMCkpICYmIE1hdGguYWJzKGExIC0gYjEpIDw9IGdsTWF0cml4LkVQU0lMT04gKiBNYXRoLm1heCgxLjAsIE1hdGguYWJzKGExKSwgTWF0aC5hYnMoYjEpKSAmJiBNYXRoLmFicyhhMiAtIGIyKSA8PSBnbE1hdHJpeC5FUFNJTE9OICogTWF0aC5tYXgoMS4wLCBNYXRoLmFicyhhMiksIE1hdGguYWJzKGIyKSkgJiYgTWF0aC5hYnMoYTMgLSBiMykgPD0gZ2xNYXRyaXguRVBTSUxPTiAqIE1hdGgubWF4KDEuMCwgTWF0aC5hYnMoYTMpLCBNYXRoLmFicyhiMykpO1xufVxuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuc3VidHJhY3R9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIHN1YiA9IHN1YnRyYWN0O1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQubXVsdGlwbHl9XG4gKiBAZnVuY3Rpb25cbiAqL1xuXG5leHBvcnQgdmFyIG11bCA9IG11bHRpcGx5O1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuZGl2aWRlfVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBkaXYgPSBkaXZpZGU7XG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5kaXN0YW5jZX1cbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgZGlzdCA9IGRpc3RhbmNlO1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQuc3F1YXJlZERpc3RhbmNlfVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBzcXJEaXN0ID0gc3F1YXJlZERpc3RhbmNlO1xuLyoqXG4gKiBBbGlhcyBmb3Ige0BsaW5rIHZlYzQubGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBsZW4gPSBsZW5ndGg7XG4vKipcbiAqIEFsaWFzIGZvciB7QGxpbmsgdmVjNC5zcXVhcmVkTGVuZ3RofVxuICogQGZ1bmN0aW9uXG4gKi9cblxuZXhwb3J0IHZhciBzcXJMZW4gPSBzcXVhcmVkTGVuZ3RoO1xuLyoqXG4gKiBQZXJmb3JtIHNvbWUgb3BlcmF0aW9uIG92ZXIgYW4gYXJyYXkgb2YgdmVjNHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYSB0aGUgYXJyYXkgb2YgdmVjdG9ycyB0byBpdGVyYXRlIG92ZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzdHJpZGUgTnVtYmVyIG9mIGVsZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0IG9mIGVhY2ggdmVjNC4gSWYgMCBhc3N1bWVzIHRpZ2h0bHkgcGFja2VkXG4gKiBAcGFyYW0ge051bWJlcn0gb2Zmc2V0IE51bWJlciBvZiBlbGVtZW50cyB0byBza2lwIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGFycmF5XG4gKiBAcGFyYW0ge051bWJlcn0gY291bnQgTnVtYmVyIG9mIHZlYzRzIHRvIGl0ZXJhdGUgb3Zlci4gSWYgMCBpdGVyYXRlcyBvdmVyIGVudGlyZSBhcnJheVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCB2ZWN0b3IgaW4gdGhlIGFycmF5XG4gKiBAcGFyYW0ge09iamVjdH0gW2FyZ10gYWRkaXRpb25hbCBhcmd1bWVudCB0byBwYXNzIHRvIGZuXG4gKiBAcmV0dXJucyB7QXJyYXl9IGFcbiAqIEBmdW5jdGlvblxuICovXG5cbmV4cG9ydCB2YXIgZm9yRWFjaCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHZlYyA9IGNyZWF0ZSgpO1xuICByZXR1cm4gZnVuY3Rpb24gKGEsIHN0cmlkZSwgb2Zmc2V0LCBjb3VudCwgZm4sIGFyZykge1xuICAgIHZhciBpLCBsO1xuXG4gICAgaWYgKCFzdHJpZGUpIHtcbiAgICAgIHN0cmlkZSA9IDQ7XG4gICAgfVxuXG4gICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGNvdW50KSB7XG4gICAgICBsID0gTWF0aC5taW4oY291bnQgKiBzdHJpZGUgKyBvZmZzZXQsIGEubGVuZ3RoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbCA9IGEubGVuZ3RoO1xuICAgIH1cblxuICAgIGZvciAoaSA9IG9mZnNldDsgaSA8IGw7IGkgKz0gc3RyaWRlKSB7XG4gICAgICB2ZWNbMF0gPSBhW2ldO1xuICAgICAgdmVjWzFdID0gYVtpICsgMV07XG4gICAgICB2ZWNbMl0gPSBhW2kgKyAyXTtcbiAgICAgIHZlY1szXSA9IGFbaSArIDNdO1xuICAgICAgZm4odmVjLCB2ZWMsIGFyZyk7XG4gICAgICBhW2ldID0gdmVjWzBdO1xuICAgICAgYVtpICsgMV0gPSB2ZWNbMV07XG4gICAgICBhW2kgKyAyXSA9IHZlY1syXTtcbiAgICAgIGFbaSArIDNdID0gdmVjWzNdO1xuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xufSgpOyIsImV4cG9ydCAqIGZyb20gJ0BtYXRoLmdsL2NvcmUnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiaW1wb3J0IHsgZ2xQb3NGcm9tQ2xpZW50LCB1bnBhY2sgfSBmcm9tIFwiLi93ZWJnbF91dGlsc1wiO1xuaW1wb3J0IHsgTWF0cml4NCwgVmVjdG9yNCB9IGZyb20gXCJtYXRoLmdsXCI7XG5jbGFzcyBEcmF3aW5nIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9ncmFtKSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbmV3IE1hdHJpeDQoKS5pZGVudGl0eSgpO1xuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NhbGUgPSBuZXcgTWF0cml4NCgpLmlkZW50aXR5KCk7XG4gICAgICAgIHRoaXMuZ2xfUG9pbnRzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuZ2xfQ29sb3JzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2hhcGVJbmRpY2VzID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHRoaXMuc2hhcGVJbmRpY2VzLnB1c2goMCk7XG4gICAgICAgIHRoaXMuc2hhcGVJbmRpY2VzLnB1c2goMCk7XG4gICAgICAgIHRoaXMuYW5nbGUgPSAwLjA7XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGlvblNjYWxlID0gMC4wMDU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IHsgYV9Qb3NpdGlvbjogLTEsIHVfRnJhZ0NvbG9yOiBudWxsLCBhX1BvaW50U2l6ZTogLTEgfTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBudWxsO1xuICAgIH1cbiAgICBjbGljayhldmVudCwgZ2wsIGNhbnZhcykge1xuICAgICAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIGxldCB5ID0gZXZlbnQuY2xpZW50WTtcbiAgICAgICAgbGV0IGdsUG9zID0gZ2xQb3NGcm9tQ2xpZW50KGNhbnZhcywgeCwgeSk7XG4gICAgICAgIGdsUG9zID0gdGhpcy5nZXRJbnYoZ2xQb3MpO1xuICAgICAgICB0aGlzLmdsX1BvaW50cy5wdXNoKG5ldyBBcnJheSguLi5bZ2xQb3MueCwgZ2xQb3MueSwgMF0pKTtcbiAgICAgICAgY29uc3Qgbm9ybSA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICAgICAgdGhpcy5nbF9Db2xvcnMucHVzaChuZXcgQXJyYXkoLi4uW25vcm0sIDEgLSBub3JtLCBub3JtLCAxXSkpO1xuICAgICAgICB0aGlzLnJlbmRlckJ1ZmZlcihnbCk7XG4gICAgfVxuICAgIHVwZGF0ZVRyYW5zZm9ybShnbCkge1xuICAgICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgIGlmICh0aGlzLmRpcnR5KSB7XG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zZm9ybVVuaWZvcm0oZ2wsIHRoaXMucHJvZ3JhbSk7XG4gICAgICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyQnVmZmVyKGdsKSB7XG4gICAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMudmVydGV4QnVmZmVyKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmF0dHJpYnV0ZXMuYV9Qb3NpdGlvbiwgMywgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hdHRyaWJ1dGVzLmFfUG9zaXRpb24pO1xuICAgICAgICBnbC51bmlmb3JtNGYodGhpcy5hdHRyaWJ1dGVzLnVfRnJhZ0NvbG9yLCAxLCAwLjMsIDAuNiwgMSk7XG4gICAgICAgIGdsLmxpbmVXaWR0aCg1KTtcbiAgICAgICAgdGhpcy5zZXRCdWZmZXIoZ2wpO1xuICAgICAgICBjb25zdCBzaGFwZUluZGljZXMgPSB0aGlzLnNoYXBlSW5kaWNlcztcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzaGFwZUluZGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdsLmRyYXdBcnJheXMoZ2wuTElORV9TVFJJUCwgc2hhcGVJbmRpY2VzW2kgLSAxXSwgc2hhcGVJbmRpY2VzW2ldIC0gc2hhcGVJbmRpY2VzW2kgLSAxXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0QnVmZmVyKGdsKSB7XG4gICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB1bnBhY2sodGhpcy5nbF9Qb2ludHMpLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgfVxuICAgIHRyYW5zZm9ybUFuZFJlbmRlcihnbCwgcHJvZ3JhbSkge1xuICAgICAgICB0aGlzLnNldFRyYW5zZm9ybVVuaWZvcm0oZ2wsIHByb2dyYW0pO1xuICAgICAgICB0aGlzLnJlbmRlckJ1ZmZlcihnbCk7XG4gICAgfVxuICAgIHNldFRyYW5zZm9ybVVuaWZvcm0oZ2wsIHByb2dyYW0pIHtcbiAgICAgICAgY29uc3QgdV9UcmFuc2Zvcm0gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfVHJhbnNmb3JtJyk7XG4gICAgICAgIGlmICh1X1RyYW5zZm9ybSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkbid0IHNldCB1bmlmb3JtcyBmb3IgdHJhbnNmb3JtYXRpb25zXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKHRoaXMuYW5nbGUpO1xuICAgICAgICBjb25zdCBjb3MgPSBNYXRoLmNvcyh0aGlzLmFuZ2xlKTtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBuZXcgTWF0cml4NChbXG4gICAgICAgICAgICBjb3MsIC1zaW4sIDAsIHRoaXMudHJhbnNsYXRpb24ueCxcbiAgICAgICAgICAgIHNpbiwgY29zLCAwLCB0aGlzLnRyYW5zbGF0aW9uLnksXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcbiAgICAgICAgXSkubXVsdGlwbHlSaWdodCh0aGlzLnNjYWxlKTtcbiAgICAgICAgY29uc3QgY29weV90ID0gbmV3IE1hdHJpeDQoKS5jb3B5KHRoaXMudHJhbnNmb3JtKS50cmFuc3Bvc2UoKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdih1X1RyYW5zZm9ybSwgZmFsc2UsIGNvcHlfdCk7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICB9XG4gICAgZ2V0SW52KHYpIHtcbiAgICAgICAgY29uc3QgaW52ID0gKG5ldyBNYXRyaXg0KCkuY29weSh0aGlzLnRyYW5zZm9ybSkpLmludmVydCgpLnRyYW5zcG9zZSgpO1xuICAgICAgICBsZXQgdmVjNCA9IG5ldyBWZWN0b3I0KHYueCwgdi55LCAwLCAxKTtcbiAgICAgICAgdmVjNCA9IHZlYzQudHJhbnNmb3JtKGludik7XG4gICAgICAgIHJldHVybiB7IHg6IHZlYzRbMF0sIHk6IHZlYzRbMV0gfTtcbiAgICB9XG4gICAgZGlsYXRlKGNhbnZhcywgeCwgeSwgYW1vdW50KSB7XG4gICAgICAgIGxldCBpbkNhbnZhcyA9IGdsUG9zRnJvbUNsaWVudChjYW52YXMsIHgsIHkpO1xuICAgICAgICBjb25zdCB0cmFuc2xhdGlvbiA9IG5ldyBNYXRyaXg0KFtcbiAgICAgICAgICAgIDEsIDAsIDAsIC1pbkNhbnZhcy54LFxuICAgICAgICAgICAgMCwgMSwgMCwgLWluQ2FudmFzLnksXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gbmV3IE1hdHJpeDQoKS5pZGVudGl0eSgpLnNjYWxlKFthbW91bnQsIGFtb3VudCwgYW1vdW50LCAxXSk7XG4gICAgICAgIGNvbnN0IGludiA9IG5ldyBNYXRyaXg0KCkuY29weSh0cmFuc2xhdGlvbikuaW52ZXJ0KCk7XG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLnNjYWxlLm11bHRpcGx5UmlnaHQoaW52Lm11bHRpcGx5TGVmdChzY2FsZS5tdWx0aXBseUxlZnQodHJhbnNsYXRpb24pKSk7XG4gICAgICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIH1cbiAgICBpbml0VmVydGV4QnVmZmVycyhnbCwgcHJvZ3JhbSkge1xuICAgICAgICBjb25zdCBuID0gdGhpcy5nbF9Qb2ludHMubGVuZ3RoIC8gMjtcbiAgICAgICAgdGhpcy52ZXJ0ZXhCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgaWYgKCF0aGlzLnZlcnRleEJ1ZmZlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gY3JlYXRlIGJ1ZmZlclwiKTtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy52ZXJ0ZXhCdWZmZXIpO1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdW5wYWNrKHRoaXMuZ2xfUG9pbnRzKSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuYV9Qb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhX1Bvc2l0aW9uJyk7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hdHRyaWJ1dGVzLmFfUG9zaXRpb24sIDMsIGdsLkZMT0FULCBmYWxzZSwgMCwgMCk7XG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmlidXRlcy5hX1Bvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIG47XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgRHJhd2luZztcbiIsImltcG9ydCB7IGFkZCB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmxldCBsZWZ0TW91c2VEb3duID0gMDtcbmxldCByaWdodE1vdXNlRG93biA9IDA7XG5mdW5jdGlvbiBzZXR1cEhhbmRsZXJzKGNhbnZhcywgZ2wsIGRyYXdpbmcsIHRleHR1cmUpIHtcbiAgICBjYW52YXMub25tb3VzZWRvd24gPSBldmVudCA9PiB7XG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT0gMCkge1xuICAgICAgICAgICAgbGVmdE1vdXNlRG93bisrO1xuICAgICAgICAgICAgZHJhd2luZy5jbGljayhldmVudCwgZ2wsIGNhbnZhcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQuYnV0dG9uID09IDIpIHtcbiAgICAgICAgICAgIHJpZ2h0TW91c2VEb3duKys7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5vbmNvbnRleHRtZW51ID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBjYW52YXMub25tb3VzZXVwID0gZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQuYnV0dG9uID09IDApIHtcbiAgICAgICAgICAgIGRyYXdpbmcuc2hhcGVJbmRpY2VzLnB1c2goZHJhd2luZy5nbF9Qb2ludHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGxlZnRNb3VzZURvd24tLTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChldmVudC5idXR0b24gPT0gMikge1xuICAgICAgICAgICAgcmlnaHRNb3VzZURvd24tLTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2FudmFzLm9ubW91c2Vtb3ZlID0gZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBzaGFwZUluZGljZXMgPSBkcmF3aW5nLnNoYXBlSW5kaWNlcztcbiAgICAgICAgaWYgKGxlZnRNb3VzZURvd24gPiAwKSB7XG4gICAgICAgICAgICBkcmF3aW5nLmNsaWNrKGV2ZW50LCBnbCwgY2FudmFzKTtcbiAgICAgICAgICAgIHNoYXBlSW5kaWNlc1tzaGFwZUluZGljZXMubGVuZ3RoIC0gMV0gPSBkcmF3aW5nLmdsX1BvaW50cy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocmlnaHRNb3VzZURvd24gPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSBldmVudC5tb3ZlbWVudFg7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVkgPSBldmVudC5tb3ZlbWVudFk7XG4gICAgICAgICAgICBkcmF3aW5nLnRyYW5zbGF0aW9uID0gYWRkKGRyYXdpbmcudHJhbnNsYXRpb24sIHsgeDogZGVsdGFYICogZHJhd2luZy50cmFuc2xhdGlvblNjYWxlLCB5OiAtZGVsdGFZICogZHJhd2luZy50cmFuc2xhdGlvblNjYWxlIH0pO1xuICAgICAgICAgICAgZHJhd2luZy50cmFuc2Zvcm1BbmRSZW5kZXIoZ2wsIGRyYXdpbmcucHJvZ3JhbSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5vbmtleWRvd24gPSBldmVudCA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LmNvZGUpO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJLZXlRXCI6XG4gICAgICAgICAgICAgICAgY2hhbmdlUm90YXRpb24oZ2wsIGRyYXdpbmcucHJvZ3JhbSwgMC4xKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJLZXlFXCI6XG4gICAgICAgICAgICAgICAgY2hhbmdlUm90YXRpb24oZ2wsIGRyYXdpbmcucHJvZ3JhbSwgLTAuMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiRGlnaXQxXCI6XG4gICAgICAgICAgICAgICAgdGV4dHVyZS5zd2FwVGV4dHVyZXMoZ2wsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRpZ2l0MlwiOlxuICAgICAgICAgICAgICAgIHRleHR1cmUuc3dhcFRleHR1cmVzKGdsLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgY2FudmFzLm9ud2hlZWwgPSBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IGRpbGF0aW9uID0gZXZlbnQuZGVsdGFZIDwgMCA/IDEuMSA6IDAuOTtcbiAgICAgICAgZHJhd2luZy5kaWxhdGUoY2FudmFzLCBldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZLCBkaWxhdGlvbik7XG4gICAgICAgIGRyYXdpbmcucmVuZGVyQnVmZmVyKGdsKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNoYW5nZVJvdGF0aW9uKGdsLCBwcm9ncmFtLCB2YWx1ZSkge1xuICAgICAgICBkcmF3aW5nLmFuZ2xlICs9IHZhbHVlO1xuICAgICAgICBkcmF3aW5nLnRyYW5zZm9ybUFuZFJlbmRlcihnbCwgcHJvZ3JhbSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgc2V0dXBIYW5kbGVycztcbiIsImZ1bmN0aW9uIGFkZCh2MSwgdjIpIHtcbiAgICByZXR1cm4geyB4OiB2MS54ICsgdjIueCwgeTogdjEueSArIHYyLnkgfTtcbn1cbmZ1bmN0aW9uIHN1YnRyYWN0KHYxLCB2Mikge1xuICAgIHJldHVybiB7IHg6IHYxLnggLSB2Mi54LCB5OiB2MS55IC0gdjIueSB9O1xufVxuZnVuY3Rpb24gbXVsdChtYXQsIHYpIHtcbiAgICByZXR1cm4geyB4OiBtYXRbMF0gKiB2LnggKyBtYXRbNF0gKiB2LnkgKyBtYXRbMTJdLCB5OiBtYXRbMV0gKiB2LnggKyBtYXRbNV0gKiB2LnkgKyBtYXRbMTNdIH07XG59XG5leHBvcnQgeyBhZGQsIHN1YnRyYWN0LCBtdWx0IH07XG4iLCJpbXBvcnQgeyBnbFBvc0Zyb21DbGllbnQgfSBmcm9tIFwiLi93ZWJnbF91dGlsc1wiO1xuaW1wb3J0IHsgYWRkLCBzdWJ0cmFjdCB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbnZhciBVbmlmb3JtTmFtZXM7XG4oZnVuY3Rpb24gKFVuaWZvcm1OYW1lcykge1xuICAgIFVuaWZvcm1OYW1lc1tcInVfU2FtcGxlclwiXSA9IFwidV9TYW1wbGVyXCI7XG4gICAgVW5pZm9ybU5hbWVzW1widV9UcmFuc2Zvcm1cIl0gPSBcInVfVHJhbnNmb3JtXCI7XG59KShVbmlmb3JtTmFtZXMgfHwgKFVuaWZvcm1OYW1lcyA9IHt9KSk7XG52YXIgQXR0cmlidXRlTmFtZXM7XG4oZnVuY3Rpb24gKEF0dHJpYnV0ZU5hbWVzKSB7XG4gICAgQXR0cmlidXRlTmFtZXNbXCJhX1Bvc2l0aW9uXCJdID0gXCJhX1Bvc2l0aW9uXCI7XG4gICAgQXR0cmlidXRlTmFtZXNbXCJhX1RleENvb3JkXCJdID0gXCJhX1RleENvb3JkXCI7XG59KShBdHRyaWJ1dGVOYW1lcyB8fCAoQXR0cmlidXRlTmFtZXMgPSB7fSkpO1xuY2xhc3MgVGV4dHVyZSB7XG4gICAgY29uc3RydWN0b3IoZ2wsIHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB0aGlzLmRpcnR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gbmV3IEZsb2F0MzJBcnJheSgpO1xuICAgICAgICB0aGlzLnRleEluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0geyBhX1Bvc2l0aW9uOiAtMSwgYV9UZXhDb29yZDogLTEgfTtcbiAgICAgICAgdGhpcy51bmlmb3JtcyA9IHsgdV9TYW1wbGVyOiBudWxsLCB1X1RyYW5zZm9ybTogbnVsbCB9O1xuICAgICAgICB0aGlzLmNvb3JkcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAgICAgLTEsIDEsIDAuMCwgMS4wLFxuICAgICAgICAgICAgLTEsIC0xLCAwLjAsIDAuMCxcbiAgICAgICAgICAgIDEsIDEsIDEuMCwgMS4wLFxuICAgICAgICAgICAgMSwgLTEsIDEuMCwgMC4wXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLm4gPSA0O1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5jb29yZHMsIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgY29uc3QgRlNJWkUgPSB0aGlzLmNvb3Jkcy5CWVRFU19QRVJfRUxFTUVOVDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmFfUG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBBdHRyaWJ1dGVOYW1lcy5hX1Bvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmFfVGV4Q29vcmQgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBBdHRyaWJ1dGVOYW1lcy5hX1RleENvb3JkKTtcbiAgICAgICAgdGhpcy51bmlmb3Jtcy51X1RyYW5zZm9ybSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBVbmlmb3JtTmFtZXMudV9UcmFuc2Zvcm0pO1xuICAgICAgICB0aGlzLnVuaWZvcm1zLnVfU2FtcGxlciA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBVbmlmb3JtTmFtZXMudV9TYW1wbGVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hdHRyaWJ1dGVzKTtcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmF0dHJpYnV0ZXMuYV9Qb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBGU0laRSAqIDQsIDApO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYnV0ZXMuYV9Qb3NpdGlvbik7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hdHRyaWJ1dGVzLmFfVGV4Q29vcmQsIDIsIGdsLkZMT0FULCBmYWxzZSwgRlNJWkUgKiA0LCBGU0laRSAqIDIpO1xuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYnV0ZXMuYV9UZXhDb29yZCk7XG4gICAgICAgIHRoaXMudGV4dHVyZXMucHVzaCguLi50aGlzLmluaXRUZXh0dXJlcyhnbCwgcHJvZ3JhbSkpO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgIH1cbiAgICBpbml0VGV4dHVyZXMoZ2wsIHByb2dyYW0pIHtcbiAgICAgICAgY29uc3QgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcbiAgICAgICAgY29uc3QgdGV4dHVyZTIgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgICAgIGlmICh0ZXh0dXJlID09IG51bGwgfHwgdGV4dHVyZTIgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb3VsZG4ndCBjcmVhdGUgd2ViZ2wgdGV4dHVyZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVuaWZvcm1zKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5sb2FkVGV4dHVyZShnbCwgdGV4dHVyZSwgaW1hZ2UsIGdsLlRFWFRVUkUwLCAwKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gJy4vaW1hZ2VzL21hcC5qcGcnO1xuICAgICAgICBjb25zdCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1hZ2UyLm9ubG9hZCA9ICgpID0+IHRoaXMubG9hZFRleHR1cmUoZ2wsIHRleHR1cmUyLCBpbWFnZTIsIGdsLlRFWFRVUkUxLCAxKTtcbiAgICAgICAgaW1hZ2UyLnNyYyA9ICcuL2ltYWdlcy9tYXAyLmpwZyc7XG4gICAgICAgIHJldHVybiBbdGV4dHVyZSwgdGV4dHVyZTJdO1xuICAgIH1cbiAgICBzd2FwVGV4dHVyZXMoZ2wsIHRleE51bWJlcikge1xuICAgICAgICB0aGlzLnRleEluZGV4ID0gdGV4TnVtYmVyO1xuICAgICAgICBnbC51c2VQcm9ncmFtKHRoaXMucHJvZ3JhbSk7XG4gICAgICAgIC8vIGdsLnVuaWZvcm0xaSh0aGlzLnVuaWZvcm1zLnVfU2FtcGxlciwgdGV4TnVtYmVyKTtcbiAgICB9XG4gICAgbG9hZFRleHR1cmUoZ2wsIHRleHR1cmUsIGltYWdlLCB0ZXhOdW1iZXJFbnVtLCB0ZXhOdW1iZXIpIHtcbiAgICAgICAgZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xuICAgICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCAxKTtcbiAgICAgICAgZ2wuYWN0aXZlVGV4dHVyZSh0ZXhOdW1iZXJFbnVtKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XG4gICAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xuICAgICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCLCBnbC5SR0IsIGdsLlVOU0lHTkVEX0JZVEUsIGltYWdlKTtcbiAgICAgICAgZ2wudW5pZm9ybTFpKHRoaXMudW5pZm9ybXMudV9TYW1wbGVyLCB0ZXhOdW1iZXIpO1xuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCB0aGlzLm4pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvYWRlZFwiKTtcbiAgICB9XG4gICAgZHJhdyhnbCwgdHJhbnNmb3JtKSB7XG4gICAgICAgIGdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdih0aGlzLnVuaWZvcm1zLnVfVHJhbnNmb3JtLCBmYWxzZSwgdHJhbnNmb3JtKTtcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRoaXMuYnVmZmVyKTtcbiAgICAgICAgaWYgKHRoaXMuZGlydHkpXG4gICAgICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5jb29yZHMsIGdsLlNUQVRJQ19EUkFXKTtcbiAgICAgICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGhpcy50ZXh0dXJlc1t0aGlzLnRleEluZGV4XSk7XG4gICAgICAgIGNvbnN0IEZTSVpFID0gdGhpcy5jb29yZHMuQllURVNfUEVSX0VMRU1FTlQ7XG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hdHRyaWJ1dGVzLmFfUG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgRlNJWkUgKiA0LCAwKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hdHRyaWJ1dGVzLmFfUG9zaXRpb24pO1xuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYXR0cmlidXRlcy5hX1RleENvb3JkLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZTSVpFICogNCwgRlNJWkUgKiAyKTtcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hdHRyaWJ1dGVzLmFfVGV4Q29vcmQpO1xuICAgICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCB0aGlzLm4pO1xuICAgIH1cbiAgICBkaWxhdGUoY2FudmFzLCB4LCB5LCBhbW91bnQpIHtcbiAgICAgICAgbGV0IGluQ2FudmFzID0gZ2xQb3NGcm9tQ2xpZW50KGNhbnZhcywgeCwgeSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0ZXggPSB7IHg6IHRoaXMuY29vcmRzW2kgKiA0XSwgeTogdGhpcy5jb29yZHNbaSAqIDQgKyAxXSB9O1xuICAgICAgICAgICAgdGV4ID0gc3VidHJhY3QodGV4LCBpbkNhbnZhcyk7XG4gICAgICAgICAgICB0ZXgueCAqPSBhbW91bnQ7XG4gICAgICAgICAgICB0ZXgueSAqPSBhbW91bnQ7XG4gICAgICAgICAgICB0ZXggPSBhZGQodGV4LCBpbkNhbnZhcyk7XG4gICAgICAgICAgICB0aGlzLmNvb3Jkc1tpICogNF0gPSB0ZXgueDtcbiAgICAgICAgICAgIHRoaXMuY29vcmRzW2kgKiA0ICsgMV0gPSB0ZXgueTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBUZXh0dXJlO1xuIiwiZnVuY3Rpb24gZ2xQb3NGcm9tQ2xpZW50KGNhbnZhcywgeCwgeSkge1xuICAgIGNvbnN0IHJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgeCA9ICgoeCAtIHJlY3QubGVmdCkgLSBjYW52YXMud2lkdGggLyAyKSAvIChjYW52YXMud2lkdGggLyAyKTtcbiAgICB5ID0gKGNhbnZhcy5oZWlnaHQgLyAyIC0gKHkgLSByZWN0LnRvcCkpIC8gKGNhbnZhcy5oZWlnaHQgLyAyKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5LFxuICAgIH07XG59XG5mdW5jdGlvbiB1bnBhY2soYXJyYXkpIHtcbiAgICBjb25zdCBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KGFycmF5Lmxlbmd0aCAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgb3V0W2kgKiAzXSA9IGFycmF5W2ldWzBdO1xuICAgICAgICBvdXRbaSAqIDMgKyAxXSA9IGFycmF5W2ldWzFdO1xuICAgICAgICBvdXRbaSAqIDMgKyAyXSA9IGFycmF5W2ldWzJdO1xuICAgIH1cbiAgICByZXR1cm4gb3V0O1xufVxuZXhwb3J0IHsgZ2xQb3NGcm9tQ2xpZW50LCB1bnBhY2sgfTtcbiIsImV4cG9ydCBkZWZhdWx0IFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuXFxudW5pZm9ybSB2ZWM0IHVfRnJhZ0NvbG9yO1xcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdV9GcmFnQ29sb3I7XFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgXCIjdmVyc2lvbiAxMDBcXG5cXG5wcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG51bmlmb3JtIHNhbXBsZXIyRCB1X1NhbXBsZXI7XFxudmFyeWluZyB2ZWMyIHZfVGV4Q29vcmQ7XFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodV9TYW1wbGVyLCB2X1RleENvb3JkKTtcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcImF0dHJpYnV0ZSB2ZWM0IGFfUG9zaXRpb247XFxuYXR0cmlidXRlIGZsb2F0IGFfUG9pbnRTaXplO1xcbnVuaWZvcm0gbWF0NCB1X1RyYW5zZm9ybTtcXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX1Bvc2l0aW9uID0gdV9UcmFuc2Zvcm0gKiBhX1Bvc2l0aW9uO1xcbiAgICBnbF9Qb2ludFNpemUgPSBhX1BvaW50U2l6ZTtcXG59XCIiLCJleHBvcnQgZGVmYXVsdCBcIiN2ZXJzaW9uIDEwMFxcblxcbmF0dHJpYnV0ZSB2ZWM0IGFfUG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYV9UZXhDb29yZDtcXG51bmlmb3JtIG1hdDQgdV9UcmFuc2Zvcm07XFxudmFyeWluZyB2ZWMyIHZfVGV4Q29vcmQ7XFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9Qb3NpdGlvbiA9IHVfVHJhbnNmb3JtICogYV9Qb3NpdGlvbjtcXG4gICAgdl9UZXhDb29yZCA9IGFfVGV4Q29vcmQ7XFxufVwiIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZkhlbGxvUG9pbnQgZnJvbSAnLi9zaGFkZXJzL2ZIZWxsb1BvaW50Lmdsc2wnO1xuaW1wb3J0IHZIZWxsb1BvaW50IGZyb20gJy4vc2hhZGVycy92SGVsbG9Qb2ludC5nbHNsJztcbmltcG9ydCB2VGV4dHVyZSBmcm9tICcuL3NoYWRlcnMvdlRleHR1cmVkLmdsc2wnO1xuaW1wb3J0IGZUZXh0dXJlIGZyb20gJy4vc2hhZGVycy9mVGV4dHVyZWQuZ2xzbCc7XG5pbXBvcnQgRHJhd2luZyBmcm9tIFwiLi9kcmF3aW5nXCI7XG5pbXBvcnQgc2V0dXBIYW5kbGVycyBmcm9tIFwiLi9oYW5kbGVyc1wiO1xuaW1wb3J0IFRleHR1cmUgZnJvbSBcIi4vdGV4dHVyZVwiO1xuaW1wb3J0IHsgTWF0cml4NCB9IGZyb20gXCJtYXRoLmdsXCI7XG5mdW5jdGlvbiBtYWluKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dChcIndlYmdsXCIpO1xuICAgIGlmICghZ2wpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJubyB3ZWJnbCBjb250ZXh0IGF2YWlsYWJsZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDEuMCk7XG4gICAgZ2wuY2xlYXIoZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XG4gICAgY29uc3QgdGV4dHVyZSA9IGluaXRpYWxpemVUZXh0dXJlKGNhbnZhcywgZ2wpO1xuICAgIGNvbnN0IGRyYXdpbmcgPSBpbml0aWFsaXplRHJhd2luZyhjYW52YXMsIGdsKTtcbiAgICBpZiAodGV4dHVyZSA9PSBudWxsIHx8IGRyYXdpbmcgPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxlZCB0byBpbml0aWFsaXplIG9iamVjdHNcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0dXBIYW5kbGVycyhjYW52YXMsIGdsLCBkcmF3aW5nLCB0ZXh0dXJlKTtcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xuICAgICAgICBkcmF3aW5nLnVwZGF0ZVRyYW5zZm9ybShnbCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTtcbiAgICAgICAgdGFyZ2V0ID0gbmV3IE1hdHJpeDQoKS5jb3B5KGRyYXdpbmcudHJhbnNmb3JtKS50cmFuc3Bvc2UoKS50b0FycmF5KHRhcmdldCk7XG4gICAgICAgIHRleHR1cmUgPT09IG51bGwgfHwgdGV4dHVyZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGV4dHVyZS5kcmF3KGdsLCB0YXJnZXQpO1xuICAgICAgICBkcmF3aW5nID09PSBudWxsIHx8IGRyYXdpbmcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRyYXdpbmcucmVuZGVyQnVmZmVyKGdsKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG4gICAgfTtcbiAgICByZW5kZXIoKTtcbn1cbmZ1bmN0aW9uIGluaXRpYWxpemVUZXh0dXJlKGNhbnZhcywgZ2wpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gaW5pdFNoYWRlcnMoZ2wsIHZUZXh0dXJlLCBmVGV4dHVyZSk7XG4gICAgaWYgKHByb2dyYW0gPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxlZCB0byBpbml0aWFsaXplIHNoYWRlcnNcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFRleHR1cmUoZ2wsIHByb2dyYW0pO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZURyYXdpbmcoY2FudmFzLCBnbCkge1xuICAgIGNvbnN0IHByb2dyYW0gPSBpbml0U2hhZGVycyhnbCwgdkhlbGxvUG9pbnQsIGZIZWxsb1BvaW50KTtcbiAgICBpZiAocHJvZ3JhbSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbGVkIHRvIGluaXRpYWxpemUgc2hhZGVyc1wiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGRyYXdpbmcgPSBuZXcgRHJhd2luZyhwcm9ncmFtKTtcbiAgICBjb25zdCBhX1Bvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FfUG9zaXRpb24nKTtcbiAgICBpZiAoYV9Qb3NpdGlvbiA8IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gZ2V0IHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIGFfUG9zaXRpb25cIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBhX1BvaW50U2l6ZSA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhX1BvaW50U2l6ZScpO1xuICAgIGlmIChhX1BvaW50U2l6ZSA8IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gZ2V0IHRoZSBzdG9yYWdlIGxvY2F0aW9uIG9mIGFfUG9pbnRTaXplXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgdV9GcmFnQ29sb3IgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfRnJhZ0NvbG9yJyk7XG4gICAgaWYgKHVfRnJhZ0NvbG9yID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWlsZWQgdG8gZ2V0IHVuaWZvcm0gdV9mcmFnQ29sb3JcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBnbC51bmlmb3JtNGYodV9GcmFnQ29sb3IsIDEsIDAuMSwgMC40LCAxKTtcbiAgICBkcmF3aW5nLmF0dHJpYnV0ZXMuYV9Qb3NpdGlvbiA9IGFfUG9zaXRpb247XG4gICAgZHJhd2luZy5hdHRyaWJ1dGVzLnVfRnJhZ0NvbG9yID0gdV9GcmFnQ29sb3I7XG4gICAgZHJhd2luZy5hdHRyaWJ1dGVzLmFfUG9pbnRTaXplID0gYV9Qb2ludFNpemU7XG4gICAgZ2wudmVydGV4QXR0cmliMWYoYV9Qb2ludFNpemUsIDIwLjApO1xuICAgIGRyYXdpbmcuc2V0VHJhbnNmb3JtVW5pZm9ybShnbCwgcHJvZ3JhbSk7XG4gICAgY29uc3QgbiA9IGRyYXdpbmcuaW5pdFZlcnRleEJ1ZmZlcnMoZ2wsIHByb2dyYW0pO1xuICAgIGdsLmRyYXdBcnJheXMoZ2wuUE9JTlRTLCAwLCBuKTtcbiAgICByZXR1cm4gZHJhd2luZztcbn1cbmZ1bmN0aW9uIGluaXRTaGFkZXJzKGdsLCB2U2hhZGVyLCBmU2hhZGVyKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oZ2wsIHZTaGFkZXIsIGZTaGFkZXIpO1xuICAgIGlmICghcHJvZ3JhbSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBjcmVhdGUgcHJvZ3JhbVwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgcmV0dXJuIHByb2dyYW07XG59XG5mdW5jdGlvbiBjcmVhdGVQcm9ncmFtKGdsLCB2U2hhZGVyLCBmU2hhZGVyKSB7XG4gICAgY29uc3QgdmVydGV4U2hhZGVyID0gbG9hZFNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdlNoYWRlcik7XG4gICAgY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBsb2FkU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZTaGFkZXIpO1xuICAgIGlmICghdmVydGV4U2hhZGVyIHx8ICFmcmFnbWVudFNoYWRlcikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gICAgY29uc3QgbGlua2VkID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XG4gICAgaWYgKCFsaW5rZWQpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gbGluayBwcm9ncmFtLCByZWFzb246IFwiICsgZXJyb3IpO1xuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xuICAgICAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICBnbC5kZWxldGVTaGFkZXIodmVydGV4U2hhZGVyKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBwcm9ncmFtO1xufVxuZnVuY3Rpb24gbG9hZFNoYWRlcihnbCwgdHlwZSwgc291cmNlKSB7XG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgIGlmIChzaGFkZXIgPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZhaWxlZCB0byBjcmVhdGUgc2hhZGVyXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG4gICAgY29uc3QgY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG4gICAgaWYgKCFjb21waWxlZCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQgdG8gY29tcGlsZSBzaGFkZXIsIHJlYXNvbjogXCIgKyBlcnJvcik7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHNoYWRlcjtcbn1cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==