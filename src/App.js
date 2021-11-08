import React from "react";
import Post from './Post';

const list = [
    { title: '01', subtitle: 'Um', likes: 20, },
    { title: '02', subtitle: 'Dois', likes: 30, },
    { title: '03', subtitle: 'Três', likes: 40, },
    { title: '04', subtitle: 'Quatro', likes: 50, },
    { title: '05', subtitle: 'Cinco', likes: 60, },
];

export default function App() {
    return (
        <>
            <h1>Hello World</h1>
            {list.map((element, i) => {
                const {title, subtitle, likes} = element;
                return <Post
                    key={i}
                    likes={likes}
                    title={title}
                    subtitle={subtitle}
                />
            })}


        </>
    );
}