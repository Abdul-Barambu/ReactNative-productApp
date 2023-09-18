import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const FavoriteItem = ({ id, title, reason, handleRemove }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleRemove(id)}>
        <Text style={styles.text}><Text style={{ color: 'darkgray' }}>Product id:</Text>   {id}</Text>
        <Text style={styles.text}><Text style={{ color: 'darkgray' }}>product title:</Text>   {title}</Text>
        <Text style={styles.text}><Text style={{ color: 'darkgray' }}>Reason:</Text>   {reason}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default FavoriteItem

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#0f0782',
    marginBottom: 10,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10
  },
})