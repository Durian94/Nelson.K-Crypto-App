interface InputProps {
  className?: string;
  placeholder: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  inputValue: string;
}

export const Input = ({ className, ...props }: InputProps) => (
  <input
    className={className}
    placeholder={props.placeholder}
    onChange={props.handleInput}
    value={props.inputValue}
  />
);
