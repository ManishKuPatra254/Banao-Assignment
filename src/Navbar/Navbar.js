import style from './Navbar.module.css'
import React, { Fragment, useState } from 'react'
import image1 from '../Images/whole.png'
import SearchIcon from '@mui/icons-material/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export function Navbar() {

    const [modal, setModal] = useState(false);

    function handleShowModal() {
        setModal(true);
    };
    function handleHideModal() {
        setModal(false);
    };

    return (
        <Fragment>
            <div className={style.main_nav}>
                <img src={image1} alt="" />
                <div className={style.search_area}>
                    <a href="#12"><SearchIcon sx={{ color: 'gray' }} /></a>
                    <input type="text" placeholder='Search for your favorite groups in ATG' />
                </div>
                <div className={style.btn1}>
                    <button onClick={handleShowModal}>Create account. <span style={{ color: 'blue' }}>Its free! <KeyboardArrowDownIcon sx={{ color: 'black' }} /></span></button>
                    <Modal className={style.content_display} show={modal} onHide={handleHideModal}>
                        <p>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        <div className={style.sign_s}>
                            <span>Create account</span>
                            <span>Already have an account? <a href="#23">Sign In</a> </span>
                        </div>

                        <div className={style.input_s}>
                            <input type="text" placeholder='First name' />
                            <input type="text" placeholder='Last name' />
                        </div>
                        <div className={style.input_ep}>
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <input type="password" placeholder='Confirm Password' />
                        </div>
                    </Modal>
                </div>
            </div>
        </Fragment>
    )
}
