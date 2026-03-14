// =====================================================
// Mall Wayfinding App
// =====================================================

// ---- Data ----
const KIOSK = { x: 0.5, y: 0.85, floor: 1, label: 'Main Entrance' };

const CATEGORIES = {
  fashion: { label: 'Fashion', color: '#e91e8c', bg: '#2e1a2a' },
  food: { label: 'Food & Dining', color: '#ff9800', bg: '#2e2218' },
  electronics: { label: 'Electronics', color: '#2196f3', bg: '#18222e' },
  beauty: { label: 'Beauty', color: '#e040fb', bg: '#2a1a2e' },
  sports: { label: 'Sports', color: '#4caf50', bg: '#1a2e1a' },
  home: { label: 'Home & Garden', color: '#8bc34a', bg: '#1e2a18' },
  entertainment: { label: 'Entertainment', color: '#ff5722', bg: '#2e1e18' },
  services: { label: 'Services', color: '#00bcd4', bg: '#182a2e' },
  jewelry: { label: 'Jewelry', color: '#ffd700', bg: '#2e2a18' },
  kids: { label: 'Kids', color: '#ff80ab', bg: '#2e1e24' },
  books: { label: 'Books & Media', color: '#9c27b0', bg: '#22182e' }
};

const STORES = [
  // Floor 1
  { id: 1, name: 'Zara', category: 'fashion', floor: 1, unit: 'A101', icon: '👗', hours: '10am–9pm', phone: '(555) 201-1001', desc: 'Latest fashion trends for men, women, and kids.', promo: 'Spring Sale — 30% off selected items!', rating: 4.2, reviews: 324, x: 0.18, y: 0.25 },
  { id: 2, name: 'H&M', category: 'fashion', floor: 1, unit: 'A102', icon: '👔', hours: '10am–9pm', phone: '(555) 201-1002', desc: 'Affordable fashion for every style and budget.', rating: 4.0, reviews: 215, x: 0.32, y: 0.25 },
  { id: 3, name: 'Apple Store', category: 'electronics', floor: 1, unit: 'B105', icon: '🍎', hours: '10am–9pm', phone: '(555) 201-1003', desc: 'iPhone, iPad, Mac and accessories. Genius Bar available.', promo: 'Trade-in your old device for credit!', rating: 4.8, reviews: 892, x: 0.72, y: 0.22 },
  { id: 4, name: 'McDonald\'s', category: 'food', floor: 1, unit: 'FC-01', icon: '🍔', hours: '9am–10pm', phone: '(555) 201-1004', desc: 'Classic fast food burgers, fries and more.', rating: 3.8, reviews: 156, x: 0.20, y: 0.62 },
  { id: 5, name: 'Starbucks', category: 'food', floor: 1, unit: 'FC-02', icon: '☕', hours: '7am–9pm', phone: '(555) 201-1005', desc: 'Premium coffee, teas, and snacks.', rating: 4.3, reviews: 489, x: 0.52, y: 0.65 },
  { id: 6, name: 'Sephora', category: 'beauty', floor: 1, unit: 'A108', icon: '💄', hours: '10am–9pm', phone: '(555) 201-1006', desc: 'Makeup, skincare, fragrance and beauty tools.', promo: 'Free gift with $50 purchase!', rating: 4.6, reviews: 631, x: 0.42, y: 0.25 },
  { id: 7, name: 'The Body Shop', category: 'beauty', floor: 1, unit: 'A109', icon: '🌿', hours: '10am–9pm', phone: '(555) 201-1007', desc: 'Natural beauty and skincare products.', rating: 4.4, reviews: 278, x: 0.57, y: 0.25 },
  { id: 8, name: 'ATM & Currency Exchange', category: 'services', floor: 1, unit: 'S-01', icon: '💳', hours: '24/7', phone: '', desc: 'Multiple ATMs and currency exchange services.', rating: null, reviews: 0, x: 0.80, y: 0.65 },
  { id: 9, name: 'Information Desk', category: 'services', floor: 1, unit: 'S-02', icon: '🛎️', hours: '10am–9pm', phone: '(555) 123-4567', desc: 'Friendly staff to help you find your way around.', rating: 4.9, reviews: 112, x: 0.50, y: 0.78 },
  { id: 10, name: 'Foot Locker', category: 'sports', floor: 1, unit: 'A115', icon: '👟', hours: '10am–9pm', phone: '(555) 201-1010', desc: 'Athletic footwear and apparel.', rating: 4.1, reviews: 203, x: 0.68, y: 0.40 },
  { id: 11, name: 'Swarovski', category: 'jewelry', floor: 1, unit: 'A118', icon: '💎', hours: '10am–8pm', phone: '(555) 201-1011', desc: 'Crystal jewelry and accessories.', rating: 4.5, reviews: 167, x: 0.30, y: 0.45 },

  // Floor 2
  { id: 12, name: 'Nike', category: 'fashion', floor: 2, unit: 'B201', icon: '👟', hours: '10am–9pm', phone: '(555) 201-2001', desc: 'Athletic apparel, footwear and equipment.', promo: 'Members get 20% off this week!', rating: 4.5, reviews: 541, x: 0.20, y: 0.22 },
  { id: 13, name: 'Adidas', category: 'sports', floor: 2, unit: 'B202', icon: '⚽', hours: '10am–9pm', phone: '(555) 201-2002', desc: 'Sports clothing, shoes and accessories.', rating: 4.3, reviews: 412, x: 0.38, y: 0.22 },
  { id: 14, name: 'Levi\'s', category: 'fashion', floor: 2, unit: 'B205', icon: '👖', hours: '10am–9pm', phone: '(555) 201-2005', desc: 'Classic denim jeans and clothing.', rating: 4.2, reviews: 189, x: 0.58, y: 0.22 },
  { id: 15, name: 'Pandora', category: 'jewelry', floor: 2, unit: 'B208', icon: '💍', hours: '10am–8pm', phone: '(555) 201-2008', desc: 'Personalized charm bracelets and jewelry.', promo: 'Engrave for free on bracelets over $80!', rating: 4.4, reviews: 256, x: 0.75, y: 0.30 },
  { id: 16, name: 'LEGO Store', category: 'kids', floor: 2, unit: 'B210', icon: '🧱', hours: '10am–9pm', phone: '(555) 201-2010', desc: 'LEGO sets for all ages. Build your imagination.', rating: 4.9, reviews: 732, x: 0.20, y: 0.55 },
  { id: 17, name: 'Disney Store', category: 'kids', floor: 2, unit: 'B211', icon: '🏰', hours: '10am–9pm', phone: '(555) 201-2011', desc: 'Disney merchandise, toys and clothing.', rating: 4.7, reviews: 598, x: 0.40, y: 0.55 },
  { id: 18, name: 'Bath & Body Works', category: 'beauty', floor: 2, unit: 'B215', icon: '🛁', hours: '10am–9pm', phone: '(555) 201-2015', desc: 'Candles, lotions and body care.', promo: 'Buy 3, get 3 free on hand soaps!', rating: 4.6, reviews: 445, x: 0.60, y: 0.55 },
  { id: 19, name: 'Food Court — Level 2', category: 'food', floor: 2, unit: 'FC-2', icon: '🍽️', hours: '10am–9pm', phone: '', desc: 'Multiple dining options in a spacious food court.', rating: 4.0, reviews: 321, x: 0.50, y: 0.75 },
  { id: 20, name: 'Photo Studio', category: 'services', floor: 2, unit: 'S-201', icon: '📷', hours: '11am–7pm', phone: '(555) 201-2020', desc: 'Professional photo shoots and passport photos.', rating: 4.3, reviews: 88, x: 0.80, y: 0.65 },

  // Floor 3
  { id: 21, name: 'Samsung Experience', category: 'electronics', floor: 3, unit: 'C301', icon: '📱', hours: '10am–9pm', phone: '(555) 201-3001', desc: 'Samsung phones, tablets, TVs and home appliances.', promo: 'Galaxy S26 now available!', rating: 4.4, reviews: 367, x: 0.22, y: 0.22 },
  { id: 22, name: 'Media Markt', category: 'electronics', floor: 3, unit: 'C305', icon: '💻', hours: '10am–9pm', phone: '(555) 201-3005', desc: 'Electronics, laptops, cameras and more.', rating: 4.1, reviews: 284, x: 0.55, y: 0.22 },
  { id: 23, name: 'Cineplex Cinema', category: 'entertainment', floor: 3, unit: 'C310', icon: '🎬', hours: '11am–11pm', phone: '(555) 201-3010', desc: '8-screen cinema showing the latest releases.', promo: 'Tuesday 2-for-1 tickets!', rating: 4.6, reviews: 1241, x: 0.72, y: 0.40 },
  { id: 24, name: 'Timezone Arcade', category: 'entertainment', floor: 3, unit: 'C315', icon: '🎮', hours: '10am–10pm', phone: '(555) 201-3015', desc: 'Fun-filled arcade with prizes, VR experiences and more.', rating: 4.4, reviews: 856, x: 0.25, y: 0.55 },
  { id: 25, name: 'Chapters Indigo', category: 'books', floor: 3, unit: 'C320', icon: '📚', hours: '10am–8pm', phone: '(555) 201-3020', desc: 'Books, stationery, gifts and more.', rating: 4.7, reviews: 422, x: 0.50, y: 0.55 },
  { id: 26, name: 'IKEA Shop', category: 'home', floor: 3, unit: 'C325', icon: '🪑', hours: '10am–9pm', phone: '(555) 201-3025', desc: 'Home furnishings, storage and décor.', rating: 4.2, reviews: 314, x: 0.75, y: 0.55 },
  { id: 27, name: 'Sky Terrace', category: 'food', floor: 3, unit: 'REST-3', icon: '🌅', hours: '11am–10pm', phone: '(555) 201-3030', desc: 'Rooftop dining with panoramic city views.', promo: 'Happy hour 4–7pm daily!', rating: 4.8, reviews: 567, x: 0.50, y: 0.75 },
  { id: 28, name: 'Gym & Fitness', category: 'sports', floor: 3, unit: 'C340', icon: '💪', hours: '6am–10pm', phone: '(555) 201-3040', desc: 'State-of-the-art gym with personal trainers.', rating: 4.5, reviews: 193, x: 0.22, y: 0.75 },
];

