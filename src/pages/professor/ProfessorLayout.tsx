import { Outlet } from 'react-router';

const ProfessorLayout = () => {
  const scale = window.screen.width / 1920;
  return (
    <div
      style={{
        zoom: scale,
        backgroundColor: 'black',
        height: `${100 / scale}vh`,
      }}
    >
      <Outlet />
    </div>
  );
};

export default ProfessorLayout;
