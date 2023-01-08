/**
 * @format
 */

import React from 'react';
import { Text } from 'react-native'

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import Welcome from './Screens (view)/Welcome';
let fakedProducts = [
    {
        productName: 'iphone 3',
        year: 2013
    },
    {
        productName: 'iphone 4',
        year: 2014
    },
    {
        productName: 'iphone 5',
        year: 2015
    }
]
/* AppRegistry.registerComponent(appName,  
    () => () => <Welcome
                            x={5} y = {10}
                            person = {{
                                name : 'Dang Ba Quoc Trung',
                                age : 18,
                                email:'trungdang01012003@gmail.com'

                            }}
                            products  ={fakedProducts}
                            
                            />); */

AppRegistry.registerComponent(appName, () =>  Welcome);
