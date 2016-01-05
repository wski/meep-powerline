'use strict';
const mongoose = require('mongoose');

const eggSchema = mongoose.Schema({
  name: String,
  version: String,
  egg: Object
});

mongoose.model('Egg', eggSchema);

const nestSchema = mongoose.Schema({
  registered_at: Date,
  name: String,
  OS: String,
  provisioned: Boolean,
  provisioned_at: Date,
  provision_error: String,
  provision_token: String,
  address: String,
  user: String,
  port: Number,
  password: String, // We need to salt and hash this
  eggs: Array,
  busy: Boolean,
  progress: Array,
  authKey: String,
  shims: Array,
  roles: {
    owner: String,
    admins: {type: Array, default: []},
    users: {type: Array, default: []},
  },
});

mongoose.model('Nest', nestSchema);

let bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
let userSchema = mongoose.Schema({

    local: {
        email: String,
        password: String
    },

    isAdmin: {
      default: false,
      type: Boolean
    },

    account: {
      credits: {
        default: 0.00,
        type: Number
      }
    }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

mongoose.model('User', userSchema);
