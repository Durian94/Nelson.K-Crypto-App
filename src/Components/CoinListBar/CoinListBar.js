import { ProgressBar, ProgressBarData } from "../CoinList/CoinList.styles";
import { shortHandCurrency } from "../../utilities/formatMoney/formatMoney";

const CoinListBar = ({ className, ...props }) => (
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
