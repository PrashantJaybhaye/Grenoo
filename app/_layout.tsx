import { Stack } from "expo-router";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css"
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}
