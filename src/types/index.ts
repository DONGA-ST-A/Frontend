/** Advantage */

export type Position = "upper" | "bottom";

export interface AdvantageProps {
  position: Position;
  title: string;
  description: string;
}

export interface ArrowBtnProps {
  text: string;
  link: string;
}
