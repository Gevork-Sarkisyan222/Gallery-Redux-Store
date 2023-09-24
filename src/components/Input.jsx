import React, { useCallback, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useSelector, useDispatch } from 'react-redux';
import { setFind } from '../components/redux/slices/Value.slice';
import debounce from 'lodash.debounce';

export default function CustomizedInputBase() {
  const findValue = useSelector((state) => state.value.find);
  const dispatch = useDispatch();
  const [findDeboundce, setFindDebounce] = useState('');

  const updateFindValue = useCallback(
    debounce((str) => {
      dispatch(setFind(str));
    }, 200),
    [],
  );

  const onChangeInput = (event) => {
    setFindDebounce(event.target.value);
    updateFindValue(event.target.value);
    console.log(event.target);
  };

  React.useEffect(() => {
    const findJson = JSON.stringify(findValue);
    localStorage.setItem('value', findJson);
  }, [findValue]);

  // const handleInputChange = (e) => {
  //   dispatch(setFind(e.target.value));
  // };

  return (
    <div className="Input">
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 500 }}>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          value={findDeboundce}
          onChange={onChangeInput}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Найти картинку"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
