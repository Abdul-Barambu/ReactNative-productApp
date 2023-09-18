import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../../context/ProductContext'
import FavoriteItem from '../../components/favoriteItem/FavoriteItem'

const Favorites = () => {

  const { favoriteItems, handleRemove } = useContext(Context)

  if (!favoriteItems.length) {
    return (
      <View style={styles.noFav}>
        <Text style={styles.noFavText}>No favorite added</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteItems}
        renderItem={(itemData => (
          <FavoriteItem id={itemData.item.id} title={itemData.item.title} 
          reason={itemData.item.reason} handleRemove={handleRemove} />
        ))}
        keyExtractor={(itemData) => itemData.id}
      />
    </View>
  )
}

export default Favorites

const styles = StyleSheet.create({
  noFav: {
    padding: 20,
    alignItems: 'center'
  },

  noFavText: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  }
})