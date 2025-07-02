import { redirect } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Root'a gelenleri Türkçe'ye yönlendir
  redirect('/tr');
} 