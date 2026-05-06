const UserCard = ({ user }) => {
  return (
    <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-300">

      <div className="flex flex-col items-center text-center">

        {/* Profile Image */}
        <img
          src={user.picture.large}
          alt="user"
          className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-blue-400"
        />

        {/* Name */}
        <h2 className="text-lg font-semibold">
          {user.name.title}. {user.name.first} {user.name.last}
        </h2>

        {/* Email */}
        <p className="text-gray-400 text-sm">{user.email}</p>

        {/* Location */}
        <p className="text-gray-400 text-sm mt-1">
          📍 {user.location.city}, {user.location.country}
        </p>

        {/* Age */}
        <p className="text-gray-500 text-xs mt-1">
          🎂 Age: {user.dob.age}
        </p>

        {/* Phone */}
        <p className="text-gray-500 text-xs">
          📞 {user.phone}
        </p>

        {/* Nationality */}
        <span className="mt-2 text-xs bg-blue-500 px-2 py-1 rounded-full">
          {user.nat}
        </span>

      </div>
    </div>
  );
};

export default UserCard;