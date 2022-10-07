import { useField } from 'formik';

const CustomInput = ({ label, ...props }) => {
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
