import Taro from '@tarojs/taro';
import { View, Text  } from '@tarojs/components';
import { AtSearchBar ,  AtTabs , AtTabsPane  } from 'taro-ui'
import PageSwipeAd from '../comon/pageSwipeAd';
import { id } from 'postcss-selector-parser';

export default class Product extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      tabCurrent:0
    }
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  onActionClick () {
    console.log('开始搜索')
  }
  handleClick (stateName,value) {
    this.setState({
      open: value,
      [stateName]: value
    })
  }
  render () {
    const { current } = this.state
    const tabList = [ 
      { title: '2013年' },
      { title: '2014年' },
      { title: '2015年' },
      { title: '2016年' },
      { title: '2017年' },
      { title: '2018年' }
    ] 
    const productPage = {
      dataList: [
        {
          productName : "",
          type:1,
          productId: 1,
          classifyId:"",
          left:112, 
          isTop:true,
          isHot:true,
          isNew:true,
          imgUrl:""
        },
      ],
      totalNum:10,
      total:100,
      pageSize:10
    }
    return (
      <View className='productPage page'>
        
        <View className='doc-body'>
          <AtSearchBar
            actionName='搜一下'
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
          <View className='panel'>
              <View className='panel__title'>产品推荐</View>
              <View className='panel__content'>
                  <PageSwipeAd pageId='productAd' ></PageSwipeAd>
                </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>产品列表</View>
            <View className='panel__content'>
              <AtTabs style={{flex:"1"}} height="100px" tabDirection='vertical' current={current} tabList={tabList} onClick={this.handleClick.bind(this, 'current')}>
                <AtTabsPane tabDirection='vertical' current={current} index={0}>
                  <View className='tab-content--vertical'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current} index={1}>
                  <View className='tab-content--vertical'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current} index={2}>
                  <View className='tab-content--vertical'>标签页三的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current} index={3}>
                  <View className='tab-content--vertical'>标签页四的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current} index={4}>
                  <View className='tab-content--vertical'>标签页五的内容</View>
                </AtTabsPane>
                <AtTabsPane tabDirection='vertical' current={current} index={5}>
                  <View className='tab-content--vertical'>标签页六的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
           </View>

        </View>
      </View>
    )
  }
}
