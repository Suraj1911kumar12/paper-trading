import { Box, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import PageHeader from '../Layout/PageHeader'
import { decrement, increment } from '../redux/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {


    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    console.log(count);
    const [data, setData] = useState([])
    // let data = []

    // data.push(...data)
    // console.log(data);

    // setData([...data, "hallo"])
    const add = () => {
        dispatch(increment())
        setData([...data, count + 1])
    }
    // const remove = () => {
    //     dispatch(decrement())
    //     setData(data.filter(data => data. !== count))
    // }

    return (
        <div className=''>
            <div>
                <PageHeader title="Dashboard" />
                {/* {count} */}
                <button onClick={add}>Add</button>
                {/* <button onClick={remove}>Remove</button> */}
            </div>

            <div className=' flex flex-col gap-10   rounded-md  p-4'>

                <Box className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {
                        data.map((i, j) => {
                            return (
                                <Card key={j + 1} className='p-4 h-32 shadow-xl hover:shadow-2xl '>
                                    <Typography>
                                        {i}.
                                    </Typography>
                                </Card>
                            )
                        })
                    }
                </Box>
            </div>
        </div>
    )
}
export default Home