import React from "react";
import styles from './CurrencyItem.module.css';
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";

const CurrencyItem = (props) =>{
    const dispatch = useDispatch( )
    const currentCurrency = useSelector(store => store.current)
    const changeCurrencyHandler = ( ) =>{
        dispatch({type: "change", value: props.name, multiplier: props.multiplier })

    }

    return(
        <div onClick={() => changeCurrencyHandler()} className={styles[`${props.isMain ? 'main-item' : 'currency-item'}`]}>
                <img src ={`/currenciesImages/${props.name}.png`} className={styles['currency-img']} alt={props.name} ></img>
                <span>{props.name}</span>
            {props.isMain && <div className={`${styles['arrow']} ${styles['down']}`}/>}
            </div>
    )
}







export default CurrencyItem;