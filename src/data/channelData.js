// Illustrative mock data only. Channel definitions reflect how each actually
// operates for an FMCG player like Dabur — not real performance figures.

export const channels = [
  { id: 'gt', label: 'General Trade', share: 62 },
  { id: 'mt', label: 'Modern Trade', share: 19 },
  { id: 'ecom', label: 'E-Commerce', share: 12 },
  { id: 'qcom', label: 'Quick Commerce', share: 7 },
]

export const channelData = {
  gt: {
    fulfillmentLabel: 'OTIF',
    fulfillmentSub: 'Target 95% · order lines, depot to retailer',
    fulfillmentTarget: 95,
    fulfillmentDomain: [80, 100],
    trend: [
      { period: 'W1', value: 91.2 }, { period: 'W2', value: 90.4 }, { period: 'W3', value: 88.7 },
      { period: 'W4', value: 92.1 }, { period: 'W5', value: 89.9 }, { period: 'W6', value: 93.6 },
      { period: 'W7', value: 91.8 }, { period: 'W8', value: 90.1 },
    ],
    missReasons: [
      { reason: 'Distributor credit block', share: 27 },
      { reason: 'Depot stockout', share: 24 },
      { reason: 'Transit delay > 48h', share: 19 },
      { reason: 'Quality hold at depot', share: 12 },
      { reason: 'Short-shipped from plant', share: 11 },
      { reason: 'Billing / invoice error', share: 7 },
    ],
    networkLabel: 'CFA / distributor stock health',
    networkMetricLabel: 'DOH',
    networkEntities: [
      { name: 'Ghaziabad CFA', metric: 18, target: 14, note: '142 distributors' },
      { name: 'Bhiwandi CFA', metric: 11, target: 14, note: '168 distributors' },
      { name: 'Hoskote CFA', metric: 21, target: 14, note: '155 distributors' },
      { name: 'Narendrapur CFA', metric: 9, target: 14, note: '98 distributors' },
      { name: 'Guwahati CFA', metric: 26, target: 16, note: '47 distributors' },
    ],
    demandLabel: 'Primary (billed to distributor) vs secondary (offtake)',
    demandNote: "Gap between primary and secondary flags trade loading sitting in distributor godowns.",
    demandSeriesNames: ['Primary', 'Secondary'],
    demand: [
      { period: 'Apr', forecast: 100, a: 108, b: 94 }, { period: 'May', forecast: 100, a: 112, b: 91 },
      { period: 'Jun', forecast: 100, a: 96, b: 98 }, { period: 'Jul', forecast: 100, a: 121, b: 89 },
      { period: 'Aug', forecast: 100, a: 104, b: 101 }, { period: 'Sep', forecast: 100, a: 109, b: 96 },
    ],
  },

  mt: {
    fulfillmentLabel: 'Store fill rate',
    fulfillmentSub: 'Target 97% · PO line to retailer DC acceptance',
    fulfillmentTarget: 97,
    fulfillmentDomain: [85, 100],
    trend: [
      { period: 'W1', value: 94.8 }, { period: 'W2', value: 93.1 }, { period: 'W3', value: 95.6 },
      { period: 'W4', value: 92.4 }, { period: 'W5', value: 96.0 }, { period: 'W6', value: 94.2 },
      { period: 'W7', value: 93.7 }, { period: 'W8', value: 95.1 },
    ],
    missReasons: [
      { reason: 'PO short-shipment vs order', share: 31 },
      { reason: 'Retailer DC slot congestion', share: 22 },
      { reason: 'GRN delay > 72h', share: 18 },
      { reason: 'Deduction / claim dispute hold', share: 16 },
      { reason: 'Planogram / listing mismatch', share: 13 },
    ],
    networkLabel: 'Key account fill rate',
    networkMetricLabel: 'Fill rate',
    networkEntities: [
      { name: 'Reliance Retail', metric: 96, target: 97, note: 'Largest MT account' },
      { name: 'DMart', metric: 91, target: 97, note: 'PO-driven, low tolerance' },
      { name: 'More Retail', metric: 94, target: 97, note: '' },
      { name: 'Spencer\'s', metric: 89, target: 97, note: 'DC congestion flagged' },
      { name: 'Star Bazaar', metric: 97, target: 97, note: '' },
    ],
    demandLabel: 'PO forecast vs shipped vs POS scan sell-through',
    demandNote: 'Shipped consistently ahead of scan data at DMart and Spencer\'s — early signal for return risk next cycle.',
    demandSeriesNames: ['Shipped', 'POS sell-through'],
    demand: [
      { period: 'Apr', forecast: 100, a: 103, b: 97 }, { period: 'May', forecast: 100, a: 106, b: 95 },
      { period: 'Jun', forecast: 100, a: 98, b: 99 }, { period: 'Jul', forecast: 100, a: 110, b: 93 },
      { period: 'Aug', forecast: 100, a: 101, b: 100 }, { period: 'Sep', forecast: 100, a: 104, b: 97 },
    ],
  },

  ecom: {
    fulfillmentLabel: 'Buy-box win rate',
    fulfillmentSub: 'Target 90% · share of in-stock, winning listings',
    fulfillmentTarget: 90,
    fulfillmentDomain: [70, 100],
    trend: [
      { period: 'W1', value: 84.2 }, { period: 'W2', value: 86.9 }, { period: 'W3', value: 81.4 },
      { period: 'W4', value: 88.1 }, { period: 'W5', value: 85.6 }, { period: 'W6', value: 79.8 },
      { period: 'W7', value: 87.3 }, { period: 'W8', value: 83.5 },
    ],
    missReasons: [
      { reason: 'Inventory sync lag vs platform', share: 29 },
      { reason: 'Platform-side stockout (FBA/seller-flex)', share: 25 },
      { reason: 'Content / listing suppression', share: 17 },
      { reason: 'Price parity violation lock', share: 16 },
      { reason: 'Return / COD refusal spike', share: 13 },
    ],
    networkLabel: 'Platform inventory health',
    networkMetricLabel: 'Sync lag',
    networkEntities: [
      { name: 'Amazon (FBA + seller-flex)', metric: 4, target: 2, note: 'hours, WMS to platform' },
      { name: 'Flipkart', metric: 6, target: 2, note: 'hours' },
      { name: 'Nykaa', metric: 3, target: 2, note: 'hours' },
      { name: 'BigBasket marketplace', metric: 8, target: 2, note: 'hours, flagged' },
      { name: 'Dabur.com (D2C)', metric: 1, target: 2, note: 'hours' },
    ],
    demandLabel: 'Forecast vs platform sell-through vs replenishment shipped',
    demandNote: 'Replenishment shipments lagging sell-through at BigBasket and Flipkart — the root of the buy-box losses above.',
    demandSeriesNames: ['Sell-through', 'Replenishment shipped'],
    demand: [
      { period: 'Apr', forecast: 100, a: 112, b: 101 }, { period: 'May', forecast: 100, a: 118, b: 104 },
      { period: 'Jun', forecast: 100, a: 109, b: 96 }, { period: 'Jul', forecast: 100, a: 121, b: 108 },
      { period: 'Aug', forecast: 100, a: 115, b: 99 }, { period: 'Sep', forecast: 100, a: 119, b: 103 },
    ],
  },

  qcom: {
    fulfillmentLabel: 'Dark-store fill rate',
    fulfillmentSub: 'Target 96% · order-level fill at time of demand',
    fulfillmentTarget: 96,
    fulfillmentDomain: [75, 100],
    trend: [
      { period: 'W1', value: 88.4 }, { period: 'W2', value: 85.1 }, { period: 'W3', value: 90.2 },
      { period: 'W4', value: 83.7 }, { period: 'W5', value: 91.5 }, { period: 'W6', value: 86.9 },
      { period: 'W7', value: 89.0 }, { period: 'W8', value: 84.6 },
    ],
    missReasons: [
      { reason: 'Dark-store stockout, no replen in window', share: 34 },
      { reason: 'Hyperlocal demand-allocation miss', share: 24 },
      { reason: 'Replenishment cycle > 6h SLA', share: 21 },
      { reason: 'New dark-store onboarding gap', share: 12 },
      { reason: 'Assortment mismatch by micro-market', share: 9 },
    ],
    networkLabel: 'Q-commerce partner replenishment',
    networkMetricLabel: 'Replen cycle',
    networkEntities: [
      { name: 'Blinkit', metric: 5, target: 4, note: 'hours, stockout to restock' },
      { name: 'Zepto', metric: 7, target: 4, note: 'hours, flagged' },
      { name: 'Swiggy Instamart', metric: 4, target: 4, note: 'hours' },
      { name: 'BBnow', metric: 8, target: 4, note: 'hours, flagged' },
      { name: 'Flipkart Minutes', metric: 6, target: 4, note: 'hours, new integration' },
    ],
    demandLabel: 'Forecast vs order velocity vs actual dispatch',
    demandNote: 'Order velocity spikes on weekends outrun dispatch capacity — the direct driver of dark-store stockouts.',
    demandSeriesNames: ['Order velocity', 'Actual dispatch'],
    demand: [
      { period: 'Apr', forecast: 100, a: 124, b: 106 }, { period: 'May', forecast: 100, a: 131, b: 110 },
      { period: 'Jun', forecast: 100, a: 118, b: 102 }, { period: 'Jul', forecast: 100, a: 137, b: 113 },
      { period: 'Aug', forecast: 100, a: 128, b: 108 }, { period: 'Sep', forecast: 100, a: 133, b: 111 },
    ],
  },
}
