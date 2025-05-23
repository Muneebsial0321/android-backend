const dynamoose = require('dynamoose');
const Schema = dynamoose.Schema;

const jobSchema = new Schema({
  _id:{
    type:String,
    hashKey:true
  },
  jobTitle: {
    type: String,
  },
  userId: {
    type: String,
  },
  educationLevel: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  companySize: {
    type: String,
  },
  companyName: {
    type: String,
  },
  logoUrl: {
    type: String,
  },
  logoName: {
    type: String,
  },
  jobCategory: {
    type: String,
  },
  workplaceType: {
    type: String,
  },
  location: {
    type: String,
  },
  skills: {
    type: Array,
    schema: [String],
  },
  jobType: {
    type: String,
  },
  applicationDeadline: {
    type: String,
  },
  experienceLevel: {
    type: String,
  },
  isActivated: {
    type: String,
    default:"true"
  },
  languages: {
    type: Array,
    schema: [String],
  },
  salaryRange: {
    type: String,
  },
  jobShift: {
    type: String,
  },
  travelRequirement: {
    type: String,
  },
  singleLang: {
    type: String,
  }
},{timestamps:true});

const Job = dynamoose.model('Jobs', jobSchema);

module.exports = Job;
