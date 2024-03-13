import PropTypes from 'prop-types';
import SingleBookMark from '../SingleBookMark/SingleBookMark';

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div className="md:w-1/3  bg-[#0D111111] space-y-2 ml-4">
            <h2 className='text-3xl text-center font-bold py-2'>Bookmarks Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=><SingleBookMark key={idx} bookmark={bookmark}></SingleBookMark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
 bookmarks: PropTypes.array.isRequired
}
export default Bookmarks;