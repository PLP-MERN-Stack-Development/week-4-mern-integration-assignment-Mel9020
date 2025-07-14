import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';

const PostDetails = () => {
    return (
        <div>
            <Navbar />
            <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text black md:text-3xl">Day in the life blog</h1>
                <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
            </div>
            <div className="flex items center justify-center between mt-2 md:mt-4">
                 <p>@Malebogosebolaidev</p>
                <div className="flex space-x-2">
                    <p>07/13/2023</p>
                    <p>09:41</p> 
                </div>
            </div>
            <img src='image.png' alt="Mother working online" className="w-full rounded-lg shadow-md mb-4" />
            <p className="text-sm md:text-lg">"Each day may begin with a struggle, but I choose to rise—not because it's easy, but because giving up has never been an option."</p>
            <div className="mx-auto mt-8 space-x-4 font-semibold">
                <p>categories:</p>
                <div className="flex justify-center items-center space-x-2">
                

                </div>
            </div>
            <footer/>
            </div>
        </div>
    )
}

export default PostDetails;