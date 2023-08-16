import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import cart from "../data/cart";
import CartListItem from "../components/CartListItem";
import { useSelector } from "react-redux";
import { selectDeliveryPrice, selectSubTotal, selectTotalPrice } from "../store/cartSlice";

const ShoppingCartTotals = () => {
  const subTotal=useSelector(selectSubTotal);
  const deliveryFee=useSelector(selectDeliveryPrice);
  const total=useSelector(selectTotalPrice);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subTotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};
const ShoppingCartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const checkoutCart = () => {
    console.warn("checkout not implemented");
  };
  return (
    <>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
       
      />
      <Pressable onPress={checkoutCart} style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
    opacity:0.8
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    opacity:1
  },
});
