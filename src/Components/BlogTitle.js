import React from 'react'

function BlogTitle() {
    return (
        <div>
            <main className="flex p-3 mr-80 mt-3">
                <header className='flex content-start'>
                    <nav className="flex">
                    <ul className="flex items-start">
                        <li className="mr-8">
                        <a href="/" className="font-bold text-xl ">Relevant</a>
                        </li>
                        <li className="mr-8">
                        <a  href="/" className="font-normal text-lg text-gray-400">Latest</a>
                        </li>
                        <li className="mr-8">
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
