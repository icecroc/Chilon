const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  order: {
    type: Number,
    required: true
  },
  userName: {
    type: String,
  },
  list: [
    {
      name: {
        type: String
      },
      content: {
        type: String
      },
      quantity: {
        type: Number
      },
      cost: {
        type: Number
      }
    }
  ],
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('orders', orderSchema)