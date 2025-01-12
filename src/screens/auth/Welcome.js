import React, {useState} from 'react';
import {Image, SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/images.js';
import icons from '../../assets/icons.js';
import { Button  , InputText} from '../../components/shared/index.js';
import styles from '../../assets/styles/index.js';

const Welcome = () => {
  const navigation = useNavigation();
  const [isChanged, setIsChanged] = useState(0);

  const handlePress = () => {
    setIsChanged(isChanged + 1);
  };

  return (
    <SafeAreaView style={[styles.pdh16]}>
    <Button label={"Continue"} onPress={() => navigation.navigate("AvailableCar")}/>
    <InputText placeholder={"Enter your name"} secureTextEntry={true} />
  </SafeAreaView>
);
};
export default Welcome;
