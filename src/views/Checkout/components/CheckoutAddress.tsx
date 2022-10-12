import './CheckoutAddress.scss';

interface Prop {
  handleContinuar: (value: number) => void;
}

const CheckoutAddress = ({ handleContinuar }: Prop) => {
  return (
    <div>
      <h1>Este es el formulario</h1>
      <button onClick={() => handleContinuar(3)}>Siguiente</button>
    </div>
  );
};

export default CheckoutAddress;
