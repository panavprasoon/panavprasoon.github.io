# Portfolio Website

A modern, responsive portfolio website built with React and Vite, ready to be deployed for free on GitHub Pages.

## Features

- ✨ Modern, responsive design
- 🚀 Built with React + Vite for fast performance
- 📱 Mobile-friendly interface
- 🎨 Beautiful gradient designs and smooth animations
- 📧 Contact form with validation
- 🔗 Easy navigation with sticky header
- 🚀 Ready for free deployment on GitHub Pages

## Sections

- **Home** - Hero section with call-to-action buttons
- **About** - About you section with personal description
- **Projects** - Showcase your projects with links
- **Skills** - Display your technical skills by category
- **Contact** - Contact information and contact form

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

## Customization

### 1. Update Personal Information

Edit the component files to add your information:

- **Header**: `src/components/Header.jsx` - Change "Your Name"
- **Hero**: `src/components/Hero.jsx` - Update title and subtitle
- **About**: `src/components/About.jsx` - Write your bio
- **Projects**: `src/components/Projects.jsx` - Add your projects
- **Skills**: `src/components/Skills.jsx` - List your skills
- **Contact**: `src/components/Contact.jsx` - Add your contact details

### 2. Add Your Photo

Replace the placeholder in `src/components/About.jsx`:

```jsx
<img src="your-photo.jpg" alt="Your Name" />
```

### 3. Update Project Links

In `src/components/Projects.jsx`, update the `demo` and `link` properties:

```jsx
link: 'https://github.com/yourusername/project-name',
demo: 'https://project-demo.com'
```

### 4. Customize Colors

Edit the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #00a8ff;
  /* ... other variables */
}
```

## Building for Deployment

### Build the project

```bash
npm run build
```

This creates a `dist` folder with the production build.

## Deploying to GitHub Pages (Free!)

### Option 1: Deploy to `username.github.io` (Recommended)

1. **Create a new GitHub repository** named `username.github.io` (replace `username` with your GitHub username)

2. **Update `package.json`**:
   ```json
   "homepage": "https://username.github.io"
   ```

3. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Wait 1-2 minutes** and visit `https://username.github.io`

### Option 2: Deploy to a Project Repository

1. **Create a new GitHub repository** (e.g., `my-portfolio`)

2. **Update `vite.config.js`**:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/my-portfolio/', // Change to your repo name
   })
   ```

3. **Update `package.json`**:
   ```json
   "homepage": "https://username.github.io/my-portfolio"
   ```

4. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/my-portfolio.git
   git push -u origin main
   ```

5. **Deploy**:
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages** in repository settings (Settings → Pages → Deploy from branch: `gh-pages`)

7. **Wait 1-2 minutes** and visit `https://username.github.io/my-portfolio`

## Other Free Hosting Options

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click Deploy!

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click Deploy!
4. Visit your live site at the provided URL

### Static Hosting Services

- **Cloudflare Pages** - Free, fast, and reliable
- **Firebase Hosting** - Google's hosting platform
- **AWS Amplify** - Amazon's hosting solution

## Project Structure

```
portfolio_website/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Skills.jsx
│   │   ├── Skills.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Performance Tips

- Optimize images before adding them (use tools like TinyPNG)
- Use lazy loading for images if you add many projects
- Keep the bundle size small for faster load times
- Test on mobile devices for responsive behavior

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
1. Check the code comments
2. Review the React and Vite documentation
3. Open an issue on your GitHub repository

---

**Happy building! 🚀** Your portfolio website is now ready for the world to see!
