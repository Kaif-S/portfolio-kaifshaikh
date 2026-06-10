export type ThemeName = "teal" | "violet" | "ember" | "sky";

export interface Theme {
  name: ThemeName;
  label: string;
  color: string;
  primary: string;
  accent: string;
  secondary: string;
  warm: string;
  highlight: string;
}

export const themes: Theme[] = [
  {
    name: "teal",
    label: "Teal",
    color: "#51A3A3",
    primary: "#51A3A3",
    accent: "#C2E812",
    secondary: "#75485E",
    warm: "#CB904D",
    highlight: "#F98948",
  },
  {
    name: "violet",
    label: "Violet",
    color: "#7C3AED",
    primary: "#7C3AED",
    accent: "#F0ABFC",
    secondary: "#5B21B6",
    warm: "#C4B5FD",
    highlight: "#A78BFA",
  },
  {
    name: "ember",
    label: "Ember",
    color: "#E85D04",
    primary: "#E85D04",
    accent: "#FFBA08",
    secondary: "#9D0208",
    warm: "#F48C06",
    highlight: "#FAA307",
  },
  {
    name: "sky",
    label: "Sky",
    color: "#0EA5E9",
    primary: "#0EA5E9",
    accent: "#38BDF8",
    secondary: "#0284C7",
    warm: "#7DD3FC",
    highlight: "#BAE6FD",
  },
];
