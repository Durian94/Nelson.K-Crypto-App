import { shortenLink } from "../../utilities/formatMoney/formatMoney";
import { NoLink } from "../../Pages/Coinpage/Coinpage.styles";
import LinkIcon from "../../assets/images/link-icon.svg";
import WindowIcon from "../../assets/images/new-window.svg";

export const CoinpageLink = ({ className, link }) => {
  return (
    <>
      {link === "" && <NoLink>Link unavaliable</NoLink>}
      {link && (
        <a
          href={link}
          target="_blank"
          without
          rel="noreferrer"
          className={className}
        >
          <img src={LinkIcon} alt="link-icon" />
          <p>{shortenLink(link)}</p>
          <img src={WindowIcon} alt="link-icon" />
        </a>
      )}
    </>
  );
};
