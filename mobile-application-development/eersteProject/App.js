import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

const calculator = () => {
  var number1 = []
  var operator = []
  var number2 = []

  const [data, updateData] = React.useState(testArray)
   
  const addStringToArray = () => {
    data.push(text);
    console.log(data);
}

const [text, updateText] = React.useState("initial tekst");
}

export default FlatListBasics;
