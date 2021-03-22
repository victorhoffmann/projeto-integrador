import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div id="footerLinks">
        <a href="./sobre" rel="noopener noreferrer">
          Sobre
        </a>
        <a href="./contato" rel="noopener noreferrer">
          Contato
        </a>
        <a href="./faq" rel="noopener noreferrer">
          F.A.Q
        </a>
        <p>Formas de pagamento</p>
      </div>

      <div id="textInfos">
        <h5>Atendimento</h5>
        <p>Horario de atendimento:</p>
        <p>08:00 às 20:00</p>
        <p>Segunda à sábado</p>
        <p>E-mail:</p>
        <p>faleconosco@teste.com.br</p>
      </div>
    </footer>
  );
};

export default Footer;
