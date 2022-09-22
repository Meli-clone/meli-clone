import "./HomePayment.scss";

import creditCard from "@/assets/images/credit-card.svg";
import debitCard from "@/assets/images/debit-card.svg";
import mercadoCredits from "@/assets/images/mercado-credits.svg";
import paymentAgree from "@/assets/images/payment-agreement.svg";
import viewMore from "@/assets/images/view-more.svg";

const homePayment = () => {
  return(
    <section className="homePayment">
      <div className="homePayment_container">
        <img className="homePayment_icon" src={creditCard} alt="Ícono tarjeta de crédito"/>
        <div className="homePayment_textContainer">
          <h3 className="homePayment_title">Tarjeta de crédito</h3>
          <a className="homePayment_subtitle">Ver promociones bancarias</a>
        </div>
      </div>
      <div className="homePayment_container">
        <img className="homePayment_icon" src={debitCard} alt="Ícono tarjeta de débito"/>
        <div className="homePayment_textContainer">
          <h3 className="homePayment_title">Tarjeta de débito</h3>
          <a className="homePayment_subtitle">Ver más</a>
        </div>
      </div>
      <div className="homePayment_container">
        <img className="homePayment_icon" src={mercadoCredits} alt="Ícono mercado crédito."/>
        <div className="homePayment_textContainer">
          <h3 className="homePayment_title">Cuotas sin tarjeta</h3>
          <a className="homePayment_subtitle">Conocé Mercado Crédito</a>
        </div>
      </div>
      <div className="homePayment_container">
        <img className="homePayment_icon" src={paymentAgree} alt="Ícono efectivo."/>
        <div className="homePayment_textContainer">
          <h3 className="homePayment_title">Efectivo</h3>
          <a className="homePayment_subtitle">Ver más</a>
        </div>
      </div>
      <div className="homePayment_viewmore">
        <button className="homePayment_button"><img src={viewMore} alt="Ícono ver más"/></button>
      </div>
    </section>
  ) 
};

export default homePayment;
