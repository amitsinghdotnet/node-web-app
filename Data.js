const fs = require('fs')

const dataBuffer = fs.readFileSync('data.json')

const dataJSON = dataBuffer.toString()

const user = JSON.parse(dataJSON)


user.name = 'Krishna'

user.age = 50

const userJSON = JSON.stringify(user)

fs.writeFileSync('data.json',userJSON)