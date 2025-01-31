import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: wp('5%'),
  },
  heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: wp('10%'),
    marginTop: wp('1%'),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    width: wp('80%'),
    height: hp('10%'),
    marginTop: wp('8%'),
  },
  create : {
    backgroundColor : '#14A44D',
    height: hp('8%'),
    width : wp('25%'),
    justifyContent : 'center',
    alignItems : 'center'
  },
  login : {
    backgroundColor : '#2196F3',
    height: hp('8%'),
    width : wp('25%'),
    justifyContent : 'center',
    alignItems : 'center'
  },
  btnTxt: {
    fontSize: hp('3%'),
    color: 'white',
  },

});

export default styles;
