import React from 'react';
import { Text, View, Image, ImageBackground, TouchableOpacity} from 'react-native'

import { Sum2number, Substract2number, PI } from '../Utilies/Calculation'
// component = funtion ( biến tham chiếu)
import {icons, images} from '../constant'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Welcome(props) {
    return <View style={{
        backgroundColor: 'white',
        flex: 100
    }}>
        <ImageBackground
            source={images.background}
            resizeMode='cover'
            style={{
                // justifyContent: 'center',
                flex: 100,
            }}

        >
            <View style={{
                flex: 20,
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 50,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image source={icons.scale}
                        style={{
                            marginLeft: 10,
                            marginRight: 5,
                            width: 30,
                            height: 30,
                            //alignSelf:'center',

                        }}
                    />
                    <Text style={{
                        color: 'white',
                    }}> SOSANHGIA </Text>
                    <View style={{ flex: 1 }} />
                    <Image source={icons.question}
                        style={{

                            width: 25,
                            height: 25,
                            marginRight: 10,
                        }}
                    />
                </View>
            </View>
            <View style={{
                flex: 20,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                <Text style={{
                    marginBottom: 10, 
                    color: 'white',
                    fontSize:15,
                }}> Welcome to </Text>
                <Text style={{
                    marginBottom: 10, 
                    color: 'white',
                    fontWeight:'bold',
                    fontSize: 20,
                }}> SOSANHGIA !</Text>
                <Text style={{
                    marginBottom: 10, 
                    color: 'white',
                    fontSize:15,
                }}> Please select your account type </Text>
            </View>
            <View style={{
                flex: 40,
                 backgroundColor: 'blue',
            }} >
                <TouchableOpacity style={{
                    borderColor: 'white',
                    borderWidth: 1,
                    height: 50,
                    borderRadius: 5,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    backgroundColor:'white',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <Icon name={"circle-check"} style={{
                        color: 'black',
                        
                    }}/>
                    <Text style={{
                        color:'white',
                        color:'#ffc850',
                        
                    }}> Email </Text>
                    
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 20,
                backgroundColor: 'green',
                
            }} />
        </ImageBackground>
    </View>
}
/* function MainScreen(props) {
    return <Text> This is MainScreen</Text>
}
 */
// cách 2: tạo ra 1 biến , biến đó để tham chiếu tới funtion
/* const MainScreen = (props) => {
    { 
        const {x,y} = props
        const {person} = props
        const {products} = props
        // const => let => var / thứ tự ưu tiên
        const{name, age, email} = person
        return <View style={{
            backgroundColor: 'white'
        }}> 
            <Text> x = {props.x}, y = {props.y}</Text>
            <Text>Name = {name}, age = {age}, email = {email}</Text>
            {products.map(eachProduct => <Text>{eachProduct.productName}, {eachProduct.year}</Text>)}
            <Text>Sum 2 + 3 = {Sum2number(2,3)} </Text>
            <Text>Sum 10 - 5 = {Substract2number(10,5)} </Text>
            <Text> Pi = {PI}</Text>
        </View>
    }
}
 */
export default Welcome;