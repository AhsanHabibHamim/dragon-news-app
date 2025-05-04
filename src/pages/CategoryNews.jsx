import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setcategoryNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setcategoryNews(data);
    } else if (id == "1") {
      const filtersNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setcategoryNews(filtersNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setcategoryNews(filteredNews);
    }
  }, [data, id]);
  console.log(categoryNews.length);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-5">
        Total: <span className="text-red-900">{categoryNews.length}</span> News
        Found
      </h1>
      <div className="grid grid-cols-1 gap-5">
        {
        categoryNews.map((news)=><NewsCard key={news.id} news={news}></NewsCard>)
        }
        </div>
    </div>
  );
};

export default CategoryNews;
