export const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4'>
      <span className='navbar-brand'>
        <i className='fa-regular fa-calendar me-2'></i>
        Alexander
      </span>
      <button className='btn btn-outline-danger'>
        <i className='fa-solid fa-right-from-bracket me-2'></i>
        <span>Salir</span>
      </button>
    </div>
  );
};
