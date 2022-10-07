import { Data } from "../data/dataexample";

function footer() {
  return (
    <footer className='flex flex-col items-center md:items-start md:flex-row md:justify-around py-4 border-t-2 border-black mt-4'>
      <h3>{Data.restName}</h3>
      <p>{Data.address} </p>
      <i>{`Telefono: ${Data.phone}`}</i>
    </footer>
  );
}

export default footer;
