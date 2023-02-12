import { useState } from "react";
import CoinSelectorForm from "../../Components/CoinSelectorForm/CoinSelectorForm";
import { Container, AddAssetButton } from "./Portfolio.styles";
import AssetList from "../../Components/AssetList/AssetList";

export default function Portfolio() {
  const [openCoinSearch, setCoinSearch] = useState(false);

  const handleSearchWindow = () => {
    setCoinSearch(!openCoinSearch);
  };

  return (
    <Container>
      <AddAssetButton onClick={handleSearchWindow}>Add Asset</AddAssetButton>
      {openCoinSearch && (
        <CoinSelectorForm handleSearchWindow={handleSearchWindow} />
      )}
      <AssetList />
    </Container>
  );
}
