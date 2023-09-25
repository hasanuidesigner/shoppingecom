import React from "react";
import { PersonFill, Key, PencilSquare } from 'react-bootstrap-icons';
import styles from "./login.module.css"
import './form.css'
import { NavLink } from "react-router-dom";

function Loginform() {
    return <>
        <div className={styles.wrapperout}>
            <div className={styles.wrapper}>
                <div className={styles.regFormLft}><img className="img-fluid form-img" src="./images/login.png" /></div>
                <div className={styles.regFormRht}>
                    <div className={styles.formHeading}><h3>Login</h3></div>
                    <div className={styles.formWrapper}>
                        <form className="row align-items-center">                            
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text"><PersonFill/></div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" required />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupPassword">Password</label>
                                <div className="input-group">
                                    <div className="input-group-text"><Key/></div>
                                    <input type="password" className="form-control" id="inlineFormInputGroupPassword" placeholder="Password" required />
                                </div>
                            </div> 
                            <div className="mt-3 mb-1 row d-flex">
                                <div className="col-auto">
                                <button type="submit" className="btn btn-primary btn-sm me-1">Clear</button>
                                <button type="submit" className="btn btn-primary btn-sm">Login</button>
                                </div>
                            </div>
                            <div className="mt-2"> <span> 
                            <NavLink className="form-etc-link" to='/register'><PencilSquare/> New user register here</NavLink>
                            </span></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Loginform