const express = require('express')
const app = express();
const cntrl = require('./pepeController')
// const cors = require('cors')
app.use(express.json()); 
// app.use(cors())


// ========FULL CRUD==============
app.get('/api/pepe', cntrl.getPepe);
app.post('/api/pepe', cntrl.addPepe);
app.delete('/api/pepe/:id', cntrl.deletePepe);



// =======Server Port ============  
const port = 3500
app.listen(port, ()=> {
  console.log(`Pepe Memein' on ${port}`)
})