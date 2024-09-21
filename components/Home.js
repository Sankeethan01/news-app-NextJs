"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [posts, setPosts] = useState([]);
  const inputRef = useRef("");
  const [search, setSearch] = useState(false);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/posts')
      .then((res) => res.json())
      .then(res => setPosts(res))
  }, [])

  const searchPost = (e) => {
    if (e.type == 'keydown' && e.key !== 'Enter') {
      return;
    }
    setSearch(true);
    fetch(process.env.NEXT_PUBLIC_API_URL + '/posts?q=' + inputRef.current.value)
      .then(res => res.json())
      .then(res => setPosts(res))
      .finally(() => {
        setSearch(false);
      });

  }

  return (
    <>
      <main className="container mx-auto my-5 px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-5xl font-bold mb-4 text-gray-900 hover:text-blue-600 transition duration-300">Welcome to NewsLanka</h2>
        <p className="text-xl text-gray-700 mb-4">Overview the latest news of Sri Lanka</p>
        <p className="text-md text-gray-500">Stay updated with the most relevant news stories and insights.</p>
      </main>


      <div className="flex justify-end px-4 mb-8">
        <input
          onKeyDown={searchPost}
          disabled={search}
          ref={inputRef}
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 w-64 placeholder-gray-400"
          placeholder="Search..."
        />
        <button
          onClick={searchPost}
          disabled={search}
          className={`px-6 py-2 rounded-r-md text-white transition duration-300 
      ${search ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-blue-600'}`}>
          {search ? 'Searching...' : 'Search'}
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mx-5 my-5">
        {posts.map((post, key) => (
          <Link href={'/post/' + post._id} key={key}>
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <img className="w-full h-80 object-cover mb-4" src={post.image} alt={post.title} />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-500">{post.short_description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {posts.length <= 0 && inputRef.current.value && (
        <p className="text-center text-red-500">No results found for: <b>{inputRef.current.value}</b></p>
      )}
    </>

  );
}
