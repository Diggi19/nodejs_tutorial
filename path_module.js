const { dirname } = require('node:path');
const path = require('path')

//return current file path
console.log(path.sep);

//join method 
const filepath = path.join("/example","sub","test.txt")
console.log(filepath);

//basename:returns the last entity
const base = path.basename(filepath)
console.log(base);

//absolute path
const absolute = path.resolve(__dirname,'example','sub','test.txt')
console.log(absolute);