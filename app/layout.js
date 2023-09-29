import './globals.css';

// font
import { Sofia_Sans } from 'next/font/google';
const sofiaSans = Sofia_Sans({ subsets: ['latin'] });

// providers
import { ThemeProvider } from './lib/providers/ThemeProvider';
import { LoadingProvider } from './lib/providers/LoadingProvider';
import { ScaleProvider } from './lib/providers/ScaleProvider';
import { ContactProvider } from './lib/providers/ContactProvider';

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
        <LoadingProvider>
          <ScaleProvider>
            <ThemeProvider>
              <ContactProvider>
                <Navbar />
                {children}
              </ContactProvider>
            </ThemeProvider>
          </ScaleProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
