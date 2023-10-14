import React, { Fragment } from 'react'
import style from './Feeds.module.css'
import image3 from '../Images/Rectangle 5.png'
import image4 from '../Images/Rectangle 6.png'
import image5 from '../Images/Rectangle 7.png'
import image6 from '../Images/Rectangle 8.png'
import image7 from '../Images/Rectangle 9.png'
import image8 from '../Images/Rectangle 10.png'
import image9 from '../Images/Rectangle 11.png'
import { Avatar } from '@mui/material'
import { Stack } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

export function Feeds() {
    return (
        <Fragment>
            <div className={style.main_feeds}>
                <div class="card mb-3">
                    <img src={image3} alt='' />
                    <div className={style.card_body}>
                        <h5 class="card-title">✍️ Article</h5>
                        <div className={style.position}>
                            <p class="card-text">What if famous brands had regular fonts? Meet RegulaBrands!</p>
                            <span><MoreHorizOutlinedIcon /></span>
                        </div>
                        <p className={style.card_text}><small class="text-body-secondary">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</small></p>
                        <div className={style.avatar_ic_f_need}>
                            <Stack sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                marginTop: '20px',
                                marginLeft: '20px',
                                marginBottom: '20px'
                            }} direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src={image6} />
                                <span style={{
                                    color: 'black', fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal'
                                }}>Sarthak Kamra</span>
                            </Stack>
                            <div className={style.icons_f}>
                                <span><RemoveRedEyeOutlinedIcon sx={{ color: '#525252' }} />1.4k views</span>
                                <span><ShareOutlinedIcon sx={{
                                    color: '#525252',
                                    borderRadius: '2px',
                                    background: '#EDEEF0',
                                }} /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <img src={image4} alt='' />
                    <div className={style.card_body}>
                        <h5 class="card-title">🔬️ Education</h5>
                        <div className={style.position}>
                            <p class="card-text">Tax Benefits for Investment under National Pension Scheme launched by Government</p>
                            <span><MoreHorizOutlinedIcon /></span></div>
                        <p className={style.card_text}><small class="text-body-secondary">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</small></p>
                        <div className={style.avatar_ic_f_need}>
                            <Stack sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                marginTop: '20px',
                                marginLeft: '20px',
                                marginBottom: '20px'
                            }} direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src={image7} />
                                <span style={{
                                    color: 'black', fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal'
                                }}>Sarah West</span>
                            </Stack>
                            <div className={style.icons_f}>
                                <span><RemoveRedEyeOutlinedIcon sx={{ color: '#525252' }} />1.4k views</span>
                                <span><ShareOutlinedIcon sx={{
                                    color: '#525252',
                                    borderRadius: '2px',
                                    background: '#EDEEF0',
                                }} /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <img src={image5} alt='' />
                    <div className={style.card_body}>
                        <h5 class="card-title">🗓️ Meetup</h5>
                        <div className={style.position}>
                            <p class="card-text">Finance & Investment Elite Social Mixer @Lujiazui</p>
                            <span><MoreHorizOutlinedIcon /></span>
                        </div>
                        <div className={style.locations}>
                            <span class="card-text"><small class="text-body-secondary"><InsertInvitationOutlinedIcon /></small>Fri, 12 Oct, 2018</span>
                            <span class="card-text"><small class="text-body-secondary"><LocationOnOutlinedIcon /></small>Ahmedabad, India</span>
                        </div>
                        <div className={style.btn3}>
                            <button type="button" class="btn btn-light">Visit website</button>
                        </div>
                        <div className={style.avatar_ic_f_need}>
                            <Stack sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                marginTop: '20px',
                                marginLeft: '20px',
                                marginBottom: '20px'
                            }} direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src={image8} />
                                <span style={{
                                    color: 'black', fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal'
                                }}>Ronal Jones</span>
                            </Stack>
                            <div className={style.icons_f}>
                                <span><RemoveRedEyeOutlinedIcon sx={{ color: '#525252' }} />1.4k views</span>
                                <span><ShareOutlinedIcon sx={{
                                    color: '#525252',
                                    borderRadius: '2px',
                                    background: '#EDEEF0',
                                }} /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div className={style.card_body}>
                        <h5 class="card-title">💼️ Job</h5>
                        <div className={style.position}>
                            <p class="card-text">Software Developer</p>
                            <span><MoreHorizOutlinedIcon /></span>
                        </div>
                        <div className={style.locations}>
                            <span class="card-text"><small class="text-body-secondary"><WorkOutlineOutlinedIcon /></small>Innovaccer Analytics Private Ltd.</span>
                            <span class="card-text"><small class="text-body-secondary"><LocationOnOutlinedIcon /></small>Noida, India</span>
                        </div>
                        <div className={style.btn4}>
                            <button type="button" class="btn btn-light">Apply on Timesjobs</button>
                        </div>
                        <div className={style.avatar_ic_f_need}>
                            <Stack sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                marginTop: '20px',
                                marginLeft: '20px',
                                marginBottom: '20px'
                            }} direction="row" spacing={2}>
                                <Avatar alt="Remy Sharp" src={image9} />
                                <span style={{
                                    color: 'black', fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    lineHeight: 'normal'
                                }}>Joseph Gray</span>
                            </Stack>
                            <div className={style.icons_f}>
                                <span><RemoveRedEyeOutlinedIcon sx={{ color: '#525252' }} />1.4k views</span>
                                <span><ShareOutlinedIcon sx={{
                                    color: '#525252',
                                    borderRadius: '2px',
                                    background: '#EDEEF0',
                                }} /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
