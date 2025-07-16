# Neoenergia - Landing Page

A modern landing page for Neoenergia's Free Energy Market services, built with Next.js and designed to capture leads and educate businesses about energy cost reduction opportunities.

## 🚀 Live Demo

**Deployed on Vercel:** [https://neoenergia.vercel.app](https://neoenergia.vercel.app)

## 📋 Overview

This landing page helps businesses understand and migrate to Brazil's Free Energy Market, offering:

- **Lead Generation**: Automated contact form with email notifications
- **Educational Content**: Comprehensive information about energy market migration
- **Professional Design**: Modern, responsive UI with Neoenergia branding
- **WhatsApp Integration**: Direct customer contact capabilities

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Email Service**: Resend API for automated notifications
- **Icons**: Lucide React
- **Package Manager**: PNPM
- **Deployment**: Vercel

## 🏗️ Project Structure

```
neoenergia/
├── app/
│   ├── api/leads/          # Lead form submission API
│   ├── components/         # Page-specific components
│   ├── config/            # Configuration files
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main landing page
├── components/
│   ├── ui/                # Reusable Radix UI components
│   └── theme-provider.tsx # Theme configuration
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
├── public/                # Static assets (images, PDFs)
├── styles/                # Additional CSS files
└── ...config files
```

## 🎯 Key Features

### 📧 Lead Management
- Contact form with validation
- Automated email notifications to team
- Confirmation emails to leads
- Error handling and success feedback

### 🎨 Design System
- **Primary Color**: `#0A3B1D` (Neoenergia green)
- **Typography**: System fonts with Tailwind
- **Icons**: Lucide React icon library
- **Responsive**: Mobile-first design approach

### 📱 Responsive Sections
1. **Hero Section** - Value proposition with CTA
2. **Target Audience** - Ideal customer profile
3. **Benefits** - Strategic advantages
4. **Process** - Migration steps explanation
5. **Models** - Participation options
6. **Lead Form** - Contact capture
7. **Differentials** - Why choose Neoenergia
8. **FAQ** - Common questions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PNPM (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd neoenergia
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Resend API key:
   ```bash
   RESEND_API_KEY=re_your_actual_api_key_here
   ```
   
   **Get your Resend API key:**
   1. Sign up at [https://resend.com](https://resend.com)
   2. Go to API Keys section
   3. Create a new API key
   4. Copy and paste it into your `.env.local` file

4. **Run development server**
   ```bash
   pnpm dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📧 Email Configuration

The project uses [Resend](https://resend.com) for email handling:

- **Lead notifications**: Sent to `josueleit.dev@gmail.com`
- **Confirmation emails**: Sent to form submitters
- **Configuration**: `app/api/leads/route.ts`

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. **Add environment variables in Vercel dashboard:**
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add: `RESEND_API_KEY` with your actual API key
3. Deploy automatically on push to main branch

### Environment Variables for Production
Make sure to add these to your Vercel project:
```
RESEND_API_KEY=re_your_actual_api_key_here
```

### Manual Deployment
```bash
pnpm build
pnpm start
```

## 📝 Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 🔧 Configuration

### Contact Information
Edit `app/config/contact.ts` to update:
- Phone numbers
- Email addresses
- WhatsApp configuration
- Social media links

### Styling
- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.ts`
- **Component styles**: Inline with Tailwind classes

## 📊 Performance

- **Next.js Image Optimization**: Automatic image optimization
- **Static Generation**: Pre-rendered pages for better performance
- **Responsive Images**: Optimized for different screen sizes
- **Vercel Edge Network**: Global CDN for fast loading

## 🔒 Security

- **Environment Variables**: Secure API key storage
- **Form Validation**: Client and server-side validation
- **Rate Limiting**: Built-in protection against spam
- **HTTPS**: Secure connection via Vercel

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary to Neoenergia. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: josueleit.dev@gmail.com
- **WhatsApp**: +55 (74) 99111-4856

---

**Built with ❤️ for Neoenergia's digital transformation**