const dynamoose = require('dynamoose');
const Schema = dynamoose.Schema;

const eventSchema = new Schema({
  _id: {
    type: String,
    hashKey: true
  },          
  eventTitle: {
    type: String,
  },
  eventCreatedBy: {
    type: String,
  },
  eventDescription: {
    type: String,
  },
  eventCatagory: {
    type: String,
  },
  eventDate: {
    type: String,
  },
  eventLocation: {
    type: String,
  },
  eventFormat: {
    type: String,
  },
  eventType: {
    type: String,
  },
  eventDuration: {
    type: String,
  },
  eventNO_of_People: {
    type: String,
  },
  eventTicketArray: {
    type: Array,
    schema: [
      {
        type: Object,
        schema: {
          ticketType: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      },
    ],
  },
  eventNetworkOps: {
    type: String,
  },
  eventCoverImg: {
    type: String,
  },
  eventCoverUrl: {
    type: String,
  },
  eventPrivacySettings: {
    type: String,
  },
  eventBusinessLink: {
    type: String,
  },
  eventFamilyName: {
    type: String,
  },
  eventTicketPrice: {
    type: Number,
  },
  eventSpeakersName: {
    type: String,
  },
  isActivated: {
    type: String,
    default:"true"
  },
  eventArray: {
    type: Array,
    schema:[String],
  },
  basicTicket:Number,
  premiumTicket:Number,
  standardTicket:Number,
  startTime:String,
  endTime:String,
  mediaFiles: {
    type: Array,
    schema: [
      {
        type: Object,
        eventMediaName: String,
        eventMediaUrl: String,
    
      },
    ], 
  },



},{timestamps:true});

const Event = dynamoose.model('Events', eventSchema);

module.exports = Event;
// {
//   "_id": "e12345",
//   "eventTitle": "Tech Innovators Conference 2024",
//   "eventCreatedBy": "John Doe",
//   "eventDescription": "An annual conference for tech innovators and entrepreneurs.",
//   "eventCatagory": "Technology",
//   "eventDate": "2024-10-18",
//   "eventLocation": "San Francisco, CA",
//   "eventFormat": "In-Person",
//   "eventType": "Conference",
//   "eventDuration": "3 hours",
//   "eventNO_of_People": "200",
//   "eventTicketArray": [
//     {
//       "ticketType": "General Admission",
//       "price": "100",
//       "quantity": "150"
//     },
//     {
//       "ticketType": "Premium Admission",
//       "price": "200",
//       "quantity": "50"
//     }
//   ],
//   "eventNetworkOps": "Available",
//   "eventCoverImg": "tech-conference-cover.jpg",
//   "eventCoverUrl": "https://example.com/tech-conference-cover.jpg",
//   "eventPrivacySettings": "Public",
//   "eventBusinessLink": "https://business.techconference.com",
//   "eventFamilyName": "Tech Innovators",
//   "eventTicketPrice": 150,
//   "eventSpeakersName": "Jane Smith, Elon Musk, Jeff Bezos",
//   "eventArray": [
//     "Networking",
//     "Workshops",
//     "Keynote Speakers"
//   ],
//   "basicTicket": 100,
//   "premiumTicket": 50,
//   "standardTicket": 25,
//   "startTime": "2024-10-18T09:00:00Z",
//   "endTime": "2024-10-18T12:00:00Z",
//   "mediaFiles": [
//     {
//       "eventMediaName": "Intro Video",
//       "eventMediaUrl": "https://example.com/intro-video.mp4"
//     },
//     {
//       "eventMediaName": "Brochure",
//       "eventMediaUrl": "https://example.com/brochure.pdf"
//     }
//   ]
// }
