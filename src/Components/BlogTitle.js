import React from 'react'

function BlogTitle() {
    return (
        <div>
            <main className="flex flex-col p-4">
                <header className='flex justify-between items-center'>
                    <nav className="flex">
                    <ul className="flex">
                        <li className="mr-4">
                        <a href="/" className="font-bold text-xl ">Relevant</a>
                        </li>
                        <li className="mr-4">
                        <a  href="/" className="font-normal text-lg text-gray-400">Latest</a>
                        </li>
                        <li className="mr-4">
                        <a href="/" className="font-normal text-lg text-gray-400">Top</a>
                        </li>
                    </ul>
                    </nav>
                </header>
            </main>
        </div>
    )
}

export default BlogTitle
