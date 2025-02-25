import { useEffect } from 'react';
import { Outlet } from 'react-router';

const ProfessorLayout = () => {
  useEffect(() => {
    document.body.style.zoom = `${window.screen.width / 1920}`;
    document.body.style.backgroundColor = 'black';

    return () => {
      document.body.style.zoom = '1';
      document.body.style.backgroundColor = 'var(--bg)';
    };
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProfessorLayout;
