import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import './Filter.scss';

interface Prop {
  title: string;
  data: Array<{
    id: string;
    name: string;
    results: number;
  }>;
}

const Filter = ({ title, data }: Prop) => {
  return (
    <div className='filter_container'>
      <h3>{title}</h3>
      <ul>
        {data.map((e, i) => {
          if (i < 9) {
            return (
              <li key={e.id}>
                <a href='#'>
                  <span className='label'>{e.name}</span>
                  <span className='quantity'>
                    ({formatNumberWithDot(e.results)})
                  </span>
                </a>
              </li>
            );
          }
        })}
        {data.length >= 9 && (
          <li>
            <a href='#' className='view_more'>
              Mostrar más
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Filter;
