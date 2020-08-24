import React, {Component} from 'react';
import {View, StyleSheet, Button,Text} from 'react-native';

class App extends Component{
  state={
    headline:'how are you',
  }
  updateState=()=>{
    this.setState({
      headline:'wow',
    })
  }
    render(){
      return(
        <View style={styles.container}>
            <View style={styles.box1}/>
      <Text style={styles.box2}>{this.state.headline}</Text>
            <Button
            onPress={this.updateState}
            title="CLICK"
            color="pink"
            />

        </View>
      )
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  box1:{
    backgroundColor:'skyblue',
    height:120,
    top:0,
    left:0,
    right:0,
  },
  box2:{
    fontSize:20,
  }

})
export default App;