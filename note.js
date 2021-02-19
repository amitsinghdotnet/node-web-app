const fs = require('fs')


const getNotes = () =>  "Your note is complete !!" 

const addNotes = (title,body) => {
    const notes = loadNotes()
    
    const duplicatNotes = notes.filter ((note) => note.title === title)

    //console.log(duplicatNotes);
    //console.log(title);
    debugger

    if(duplicatNotes.length === 0){
        notes.push({
            title:title,
            body:body
    
        })
        console.log('New note added')
    }
    else{
        console.log('Note already exists')
    }

    //console.log(notes)

    saveNotes(notes)
}

const saveNotes = (note) => {

    const dataJSON = JSON.stringify(note)

    fs.writeFileSync('data.json',dataJON)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('data.json')

        const dataJSON = dataBuffer.toString();
    
        return  JSON.parse(dataJSON)

    } catch(e){
       return []
    }
    
}


module.exports = {
    getNote : getNotes,
    addNote : addNotes
}