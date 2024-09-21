"use client"
import { useState } from "react"

export default function Contact() {

    const [inputs, setInputs] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = (e) => {
        setInputs((state) => { return { ...state, [e.target.name]: e.target.value } })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(process.env.NEXT_PUBLIC_API_URL + '/contact', {
            method: 'POST',
            body: JSON.stringify(inputs)
        }).then(res => res.json())
            .then((res) => {
                setMessage(res.message);
                setInputs({});
                setTimeout(() => {
                    setMessage("");
                }, 3000);
            })
    }

    return <main className="container mx-auto px-6 py-20 bg-gray-100 shadow-lg rounded-lg mt-10">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
            <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-2 text-gray-700">Name:</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleInput}
                    value={inputs.name ?? ""}
                    id="name"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    required
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="email" className="mb-2 text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleInput}
                    value={inputs.email ?? ""}
                    id="email"
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    required
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="message" className="mb-2 text-gray-700">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    onChange={handleInput}
                    value={inputs.message ?? ""}
                    className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    rows="4"
                    required
                ></textarea>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300">
                Submit
            </button>
        </form>
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </main>

} 