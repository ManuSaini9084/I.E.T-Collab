import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  const getPathSegments = () => {
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');
    return pathSegments;
  };

  const renderBreadcrumbs = () => {
    const pathSegments = getPathSegments();

    // Don't render breadcrumbs if on the home page
    if (location.pathname === '/') {
      return null;
    }

    return (
      <nav className="p-4">
        <ol className="flex space-x-2">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          </li>
          <span className="mx-2">{'>'}</span>
        
          {pathSegments.map((segment, index) => {
            const routeTo = `/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            return (
              <li key={segment}>
                {isLast ? (
                  <span>{segment}</span>
                ) : (
                  <>
                    <Link to={routeTo} className="text-blue-500 hover:underline">{segment}</Link>
                    <span className="mx-2">{'>'}</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };

  return (
    <div className="breadcrumbs-container">
      {renderBreadcrumbs()}
    </div>
  );
};

export default Breadcrumbs;
