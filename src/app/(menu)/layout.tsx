import './globals.css';
import Footer from '@/ui/Footer/Footer';
import MenuHeader from '@/ui/MenuHeader/MenuHeader';

export const metadata = {
  title: 'dongbin',
  description: 'Generated by dongbin yoo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MenuHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
