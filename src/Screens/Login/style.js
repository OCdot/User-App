import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: wp('80%'),
    height: hp('10%'),
    backgroundColor: 'white',
    margin: hp('1%'),
    padding: hp('1%'),
    borderRadius: hp('1%'),
    fontSize: hp('3%'),
    color: 'black',
    // placeholderTextColor: 'red',
  },
  heading: {
    fontSize: hp('5%'),
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#2196F3',
    padding: hp('2%'),
    borderRadius: hp('1%'),
    width: wp('40%'),
    alignItems: 'center',
    margin: hp('2%'),
  },
  btnTxt: {
    fontSize: hp('3%'),
    color: 'white',
  },
  txt: {
    color: '#14A44D',
    marginTop : wp('3%'),
    fontSize : wp('6%')
  },
});

export default styles;
