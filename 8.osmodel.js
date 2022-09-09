//information about the operation system
const os =require("os")
//information about the current user
const user = os.userInfo()
//console.log(user)

//return the system uptime in seconds
//console.log(`this system uptime is ${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMEN:os.totalmen(),
    freeMen: os.freemem(),
}
console.log(currentOs)