// ---- State ----
const state = {
  currentFloor: 1,
  selectedStore: null,
  hoveredStore: null,
  activeCategory: 'all',
  favorites: new Set(JSON.parse(localStorage.getItem('mallFavorites') || '[]')),
  searchQuery: '',
  showRoute: false,
  zoom: 1,
  panX: 0,
  panY: 0,
  isDragging: false,
  dragStartX: 0,
  dragStartY: 0,
  panStartX: 0,
  panStartY: 0,
};

// ---- DOM References ----
const canvas = document.getElementById('mallMap');
const ctx = canvas.getContext('2d');
const mapWrapper = document.getElementById('mapWrapper');
const storeList = document.getElementById('storeList');
const detailPanel = document.getElementById('detailPanel');
const detailContent = document.getElementById('detailContent');
const tooltip = document.getElementById('storeTooltip');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const clearSearchBtn = document.getElementById('clearSearch');
const currentFloorLabel = document.getElementById('currentFloorLabel');

// ---- Canvas Setup ----
function resizeCanvas() {
  const rect = mapWrapper.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  drawMap();
}

// ---- Map Drawing ----
const FLOOR_COLORS = {
  1: { bg: '#0e1f1e', wall: '#1a3530', accent: '#00b7af' },
  2: { bg: '#0e1a2a', wall: '#1a2e45', accent: '#2196f3' },
  3: { bg: '#1a0e2a', wall: '#2e1a45', accent: '#9c27b0' }
};

