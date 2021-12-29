import React from 'react'
import {StyleSheet,Text, Dimensions } from 'react-native'

const screen = Dimensions.get("window");
const displayTop = screen.height/6;
function CalculatorDisplay(props){
    var textVal = "number"

    return(
        <Text readOnly={true} 
        style = {styles.displayer}>{props.text}</Text>
        
    );
}

const styles = StyleSheet.create({
    displayer: {
      flexDirection: 'column',
      paddingTop: displayTop,
      textAlign: 'right',
      alignItems: 'flex-end',
      color: 'white',
      fontSize: 60

    },
  });

export default CalculatorDisplay;