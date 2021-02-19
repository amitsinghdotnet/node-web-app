//const validator = require("validator")

const chalk = require('chalk')

const yargs = require('yargs')

const notes = require("./note")


// console.log("Hello World");

//const fs = require("fs")
//fs.writeFileSync("notes.txt","I have completed my b.tech.")
//fs.appendFileSync("notes.txt"," I am looking for an job.")

//const sum = add(4,5)

//const msg = getNotes()

//console.log(msg)

//console.log(validator.isEmail('@gmail.com'))

// https://www.npmjs.com
// validator


//console.log(validator.isURL('/www.google.com'))

//chalk library

//-------------------------------------------------
//console.log(process.argv[2])

// Exampl : node app.js amit

// if --- else if 

const msg = chalk.red.inverse.bold('Hello world');

//console.log(msg)


// File System and Command Ling Args

//console.log(process.argv[0])

// mpn i yargs@version-name
// const yargs = require('yargs')
// yargs.parse()

// Create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title : {
            describe : 'Mention a title',
            demandOption : true,
            type:'string'
        },
        body : {
          describe : 'Mention a title',
          demandOption : true,
          type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
          title : {
              describe : 'Mention a title',
              demandOption : true,
              type:'string'
          },
          body : {
            describe : 'Mention a title',
            demandOption : true,
            type:'string'
          }
    },
    handler:function(argv){
        //console.log('Removing a Note!!')
        console.log('Title : ' + argv.title);
        console.log('Body : ' + argv.body)
    }
})


// yargs 

// --help

// Customize yargs version

//yargs.version('1.1.0')

//console.log(yargs.parse())

yargs.parse()

///console.log(yargs.argv)







