import Link from "next/link"

export default function Header() {
    return <header className="bg-gray-900 shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <Link href='/'>
                <h1 className="text-3xl text-white font-bold hover:text-blue-400 transition duration-300">NewsLanka</h1>
            </Link>
            <nav className="space-x-6">
                <Link href="/" className="text-white hover:text-blue-400 transition duration-300">Home</Link>
                <Link href="/about" className="text-white hover:text-blue-400 transition duration-300">About</Link>
                <Link href="/contact" className="text-white hover:text-blue-400 transition duration-300">Contact</Link>
            </nav>
        </div>
    </header>


}
