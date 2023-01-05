export const CurrencySelector = ({ className, ...props }) => (
  <div className={className}>
    <select onChange={props.getCurrency}>
      <option value="usd" selected={props.currency === "usd" ? true : false}>
        USD
      </option>
      <option value="aud" selected={props.currency === "aud" ? true : false}>
        AUD
      </option>
      <option value="gbp" selected={props.currency === "gbp" ? true : false}>
        GBP
      </option>
      <option value="eur" selected={props.currency === "eur" ? true : false}>
        EUR
      </option>
    </select>
  </div>
);
