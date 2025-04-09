import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { Progress } from "./ui/progress";
import ErrorBlock from "./ErrorBlock";
const NewsDetailed = () => {
  const { id } = useParams();
  const index = parseInt(id || "0");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["newsDetail", { id }],
    queryFn: () =>
      fetch(
        `https://newsapi.org/v2/everything?q=apple&from=2025-03-11&to=2025-03-11&sortBy=popularity&apiKey=fb356b3158af4fed9360bdf1120da1d5`
      ).then((res) => res.json()),
  });
  const selectedArticle = data?.articles?.[index];
  return (
    <div className="p-5">
      {isLoading && <Progress value={33} className="mt-5 w-100 ml-120" />}
      {isError && (
        <ErrorBlock title="Something went wrong" message="Try again" />
      )}
      {selectedArticle ? (
        <div>
          <h2 className="text-2xl font-bold">{selectedArticle.title}</h2>
          <p className="text-sm text-gray-500">{selectedArticle.description}</p>
          <div className="mt-4">
            <h4 className="font-semibold">Content:</h4>
            <p>{selectedArticle.content}</p>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center">oops</p>
      )}
    </div>
  );
};

export default NewsDetailed;
