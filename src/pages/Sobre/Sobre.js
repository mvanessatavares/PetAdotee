import styles from "./Sobre.module.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaRegEnvelope } from 'react-icons/fa';

const Sobre = () => {
  return (
    <div className={styles.about}>
      <h2>
        Conheça a Pet <span>Adote</span>
      </h2>
      <p>
      Bem vindo ao  PetAdote, sua plataforma de adoção de animais abandonados e apoio a ONGs e protetores.
      </p>
      <p>Para divulgar sua ONG no nosso sistema, entre <br />em contato com a gente.</p>

<div style={{ marginTop: '90px' }}/>
<p>Nossas redes: <br /></p>
<div style={{ marginTop: '50px' }}/>
        <a href="">
        <FaFacebook size={45}/> </a>

        <a href="">
        <FaInstagram  size={45}/> </a>

        <a href="">
        <FaWhatsapp size={45}/> </a> 

        <a href="">
        <FaRegEnvelope size={45}/> </a>
    
    </div>
  );
};

export default Sobre;
