import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class PageSwipeAd extends Taro.Component {
  render() {
    return (
      <View>
        <Text> PageSwipeAd for {this.props.pageId} </Text>
      </View>
    );
  }
}
