import Taro from '@tarojs/taro';
import { View, Text , Image , Swiper , SwiperItem } from '@tarojs/components'
import { AtSearchBar , AtGrid , AtCard } from 'taro-ui'

import './css.scss';
import PageAd from '../comon/pageAd';

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
      <View className='homePage'>
        
        <View className='doc-body'>
          {/* 基础用法 */}
          <AtSearchBar
            actionName='搜一下'
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
          <View className='bannar'>
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
             <View className='example-item'>
          </View>
          <View className='iconList'>
            <AtGrid data={
                [
                  {
                    image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                    value: '零售发布'
                  },
                  {
                    image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                    value: '返点'
                  },
                  {
                    image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                    value: '回款'
                  }
                ]
              } 
            />
          </View>

          <View className='panel'>
            <View className='panel__title'>茶人茶事</View>
          </View>
          <View className='panel'>
            <View className='panel__content'>
                <AtCard
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__content'>
                <AtCard
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__content'>
                <AtCard
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__content'>
                <AtCard
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__content'>
                <AtCard
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
            </View>
          </View>
        </View>
        
        <View className='panel'>
            <View className='panel__title'>推荐</View>
        </View>
        <View className='panel'>
          <View  className='panel__content'>
            <PageAd pageId='homeAd'></PageAd>
          </View>
        </View>
        
      </View>
        {/* E Body */}
    </View>
    );
  }
}
