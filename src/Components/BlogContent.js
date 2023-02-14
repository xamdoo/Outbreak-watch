import BlogComments from "./BlogComments"


function BlogContent(props){
    const date = new Date(props.blog.date);
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }).format(date);
    return(
        <div className="flex-1">
        <div className="bg-white rounded-md">
            <div>
                <img className="rounded-t-md" src={`http://localhost:8000/${props.blog.file}`} alt=""/>
            </div>
            <div className="py-5 px-16">
            <div className="flex items-center space-x-3 py-3">
                <div className="h-12 w-12">               
                    <img className="rounded-full" src={`http://localhost:8000/${props.blog.user.file}`} alt=""/>
                </div>
            <div className="leading-4">
                <h4>{props.blog.user.firstName} {props.blog.user.secondName}</h4>
                <small className="text-gray-400">{formattedDate}</small>
            </div>
            </div>
            <h3 className="mb-3 font-bold text-5xl hover:text-sky-600">{props.blog.title}</h3>
            {props.blog.tags.map((tag,index)=>(
                                    <span key={index} className=" text-sm font-normal px-2 py-1">
                                        <span>#</span>{tag}
                                    </span>
                                ))}
            <div className="py-10">
                {props.blog.content}
            </div>
            </div>
            <BlogComments/>
        </div>
    </div>
    )
}

export default BlogContent