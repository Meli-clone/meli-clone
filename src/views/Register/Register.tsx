import { useState } from 'react';

//COMPONENTS AND FUNCTIONS
import MinimalHeader from '../components/MinimalHeader';
import DataHandlingAuth from './components/DataHandlingAuth';
import RegisterForm from './components/RegisterForm/RegisterForm';

//STYLES AND IMAGES
import './Register.scss';

//ICONS

const Register = () => {
  const [acceptedDHT, setAcceptedDHT] = useState(false); // AcceptedDataHandlingTerms

  return (
    <div className='register'>
      <MinimalHeader />
      {!acceptedDHT ? (
        <DataHandlingAuth
          acceptedDHT={acceptedDHT}
          setAcceptedDHT={setAcceptedDHT}
        />
      ) : (
        <RegisterForm />
      )}
    </div>
  );
};

export default Register;
