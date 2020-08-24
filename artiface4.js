import React, {Component} from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';


class App extends Component{
  onPressButton() {
    alert('You tapped the button!')
  }
    render(){
      return(
        <View style={styles.container}>
            <View style={styles.box1}/>
            <View style={styles.box2}>
              <Image style={styles.box3}
                source={require('./assets/bestie.jpg')}/>
            </View>
            
            <View style={styles.box4}>
              <Button
              onPree={this.onPressButton}
              title="BESTIE"
              color="black"/>

            </View>
        </View>
      )
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  box1:{
    backgroundColor:'black',
    height:120,
    top:0,
    left:0,
    right:0,
    position: 'absolute',
    
  },
  box2:{
    borderColor:'white',
    borderWidth:4,
    borderRadius:90,
    height:100,
    width:100,
    marginTop:70,
    marginLeft:'3.5%',
    overflow:'hidden',
  },
  box3:{
    flex:1,
    height:null,
    width:null,
  },
  box4:{
    flexDirection:'row',
    justifyContent:'center',
    marginLeft:'50%',
    width:20,
  }
})
export default App;