import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "./../components/homeLayouts/LeftAside";
import RightAside from "../components/homeLayouts/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-10/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <section className="w-10/12 mx-auto my-3">
          <Navbar></Navbar>
        </section>
      </header>
      <main  className="w-10/12 mx-auto my-3  grid grid-cols-12">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
