import "./Mint.css";
import { ethers } from "ethers";
import ABI from "./ABI.json";
function Mint(props) {

    const mint = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract("0x8A8FcF290A1eB84e73dfc8904d2E5d184a532B15", ABI, signer);
        const price = await contract.price();
        console.log(price);

        const tryToMint = await contract.safeMint({ value: price });
        console.log("Clicked TheButton");
    }

    return (
        <div>
            <button class="mint-button"><a onClick={mint} href="#">Mint</a></button>
        </div>


    );



}

export default Mint;
