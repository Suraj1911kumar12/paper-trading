import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assests/images/Logo.png'
import Header from './Header'
import { SidebarDataFile, sidebarData } from '../components/SidebarData'
import { IoIosArrowForward } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Divider, Tooltip } from '@mui/material'
import { BiLogOut } from 'react-icons/bi'

import { UseAuth } from '../Context/AuthContext'


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

const SidebarNew = () => {
    const MySwal = withReactContent(Swal)
    const auth = UseAuth()

    const logouthandle = () => {
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


    const [sidebarApiData, setSidebarApiData] = useState([])
    useEffect(() => {
        getPageList()
    }, [])

    const getPageList = async () => {
        const response = await axios.get('http://65.1.134.102:5000/api/admin/page', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('Token')
            }
        })
        console.log(response.data.data);
        setSidebarApiData(response.data.data)
    }


    const pathname = window.location.pathname;
    const [clicked, setClicked] = useState("")
    const openSubToSubMenu = (e) => {
        if (clicked === e) {
            return setClicked("0")
        }
        setClicked(e)
    }
    const [width, setWidth] = useState(true)

    const getValueFromHeader = (data) => {
        setWidth(data)
        console.warn(data);
    }
    return (
        <div className={` h-screen   flex`}>
            <aside className={` flex flex-col  `} style={{ width: width ? "350px" : 70 }} >
                <div className=' bg-back flex flex-col gap-4 m-3 p-2 rounded-2xl  h-full'>

                    <div className='flex h-24 w-full  items-center justify-center   overflow-hidden'>
                        {
                            width ?
                                <>
                                    {/* <h1 className='text-sm text-white'>Admin Panel</h1> */}
                                    <img src={logo} className='object-contain h-16' />
                                </>

                                :
                                <>
                                    <button onClick={() => setWidth(!width)}>
                                        <GiHamburgerMenu color='white' size={20} />
                                    </button>
                                </>
                        }
                    </div>


                    <div className='overflow-y-scroll   shadow-inner  h-full '>
                        {
                            sidebarApiData.map((item, index) => {
                                return (
                                    <div className={`flex flex-col  gap-3 ${!width && 'justify-center items-center'} `} key={index + 1}>
                                        {
                                            width ? <>

                                                {
                                                    item?.name &&
                                                    <>
                                                        <Divider />
                                                        <div className='flex text-center items-center justify-center font-bold text-white bg-gray-600 p-2'>
                                                            {item?.name}
                                                        </div>
                                                        <Divider />

                                                    </>
                                                }
                                            </> : null
                                        }
                                        {
                                            item?.subData && item?.subData.map((subItem, subIndex) => {
                                                return (
                                                    <div key={subItem.id}>
                                                        <div className='flex '>
                                                            <Tooltip placement={'right'} className='flex' title={subItem.menuTitle}>
                                                                <div onClick={(e) => openSubToSubMenu(subItem.id)} className={` flex w-full  `}>
                                                                    <NavLink to={subItem?.link} onClick={() => setWidth(true)} className={` ${pathname === subItem.menuTitle ? 'bg-black text-[#f07e01]' : ""} hover:bg-black flex items-center justify-start gap-4 text-white cursor-pointer hover:text-[#f07e01] my-1  rounded-r-lg px-5 py-2`}
                                                                        style={width ? { width: '70%' } : { width: '100%' }}
                                                                    >
                                                                        <div>
                                                                            {subItem.icon}
                                                                        </div>

                                                                        {width &&
                                                                            subItem.menuTitle &&
                                                                            <span>{subItem.menuTitle}</span>
                                                                        }
                                                                    </NavLink>
                                                                    <div className='w-[30%] flex flex-col items-center justify-center '>
                                                                        {
                                                                            width && subItem.subintoSubData &&
                                                                            <button className={` transition-all ${clicked === subItem.id ? 'rotate-0' : 'rotate-90'}`}>
                                                                                <IoIosArrowForward color={clicked === subItem.id ? '#f07e01' : "white"} size={20} />
                                                                            </button>
                                                                        }

                                                                    </div>
                                                                </div>
                                                            </Tooltip>
                                                        </div >
                                                        {
                                                            clicked === subItem.id &&
                                                            <>
                                                                {
                                                                    width && subItem.subintoSubData &&
                                                                    subItem.subintoSubData.map((subintoSubData, subintoSubIndex) => {
                                                                        return (
                                                                            <div key={subintoSubData.id} style={clicked === subItem.id ? { display: 'flex' } : { display: 'none' }} className='flex transition-all text-black  items-center justify-start pl-10'>
                                                                                <ul className='list-disc'>

                                                                                    <li className={'transition-all text-gray-400  hover:text-[#f07e01] mt-1 '}>
                                                                                        <NavLink to={subintoSubData.link} >
                                                                                            {subintoSubData.name}
                                                                                        </NavLink>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </>
                                                        }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className='flex rounded-2xl  shadow-lg p-2 items-center justify-center w-full border'>
                        <Tooltip className='flex-1  flex items-center justify-center' title='Log Out' placement='right'>
                            <button onClick={logouthandle} >
                                <BiLogOut size={width ? 30 : 20} color='white' />
                            </button>
                        </Tooltip>
                    </div>
                </div>

            </aside>
            <div className='w-full overflow-scroll'>
                <Header width={width} getValueFromHeader={getValueFromHeader} />
                <div className='p-5 '>
                    <Outlet />
                </div>
            </div>
            <SidebarDataFile />

        </div >
    )
}

export default SidebarNew