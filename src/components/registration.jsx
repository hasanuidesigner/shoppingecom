import React from "react";
import { PersonFill, EnvelopeFill,Key, KeyFill,LockFill } from 'react-bootstrap-icons';
import styles from "./registration.module.css"
import './form.css'
import { NavLink } from "react-router-dom";

function Registerform() {
    return <>
        <div className={styles.wrapperout}>
            <div className={styles.wrapper}>
                <div className={styles.regFormLft}><img className="img-fluid form-img" src="./src/assets/images/register.png" /></div>
                <div className={styles.regFormRht}>
                    <div className={styles.formHeading}><h3>Registration</h3></div>
                    <div className={styles.formWrapper}>
                        <form className="row align-items-center">
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupFirstname">Name</label>
                                <div className="input-group">
                                    <div className="input-group-text"><PersonFill/></div>
                                    <input type="text" className="form-control"  id="inlineFormInputGroupFirstname" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupEmail">E-Mail</label>
                                <div className="input-group">
                                    <div className="input-group-text"><EnvelopeFill/></div>
                                    <input type="email" className="form-control" id="inlineFormInputGroupEmail" placeholder="E-mail" required />
                                </div>
                            </div>
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
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupConfirmPassword">Confirm Password</label>
                                <div className="input-group">
                                    <div className="input-group-text"><KeyFill/></div>
                                    <input type="password" className="form-control" id="inlineFormInputGroupConfirmPassword" placeholder="Confirm Password" required />
                                </div>
                            </div>
                            <div className="mt-3 mb-1 row d-flex">
                                <div className="col-auto">
                                <button type="submit" className="btn btn-primary btn-sm me-1">Clear</button>
                                <button type="submit" className="btn btn-primary btn-sm">Register</button>
                                </div>
                            </div>
                            <div className="mt-2"> <span><NavLink className="form-etc-link" to='/lgoin'><LockFill/> Existing user login</NavLink></span></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Registerform