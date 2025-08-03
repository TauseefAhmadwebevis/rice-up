
# Rice Up – Shopify Dawn Theme with Tailwind CSS

This is a custom Shopify theme built on top of Dawn, with Tailwind CSS integrated for faster UI development.

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v16 or higher)
- Shopify CLI
- Git

---

## 📦 Clone the Dawn Theme

```
shopify theme init rice-up --clone-url=https://github.com/Shopify/dawn
cd rice-up
```

---

## 🛠️ Install Dependencies

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

---

## ⚙️ Tailwind Configuration

### 1. `tailwind.config.js`

```
module.exports = {
  content: [
    "./**/*.liquid",
    "./**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 2. Enable Tailwind in CSS

Edit `/assets/base.css` (or `main.css`) and add:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 3. Build Tailwind

Add script to `package.json`:

```
"scripts": {
  "build:css": "tailwindcss -i ./assets/base.css -o ./assets/tailwind.css --watch"
}
```

Run the build process:

```
npm run build:css
```

---

### 4. Update Theme to Use `tailwind.css`

In your `layout/theme.liquid` file, replace:

```
{{ 'base.css' | asset_url | stylesheet_tag }}
```

with:

```
{{ 'tailwind.css' | asset_url | stylesheet_tag }}
```

---

## 🧪 Start Shopify Dev Server

```
shopify theme dev
```

---

## 📦 Build for Production

```
npx tailwindcss -i ./assets/base.css -o ./assets/tailwind.css --minify
```

---

## 🙌 Done!

Tailwind is now fully integrated into your Dawn-based `Rice Up` theme.
