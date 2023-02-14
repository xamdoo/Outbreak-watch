function BlogAuthor(props){
    return(
        <div className="basis-1/4 bg-white rounded-md h-fit">
        <div className="bg-gray-900 rounded-t-md h-8"></div>
        <div className="px-5">
            <div className="flex items-end space-x-2">
                <div className="">               
                    <img className="w-16 h-16  rounded-full" src={`http://localhost:8000/${props.user.file}`} alt=""/>
                </div>
                <h4 className="font-bold text-xl">{props.user.firstName} {props.user.secondName}</h4>
            </div>
            <p className="py-3">{props.user.bio}</p>
            <div className="py-2 space-y-1.5">
                <div>
                    <h3 className="font-bold text-gray-500">Location</h3>
                    <h3>{props.user.location}</h3>
                </div>
                <div>
                    <h3 className="font-bold text-gray-500">Work</h3>
                    <h3>{props.user.work}</h3>
                </div>
                <div>
                    <h3 className="font-bold text-gray-500">Joined</h3>
                    <h3>3rd Jan 23</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BlogAuthor