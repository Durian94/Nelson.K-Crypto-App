import PositiveArrow from "../../assets/images/positiveArrow.svg";
import NegativeArrow from "../../assets/images/negativeArrow.svg";

export const Percentage = ({ className, ...props }) => (
  <div className={className}>
    <img
      src={props.percent < 0 ? NegativeArrow : PositiveArrow}
      alt="arrow-icon"
    />
    {props.percent.toFixed(2)}%
  </div>
);
