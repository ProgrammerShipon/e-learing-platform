import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to React",
      instructor: "John Doe",
      rating: 4.5,
      courseFee: 999,
      banner:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--w0VC-G5U--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/nigommoqt57x17bwt8m3.png",
    },
    {
      id: 2,
      title: "JavaScript Fundamentals",
      instructor: "Jane Smith",
      rating: 4.2,
      courseFee: 1999,
      banner:
        "https://miro.medium.com/v2/resize:fit:3200/0*de0IdiUSoJTwgsys.gif",
    },
    {
      id: 3,
      title: "Web Development Basics",
      instructor: "Bob Johnson",
      rating: 4.0,
      courseFee: 2999,
      banner: "https://www.cdmi.in/courses@2x/web-developments.webp",
    },
    {
      id: 4,
      title: "Python Development",
      instructor: "Alice Williams",
      rating: 4.8,
      courseFee: 4999,
      banner:
        "https://www.netsolutions.com/insights/wp-content/uploads/2020/07/top-python-frameworks-for-web-development.jpg",
    },
  ];

  return (
    <div className="container mx-auto my-10">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-4 text-[#30BEEC]">
          Course Catalog
        </h2>
        <p>
          Total Course :
          <span className="text-[#30BEEC]"> {courses?.length} </span>
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
        {courses.map((course) => (
          <Link
            key={course?.id}
            className="bg-white p-4 shadow-primary hover:shadow-xl rounded-md relative w-5/6 group transition duration-300 h-auto sm:h-48"
            to={`/course-details/${course?.id}`}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
              <figure className="w-full sm:w-1/2 sm:h-full h-[12rem]">
                <img className="h-full w-full" src={course?.banner} alt="" />
              </figure>
              <div>
                <h3 className="text-lg font-semibold mb-2">{course?.title}</h3>
                <p className="text-gray-600 mb-2">
                  Instructor: {course?.instructor}
                </p>
                <p className="text-gray-600 mb-2">Rating: {course?.rating}</p>
                <strong className="text-white rounded-xl absolute bottom-10 sm:top-1/2 sm:-translate-y-1/2 -right-[8%] md:-right-[10%] text-center bg-[#30bdec8f] max-h-max max-w-max text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.5vw]  px-5 py-4 max-w-28 w-full transition duration-300 group-hover:bg-primary">
                  ${course?.courseFee}
                </strong>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
