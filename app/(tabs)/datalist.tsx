import { useGetData } from "@/hooks/useGetData";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export default function UserList() {
  const { data: loadedData, loading: isLoading } = useGetData();

  return (
    <View style={styles.container}>
      {loadedData ? (
        <FlatList
          data={loadedData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.id}</Text>
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

      <TouchableOpacity
        style={styles.fab}
        onPress={() => console.log("Button pressed!")}
      >
        <Text>Reload</Text>
      </TouchableOpacity>
    </View>
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
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#eee",
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
  name: { fontSize: 18 },
});
