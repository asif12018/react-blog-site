import PropTypes from 'prop-types';
import { useState } from 'react';
import { PiBookmarkSimpleLight } from "react-icons/pi";

const SingleBlog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    
    const {title, cover, author, author_img, reading_time,posted_date,hashtags,Id} = blog;
    
    
    //hide bookmark btn
    const [btn,setBtn] = useState(false);
    //hide bookmark btn function
    const handleHideBtn = (value) =>{
      setBtn(value);
      
    }
    //hide mark as read state
    const [read, setRead] = useState(false)
    // hide mark as read function
    const handleReadHideBtn = (value) =>{
      setRead(value);
    }
    
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
                   {
                    btn == true || <button onClick={()=>{handleAddToBookmark(blog)
                      handleHideBtn(true) 
                     }} className='text-2xl  '><PiBookmarkSimpleLight /></button>
                   }
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className='flex gap-5'>{hashtags.map((hashtag, idx)=><span key={idx}>{hashtag}</span>)}</p>
            <br />
            {
              read == false ? <button disabled={btn == false && true} className='text-lg text-[#6047EC] font-bold border-b-2 border-[#6047EC]' onClick={()=>{
                handleMarkAsRead(reading_time,Id)
                handleReadHideBtn(true);
              }}>Mark as read</button> : <button disabled className='text-lg text-[#545261] font-bold border-b-2 border-[#545261]' > Readed</button>
            }
        </div>
    );
};
SingleBlog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func
}
export default SingleBlog;