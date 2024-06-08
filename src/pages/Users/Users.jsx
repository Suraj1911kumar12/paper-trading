import React from 'react'
import PageHeader from '../../Layout/PageHeader'
import DataTable from '../../Layout/DataTable'
import { Divider } from '@mui/material';

const Users = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },

    ];

    const rows = [
        { id: 1, lastName: 'Kumar', firstName: 'Suraj', age: 23 },
        { id: 2, lastName: 'Kumar', firstName: 'Amit', age: 24 },
    ];
    return (
        <div className='flex flex-col gap-4'>
            <div>

                <PageHeader title="Users" />
            </div>
            <div className=' flex flex-col gap-10   rounded-md  p-4 '>
                <Divider>
                    <span className='text-2xl'>
                        User Details
                    </span>
                </Divider>
                <DataTable rows={rows} columns={columns} />
            </div>
        </div>
    )
}

export default Users