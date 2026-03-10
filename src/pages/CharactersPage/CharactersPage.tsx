import logoImage from "../../assets/images/logo.png";
import { Loader } from "../../components/Loader/Loader";
import "./CharactersPage.css";

export const CharactersPage = () => {
  return (
    <section className="characters-page">
      <img alt="Rick and Morty logo" className="characters-page__brand-logo" src={logoImage} />
      <Loader caption="Loading characters..." />

      <div className="characters-page__small-loader">
        <Loader caption="Loading list..." size="small" />
      </div>
    </section>
  );
};
