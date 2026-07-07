import assert from "node:assert/strict";
import { calculateCost } from "../src/calc.js";

const result = calculateCost({
  tasks: 100,
  inputTokens: 1000,
  outputTokens: 500,
  fx: 5,
  iofPercent: 0,
  spreadPercent: 0,
  officialInputUsdPerMillion: 2,
  officialOutputUsdPerMillion: 10,
  tokenAiInputBrlPerMillion: 4,
  tokenAiOutputBrlPerMillion: 12
});

assert.equal(result.totalTokens, 150000);
assert.equal(result.officialUsd, 0.7);
assert.equal(result.officialBrl, 3.5);
assert.equal(result.tokenAiBrl, 1);
assert.equal(result.savingsBrl, 2.5);
assert.equal(result.tokenAiCostPerTask, 0.01);

console.log("calc.test.js OK");
