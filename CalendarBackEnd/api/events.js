const router = require('express').Router();
const {Event} = require('../db/models');
module.exports = router;

//GET all events
router.get('/', (req, res, next)=>{
    Event.findAll()
    .then(events => res.json(events))
})

//POST new event
router.post('/', (req, res, next)=>{
    Event.create({
        title:req.body.title,
        description:req.body.description,
        start:req.body.start,
        end:req.body.end,
        date:new Date(req.body.date)
    })
    .then(createdEvent => res.json(createdEvent))
})

//GET a specific event by date
router.get('/:date', (req, res, next)=>{
    Event.findAll({
        where:{
            date:new Date(req.params.date)
        }
    })
    .then(events => res.json(events))
})

//Delete a specific event by date
router.delete('/:id', (req, res, next)=>{
    Event.destroy({
        where:{
            id:Number(req.params.id)
        }
    })
    .then(events => res.json(events))
})
