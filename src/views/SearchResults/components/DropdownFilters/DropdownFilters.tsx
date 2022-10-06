import { FiArrowLeft } from 'react-icons/fi';
import { FilterOption } from '../../SearchResults';
import DropdownFilterOptions from '../DropdownFilterOptions/DropdownFilterOptions';
import '../../SearchResults.scss';

interface Prop {
  filters: Array<FilterOption>;
  filterIsOpen: boolean;
  handleToggleOpenFilters: () => void;
}

const DropdownFilters = ({
  filters,
  filterIsOpen,
  handleToggleOpenFilters,
}: Prop) => {
  return (
    <div className={`list_sort_mobile ${filterIsOpen ? 'open' : 'closed'}`}>
      <header>
        <button className='icon' onClick={handleToggleOpenFilters}>
          <FiArrowLeft />
        </button>
        <span className='label'>Filtrar por</span>
      </header>
      <footer>
        {filters.map(filter => {
          return (
            <DropdownFilterOptions
              key={filter.id}
              filter={filter}
              handleToggleOpenFilters={handleToggleOpenFilters}
            />
          );
        })}
      </footer>
    </div>
  );
};

export default DropdownFilters;
