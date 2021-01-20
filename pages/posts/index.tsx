import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import PostsLayout from '../../layout/PostsLayout/posts-layout.component'
import Input from '../../components/Input/input.component';
import Button from '../../components/Button/button.component';
import Post from '../../components/Post/post.component';


const Posts = () => {
    const [value, setValue] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then(res => res.json())
        .then(res => setPosts(res));
    },[posts]);

    const handleSendEvent = async (value: string) => {
        await fetch('http://localhost:4000/posts', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: 'Post', body: value, author: 'Someone'})
        });
    }

    return (
        <>
        <Head>
            <title>Página dos posts</title>
        </Head>
        <PostsLayout>
            <div style={{width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{position: 'relative'}}>
                <Input placeholder="Faça seu post" value={value} setValue={(e: any) => setValue(e.target.value)}/>
                <Button onPress={async () => await handleSendEvent(value)}> + </Button>
                </div>
            </div>
            {
                posts.map(post => (
                    <Post 
                    key={post.id} 
                    title={post.title} 
                    body={post.body} 
                    author={post.author}/>
                    ))
            }

        </PostsLayout>
        </>
    );
}

export default Posts;
