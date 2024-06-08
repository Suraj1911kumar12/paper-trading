import React from 'react'
import PageHeader from '../Layout/PageHeader'
import { Avatar, Divider, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const Profile = () => {
    const count = useSelector(state => state.counter.value)
    return (
        <div>
            <PageHeader title='Profile' />
            <div className=' flex flex-col gap-10   rounded-md  p-4'>
                <Divider>
                    <div className='flex items-center justify-center'>
                        <Avatar sx={{ width: 200, height: 200, objectFit: 'contain' }} />
                    </div>
                </Divider>
                <div className='flex flex-col gap-10 '>
                    <div className='grid grid-cols-3'>
                        <Typography>
                            Suraj
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile