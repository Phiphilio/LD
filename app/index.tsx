import { CustomTabBar } from "@/components/customTabBar";
import { SearchBar } from "@/components/searchBar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import { Cocktails } from "./cocktails";
import { Favoris } from "./favoris";
import { Meal } from "./meal";
import { useState } from "react";

export default function index() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <CustomTabBar pageIndex={currentPage} />
      <PagerView
        initialPage={0}
        onPageSelected={(event) => {
          setCurrentPage(event.nativeEvent.position);
        }}
        style={styles.test}
      >
        <View key={1} style={styles.page}>
          <Meal />
        </View>
        <View key={2} style={styles.page}>
          <Cocktails />
        </View>
        <View key={3} style={styles.page}>
          <Favoris />
        </View>
      </PagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
  },
  test: {
    flex: 1,
    //backgroundColor: "yellow",
  },
});
