import React, { useState } from "react";
import { FaStar, FaRegStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => setShowFullText(!showFullText);

  // Max stars to display
  const maxStars = 5;
  const fullStars = Math.floor(rating.number);
  const emptyStars = maxStars - fullStars;

  return (
    <div className="card bg-base-100 shadow-xl m-2">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4 bg-base-300 pb-2">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
       <div className="flex gap-2 pr-3">
       <FaRegBookmark className="text-gray-500 hover:text-blue-500 cursor-pointer"></FaRegBookmark>
       <FaShareAlt className="text-gray-500 hover:text-blue-500 cursor-pointer" />
       </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-2">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="news"
          className="rounded-xl w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="px-4 pt-3 pb-2 text-sm text-gray-700">
        {showFullText ? details : `${details.slice(0, 150)}...`}
        <span
          onClick={toggleReadMore}
          className="text-red-500 font-medium cursor-pointer ml-1"
        >
          {showFullText ? " Show Less" : " Read More"}
        </span>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4 mt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`star-full-${i}`} />
          ))}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`star-empty-${i}`} />
          ))}
          <span className="text-black ml-1">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
