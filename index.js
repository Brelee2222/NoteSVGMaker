const aspectRatio = 1.25;
const skew = -8;
const scale = 40;

const skewRadians = skew/180 * Math.PI;

const width = (Math.cos(skewRadians) * 0.5 + Math.tan(skewRadians) * Math.sin(skewRadians) * 0.5) * 2;

const sideY = 0.5 + Math.sin(skewRadians) * 0.5;
const sideX = -Math.cos(skewRadians);

console.log(width * scale);
console.log(width / 2 * scale);
console.log(aspectRatio/width);
console.log(sideY * scale);
console.log(sideX * scale);