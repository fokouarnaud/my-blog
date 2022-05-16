import React from 'react'

const BlogCard = () => {
    return (
        <div className="p-5">
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-start space-y-2">
                    <div className=" flex items-center justify-start space-x-2">
                        <span className="h-8 w-8">
                            <img className="h-full w-full object-cover object-center"
                                src="/images/trend/2.webp" alt="img_profile" />
                        </span>
                        <h3 className="text-xs text-gray-500 font-semibold">
                            <a href="#" className="text-black"> Nelly</a>
                            {" "} in{" "}
                            <a href="#" className="text-black">Discord Blog</a>
                        </h3>
                    </div>
                    <h1>Orientalism for Asian America</h1>
                    <p>Understanding the Asian American experience, including #StopAsianHate, is predicated on Understanding how Orientalis...</p>
                  
                    <div className="flex items-center justify-start text-xs space-x-2">
                        <p>May29</p>
                        <div className="h-1 w-1 bg-gray-500 rounded-full"></div>
                        <p>6 min read</p>
                    </div>
                </div>
                <div className="">
                    <img src="/images/trend/3.webp" alt="smal_img" />
                </div>

            </div>

        </div>
    )
}

export default BlogCard