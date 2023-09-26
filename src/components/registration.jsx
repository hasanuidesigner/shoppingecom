import React, { useEffect, useRef, useState } from "react";
import { PersonVcardFill, PersonFill, EnvelopeFill, Key, KeyFill, LockFill, HouseFill, HousesFill, TelephoneFill, GenderAmbiguous, PersonBoundingBox } from 'react-bootstrap-icons';
import styles from "./registration.module.css"
import './form.css'
import { NavLink } from "react-router-dom";
import axios from 'axios'
import { shopusersApiLink } from "../apiUrl";

let choseUsername = ''
function Registerform() {
    const [addUser, setAddUser] = useState([])
    const [getusers, setGetusers] = useState([])
    const [isvalidform, setIsvalidform] = useState(false)
    const focusFirstfield = useRef()
    const focusFirstfieldDiv = useRef()

    const getusernames = async () => {
        const getusername = await axios.get(shopusersApiLink);
        const allUsernames = getusername.data.map(usernm => usernm.username)
        setGetusers(allUsernames)

    }

    const handleFldChange = async (e) => {
        if (e.target.name === 'username') {
            focusFirstfield.current.onkeypress = function (e) {
                var spacePress = e.keyCode;
                return (spacePress !== 32);
            };
            choseUsername = focusFirstfield.current.value.replaceAll(' ', '')
            if (choseUsername.length > 4) {
                if (getusers.includes(choseUsername)) {
                    setIsvalidform(false)
                    focusFirstfield.current.classList.add('is-invalid')
                    focusFirstfield.current.classList.remove('is-valid')
                    focusFirstfieldDiv.current.classList.add('errmsg')
                    document.getElementById('validationChooseUsername').style.display = 'block'
                }
                else {
                    setIsvalidform(true)
                    focusFirstfield.current.classList.add('is-valid')
                    focusFirstfield.current.classList.remove('is-invalid')
                    focusFirstfieldDiv.current.classList.remove('errmsg')
                    document.getElementById('validationChooseUsername').style.display = 'none'
                }
            }
            else if (focusFirstfield.current.value.length < 5) {
                focusFirstfield.current.classList.remove('is-valid')
                focusFirstfield.current.classList.remove('is-invalid')
                focusFirstfieldDiv.current.classList.remove('errmsg')
                document.getElementById('validationChooseUsername').style.display = 'none'
            }
        }
        passwordMatch();
        setAddUser({ ...addUser, [e.target.name]: e.target.value })
    }

    const passwordMatch = (e) => {
        var fieldPswd = document.querySelector('[name="password"]');
        fieldPswd.onkeypress = function (e) {
            var spcPswd = e.keyCode;
            return (spcPswd !== 32);
        };
        var fieldCnfmPswd = document.querySelector('[name="confirmpassword"]');
        fieldCnfmPswd.onkeypress = function (e) {
            var spcCnfrmPswd = e.keyCode;
            return (spcCnfrmPswd !== 32);
        };
        if (fieldPswd.value !== fieldCnfmPswd.value) {
            setIsvalidform(false)
            document.getElementById('validationMatchPassword').style.display = 'block'            
        }
        if (fieldPswd.value === fieldCnfmPswd.value) {
            setIsvalidform(true)
            document.getElementById('validationMatchPassword').style.display = 'none'
        }
    }

    const adduser = async (e) => {
        e.preventDefault();
        if (isvalidform) {
            await axios.post(shopusersApiLink, addUser);
            document.getElementById('regForm').reset()
            focusFirstfield.current.classList.remove('is-valid')
            focusFirstfield.current.focus()
        }
    }

    const clearregform = () => {
        document.getElementById('regForm').reset()
        focusFirstfield.current.classList.remove('is-valid')
        focusFirstfield.current.focus()
    }

    useEffect(() => {
        getusernames();
    }, [])


    return <>
        <div className={styles.wrapperout}>
            <div className={styles.wrapper}>
                <div className={styles.regFormLft}><img className="img-fluid form-img" src="./images/register.png" /></div>
                <div className={styles.regFormRht}>
                    <div className={styles.formHeading}><h3>Registration</h3></div>
                    <div className={styles.formWrapper}>
                        <form className="row align-items-center" id="regForm" onSubmit={adduser}>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                                <div className="input-group" ref={focusFirstfieldDiv}>
                                    <div className="input-group-text"><PersonVcardFill /></div>
                                    <input type="text" ref={focusFirstfield} className="form-control" minLength="5" maxLength="8" id="inlineFormInputGroupUsername" placeholder="Username" required name="username" onChange={handleFldChange} />
                                    <div id="validationChooseUsername" className="invalid-feedback">
                                        username already exist. Please choose another username with minimum 5 characters
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupFirstname">Name</label>
                                <div className="input-group">
                                    <div className="input-group-text"><PersonFill /></div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupFirstname" minLength="5" placeholder="Name" required name="firstname" onChange={handleFldChange} />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupEmail">E-Mail</label>
                                <div className="input-group">
                                    <div className="input-group-text"><EnvelopeFill /></div>
                                    <input type="email" className="form-control" id="inlineFormInputGroupEmail" placeholder="E-mail" required name="email" onChange={handleFldChange} />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupAddress1">Address 1</label>
                                <div className="input-group">
                                    <div className="input-group-text"><HouseFill /></div>
                                    <textarea className="form-control" id="inlineFormInputGroupAddress1" placeholder="Door No, Street name" required name="address1" onChange={handleFldChange}></textarea>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupAddress2">Address 2</label>
                                <div className="input-group">
                                    <div className="input-group-text"><HousesFill /></div>
                                    <textarea className="form-control" id="inlineFormInputGroupAddress2" placeholder="City, Country" required name="address2" onChange={handleFldChange}></textarea>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupPhone">Phone</label>
                                <div className="input-group">
                                    <div className="input-group-text"><TelephoneFill /></div>
                                    <input type="text" className="form-control" id="inlineFormInputGroupPhone" placeholder="Phone" required name="phone" onChange={handleFldChange} />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupPassword">Password</label>
                                <div className="input-group">
                                    <div className="input-group-text"><Key /></div>
                                    <input type="password" className="form-control" id="inlineFormInputGroupPassword" minLength="6" placeholder="Password" required name="password" onChange={handleFldChange} />
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupConfirmPassword">Confirm Password</label>
                                <div className="input-group">
                                    <div className="input-group-text"><KeyFill /></div>
                                    <input type="password" className="form-control" id="inlineFormInputGroupConfirmPassword" placeholder="Confirm Password" required name="confirmpassword" onChange={handleFldChange} />
                                    <div id="validationMatchPassword" className="invalid-feedback">
                                        Passwords not match. Please give password with minimum 6 characters.
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="input-group">
                                    <div className="input-group-text"><GenderAmbiguous /></div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="inlineFormInputGroupMale" defaultValue="male" required onChange={handleFldChange} />
                                        <label className="form-check-label" htmlFor="inlineFormInputGroupMale">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="inlineFormInputGroupFemale" defaultValue="female" required onChange={handleFldChange} />
                                        <label className="form-check-label" htmlFor="inlineFormInputGroupFemale">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <label className="visually-hidden" htmlFor="inlineFormInputGroupPrivilege">Privilege </label>
                                <div className="input-group">
                                    <div className="input-group-text"><PersonBoundingBox /></div>
                                    <select className="form-control slctDpDwn" id="inlineFormInputGroupPrivilege" name="privilege" required onChange={handleFldChange}>
                                        <option value="">Select user type</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-3 mb-1 row d-flex">
                                <div className="col-auto">
                                    <button type="button" onClick={clearregform} className="btn btn-danger btn-sm me-1">Cancel</button>
                                    <button type="submit" className="btn btn-primary btn-sm btn-custom">Register</button>
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