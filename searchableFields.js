const Course = require("./model/course");
require("dotenv").config();
const connectDB = require("./db/connectDB");

const formattedFields = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    const courses = await Course.find({});
    let id = 1;
    console.log(courses);
    const fields = courses.map((course) => {
      return {
        objectID: id++,
        courseTitle: course.courseTitle,
        courseSubtitle: course.courseSubtitle,
        courseDescription: course.courseDescription,
      };
    });
    console.log(fields);
  
    return fields;
  } catch (error) {
    console.log(error);
  }
};

// formattedFields()

module.exports = formattedFields;
