const course={
      courseName:"JS in Hindi",
      price:"999",
      courseInstructor:"Ragini"
}
console.log(course.courseInstructor)

const {courseInstructor:cI}=course;
console.log(cI); 