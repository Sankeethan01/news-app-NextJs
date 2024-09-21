export const metadata = {
    title: "About Us",
    description: "Details about website"
}

export default function About() {
    return (
        <>
            <main className="container mt-10 mx-auto px-6 py-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">About NewsLanka</h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    NewsLanka is a dynamic platform dedicated to delivering the latest updates and stories that matter. Our website showcases a unique blend of modern global news and the most relevant Sri Lankan news, ensuring that our audience stays informed about significant events both locally and worldwide.
                    We aim to provide comprehensive coverage of a variety of topics, including politics, culture, technology, and lifestyle. With a user-friendly interface and a commitment to journalistic integrity, NewsLanka offers not just news articles, but also in-depth analysis and opinion pieces to keep our readers engaged and enlightened.
                    Join us as we navigate the ever-changing landscape of news and strive to empower our audience with knowledge and insight.
                </p>
            </main>
            <div className="w-full mt-6 p-5">
                <img
                    src="https://dxlm84u5gf2hs.cloudfront.net/wp-content/uploads/2018/01/Fotolia_104752853_S.jpg"
                    alt="Description of the image"
                    className="w-full rounded-lg shadow-md "
                />
            </div>
        </>
    )
}