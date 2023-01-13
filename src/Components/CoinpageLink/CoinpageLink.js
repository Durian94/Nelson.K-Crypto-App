import LinkIcon from "../../assets/images/link-icon.svg";
import WindowIcon from "../../assets/images/new-window.svg";

export const CoinpageLink = ({ className, ...props }) => (
  <a
    href={props.link}
    target="_blank"
    without
    rel="noreferrer"
    className={className}
  >
    <img src={LinkIcon} alt="link-icon" />
    <p>{props.link}</p>
    <img src={WindowIcon} alt="link-icon" />
  </a>
);
