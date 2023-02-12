import { useDispatch, useSelector } from "react-redux";
import { setCurrency } from "../../store/app/actions";
import { LocalStorageState } from "../../store/app/appReducer";

export const CurrencySelector = ({ className }: { className?: string }) => {
  const dispatch = useDispatch();
  const { currency } = useSelector(
    (state: LocalStorageState) => state.localStorage
  );

  return (
    <div className={className}>
      <select onChange={(e) => dispatch(setCurrency(e.target.value))}>
        <option value="usd" selected={currency === "usd" ? true : false}>
          USD
        </option>
        <option value="aud" selected={currency === "aud" ? true : false}>
          AUD
        </option>
        <option value="gbp" selected={currency === "gbp" ? true : false}>
          GBP
        </option>
        <option value="eur" selected={currency === "eur" ? true : false}>
          EUR
        </option>
      </select>
    </div>
  );
};
