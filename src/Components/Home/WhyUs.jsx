import React from 'react'
import styles from './whyus.module.css'
function Whyus() {
  return (
    <div class={styles.text_center}>
  <h2 class="text-4xl font-bold text-white ">Why us</h2>
  <div class={styles.row}>
    <div class="col-lg-4 col-md-6 col-xl-3">
      <div class={styles.why_us_col}>
        <img src="https://ik.imagekit.io/h1rxzpffx/scrapuncle/why-us/rupee_h5cohN94jkyh.png" alt="Best Rates"/>
        <div>
          <h4 className = "text-stone-500 text-lg py-1">Best Rates</h4>
          <p>We provide the best value for your scrap from our network of Recyclers.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-xl-3">
      <div class={styles.why_us_col}>
        <img src="https://ik.imagekit.io/h1rxzpffx/scrapuncle/why-us/thumbs-up_vOIp-YChzZhh.png" alt="Convenience"/>
        <div>
          <h4  className = "text-stone-500 text-lg py-1">Convenience</h4>
          <p>Doorstep pickup according to user's convenient date &amp; time.</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-xl-3">
      <div class={styles.why_us_col}>
        <img src="https://ik.imagekit.io/h1rxzpffx/scrapuncle/why-us/trust_TmQdK2fLBVD.png" alt="why_us_image"/>
        <div>
          <h4  className = "text-stone-500 text-lg py-1">Trust</h4>
          <p>Trained &amp; Verified Pickup Staff with Swapeco Smart Weighing Scale</p>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-xl-3">
      <div class={styles.why_us_col}>
        <img src="https://ik.imagekit.io/h1rxzpffx/scrapuncle/why-us/eco_wwfqNtl3n-r.png" alt="why_us_image"/>
        <div>
          <h4  className = "text-stone-500 text-lg py-1">Eco-friendly</h4>
          <p>We ensure responsible recycling of your scrap items.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Whyus