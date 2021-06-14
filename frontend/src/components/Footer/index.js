import "./style.css";

const Footer = () => {
  return (
    <>
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
        </div>

        <div id="textPayments">
          <div className="iconsPagamento">
            <p>Formas de pagamento</p>
            <i className="fa fa-cc-paypal"></i> <i className="fa fa-cc-visa"></i>{" "}
            <i className="fa fa-cc-mastercard"></i>
          </div>
        </div>

        <div id="textInfos">
          <div className="iconsSocialMedia">
            <a
              href="./"
              target="_blank"
              title="Visite nosso perfil no Instagram"
            >
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="./"
              target="_blank"
              title="Visite nosso perfil no Facebook"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a
              href="mailto:faleconosco@teste.com?subject=Quero%20entrar%20em%20contato!"
              title="Mande email para nós"
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </footer>
      <div className="subFooter">
        <p>
          © 2021 Desenvolvido com muito esforço por Leonardo, Pedro e Victor.
          All rights reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
