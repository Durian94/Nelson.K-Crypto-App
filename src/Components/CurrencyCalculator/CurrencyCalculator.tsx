import { useSelector } from "react-redux";
import CurrencyArrows from "../../assets/images/currency-arrows.svg";
import { LocalStorageState } from "../../store/app/appReducer";

interface CalculatorProps {
  className?: string;
  amount: number;
  handleAmount: React.ChangeEventHandler<HTMLInputElement>;
  cryptoValue: number;
  handleCryptoValue: React.ChangeEventHandler<HTMLInputElement>;
  coin: string;
}

export const CurrencyCalculator = ({
  className,
  ...props
}: CalculatorProps) => {
  const { currency, currencySymbol } = useSelector(
    (state: LocalStorageState) => state.localStorage
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
            value={props.cryptoValue}
            onChange={props.handleCryptoValue}
          />
        </form>
      </div>
    </div>
  );
};
