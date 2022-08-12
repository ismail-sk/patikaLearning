import { View, ImageBackground, Text, TouchableOpacity, Alert, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as yup from 'yup';

const EnterPage = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [switchSignUp, setSwitchSignUp] = useState(false);

  const HrSplit = () => {
    const hrLine = {height:2, width: "30%", backgroundColor: "lightgrey", margin: 5};
    
    return (
    <TouchableOpacity style={{ /* backgroundColor: "#fff9", */ alignItems:"center", marginVertical: 5}}
      onPress={() => setSwitchSignUp(!switchSignUp)}>
      
      <View style={{ flexDirection:'row', alignItems:"center", marginVertical: 3}}>
        <View style={hrLine}/>
        
        <Text style={{marginHorizontal: 7, paddingHorizontal:8, paddingVertical:2, borderRadius:10, color: "white", backgroundColor:"#aaa6"}}>
          {switchSignUp ? "Retun Login" :  "Or Sign-Up" }
        </Text>
        
        <View style={hrLine}/>
      </View>

    </TouchableOpacity>
    )
  };
  
  const Login = () => {
    const formikLoginValues = { 
      accountName: 'test',
      email: '',
      password: '',
    }

    const LoginValidSchema = yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
            password: yup
              .string()
              .min(4)
              .max(16, 'Password should not excced 16 chars.')
              .required(),
          });

    function LoginSubmit(values) {
      Alert.alert(JSON.stringify(values))
      };

    return (
    <>
    <Text style={styles.title}>A app for book sociality.{"\n"}Login Now</Text>
    <Formik
      initialValues={formikLoginValues}
      onSubmit={EnteredValues => LoginSubmit(EnteredValues)}
      validationSchema={LoginValidSchema}
      >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (

        <View style={styles.container}>
            <View style={styles.inputView}>
            <Icon name="email" size={30} color="black" />
            <TextInput
              value={values.email}
              style={styles.TextInput}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="Mail adresiniz giriniz!"
              placeholderTextColor="#003f5c"
            /></View>
            {touched.email && errors.email ?
              <Text style={styles.errorPrint}>{errors.email}</Text>
              :
              <View style={{
                marginBottom: 35,}}/>
            }

          <View style={styles.inputView}>
            <Icon name="lastpass" size={30} color="black" />
            <TextInput
            style={styles.TextInput}
            onChangeText={handleChange('password')}
            onBlur={() => setFieldTouched('password')}
            placeholder="Şifrenizi giriniz!"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            />
          </View>
          
          {touched.password && errors.password ?
            <Text style={styles.errorPrint}>{errors.password}</Text>
            :
            <View style={{ marginBottom: 35,}}/>
          }

          <TouchableOpacity style={styles.loginBtn}
            color="#3740FE"
            title='Submit'
            disabled={!isValid}
            onPress={handleSubmit}
          >
            <Icon name="login" size={30} color="black" />
            <Text style={styles.buttonFont}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBtn}
            onPress={() => props.navigation.navigate("MainBottomNavPage")}>
              <Icon name="login" size={30} color="black" />
              <Text style={styles.buttonFont}>Test it</Text>
          </TouchableOpacity>
        </View>
        )}
    </Formik>
    </>
    )
  }

    const SignUp = () => {
      const formikLoginValues = { 
        userName: 'test', // accountName
        name: "",
        surname: "",
        age: 10,
        email: 'ass@f.d',
        password: '',
      }

      const SignUpValidSchema = yup.object().shape({
              userName: yup
                .string()
                .matches(/\S+/g,// (?= )/g, \s+/g, \S+/g, [^ ]+/g,
                  "using Space is Invalid"
                )
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Account name is required"),

              name: yup
                .string()
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Firstname is required"),

              surname: yup
                .string()
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Lastname is required"),

              age: yup
                .number()
                .positive()
                .integer(),

              email: yup
                .string()
                .email()
                .required(),

              password: yup
                .string()
                .min(4)
                .max(16, 'Password should not excced 16 chars.')
                .required()
                //.validate(testPassword)
            
            });

      function SignUpSubmit(values) {
        Alert.alert(JSON.stringify(values))
        };

      return (
      <>
      <Text style={styles.title}>A app for book sociality.{"\n"}Sign Up Now</Text>
      <Formik
        initialValues={formikLoginValues}
        onSubmit={EnteredValues => SignUpSubmit(EnteredValues)}
        validationSchema={SignUpValidSchema}
        >
          {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
            <ScrollView style={{marginVertical: 5}}>
              <View style={{height: 25}}></View>
          <View style={styles.container}>

              <View style={styles.inputView}>
                <Icon name="account" size={30} color="black" />
                <TextInput
                  value={values.userName}
                  style={styles.TextInput}
                  onChangeText={text=>handleChange('userName')(text.replace(" ",""))}
                  onBlur={() => setFieldTouched('userName')}
                  placeholder="Kullanıcı adı giriniz!"
                  placeholderTextColor="#003f5c"
                />
              </View>
              {touched.userName && errors.userName ?
                <Text style={styles.errorPrint}>{errors.userName}</Text>
                :
                <View style={{
                  marginBottom: 35,}}/>
              }
              
              <View style={styles.inputView}>
                <Icon name="account-details" size={30} color="black" />
                <TextInput
                  value={values.name}
                  style={styles.TextInput}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  placeholder="Adınızı giriniz!"
                  placeholderTextColor="#003f5c"
                />
              </View>
              {touched.name && errors.name ?
                <Text style={styles.errorPrint}>{errors.name}</Text>
                :
                <View style={{
                  marginBottom: 35,}}/>
              }

              <View style={styles.inputView}>
                <Icon name="account-details" size={30} color="black" />
                <TextInput
                  value={values.surname}
                  style={styles.TextInput}
                  onChangeText={handleChange('surname')}
                  onBlur={() => setFieldTouched('surname')}
                  placeholder="Soy adınızı giriniz!"
                  placeholderTextColor="#003f5c"
                />
              </View>
              {touched.surname && errors.surname ?
                <Text style={styles.errorPrint}>{errors.surname}</Text>
                :
                <View style={{
                  marginBottom: 35,}}/>
              }

              <View style={styles.inputView}>
              <Icon name="email" size={30} color="black" />
              <TextInput
                value={values.email}
                style={styles.TextInput}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="Mail adresiniz giriniz!"
                placeholderTextColor="#003f5c"
              /></View>
              {touched.email && errors.email ?
                <Text style={styles.errorPrint}>{errors.email}</Text>
                :
                <View style={{
                  marginBottom: 35,}}/>
              }

            <View style={styles.inputView}>
              <Icon name="lastpass" size={30} color="black" />
              <TextInput
              style={styles.TextInput}
              onChangeText={handleChange('password')}
              onBlur={() => setFieldTouched('password')}
              placeholder="Şifrenizi giriniz!"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              />
            </View>
            
            {touched.password && errors.password ?
              <Text style={styles.errorPrint}>{errors.password}</Text>
              :
              <View style={{ marginBottom: 35,}}/>
            }

            <TouchableOpacity style={styles.loginBtn}
              color="#3740FE"
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Icon name="login" size={30} color="black" />
              <Text style={styles.buttonFont}>SIGN UP</Text>
            </TouchableOpacity>

          </View></ScrollView>
          )}
      </Formik>
      </>
      )
    }

  return (
  <View style={{flex: 1}}>
    <ImageBackground source={require("../assest/5272686.jpg")} resizeMode="cover" style={styles.image}>
      
      <Text style={styles.Header}>Books Share</Text>
      
{/*       <View style={styles.container}>
      </View> */}

        {switchSignUp ? <SignUp/> : <Login/>}

      
        <HrSplit/>

    </ImageBackground>
  </View>
  )
}

