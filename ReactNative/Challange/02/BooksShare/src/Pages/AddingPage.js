import React from 'react';
import { TextInput, Text, Button, Alert, View, ScrollView, StyleSheet } from 'react-native';
//import * as yup from 'yup';
import { Formik } from 'formik';

const AddingPage = () => {

  /* 
  sayfa sitili yeninden gözden geçirilicek
  yup ile form validasyonlar uygulanacak
  DB oluşturuldukdan sonra işlevselliği geliştirilecek
  */
  
  const formikInitValues = { 
    accountName: 'test',
    kitapAdi: '',
    yazarAdi: '', 
    ulke: '', 
    dil: '', 
    year:'',
    resimLink: '',
    wikiLink: '', 
  }
    const inputView = {
      flexDirection: "row",
      backgroundColor: "#FFFc",
      borderRadius: 30,
      width: "100%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
      borderWidth: 1,
      borderColor: "black",
      paddingHorizontal: 10,
    };
  return (
    <ScrollView>
      <Text style={{
      color: "white",
      fontSize: 32,
      lineHeight: 44,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#00000020"}}> Kitap Paylaşın</Text>

      <Formik
        initialValues={formikInitValues}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
       >
        {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit }) => (
          <View style={styles.formContainer}>
            <TextInput
              value={values.kitapAdi}
              style={inputView}
              onChangeText={handleChange('kitapAdi')}
              onBlur={() => setFieldTouched('kitapAdi')}
              placeholder="Kitabın ismini giriniz!"
            />
            {touched.kitapAdi && errors.kitapAdi &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.kitapAdi}</Text>
            }            
            <TextInput
              value={values.yazarAdi}
              style={inputView}
              onChangeText={handleChange('yazarAdi')}
              onBlur={() => setFieldTouched('yazarAdi')}
              placeholder="Yazarın İsmini Giriniz!"
            />
            {touched.yazarAdi && errors.yazarAdi &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.yazarAdi}</Text>
            }
            <TextInput
              value={values.ulke}
              style={inputView}
              onChangeText={handleChange('ulke')}
              onBlur={() => setFieldTouched('ulke')}
              placeholder="Ülkesi"
            />
            {touched.ulke && errors.ulke &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.ulke}</Text>
            }
            <TextInput
              value={values.dil}
              style={inputView}
              onChangeText={handleChange('dil')}
              onBlur={() => setFieldTouched('dil')}
              placeholder="Kitabın Dili"
            />
            {touched.dil && errors.dil &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.dil}</Text>
            }
            <TextInput
              value={values.year}
              style={inputView}
              onChangeText={handleChange('year')}
              onBlur={() => setFieldTouched('year')}
              placeholder="Yılı"
            />
            {touched.year && errors.year &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.year}</Text>
            }
            <TextInput
              value={values.resimLink}
              style={inputView}
              onChangeText={handleChange('resimLink')}
              onBlur={() => setFieldTouched('resimLink')}
              placeholder="Resim Linki"
            />
            {touched.resimLink && errors.resimLink &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.resimLink}</Text>
            }
            <TextInput
              value={values.wikiLink}
              style={inputView}
              onChangeText={handleChange('wikiLink')}
              onBlur={() => setFieldTouched('wikiLink')}
              placeholder="Wikipedia Linki"
            />
            {touched.wikiLink && errors.wikiLink &&
              <Text style={{ fontSize: 12, color: '#FF0D10' }}>{errors.wikiLink}</Text>
            }
            <Button
              color="#3740FE"
              title='Submit'
              disabled={!isValid}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  )
}

export default AddingPage;

const styles = StyleSheet.create({
  formContainer: {
    padding: 50 
  }
});