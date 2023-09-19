import React from 'react'

import styles from './cards.module.css';
import { cta } from './assets';
function Cardsw1() {
  return (
<div class={styles.text_center}>
  <h2 class="text-4xl">How it works</h2>
  <div class={styles.row}>
    <div class="col-lg-4 col-md-6 px-4 h-400 w-500">
      <div class={styles.how_works_col}>
        <h4 className='py-4 text-white'>Select the buyer</h4>
        <img className = "w-28 h-32" src={cta} alt=""/>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 px-4 h-400 w-500">
      <div class={styles.how_works_col}>
        <h4 className='py-4 text-white'>Schedule a pickup</h4>
        <img src="https://ik.imagekit.io/y8s2vhk66ef/undraw_Online_calendar_re_wk3t_1_SHrgqjm1w6l.png?updatedAt=1628624813421" alt=""/>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 px-4 h-400 w-500">
      <div class={styles.how_works_col}>
        <h4 className='py-4 text-white'>Pickup at your address</h4>
        <img src="https://ik.imagekit.io/y8s2vhk66ef/undraw_Street_food_re_uwex_1_tHCc3auJgJY.png?updatedAt=1628624814853" alt=""/>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 px-4 h-400 w-500">
      <div class={styles.how_works_col}>
        <h4 className='py-4 text-white'>Receive payment</h4>
        <img src="https://ik.imagekit.io/y8s2vhk66ef/undraw_Credit_card_payments_re_qboh_1_Sop8u3hvUiX.png?updatedAt=1628624812461" alt=""/>
      </div>
    </div>
  </div>
</div>


  );
}

export default Cardsw1;