function worldToScreen(wx, wy) {
  const sx = wx * canvas.width * state.zoom + state.panX;
  const sy = wy * canvas.height * state.zoom + state.panY;
  return { x: sx, y: sy };
}

function screenToWorld(sx, sy) {
  const wx = (sx - state.panX) / (canvas.width * state.zoom);
  const wy = (sy - state.panY) / (canvas.height * state.zoom);
  return { x: wx, y: wy };
}

function drawMap() {
  const W = canvas.width;
  const H = canvas.height;
  const f = state.currentFloor;
  const colors = FLOOR_COLORS[f];

  ctx.clearRect(0, 0, W, H);

  ctx.save();
  ctx.translate(state.panX, state.panY);
  ctx.scale(state.zoom * W, state.zoom * H);

  // Background
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, 1, 1);

  // Grid pattern
  ctx.strokeStyle = 'rgba(255,255,255,0.03)';
  ctx.lineWidth = 0.001;
  for (let i = 0; i <= 20; i++) {
    ctx.beginPath(); ctx.moveTo(i / 20, 0); ctx.lineTo(i / 20, 1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, i / 20); ctx.lineTo(1, i / 20); ctx.stroke();
  }

  // Draw floor layout based on current floor
  drawFloorLayout(f, colors);

  // Draw route if active
  if (state.showRoute && state.selectedStore) {
    drawRoute(state.selectedStore);
  }

  // Draw stores
  const visible = STORES.filter(s => s.floor === f);
  visible.forEach(store => drawStore(store, colors));

  // Draw kiosk marker (only on floor 1)
  if (f === 1) {
    drawKiosk();
  }

  ctx.restore();
}

function drawFloorLayout(floor, colors) {
  // Outer mall boundary
  const r = 0.025;
  roundRect(ctx, 0.05, 0.05, 0.9, 0.9, r);
  ctx.fillStyle = colors.wall;
  ctx.fill();

  ctx.strokeStyle = colors.accent + '44';
  ctx.lineWidth = 0.004;
  ctx.stroke();

  // Interior corridors / common areas
  ctx.fillStyle = colors.bg;

  if (floor === 1) {
    // Main corridor (horizontal)
    ctx.fillRect(0.12, 0.45, 0.76, 0.12);
    // Wing corridors
    ctx.fillRect(0.12, 0.15, 0.08, 0.72);
    ctx.fillRect(0.80, 0.15, 0.08, 0.72);
    ctx.fillRect(0.12, 0.82, 0.76, 0.08);

    // Central atrium
    roundRect(ctx, 0.35, 0.35, 0.30, 0.28, 0.02);
    ctx.fillStyle = colors.wall + 'aa';
    ctx.fill();
    ctx.strokeStyle = colors.accent + '66';
    ctx.lineWidth = 0.003;
    ctx.stroke();

    // Atrium label
    ctx.fillStyle = colors.accent + 'aa';
    ctx.font = 'bold 0.022px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ATRIUM', 0.50, 0.497);
    ctx.font = '0.016px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillText('Level 1', 0.50, 0.515);

    // Food court area
    roundRect(ctx, 0.14, 0.56, 0.72, 0.16, 0.015);
    ctx.fillStyle = 'rgba(255,152,0,0.08)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,152,0,0.2)';
    ctx.lineWidth = 0.002;
    ctx.stroke();
    ctx.fillStyle = 'rgba(255,152,0,0.5)';
    ctx.font = '0.016px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('FOOD COURT', 0.50, 0.647);

    // Entrance markers
    drawEntrance(0.50, 0.92, 'MAIN ENTRANCE', colors.accent);
    drawEntrance(0.50, 0.08, 'NORTH ENTRANCE', colors.accent);
    drawEntrance(0.09, 0.50, 'WEST', colors.accent);
    drawEntrance(0.91, 0.50, 'EAST', colors.accent);

    // Escalators
    drawEscalator(0.36, 0.47, colors);
    drawEscalator(0.64, 0.47, colors);

    // Restrooms
    drawRestroom(0.14, 0.47, colors);
    drawRestroom(0.82, 0.47, colors);

  } else if (floor === 2) {
    ctx.fillRect(0.12, 0.38, 0.76, 0.12);
    ctx.fillRect(0.12, 0.15, 0.08, 0.70);
    ctx.fillRect(0.80, 0.15, 0.08, 0.70);

    roundRect(ctx, 0.35, 0.35, 0.30, 0.20, 0.02);
    ctx.fillStyle = colors.wall + 'aa';
    ctx.fill();
    ctx.strokeStyle = colors.accent + '66';
    ctx.lineWidth = 0.003;
    ctx.stroke();

    ctx.fillStyle = colors.accent + 'aa';
    ctx.font = 'bold 0.022px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('OPEN ATRIUM', 0.50, 0.447);
    ctx.font = '0.016px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillText('Level 2', 0.50, 0.462);

    drawEscalator(0.36, 0.40, colors);
    drawEscalator(0.64, 0.40, colors);
    drawRestroom(0.14, 0.42, colors);
    drawRestroom(0.82, 0.42, colors);

  } else if (floor === 3) {
    ctx.fillRect(0.12, 0.38, 0.76, 0.12);
    ctx.fillRect(0.12, 0.15, 0.08, 0.70);
    ctx.fillRect(0.80, 0.15, 0.08, 0.70);

    roundRect(ctx, 0.38, 0.35, 0.24, 0.18, 0.02);
    ctx.fillStyle = colors.wall + 'aa';
    ctx.fill();
    ctx.strokeStyle = colors.accent + '66';
    ctx.lineWidth = 0.003;
    ctx.stroke();

    ctx.fillStyle = colors.accent + 'aa';
    ctx.font = 'bold 0.02px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('SKYLIGHT', 0.50, 0.445);
    ctx.font = '0.015px sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillText('Level 3', 0.50, 0.458);

    drawEscalator(0.36, 0.40, colors);
    drawEscalator(0.64, 0.40, colors);
    drawRestroom(0.14, 0.42, colors);
    drawRestroom(0.82, 0.42, colors);
  }
}

