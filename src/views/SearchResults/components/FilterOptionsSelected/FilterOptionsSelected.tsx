import './FilterOptionsSelected.scss';
import { useSearchParams } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FilterOption } from '@/types';

interface Prop {
  actualFilters: Array<FilterOption>;
}

const FilterOptionsSelected = ({ actualFilters }: Prop) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDeleteSelectedFilter = (key: string) => {
    searchParams.delete(key);

    setSearchParams(searchParams);
  };

  return (
    <section className='selected_filter_list'>
      <ul>
        {actualFilters.map(filter => {
          return (
            <li key={filter.id}>
              <button onClick={() => handleDeleteSelectedFilter(filter.id)}>
                <span>{filter.values[0].name}</span>
                <span>
                  <RiDeleteBin6Line />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FilterOptionsSelected;
