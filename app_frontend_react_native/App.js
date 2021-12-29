import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,  View, Image, Button, Platform, SafeAreaView } from 'react-native';
import CalculatorApi from "./Components/CalculatorApi"
import Calculator from "./Components/Calculator"
export default function App() {
  const handlePress = () => console.log("Text Pressed");
  return (
    <View style={styles.container}>
       
      
        <Calculator  calculatorApi={new CalculatorApi('http://1.116.120.225:8000' )}/>
      
      
    </View>
  );
}

  
const styles = StyleSheet.create({
  container: {
    flex: 1, // this size is flexible, 1 means take the entire screen
    backgroundColor: 'black',
  },

});