function drawEntrance(x, y, label, color) {
  ctx.fillStyle = color + '33';
  ctx.strokeStyle = color + '88';
  ctx.lineWidth = 0.003;
  ctx.beginPath();
  ctx.arc(x, y, 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = color;
  ctx.font = 'bold 0.013px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, x, y);
}

function drawEscalator(x, y, colors) {
  ctx.fillStyle = colors.accent + '33';
  ctx.strokeStyle = colors.accent + '88';
  ctx.lineWidth = 0.002;
  roundRect(ctx, x - 0.025, y - 0.015, 0.05, 0.03, 0.005);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = colors.accent;
  ctx.font = '0.012px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ESC', x, y);
}

function drawRestroom(x, y, colors) {
  ctx.fillStyle = 'rgba(33,150,243,0.12)';
  ctx.strokeStyle = 'rgba(33,150,243,0.4)';
  ctx.lineWidth = 0.002;
  roundRect(ctx, x - 0.025, y - 0.02, 0.05, 0.04, 0.005);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = 'rgba(33,150,243,0.9)';
  ctx.font = '0.012px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('WC', x, y);
}

function drawStore(store, colors) {
  const { x, y } = store;
  const isSelected = state.selectedStore?.id === store.id;
  const isHovered = state.hoveredStore?.id === store.id;
  const cat = CATEGORIES[store.category];

  const sz = 0.055;
  const sx = x - sz / 2;
  const sy = y - sz / 2;

  // Shadow
  if (isSelected || isHovered) {
    ctx.shadowColor = isSelected ? cat.color : 'rgba(255,255,255,0.3)';
    ctx.shadowBlur = isSelected ? 20 : 10;
  }

  // Store background
  roundRect(ctx, sx, sy, sz, sz, 0.01);
  if (isSelected) {
    const grad = ctx.createLinearGradient(sx, sy, sx + sz, sy + sz);
    grad.addColorStop(0, cat.color + 'dd');
    grad.addColorStop(1, cat.color + 'aa');
    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = isHovered ? cat.bg.replace(')', ', 0.9)').replace('rgb', 'rgba') : cat.bg;
    ctx.fillStyle = cat.bg;
  }
  ctx.fill();

  // Border
  ctx.strokeStyle = isSelected ? cat.color : (isHovered ? cat.color + 'aa' : cat.color + '55');
  ctx.lineWidth = isSelected ? 0.004 : 0.002;
  roundRect(ctx, sx, sy, sz, sz, 0.01);
  ctx.stroke();

  ctx.shadowBlur = 0;

  // Icon
  ctx.font = `${sz * 0.5}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(store.icon, x, y - sz * 0.06);

  // Name
  ctx.fillStyle = isSelected ? '#fff' : (isHovered ? '#fff' : 'rgba(255,255,255,0.75)');
  ctx.font = `bold ${sz * 0.22}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const maxW = sz * 0.9;
  const shortName = store.name.length > 8 ? store.name.substring(0, 7) + '…' : store.name;
  ctx.fillText(shortName, x, y + sz * 0.3);

  // Unit badge
  ctx.fillStyle = isSelected ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.08)';
  roundRect(ctx, sx + sz * 0.1, sy + sz * 0.75, sz * 0.8, sz * 0.18, 0.005);
  ctx.fill();
  ctx.fillStyle = isSelected ? '#fff' : cat.color + 'cc';
  ctx.font = `${sz * 0.16}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(store.unit, x, sy + sz * 0.84);
}

function drawKiosk() {
  const { x, y } = KIOSK;
  const sz = 0.05;
  const time = Date.now() / 1000;
  const pulse = 0.5 + 0.5 * Math.sin(time * 2);

  // Pulse ring
  ctx.beginPath();
  ctx.arc(x, y, sz * 0.7 + pulse * sz * 0.3, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(0,183,175,${0.15 + pulse * 0.2})`;
  ctx.lineWidth = 0.003;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(x, y, sz * 0.5, 0, Math.PI * 2);
  ctx.fillStyle = 'rgba(0,183,175,0.2)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,183,175,0.8)';
  ctx.lineWidth = 0.004;
  ctx.stroke();

  ctx.fillStyle = '#00b7af';
  ctx.font = `bold ${sz * 0.45}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('YOU', x, y - sz * 0.08);
  ctx.fillText('ARE', x, y + sz * 0.10);
  ctx.fillText('HERE', x, y + sz * 0.28);

  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.font = `${sz * 0.25}px sans-serif`;
  ctx.fillText('📍', x, y - sz * 0.35);
}

function drawRoute(store) {
  if (store.floor !== state.currentFloor) return;

  const start = KIOSK;
  const end = store;

  // Animated dashed path
  const time = Date.now() / 500;
  ctx.save();
  ctx.setLineDash([0.025, 0.015]);
  ctx.lineDashOffset = -time % 0.04;

  ctx.beginPath();
  ctx.moveTo(start.x, start.y);

  // Simple bezier curve path
  const cx = (start.x + end.x) / 2;
  const cy = Math.min(start.y, end.y) - 0.1;
  ctx.quadraticCurveTo(cx, cy, end.x, end.y);

  ctx.strokeStyle = 'rgba(0,183,175,0.8)';
  ctx.lineWidth = 0.005;
  ctx.lineCap = 'round';
  ctx.stroke();

  ctx.restore();

  // Distance markers along path
  for (let t = 0.2; t < 1; t += 0.3) {
    const bx = (1-t)*(1-t)*start.x + 2*(1-t)*t*cx + t*t*end.x;
    const by = (1-t)*(1-t)*start.y + 2*(1-t)*t*cy + t*t*end.y;
    ctx.beginPath();
    ctx.arc(bx, by, 0.008, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,183,175,0.5)';
    ctx.fill();
  }
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

// ---- Animation Loop ----
let animFrame;
function startAnimation() {
  function loop() {
    drawMap();
    animFrame = requestAnimationFrame(loop);
  }
  loop();
}

// ---- Store List ----
function getFilteredStores() {
  return STORES.filter(s => {
    const matchFloor = s.floor === state.currentFloor;
    const matchCat = state.activeCategory === 'all' || s.category === state.activeCategory;
    const matchSearch = state.searchQuery === '' ||
      s.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchFloor && matchCat && matchSearch;
  });
}

function renderStoreList() {
  const stores = getFilteredStores();
  storeList.innerHTML = '';

  if (stores.length === 0) {
    storeList.innerHTML = '<div class="empty-state" style="padding:30px"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>No stores found</p></div>';
    return;
  }

  const header = document.createElement('div');
  header.className = 'store-list-header';
  header.textContent = `${stores.length} store${stores.length !== 1 ? 's' : ''} on floor ${state.currentFloor}`;
  storeList.appendChild(header);

  stores.forEach(store => {
    const cat = CATEGORIES[store.category];
    const item = document.createElement('div');
    item.className = 'store-item' + (state.selectedStore?.id === store.id ? ' active' : '');
    item.dataset.storeId = store.id;

    const isFav = state.favorites.has(store.id);

    item.innerHTML = `
      <div class="store-item-icon" style="background:${cat.bg};border:1px solid ${cat.color}44">${store.icon}</div>
      <div class="store-item-info">
        <div class="store-item-name">${store.name}</div>
        <div class="store-item-meta">${cat.label} · ${store.unit}</div>
      </div>
      <span class="store-item-floor">F${store.floor}</span>
      <button class="fav-btn ${isFav ? 'active' : ''}" data-store-id="${store.id}" title="${isFav ? 'Remove from saved' : 'Save store'}">
        <svg viewBox="0 0 24 24" fill="${isFav ? '#ff6b8a' : 'none'}" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>
    `;

    item.addEventListener('click', (e) => {
      if (e.target.closest('.fav-btn')) return;
      selectStore(store);
    });

    item.querySelector('.fav-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(store.id);
    });

    storeList.appendChild(item);
  });
}

// ---- Store Selection ----
function selectStore(store) {
  state.selectedStore = store;
  state.showRoute = false;

  // Switch floor if needed
  if (store.floor !== state.currentFloor) {
    setFloor(store.floor);
  }

  // Pan to store
  panToStore(store);

  // Update list
  renderStoreList();

  // Show detail panel
  showDetail(store);
}

function panToStore(store) {
  const W = canvas.width;
  const H = canvas.height;
  state.panX = W / 2 - store.x * W * state.zoom;
  state.panY = H / 2 - store.y * H * state.zoom;
}

// ---- Detail Panel ----
function showDetail(store) {
  const cat = CATEGORIES[store.category];
  const isFav = state.favorites.has(store.id);
  const isOpen = isStoreOpen(store.hours);
  const stars = store.rating ? renderStars(store.rating) : '';

  const routeSteps = getRouteSteps(store);

  detailContent.innerHTML = `
    <div class="detail-store-header">
      <div class="detail-store-banner" style="background:linear-gradient(135deg,${cat.bg},${cat.color}22)">
        <span style="position:relative;z-index:1;font-size:56px">${store.icon}</span>
        <button class="detail-fav-btn ${isFav ? 'active' : ''}" id="detailFavBtn">
          <svg viewBox="0 0 24 24" fill="${isFav ? '#ff6b8a' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          ${isFav ? 'Saved' : 'Save'}
        </button>
      </div>
      <h2 class="detail-store-name">${store.name}</h2>
      <div class="detail-tags">
        <span class="detail-tag" style="color:${cat.color};background:${cat.bg};border-color:${cat.color}44">${cat.label}</span>
        <span class="detail-tag floor">Floor ${store.floor} · ${store.unit}</span>
        ${store.rating ? `<span class="detail-tag" style="background:rgba(255,215,0,0.1);color:#ffd700;border-color:rgba(255,215,0,0.2)">★ ${store.rating} (${store.reviews})</span>` : ''}
      </div>
      ${store.rating ? `<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">${stars}<span class="rating-text">${store.reviews} reviews</span></div>` : ''}
    </div>

    ${store.promo ? `
    <div class="detail-section">
      <div class="promo-banner">
        <span class="promo-icon">🎉</span>
        <div class="promo-text">
          <h4>Current Promotion</h4>
          <p>${store.promo}</p>
        </div>
      </div>
    </div>` : ''}

    <div class="detail-section">
      <div class="detail-section-title">Store Info</div>
      <div class="detail-info-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span>${store.hours}</span>
        <span class="open-badge ${isOpen ? '' : 'closed'}">${isOpen ? 'OPEN NOW' : 'CLOSED'}</span>
      </div>
      ${store.phone ? `<div class="detail-info-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.93h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z"/></svg>
        <span>${store.phone}</span>
      </div>` : ''}
      <div class="detail-info-row">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>${store.desc}</span>
      </div>
    </div>

    <div class="detail-section">
      <button class="directions-btn" id="getDirectionsBtn">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        ${state.showRoute ? 'Hide Route' : 'Get Directions'}
      </button>
    </div>

    ${state.showRoute ? `
    <div class="detail-section">
      <div class="detail-section-title">Route from Main Entrance</div>
      ${routeSteps.map((step, i) => `
        <div class="route-step">
          <div class="step-num">${i + 1}</div>
          <div class="step-text">${step}</div>
        </div>
      `).join('')}
    </div>` : ''}

    <div class="detail-section">
      <div class="detail-section-title">Nearby Amenities</div>
      <div class="amenity-grid">
        <div class="amenity-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg><span>Escalator</span></div>
        <div class="amenity-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6z"/><path d="M12 13v8"/><path d="M12 3v3"/></svg><span>Restrooms</span></div>
        <div class="amenity-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg><span>ATM Nearby</span></div>
        <div class="amenity-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-8 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/></svg><span>Parking</span></div>
      </div>
    </div>
  `;

  detailPanel.classList.remove('hidden');

  // Bind buttons
  document.getElementById('getDirectionsBtn')?.addEventListener('click', () => {
    state.showRoute = !state.showRoute;
    showDetail(store);
  });

  document.getElementById('detailFavBtn')?.addEventListener('click', () => {
    toggleFavorite(store.id);
    showDetail(store);
  });
}

function getRouteSteps(store) {
  const steps = [];
  if (store.floor === 1) {
    steps.push(`Start at the <strong>Main Entrance</strong> (where you are now)`);
    steps.push(`Head toward the <strong>Central Atrium</strong>`);
    steps.push(`${store.name} is located at <strong>Unit ${store.unit}</strong>, ${estimateDirection(store)}`);
  } else {
    steps.push(`Start at the <strong>Main Entrance</strong> (where you are now)`);
    steps.push(`Walk toward the <strong>Central Atrium</strong>`);
    steps.push(`Take the <strong>escalator up to Floor ${store.floor}</strong>`);
    steps.push(`${store.name} is located at <strong>Unit ${store.unit}</strong>, ${estimateDirection(store)}`);
  }
  return steps;
}

function estimateDirection(store) {
  const dirs = [];
  if (store.x < 0.35) dirs.push('west wing');
  else if (store.x > 0.65) dirs.push('east wing');
  else dirs.push('center area');
  if (store.y < 0.35) dirs.push('north side');
  else if (store.y > 0.65) dirs.push('south side');
  return dirs.join(', ');
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '<div class="rating-stars">';
  for (let i = 0; i < 5; i++) {
    if (i < full) html += '<span class="star">★</span>';
    else if (i === full && half) html += '<span class="star">⭐</span>';
    else html += '<span class="star empty">☆</span>';
  }
  html += '</div>';
  return html;
}

function isStoreOpen(hours) {
  if (hours === '24/7') return true;
  const now = new Date();
  const h = now.getHours();
  const parts = hours.match(/(\d+)(am|pm)[–-](\d+)(am|pm)/i);
  if (!parts) return true;
  let open = parseInt(parts[1]);
  let close = parseInt(parts[3]);
  if (parts[2].toLowerCase() === 'pm' && open !== 12) open += 12;
  if (parts[4].toLowerCase() === 'pm' && close !== 12) close += 12;
  if (parts[2].toLowerCase() === 'am' && open === 12) open = 0;
  return h >= open && h < close;
}

// ---- Favorites ----
function toggleFavorite(storeId) {
  if (state.favorites.has(storeId)) {
    state.favorites.delete(storeId);
  } else {
    state.favorites.add(storeId);
  }
  localStorage.setItem('mallFavorites', JSON.stringify([...state.favorites]));
  renderStoreList();
  renderFavorites();
}

function renderFavorites() {
  const favList = document.getElementById('favoritesList');
  const favStores = STORES.filter(s => state.favorites.has(s.id));

  if (favStores.length === 0) {
    favList.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
      <p>Tap the heart icon on any store to save it here</p>
    </div>`;
    return;
  }

  favList.innerHTML = '';
  favStores.forEach(store => {
    const cat = CATEGORIES[store.category];
    const item = document.createElement('div');
    item.className = 'store-item';
    item.innerHTML = `
      <div class="store-item-icon" style="background:${cat.bg};border:1px solid ${cat.color}44">${store.icon}</div>
      <div class="store-item-info">
        <div class="store-item-name">${store.name}</div>
        <div class="store-item-meta">Floor ${store.floor} · ${store.unit}</div>
      </div>
      <span class="store-item-floor">F${store.floor}</span>
    `;
    item.addEventListener('click', () => selectStore(store));
    favList.appendChild(item);
  });
}

