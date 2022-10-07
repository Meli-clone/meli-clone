import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder: string;
  type: string;
}

const CustomInput = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
    </>
  );
};

export default CustomInput;
