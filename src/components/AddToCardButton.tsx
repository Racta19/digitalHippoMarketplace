import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";

const AddToCartButton = ({product}: {product: Product}) => {
    const {addItem} = useCart()
    const [isSucess, setIsSucess] = useState<boolean>(false)
    useEffect(() => {
        const timeOut = setTimeout(() => {setIsSucess(false)}, 2000)
        return () => clearTimeout(timeOut)
    },[isSucess])
    return(
        <Button 
            onClick={() => {
                addItem(product)
                setIsSucess(true)
            }} 
            size='lg' 
            className="w-full"
        >
            {isSucess ? "Added": "Add to cart"}
        </Button>
    )
}

export default AddToCartButton;