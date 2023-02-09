import styles from "./styles/login.module.css";
import teddy from '../assets/teddy.png';
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.topContainer}>
                <h1 className={styles.heading}>ToyBox</h1>
                <img className={styles.teddy} src={teddy} alt={"teddy"}/>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.formContainer}>
                    <h2 className={styles.loginHeading}>Login</h2>
                    <label>Email</label>
                    <input className={styles.input} type="text"/>

                    <label className={styles.label}>Password</label>
                    <input className={styles.input} type="password"/>
                    <Link to={"/item"}><button className={styles.button}>Login</button></Link>
                    <p className={styles.bottomText}>Dont have an account? <a href=".">Sign in</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;