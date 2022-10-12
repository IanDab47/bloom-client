import CourseList from "./CourseList";

export default function PaidCourses({paidCourses}) {
  return (
    <div className="font-bloom-sans bg-bloom-gray px-6 pt-1 pb-6 sm:px-24 lg:px-36">
      <h2 className="ml-3 sm:mr-6 my-8 text-5xl text-stone-50 italic">Purchased Courses</h2>
      {paidCourses.length > 0 ? 
        <CourseList courses={paidCourses} />
        :
        <p>You have not purchased any courses</p>
      }
    </div>
  )
}