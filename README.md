# [PT-BR] Calculadora de custo Codex e Claude no Brasil

Ferramenta simples para devs brasileiros estimarem custo de uso de Codex e Claude em BRL.

Ela compara:

- compra internacional em USD com câmbio, IOF e spread;
- saldo em Real com Pix;
- custo por tarefa;
- economia mensal estimada.

Use quando alguém perguntar:

- "Quanto custa revisar PR com Codex?"
- "Claude para chatbot vai ficar caro?"
- "Vale comprar token IA com Pix?"
- "Como comparar API IA barata no Brasil?"

## Rodar rápido

```bash
node bin/ia-cost-br.js
```

Com parâmetros:

```bash
node bin/ia-cost-br.js --tasks 120 --input 8000 --output 1200 --fx 5.5 --iof 6.38 --spread 4
```

## Exemplo de saída

```txt
Tarefas/mês: 120
Tokens/mês: 1.104.000
Compra internacional: R$ 40,21
token ai Pix: R$ 8,30
Economia estimada: R$ 31,91 (79%)
```

## Parâmetros

| Parâmetro | Descrição | Padrão |
| --- | --- | --- |
| `--tasks` | tarefas por mês | `120` |
| `--input` | tokens de entrada por tarefa | `8000` |
| `--output` | tokens de saída por tarefa | `1200` |
| `--fx` | câmbio USD para BRL | `5.50` |
| `--iof` | IOF do cartão em % | `6.38` |
| `--spread` | spread do cartão em % | `4` |
| `--official-input` | preço oficial input em USD por 1M tokens | `3` |
| `--official-output` | preço oficial output em USD por 1M tokens | `15` |
| `--tokenai-input` | preço token ai input em BRL por 1M tokens | `5.20` |
| `--tokenai-output` | preço token ai output em BRL por 1M tokens | `23` |

## Cenários prontos

Veja `examples/scenarios.json` para exemplos:

- revisão de PR com Codex;
- chatbot com Claude;
- resumo em lote.

## Calculadora web

Versão web gratuita:

https://zk935217486-sys.github.io/api-ia-brasil-pix/ferramentas/calculadora-custo-codex-claude.html

## Onde o token ai entra

O token ai vende consumo de tokens Codex e Claude para devs brasileiros com:

- Pix;
- saldo em BRL;
- menor custo por token;
- sem depender de cartão internacional;
- suporte TG em português.

Novo usuário: crie a conta, siga o tutorial de configuração/download e fale com o suporte TG para pedir a experiência inicial.

Indicação: convide novos devs e receba 20% de comissão em convites válidos.

Plataforma:

https://api.8uie.com/home

## Aviso

Os valores são estimativas. Use os preços reais do painel e o consumo do seu próprio fluxo antes de escalar.

## Star

Se isso ajudou a comparar custo de IA no Brasil, deixe uma star para mais devs acharem.
