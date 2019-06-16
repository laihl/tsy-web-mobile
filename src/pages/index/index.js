import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import Product from './product/product';

import './index.css'
import Home from './home/home';
import ShoppingCart from './shoppingCart/shoppingCart';
import User from './user/User';

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 1
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    });
  }
  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() {
    
   }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let status = null;
    
    if (this.state.current == '0') {
      status = <Home />
    } else if (this.state.current == '1') {
      status = <Product />
    } else if (this.state.current == '2') {
      status = <ShoppingCart />
    } else if (this.state.current == '3') {
      status = <User />
    }

    return (
      <View className='index'>
        {status}
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'home', text: 'new' },
            { title: '产品', iconType: 'shopping-bag' },
            { title: '货车', iconType: 'shopping-cart' },
            { title: '我的', iconType: 'user', text: '100', max: '99' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
          iconSize='20'
          fontSize='12'
        />
      </View>
    )
  }
}
