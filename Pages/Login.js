import {useState,useEffect} from 'react';

import {
Text,
SafeAreaView, 
StyleSheet,
Image,
View,
TextInput,
TouchableOpacity 
} from 'react-native';

import Firebase from '../firebase';



export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');


  function login(){
    Firebase.auth().signInWithEmailAndPassword(email,senha).catch(function (error)
    {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode,errorMessage);

    })
  }
  useEffect(()=>{
    Firebase.auth().onAuthStateChanged(function(user){
      setUser(user)
      if(initializing) setInitializing(false)
    });
  },[])

  if(user){
    alert('Bem-Vindo'+ user.uid);
    return navigation.navigate('Home');
  }
  else{
   //jhg
  }

  return (
    <SafeAreaView style={styles.container}>

    <Image source={require('../assets/logo.jpg')} style={styles.logo}/>
      <Text style={styles.textoentrada}>
       Pizzaria do mario
      </Text>

      <View style={styles.cont}>
      <TextInput
      placeholderTextColor={'#fff'}
      style={styles.textoinput}
      placeholder="Digite o Email de Acesso"
      onChangeText={(email) => setEmail(email)}
      value={email}
      />
      <TextInput
      placeholderTextColor={'#fff'}
      style={styles.textoinput}
      placeholder="Digite a Senha Secreta"
      onChangeText={(senha) => setSenha(senha)}
      value={senha
      }
      />
      
      <TouchableOpacity 
      style={styles.botao}
      onPress={() =>{
        login();
      }}>
      <Text style={styles.textobotao}> Acessar </Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,

  },
  logo:{
    borderRadius:300,
    width:250,
    height:250
    
  },
  textoentrada:{
    marginTop:55,
    marginBottom:35,
    fontSize:25,
    color:'#4b0082',
    fontWeight:'bold',
    paddingVertical:14
  },
  textoinput:{
    width:250,
    paddingLeft:10,
    backgroundColor:'#000',
    color:'#fff',
    marginTop:10,
    fontSize:20,
    fontWeight:'bold',
    borderRadius:10
  },
  botao:{
    margin: 28,
    width:200,
    backgroundColor:'#00008B',
    height:40,
    marginTop:35,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  
    textobotao:{
    justifyContent:'center',
    fontsize:30,
    color:'#FFF5EE',
    fontWeight: 'bold'
  }
});