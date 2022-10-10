import CourseList from "./CourseList";

export default function PaidCourses({paidCourses}) {
  return (
    <div className="mt-8">
      <h2>Here's a list of courses I purchased:</h2>
      {paidCourses.length > 0 ? 
        <CourseList courses={paidCourses} />
        :
        <p>You have not purchased any courses</p>
      }
    </div>
  )
}