const textObj = new String('Hello World!');
const text = 'Hello World!';

console.log(textObj);
console.log(text);

console.log(text.charAt(0));
console.log(text.substring(0, 2)); // 인덱스 0부터 1까지만 포함

const space = '  space   ';
console.log(space.trim());

const longText = 'Get to the point';
console.log(longText.split(' '));
console.log(longText.split(',' , 2));
