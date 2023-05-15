import React, { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
import AuthButtons from './AuthButtons';
import styles from './Header.module.css'
import HeaderButton from './HeaderButton';
import CurrencyDropdown from './Currency/CurrencyDropdown';
import { useEffect } from 'react';

const Header = () =>{
    const [displaysmall, setdisplaysmall] = useState(false)

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      useEffect(() => {
        const handleResize = () => {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const displaySmallHandler =(event) =>{
        setdisplaysmall(event.target.checked);
    }  

    return(
        <header className={styles.head}>   
            <div className={styles['header-items-container']}>
            <input onChange={displaySmallHandler} type="checkbox" id="toggle"/>     
            <label className={styles["navbar-toggler"]} for="toggle">
                <span className={styles["bar"]}></span>
                <span className={styles["bar"]}></span>
                <span className={styles["bar"]}></span>
            </label>

                <img className={styles.logo} src='/headerimage.png' alt='img not found'></img>
                <div className={styles['header-buttons-container']}>
                    <HeaderButton value ="OSRS Gold"/>
                    <HeaderButton value ="RS3 GOLD"/>
                    <HeaderButton value ="Sell RS Gold"/>
                    <HeaderButton value ="OSRS Items"/>
                    <HeaderButton value ="OSRS Acounts"/>
                    <HeaderButton value ="Reward Chests"/>    
                </div>
                {window.innerWidth > 950 &&
            <CurrencyDropdown></CurrencyDropdown>}
                {!displaysmall && <AuthButtons show = {window.innerWidth < 950 ? "log" : 'both'}></AuthButtons>}
                
            </div>
            {displaysmall && window.innerWidth <=950 &&
            <div className={styles['small-interface']}>
            <HeaderButton value ="OSRS Gold"/>
            <HeaderButton value ="RS3 GOLD"/>
            <HeaderButton value ="Sell RS Gold"/>
            <HeaderButton value ="OSRS Items"/>
            <HeaderButton value ="OSRS Acounts"/>
            <HeaderButton value ="Reward Chests"/> 
            {window.innerWidth <= 950 &&
            <CurrencyDropdown></CurrencyDropdown>}
            
                <AuthButtons show = 'both' small = 'true'></AuthButtons> 
            </div>}
            
            
        </header>
    )

}

export default Header;


console.log('uwu')