import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("CollateralTokenModule", (m) => {
  const token = m.contract("CollateralToken", [100000000000000000000000n]);

  return { token };
});
