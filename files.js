// How to import dependencies.
// Require instead of import
// "fs" stands for file system which is a library in Node.js.
// It helps create, delete, edit, and etc to files.
const fs = require("fs")

// When this runs its going to create a new directory in the same place
// as the file and its going to call that directory my files.
const dir = "my-files"
fs.mkdirSync(dir)

// The code in this for loop will run 100 times.
for(let i=1; i<100; i++){
    // this is creating a file at "my-files/20.txt", for example
    // Its putting the files into the "dir"(directory) / the file name which is i.txt which means index.txt.
    fs.writeFileSync(`${dir}/${i}.txt`, `Hello from ${i}`)
}