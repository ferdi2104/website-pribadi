# Website Jualan Makanan - Development Plan

## Design Guidelines

### Design References
- **Style**: Modern Food Delivery App (Gojek Food, GrabFood inspired)
- **Mood**: Warm, appetizing, friendly, trustworthy

### Color Palette
- Primary: #FF6B35 (Warm Orange - appetite stimulating)
- Secondary: #2D3436 (Dark Charcoal - text)
- Accent: #00B894 (Fresh Green - success/add to cart)
- Background: #FAFAFA (Light Gray)
- Card: #FFFFFF (White)
- Highlight: #FDCB6E (Golden Yellow - promotions)

### Typography
- Heading1: Poppins font-weight 700 (48px)
- Heading2: Poppins font-weight 600 (32px)
- Heading3: Poppins font-weight 600 (24px)
- Body: Inter font-weight 400 (16px)
- Price: Poppins font-weight 700 (18px)
- Navigation: Poppins font-weight 500 (16px)

### Key Component Styles
- **Buttons**: Orange background (#FF6B35), white text, 8px rounded, hover: darken 10%
- **Cards**: White background, subtle shadow, 12px rounded, hover: lift effect
- **Product Cards**: Image on top, info below, add to cart button
- **Badge**: Golden yellow for promo, green for available

### Layout & Spacing
- Hero section: 70vh with overlay gradient
- Product grid: 4 columns desktop, 2 tablet, 1 mobile, 24px gaps
- Section padding: 60px vertical
- Card hover: Lift 4px with smooth shadow

### Images to Generate
1. **hero-food-banner.jpg** - Delicious Indonesian food spread on wooden table, warm lighting, appetizing presentation (Style: photorealistic, warm tones)
2. **category-nasi.jpg** - Beautiful rice dish with side dishes, top view, clean background (Style: photorealistic, food photography)
3. **category-mie.jpg** - Steaming noodles with toppings, chopsticks, appetizing (Style: photorealistic, food photography)
4. **category-minuman.jpg** - Fresh colorful drinks with ice, tropical vibes (Style: photorealistic, refreshing)

---

## Development Tasks

### Files to Create:
1. **src/pages/Index.tsx** - Homepage with hero, categories, featured products
2. **src/pages/Menu.tsx** - Product catalog with filters
3. **src/pages/ProductDetail.tsx** - Single product detail page
4. **src/pages/Cart.tsx** - Shopping cart page
5. **src/pages/About.tsx** - About us page
6. **src/components/Navbar.tsx** - Navigation component
7. **src/components/Footer.tsx** - Footer component
8. **src/components/ProductCard.tsx** - Reusable product card

### Data Structure (in Index.tsx):
- Products array with: id, name, description, price, category, image, rating
- Categories: Nasi, Mie, Snack, Minuman, Dessert