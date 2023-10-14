import React, { Fragment } from 'react'
import style from './Post.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


export function Post() {
    return (
        <Fragment>
            <div className={style.main_post}>
                <div class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#12">All Posts(32)</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#12">Article</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#12">Event</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#12">Education</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#12">Job</a>
                                </li>
                            </ul>
                            <form class="d-flex" role="search" className={style.btn1}>
                                <button type="button" class="btn btn-light">Write a Post <KeyboardArrowDownIcon /></button>
                                <button type="button" class="btn btn-primary"> <GroupAddIcon /> Join Group</button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </Fragment>
    )
}
