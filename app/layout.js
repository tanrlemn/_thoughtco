import './globals.css';
import { Sofia_Sans } from 'next/font/google';

const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'thoughtco',
  description: 'Creating safe experiences that encourage trust',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={sofiaSans.className}>{children}</body>
    </html>
  );
}
