'use client';  

import React, { useState } from 'react';


const users = [
  { rank: 1, name: 'mamba', solved: 18, score: 1000, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 2, name: 'coder', solved: 18, score: 950, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 3, name: 'Knight', solved: 17, score: 800, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 4, name: 'blaze', solved: 16, score: 750, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 5, name: 'Techie', solved: 14, score: 550, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 6, name: 'cyberstar', solved: 10, score: 300, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 7, name: 'hacker', solved: 10, score: 300, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 8, name: 'cyphix', solved: 9, score: 250, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 9, name: 'Hunter', solved: 9, score: 250, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 10, name: 'ByteHacker', solved: 8, score: 200, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 11, name: 'Viper', solved: 7, score: 150, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 12, name: 'Xeno', solved: 6, score: 100, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 13, name: 'Blade', solved: 6, score: 90, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 14, name: 'Ghost', solved: 5, score: 80, avatar: 'https://avatar.iran.liara.run/public' },
  { rank: 15, name: 'Raven', solved: 5, score: 70, avatar: 'https://avatar.iran.liara.run/public' },
];

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; 

  // Calculate the current users 
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen p-6 lg:p-8 bg-neutral-900 element-highlight">
      {/*  Header */}
      <div className="relative mb-12 text-center p-8 border border-green-500/20 rounded-lg bg-neutral-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="relative element-highlight">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 element-highlight">
            LEADERBOARD
          </h2>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border border-blue-500/20 rounded-lg bg-neutral-800 hover:border-blue-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-blue-400">Total Players</span>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-3xl font-bold text-blue-400 mt-2">15</p>
        </div>
        <div className="p-6 border border-purple-500/20 rounded-lg bg-neutral-800 hover:border-purple-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-purple-400">Total Challenges</span>
            <span className="text-2xl">🎯</span>
          </div>
          <p className="text-3xl font-bold text-purple-400 mt-2">20</p>
        </div>
        <div className="p-6 border border-green-500/20 rounded-lg bg-neutral-800 hover:border-green-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-green-400">Points</span>
            <span className="text-2xl">💎</span>
          </div>
          <p className="text-3xl font-bold text-green-400 mt-2">2990</p>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="border border-gray-500/20 rounded-lg bg-neutral-800 overflow-hidden">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-500/20">
              <th className="px-6 py-4 text-left text-gray-300">#RANK</th>
              <th className="px-6 py-4 text-left text-gray-300">PLAYERS</th>
              <th className="px-6 py-4 text-left text-gray-300 hidden md:table-cell">SOLVED</th>
              <th className="px-6 py-4 text-left text-gray-300">SCORE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500/10">
            {currentUsers.map((user, index) => {
              let rowClass = '';
              let rankBadgeClass = '';
              let rankTextClass = '';
              if (user.rank === 1) {
                // First Place
                rowClass = 'bg-yellow-500/10';
                rankBadgeClass = 'bg-yellow-500/20 text-yellow-500';
                rankTextClass = 'text-yellow-500';
              } else if (user.rank === 2) {
                // Second Place
                rowClass = 'bg-neutral-500/10';
                rankBadgeClass = 'bg-neutral-500/20 text-neutral-400';
                rankTextClass = 'text-neutral-400';
              } else if (user.rank === 3) {
                // Third Place 
                rowClass = 'bg-orange-500/10';
                rankBadgeClass = 'bg-orange-500/20 text-orange-500';
                rankTextClass = 'text-orange-500';
              }

              return (
                <tr key={user.rank} className={`hover:bg-gray-700 transition-colors cursor-pointer ${rowClass}`}>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${rankBadgeClass} font-bold`}>
                      {user.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                        loading="lazy"
                      />
                      <span className={`ml-3 font-medium text-white ${rankTextClass}`}>{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-neutral-300">{user.solved}</td>
                  <td className="px-6 py-4 text-neutral-300 font-bold">{user.score}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center items-center space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-1 border border-gray-500/20 rounded-md text-gray-300 hover:bg-gray-700 transition-colors"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex items-center space-x-2">
          <span
            onClick={() => handlePageChange(1)}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === 1 ? 'bg-blue-500/20' : 'hover:bg-blue-500/10'} text-gray-300`}
          >
            1
          </span>
          <span
            onClick={() => handlePageChange(2)}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${currentPage === 2 ? 'bg-purple-500/20' : 'hover:bg-purple-500/10'} text-gray-300`}
          >
            2
          </span>
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-1 border border-gray-500/20 rounded-md text-gray-300 hover:bg-gray-700 transition-colors"
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
