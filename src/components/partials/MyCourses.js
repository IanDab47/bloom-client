import CourseList from "./CourseList";

export default function MyCourse({myCourses}) {
  return (
    <div className="font-bloom-sans pb-12 px-6 sm:px-24 lg:px-36">
      <h2 className="ml-3 sm:ml-6 lg:ml-20 my-8 text-5xl italic" >My Courses</h2>
      {myCourses.length > 0 ?
        <CourseList courses={myCourses} />
        :
        <p>You have not created any courses</p>
      }
    </div>
  )
}