import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="[name]" options={{ title: "test" }} />
    </Stack>
  );
}
