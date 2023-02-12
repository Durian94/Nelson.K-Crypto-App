import { shortenLink } from "../../utilities/formatMoney/functions";
import { NoLink } from "../../Pages/Coinpage/Coinpage.styles";
import LinkIcon from "../../assets/images/link-icon.svg";
import WindowIcon from "../../assets/images/new-window.svg";

export const CoinpageLink = ({
  className,
  link,
}: {
  className?: string;
  link: string;
}) => {
  return (
    <>
      {link === "" && <NoLink>Link unavaliable</NoLink>}
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className={className}>
          <img src={LinkIcon} alt="link-icon" />
          <p>{shortenLink(link)}</p>
          <img src={WindowIcon} alt="link-icon" />
        </a>
      )}
    </>
  );
};
