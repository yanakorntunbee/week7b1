import React, {Component} from 'react';
import {View, StyleSheet,Image,Text,Button} from 'react-native';




class App extends Component{
  state={
    headline:"My name is Bestie",
  }
  updateState=()=>{
    this.setState({
      headline:"How you like that",
    })
  }
  onPressButton() {
    alert('You tapped the button!')
  }

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.box1}/>
            <View style={styles.box2}>
              <Image style={styles.box3}
                source={require('./assets/bestie.jpg')}>
              </Image>
            </View>

            <Text style={styles.box4}>{this.state.headline}</Text>

            <View style={styles.box5}>  
              <Button 
              onPress={this.onPressButton}
              title="CLCIK"
              color="pink">

              </Button>
            </View>

            
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',

  },
  box1:{
    backgroundColor:'skyblue',
    height:120,
    top:0,
    left:0,
    right:0,
    position:'absolute',
  },
  box2:{
    height:100,
    width:100,
    borderRadius:90,
    borderColor:'white',
    borderWidth:4,
    overflow:'hidden',
    marginRight:'65%',
    marginTop:70,
  },
  box3:{
    flex:1,
    width:null,
    height:null,


  },
  box4:{
    fontSize:20,
    fontWeight:'bold',
    marginLeft:'1.5%',
    color:'black',
    marginTop:'50%',
  },
  box5:{
    margin:20,
    flexDirection:'row',
    justifyContent:'center',
    height:null,
    width:null,
  }

})
export default App;