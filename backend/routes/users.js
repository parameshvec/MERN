const router = require('express').Router();
const User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const { firstName, lastName, email } = req.body;
  const newUser = new User({ firstName, lastName, email });
  User.find({'email':email})
  .then((docs)=>{
      if(docs.length>0){
        res.json('User already exists');
      }else{
        newUser
        .save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Something went wrong.'));
      }
  })
});

module.exports = router;
