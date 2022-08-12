import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    TextInput,
    ScrollView } from 'react-native'

import { Formik } from 'formik';
import * as yup from 'yup';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../styles/EnterPageLoginSignUp.styles';

    const SignUp = ({props}) => {
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

      export default SignUp