export const initialState={
    basket:[]
}
export const getBasketTotal=(basket)=>{
    return (
        basket?.reduce((amount,item)=>item.price + amount, 0)
    )
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.payload]
            }
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id  === action.id
            );

            let newBasket=[...state.basket];

            if(index>=0){
                newBasket.splice(index,1)
            } else{
                console.log(`Can't remove the product (id: ${action.id} as not in the basket!)`)
            }

            // const deletebasket=state.basket.filter((each)=> each.id !== action.id)

            return {
                ...state,
                basket:newBasket
                   
                
            }
    }
}
export default reducer