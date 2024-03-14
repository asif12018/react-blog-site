/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import SingleBookMark from '../SingleBookMark/SingleBookMark';
import SpendTime from '../SpendTime/SpendTime';

const Bookmarks = ({bookmarks, readingTime}) => {
    
    return (
        <>
        
        
        <div className="md:w-1/3 ">
        <div className='mx-auto space-y-2 ml-4 pb-6'>
        <SpendTime readingTime={readingTime}></SpendTime>
        </div>
        <div className='bg-[#0D111111] space-y-2 ml-4 pb-6'>
        <h2 className='text-3xl text-center font-bold py-2'>Bookmarks Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><SingleBookMark key={idx} bookmark={bookmark.title}></SingleBookMark>)
            }
        </div>
            
        </div>
        </>
    );
};

Bookmarks.propTypes = {
 bookmarks: PropTypes.array.isRequired
 
}
export default Bookmarks;