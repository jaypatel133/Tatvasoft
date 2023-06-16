import React,{useContext,useEffect,useState}  from "react";
import { getAllCartItem,addCartItem,updateCartItem,DeleteCategory } from "../service/cart.service";
import { useSelector} from 'react-redux';


const CartContext = React.createContext();
const CartUpdateContext = React.createContext();


export function useCart(){
    return useContext(CartContext)
}

export function useUpdateCart(){
    return useContext(CartUpdateContext)
}

export function CartProvider({children})
{
    const userDetail = useSelector((state) => state.user.userDetail)


    const [cart,SetCart] = useState('');

    function addToCart(data) {
        let payload ={
            "bookId": data.bookId,
            "userId": userDetail.id,
            "quantity": data.quantity
        }
        addCartItem(payload).then((res)=>{
            console.log("book added to cart");
            setcartItem()
        })
    }
    function updateCart(data) {
        let payload ={
            "id":data.id,
            "bookId": data.bookId,
            "userId": userDetail.id,
            "quantity": data.quantity
        }
        updateCartItem(payload).then((res)=>{
            console.log("cart Item Updated");
            setcartItem()
        })
        
    }
    function removeFromCart(data) {
        DeleteCategory(data).then((res)=>{
            console.log("cart Item deleted");
            setcartItem()
        })
    }

    function setcartItem(){
        if(userDetail?.id){
            getAllCartItem(userDetail.id).then((res)=>{
                SetCart(res)
            })
        }
            // console.log('Cart: ',res)
    }

    useEffect(()=>{
        setcartItem()
    },[])



    return(
        <CartContext.Provider value={cart}>
            <CartUpdateContext.Provider value={{addToCart,updateCart,removeFromCart}}>
                {children}
            </CartUpdateContext.Provider>
        </CartContext.Provider>
    )
}