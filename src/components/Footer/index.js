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
        <p>
          Horario de atendimento: 08:00 às 20:00 de segunda à sábado Endereço:
          Rua Carlos Gomes, 1321 - 9º Andar Centro - Limeira (SP) - CEP:
          13480-010 Central SAC: (19) 2114 - 4444 E - mail:
          faleconosco@kabum.com.br
        </p>
      </div>
    </footer>
  );
};

export default Footer;
