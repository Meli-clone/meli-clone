import './FilterOptions.scss';
import Filter from '../Filter';
import FilterOptionsSelected from '../FilterOptionsSelected';
import { FilterOption } from '@/types';

interface Prop {
  actualFilters: Array<FilterOption>;
  availableFilters: Array<FilterOption>;
}

const FilterOptions = ({ actualFilters, availableFilters }: Prop) => {
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
