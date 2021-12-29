import React from 'react'
import CalculatorButton from './CalculatorButton'
import CalculatorDisplay from './CalculatorDisplay'
import {StyleSheet,Text,View, StatusBar,SafeAreaView } from 'react-native'
import Row from "./Row";
  
  function CalculatorPanel(props){
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#202020",
          justifyContent: "flex-end"
        },
        value: {
          color: "#fff",
          fontSize: 40,
          textAlign: "right",
          marginRight: 20,
          marginBottom: 10
        }
      });
      return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
        <Text style={styles.value}>
              {parseFloat(props.result).toLocaleString()}
            </Text>
            <Row>
              <CalculatorButton
                text="C"
                theme="secondary"
                onPress={() => props.clearClicked()}
              />
              <CalculatorButton
                text="+/-"
                theme="secondary"
                onPress={() => props.uniOperationClicked('negation')}
              />
              <CalculatorButton
                text="%"
                theme="secondary"
                onPress={() => props.uniOperationClicked("percentage")}
              />
              <CalculatorButton
                text="/"
                theme="accent"
                onPress={() => props.operationClicked("divide")}
              />
            </Row>
  
            <Row>
              <CalculatorButton text="7" onPress={() => props.numberClicked("7")} />
              <CalculatorButton text="8" onPress={() => props.numberClicked("8")} />
              <CalculatorButton text="9" onPress={() => props.numberClicked("9")} />
              <CalculatorButton
                text="x"
                theme="accent"
                onPress={() => props.operationClicked("multiply")}
              />
            </Row>
  
            <Row>
              <CalculatorButton text="4" onPress={() => props.numberClicked("4")} />
              <CalculatorButton text="5" onPress={() => props.numberClicked("5")} />
              <CalculatorButton text="6" onPress={() => props.numberClicked("6")} />
              <CalculatorButton
                text="-"
                theme="accent"
                onPress={() => props.operationClicked("substract")}
              />
            </Row>
  
            <Row>
              <CalculatorButton text="1" onPress={() => props.numberClicked("1")} />
              <CalculatorButton text="2" onPress={() => props.numberClicked("2")} />
              <CalculatorButton text="3" onPress={() => props.numberClicked("3")} />
              <CalculatorButton
                text="+"
                theme="accent"
                onPress={() => props.operationClicked("add")}
              />
            </Row>
  
            <Row>
              <CalculatorButton
                text="0"
                size="double"
                onPress={() => props.numberClicked("0")}
              />
              <CalculatorButton text="." onPress={() => props.dotClicked()} />
              <CalculatorButton
                text="="
                theme="accent"
                onPress={() => props.equalClicked()}
              />
            </Row>
          </SafeAreaView>
        </View>
       
      );
  }
  
export default CalculatorPanel;