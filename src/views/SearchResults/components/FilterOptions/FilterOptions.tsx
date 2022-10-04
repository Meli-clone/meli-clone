import './FilterOptions.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterOption } from '../../SearchResults';
import Filter from '../Filter';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface Prop {
  actualFilters: Array<FilterOption>;
  availableFilters: Array<FilterOption>;
}

interface SelectedFilter {
  key: string;
  value: string;
}

const FilterOptions = ({ actualFilters, availableFilters }: Prop) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleDeleteSelectedFilter = (key: string) => {
    searchParams.delete(key);

    setSearchParams(searchParams);
  };

  return (
    <aside className='filter_options_container'>
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
      <section className='filter_list'>
        {availableFilters.map(e => (
          <Filter key={e.id} filter={e} />
        ))}
      </section>
    </aside>
  );
};

export default FilterOptions;
