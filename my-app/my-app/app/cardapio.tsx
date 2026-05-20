
import { categorias } from "@/data/arraycategorias";
import {
  FlatList,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function () {
  const router = useRouter();

  function handlePress(rota: string) {
    router.push(rota as any);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias</Text>

      <FlatList
        data={categorias}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handlePress(item.rota)}
            activeOpacity={0.8}
          >
            <Text style={styles.cardText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2D2D2D",
    marginBottom: 25,
    textAlign: "center",
  },

  list: {
    paddingBottom: 30,
  },

  card: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#F1F1F1",
  },

  cardText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});