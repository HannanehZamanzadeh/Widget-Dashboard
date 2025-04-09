import { useEffect, useState, Suspense } from "react";
import * as React from "react";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../components/ui/carousel";
import { NavLink } from "react-router";
const NewsCarousel = () => {
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_7930568c13a026c1752139355a26b8672f0ee&q=apple`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setNews(data.results);
    };
    fetchNews();
  }, []);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  const Loader = () => <p>loading...</p>;
  return (
    <div className="mx-auto h-100 col-span-4 col-start-6 p-3">
      <Suspense fallback={<Loader />}>
        {news.length ? (
          <Carousel setApi={setApi} className="w-full max-w-xs">
            <CarouselContent>
              {news.map((newsArticle, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <h3 className="text-lg font-bold">{newsArticle.title}</h3>
                      <p className="text-sm text-gray-500 line-clamp-3">
                        {newsArticle.description}
                      </p>
                      <NavLink
                        to={`/news/${index}`}
                        className="text-blue-500 mt-3"
                      >
                        View Details
                      </NavLink>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="text-center text-sm text-muted-foreground">
              Slide {current} of {count}
            </div>
          </Carousel>
        ) : (
          <p className="text-red-500 text-center">oops</p>
        )}
      </Suspense>
    </div>
  );
};

export default NewsCarousel;
