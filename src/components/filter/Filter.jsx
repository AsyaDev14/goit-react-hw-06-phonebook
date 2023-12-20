import React from "react";
import css from './Filter.module.css'
import { useSelector, useDispatch} from "react-redux";
import { updateFilter } from "../../redux/store";

export const Filter = () => {
  // const { filter, handleFilterChange } = props;
  const filter = useSelector(state => state.filter);
  // console.log('filter', filter);
  const dispatch = useDispatch();
  return (
    <input
      className={css.input}
      value={filter}
      onChange={(event)=>dispatch(updateFilter(event.target.value))}
      type="text"
    />
  );
};