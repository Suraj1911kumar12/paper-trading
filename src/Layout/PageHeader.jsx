import { Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = ({ title }) => {
    return (
        <div className='flex my-4 items-center justify-between w-full'>
            <div>
                <span className='text-2xl font-semibold'>{title}</span>
            </div>
            <Breadcrumbs aria-label="breadcrumb">
                <Typography color="text.primary" className=''>{title === "Dashboard" ? "" : title}</Typography>
                <Link to={'/'} className='underline'>
                    Dashboard
                </Link>
            </Breadcrumbs>
        </div>
    )
}

export default PageHeader