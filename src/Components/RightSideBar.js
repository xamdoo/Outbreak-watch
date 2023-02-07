import React from 'react'

function RightSideBar() {
    return (
        <div className="w-1/4 -mr-6">
            <aside className="border m-2 flex flex-col rounded-md bg-whites">
                <section className="p-5 rounded-md bg-white">
                    <header className="flex justify-between border-b border-gray-300 pb-2">
                        <h3 className="text-xl font-bold">Listings</h3>
                        <div>
                            <a href="/" className="text-sm font-medium text-blue-700">See all</a>
                        </div>
                    </header>
                    <div className='flex flex-wrap gap-x-0.5'>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-red-800 mr-1 border-b border-gray-300">
                            <span>Responding to Emergencies One Behavior at a Time</span>
                            <span className="text-gray-600">prevention</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-red-800 border-b border-gray-300">
                            <span>John Snow: A Legacy of Disease Detectives</span>
                            <span className="text-gray-600">investigation</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-red-800 border-b border-gray-300">
                            <span>Thoughtful Communication and Fostering Change in a Polarized, Post-COVID Society</span>
                            <span className="text-gray-600">trends</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-red-800 border-b border-gray-300">
                            <span>An Unsuspected Treat Contaminated with Listeria. How about them Caramel Apples?</span>
                            <span className="text-gray-600">prevention</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-red-800 border-b border-gray-300">
                            <span>Socio-demographic inequalities and excess non-COVID-19 mortality during the COVID-19 pandemic</span>
                            <span className="text-gray-600">trends</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-red-800 border-b border-gray-300 ">
                            <span>The culture of experimentation in epidemiology—50 years later</span>
                            <span className="text-gray-600">trends</span>
                        </a>
                        <a href="/" className=" hover:text-red-800 mx-12 font-semibold text-m mt-3 mb-0">
                            <span>Create a Listing</span>
                        </a>
                    </div>
                </section>
            </aside>
        </div>
    )
}

export default RightSideBar
