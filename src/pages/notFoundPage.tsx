import { useEffect } from "react";

function NotFound() {
  const redirect = () => {
    sessionStorage.setItem('path', location.pathname);
    location.replace('./');
  };
  useEffect(() => {
    redirect();
  }, []);
  return <h2>Not Found Page</h2>
}

export default NotFound
