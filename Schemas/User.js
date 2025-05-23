const dynamoose = require('dynamoose');

const userSchema = new dynamoose.Schema({
    
    Users_PK : {
        type: String,
        hashKey: true,
    },
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
    },
    userName: {
        type: String,
    },
    password: { 
        type: String,
    },
    work_experience: {
        type: String,

    },
    education: {
        type: String,
    },
    location: {
        type: String,
    },
    country: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    description: {
        type: String,
    },
    role: {
        type: String,
        default: "viewer"
    },

    picName:String,
    isBlocked:{type:String,default:"false"},
    picUrl:String,
    signedInBy:String,
    // geoPoints:String,
    latitude:String,
    longitude:String,
    fbId:String,
    ghId:String,
    roleUpdate:String,
    interests:{
        type:Array,
        schema: [String],
    },
    // videoPreferences:{
    //     type:Array,
    //     schema: [String],
    // },
    
},{
    timestamps:true
}
); 

const User = dynamoose.model('Users', userSchema);

module.exports = User;
