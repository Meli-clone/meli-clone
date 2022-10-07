import './SortBy.scss';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

interface SortOption {
  id: string;
  name: string;
}

interface Prop {
  actualSort: SortOption;
  availableSorts: Array<SortOption>;
}

const SortBy = ({ actualSort, availableSorts }: Prop) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortList, setSortList] = useState<Array<SortOption>>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const btnRef = useRef(null);

  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (e.path[1] !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', closeDropdown);

    return () => document.body.removeEventListener('click', closeDropdown);
  }, []);

  useEffect(() => {
    const sort = [...availableSorts, actualSort];
    setSortList(sort);
  }, []);

  const toggleModalSortBy = () => {
    setIsOpen(prevState => !prevState);
  };

  const onClickSort = (sort: SortOption) => {
    toggleModalSortBy();
    searchParams.set('sort', sort.id);

    setSearchParams(searchParams);
  };

  return (
    <div className='sort_by_container'>
      <span className='label'>Ordenar por</span>
      <button ref={btnRef} onClick={toggleModalSortBy}>
        <span>{actualSort?.name}</span>
        <span>
          <IoIosArrowDown />
        </span>
      </button>
      <div className='modal_sort_by'>
        {isOpen && (
          <ul>
            {sortList.map(sort => {
              if (sort.id === actualSort.id) {
                return (
                  <li aria-selected={true} key={sort.id}>
                    <button className='selected_sort'>{sort.name}</button>
                  </li>
                );
              }

              return (
                <li key={sort.id}>
                  <button onClick={() => onClickSort(sort)}>{sort.name}</button>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SortBy;
