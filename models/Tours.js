const mongoose = require('mongoose')

const Schema = mongoose.Schema

const tourSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  travel: {
    type: Object,
    required: true,

    fromCityId: {
      type: String,
      required: true
    },
    toCityId: {
      type: String,
      required: true
    }

  },
  featuredThumbnail: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  operatorId: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true,
    min: 2,
    max: 4
  },
  sizeGroup: {
    type: Number,
    default: 12
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  updatedAt: {
    type: Date,
    default: new Date()
  },
  route: {
    type: Object,
    default: {},
    id_1: {
      type: String
    },
    id_2: {
      type: String
    },
    id_3: {
      type: String
    },
    id_4: {
      type: String
    },
    id_5: {
      type: String
    }
  }
})

module.exports = mongoose.model('tour', tourSchema)
