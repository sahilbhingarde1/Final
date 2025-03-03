import React from 'react';

const AdminPage = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-300">Total Generations</h3>
            <p className="text-3xl font-bold text-blue-400">1,234</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-300">Active Users</h3>
            <p className="text-3xl font-bold text-green-400">567</p>
          </div>
          <div className="bg-gray-700/50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-300">Success Rate</h3>
            <p className="text-3xl font-bold text-purple-400">98.5%</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-700/30 rounded-lg p-4">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-2">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between p-2 hover:bg-gray-700/50 rounded-lg">
                <span>User generated new face</span>
                <span className="text-gray-400">2 mins ago</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
