import Taro from '@tarojs/taro';
import { View, Text  } from '@tarojs/components';
import { AtSearchBar , AtDrawer , AtIcon , AtAccordion , AtList , AtListItem } from 'taro-ui'
import PageSwipeAd from '../comon/pageSwipeAd';

export default class Product extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      show:true,
      open:true
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
  handleClick (value) {
    this.setState({
      open: value
    })
  }
  render () {
    return (
      <View className='productPage'>
      <AtDrawer 
        show={this.state.show} 
      >
         <AtAccordion
           open={this.state.open}
           onClick={this.handleClick.bind(this)}
           title='标题一'
         >
            <AtList hasBorder={false}>
              <AtListItem
                title='标题文字'
                arrow='right'
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
              />
            </AtList>
          </AtAccordion>
          <AtAccordion
            open={this.state.open}
            onClick={this.handleClick.bind(this)}
            title='标题一'
          >
            <AtList hasBorder={false}>
              <AtListItem
                title='标题文字'
                arrow='right'
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
              />
              <AtListItem
                title='标题文字'
                note='描述信息'
                arrow='right'
              />
            </AtList>
          </AtAccordion>
      </AtDrawer>
        <View className='doc-body'>
          <AtSearchBar
            actionName='搜一下'
            value={this.state.value}
            onChange={this.onChange.bind(this)}
            onActionClick={this.onActionClick.bind(this)}
          />
          <View className='panel'>
              <View className='panel__title'>产品列表</View>
          </View>
          <View className='panel'>
                <View className='panel__content'>
                  
                </View>
          </View>
          <View className='panel'>
              <View className='panel__title'>产品推荐</View>
          </View>
          <View className='panel'>
                <View className='panel__content'>
                  <PageSwipeAd pageId='productAd' ></PageSwipeAd>
                </View>
          </View>
         
          
        </View>
       
      </View>
    )
  }
}
