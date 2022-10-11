import './DropdownFilterOptions.scss';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FilterOption } from '@/types';

interface Prop {
  filter: FilterOption;
  handleToggleOpenFilters: () => void;
}

const DropdownFilterOptions = ({ filter, handleToggleOpenFilters }: Prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleToggleOpenOptions = () => {
    setIsOpen(prev => !prev);
  };

  const handleClick = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
    handleToggleOpenFilters();
    handleToggleOpenOptions();
  };

  return (
    <div className={`filter_by_container ${isOpen ? 'open' : 'closed'}`}>
      <button
        key={filter.id}
        className='filter_button'
        onClick={handleToggleOpenOptions}
      >
        <span>{filter.name}</span>
        <span className='toggle_filter_options'>
          <MdOutlineKeyboardArrowDown />
        </span>
      </button>
      <ul className='filter_option_list'>
        {filter.values.map(option => {
          return (
            <li key={option.id}>
              <button onClick={() => handleClick(filter.id, option.id)}>
                {option.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropdownFilterOptions;
