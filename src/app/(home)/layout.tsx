import './globals.css';
// import Header from '@/ui/Header/Header';
import Footer from '@/ui/Footer/Footer';
import localFont from 'next/font/local';

export const metadata = {
  title: 'dongbin',
  description: 'Generated by dongbin yoo',
};

const neueMon = localFont({
  src: '../../../public/font/Montreal/PPNeueMontreal-Medium.woff',
  variable: '--font-neuemon',
  display: 'swap',
  preload: true,
});

const pretendard = localFont({
  src: [
    {
      path: '../../../public/font/Pretendard/Pretendard-Bold.woff2',
      weight: '500',
    },
    {
      path: '../../../public/font/Pretendard/Pretendard-SemiBold.woff2',
      weight: '400',
    },
    {
      path: '../../../public/font/Pretendard/Pretendard-Medium.woff2',
      weight: '300',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard',
  preload: true,
});

export default function RootLayout({
  children, // will be a page or nexted layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pretendard.variable} ${neueMon.variable}`}>
      <body>
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
