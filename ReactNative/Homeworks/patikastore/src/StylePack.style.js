import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  brand: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 35,
    marginTop:15,
  },
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    margin: 10,
    padding: 5,
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'lightcyan',
  },
  searchBoxArea: {
    backgroundColor: 'aliceblue',
    margin: 15,
    padding: 15,
    borderRadius: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'lightcyan',

  },
  image: {
    margin: 5,
    height: 150,
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  price: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'red',
  },
});
