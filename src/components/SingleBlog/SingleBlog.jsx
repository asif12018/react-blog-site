import PropTypes from 'prop-types';
import { PiBookmarkSimpleLight } from "react-icons/pi";

const SingleBlog = ({blog,handleAddToBookmark}) => {
    
    const {title, cover, author, author_img, reading_time,posted_date,hashtags} = blog;
    
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                {/* profile picture div */}
                <div className='flex items-center'>
                  <img className='w-14 rounded-full' src={author_img} alt="" />
                  <div className='ml-6'>
                   <h3 className='text-lg font-bold'>{author}</h3>
                   <p>{posted_date}</p>
                  </div>
                </div>


                <div className='flex items-center gap-2'>
                   <p>{reading_time} min read</p>
                   <button onClick={()=>handleAddToBookmark(title)} className='text-2xl  '><PiBookmarkSimpleLight /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className='flex gap-5'>{hashtags.map((hashtag, idx)=><span key={idx}>{hashtag}</span>)}</p>
        </div>
    );
};
SingleBlog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired
}
export default SingleBlog;