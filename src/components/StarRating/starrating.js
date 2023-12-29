import React from 'react';

const StarRating = () => {
    const rows = [
        { filled: 5, half: 0, text: "&Only" },
        { filled: 4, half: 1, text: "&Up" },
        { filled: 3, half: 2, text: "&Up" },
        { filled: 2, half: 3, text: "&Up" },
    ];

    return (
        <div className="flex items-center flex-col  space-y-1">
            <h1 className="mb-2 md:font-bold font-normal">Avg. Customer Review</h1>
            {rows.map((row, index) => (
                <div className='flex items-center cursor-pointer' key={index}>

                    {[...Array(row.filled).keys()].map((star) => (
                        <svg
                            key={star}
                            className="w-6 h-6 text-yellow-600 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                        </svg>

                    ))
                    }
                    {[...Array(row.half).keys()].map((star) => (

                        <svg
                            className="w-6 h-6 text-gray-300 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                        </svg>


                    ))
                    }

                    {[...Array(row.text).keys()].map((star) => (

                        <p className='px-3 text-sm hover:text-yellow-600'>{row.text}</p>

                    ))
                    }

                </div>
            ))}


        </div >



    );
};

export default StarRating;
