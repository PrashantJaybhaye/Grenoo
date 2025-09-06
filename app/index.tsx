import { View } from "react-native";
import { useAuth } from "@/components/AuthProvider";
import Auth from "@/components/Auth";
import Account from "@/components/Account";

export default function Index() {
  const { session, loading } = useAuth();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg">Loading...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1">
      {session && session.user ? (
        <Account session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
