import { useState, useEffect } from "react";
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
const NasaCrad = () => {
  const [nasaNews, setNasaNews] = useState([]);
  useEffect(() => {
    const fetchNasa = async () => {
      const response = await fetch(
        "https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=njiqjIRFiDdfvY6gRNc8YgLZ1LjJ0bEvuoC4x3F1 "
      );
      if (!response.ok) {
        throw new Error("something went wrong in nasaData");
      }
      const data = await response.json();
      setNasaNews(data.close_approach_data);
    };
    fetchNasa();
  }, []);

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  React.useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="mx-auto h-100 col-span-3 col-start-2 p-3">
      {nasaNews ? (
        <>
          <Carousel setApi={setApi} className="w-full max-w-xs">
            <CarouselContent>
              {nasaNews.map((nasaArticle: any, index: number) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <pre className="text-lg font-bold">
                        {nasaArticle.orbiting_body}
                      </pre>
                      <pre className="text-sm text-blue-950 line-clamp-3 leading-7 ">
                        فاصله از زمین:
                        {nasaArticle.miss_distance.kilometers}
                      </pre>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className=" text-center text-sm text-muted-foreground">
              Slide {current}
            </div>
          </Carousel>
        </>
      ) : (
        <p className="text-red-500 text-center">
          oops something happend in state
        </p>
      )}
    </div>
  );
};
export default NasaCrad;
