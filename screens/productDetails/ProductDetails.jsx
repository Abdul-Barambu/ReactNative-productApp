import { View, Text, ActivityIndicator, Button, Modal, StyleSheet, Pressable, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import ProductListItem from '../../components/productListItem/ProductListItem';
import ProductDetailItem from '../../components/productDetailItem/ProductDetailItem';
import { Context } from '../../context/ProductContext';

const ProductDetails = () => {

  const route = useRoute();
  const navigation = useNavigation()
  const { productId } = route.params

  const { addToFavorite, favoriteItems } = useContext(Context)

  const isCurrentItemPresent = favoriteItems && favoriteItems.length > 0 ?
    favoriteItems.filter(item => item.id === productId) : false

  const [loading, setLoading] = useState(false)
  const [productDetailData, setProductDetailData] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [reason, setReason] = useState('')


  const handleOnChange = (e) => {
    setReason(e)
  }

  useEffect(() => {
    setLoading(true)

    async function getDataFromApi() {
      const response = await fetch(`https://dummyjson.com/products/${productId}`)
      const result = await response.json()

      if (result) {
        setLoading(false)
        setProductDetailData(result)
      }
    }

    getDataFromApi()
  }, [])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button onPress={() => setModalVisible(true)} title={isCurrentItemPresent.length > 0
          ? "Update Favorite"
          : "Add Favorite"} />
      }
    })
  })

  if (loading) {
    return (
      <ActivityIndicator size={'medium'} color={'white'} style={{ marginTop: 200 }} />
    )
  }

  return (
    <View>
      <ProductDetailItem productDetailData={productDetailData} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              placeholder='why you like this product'
              onChangeText={handleOnChange}
              value={reason}
              style={styles.reasonText}
            />

            <View style={styles.buttonWrap}>

              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => {
                  addToFavorite(productId, reason)
                  setModalVisible(!modalVisible)
                }}>
                <Text style={styles.textStyle}>{
                  isCurrentItemPresent.length > 0
                    ? "Update"
                    : "Add"
                }</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonWrap: {
    flexDirection: 'row'
  },
  button: {
    borderRadius: 1,
    padding: 10,
    elevation: 2,
    marginTop: 10
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    marginRight: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginLeft: 5
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  reasonText: {
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
  }
});