import Taro from '@tarojs/taro';
import { View, Text ,Image, Swiper, SwiperItem } from '@tarojs/components'
import {AtSearchBar} from 'taro-ui'

import './css.scss';

export default class Home extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }

  textClick() {
    Taro.navigateTo({
      url: "/pages/index/home/test"
    })
  }

  onChange (value) {
    this.setState({
      value: value
    })
  }

  onActionClick () {
    console.log('开始搜索')
  }
  
  render() {
    let imgUrls = [
      'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
      'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
      'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180'
    ];
    return (
      <View className='page'>
        
        <View className='doc-body'>
          {/* 基础用法 */}
          <AtSearchBar
            actionName='搜一下'
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Swiper
                  indicatorColor='#999'
                  indicatorActiveColor='#e0b891'
                  duration='500'
                  circular='true'
                  autoplay='true'
                  indicatorDots='#e0b891'
                  preMargin='20'
                >
                  {
                    imgUrls.map((item, idx) => (
                      <SwiperItem key={idx}>
                        <Image src={item} className='slide-image' width='355' height='150' />
                      </SwiperItem>
                    ))
                  }
                </Swiper>

               
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    );
  }
}
