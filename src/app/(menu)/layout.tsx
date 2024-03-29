import './globals.css';
import './contact/page.module.css';
import Footer from '@/ui/Footer/Footer';
import localFont from 'next/font/local';
// import MenuHeader from '@/ui/MenuHeader/MenuHeader';

export const metadata = {
  title: 'dongbin',
  description: 'Generated by dongbin yoo',
};

const neoMetric = localFont({
  src: '../../../public/font/Neometric-Extra-Bold-_Bold_.woff',
  variable: '--font-neometric',
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
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pretendard.variable} ${neoMetric.variable}`}>
      <body>
        {/* <MenuHeader /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
