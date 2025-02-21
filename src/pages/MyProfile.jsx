import React from "react";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    gender: "Male",
    phone: "+1 234 567 890",
    address: "123 Health St, Wellness City, HC 45678",
    medicalHistory: [
      { id: 1, condition: "Hypertension", date: "2022-01-10" },
      { id: 2, condition: "Diabetes Type 2", date: "2021-08-15" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col  md:flex-row  p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto md:w-1/3 max-w-sm flex flex-col items-center ">
        <div className="w-24 h-24 bg-blue-500 text-white flex justify-center items-center text-2xl font-bold rounded-full">
          {user.name.charAt(0)}
        </div>
        <h3 className="text-xl font-semibold mt-2">{user.name}</h3>
        <p className="text-gray-600">{user.email}</p>
        <div className="mt-4 space-y-2 text-center">
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Edit Profile
        </button>
      </div>
      <div className="flex-1 mt-6 md:mt-0 md:ml-6 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-blue-600">Medical History</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          {user.medicalHistory.map((record) => (
            <li key={record.id} className="p-2 border-b">
              {record.condition} (Diagnosed: {record.date})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
