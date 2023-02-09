import React from "react";
import styles from "./styles/navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navitem}>
                <svg className={styles.icon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.3334 29.9875V39.9875H35C37.7614 39.9875 40 37.749 40 34.9875V19.7859C40.0004 18.92 39.6639 18.088 39.0616 17.4659L24.8984 2.15419C22.3993 -0.549721 18.1815 -0.715736 15.4776 1.78333C15.3491 1.90208 15.2254 2.02575 15.1067 2.15419L0.96836 17.4609C0.347891 18.0856 -0.000234257 18.9304 1.18268e-07 19.8109V34.9875C1.18268e-07 37.749 2.23859 39.9875 5 39.9875H11.6666V29.9875C11.6978 25.4429 15.3671 21.7316 19.7973 21.6247C24.3758 21.5143 28.2984 25.2887 28.3334 29.9875Z" fill="white"/>
                </svg>
            </div>
            <div className={styles.navitem}>
                <svg className={styles.icon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.66664 0H11.6666C15.3485 0 18.3333 2.98477 18.3333 6.66664V11.6666C18.3333 15.3485 15.3485 18.3333 11.6666 18.3333H6.66664C2.98477 18.3334 0 15.3486 0 11.6666V6.66664C0 2.98477 2.98477 0 6.66664 0Z" fill="white"/>
                    <path d="M28.3334 0H33.3334C37.0153 0 40 2.98477 40 6.66664V11.6666C40 15.3485 37.0153 18.3333 33.3334 18.3333H28.3334C24.6515 18.3333 21.6667 15.3485 21.6667 11.6666V6.66664C21.6667 2.98477 24.6514 0 28.3334 0Z" fill="white"/>
                    <path d="M6.66664 21.3333H11.6666C15.3485 21.3333 18.3333 24.318 18.3333 27.9999V32.9999C18.3333 36.6818 15.3485 39.6665 11.6666 39.6665H6.66664C2.98477 39.6666 0 36.6818 0 33V28C0 24.318 2.98477 21.3333 6.66664 21.3333Z" fill="white"/>
                    <path d="M28.3334 21.3333H33.3334C37.0153 21.3333 40 24.318 40 27.9999V32.9999C40 36.6818 37.0153 39.6666 33.3334 39.6666H28.3334C24.6515 39.6666 21.6667 36.6818 21.6667 33V28C21.6667 24.318 24.6514 21.3333 28.3334 21.3333Z" fill="white"/>
                </svg>

            </div>
            <div className={styles.navitem}>
                <svg className={styles.icon} width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0333 0C13.4411 0.00487521 9.03854 1.77055 5.7914 4.90962C2.54427 8.04869 0.717812 12.3048 0.712769 16.7441C0.712769 25.5883 15.262 37.7295 16.9144 39.0858L18.0333 40L19.1522 39.0858C20.8046 37.7295 35.3538 25.5883 35.3538 16.7441C35.3488 12.3048 33.5223 8.04869 30.2752 4.90962C27.028 1.77055 22.6254 0.00487521 18.0333 0ZM18.0333 25.1162C16.3204 25.1162 14.6461 24.6251 13.2219 23.7052C11.7977 22.7853 10.6877 21.4777 10.0323 19.948C9.37678 18.4182 9.20527 16.7348 9.53943 15.1108C9.87359 13.4868 10.6984 11.995 11.9096 10.8242C13.1207 9.65332 14.6638 8.85596 16.3438 8.53292C18.0237 8.20988 19.765 8.37568 21.3474 9.00934C22.9299 9.643 24.2824 10.7161 25.234 12.0928C26.1856 13.4696 26.6935 15.0883 26.6935 16.7441C26.6908 18.9637 25.7775 21.0916 24.154 22.6611C22.5305 24.2306 20.3293 25.1135 18.0333 25.1162Z" fill="white"/>
                </svg>
            </div>
            <div className={styles.navitem}>
                <svg className={styles.icon} width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.7383 23.3334H8.26167C6.07135 23.336 3.9715 24.2073 2.42271 25.7561C0.873919 27.3049 0.00264638 29.4047 0 31.595V40H30V31.595C29.9974 29.4047 29.1261 27.3049 27.5773 25.7561C26.0285 24.2073 23.9286 23.336 21.7383 23.3334Z" fill="white"/>
                    <path d="M15 20C20.5228 20 25 15.5228 25 10C25 4.47715 20.5228 0 15 0C9.47715 0 5 4.47715 5 10C5 15.5228 9.47715 20 15 20Z" fill="white"/>
                </svg>

            </div>
        </div>
    )
}

export default Navbar