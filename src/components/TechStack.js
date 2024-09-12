'use client'

import React from 'react';
import TechStacks from '../data/techStacks';

const TechStack = () => {
  const line1 = TechStacks.filter(item => item.line === 1);
  const line2 = TechStacks.filter(item => item.line === 2);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full flex items-center animate-infinite-left">
        <div className="flex space-x-4">
          {line1.map(item => (
            <div key={item.id} className="px-4 py-2 bg-gray-200 rounded-lg">
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full flex items-center animate-infinite-right">
        <div className="flex space-x-4">
          {line2.map(item => (
            <div key={item.id} className="px-4 py-2 bg-gray-200 rounded-lg">
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
