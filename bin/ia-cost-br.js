#!/usr/bin/env node
import { calculateCost, defaults, formatBRL, formatInteger } from "../src/calc.js";

const argMap = {
  "--tasks": "tasks",
  "--input": "inputTokens",
  "--output": "outputTokens",
  "--fx": "fx",
  "--iof": "iofPercent",
  "--spread": "spreadPercent",
  "--official-input": "officialInputUsdPerMillion",
  "--official-output": "officialOutputUsdPerMillion",
  "--tokenai-input": "tokenAiInputBrlPerMillion",
  "--tokenai-output": "tokenAiOutputBrlPerMillion"
};

function parseArgs(argv) {
  const options = {};
  for (let i = 0; i < argv.length; i += 1) {
    const key = argv[i];
    if (key === "--help" || key === "-h") {
      return { help: true };
    }
    const mapped = argMap[key];
    if (!mapped) continue;
    const value = Number(argv[i + 1]);
    if (Number.isFinite(value)) {
      options[mapped] = value;
      i += 1;
    }
  }
  return options;
}

function printHelp() {
  console.log(`Calculadora Codex/Claude Brasil

Uso:
  node bin/ia-cost-br.js --tasks 120 --input 8000 --output 1200

Parâmetros:
  --tasks             tarefas por mês (${defaults.tasks})
  --input             tokens de entrada por tarefa (${defaults.inputTokens})
  --output            tokens de saída por tarefa (${defaults.outputTokens})
  --fx                câmbio USD para BRL (${defaults.fx})
  --iof               IOF em % (${defaults.iofPercent})
  --spread            spread do cartão em % (${defaults.spreadPercent})
  --official-input    preço oficial input USD / 1M (${defaults.officialInputUsdPerMillion})
  --official-output   preço oficial output USD / 1M (${defaults.officialOutputUsdPerMillion})
  --tokenai-input     token ai input BRL / 1M (${defaults.tokenAiInputBrlPerMillion})
  --tokenai-output    token ai output BRL / 1M (${defaults.tokenAiOutputBrlPerMillion})
`);
}

const options = parseArgs(process.argv.slice(2));
if (options.help) {
  printHelp();
  process.exit(0);
}

const result = calculateCost(options);
const pct = Math.round(result.savingsPercent);

console.log(`Tarefas/mês: ${formatInteger(result.config.tasks)}
Tokens/mês: ${formatInteger(result.totalTokens)}
Compra internacional: ${formatBRL(result.officialBrl)}
token ai Pix: ${formatBRL(result.tokenAiBrl)}
Economia estimada: ${formatBRL(result.savingsBrl)} (${pct}%)
Custo por tarefa no token ai: ${formatBRL(result.tokenAiCostPerTask)}

Novo usuário: registre, siga o tutorial e fale com o suporte TG para pedir a experiência inicial.
Indicação: convide devs e receba 20% de comissão em convites válidos.
`);
