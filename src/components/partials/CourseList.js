import CourseCard from "./CourseCard";

function CourseList({courses, myEmpty, paidEmpty}) {
    const courseCardComponents = courses.map(course => {
        return <CourseCard myEmpty={myEmpty} paidEmpty={paidEmpty} course={course} key={course._id} />
    });
    return (
        <div className="mt-3 flex flex-wrap gap-8">
            {courseCardComponents}
        </div>
    );
}

export default CourseList;
