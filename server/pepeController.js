let pepe = require('./Assests.js')
let pepeArray = pepe.module

module.exports = {
  getPepe: (req, res) => {
  res.status(200).send(pepeArray);
  },
  addPepe: (req, res) => {
    let id = pepeArray[pepeArray.length -1].id + 1
    console.log(req.body)
    const pepeNew = {
      name: req.body.name,
      image: req.body.image,
      id
    }
    pepeArray.push(pepeNew)
    res.status(200).send(pepeArray)
  },
  
  pepeUpdate: (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    console.log(req.body)

    let daPepe = pepeArray.find(e => {
      return e.id === +id
    })
    daPepe.name = name;
    res.status(200).send(pepeArray)
  },

  deletePepe: (req,res) => {
    const {id} = req.params;
   let NewPepe = pepeArray.filter((pepe) => pepe.id !== +id)

    res.status(200).send(NewPepe)
  }
}
  

