import { Outlet } from 'react-router';

const ProfessorLayout = () => {
  return (
    <div style={{ zoom: window.screen.width / 1920, backgroundColor: 'black' }}>
      <Outlet />
    </div>
  );
};

export default ProfessorLayout;
