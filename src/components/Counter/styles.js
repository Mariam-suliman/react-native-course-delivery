import { StyleSheet } from "react-native";
export default StyleSheet.create(
    {
      countContainer:
      {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      count:
      {
        fontSize:150,
        color:'#F3F2C9'
      },
      btnContaiener:
      {
        flexDirection:'row',
        margin:20,
        justifyContent:'space-around',
        paddingVertical:20
      },
      btn:
      {
        width:110,
        height:110,
        backgroundColor:'#F3F2C9',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
         margin:20
      },
      btnText:
      {
        fontSize:100,
        color:'#055052'
      }
    }
  );