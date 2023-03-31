import React, { useState, useEffect } from "react";


export const Loader = () => {

    const Loader = () => {
        const [isLoading, setIsLoading] = useState(true);
      
        useEffect(() => {
          const timer = setTimeout(() => setIsLoading(false), 3000); // simulate loading for 3 seconds
          return () => clearTimeout(timer);
        }, [])}

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="content">
          <h1>Loaded Content</h1>
          <p>This is the content that was loaded.</p>
        </div>
      )}
    </div>
  )
}

