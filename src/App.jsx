

import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'
import { addingTolocalStorage, getDataFromLocalStorage, removeData } from './components/utilities/localStorage'


function App() {
 //state for book mark
 const [bookmarks,setBookmarks] = useState([]);
 //function for book mark
 const handleAddToBookmark = (blog) =>{
  
   let newBookMarks = [...bookmarks,blog];
   //adding to local storage
    
    addingTolocalStorage(blog.Id);
    
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
    removeData(id);
    
    
  }

  //loading data from local storage and setting to setBookmarks
  
  const [oldData,setOldData] = useState([]);
  useEffect(()=>{
    //oldData means total data that i loaded from api.
    if(oldData.length > 0){
      const storedData = getDataFromLocalStorage();
      const savedData = [];
      for(const id of storedData){
        const data = oldData.find(singleData => singleData.Id == id);
        savedData.push(data);
      }
      setBookmarks(savedData);
    }
  },[oldData])
  
  
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto p-4'>
        <Blogs setOldData={setOldData} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
