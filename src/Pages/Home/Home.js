import CoinList from "../../Components/CoinList/CoinList";
import BitcoinChart from "../../Components/BitcoinChart/BitcoinChart";
import { Container } from "./Home.styles";

export default function Home() {
  return (
    <Container>
      <BitcoinChart />
      <CoinList />
    </Container>
  );
}
