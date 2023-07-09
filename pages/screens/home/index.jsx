import Banner from "@/pages/components/banner/Banner";
import FloatingActionButton from "@/pages/components/floatingbtn/FloatingButton";
import InputPortal from "@/pages/components/inputPortal/InputPortal";
import QuoteCard from "@/pages/components/quoteCard/QuoteCard";
import React, { useState } from "react";

const HomePage = () => {
    const [showInputPortal, setshowInputPortal] = useState(false);
  return (
    <div>
    <Banner/>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-3 mx-2 md:mx-auto max-w-[1450px] space-y-3 pb-28">
        <QuoteCard
          text={
            "Lorem ipsum, . Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
        <QuoteCard
          text={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ad a voluptatem, modi nisi itaque ex nobis debitis, repudiandae ut optio. Asperiores nam architecto incidunt sed quam minus fuga maiores"
          }
          author={"Biplab"}
        />
      </div>
      <FloatingActionButton setPortal={setshowInputPortal}/>
      {showInputPortal && <InputPortal onClose={setshowInputPortal}/>}
    </div>
  );
};

export default HomePage;
