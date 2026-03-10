import classNames from "classnames";
import loaderImageLarge from "../../assets/images/loaders/loader-large.png";
import loaderImageSmall from "../../assets/images/loaders/loader-small.png";
import "./Loader.css";

type LoaderSize = "small" | "large";

interface ILoaderProps {
  size?: LoaderSize;
  caption?: string;
}

export const Loader = ({ size = "large", caption }: ILoaderProps) => {
  const imageSource = size === "large" ? loaderImageLarge : loaderImageSmall;
  const imageClassName = classNames("loader__image", {
    "loader__image--large": size === "large",
    "loader__image--small": size === "small",
  });

  return (
    <div className={classNames("loader", `loader--${size}`)} role="status">
      <img alt="Loading portal" className={imageClassName} src={imageSource} />
      {caption ? <p className="loader__caption">{caption}</p> : null}
    </div>
  );
};
