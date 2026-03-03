const mongoose = require('mongoose')

const technicalQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical question is required"]
    },
    intension: {
        type:String,
        required:[true,"Intension is requires"]
    },answer:{
        type:String,
        required:[true,"Answer is required"]
    }
},{
    _id: false
})

const behavioralQuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        required:[true,"Technical question is required"]
    },
    intension: {
        type:String,
        required:[true,"Intension is requires"]
    },answer:{
        type:String,
        required:[true,"Answer is required"]
    }
},{
    _id: false
})

const skillGapSchema = new mongoose.Schema({
    skill:{
        type:String,
        required:[true,"Skill is required" ]
    },
    servity:{
        type:String,
        enum:["low","medium","high"],
        required:[true,"Servity is required"]
    }
},{
    _id: false
})

const preparationPlanSchema = new mongoose.Schema({
    day:{
        type:String,
        required:[true,"Day is required"]
    },
    focus:{
        type:String,
        required:[true,"focus is required"]
    },
    tasks:{
        type:String,
        required:[true,"tasks is required"]
    }
},{
    _id: false
})

 const interviewReportSchema = new mongoose.Schema({
    jobDescription:{
        type: String,
        required :[ true, "Job description is required "]
    },
    resume:{
        type:String
    },
    selfDescription:{
        type:String
    },
    matchScore:{
        type:Number,
        Min:0,
        Max:100
    },
    technicalQuestionSchema:[technicalQuestionSchema],
    behavioralQuestionSchema:[behavioralQuestionSchema],
    skillGapSchema:[skillGapSchema],
    preparationPlanSchema:[preparationPlanSchema]
 },{
    timestamps: true
 })

 const interviewReportModel = mongoose.model('InterviewReport',interviewReportSchema);

 module.exports = interviewReportModel;