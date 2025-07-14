

const Footer = () => {
    return (
        <>
        <div className="mt-8 w-full bg-black px-8 md:px-[500px]  flex justify-between text-sm md:text-md py-8">
            <div className="flex flex-col text-white">
                <p>Featured Blogs</p>
                <p>Most Viewed</p>
                <p>Readers Choice</p>
            </div>

            <div className="flex flex-col text-white">
                <p>forum</p>
                <p>Support</p>
                <p>Recent Post</p>
            </div>
            
            <div className="flex flex-col text-white">
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
        <p className="py-2 pb-2 text-center text-white bg-black">All rights reserved @Day in the Life Blog 2025</p>
        </>
    )
} 

export default Footer