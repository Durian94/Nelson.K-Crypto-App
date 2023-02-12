import { ProgressBar, ProgressBarData } from "../CoinList/CoinList.styles";
import { shortHandCurrency } from "../../utilities/formatMoney/formatMoney";

interface CoinListBarProps {
  className?: string;
  currencySymbol?: string;
  leftData: number;
  rightData: number;
}

const CoinListBar = ({ className, ...props }: CoinListBarProps) => (
  <div className={className}>
    <ProgressBarData>
      <p>
        {props.currencySymbol}
        {props.leftData === null ? Infinity : shortHandCurrency(props.leftData)}
      </p>
      <p>
        {props.currencySymbol}
        {props.rightData === null
          ? Infinity
          : shortHandCurrency(props.rightData)}
      </p>
    </ProgressBarData>
    <ProgressBar width={(props.leftData / props.rightData) * 100}>
      <div></div>
    </ProgressBar>
  </div>
);

export default CoinListBar;
