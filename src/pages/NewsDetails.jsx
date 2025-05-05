import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import RightAside from "../components/homeLayouts/RightAside";
import NewsDetailCard from "../components/NewsDetailCard";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  console.log(news);

  useEffect(() => {
    const newsDetailCard = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetailCard);
  }, [data, id]);

  return (
    <div className="pb-10">
      <header>
        <Header />
      </header>
      <main className="mx-auto gap-5 w-10/12 grid grid-cols-12">
        <section className="col-span-9">
          <h2 className="font-bold text-xl mb-5">News Details</h2>
          <NewsDetailCard news={news} />
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
