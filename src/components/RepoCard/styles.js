import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container:
    {
        // marginTop:50,
        backgroundColor:'white',
        // flexDirection:'row-reverse',
        // alignItems:'center',
        borderWidth:1,
        borderColor:'#E7E7E7',
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:8,
        marginBottom:16,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.22,

        elevation: 3,
    },
    contentContainer:
    {
        flexDirection:'row-reverse',
        alignItems:'center',
        marginBottom:16,
    },
    InfoCardContainer:{
        flexDirection:'row-reverse',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    image:
    {
        height:80,
        width:80,
        borderRadius:8,
        marginStart:20
    },
    rightView:
    {
        marginStart:8,

    },
    title:{
        fontSize:20,
        lineHeight:32,
    },
    desc:
    {
        fontSize:14,
        lineHeight:24,
    }

})