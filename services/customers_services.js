const CustomerModel = require("../models/Customer");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// Input validation helpers
function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

function isValidEmail(email) {
  // Check length first to prevent ReDoS attacks
  if (!email || typeof email !== 'string' || email.length > 254) {
    return false;
  }

  // Use a safer regex pattern that avoids catastrophic backtracking
  // This pattern uses atomic groups conceptually by avoiding nested quantifiers
  // Format: local-part@domain.tld
  // Local part: alphanumeric, dots, underscores, hyphens, plus signs
  // Domain: alphanumeric, dots, hyphens
  // TLD: 2+ letters
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  return emailRegex.test(email);
}

function sanitizeEmail(email) {
  return email.toLowerCase().trim();
}

async function getAllCustomers() {
  return await CustomerModel.find();
}

async function getCustomerById(id) {
  if (!isValidObjectId(id)) {
    throw new Error("Invalid customer ID format");
  }
  return await CustomerModel.findById(id);
}

async function addUser(user) {
  if (!user.password) {
    throw new Error("Password is required");
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  return await CustomerModel.create(user);
}

async function deleteCustomerById(id) {
  if (!isValidObjectId(id)) {
    throw new Error("Invalid customer ID format");
  }
  return await CustomerModel.findByIdAndDelete(id);
}

async function updateCustomerById(id, customerData) {
  if (!isValidObjectId(id)) {
    throw new Error("Invalid customer ID format");
  }

  const allowedFields = ['fName', 'lName', 'email', 'adress'];
  const updateData = {};

  for (const key of allowedFields) {
    if (customerData[key] !== undefined) {
      let value = customerData[key];

      // Additional validation for specific fields
      switch (key) {
        case 'fName':
        case 'lName':
          if (typeof value === 'string' && value.trim().length > 0) {
            updateData[key] = value.trim();
          }
          break;
        case 'email':
          if (typeof value === 'string' && isValidEmail(value)) {
            updateData[key] = sanitizeEmail(value);
          }
          break;
        case 'adress':
          if (typeof value === 'string') {
            updateData[key] = value.trim();
          }
          break;
      }
    }
  }

  if (Object.keys(updateData).length === 0) {
    throw new Error("No valid update data provided");
  }

  return await CustomerModel.findByIdAndUpdate(id, { $set: updateData }, { new: true });
}

async function login(user) {
  // Validate input
  if (!user || !user.email || !user.password) {
    throw new Error("Email and password are required");
  }

  // Validate and sanitize email
  if (!isValidEmail(user.email)) {
    throw new Error("Invalid email format");
  }

  const sanitizedEmail = sanitizeEmail(user.email);

  // Validate password length (basic check)
  if (typeof user.password !== 'string' || user.password.length < 6) {
    throw new Error("Invalid password");
  }

  const customer = await CustomerModel.findOne({ email: sanitizedEmail });
  if (customer) {
    const isValidPassword = await bcrypt.compare(user.password, customer.password);
    if (isValidPassword) {
      return true;
    }
  }
  return false;
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  addUser,
  deleteCustomerById,
  updateCustomerById,
  login
};
