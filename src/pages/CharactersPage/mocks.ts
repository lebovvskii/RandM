import { type ISelectorOption } from "../../components/Selector/Selector";

export const speciesFilterOptions: ISelectorOption[] = [
  { value: "human", label: "Human" },
  { value: "alien", label: "Alien" },
  { value: "humanoid", label: "Humanoid" },
  { value: "animal", label: "Animal" },
  { value: "robot", label: "Robot" },
];

export const statusFilterOptions: ISelectorOption[] = [
  { value: "alive", label: "Alive" },
  { value: "dead", label: "Dead" },
  { value: "unknown", label: "Unknown" },
];

export const statusFilterColorByValue: Record<string, string> = {
  alive: "#3ab54a",
  dead: "#ff4d4f",
  unknown: "#ffb547",
};

export const defaultSpeciesFilter = "human";
export const defaultStatusFilter = "alive";
