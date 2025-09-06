import { Stack } from "expo-router";
import { AuthProvider } from "@/components/AuthProvider";
import "./globals.css";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack />
    </AuthProvider>
  );
}
