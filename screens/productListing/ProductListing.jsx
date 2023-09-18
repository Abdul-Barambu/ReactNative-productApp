import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../../context/ProductContext'
import ProductListItem from '../../components/productListItem/ProductListItem';
import { useNavigation } from '@react-navigation/native';

const createRandomColor = () => {
  let letters = "0123456789ABCDEF";
  let color = "#"

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color
}

const ProductListing = () => {

  const { loading, products } = useContext(Context);
  const navigation = useNavigation();

  if (loading) {
    return (
      <ActivityIndicator style={styles.loader} color={'red'} size={'medium'} />
    )
  }

  const handleOnPress = (getId) => {
    navigation.navigate("product-details", {
      productId: getId
    })
  }

  return (
    <View style={{backgroundColor: '#FAFDFF'}}>
      <FlatList
        data={products}
        renderItem={(productData) => (
          <ProductListItem title={productData.item.title} bgColor={createRandomColor()} onPress={() => handleOnPress(productData.item.id)} />
        )}
        keyExtractor={(productData) => productData.id}
        numColumns={2}
      />
      <Text>ProductListing</Text>
    </View>
  )
}

export default ProductListing

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})