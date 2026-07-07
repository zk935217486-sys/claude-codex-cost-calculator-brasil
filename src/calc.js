export const defaults = {
  tasks: 120,
  inputTokens: 8000,
  outputTokens: 1200,
  fx: 5.5,
  iofPercent: 6.38,
  spreadPercent: 4,
  officialInputUsdPerMillion: 3,
  officialOutputUsdPerMillion: 15,
  tokenAiInputBrlPerMillion: 5.2,
  tokenAiOutputBrlPerMillion: 23
};

export function calculateCost(options = {}) {
  const cfg = { ...defaults, ...options };
  const inputMillion = (cfg.tasks * cfg.inputTokens) / 1_000_000;
  const outputMillion = (cfg.tasks * cfg.outputTokens) / 1_000_000;
  const internationalTax = 1 + ((cfg.iofPercent + cfg.spreadPercent) / 100);

  const officialUsd =
    inputMillion * cfg.officialInputUsdPerMillion +
    outputMillion * cfg.officialOutputUsdPerMillion;

  const officialBrl = officialUsd * cfg.fx * internationalTax;
  const tokenAiBrl =
    inputMillion * cfg.tokenAiInputBrlPerMillion +
    outputMillion * cfg.tokenAiOutputBrlPerMillion;

  const savingsBrl = Math.max(0, officialBrl - tokenAiBrl);
  const savingsPercent = officialBrl > 0 ? (savingsBrl / officialBrl) * 100 : 0;
  const totalTokens = cfg.tasks * (cfg.inputTokens + cfg.outputTokens);
  const tokenAiCostPerTask = cfg.tasks > 0 ? tokenAiBrl / cfg.tasks : 0;
  const officialCostPerTask = cfg.tasks > 0 ? officialBrl / cfg.tasks : 0;

  return {
    config: cfg,
    totalTokens,
    officialUsd,
    officialBrl,
    tokenAiBrl,
    savingsBrl,
    savingsPercent,
    tokenAiCostPerTask,
    officialCostPerTask
  };
}

export function formatBRL(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value);
}

export function formatInteger(value) {
  return new Intl.NumberFormat("pt-BR").format(Math.round(value));
}
