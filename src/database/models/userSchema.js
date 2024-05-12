// Import mongoose
import mongoose from 'mongoose';

// Define the user schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create and export the User model
export const User = mongoose.models.users || mongoose.model('users', userSchema);
