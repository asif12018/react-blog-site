/* eslint-disable react/prop-types */


const SpendTime = ({readingTime}) => {
    return (
        <div className="rounded-[8px] border-2 border-[#6047EC] bg-[#6047EC1A] py-4">
            <h2 className="text-2xl text-center text-[#6047EC] font-bold">Spend time on read: {readingTime}</h2>
        </div>
    );
};

export default SpendTime;