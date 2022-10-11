import './Filter.scss';
import { useSearchParams } from 'react-router-dom';
import formatNumberWithDot from '@/utils/helpers/formatNumberWithDot';
import { FilterOption } from '@/types';

interface Prop {
  filter: FilterOption;
}

const Filter = ({ filter }: Prop) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickFilter = (key: string, value: string) => {
    searchParams.set(key, value);

    setSearchParams(searchParams);
  };

  return (
    <div className='filter_container'>
      <h3>{filter.name}</h3>
      <ul>
        {filter.values.map((value, i) => {
          if (i < 9) {
            return (
              <li key={value.id}>
                <button onClick={() => onClickFilter(filter.id, value.id)}>
                  <span className='label'>{value.name}</span>
                  <span className='quantity'>
                    ({formatNumberWithDot(value.results)})
                  </span>
                </button>
              </li>
            );
          }
        })}
        {filter.values.length >= 9 && (
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
