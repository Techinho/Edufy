import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RouteChangeReload() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top whenever the route changes
  }, [location]);

  return null; // No UI is rendered by this component.
}

export default RouteChangeReload;
