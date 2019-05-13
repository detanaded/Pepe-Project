let pepe = require('./Assests.js')
let pepeArray = pepe.module
// let pepe = [
//   {
//     id: 0,
//     name: 'pepe lurk',
//     image:'./Assets/poggers.png'
//   },

//   {
//     id: 1,
//     name: 'pepe ree',
//     image: 'https://cdn.discordapp.com/emojis/450398929025105932.gif?v=1'
//   },

//   {
//     id: 2,
//     name: 'pepe surrender',
//     image: 'https://cdn.discordapp.com/emojis/450398928999940096.gif?v=1'
//   }
// ]

module.exports = {
  getPepe: (req, res) => {
    console.log(pepe)
    res.status(200).send(pepeArray);
  },
  addPepe: (req, res) => {
    let id = pepe[pepe.length -1].id + 1
    id = 0  
    const pepeNew = {
      name: req.body.name,
      image: req.image.name,
      id
    }
    pepe.push(pepeNew)
    res.status(200).send(pepeArray)
  },
  
  pepeUpdate: (req, res) => {
    const {id} = req.params;
    const pepeUpdate = req.body;

    let daPepe = pepe.find(e => {
      return e.id === +id
    })

    daPepe.name = pepeUpdate.name;
    res.status(200).send(pepeArray)
  },

  deletePepe: (req,res) => {
    const {id} = req.params;
    pepe = pepe.filter((pepe) => pepe.id !== +id)
    res.status(200).send(pepeArray)
  }
}
  

