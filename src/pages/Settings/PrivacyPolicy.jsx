import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';


import PageHeader from '../../Layout/PageHeader'
import { Button, Divider } from '@mui/material'
import { BiSave } from 'react-icons/bi'
import axios from 'axios';

const PrivacyPolicy = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [post, setPost] = useState({
        title: "",
        content: '',
        categoryId: '',
    })

    const fieldChanged = (event) => {
        setPost({ 'content': event, ...post })
    }

    const submitContent = async (event) => {
        event.preventDefault()
        if (post.content.trim() === " ") {
            alert("Please enter content");
        }
        else {
            console.log(post.content);
            const response = await axios.post("http://65.1.134.102:5000/api/admin/page", {
                name: 'Suraj',
                content: post.content,
                slug: 'surajkumar'
            }, {
                headers: {
                    'Authorization': localStorage.getItem('Token')
                }
            }
            )
            console.log(response)
        }


    }

    return (
        <div>
            <PageHeader title='Privacy Policy' />
            <div className=' flex flex-col gap-10  rounded-md  p-4'>
                <Divider>
                    <span className='text-2xl'>
                        Privacy Policy
                    </span>
                </Divider>
                <div className='border z-10 flex flex-col  border-black overflow-y-scroll h-96 p-4'>
                    <JoditEditor
                        ref={editor}
                        value={post.content}
                        tabIndex={1}
                        onBlur={newContent => setContent(newContent)}
                        onChange={fieldChanged}
                    />
                    hallo
                    {post.content}
                </div>
                <div className='flex items-center justify-end'>
                    <Button onClick={submitContent} startIcon={<BiSave />} variant="contained">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy
