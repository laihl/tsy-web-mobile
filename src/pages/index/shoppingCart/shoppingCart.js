import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class ShoppingCart extends Taro.Component {
  render() {
    return (
      <View style={{display:"flex",flexDirection:"column",height:"100%",width:"100%",position:"absolute"}}>
        <View style={{background:"tomato"}}> header</View>
        <View style={{flex:"1",background:"gold"}}> ShoppingCart </View>
      </View>
    );
  }
}
