import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("CollateralTokenModule", (m) => {
  const initialSupply = 100000000000000000000000n;
  const token = m.contract("CollateralToken", [initialSupply]);

  return { token };
});
