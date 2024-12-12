import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("LoanTokenModule", (m) => {
  const token = m.contract("LoanToken", [100000000000000000000000n]);

  return { token };
});
