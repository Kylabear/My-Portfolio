import React from 'react';

const ProjectDescription = ({ description }: { description: string }) => {
  const [expanded, setExpanded] = React.useState(false);
  const maxLength = 220;
  const isLong = description.length > maxLength;
  return (
    <div className="mb-4">
      <p className={`text-gray-300 text-sm leading-relaxed transition-all duration-300 ${expanded ? '' : 'line-clamp-5'}`}
         style={{ maxHeight: expanded ? 'none' : '7.5em', overflow: expanded ? 'visible' : 'hidden' }}>
        {expanded || !isLong ? description : description.slice(0, maxLength) + '...'}
      </p>
      {isLong && !expanded && (
        <button
          className="text-blue-400 text-xs font-semibold mt-2 underline transition-colors duration-300 hover:text-blue-600"
          onClick={() => setExpanded(true)}
        >
          Read More
        </button>
      )}
      {isLong && expanded && (
        <button
          className="text-blue-400 text-xs font-semibold mt-2 underline transition-colors duration-300 hover:text-blue-600"
          onClick={() => setExpanded(false)}
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default ProjectDescription;
