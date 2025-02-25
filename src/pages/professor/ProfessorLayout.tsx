import { Outlet } from 'react-router';

const ProfessorLayout = () => {
  const scale = window.screen.width / 1920;
  return (
    <div
      style={{
        zoom: scale,
        backgroundColor: 'black',
        width: '1920px',
        height: `${1080 / scale}px`,
      }}
    >
      <Outlet />
    </div>
  );
};

export default ProfessorLayout;
