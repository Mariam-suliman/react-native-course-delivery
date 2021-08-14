import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:
    {
        width:120,
        height:120,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#E7E7E7',
        marginHorizontal:8,
        // shadowColor: "#000",
        shadowOffset: 
        {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 3,

        alignSelf:'flex-end',
        // backgroundColor:'red'
        justifyContent:'center',
        alignItems:'center',
    },
    infoText:
    {
        fontSize:18,
        textAlign:'center',
    },
    infoNumber:
    {
        fontSize:14,
        textAlign:'center',
        lineHeight:24,
    }
})