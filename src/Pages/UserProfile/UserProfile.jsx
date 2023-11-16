import userImg from "../../assets/profile-image.png";

const UserProfile = () => {
  // Profile Demo Data
  const user = {
    id: 1,
    username: "Md. Shipon Bapari",
    email: "msshipon234@gmail.com",
    number: "+8801765037372",
    location: "Aminpur, Pabna, Dhaka, Bangladesh",
    avatar: userImg,
  };

  return (
    <div className="container mx-auto my-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 max-w-2xl shadow-primary p-7 rounded-xl w-full">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#30BEEC]">
            User Profile
          </h2>

          <div className="flex flex-col sm:flex-row items-start space-x-4 space-y-5 mx-auto text-center">
            <figure className="w-full sm:w-1/2 px-10 relative">
              <img
                src={user?.avatar}
                alt="Md. Shipon Bapari"
                className="w-full h-full bg-primary bg-opacity-10 p-5 pb-0 rounded-lg shadow-primary"
              />
            </figure>
            <div className="text-lg text-center mx-auto">
              <p className="text-gray-600 mb-2 text-base sm:text-lg md:text-xl">
                <span className="font-semibold">Username: </span>
                {user?.username}
              </p>
              <p className="text-gray-600 mb-2  text-base sm:text-lg md:text-xl">
                <span className="font-semibold">Email: </span> {user?.email}
              </p>
              <p className="text-gray-600 mb-2  text-base sm:text-lg md:text-xl">
                <span className="font-semibold">Phone Number: </span>{" "}
                {user?.number}
              </p>
              <p className="text-gray-600 mb-2 text-base sm:text-lg md:text-xl">
                <span className="font-semibold">Location: </span>{" "}
                {user?.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
