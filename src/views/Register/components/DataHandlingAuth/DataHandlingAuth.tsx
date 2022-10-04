import { useState } from 'react';

//STYLES AND IMAGES
import './DataHandlingAuth.scss';
import registerTablet from '@/assets/images/register-tablet.svg';

interface Props {
  acceptedDHT: boolean;
  setAcceptedDHT: (arg0: boolean) => void;
}

const DataHandlingAuth = ({ acceptedDHT, setAcceptedDHT }: Props) => {
  const [disabledBtn, setDisablebtn] = useState(false);
  return (
    <div className='data_handling_auth'>
      <div>
        <img src={registerTablet} />
        <h1>Para crear tu cuenta necesitamos validar tus datos</h1>
        <p>Solo te tomará unos minutos.</p>
      </div>
      <div className='checkbox_container'>
        <div className='checkbox_container__checkbox'>
          <input
            type='checkbox'
            onChange={() => setDisablebtn(!disabledBtn)}
          ></input>
          <label>
            Autorizo el uso de mis datos de acuerdo a{' '}
            <a>Declaración de Privacidad</a>y acepto los{' '}
            <a>Términos y condiciones</a> y la{' '}
            <a>Autorización de Tratamiento de Datos.</a>
          </label>
        </div>
        <button
          disabled={!disabledBtn}
          onClick={() => setAcceptedDHT(!acceptedDHT)}
        >
          Continuar
        </button>
        <div>
          <p>¿Tienes una sociedad, asociación o fundación?</p>
          <a>Crea una cuenta empresa</a>
        </div>
      </div>
    </div>
  );
};

export default DataHandlingAuth;
