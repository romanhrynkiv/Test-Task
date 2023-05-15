import React, { Fragment, useState } from "react";
import CurrencyItem from "./CurrencyItem";
import styles from './CurrencyDropdown.module.css'
import { useSelector } from "react-redux";

const CurrencyDropdown = () =>{

const currencies = [{name: 'USD', multiplier : 20}, {name: 'EUR', multiplier : 25}, {name: 'DBP', multiplier : 30}, {name: 'AUD', multiplier : 35}, {name: 'CAD', multiplier : 40}]
const currentCurrency = useSelector(store => store.current)
const currentMultiplier = useSelector(store => store.multiplier)

    return(
        <div className= {styles.box}>
            <div className={styles['selected-currency']}>
            <CurrencyItem name={currentCurrency} isMain={true}></CurrencyItem>
            </div>
            <div className={styles.dropdown}>
                <div>
                {
                    currencies.map((el) =>{
                        return <CurrencyItem name={el.name} multiplier = {el.multiplier}></CurrencyItem>
                    })
                }
                </div>

        </div>
        </div>
    );
}

export default CurrencyDropdown;