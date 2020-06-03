export class Point {
  //private restricts access ONLY to this class
  // private x: number;
  // private y: number;

  constructor(private _x?: number, private _y?: number) {
  }

  draw () {
    console.log('X: ' + this._x + ', Y: ' + this._y);
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) 
      throw new Error('value cannot be less than 0.');
    
    this._x = value;
  }
}
