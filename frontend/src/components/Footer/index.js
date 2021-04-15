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
        <div className="iconsPagamento">
          <i class="fa fa-credit-card"></i> <i class="fa fa-credit-card"></i> <i class="fa fa-credit-card"></i> 
        </div>
        <div className="iconsSocialMedia">
          <a href="./" target='_blank' title='Visite nosso perfil no Instagram'><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="./" target='_blank' title='Visite nosso perfil no Facebook'><i class="fa fa-facebook" aria-hidden="true"></i></a>
        </div>
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
