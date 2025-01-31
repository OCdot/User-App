import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


const styles= StyleSheet.create({

    headerContainer:{
        flexDirection:'row',
        // borderWidth :1,
        justifyContent:'space-between',
        paddingHorizontal: wp('5%'),
        marginTop: wp('3%'),
        alignItems : 'center'
      },
      txt:{
        fontSize : wp('10%'),
        color : '#2196F3'
      },
      signoutBtn:{
        padding: wp('3%'),
        backgroundColor: 'red',
        borderRadius: wp('2%'),
        alignItems: 'center',
        justifyContent: 'center',
        // marginRight: wp('5%'),
      },
      container: {
        flex: 1,
      },
      userContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: wp('2%'),
        // borderWidth : 1,
        // alignSelf : 'center',
        // justifyContent : 'center',
        // alignItems : 'center',
      },
      avatarContainer: {
        // borderWidth : 1,
      },
      avatar: {
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: wp('15%'),
        resizeMode: 'cover',
      },
      userInfo: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: wp('8%'),
        alignSelf: 'center',
        // paddingLeft
      },
      name: {fontSize: wp('7%'), fontWeight: 'bold'},
      email: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
      },
      locationButton: {
        marginTop: 5,
        padding: 5,
        backgroundColor: '#B0E0E6',
        borderRadius: 5,
        width: wp('30%'),
        alignItems: 'center',
        alignSelf: 'center',
        height: wp('10%'),
        justifyContent: 'center',
        marginLeft: -wp('10%'),
      },
      btnTxt: {
        color: 'black',
        fontSize: wp('4%'),
        fontWeight: 'bold',
      },
      editIcon: {
        width: wp('13%'),
        height: wp('13%'),
        tintColor: 'red',
        position: 'absolute',
        bottom: -wp('2%'),
        right: -wp('3%'),
      },
      actionSheetContainer: {
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp('15%'),
        height: hp('25%'),
      },
      icon: {
        width: wp('14%'),
        height: wp('14%'),
        borderRadius: wp('7%'),
        resizeMode: 'contain',
        alignSelf:'center'
      },
      actionSheetTxt:{
        fontSize : wp('5%'),
        // fontWeight : 'bold',
        color : 'black',
        alignSelf : 'center'
      },
      mapContainer:{
        height : hp('75%'),
      },
      drawer:{
        resizeMode: 'contain',
        height: 45,
        width: 45
      }

})

export default styles;