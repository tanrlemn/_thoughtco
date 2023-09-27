import './globals.css';

// font
import { Sofia_Sans } from 'next/font/google';
const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

// providers
import { ThemeProvider } from './providers/ThemeProvider';
import { LoadingProvider } from './providers/LoadingProvider';

// local components
import Navbar from './navigation/navbar';

// metadata
export const metadata = {
  title: 'thoughtco',
  description: 'Creating safe experiences that encourage trust',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={sofiaSans.className}>
        <ThemeProvider>
          <LoadingProvider>
            <Navbar />
            {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
