import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import "./CharacterInfoPage.css";

export const CharacterInfoPage = () => {
  return (
    <section className="character-info">
      <Link className="character-info__back-button" to="/characters">
        ← Назад
      </Link>

      <Loader caption="Loading character..." />
    </section>
  );
};
