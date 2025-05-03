import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setcategoryNews] = useState([]);
  useEffect(() => {
    if(id =="0"){ 
      setcategoryNews(data);
    }else if (id == "1"){
      const filtersNews = data.filter((news) => news.others.is_today_pick == true);
      setcategoryNews(filtersNews);
    }else{
      const filteredNews = data.filter((news) => news.category_id == id);
      setcategoryNews(filteredNews);
    }
    
  }, [data, id]);
  console.log(categoryNews.length)

  return (
    <div>
      <h1>Total Category News: {categoryNews.length} Found </h1>
    </div>
  );
};

export default CategoryNews;
