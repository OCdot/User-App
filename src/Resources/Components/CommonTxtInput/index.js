import { TextInput } from "react-native"
import styles from "./style"

const CommonTxtInput = ({placeholder,txtEntry =false ,input,value}) =>{
    return(
        <TextInput style = {styles.input}
        placeholder={placeholder}
        secureTextEntry = {txtEntry}
        onChangeText={input}
        value={value}
        placeholderTextColor={"black"}
         />
    )
}

export default CommonTxtInput