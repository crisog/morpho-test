import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SimpleOracleModule", (m) => {
  const oracle = m.contract("SimpleOracle", [100000000000000000000000n]);

  return { oracle };
});
