//4)შექმენი Wishlist (სურვილების სია) კლასი, რომელიც ინახავს
//  ნივთებს. მეთოდები: addItem(), deleteItem(id), updateItem()

class Wishlist{
    constructor(){
        this.list=[]
    }
    addItem(item){
        let lastId = this.list[this.list.length - 1]?.id || 0
        let newObj={
            id:lastId+1,
            item
        }
        this.list.push(newObj)
    }
    deleteItem(id){
        this.list=this.list.filter(el=>el.id!==id)
    }
    updateItem(id,updatedItem){
        let find= this.list.find(el=>el.id===id)
        if(find){
            find.item=updatedItem
        }
    }
}

let wishlist= new Wishlist;
wishlist.addItem("cheese")
console.log(wishlist)
wishlist.updateItem(1,"waffle")
console.log(wishlist)
wishlist.deleteItem(1)
console.log(wishlist)



