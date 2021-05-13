const {readFileSync,writeFileSync}= require('fs')


//read file
const first = readFileSync("./content/first.txt",'utf8')
const second = readFileSync("./content/second.txt",'utf8')

console.log(first," ",second);

//write file(new file)
writeFileSync('./content/result.txt',`this is the result of ${first} and ${second}`)

//update to file(existing file) data is overwritten
writeFileSync('./content/updated.txt',"thomgs")

//appending a existing file
writeFileSync('./content/updated.txt',"toros",{flag:'a'} )




