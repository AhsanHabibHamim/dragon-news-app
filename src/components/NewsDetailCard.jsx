import React from 'react';
import { Link } from 'react-router';

const NewsDetailCard = ({news}) => {
    return (
        <div>
            <img className='w-full h-[350px] object-cover' src={news.image_url} alt="" />
            <h2 className='text-2xl py-2 font-bold'>{news.title}</h2>
            <p className=' text-xl'>{news.details}</p>
            <Link className='btn text-white bg-red-800 py-2 my-3 px-3 ' to={`/category/${news.category_id}`}> Back to News Category</Link>
        </div>
    );
};

export default NewsDetailCard;