import React from "react";
import styles from "./PriceList.module.css";
import ac from "../../assets/air-conditioner.png";
import wac from "../../assets/window-ac.png";
import washingmachine from "../../assets/washing-machine.png";
import geyser from "../../assets/geyser.png";
import fridge from "../../assets/fridge.png";
import cooler from "../../assets/air-cooler.png";
import iron from "../../assets/iron.png";
import lamp from "../../assets/lamp.png";
import printer from "../../assets/printer.png";
import tv from "../../assets/tv.png";
import fan from "../../assets/fan.png";
import motor from "../../assets/electric-motor.png";
import microwave from "../../assets/microwave.png";
import ups from "../../assets/ups.png";
import battery from "../../assets/battery.png";
import inverter from "../../assets/inverter.png";
import laptop from "../../assets/laptop.png";
import tablet from "../../assets/tablet.png";
import lcd from "../../assets/lcd.png";
import phone from "../../assets/phone.png";
import wire from "../../assets/wire.png";

const PriceList = () => {
  return (
    <>
      <div className={styles.heading}>
        <h1>E - Waste Categories</h1>
      </div>
      <div className={styles.category}>
        <div className={styles.title}>
          <h3>Large Appliances</h3>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.cardCenterScrapRate2}>
              <img src={ac} />
            </div>
            <div>
              <span>RS 4200/PIECE</span>
              <p>SPLIT AC 1.5 TON (COPPER COIL)</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardCenterScrapRate2}>
              <img src={wac} />
            </div>
            <div>
              <span>RS 4000/PIECE</span>
              <p>WINDOW AC 1.5 TON (COPPER COIL)</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img src={ac} />
            </div>
            <div>
              <span>RS 3000/PIECE</span>
              <p>AC 1 TON (COPPER COIL)</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img src={cooler} />
            </div>
            <div>
              <span>RS 30/KG</span>
              <p>IRON COOLER</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <img src={cooler} />
            </div>
            <div>
              <span>RS 15/KG</span>
              <p>PLASTIC COOLER</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={geyser} />
          </div>
          <div>
            <span>RS 20/KG</span>
            <p>GEYSER</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={washingmachine} />
          </div>
          <div>
            <span>RS 800/PIECE</span>
            <p>FRONT LOAD FULLY AUTOMATIC WASHING MACHINE</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={washingmachine} />
          </div>
          <div>
            <span>RS 600/PIECE</span>
            <p>TOP LOAD FULLY AUTOMATIC WASHING MACHINE</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={fridge} />
          </div>
          <div>
            <span>RS 1000/PIECE</span>
            <p>SINGLE DOOR FRIDGE </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={fridge} />
          </div>
          <div>
            <span>RS 1200/PIECE</span>
            <p>DOUBLE DOOR FRIDGE </p>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <h3>Small Appliances</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={iron} />
          </div>
          <div>
            <span>RS 30/KG</span>
            <p>STEAM IRON</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={lamp} />
          </div>
          <div>
            <span>RS 15/KG</span>
            <p>LIGHT E-WASTE (CONTENT: PLASTIC {`>`} METAL)</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={printer} />
          </div>
          <div>
            <span>RS 15/KG</span>
            <p>PRINTER/SCANNER/FAX MACHINE</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={tv} />
          </div>
          <div>
            <span>RS 150/PIECE</span>
            <p>CRT TV </p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={fan} />
          </div>
          <div>
            <span>RS 35/KG</span>
            <p>CEILING FAN</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={motor} />
          </div>
          <div>
            <span>RS 35/KG</span>
            <p>MOTORS (COPPER WIRING)</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={microwave} />
          </div>
          <div>
            <span>RS 200/PIECE</span>
            <p>MICROWAVE</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={inverter} />
          </div>
          <div>
            <span>RS 42/KG</span>
            <p>INVERTER/STABILIZER (COPPER COIL)</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={battery} />
          </div>
          <div>
            <span>RS 72/KG</span>
            <p>BATTERY(USED WITH INVERTERS)</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={wire} />
          </div>
          <div>
            <h4>Rate - 100</h4>
            <p>Air Conditioner</p>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <h3>Mobiles & Computers</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={laptop} />
          </div>
          <div>
            <span>RS 300/PIECE</span>
            <p>SCRAP LAPTOP</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={phone} />
          </div>
          <div>
            <span>RS 20/PIECE</span>
            <p>SCRAP PHONE</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={tablet} />
          </div>
          <div>
            <span>RS 40/PIECE</span>
            <p>SCRAP TABLET</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={lcd} />
          </div>
          <div>
            <span>RS 20/KG</span>
            <p>LCD MONITOR</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className= {styles.cardCenterScrapRate2}>
            <img src={lcd} />
          </div>
          <div>
            <span>RS 150/PIECE</span>
            <p>CRT MONITOR</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceList;
