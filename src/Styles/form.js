import { StyleSheet } from "react-native";
import colors from '../Styles/colors'

const formStyles = StyleSheet.create({
    input:{
        marginBottom:20
    },
    btnRegister:{
    backgroundColor: colors.primary,
    padding:5
    },

    btnTextLabel:{
    color: colors.dark
    },
    btnText:{
        backgroundColor: colors.primary,
        marginTop:15
    }
})

export default formStyles