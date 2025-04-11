import { useGetData } from "@/hooks/useGetData";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";

export default function UserList() {
  const { data: loadedData, loading: isLoading, forceReload } = useGetData();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {loadedData ? (
          <FlatList
            data={loadedData}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item }) => (
              <View style={[styles.item, { backgroundColor: item.hexColor }]}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              </View>
            )}
          />
        ) : (
          isLoading && (
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#4a90e2" />
            </View>
          )
        )}

        <TouchableOpacity style={styles.fab} onPress={() => forceReload()}>
          <Text>Reload</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    padding: 16,
    paddingBottom: 80, // Space for FAB
  },
  item: {
    borderWidth: 1,
    backgroundColor: "#ff4081",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#ff4081",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: { fontSize: 18 },
  subtitle: { fontSize: 14 },
});
