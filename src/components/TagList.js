'use client'

import React from 'react';
import TechTag from './TechTag'; // Ensure TechTag component is correctly imported
import TechStacks from '@/data/techStacks'; // Ensure TechStacks data is correctly imported

const TagList = () => {
  const lines = Array.from({ length: 6 }, (_, i) => i + 1); // Create an array of line numbers [1, 2, 3, 4, 5, 6]
  
  const isReverse = (lineNumber) => [2, 4, 6].includes(lineNumber);

  return (
    <div className="tag-list flex flex-wrap">
      {lines.map((line, index) => (
        <div
          key={line}
          className={`loop-slider ${index % 2 === 0 ? 'even-style' : 'odd-style'}`}
          style={{
            '--duration': index % 2 === 0 ? '35480ms' : '34781ms',
            '--direction': index % 2 === 0 ? 'reverse' : 'normal',
          }}
        >
          <div className="inner flex flex-wrap">
            {TechStacks.filter((stack) => stack.line === line).map((stack) => (
              <TechTag key={stack.id} title={stack.title} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TagList;
