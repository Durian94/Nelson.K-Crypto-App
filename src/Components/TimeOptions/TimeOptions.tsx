import { ClickHandler } from "../../utilities/types/types";

export const TimeOptions = ({
  className,
  handleTimeframe,
}: {
  className?: string;
  handleTimeframe: ClickHandler;
}) => (
  <form className={className}>
    <label>
      <input
        type="radio"
        name="select-time"
        value={1}
        onClick={handleTimeframe}
      />
      <span></span>
    </label>
    <p>1d</p>
    <label>
      <input
        type="radio"
        name="select-time"
        value={7}
        onClick={handleTimeframe}
      />
      <span></span>
    </label>
    <p>7d</p>
    <label>
      <input
        type="radio"
        name="select-time"
        value={30}
        onClick={handleTimeframe}
      />
      <span></span>
    </label>
    <p>30d</p>
    <label>
      <input
        type="radio"
        name="select-time"
        value={90}
        onClick={handleTimeframe}
      />
      <span></span>
    </label>
    <p>90d</p>
    <label>
      <input
        type="radio"
        name="select-time"
        value={360}
        onClick={handleTimeframe}
      />
      <span></span>
    </label>
    <p>1y</p>
    <label>
      <input
        type="radio"
        name="select-time"
        value={5000}
        onClick={handleTimeframe}
      />
      <span></span>
    </label>
    <p>Max</p>
  </form>
);
