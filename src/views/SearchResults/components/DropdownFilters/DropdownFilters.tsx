import '../../SearchResults.scss';
import { FiArrowLeft } from 'react-icons/fi';
import DropdownFilterOptions from '../DropdownFilterOptions';
import { FilterOption } from '@/types';

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
