# Aura - Color-Changing Herbal Scrub Marketing Page

A beautiful, minimalistic marketing website for Aura, a revolutionary color-changing herbal scrub product. Built with Next.js 15, Material UI, and TypeScript.

## Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Material UI Components**: Modern, accessible UI components
- **Custom Color Scheme**: Unique brand colors (#3f6d7e, #7E3F4E, #7E6F3F)
- **Smooth Animations**: Subtle slide and fade animations for enhanced UX
- **SEO Optimized**: Proper metadata and semantic HTML structure

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action
2. **Product Overview** - Detailed product description
3. **Unique Features** - Key selling points with icons
4. **Benefits** - Skin and wellness benefits
5. **How to Apply** - Step-by-step usage instructions
6. **Refill Program** - Eco-friendly sustainability initiative
7. **About Packaging** - Environmental and design features
8. **Contact Us** - Customer engagement section

## Dependencies to Install

Before running the project, you need to install the following dependencies:

### Core Dependencies
```bash
npm install @mui/material @emotion/react @emotion/styled
```

### Additional Material UI Components (Optional but Recommended)
```bash
npm install @mui/icons-material @mui/lab
```

### Development Dependencies (Optional)
```bash
npm install @types/react @types/react-dom
```

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Install Material UI Dependencies**
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
aura-page/
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with Material UI theme
│       ├── page.tsx            # Main Aura marketing page
│       └── globals.css         # Custom styles and animations
├── public/                     # Static assets (images, icons)
├── package.json                # Project dependencies
└── README.md                   # This file
```

## Customization

### Colors
The page uses a custom color palette:
- Primary: `#3f6d7e` (Deep Blue-Green)
- Secondary: `#7E3F4E` (Rich Burgundy)
- Accent: `#7E6F3F` (Warm Gold)

### Typography
- Uses Geist font family for modern, clean typography
- Responsive font sizes for mobile and desktop

### Animations
- Fade-in effects for page load
- Slide-up animations for sections
- Hover effects on cards and buttons

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **Material UI** - Component library for consistent design
- **TypeScript** - Type-safe JavaScript
- **Emotion** - CSS-in-JS styling solution
- **Responsive Design** - Mobile-first approach

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a marketing page template. Feel free to customize colors, content, and styling to match your brand requirements.

## License

This project is for demonstration purposes. Please ensure you have the right to use any images or content in your production version.
