import React from "react";
import { FlatList, Image, Pressable, StyleSheet} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { productSlice } from "../store/productSlice";

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            //update selected product
            dispatch(productSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
          style={styles.itemContainer}
        >
          <Image
            source={{
              uri: item.image,
            }}
            style={{ width: "100%", aspectRatio: 1 }}
          />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});
