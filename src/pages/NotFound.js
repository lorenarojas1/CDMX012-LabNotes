/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import Navbar from './Navbar';
import notFoundIcon from '../img/notFoundIcon.svg';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <section className="container-dashboard">
        <img className="notFound-icon" src={notFoundIcon} alt="notFound-icon" />
      </section>
    </>

  );
}
