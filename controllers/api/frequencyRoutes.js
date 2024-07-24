const router = require('express').Router();
const Frequency = require('../../models/Frequency');


// CREATE SINGLE FREQUENCY

router.post('/', (req, res) => {
    Frequency.create(
        {
            name: req.body.name,
            frequency:req.body.frequency
        })
    
    .then((newFrequency) =>{
        res.json(newFrequency);
    }
    )
    .catch((err)=> {
        res.json(err);
    });
});

// CREATE MULTIPLE FREQUENCY


router.post('/seed', (req, res) => {
     Frequency.bulkCreate([
        {
            name: "Radio one",
            frequency: 91.0
        },

        {
            name: "radio 10",
            frequency: 89.6

        },
        {
            name: "cbc radio",
            frequency : 109

        },

        {
            name : "bbc radio",
            frequency: 103.8

        }
     ])
      .then(() => {
      res.send('Database seeded!');
    })
    .catch((err) => {
      res.json(err);
    });
           
})


module.exports = router;




