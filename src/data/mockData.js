// Illustrative mock data only — modeled on Dabur's public category and plant
// footprint for realism, not actual operating figures.

export const plants = [
  { id: 'BAD', name: 'Baddi', state: 'Himachal Pradesh', categories: ['Healthcare', 'Home Care'], oee: 88, output: 412 },
  { id: 'ALW', name: 'Alwar', state: 'Rajasthan', categories: ['Foods', 'Beverages'], oee: 81, output: 356 },
  { id: 'NEW', name: 'Newai', state: 'Rajasthan', categories: ['Hair Care', 'Oral Care'], oee: 91, output: 298 },
  { id: 'JAM', name: 'Jammu', state: 'Jammu & Kashmir', categories: ['Personal Care'], oee: 76, output: 187 },
  { id: 'SIL', name: 'Silvassa', state: 'Dadra & Nagar Haveli', categories: ['Skin Care', 'Home Care'], oee: 84, output: 224 },
  { id: 'PIT', name: 'Pithampur', state: 'Madhya Pradesh', categories: ['Foods'], oee: 79, output: 165 },
]

export const skus = [
  { code: 'DHC-500', name: 'Dabur Honey 500g', category: 'Foods', plant: 'ALW', shelfLifeDays: 730 },
  { code: 'DCP-1K', name: 'Chyawanprash 1kg', category: 'Healthcare', plant: 'BAD', shelfLifeDays: 900 },
  { code: 'RJC-1L', name: 'Real Fruit Power Mixed Fruit 1L', category: 'Beverages', plant: 'ALW', shelfLifeDays: 270 },
  { code: 'VAT-AML-200', name: 'Vatika Amla Hair Oil 200ml', category: 'Hair Care', plant: 'NEW', shelfLifeDays: 1080 },
  { code: 'RED-150', name: 'Red Paste 150g', category: 'Oral Care', plant: 'NEW', shelfLifeDays: 1095 },
  { code: 'ODM-50', name: 'Odomos 50g', category: 'Personal Care', plant: 'JAM', shelfLifeDays: 1095 },
  { code: 'HAJ-120', name: 'Hajmola 120s', category: 'Healthcare', plant: 'BAD', shelfLifeDays: 730 },
  { code: 'GUL-250', name: 'Gulabari Rose Water 250ml', category: 'Skin Care', plant: 'SIL', shelfLifeDays: 730 },
]

export const depots = [
  { id: 'D-DEL', name: 'Ghaziabad CFA', region: 'North', doh: 18, target: 14, distributors: 142 },
  { id: 'D-MUM', name: 'Bhiwandi CFA', region: 'West', doh: 11, target: 14, distributors: 168 },
  { id: 'D-BLR', name: 'Hoskote CFA', region: 'South', doh: 21, target: 14, distributors: 155 },
  { id: 'D-KOL', name: 'Narendrapur CFA', region: 'East', doh: 9, target: 14, distributors: 98 },
  { id: 'D-GHY', name: 'Guwahati CFA', region: 'Northeast', doh: 26, target: 16, distributors: 47 },
]

export const otifTrend = [
  { week: 'W1', otif: 91.2, target: 95 },
  { week: 'W2', otif: 90.4, target: 95 },
  { week: 'W3', otif: 88.7, target: 95 },
  { week: 'W4', otif: 92.1, target: 95 },
  { week: 'W5', otif: 89.9, target: 95 },
  { week: 'W6', otif: 93.6, target: 95 },
  { week: 'W7', otif: 91.8, target: 95 },
  { week: 'W8', otif: 90.1, target: 95 },
]

export const missReasons = [
  { reason: 'Distributor credit block', share: 27, region: 'North' },
  { reason: 'Depot stockout', share: 24, region: 'East' },
  { reason: 'Transit delay > 48h', share: 19, region: 'Northeast' },
  { reason: 'Quality hold at depot', share: 12, region: 'West' },
  { reason: 'Short-shipped from plant', share: 11, region: 'South' },
  { reason: 'Billing / invoice error', share: 7, region: 'North' },
]

