const aspectRatio = 1.25;
const skew = -8;
const scale = 40;

const skewRadians = skew/180 * Math.PI;

const width = (Math.cos(skewRadians) * 0.5 + Math.tan(skewRadians) * Math.sin(skewRadians) * 0.5) * 2;

const sideY = 0.5 + Math.sin(skewRadians) * 0.5;
const sideX = -Math.cos(skewRadians);

console.log(`fullWidth: ${width * scale * aspectRatio/width}`);
console.log(`center: ${width / 2 * scale * aspectRatio/width}`);
console.log(`scale: ${aspectRatio/width}`)
console.log(`connectionY: ${sideY * scale}`);