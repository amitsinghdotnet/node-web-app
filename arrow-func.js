// Normal Function

// const square = function(x){
//      return x * x;
// }



// Basic of Arrow Functions
// const square = (x) => {
//     return x * x
// }

const square = (x) => x * x
//console.log(square(2));

const party = {
    name : 'Birthday Party',
    guestList : ['John', 'Mike', 'Smith'],
    printGuestList() {
        const that = this
        console.log('Guest list for ' + that.name)

        this.guestList.forEach(function(guest){
            console.log(guest + ' is attending ' + that.name)
        })
    }

}

//party.printGuestList()


const tasks = {

    task : [
        {
            text : 'Online Shipping',
            Done : true
        },
        {
            text : 'Grocery Shopping',
            Done : false
        },
        {
            text : 'Online Course',
            Done : false
        }
    ],

    getTasks() {
        const result = this.task.filter((task) => {
            return task.Done === true
        })

        return result
    }
}


console.log(tasks.getTasks())

