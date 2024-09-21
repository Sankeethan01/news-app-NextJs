"use client";
import { useEffect, useState } from "react";

export default function Post({ params }) {
    const id = params.id;
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${id}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                setPost(res);
                console.log("Post fetched:", res);
            })
            .catch(error => {
                console.error("Fetch error:", error);
            });
    }, [id]);

    return (
        <>
            {post ? (
                <main className="container mx-auto px-6 py-8 bg-white shadow-lg rounded-lg mt-15 mb-20">
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 text-center">{post.title}</h2>
                    <p className="text-gray-600 text-center mb-4">Published on {post.created_at_formatted}</p>
                    <img
                        src={post.image}
                        alt="Post Image"
                        className="w-3/5 mx-auto h-auto rounded-lg shadow-md mb-6"
                    />
                    <p className="text-lg text-gray-700 leading-relaxed text-justify mb-25">
                        {post.description}
                    </p>
                </main>

            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}
