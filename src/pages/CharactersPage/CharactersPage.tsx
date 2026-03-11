import { useState } from "react";

import logoImage from "../../assets/images/logo.png";
import { Loader } from "../../components/Loader/Loader";
import { Selector } from "../../components/Selector/Selector";
import { StatusDot } from "../../components/StatusDot/StatusDot";
import {
  defaultSpeciesFilter,
  defaultStatusFilter,
  speciesFilterOptions,
  statusFilterColorByValue,
  statusFilterOptions,
} from "./mocks";

import "./CharactersPage.css";

export const CharactersPage = () => {
  const [speciesFilter, setSpeciesFilter] = useState(defaultSpeciesFilter);
  const [statusFilter, setStatusFilter] = useState(defaultStatusFilter);

  return (
    <section className="characters-page">
      <img alt="Rick and Morty logo" className="characters-page__brand-logo" src={logoImage} />

      <div className="characters-page__selectors-preview">
        <div className="characters-page__selector-preview">
          <h3 className="characters-page__selector-title">Большой вариант</h3>
          <Selector
            ariaLabel="Выбор вида персонажа"
            onChange={(nextValue) => setSpeciesFilter(nextValue)}
            options={speciesFilterOptions}
            size="large"
            value={speciesFilter}
          />
        </div>

        <div className="characters-page__selector-preview">
          <h3 className="characters-page__selector-title">Малый вариант</h3>
          <Selector
            ariaLabel="Выбор статуса персонажа"
            onChange={(nextValue) => setStatusFilter(nextValue)}
            options={statusFilterOptions}
            renderOptionAddon={(option) => (
              <StatusDot color={statusFilterColorByValue[option.value]} />
            )}
            size="small"
            value={statusFilter}
          />
        </div>
      </div>

      <Loader caption="Loading characters..." />

      <div className="characters-page__small-loader">
        <Loader caption="Loading list..." size="small" />
      </div>
    </section>
  );
};
