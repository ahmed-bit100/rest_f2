const express = require('express');
require('dotenv').config({path: './config/.env'});
const connectDB = require('./config/connectDB');
const User = require('./models/User');

const app = express();
app.use(express.json());
connectDB();

//// CRUD ////
// create read update delete
// post put get delete

// add users to the database
app.post('/users/add', async (req, res) => {
  const {name, email, phone} = req.body;
  const newUser = new User({name, email, phone});
  try {
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    res.send({error: error.message});
  }
});

// get all the users
app.get('/users/get', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

// delete a user
app.delete('/users/delete/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send({msg: 'user successfully deleted'});
  } catch (error) {}
});

// get a single user
app.get('/users/get/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

// update a user
app.put('/users/update/:id', async (req, res) => {
  try {
    const editedUser = await User.findByIdAndUpdate(
      req.params.id,
      {...req.body},
      {new: true}
    );
    res.send(editedUser);
  } catch (error) {
    res.send(error);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server running on port ${PORT}`)
);
