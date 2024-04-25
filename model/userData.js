const mongoose = require('mongoose')

const UserDataSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  coverPhoto: {
    type: String,
  },
  location: {
    type: String,
    required: [true, "please provide your location"],
    enum: [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ],
  },
  organization: {
    type: String,
  },
  title: {
    type: String,
  },
  expertiseAreas: {
    type: String,
    enum: [
    "Technology", "Finance", "Healthcare", "Education", "Business", "Engineering",
    "Marketing", "Science", "Art", "Design", "Law", "Hospitality", "Media",
    "Entertainment", "Sports", "Environment", "Social Sciences", "Politics", "Culinary",
    "Fashion", "Automotive", "Agriculture", "Architecture", "Music"
]
  },
  Bio: {
    type: String
  },
  LinkedInURL:{
    type: String,
    match: ['^[a-zA-Z][a-zA-Z0-9.-]{4,28}$', 'provide valid linkedIn url']
    }
});