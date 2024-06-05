import propTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slices/filterSlice';
import TextField from '@mui/material/TextField';
import { selectFilters } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  const { filter } = useSelector(selectFilters);

  return (
    <div className={css.filterForm}>
      <label className={css.filterLabel}>
        Find contacts by name
      </label>
      <TextField
        className={css.filterInput}
        type='text'
        name='filter'
        placeholder='Enter search'
        value={filter}
        onChange={handleChange}
        id='filled-basic'
        label=''
        variant='filled'
      />
    </div>
  );
};

Filter.propTypes = {
  filter: propTypes.string,
};