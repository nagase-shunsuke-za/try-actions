import a from './module_a';
import b from './module_b';

const numList = a();
const addNumList = b(numList);

console.log(addNumList);

console.log('test');
