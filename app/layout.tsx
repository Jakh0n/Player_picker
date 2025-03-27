import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'PlayFun - Random Player Picker for Football',
	icons: {
		icon: '/ball.jpg',
	},
	description:
		'Discover exciting football player matchups with our random player picker! Generate unexpected lineups, compare players, and add fun to your football experience.',
	keywords: [
		'football',
		'random player picker',
		'player generator',
		'soccer',
		'football fun',
		'player comparison',
		'sports tool',
	],
	authors: [{ name: 'Jakhon Yokubov' }],
	openGraph: {
		title: 'PlayFun - Random Football Player Picker',
		description:
			'Spice up your football experience with random player selections!',
		images: [
			{
				url: 'https://cdn3d.iconscout.com/3d/premium/thumb/football-3d-icon-download-in-png-blend-fbx-gltf-file-formats--ground-field-playground-sport-pack-sports-games-icons-4468757.png',
				width: 1200,
				height: 630,
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
