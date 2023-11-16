import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const params = useParams();
  console.log("params ", params);
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="">
        <p>
          {" "}
          Course Id : <strong className="text-primary">
            {" "}
            {params.id}{" "}
          </strong>{" "}
        </p>
        <p> Course Details Page Coming Soon ...</p>
      </div>
    </div>
  );
};

export default CourseDetails;
