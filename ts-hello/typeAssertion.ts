
// since message2 is defined as any type
let message2;
message2 = 'abc';

//both methods explicitly say to run the function as a string
let endsWithC = (<string>message2).endsWith('c');
let alternativeWay = (message2 as string).endsWith('c');

console.log(endsWithC + " " + alternativeWay);

