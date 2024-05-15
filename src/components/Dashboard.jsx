import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full text-center">
        <h2 className="text-3xl font-bold mb-4">¡Bienvenido al Dashboard!</h2>
        <p className="text-gray-700">
          
        </p>
        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;