// ---- Floor ----
function setFloor(floor) {
  state.currentFloor = floor;
  state.panX = 0;
  state.panY = 0;
  currentFloorLabel.textContent = floor;

  // Update floor buttons in sidebar
  document.querySelectorAll('.floor-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.floor) === floor);
  });

  renderStoreList();
}

// ---- Search ----
function handleSearch(query) {
  state.searchQuery = query;
  clearSearchBtn.style.display = query ? 'flex' : 'none';

  if (!query) {
    searchResults.style.display = 'none';
    renderStoreList();
    return;
  }

  const results = STORES.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    CATEGORIES[s.category].label.toLowerCase().includes(query.toLowerCase()) ||
    s.unit.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 8);

  if (results.length === 0) {
    searchResults.innerHTML = '<div style="padding:16px;text-align:center;color:#6a7071;font-size:13px">No results found</div>';
  } else {
    searchResults.innerHTML = results.map(store => {
      const cat = CATEGORIES[store.category];
      return `
        <div class="search-result-item" data-store-id="${store.id}">
          <div class="search-result-icon" style="background:${cat.bg};border:1px solid ${cat.color}44">${store.icon}</div>
          <div class="search-result-info">
            <div class="search-result-name">${highlightMatch(store.name, query)}</div>
            <div class="search-result-meta">${cat.label} · ${store.unit}</div>
          </div>
          <span class="search-result-floor">F${store.floor}</span>
        </div>
      `;
    }).join('');

    searchResults.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const store = STORES.find(s => s.id === parseInt(item.dataset.storeId));
        if (store) {
          selectStore(store);
          searchInput.value = store.name;
          clearSearchBtn.style.display = 'flex';
          searchResults.style.display = 'none';
        }
      });
    });
  }

  searchResults.style.display = 'block';
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return text.substring(0, idx) +
    `<strong style="color:#00b7af">${text.substring(idx, idx + query.length)}</strong>` +
    text.substring(idx + query.length);
}

