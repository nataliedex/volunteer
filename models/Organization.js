const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
  userType: { type: String},
  organization: { type: String},
  email: { type: String, unique: true, required: true },
  password: { type:String, required: true },
  about: { type: String, default: "" },
  cloudinaryId: { type: String },
  image: { type: String, default: "" },
});

// Password hash middleware.

OrganizationSchema.pre("save", async function save(next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (err) {
    return next(err);
  }
});

// Helper method for validating user's password.

OrganizationSchema.methods.comparePassword = function comparePassword(
  candidatePassword
) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("Organization", OrganizationSchema);
