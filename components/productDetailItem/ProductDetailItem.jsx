import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProductDetailItem = ({ productDetailData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{productDetailData.title}</Text>
      <Text style={styles.text}>{productDetailData.description}</Text>
      <Text style={styles.text}>{productDetailData.price}</Text>
      <Text style={styles.text}>{productDetailData.rating}</Text>
      <Text style={styles.text}>{productDetailData.category}</Text>
    </View>
  )
}

export default ProductDetailItem

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingHorizontal: 15,
    borderWidth: 1,
    margin: 10,
    borderColor: '#88da9e'
  },

  text: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 12
  }
})