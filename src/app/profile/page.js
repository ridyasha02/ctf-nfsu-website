'use client';

import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    const cyberpunkCards = document.querySelectorAll('.cyberpunk-card');
    cyberpunkCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('highlighted');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('highlighted');
      });
    });
  }, []);

  return (
    <div id="profile" className="min-h-screen p-6 bg-neutral-900 text-white flex justify-center">
      <div className="w-full max-w-5xl">
        {/* Profile Header */}
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 mb-5 shadow-lg relative">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
            <div className="relative">
              <img
                src="https://avatar.iran.liara.run/public"
                alt="Profile"
                className="w-20 h-20 rounded-lg border-2 border-neutral-700"
              />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-neutral-800 pulse-dot"></div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white">Viper</h2>
              <p className="text-sm text-neutral-400">Joined on 8th January</p>
            </div>
            <button className="px-3 py-2 text-xs bg-neutral-700 text-white rounded-md hover:bg-purple-500 hover:text-white transition-all">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-5">
          <div className="p-4 bg-neutral-800 rounded-lg border border-neutral-700 text-center cyberpunk-card">
            <h3 className="text-sm text-neutral-400 mb-1">Global Rank</h3>
            <p className="text-2xl font-bold text-green-400">#1</p>
          </div>
          <div className="p-4 bg-neutral-800 rounded-lg border border-neutral-700 text-center cyberpunk-card">
            <h3 className="text-sm text-neutral-400 mb-1">Challenges Solved</h3>
            <p className="text-2xl font-bold text-blue-400">42</p>
          </div>
          <div className="p-4 bg-neutral-800 rounded-lg border border-neutral-700 text-center cyberpunk-card">
            <h3 className="text-sm text-neutral-400 mb-1">Total Points</h3>
            <p className="text-2xl font-bold text-green-400">9,845</p>
          </div>
          
        </div>

        {/* Category and Highest Skill Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          {/* Category Distribution */}
          <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 cyberpunk-card">
            <h3 className="text-lg text-neutral-400 mb-2 font-bold">Category Distribution</h3>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Web Exploitation</span>
                <span className="text-blue-400">15</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Cryptography</span>
                <span className="text-green-400">12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Forensics</span>
                <span className="text-blue-400">8</span>
              </div>
            </div>
          </div>

          {/* Highest Skill */}
          <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 cyberpunk-card">
            <h3 className="text-lg text-neutral-400 mb-2 font-bold">Highest Skill Category</h3>
            <div className="p-3 bg-blue-500/10 rounded-md">
              <p className="text-white font-semibold">Cryptography</p>
              <p className="text-sm text-neutral-400">Category with the most solved challenges</p>
            </div>
          </div>
        </div>

        {/* Solved Challenges */}
        <div className="bg-neutral-800 p-4 rounded-lg border border-neutral-700 cyberpunk-card">
          <h3 className="text-lg text-neutral-400 mb-4 font-bold">Solved Challenges</h3>
          <table className="w-full text-sm text-white">
            <thead>
              <tr className="border-b border-neutral-700">
                <th className="py-2 px-3 text-neutral-400 text-left">Challenge</th>
                <th className="py-2 px-3 text-neutral-400 text-left">Category</th>
                <th className="py-2 px-3 text-neutral-400 text-left">Difficulty</th>
                <th className="py-2 px-3 text-neutral-400 text-left">Points</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-neutral-700 hover:bg-green-500/10">
                <td className="py-2 px-3">Hidden Message</td>
                <td className="py-2 px-3">Cryptography</td>
                <td className="py-2 px-3">
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded">Easy</span>
                </td>
                <td className="py-2 px-3">100</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Styles */}
        <style jsx>{`
          .cyberpunk-card {
            position: relative;
            overflow: hidden;
            transition: border-color 0.3s ease;
          }

          .cyberpunk-card:hover {
            border-color: #7dd3fc; /* Light Blue */
          }

          .pulse-dot {
            animation: pulse 2s infinite;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(0.95); opacity: 0.5; }
            50% { transform: scale(1); opacity: 1; }
          }

          .highlighted {
            border-color: #7dd3fc; /* Light Blue on Hover */
          }
        `}</style>
      </div>
    </div>
  );
};

export default Profile;
