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
        `https://newsdata.io/api/1/news?apikey=pub_7930568c13a026c1752139355a26b8672f0ee&q=apple`
      ).then((res) => res.json()),
  });
  const selectedArticle = data?.results?.[index];
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
        </div>
      ) : (
        <p className="text-red-500 text-center">oops</p>
      )}
    </div>
  );
};

export default NewsDetailed;
