"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// not point.ts
var point_1 = require("./point");
// this is an object, object is an instance of a class 
var point = new point_1.Point(1, 2);
// use get/set when want to allow users to alter class but still have basic validation
point.draw();
