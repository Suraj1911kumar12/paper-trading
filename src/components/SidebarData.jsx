import axios from "axios";
import { useEffect, useState } from "react";
import { HiMiniUsers } from "react-icons/hi2";
import { IoSettings } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";



export const SidebarDataFile = () => {
    
}


export const sidebarData = [
    {
        id: 1,
        subData: [
            {
                id: 1.1,
                menuTitle: "Dashboard",
                icon: <MdDashboard />,
                link: "/"
            }
        ]
    },

    {
        id: 2,
        title: "Settings",
        Header: "Account Management",
        subData: [
            {
                id: 2.1,
                menuTitle: 'users',
                icon: <HiMiniUsers />,
                link: '/users'
            },

            {
                id: 2.3,
                menuTitle: 'Pages',
                icon: <IoSettings />,
                subintoSubData: [

                    {
                        id: 2.33,
                        name: 'Terms and Conditions',
                        link: "/termsandconditions"
                    },
                    {
                        id: 2.34,
                        name: 'Privacy Policy',
                        link: "/privacypolicy"
                    },
                ]
            },
        ]
    },



]