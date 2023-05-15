import React, { useState } from "react";
import styles from './HeaderButton.module.css'

const HeaderButton = (props) =>{
    const [isActive, changeisActive] = useState(false);

return(

    <div className={styles['btn-container']}>
            <span tabIndex="0" className={styles.headerbutton}>{props.value}</span>
            <div className={styles.line}></div>
    </div>

)

}

export default HeaderButton