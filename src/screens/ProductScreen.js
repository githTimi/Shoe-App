import { StyleSheet, Text, Pressable, Image, FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { productSlice } from '../store/productSlice';
const ProductScreen = ({navigation}) => {
      const dispatch = useDispatch();
  const products= useSelector(state => state.products.products)
  return (
    <FlatList
    data={products}
    renderItem={({ item }) => (
      <Pressable onPress={()=> {
        dispatch(productSlice.actions.setSelectedProduct(item.id))
        navigation.navigate('Product Detail')}} style={{ width: "50%", padding: 1 }}>
        <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={{textAlign: 'center'}}>{item.name}</Text>
          <Text style={{textAlign: 'center'}}>${item.price}</Text>
      </Pressable>
    )}
    numColumns={2}
  />
  
  )
}
const styles = StyleSheet.create({
  
    image:{
      width: "100%", 
      aspectRatio: 1
    }
  });
  
export default ProductScreen