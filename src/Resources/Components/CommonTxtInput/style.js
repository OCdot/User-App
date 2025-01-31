import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
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
});

export default styles;
