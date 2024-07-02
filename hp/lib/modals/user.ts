import  { Schema, model,models } from 'mongoose';

const UserSchema = new Schema ({
  emId: {
    type: String,
    required: true,
    trim: true, // Remove leading/trailing whitespace
  },
  username: {
    type: String,
    required: true,
    trim: true,
  }, 
  password: {
    type: String,
    required: true,
    trim: true,
  },
  section: {
    type: String,
    required: true,
    trim: true,
  },
  type:{
    type:String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  
  img: {
    type: String,
    trim: true,
  },

  // ... other properties as needed
}, {
  // Schema options
  timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Mongoose model creation (consider error handling)
const User = models.User  || model('User', UserSchema);

export default User;
