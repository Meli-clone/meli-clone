import { FilterOption } from '../SearchResults';
import Filter from './Filter';
import './FilterOptions.scss';
interface Prop {
  filters: Array<FilterOption>;
}

const FilterOptions = ({ filters }: Prop) => {
  return (
    <aside className='filter_options_container'>
      <section className='filter_list'>
        {filters.map(e => (
          <Filter key={e.id} title={e.name} data={e.values} />
        ))}
      </section>
    </aside>
  );
};

export default FilterOptions;
