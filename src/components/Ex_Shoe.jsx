import React, { Component } from "react";
import { message } from "antd";
import Cart from "./Cart";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import shoeArr from "./data"
export default class Ex_Shoe extends Component {
state = {
shoeArr: shoeArr,
detail:shoeArr[0],
cart: [],
// cart: shoeArr,
}
handleAdd = (shoe) => {
  // copy và push
  // kiểm tra sp được chọn đã có trong giỏ hàng chưa, sau đó sẽ quyết định push hay update giỏ hàng
  // so luong
  let cloneCart = [...this.state.cart];
  var index = cloneCart.findIndex((item)=>{
    return item.id ==shoe.id
  });
  if(index==-1){
// ko tìm thấy => push
let newShoe={...shoe,soLuong: 1}
cloneCart.push(newShoe);
  } else {
    // tìm thấy => ko push thêm, chỉ update số lượng hiện tại của phần tử được chọn trong mảng
    cloneCart[index].soLuong++;

  }
 this.setState({
  cart: cloneCart,
 })
}
handleRemove =(shoeId)=>{
 let  cloneCart = [ ...this.state.cart]

let index = cloneCart.findIndex(item=>item.id==shoeId)

cloneCart.splice(index, 1);
this.setState({cart: cloneCart});
// thông báo xoá thành công
message.success("Xoá thành công")
}
handleViewDetail = (shoe)=> {
this.setState({detail:shoe})
}
// handleIncrementQuantity = (shoeId) => {
// //option: +1, -1
// //shoe.soLuong = shoe.soLuong + option
// let cloneCart = [...this.state.cart];
// let index = cloneCart.findIndex(item=>item.id==shoeId)

// cloneCart[index].soLuong++;

// this.setState({cart: cloneCart});
// }
// handleDecrementQuantity = (shoeId) => {
//   //option: +1, -1
//   //shoe.soLuong = shoe.soLuong + option
//   let cloneCart = [...this.state.cart];
//   let index = cloneCart.findIndex(item=>item.id==shoeId)
//   if(cloneCart[index].soLuong==1){
//     cloneCart.splice(index, 1);
    
//   }else {
//     cloneCart[index].soLuong--;
    
//   }
//   this.setState({cart: cloneCart});
//   }

handleChangeQuantity = (id,option) =>{
let cloneCart = [...this.state.cart];
let index = cloneCart.findIndex((item)=> item.id ===id);
cloneCart[index].soLuong = cloneCart[index].soLuong + option;

cloneCart[index].soLuong== 0 && cloneCart.splice(index,1);
this.setState({cart:cloneCart});
}
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-7">
            <Cart 
              handleChangeQuantity={this.handleChangeQuantity}
            handleRemove={this.handleRemove}
             cart={this.state.cart} />
          </div>
          <div className="col-5">
            <ListShoe
          
            handleViewDetail={this.handleViewDetail} 
            handleBuy= {this.handleAdd}
             list ={this.state.shoeArr} />
            
          </div>
        </div>
        <DetailShoe detail={this.state.detail} />
      </div>
    );
  }
}
