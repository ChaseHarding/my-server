// let http = require('http');
// let server = http.createServer((req, res) => {
//     res.write('<h1 style="color:blue">Hello FSD!</h1>')
//     res.end();
// })

// server.listen(3000, () => {
//     console.log('I am awake!')
// })

let http = require('http');
let server = http.createServer((req, res) => {
    res.writeHeader(418)
    res.write('<h1>Meow!</h1><img src="https://http.cat/images/418.jpg" alt="418">')
    res.end()
})

server.listen(3000, () => {
    console.log('I am awake!')
})