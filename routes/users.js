// routes/users.js

const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user.js');

const router = express.Router();
router.use(bodyParser.json());


router.post('/', async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// routes/users.js
// routes/users.js

router.get('/:id', async (req, res) => {

    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) throw new Error('User not found');
      res.json(user);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
});

// routes/users.js
// routes/users.js
// update the body

router.put('/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const { name, email, age } = req.body;
      const user = await User.findByPk(userId);
      if (!user) throw new Error('User not found');
      user.name = name;
      user.email = email;
      user.age = age;
      await user.save();
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});
  
// routes/users.js

router.delete('/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) throw new Error('User not found');
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
});
  
  

module.exports = router;
