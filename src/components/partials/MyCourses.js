export default function MyCourse({ currentUser, myCourses }) {
  const myCoursesList = myCourses.map(course => { 
    return (
      <div key={`myCourse_${course._id}_user_${currentUser.id}`} className='course-block'>
        <h3>{course.title}</h3>
      </div>
    )
  })

  return (
    <div className='course-list'>
      <h2>Here's a list of my courses:</h2>
      {myCoursesList}
    </div>
  )
}