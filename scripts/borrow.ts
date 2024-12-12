import { MorphoABI } from "../abis/Morpho";
import hre from "hardhat";
import { getContract } from "viem";
import { privateKeyToAccount } from "viem/accounts";

async function main() {
  const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);
  const walletClient = await hre.viem.getWalletClient(account.address);
  const client = await hre.viem.getPublicClient();

  const morphoContract = getContract({
    address: "0xd011EE229E7459ba1ddd22631eF7bF528d424A14", // Morpho Sepolia
    abi: MorphoABI,
    client,
  });

  const borrowAmount = 7500000000000000000n; // 7.5 tokens

  const { request: borrowRequest } = await client.simulateContract({
    account: account.address,
    address: morphoContract.address,
    abi: MorphoABI,
    functionName: "borrow",
    args: [
      {
        loanToken:
          "0x990ab7BD0AD072926Fa422862F628356d4328656" as `0x${string}`,
        collateralToken:
          "0x6e9101634dfD5EF90D5a50B07cE085b7758ED0eb" as `0x${string}`,
        oracle: "0x4A2B8a2534fcDe95056b97f3A989779239117E73" as `0x${string}`,
        irm: "0x8C5dDCD3F601c91D1BF51c8ec26066010ACAbA7c" as `0x${string}`,
        lltv: 770000000000000000n,
      },
      borrowAmount,
      0n,
      account.address,
      account.address,
    ],
  });

  const borrowTxHash = await walletClient.writeContract(borrowRequest);
  console.info(`Borrow transaction hash: ${borrowTxHash}`);
  await client.waitForTransactionReceipt({ hash: borrowTxHash });
  console.info("Borrow transaction completed");
}

main()
  .then(() => process.exit())
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
