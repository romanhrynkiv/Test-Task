import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getValue } from '@testing-library/user-event/dist/utils';
import { useSelector } from 'react-redux';


const PriceCalculator = () =>{
    const [amount, setamount] = useState(0)
    const currentCurrency = useSelector(store => store.current)
    const currentMultiplier = useSelector(store => store.multiplier)
    const calculatePrice = (event) =>{
    }

    const amountChangeHandler = (event) =>{
        setamount(event.target.value)
        console.log(amount)
    }

    return(<Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Amount"

            value={amount}
            onChange={amountChangeHandler}
          />
          <TextField
            disabled
            id="outlined-disabled"
            label="Price"
            value={`${currentCurrency} : ${amount* currentMultiplier}`}

          />
          
        </div>
      </Box>)

}

export default PriceCalculator