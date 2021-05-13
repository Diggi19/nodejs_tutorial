const os = require('os')

// info abt curren user
const user = os.userInfo()

// returns system uptime in sconds
const uptime = os.uptime()
console.log(uptime);

// object 
const info ={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(info);