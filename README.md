# CloudCom 2026 Website

Official website for the CloudCom 2026 International Conference on Cloud Computing, taking place in Paris, France from November 12-14, 2026.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- npm (v9+)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Montimage/cloudcom2026.git
cd cloudcom2026
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.development
```

4. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 📁 Project Structure

```
cloudcom2026/
├── public/                # Static assets
│   └── assets/
│       ├── logos/         # Conference and sponsor logos
│       ├── images/        # Images and photos
│       ├── videos/        # Video content
│       ├── docs/          # Downloadable documents
│       └── icons/         # Favicons and icons
├── src/
│   ├── components/        # Reusable React components
│   │   ├── layout/        # Layout components (Header, Footer, Layout)
│   │   ├── ui/            # UI components (Button, Card, Modal, etc.)
│   │   ├── forms/         # Form components (Input, Select, etc.)
│   │   └── media/         # Media components (Image, Video, Icon)
│   ├── pages/             # Page components
│   ├── contexts/          # React Context providers
│   ├── hooks/             # Custom React hooks
│   ├── store/             # Redux store configuration
│   ├── slices/            # Redux slices
│   ├── sagas/             # Redux-Saga side effects
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── config/            # Configuration files
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles (Tailwind)
├── .env.example           # Environment variables template
├── .env.development       # Development environment variables
├── .env.production        # Production environment variables
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run test:coverage` - Run tests with coverage

## 🎨 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **State Management**: Redux Toolkit + Redux-Saga
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Testing**: Vitest + Testing Library + Playwright
- **Deployment**: Netlify

## 🌍 Environment Variables

See `.env.example` for all available environment variables.

Key variables:
- `VITE_API_URL` - API endpoint URL
- `VITE_SITE_URL` - Site URL (for canonical links)
- `VITE_GA_ID` - Google Analytics ID
- `VITE_SENTRY_DSN` - Sentry DSN for error tracking

## 📦 Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🚢 Deployment

The site is automatically deployed to Netlify on push to the `main` branch.

- **Staging**: https://staging--cloudcom2026.netlify.app
- **Production**: https://cloudcom2026.org

## 🧪 Testing

### Unit Tests
```bash
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

### Coverage Report
```bash
npm run test:coverage
```

## 📝 Code Style

This project uses ESLint and Prettier for code formatting.

- Run linter: `npm run lint`
- Format code: `npm run format`

Pre-commit hooks via Husky ensure code quality before commits.

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Run tests: `npm test`
4. Commit your changes: `git commit -m "Add your feature"`
5. Push to the branch: `git push origin feature/your-feature`
6. Create a Pull Request

## 📄 License

This project is private and confidential.

## 📧 Contact

For questions or issues, please contact the technical team or open an issue on GitHub.

---

**CloudCom 2026** | Paris, France | November 12-14, 2026