// ---- Mouse/Touch Interactions on Canvas ----
function getStoreAtPoint(wx, wy) {
  const sz = 0.055;
  return STORES.find(s =>
    s.floor === state.currentFloor &&
    wx >= s.x - sz/2 && wx <= s.x + sz/2 &&
    wy >= s.y - sz/2 && wy <= s.y + sz/2
  ) || null;
}

canvas.addEventListener('mousemove', (e) => {
  if (state.isDragging) {
    state.panX = state.panStartX + (e.clientX - state.dragStartX);
    state.panY = state.panStartY + (e.clientY - state.dragStartY);
    return;
  }

  const rect = canvas.getBoundingClientRect();
  const wx = (e.clientX - rect.left - state.panX) / (canvas.width * state.zoom);
  const wy = (e.clientY - rect.top - state.panY) / (canvas.height * state.zoom);

  const store = getStoreAtPoint(wx, wy);
  state.hoveredStore = store;

  if (store) {
    canvas.style.cursor = 'pointer';
    const sx = store.x * canvas.width * state.zoom + state.panX;
    const sy = store.y * canvas.height * state.zoom + state.panY;
    const cat = CATEGORIES[store.category];
    tooltip.style.display = 'block';
    tooltip.style.left = (sx + 30) + 'px';
    tooltip.style.top = (sy - 20) + 'px';
    tooltip.innerHTML = `
      <div class="tooltip-name">${store.name}</div>
      <div class="tooltip-meta">${cat.label}</div>
      <span class="tooltip-floor">Floor ${store.floor} · ${store.unit}</span>
    `;
  } else {
    canvas.style.cursor = state.isDragging ? 'grabbing' : 'grab';
    tooltip.style.display = 'none';
  }
});

