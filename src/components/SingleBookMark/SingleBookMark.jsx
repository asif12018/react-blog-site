/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const SingleBookMark = ({bookmark}) => {
    
    return (
        <div className="rounded-xl bg-white h-[98px] mx-6 flex justify-center items-center">
            <h1 className="font-bold">{bookmark}</h1>
        </div>
    );
};

export default SingleBookMark;