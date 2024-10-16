import React from 'react';
import envVars from '../config/validateEnv';

const backendUrl = envVars.REACT_APP_BACKEND_URL;
const swaggerUrl = `${backendUrl}/api-docs/`;

const SwaggerLink: React.FC = () => {
  return (
    <div className="section">
      <h2>API Documentation</h2>
      <a href={swaggerUrl} target="_blank" rel="noopener noreferrer">
        View Swagger API Docs
      </a>
    </div>
  );
};

export default SwaggerLink;
