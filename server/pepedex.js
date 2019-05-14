const express = require('express')
const app = express();
const cntrl = require('./pepeController')
app.use(express.json()); 
const port = 3500

// ========FULL CRUD==============
app.get('/api/pepe', cntrl.getPepe);
app.post('/api/pepe', cntrl.addPepe);
app.delete('/api/pepe/:id', cntrl.deletePepe);
app.put('/api/pepe/:id', cntrl.pepeUpdate);



// =======Server Port ============  

app.listen(port, ()=> {
  console.log(`Pepe Memein' on ${port}`)
})