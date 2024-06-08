import React, { useState, useRef, useMemo, useEffect } from 'react';
import JoditEditor from 'jodit-react';
import PageHeader from '../../Layout/PageHeader'
import { Button, Divider } from '@mui/material'
import { BiDownload, BiSave } from 'react-icons/bi';
import axios from 'axios';

const AddStaticPages = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [post, setPost] = useState({
        content: '',
    })
    useEffect(() => {
        getData();
    }, [])
    const getData = async () => {
        const response = await axios.get('http://65.1.134.102:5000/api/admin/page', {
            headers: {
                'Authorization': localStorage.getItem('Token'),
            }
        })
        console.log(response);
    }
    const config = useMemo(() => ({
        height: 350,
    }), [])

    const fieldChanged = (event) => {
        setPost({ ...post, 'content': event })
    }
    const savePost = async (e) => {
        e.preventDefault()
        const response = await axios.post('http://65.1.134.102:5000/api/admin/page', {
            name: 'suraj',
            content: post.content,
            slug: 'hallo'
        }, {
            headers: {
                'Authorization': localStorage.getItem('Token'),
            }
        })
        console.log(response);
    }
    return (
        <div>
            <PageHeader title='Terms And Condition' />
            <div className=' flex flex-col gap-10   rounded-md  p-4'>
                <Divider>
                    <span className='text-2xl'>
                        Terms and Conditions
                    </span>
                </Divider>
                <div className='border flex flex-col border-black overflow-y-scroll h-96 p-4'>
                    <JoditEditor
                        ref={editor}
                        value={post.content}
                        config={config}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                        onChange={(e) => fieldChanged(e)}
                    />
                    {/* {post.content} */}
                </div>
                <div className='flex items-center justify-end'>
                    <Button onClick={savePost} startIcon={<BiSave />} variant="contained">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default AddStaticPages

