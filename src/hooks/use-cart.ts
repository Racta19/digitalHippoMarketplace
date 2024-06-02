import { Product } from "@/payload-types"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export type CartItem = {
    product: Product
}

//Add items
//Remove items
//Clear Cart
//Keep track of cart items

type CartState = {
    items: CartItem[],
    addItem: (product: Product) => void
    removeItem: (productID: string) => void
    clearCart: () => void
}

export const useCart = create<CartState>()(
    persist((set) => ({
        items: [], 
        addItem: (product) => set((state) => {
            return{ items: [...state.items, {product}] }
        }),
        removeItem: (id) => set((state) => ({
            items: state.items.filter((item) => item.product.id !== id)
        })),
        clearCart: () => set({items: []})
    }),{
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)