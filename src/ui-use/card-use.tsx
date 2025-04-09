import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
export type CardProps = {
  title?: string;
  description?: string;
  content?: string;
  footer?: string;
  className?: string;
  src?: string;
};
const CardBox = ({
  title,
  description,
  content,
  footer,
  src,
  className,
}: CardProps) => {
  return (
    <div className={className}>
      <Card className="h-60 bg-blue-100">
        <CardHeader>
          <CardTitle className="text-base/5 text-blue-950 font-bold">
            {title}
          </CardTitle>
          <CardDescription className="line-clamp-3">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{content}</p>
        </CardContent>
        <CardFooter>
          <p>{footer}</p>
        </CardFooter>
        <img src={src} className="text-sm" />
        {/* <CardFooter className="content-center mb-7">
          <img src={src} className="w-80 h-40" />
          </CardFooter> */}
      </Card>
    </div>
  );
};
export default CardBox;
