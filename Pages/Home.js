import { Text, SafeAreaView, StyleSheet, ScrollView,View,Image,TouchableOpacity } from 'react-native';

export default function Home() {
   
  return (
    <SafeAreaView style={styles.container}>


      <Text style={styles.paragraph}>Menu</Text>
      <ScrollView>

<View style={styles.caixa}>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
          source={require('../assets/calabreza.jpg')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Pizza de Calabreza
           </Text>
           <View style={styles.preco}>
            <Text>20,00</Text>
           </View>
</View>


<View style={styles.caixa}>
        <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
           source={require('../assets/Chocolate.jpg')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Pizza de Chocolate
           </Text>
             <View style={styles.preco}>
            <Text>19,99</Text>
           </View>
</View>


<View style={styles.caixa}>
           <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
           source={require('../assets/pizza_mussarela.jpeg')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Pizza de Musarela
           </Text>
             <View style={styles.preco}>
            <Text>29,99</Text>
           </View>
</View>

<View style={styles.caixa}>
  <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
           source={require('../assets/pizza_frango.jpg')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Pizza de Frango
           </Text>
             <View style={styles.preco}>
            <Text>39,99</Text>
           </View>
</View>




<View style={styles.caixa}>
  <View style={styles.cxFoto}>
          <Image
            style={styles.img}
            resizeMode="stretch"
           source={require('../assets/pizza_portuguesa.jpg')}
          />
          </View>
          <Text style={styles.subtitulo}>
          Pizza Portuguesa 
           </Text>
             <View style={styles.preco}>
            <Text>Comprar</Text>
           </View>
</View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FAE4B5',
    padding: 8
  },
  paragraph: {
    color: 'purple',
    margin: 24,
    fontSize: 38,
    textAlign: 'center'
  },
  img: {
    width:200,
    height:200,
    borderRadius:90,
    paddingTop:40
  },
  preco:{
   flex:1,
   backgroundColor:'#fff',
   color:'#1663b1',
   alignItems:'center',
   justifyContent:'center',
   width:200,
   borderRadius:30,
   height:40
  },
  cxFoto: {
    margintop:10,
    margin:5,
    alignItems:"center" 
  },
  caixa:{
   flex:1,
    justifyContent:'center',
    alignItems:'center',
    borderStyle:'solid',
    borderWidth:2,
    borderRadius:35,
    margin:20,
    padding:20,
    borderColor:'#1663b1'
  },
   subtitulo: {
    fontSize:20,
    margin:12,
    color:'#1663b1'
  },
});


