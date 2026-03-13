//
//  Beneficiary.js — Database Model
//  Location: Patrick_Hassan/backend/models/Beneficiary.js
//
//  This file defines the SHAPE of a beneficiary record
//  Think of it like designing columns of a table in a database
//  Every time a form is submitted, data is saved using this shape
//

const mongoose = require("mongoose");
// mongoose is the package that connects our Node.js code to MongoDB
// require("mongoose") loads it so we can use it in this file

// beneficiarySchema defines what each record looks like in the database
// Every field has a type and rules — if rules are broken, saving fails
const beneficiarySchema = new mongoose.Schema(
  {
    firstName: {
      type: String,                                    // must be text
      required: [true, "First name is required"],      // cannot be empty
      minlength: [2, "First name must be at least 2 characters"], // minimum 2 letters
      trim: true,                                      // removes accidental spaces before/after
    },

    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [2, "Last name must be at least 2 characters"],
      trim: true,
    },

    dateOfBirth: {
      type: Date,                                      // stored as a date in MongoDB
      required: [true, "Date of birth is required"],   // cannot be empty
    },

    placeOfBirth: {
      type: String,
      required: [true, "Place of birth is required"],
      minlength: [2, "Place of birth must be at least 2 characters"],
      trim: true,
    },

    gender: {
      type: String,
      required: [true, "Gender is required"],
      enum: ["Male", "Female"],   // enum means only these exact values are accepted
      default: "Female",          // if no gender is sent, Female is saved automatically
    },

    nationality: {
      type: String,
      required: [true, "Nationality is required"],
      enum: [
        // enum means the value MUST be one of these — anything else is rejected
        "Ugandan",
        "Kenyan",
        "Tanzanian",
        "Burundian",
        "Rwandese",
        "Somali",
        "South Sudanese",
        "Congolese",   // added to match the HTML dropdown options
      ],
    },

    maritalStatus: {
      type: String,
      required: [true, "Marital status is required"],
      enum: ["Single", "Married", "Divorced", "Widowed", "Separated"],
      // only these 5 values are allowed — matches the HTML dropdown
    },

    settlementCamp: {
      type: String,
      required: [true, "Settlement camp is required"],
      enum: [
        // only these camp names are accepted — matches the HTML dropdown exactly
        "Gulu settlement camp",
        "Yumbe settlement camp",
        "Kyaka II settlement camp",
        "Rwamwanja settlement camp",
        "Nakivale settlement camp",
        "Kyangwali settlement camp",
      ],
    },

    dateOfJoining: {
      type: Date,
      required: [true, "Date of joining is required"],
    },

    dateOfRegistration: {
      type: Date,
      default: Date.now, // automatically saves the current date and time when record is created
    },
  },

  {
    timestamps: true,
    // automatically adds two extra fields to every record:
    // createdAt — the date and time the record was first saved
    // updatedAt — the date and time the record was last changed
  }
);

module.exports = mongoose.model("Beneficiary", beneficiarySchema);
// This line creates the model and makes it available to other files
// "Beneficiary" is the model name
// MongoDB will store records in a collection called "beneficiaries" (lowercase + plural)
// routes/beneficiary.js imports this model to save and read data