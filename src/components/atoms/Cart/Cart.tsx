import * as React from 'react'

export interface Item {
  id: string
  quantity: number
  price: number
}

export type FullItem = (item: Item) => void
export type PartialItem = (partialItem: { id: string }) => void

interface RenderProps {
  cartItems: Item[]
  addToCart: FullItem
  subtractFromCart: FullItem
  replaceInCart: FullItem
  deleteFromCart: PartialItem
  cartTotal: () => number
}

interface Props {
  children?: (props: { cartItems: Item[] }) => React.ComponentType | Element | JSX.Element
}

interface State {
  items: Item[]
}

const LOCAL_STORAGE_KEY = 'bamboo::cart'

export const CartContext = React.createContext({} as RenderProps)

export class Cart extends React.Component<Props, State> {
  public static defaultProps = {}

  public state = {
    // @ts-ignore
    items: [],
  }

  public componentDidMount() {
    const persistedItems = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!persistedItems) {
      return
    }
    this.setState({
      items: JSON.parse(persistedItems),
    })
  }

  public componentWillUnmount() {
    const persistedItems = JSON.stringify(this.state.items)
    localStorage.setItem(LOCAL_STORAGE_KEY, persistedItems)
  }

  public replaceInCart = ({ id, price, quantity }: Item) => {
    const resetItems = this.state.items.filter(item => item.id !== id)
    this.setState({
      items: [...resetItems, { id, quantity, price }],
    })
  }

  public deleteFromCart = ({ id }: { id: string }) => {
    this.setState({
      items: this.state.items.filter(item => item.id !== id),
    })
  }

  public addToCart = ({ id, price, quantity = 1 }: Item) => {
    const cartItem = this.state.items.find(item => item.id === id)
    if (!cartItem) {
      return
    }
    const updateItem = {
      ...cartItem,
      price,
      quantity: cartItem.quantity + quantity,
    }
    this.setState({
      items: this.state.items.map(item => (item.id === id ? updateItem : item)),
    })
  }

  public subtractFromCart = ({ id, price, quantity = 1 }: Item) => {
    const cartItem = this.state.items.find(item => item.id === id)
    if (!cartItem) {
      return
    }
    if (cartItem.quantity === 0) {
      return
    }
    const updateItem = {
      ...cartItem,
      price,
      quantity: cartItem.quantity - quantity,
    }
    this.setState({
      items: this.state.items.map(item => (item.id === id ? updateItem : item)),
    })
  }

  public cartTotal = () => {
    const { items } = this.state
    const inflatedTotal = items.reduce((total, item) => total + item.price * item.quantity * 100, 0)
    return inflatedTotal / 100
  }

  public render() {
    const { children } = this.props
    const { items } = this.state
    return (
      <CartContext.Provider
        value={{
          addToCart: this.addToCart,
          cartItems: items,
          cartTotal: this.cartTotal,
          deleteFromCart: this.deleteFromCart,
          replaceInCart: this.replaceInCart,
          subtractFromCart: this.subtractFromCart,
        }}
      >
        {children({ cartItems: items })}
      </CartContext.Provider>
    )
  }
}
