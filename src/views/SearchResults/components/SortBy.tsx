import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import './SortBy.scss';

interface SortOption {
  id: string;
  name: string;
}

interface Prop {
  actualSort: SortOption | undefined;
  availableSorts: Array<SortOption> | undefined;
}

const SortBy = ({ actualSort, availableSorts }: Prop) => {
  const [modalSortByIsOpen, setModalSortByIsOpen] = useState(false);

  const handleModalShotBy = () => {
    setModalSortByIsOpen(prevState => !prevState);
  };

  return (
    <div className='sort_by_container'>
      <span className='label'>Ordenar por</span>
      <button onClick={handleModalShotBy}>
        <span>{actualSort?.name}</span>
        <span>
          <IoIosArrowDown />
        </span>
      </button>
      {modalSortByIsOpen && (
        <div className='modal_sort_by'>
          <ul>
            <li>{actualSort?.name}</li>
            {availableSorts?.map(e => (
              <li key={e.id}>{e.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortBy;
