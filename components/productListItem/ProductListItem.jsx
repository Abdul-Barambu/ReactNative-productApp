import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const ProductListItem = ({ title, onPress, bgColor }) => {
  return (
    <View style={styles.productItemContainer}>
      <Pressable android_ripple={{ color: '#cad346' }} onPress={onPress} style={{ ...styles.pressableView, backgroundColor: bgColor }}>
        <View style={styles.innerContainer}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default ProductListItem

const styles = StyleSheet.create({
  productItemContainer: {
    flex: 1,
    margin: 16,
    height: 160,
    borderRadius: 8,
  },

  pressableView: {
    flex: 1
  },

  innerContainer: {
    flex: 1,
    padd: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black'
  }
})