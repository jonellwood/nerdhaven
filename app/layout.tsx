import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'The village of NerdHaven',
	description: 'All are welcome',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' data-theme='coffee'>
			<body className={inter.className}>
				<Nav />
				<main>{children}</main>
			</body>
		</html>
	);
}
