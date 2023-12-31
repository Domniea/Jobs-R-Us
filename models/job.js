const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jobSchema = new Schema({
    job: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    isPending: {
        type: Boolean,
        default: false
    },
    workedOnBy: {
      type:Schema.Types.ObjectId,
      ref: 'User'  
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    completedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Job', jobSchema)