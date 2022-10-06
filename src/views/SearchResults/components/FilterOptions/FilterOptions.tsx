import './FilterOptions.scss';
import { useSearchParams } from 'react-router-dom';
import { FilterOption } from '../../SearchResults';
import Filter from '../Filter';
import { RiDeleteBin6Line } from 'react-icons/ri';
import FilterOptionsSelected from '../FilterOptionsSelected/FilterOptionsSelected';

interface Prop {
  actualFilters: Array<FilterOption>;
  availableFilters: Array<FilterOption>;
}

const FilterOptions = ({ actualFilters, availableFilters }: Prop) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDeleteSelectedFilter = (key: string) => {
    searchParams.delete(key);

    setSearchParams(searchParams);
  };

  return (
    <aside className='filter_options_container'>
      <FilterOptionsSelected actualFilters={actualFilters} />

      <section className='filter_list'>
        {availableFilters.map(e => (
          <Filter key={e.id} filter={e} />
        ))}
      </section>
    </aside>
  );
};

export default FilterOptions;
