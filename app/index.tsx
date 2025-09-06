import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View>
            <Image source={require('@/assets/images/Grenoo.png')} style={{width:300,height:300}}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
