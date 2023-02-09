import React, { useState } from 'react';
import { View,Text, Image, Button, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Page1 = ({ navigation, route }) => {
    const [width, setWidth] = useState(200);

    const increaseSize = () => {
        setWidth(width + width * 0.25);
    };

    const decreaseSize = () => {
        setWidth(width - width * 0.25);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'red'
            }}>
                <Image
                    style={{
                        width: width,
                        height: width,
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                    source={require('../assets/icon.png')}
                />
                <View style={styles.buttonsContainer}>
                    <Button title="Increase Size" onPress={increaseSize} />
                    <Button title="Decrease Size" onPress={decreaseSize} />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{route?.params?.text||"Page 1"}</Text>
                    <Button
                        title="Go to Page 2"
                        onPress={() =>
                            navigation.navigate('Page2', { text: 'Dữ liệu từ page 1' })
                        }
                    />
                </View>
            </View>

        </View>
    );
};

const Page2 = ({ navigation, route }) => {

    const { text } = route.params || {};
    console.log(route);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{text || 'Page 2'}</Text>
        <Button title="Go back" onPress={() => navigation.navigate('Page1', { text: 'Du lieu tu page 2' })} />
        <Button title="Page3" onPress={() => navigation.navigate('Page3', { text: 'Du lieu tu page 2' })} />
      </View>
    );
  };

  const Page3 = ({ navigation, route }) => {

    // const { text } = route.params || {};
    // console.log(route);
  
    const list = ["a", "b", "c", "d", "e"];
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <FlatList 
          data={list}
          renderItem={(item)=>{
            console.log(item);
            return(
              // item.item là key mặc định
              <Text key={item.index}>{item.item}</Text>
              
            )
          }}
          >
        
          </FlatList>
      </View>
    );
  };

  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Page1">
          <Stack.Screen name="Page1" component={Page1} />
          <Stack.Screen name="Page2" component={Page2} />
          <Stack.Screen name="Page3" component={Page3} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };




const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
});

export default App;
