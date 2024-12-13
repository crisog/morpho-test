import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("LoanTokenModule", (m) => {
  const initialSupply = 100000000000000000000000n;
  const token = m.contract("LoanToken", [initialSupply]);

  return { token };
});
