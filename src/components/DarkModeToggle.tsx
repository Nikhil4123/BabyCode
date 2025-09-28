import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 dark:opacity-100"
        animate={{ opacity: isDarkMode ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Toggle circle */}
      <motion.div
        className="relative w-6 h-6 bg-white dark:bg-gray-200 rounded-full shadow-lg flex items-center justify-center"
        animate={{ x: isDarkMode ? 24 : 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 500, 
          damping: 30 
        }}
        whileHover={{ scale: 1.1 }}
      >
        {/* Sun/Moon icon */}
        <motion.div
          className="text-yellow-500 dark:text-gray-600"
          animate={{ 
            rotate: isDarkMode ? 180 : 0,
            scale: isDarkMode ? 0.8 : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {isDarkMode ? (
            // Moon icon
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </motion.svg>
          ) : (
            // Sun icon
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </motion.svg>
          )}
        </motion.div>
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 dark:opacity-20 blur-sm"
        animate={{ opacity: isDarkMode ? 0.2 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default DarkModeToggle;
