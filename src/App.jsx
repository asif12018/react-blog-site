

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'


function App() {
 //state for book mark
 const [bookmarks,setBookmarks] = useState([]);
 //function for book mark
 const handleAddToBookmark = (blog) =>{
  
   let newBookMarks = [...bookmarks,blog];
   setBookmarks(newBookMarks);
   
 }
 
 //state for reading time
  const [readingTime, setReadingTime] = useState(0);
  //function to calculate reading time
  const handleMarkAsRead = (time,id) =>{
    let sum = readingTime + time;
    setReadingTime(sum);
    //remove the read blog from bookmark
    
   let remainingBookmark = bookmarks.filter(bookmark => bookmark.Id !== id);
   setBookmarks(remainingBookmark);

    
    
  }
  
  
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto p-4'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
