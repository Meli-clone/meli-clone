import { useState, useEffect } from 'react';

//COMPONENTS AND FUNCTIONS
import MinimalHeader from '@/components/MinimalHeader';
import DataHandlingAuth from './components/DataHandlingAuth';
import RegisterForm from './components/RegisterForm/RegisterForm';

//STYLES AND IMAGES
import './Register.scss';

//ICONS

const Register = () => {
  const [acceptedDHT, setAcceptedDHT] = useState(false); // AcceptedDataHandlingTerms

  useEffect(() => {
    document.title = 'Registro';
  }, []);

  return (
    <div className='register'>
      <MinimalHeader />
      <div className='register__main_container'>
        {!acceptedDHT ? (
          <DataHandlingAuth
            acceptedDHT={acceptedDHT}
            setAcceptedDHT={setAcceptedDHT}
          />
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
};

export default Register;
