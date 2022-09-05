const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  dateAdded: {
    type: Date,
    required: true,
  },
  dateCompleted: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model('Todo', TodoSchema)
