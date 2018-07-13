const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true , "You must enter a name."],
    minlength: [1, "Name must be between 1 and 99 characters"],
    maxlength: [99, "Name must be between 1 and 99 characters"]
  },
  email: {
    type: String, 
    required: [true , "You must enter an email."],
    minlength: [5, "Email must be between 5 and 99 characters"],
    maxlength: [99, "Email must be between 5 and 99 characters"]
  },
  password: {
    type: String,
    required: [true , "You must enter a password."]
  }
});

// Returns user object without password (for token)
userSchema.set("toObject", {
  transform: function(doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      email: ret.email,
      name: ret.name
    }
    return returnJson;
  }
});

// Checks entered password against hashed password
userSchema.methods.authenticated = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.pre("save", function(next) {
  if (this.isNew) {
    let hash = bcrypt.hashSync(this.password, 12)
    this.password = hash;
  }
  next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;