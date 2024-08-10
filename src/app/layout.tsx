// app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderLayout from '@/components/HeaderLayout';
import Footer from '@/components/Footer';
// import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'My Next.js App',
  description: 'A sample Next.js application',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <HeaderLayout /> */}
        <main>
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
