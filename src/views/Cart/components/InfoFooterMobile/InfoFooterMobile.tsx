import { CgMathPlus } from 'react-icons/cg';
import { GrFormSubtract } from 'react-icons/gr';

const InfoFooterMobile = () => {
  return (
    <div>
      <div>
        <GrFormSubtract />
        <span>1</span>
        <CgMathPlus />
      </div>
      <div>
        <div>
          <span>-20%</span>
          <span>$23.999</span>
        </div>
        <span>$18.999</span>
      </div>
    </div>
  );
};

export default InfoFooterMobile;
