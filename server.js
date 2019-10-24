const express = require('express')
const readXlsxFile = require('read-excel-file/node');

const app = express()
const port = process.env.port || 4000

app.get('/', (req, res) => {
    res.send('Hello World!')

    // File path.
    readXlsxFile('./file.xlsx').then((rows) => {

        for(i in rows){
            console.log('Codigo Barrio: ',rows[i][16])
            console.log('Barrio: ',rows[i][22])
            console.log('Codigo Ciudad: ',rows[i][23])
            console.log('Ciudad: ',rows[i][24])
        }

       
    
        // `rows` is an array of rows
        // each row being an array of cells.
    })

})

app.listen(port, () => {
    console.log(`Server is listening  at http://localhost:${port}`)
})

