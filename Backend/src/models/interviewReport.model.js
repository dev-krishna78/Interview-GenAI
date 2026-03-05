const mongoose = require("mongoose");

const interviewReportSchema = new mongoose.Schema({

  jobDescription: {
    type: String,
    required: true
  },

  resume: {
    type: String
  },

  selfDescription: {
    type: String
  },

  title: {
    type: String
  },

  matchScore: {
    type: Number,
    min: 0,
    max: 100
  },

  technicalQuestions: [
    {
      type: String,
      focus:{
        type: String,
      }
    }
  ],

  behavioralQuestions: [
    {
      type: String
    }
  ],

  skillGaps: [
    {
      type: String
    }
  ],

  preparationPlan: [
    {
      type: String
    }
  ],

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  }

}, {
  timestamps: true
});

const interviewReportModel = mongoose.model(
  "InterviewReport",
  interviewReportSchema
);

module.exports = interviewReportModel;