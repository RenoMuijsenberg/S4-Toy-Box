import React from 'react';
import Styles from "./styles/ToyListViewItem.module.css";

interface ToyInfo {
    imgSrc: string;
    name: String;
    price: Number;
    description: String;
}

const ToyListViewItem = (Props: ToyInfo) => {
    return(
        <div className={Styles.row}>
            <div className={Styles.columnLeft}>
                <img src={Props.imgSrc} />
            </div>
            <div className={Styles.columnMiddle}>
                <h6>Name: <b>{Props.name}</b></h6>
                <h6>Price: <b>{Props.price.toString()}</b></h6>
                <h6>Description: <b>{Props.description}</b></h6>
            </div>
            <div className={Styles.columnRight}>
                <button className={Styles.buttonReserve}>Reserve Now</button>
            </div>
        </div>
    );
};

export default ToyListViewItem;