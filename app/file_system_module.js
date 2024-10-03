//file system module
const {readFileSync,writeFileSync}=require('fs');

writeFileSync('file.txt',' , hello world hello world',{flag:'a'});

const result = readFileSync('file.txt','utf-8');

console.log(result);

