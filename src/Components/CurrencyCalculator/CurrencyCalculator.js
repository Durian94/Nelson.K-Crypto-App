import { useSelector } from "react-redux";
import CurrencyArrows from "../../assets/images/currency-arrows.svg";

export const CurrencyCalculator = ({ className, ...props }) => {
  const { currency, currencySymbol } = useSelector(
    (state) => state.localStorage
  );

  return (
    <div className={className}>
      <div>
        <p>
          {currency}
          {currencySymbol}
        </p>
        <form>
          <input
            type="number"
            value={props.amount}
            onChange={props.handleAmount}
          />
        </form>
      </div>
      <img src={CurrencyArrows} alt="currency-arrows" />
      <div>
        <p>{props.coin}</p>
        <form>
          <input
            type="number"
            value={props.cryptoValue.toFixed(8)}
            onChange={props.handleCryptoValue}
          />
        </form>
      </div>
    </div>
  );
};
