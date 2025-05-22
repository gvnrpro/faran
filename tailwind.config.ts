
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// FARAN custom colors - updated for light theme
				faran: {
					gold: '#D4AF37',
					darkGold: '#9D7E2E',
					brown: '#4A3C2A',
					darkBrown: '#2A2018',
					beige: '#F5F0E5', // Lighter beige for backgrounds
					cream: '#FFFBF2', // Cream color for backgrounds
					sand: '#EAE0CC', // Sand tone for accents
					softGold: '#F0E6C0', // Softer gold for backgrounds
					text: '#2A2018', // Dark text color for contrast
					lightText: '#7D7068', // Light text for secondary content
				},
			},
			fontFamily: {
				serif: ['Playfair Display', 'serif'],
				sans: ['Montserrat', 'sans-serif'],
				arabic: ['Noto Sans Arabic', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				'fade-in-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					from: { opacity: '0', transform: 'translateX(20px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1.5s ease-out',
				'fade-in-up': 'fade-in-up 1.2s ease-out',
				'slide-in': 'slide-in 0.8s ease-out'
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(245, 240, 229, 0.5)), url('/public/lovable-uploads/a2fc9b9f-ca33-4c87-9f2e-6e1b87665806.png')",
				'texture-pattern': "url('/images/texture.jpg')",
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
