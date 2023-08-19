// routes/bookRoutes.js
const express = require('express');
const router = express.Router();
const pf = require('../models/projects');



router.post('/:user', async (req, res) => {
  if(req.params.user=="rohit"){
  try {
    const pro = await pf.create(req.body);
    res.status(201).json(pro);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }}
  else res.status(404).send("jaldi yha se hato niklo")
});


router.get('/', async (req, res) => {
  try {
    const pro = await pf.find();
    res.json(pro);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:user/:pass/:_id',async(req,res)=>{
  if(req.params.user=="rohit" && req.params.pass==process.env.PASSWORD){
console.log(req.params.user)
console.log(req.params.pass)
  console.log(process.env.PASSWORD)
  const ss= await pf.findOneAndDelete(req.params)
  res.send(`del success ${ss}`)}
})
router.put('/:user/:pass/:_id', async (req, res) => {
  if(req.params.user=="rohit" && req.params.pass==process.env.PASSWORD){

  try {
    const newpro = await pf.findOneAndUpdate(req.params, req.body, { new: true });
    res.json(newpro);
    console.log(newpro)
  } catch (error) {
    res.status(404).json({ error: 'pro not found' });
  }}
});


module.exports = router;
