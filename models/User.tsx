import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName:String,
  email: { type: "String", unique: true, required: true },
  password: { type: "String", required: true },
  country: String,
  DOB: String,
  addressLineOne: String,
  addressLineTwo: String,
  city: String,
  zipCode: Number,
  state: String,
  telephone: {type:"String",required:true, Unique:true},
  employmentStatus: String,
  sourceOfFunds: String,
  annualIncome: String,
  imageProof: String,

},
{ timestamps: true }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema)
export default User