import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { CharacterInfoPage } from "./pages/CharacterInfoPage/CharacterInfoPage";
import { CharactersPage } from "./pages/CharactersPage/CharactersPage";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Заглушка: пока нет отдельной главной страницы, редиректим / на /characters */}
        <Route index element={<Navigate replace to="/characters" />} />
        <Route element={<CharactersPage />} path="/characters" />
        <Route element={<CharacterInfoPage />} path="/characters/:id" />
        {/* Заглушка: временно отправляем неизвестные роуты на список персонажей */}
        <Route element={<Navigate replace to="/characters" />} path="*" />
      </Route>
    </Routes>
  );
};
