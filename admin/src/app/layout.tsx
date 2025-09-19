import { Noto_Sans } from 'next/font/google';
import './globals.css';

import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: "%s | Admin-ToyWords",
    default: "Productic",
  },
  description: "Được tạo bởi Tôi"
};

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"], // Thêm "vietnamese" để hỗ trợ tiếng Việt
  weight: ["300", "400", "500", "700"], // Các trọng lượng font bạn muốn sử dụng
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi"> 
      <body className={`${notoSans.className} dark:bg-gray-900`}>
        <ThemeProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}