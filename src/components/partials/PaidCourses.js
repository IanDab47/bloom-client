export default function PaidCourses({ currentUser, paidCourses }) {
  const paidCoursesList = paidCourses.map(course => { 
    return (
      <div key={`myCourse_${course._id}_user_${currentUser.id}`} className='course-block'>
        <h3>{course.title}</h3>
      </div>
    )
  })

  return (
    <div className='course-list'>
      <h2>Here's a list of courses I purchased:</h2>
        {paidCoursesList.length > 0 ? paidCoursesList : <p>You have not purchased any courses</p>}
    </div>
  )
}