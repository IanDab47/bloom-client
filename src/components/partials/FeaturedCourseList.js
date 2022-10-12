import CourseCard from "./CourseCard";

function FeaturedCourseList({courses}) {
    const courseCardComponents = courses.map(course => {
        return <CourseCard course={course} key={course._id} />
    });
    return (
        <div className="mt-3 flex gap-8">
            {courseCardComponents}
        </div>
    );
}

export default FeaturedCourseList;
