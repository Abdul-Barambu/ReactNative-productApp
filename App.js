import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductListing from './screens/productListing/ProductListing';
import Favorites from './screens/favorites/Favorites'
import ProductDetails from './screens/productDetails/ProductDetails'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductContext from './context/ProductContext';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='product-listing' component={ProductListing} options={{
        title: 'Product List'
      }} />
      <Tab.Screen name='favorites' component={Favorites} options={{
        title: 'Favorites'
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <ProductContext>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: 'white'
            },
            contentStyle : {
              backgroundColor: '#220577dd'
            }
          }}>
            <Stack.Screen name='bottom-tabs' component={BottomTabs} options={{
              headerShown: false
            }} />
            <Stack.Screen name='product-details' component={ProductDetails} options={{
              title: 'Product Details'
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