export const qualityBatches = [
  { batch: 'DHC-24118', sku: 'Dabur Honey 500g', plant: 'Alwar', status: 'Clear', complaints: 0, expiryRisk: 'Low' },
  { batch: 'RJC-24302', sku: 'Real Mixed Fruit 1L', plant: 'Alwar', status: 'Watch', complaints: 3, expiryRisk: 'Medium' },
  { batch: 'VAT-24087', sku: 'Vatika Amla Oil 200ml', plant: 'Newai', status: 'Clear', complaints: 0, expiryRisk: 'Low' },
  { batch: 'DCP-24041', sku: 'Chyawanprash 1kg', plant: 'Baddi', status: 'Hold', complaints: 8, expiryRisk: 'High' },
  { batch: 'RED-24219', sku: 'Red Paste 150g', plant: 'Newai', status: 'Clear', complaints: 1, expiryRisk: 'Low' },
]

export const demandSupply = [
  { month: 'Apr', forecast: 100, primary: 108, secondary: 94 },
  { month: 'May', forecast: 100, primary: 112, secondary: 91 },
  { month: 'Jun', forecast: 100, primary: 96, secondary: 98 },
  { month: 'Jul', forecast: 100, primary: 121, secondary: 89 },
  { month: 'Aug', forecast: 100, primary: 104, secondary: 101 },
  { month: 'Sep', forecast: 100, primary: 109, secondary: 96 },
]

export const exceptions = [
  { id: 'EX-1042', title: 'Chyawanprash batch DCP-24041 on quality hold', module: 'Quality', channel: 'All', impact: '₹1.8Cr exposure', age: '2d', severity: 'high' },
  { id: 'EX-1039', title: 'Guwahati CFA at 26 days DOH, 16-day target', module: 'Network', channel: 'GT', impact: '₹64L working capital', age: '5d', severity: 'medium' },
  { id: 'EX-1035', title: 'North GT distributor credit blocks up 27% WoW', module: 'OTIF', channel: 'GT', impact: '9,400 order lines stuck', age: '1d', severity: 'high' },
  { id: 'EX-1031', title: 'Real Fruit Power July primary sales 21% over forecast', module: 'Demand', channel: 'GT', impact: 'Phantom demand risk', age: '6d', severity: 'medium' },
  { id: 'EX-1028', title: 'Newai plant OEE recovered to 91%', module: 'Network', channel: 'All', impact: 'Resolved', age: '3d', severity: 'low' },
  { id: 'EX-1046', title: 'BigBasket marketplace inventory sync lag at 8 hours', module: 'Network', channel: 'E-Commerce', impact: 'Buy-box losses on 40 SKUs', age: '1d', severity: 'high' },
  { id: 'EX-1044', title: 'Zepto and BBnow replenishment cycle breaching 4h SLA', module: 'OTIF', channel: 'Quick Commerce', impact: 'Dark-store stockouts rising', age: '2d', severity: 'high' },
  { id: 'EX-1040', title: 'DMart fill rate at 91%, deduction disputes open', module: 'OTIF', channel: 'Modern Trade', impact: '₹22L in disputed claims', age: '4d', severity: 'medium' },
]

export const kpis = [
  { label: 'Network OTIF', value: '91.1%', delta: '-2.1 pt WoW', trend: 'down' },
  { label: 'Perfect order value at risk', value: '₹6.4Cr', delta: '+₹1.2Cr WoW', trend: 'up-bad' },
  { label: 'Avg. depot DOH', value: '17.0 days', delta: 'vs 14.4 target', trend: 'down' },
  { label: 'Batches on quality hold', value: '1', delta: '₹1.8Cr exposure', trend: 'flat' },
  { label: 'Forecast bias (primary)', value: '+8.3%', delta: 'trade loading signal', trend: 'up-bad' },
]
