const fs = require('fs')
const path = require('path')

function readJson(filepath){
    const absolutePath = path.join(__dirname,filepath)
    const file = fs.readFileSync(absolutePath)
    return JSON.parse(file)
}

module.exports = readJson