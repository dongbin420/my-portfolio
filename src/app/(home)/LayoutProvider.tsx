// 'use client';

// import styles from './LayoutProvider.module.css';
// import { usePathname } from 'next/navigation';

// export default function LayoutProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   return (
//     <>
//       {pathname === '/about' ? (
//         <div className={styles['layout-provider']}>{children}</div>
//       ) : (
//         { children }
//       )}
//     </>
//   );
// }