export default EnterPage





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
   
  image: {
    flex: 1,
    justifyContent: "center"
    
  },

  Header: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#00000020"
 
  },

  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "700",
    backgroundColor: "#aaab",
    width: "100%",
    textAlign: "center",
    paddingVertical: 2,
    /* 
    textShadowOffset: {
      width: 2,
      height: 2,
    },shadowColor: "#00f",
    elevation: 4, */
  },
  inputBox: {
    alignItems: "center",

  },
  inputView: {
    flexDirection: "row",
    backgroundColor: "#FFFc",
    borderRadius: 30,
    width: "70%",
    height: 45,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 10,
  },
  errorPrint: {
    fontSize: 15,
    fontWeight: "700",
    color: '#aa1D27',
    textAlignVertical: "center",
    paddingHorizontal: 6,
    marginTop: 4,
    marginBottom: 8,
    height: 23,
    backgroundColor: "#fdd9",
    borderRadius: 10,
},

/*   https://code.tutsplus.com/tutorials/common-react-native-app-layouts-login-page--cms-27639
abox: {
    height: 60,
    width: 60,
    backgroundColor: "yellow",
  }, */
  
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  loginBtn:
 {
  flexDirection: "row",
  width:"35%",
  borderRadius:20,
  height:40,
  alignItems:"center",
  marginTop:10,
  backgroundColor:"#FFFe",
  fontWeight: "bold",
  paddingHorizontal: 15,
 },
 buttonFont: {
  fontWeight:"bold",
  fontSize: 16,
  marginLeft: 5
},
     
});