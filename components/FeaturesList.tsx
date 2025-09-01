import React from 'react';
import { motion } from 'framer-motion';

const FeaturesList = ({ features, index }: { features: string[]; index: number }) => {
  const [expanded, setExpanded] = React.useState(false);
  const maxVisible = 3;
  const showReadMore = features.length > maxVisible;
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
      <ul className="space-y-1">
        {(expanded ? features : features.slice(0, maxVisible)).map((feature, featureIndex) => (
          <motion.li
            key={featureIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 + featureIndex * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start text-gray-300 text-xs"
          >
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
            {feature}
          </motion.li>
        ))}
        {showReadMore && !expanded && (
          <li>
            <button
              className="text-blue-400 text-xs font-semibold mt-2 underline transition-colors duration-300 hover:text-blue-600"
              onClick={() => setExpanded(true)}
            >
              Read More
            </button>
          </li>
        )}
        {showReadMore && expanded && (
          <li>
            <button
              className="text-blue-400 text-xs font-semibold mt-2 underline transition-colors duration-300 hover:text-blue-600"
              onClick={() => setExpanded(false)}
            >
              Show Less
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeaturesList;
