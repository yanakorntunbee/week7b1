import React, {Component} from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';
class App extends Component{
  state={
    headline:'BLACKPINK',
  }
  updateState=()=>{
    this.setState({
      headline:'IG:jennierubyjane',
    })
  }
  render(){  
    return(
      <View style={styles.container}>
        <View style={styles.box1}/>
          <View style={styles.box2}>        
            
                
            </View>
    <Text style={styles.box4}>{this.state.headline}</Text>   
            <Button onPress={this.updateState}
            title='JENNIE'
            color='skyblue' />
          
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
    left:0,
    top:0,
    right:0,
    position:'absolute',
  },
  box2:{
    height:100,
    width:100,
    borderColor:'white',
    borderRadius:90,
    borderWidth:4,
    overflow:'hidden',
    marginTop:120 - (100 / 2 ),
    marginLeft:'1.6%',
  },
  box3:{
    flex:1,
    width:null,
    height:null,
  },
  box4:{
    fontSize:20,
    fontWeight:'bold',
    color:'black',
    marginLeft:'2.5%',
  },
  box5:{
    fontSize:20,
    color:'black',
  }
})
export default App;