canvas.addEventListener('mousedown', (e) => {
  state.isDragging = true;
  state.dragStartX = e.clientX;
  state.dragStartY = e.clientY;
  state.panStartX = state.panX;
  state.panStartY = state.panY;
  canvas.style.cursor = 'grabbing';
});

canvas.addEventListener('mouseup', (e) => {
  const dx = Math.abs(e.clientX - state.dragStartX);
  const dy = Math.abs(e.clientY - state.dragStartY);

  if (dx < 5 && dy < 5) {
    // It's a click
    const rect = canvas.getBoundingClientRect();
    const wx = (e.clientX - rect.left - state.panX) / (canvas.width * state.zoom);
    const wy = (e.clientY - rect.top - state.panY) / (canvas.height * state.zoom);
    const store = getStoreAtPoint(wx, wy);
    if (store) selectStore(store);
  }

  state.isDragging = false;
  canvas.style.cursor = 'grab';
});

canvas.addEventListener('mouseleave', () => {
  state.isDragging = false;
  tooltip.style.display = 'none';
  state.hoveredStore = null;
});

// Touch support
canvas.addEventListener('touchstart', (e) => {
  if (e.touches.length === 1) {
    const t = e.touches[0];
    state.isDragging = true;
    state.dragStartX = t.clientX;
    state.dragStartY = t.clientY;
    state.panStartX = state.panX;
    state.panStartY = state.panY;
  }
}, { passive: true });

