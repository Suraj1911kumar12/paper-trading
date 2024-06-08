import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Typography } from '@mui/material'
import { UseAuth } from '../Context/AuthContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const Header = ({ getValueFromHeader, width }) => {

    const MySwal = withReactContent(Swal)
    const logoutHandle = () => {
        MySwal.fire({
            title: "Are you sure?",
            text: "do you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: 'LOG OUT',
        }).then((result) => {
            if (result.isConfirmed) {
                auth.logoutAction()
            }
        })
    }
    const auth = UseAuth()
    const [changeWidth, setChangeWidth] = useState(false)

    // const [open, setOpen] = useState(false)

    // const handleClose = () => {
    //     setOpen(!open)
    // }

    const menuClick = () => {
        getValueFromHeader(changeWidth)
    }
    return (
        <div className={` flex backdrop-blur-xl z-50 sticky top-0 justify-between items-center px-10 bg-gry-100 w-full h-20`}>
            <div>

                {
                    width &&
                    <button onClick={menuClick} className=''>
                        <GiHamburgerMenu color='black' size={20} />
                    </button>
                }
            </div>
            <Box sx={{ flexGrow: 0 }}>
                <Link to={'/profile'}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </Link>
                {/* <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClick={handleClose}
                >
                    <Box className="">
                        <Link to={'/profile'}>
                            <MenuItem className='flex  gap-4 w-full  ' onClick={handleClose}>
                                <Avatar />
                                <Typography>
                                    Profile
                                </Typography>
                            </MenuItem>
                        </Link>
                        <Divider />
                        <MenuItem className='flex gap-4 justify-end' onClick={handleClose}>
                            <Box />
                            <Typography>
                                Settings
                            </Typography>
                        </MenuItem>
                        <Divider />

                        <MenuItem className='flex gap-4 justify-end' onClick={handleClose}>
                            <Box />
                            <Typography onClick={logoutHandle}>
                                Logout
                            </Typography>
                        </MenuItem>
                    </Box>
                </Menu> */}
            </Box>

        </div>
    )
}

export default Header