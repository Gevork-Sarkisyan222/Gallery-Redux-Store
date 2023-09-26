import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const backFn = () => {
    navigate('/');
  };

  const popularFn = () => {
    navigate('/Popular/Pictures');
  };

  const exspensiveFn = () => {
    navigate('/Expensive/Pictures');
  };

  const cheapFn = () => {
    navigate('/Cheap/Pictures');
  };

  const orderFn = () => {
    navigate('/Order/Picture');
  };

  const artistFn = () => {
    navigate('/Menu/Our/Artists');
  };

  return (
    <div className="Select">
      <FormControl variant="filled" sx={{ m: 1, minWidth: 230 }}>
        <InputLabel sx={{ color: 'white' }} id="demo-simple-select-filled-label">
          Меню-Категории
        </InputLabel>
        <Select
          sx={{ color: 'white' }}
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}>
          <MenuItem onClick={backFn} value="">
            <em>Назад</em>
          </MenuItem>
          <MenuItem onClick={popularFn} value={10}>
            Популярные
          </MenuItem>
          <MenuItem onClick={exspensiveFn} value={20}>
            Дорогие
          </MenuItem>
          <MenuItem onClick={cheapFn} value={30}>
            Бюджетные
          </MenuItem>
          <MenuItem onClick={orderFn} value={50}>
            Заказать картину
          </MenuItem>
          <MenuItem onClick={artistFn} value={40}>
            Наши лучшие художники
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
