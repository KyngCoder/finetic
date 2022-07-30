import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
  email: { type: "String", unique: true, required: true },
  password: { type: "String", required: true },


},
{ timestamps: true }
)

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)