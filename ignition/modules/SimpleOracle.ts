import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SimpleOracleModule", (m) => {
  const initialPrice = 100000000000000000000000n;
  const oracle = m.contract("SimpleOracle", [initialPrice]);

  return { oracle };
});
