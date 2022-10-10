import CourseList from "./CourseList";

export default function MyCourse({myCourses}) {
  return (
    <div className="mt-6">
      <h2>Here's a list of my courses:</h2>
      {myCourses.length > 0 ?
        <CourseList courses={myCourses} />
        :
        <p>You have not created any courses</p>
      }
    </div>
  )
}