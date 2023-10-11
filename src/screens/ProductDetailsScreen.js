import { StyleSheet, View, Image,
useWindowDimensions,
FlatList, Text, ScrollView, Pressable} from "react-native";
import { cartSlice } from "../store/cartSlice";
import { useSelector, useDispatch } from 'react-redux';

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const { width } = useWindowDimensions();
  const dispatch= useDispatch();

  const addToCart = ()=>{
    
    dispatch(cartSlice.actions.addCartItem({product}))
  }
  return (
    <View>
     <ScrollView>
<FlatList
  data={product.images}
  renderItem={({ item }) => (
    <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
  )}
  horizontal
  showsHorizontalScrollIndicator={false}
  pagingEnabled
/>
      
      <View style={{ padding: 20 }}>
 
  <Text style={styles.title}>{product.name}</Text>

 
  <Text style={styles.price}>${product.price}</Text>

  
  <Text style={styles.description}>{product.description}</Text>
</View>
     
      
      </ScrollView>

      <Pressable style={styles.button} onPress={addToCart}>
  <Text style={styles.buttonText}>Add to cart</Text>
</Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: "500",
        marginVertical: 10,
      },
      price: {
        fontWeight: "500",
        fontSize: 24,
      },
      description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
      },
      button: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
      },
      buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
      },

});

export default ProductDetailsScreen;