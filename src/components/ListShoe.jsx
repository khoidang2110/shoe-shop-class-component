import React, { Component } from 'react'
import ItemShoe from "./ItemShoe"

export default class ListShoe extends Component {

  renderList=()=>{
    return this.props.list.map((item,index)=>{
      return <ItemShoe
      
      handleViewDetail={this.props.handleViewDetail}
      handleAddToCart={ this.props.handleBuy}
      item={item} 
      key={index}/>
    })
  }
  render() {
    return  <div className='row'>{this.renderList()}</div>
    
  }
}
