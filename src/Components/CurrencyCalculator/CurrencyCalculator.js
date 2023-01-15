import CurrencyArrows from "../../assets/images/currency-arrows.svg";

export const CurrencyCalculator = ({ className, ...props }) => (
  <div className={className}>
    <div>
      <p>
        {props.currency}
        {props.currencySymbol}
      </p>
      <form>
        <input
          type="number"
          value={props.amount}
          onChange={props.handleAmount}
        />
      </form>
    </div>
    <img
      src={CurrencyArrows}
      alt="currency-arrows"
      onChange={props.handleCryptoValue}
    />
    <div>
      <p>{props.coin}</p>
      <form>
        <input type="number" value={props.cryptoValue} />
      </form>
    </div>
  </div>
);
