// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const pf = require('../models/projects');


// Create a new book
router.post('/', async (req, res) => {
  try {
    const pro = await pf.create(req.body);
    res.status(201).json(pro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/', async (req, res) => {
  try {
    const pro = await pf.find();
    res.json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:_id',async(req,res)=>{
  console.log(req.params._id)
  const ss= await pf.findOneAndDelete(req.params)
  res.send(`del success ${ss}`)
})
router.put('/:_id', async (req, res) => {
  try {
    const newpro = await pf.findOneAndUpdate(req.params, req.body, { new: true });
    res.json(newpro);
    console.log(newpro)
  } catch (error) {
    res.status(404).json({ error: 'pro not found' });
  }
});


module.exports = router;
