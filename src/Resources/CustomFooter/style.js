import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerContainer :{
        // flex : 1,
        height : 70,
        borderTopRightRadius : 20,
        borderTopLeftRadius : 20,
        backgroundColor : '##FFFAFA',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 50,
    },
    btnContainer:{
        
        alignItems:'center',
        justifyContent:'center',
        // borderWidth :1
    },
    icon : {
        width : 45,
        height : 45,
    }
})

export default styles;