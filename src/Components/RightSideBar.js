import React from 'react'

function RightSideBar() {
    return (
        <div className="w-1/4 right-sidebar mr-8">
            <aside className="border m-2 flex flex-col rounded-md bg-whites">
                <section className="p-5 rounded-md bg-white">
                    <header className="flex justify-between border-b border-gray-300 pb-2">
                        <h3 className="text-xl font-bold">Listings</h3>
                        <div>
                            <a href="/" className="text-sm font-medium text-blue-700">See all</a>
                        </div>
                    </header>
                    <div>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-brand-600 border-b border-gray-300">
                            <span>Responding to Emergencies One Behavior at a Time</span>
                            <span className="text-gray-600">prevention</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-brand-600 border-b border-gray-300">
                            <span>John Snow: A Legacy of Disease Detectives</span>
                            <span className="text-gray-600">investigation</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-brand-600 border-b border-gray-300">
                            <span>Thoughtful Communication and Fostering Change in a Polarized, Post-COVID Society</span>
                            <span className="text-gray-600">trends</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-brand-600 border-b border-gray-300">
                            <span>An Unsuspected Treat Contaminated with Listeria. How about them Caramel Apples?</span>
                            <span className="text-gray-600">prevention</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-brand-600 border-b border-gray-300">
                            <span>Socio-demographic inequalities and excess non-COVID-19 mortality during the COVID-19 pandemic</span>
                            <span className="text-gray-600">trends</span>
                        </a>
                        <a href="/"  className="flex flex-col gap-1 text-brand-500 font-normal py-2 hover:text-brand-600 border-b border-gray-300 ">
                            <span>The culture of experimentation in epidemiology—50 years later</span>
                            <span className="text-gray-600">trends</span>
                        </a>
                        <a href="/" className="hover:underline mt-14 ml-20 font-semibold ">Create a Listing</a>
                    </div>
                </section>
            </aside>
        </div>
    )
}

export default RightSideBar