canvas.addEventListener('touchmove', (e) => {
  if (e.touches.length === 1) {
    const t = e.touches[0];
    state.panX = state.panStartX + (t.clientX - state.dragStartX);
    state.panY = state.panStartY + (t.clientY - state.dragStartY);
  }
}, { passive: true });

canvas.addEventListener('touchend', (e) => {
  if (e.changedTouches.length === 1) {
    const t = e.changedTouches[0];
    const dx = Math.abs(t.clientX - state.dragStartX);
    const dy = Math.abs(t.clientY - state.dragStartY);
    if (dx < 8 && dy < 8) {
      const rect = canvas.getBoundingClientRect();
      const wx = (t.clientX - rect.left - state.panX) / (canvas.width * state.zoom);
      const wy = (t.clientY - rect.top - state.panY) / (canvas.height * state.zoom);
      const store = getStoreAtPoint(wx, wy);
      if (store) selectStore(store);
    }
  }
  state.isDragging = false;
});

// Zoom
canvas.addEventListener('wheel', (e) => {
  e.preventDefault();
  const delta = -e.deltaY * 0.001;
  const newZoom = Math.max(0.5, Math.min(3, state.zoom + delta));

  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  state.panX = mx - (mx - state.panX) * (newZoom / state.zoom);
  state.panY = my - (my - state.panY) * (newZoom / state.zoom);
  state.zoom = newZoom;
}, { passive: false });

// ---- Controls ----
document.getElementById('zoomIn').addEventListener('click', () => {
  const newZoom = Math.min(3, state.zoom + 0.25);
  const cx = canvas.width / 2, cy = canvas.height / 2;
  state.panX = cx - (cx - state.panX) * (newZoom / state.zoom);
  state.panY = cy - (cy - state.panY) * (newZoom / state.zoom);
  state.zoom = newZoom;
});

document.getElementById('zoomOut').addEventListener('click', () => {
  const newZoom = Math.max(0.5, state.zoom - 0.25);
  const cx = canvas.width / 2, cy = canvas.height / 2;
  state.panX = cx - (cx - state.panX) * (newZoom / state.zoom);
  state.panY = cy - (cy - state.panY) * (newZoom / state.zoom);
  state.zoom = newZoom;
});

document.getElementById('resetView').addEventListener('click', () => {
  state.zoom = 1;
  state.panX = 0;
  state.panY = 0;
});

document.getElementById('closeDetail').addEventListener('click', () => {
  detailPanel.classList.add('hidden');
  state.selectedStore = null;
  state.showRoute = false;
  renderStoreList();
});

// ---- Tabs ----
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ---- Category Filter ----
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.activeCategory = btn.dataset.category;
    renderStoreList();
  });
});

// ---- Floor Buttons ----
document.querySelectorAll('.floor-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setFloor(parseInt(btn.dataset.floor));
  });
});

// ---- Search Events ----
searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
searchInput.addEventListener('focus', () => {
  if (searchInput.value) searchResults.style.display = 'block';
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  state.searchQuery = '';
  clearSearchBtn.style.display = 'none';
  searchResults.style.display = 'none';
  renderStoreList();
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.search-container') && !e.target.closest('.search-results')) {
    searchResults.style.display = 'none';
  }
});

// ---- Clock ----
function updateClock() {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, '0');
  const m = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('timeDisplay').textContent = `${h}:${m}`;
}

setInterval(updateClock, 1000);
updateClock();

// ---- Resize Handler ----
const resizeObserver = new ResizeObserver(() => resizeCanvas());
resizeObserver.observe(mapWrapper);

// ---- Init ----
resizeCanvas();
renderStoreList();
renderFavorites();
startAnimation();
