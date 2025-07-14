

const HomePost = () => {
    return (
        <div className="w-full flex mt-8 space-x-4">
         {/*left*/}
        <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="image.png" alt="" className="w-full rounded-lg shadow-md mb-4"/>
        </div>
        {/*right*/}
        <div className="flex flex-col w-[65%]">
            <h1 className="text-xl font-bold md:mb-2 mb-1 mb:text-2xl">
            "The Journey of a Thousand Miles Begins with a Single Step"   
            </h1>
            <div className="flex mb-2 text -sm font semibold text-gray-500 items-center justify-between md:mb-4">
                <p>@Malebogosebolaidev</p>
                <div className="flex space-x-2">
                    <p>07/13/2023</p>
                    <p>09:41</p> 
                </div>
            </div>
            <p className="text-sm md:text-lg">"Each day may begin with a struggle, but I choose to rise—not because it's easy, but because giving up has never been an option."</p>
        </div>
        </div>
    )
}

export default HomePost