import { ReactNode } from "react";

type FlexRowProps = {
  justify?: "start" | "end" | "between";
  children: ReactNode;
  customClass?: string;
};

const FlexRow = ({ justify = "start", children, customClass = "" }: FlexRowProps) => {
  let justifyClass = "";
  switch (justify) {
    case "start":
      justifyClass = "justify-start";
      break;
    case "end":
      justifyClass = "justify-end";
      break;
    case "between":
      justifyClass = "justify-between";
      break;
  }
  return <div className={`flex flex-row gap-4 ${justifyClass} ${customClass}`}>{children}</div>;
};

export default FlexRow;
