# Changelog

## [2.4.0] — 2026-10-07

- **Suporte a Grafana 13.x** — corrige `Cannot read properties of undefined (reading 'ReactCurrentOwner')` ao carregar o plugin no Grafana 13 (React 19). O bundle embutia o `react/jsx-runtime` do React 18; agora usa um shim pequeno baseado no `React.createElement` do próprio Grafana, então um único build serve do Grafana 10 ao 13.

## [2.3.0] — 2026-09-15

- Novos ícones nativos: `vpn`, `vnet` e `connection`
- **Biblioteca de Ícones** — suba seus próprios SVGs pela sidebar. Conjuntos de fabricantes (Azure, AWS, GCP) **não vêm embutidos** de propósito: aponte a biblioteca para a sua própria cópia. Os ícones ficam no JSON do dashboard e entram nos backups.
- SVGs enviados passam por sanitização — scripts, handlers de evento e referências externas são removidos

## [2.0.1-beta] — 2026-03-04

Reescrita total. Saiu o Cytoscape.js, entrou o **ReactFlow**. Plugin renomeado de `gabrielnsw-noctopology-panel` pra `gabrielnsw-nswtopology-panel`.

- Novo motor de renderização (ReactFlow / @xyflow/react)
- Interface refeita do zero — cards, labels, tooltips, sidebar, modais
- Links weathermap com cores por utilização
- Sparkline de tráfego no hover dos links
- Métricas customizadas por nó e por conexão, com regex
- Formatação de unidades do Grafana via `@grafana/data`
- Alertas com threshold e cor configurável
- Detecção de status do nó por qualquer campo
- Grid, mini-mapa, legenda, busca
- Backup/restore com importação de backup da v1 (converte topologia antiga)
- Tela de boas-vindas
- Card de doação (dá pra esconder)

**Quebra compatibilidade:** ID do plugin mudou. JSON da v1 precisa ser importado via "Importar Backup V1".

---

## [1.0.13-alpha] — 2026-02-23

Primeira release pública, feita com Cytoscape.js.

- Editor visual drag-and-drop
- Integração Zabbix via DataFrames
- Cores nos links baseadas no tráfego
- Backup/restore em JSON
- Inglês, espanhol, português
