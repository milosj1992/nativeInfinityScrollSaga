import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex:1,
    borderBottomWidth:1,
    borderColor:'#C8C7CC',
    flexDirection: 'row',
    alignItems: 'center',
    padding:10
  },
  image: {
    width: 50,
    height: 50,
  },
  title: {
    paddingLeft:25,
    flexWrap:'wrap'
  }
});
