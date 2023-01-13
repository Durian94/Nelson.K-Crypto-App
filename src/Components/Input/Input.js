export const Input = ({ className, ...props }) => (
  <input
    className={className}
    placeholder={props.placeholder}
    onChange={props.handleInput}
    value={props.inputValue}
  />
);
