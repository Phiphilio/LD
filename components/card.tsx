import { colors } from "@/constants/color";
import { StyleSheet, View, ViewProps } from "react-native";

type props = ViewProps & {
  colorBackground: keyof typeof colors.Card;
  cardWidth: number;
  cardHeight: number;
};
export function Card({
  colorBackground,
  cardWidth,
  cardHeight,
  style,
  ...rest
}: props) {
  return (
    <View
      style={[
        styles.container,
        style,
        {
          backgroundColor: colors.Card[colorBackground],
          width: cardWidth,
          height: cardHeight,
        },
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
  },
});
