import './Filter.scss';

interface Prop {
  title: string;
  data: Array<{
    href: string;
    label: string;
    quantity: number;
  }>;
}

const Filter = ({ title, data }: Prop) => {
  return (
    <div className='filter_container'>
      <h3>{title}</h3>
      <ul>
        {data.map(e => (
          <li key={e.label}>
            <a href={e.href}>
              <span className='label'>{e.label}</span>
              <span className='quantity'>({e.quantity})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
