import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

export default class PageAd extends Taro.Component {
  render() {
    return (
      <View>
        <Text> PageAd for {this.props.pageId} </Text>
      </View>
    );
  }
}
