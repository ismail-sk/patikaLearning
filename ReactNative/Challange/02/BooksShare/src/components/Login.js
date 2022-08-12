import { View, Text, TouchableOpacity, Alert, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as yup from 'yup';

import {styles} from '../styles/EnterPageLoginSignUp.styles';

const Login = ({props}) => {
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

export default Login