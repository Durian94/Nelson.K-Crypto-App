import PositiveArrow from "../../assets/images/positiveArrow.svg";
import NegativeArrow from "../../assets/images/negativeArrow.svg";

export const Percentage = ({ className, percent }) => (
  <div className={className}>
    <img src={percent < 0 ? NegativeArrow : PositiveArrow} alt="arrow-icon" />
    {percent.toFixed(2)}%
  </div>
);
