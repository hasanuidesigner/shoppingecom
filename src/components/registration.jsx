import React, { useEffect, useState } from "react";
import { PersonVcardFill,PersonFill, EnvelopeFill, Key, KeyFill, LockFill, HouseFill, HousesFill, TelephoneFill, GenderMale, PersonBoundingBox } from 'react-bootstrap-icons';
import styles from "./registration.module.css"
import './form.css'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import { shopusersApiLink } from "../apiUrl";

function Registerform() {
    const [shopusers, setShopusers] = useState([])

    const getShopusers = async () => {
        const shopuserList = await axios.get(shopusersApiLink);
        setShopusers(shopuserList.data)
    }

    useEffect(() => {
        getShopusers()
    }, [])

    return <>
        <div className={styles.wrapperout}>
            <div className={styles.wrapper}>
                <div className={styles.regFormLft}><img className="img-fluid form-img" src="./images/register.png" /></div>
                <div className={styles.regFormRht}>
                    <div className={styles.formHeading}><h3>Registration</h3></div>
                    <div className={styles.formWrapper}>
                        <form className="row align-items-center">
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text"><PersonVcardFill /></div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" required />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupFirstname">Name</label>
                                <div className="input-group">
                                    <div className="input-group-text"><PersonFill /></div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupFirstname" placeholder="Name" required />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupEmail">E-Mail</label>
                                <div className="input-group">
                                    <div className="input-group-text"><EnvelopeFill /></div>
                                    <input type="email" className="form-control" id="inlineFormInputGroupEmail" placeholder="E-mail" required />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupAddress1">Address 1</label>
                                <div className="input-group">
                                    <div className="input-group-text"><HouseFill /></div>
                                    <textarea className="form-control" id="inlineFormInputGroupAddress1" placeholder="Door No, Street name" required></textarea>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupAddress2">Address 2</label>
                                <div className="input-group">
                                    <div className="input-group-text"><HousesFill /></div>
                                    <textarea className="form-control" id="inlineFormInputGroupAddress2" placeholder="City, Country" required></textarea>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupPhone">Phone</label>
                                <div className="input-group">
                                    <div className="input-group-text"><TelephoneFill /></div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupPhone" placeholder="Phone" required />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupPassword">Password</label>
                                <div className="input-group">
                                    <div className="input-group-text"><Key /></div>
                                    <input type="password" className="form-control" id="inlineFormInputGroupPassword" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupConfirmPassword">Confirm Password</label>
                                <div className="input-group">
                                    <div className="input-group-text"><KeyFill /></div>
                                    <input type="password" className="form-control" id="inlineFormInputGroupConfirmPassword" placeholder="Confirm Password" required />
                                </div>
                            </div>
                            <div className="col-12 mt-3"> 
                                <div className="input-group">
                                    <div className="input-group-text"><GenderMale /></div>                              

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gender" id="inlineFormInputGroupMale" value="male" checked/>
                                    <label class="form-check-label mx-1" for="inlineFormInputGroupMale">
                                       Male
                                    </label>
                                </div>
                                <div class="form-check mx-3">
                                    <input class="form-check-input" type="radio" name="gender" id="inlineFormInputGroupFemaler" value="female"/>
                                    <label class="form-check-label" for="inlineFormInputGroupFemaler">
                                        Female
                                    </label>
                                </div>
                                </div>
                                </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupPrivilege ">Privilege </label>
                                <div className="input-group">
                                    <div className="input-group-text"><PersonBoundingBox /></div>
                                    <select type="email" className="form-control" id="inlineFormInputGroupprivilege" required> 
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-3 mb-1 row d-flex">
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-primary btn-sm me-1">Clear</button>
                                    <button type="submit" className="btn btn-primary btn-sm">Register</button>
                                </div>
                            </div>
                            <div className="mt-2"> <span><NavLink className="form-etc-link" to='/lgoin'><LockFill /> Existing user login</NavLink></span></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Registerform