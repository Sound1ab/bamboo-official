import * as React from 'react'

export interface Item {
  id: string
  quantity: number
  price: number
}

export type FullItem = (item: Item) => void
export type PartialItem = (partialItem: { id: string }) => void
export type CartTotal = () => { inflatedTotal: number; prettyTotal: number }

interface RenderProps {
  cartItems: Item[]
  addToCart: FullItem
  subtractFromCart: FullItem
  replaceInCart: FullItem
  deleteFromCart: PartialItem
  cartTotal: number
  checkout: () => void
  numberOfItemsInCart: number
}

interface Props {
  children?: (props: { cartItems: Item[] }) => React.ComponentType | Element | JSX.Element
}

interface State {
  items: Item[]
}

enum LOCAL_STORAGE {
  KEY = 'bamboo::cart',
}

export const CartContext = React.createContext({} as RenderProps)

export class Cart extends React.Component<Props, State> {
  public static defaultProps = {}

  public state = {
    // @ts-ignore
    items: [],
  }

  private stripeHandler: any

  public componentDidMount() {
    this.configureStripe()
    this.loadCart()
  }

  public componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    if (this.state !== prevState) {
      this.saveCart()
    }
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
    const updateItem = cartItem
      ? {
          ...cartItem,
          price,
          quantity: cartItem.quantity + quantity,
        }
      : { id, price, quantity }

    this.setState({
      items: cartItem
        ? this.state.items.map(item => (item.id === id ? updateItem : item))
        : [...this.state.items, updateItem],
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

  public cartTotal: CartTotal = () => {
    const { items } = this.state
    const inflatedTotal = items.reduce((total, item) => total + item.price * item.quantity * 100, 0)
    return {
      inflatedTotal,
      prettyTotal: Number((inflatedTotal / 100).toFixed(2)),
    }
  }

  public checkout = () => {
    this.stripeHandler.open({
      amount: this.cartTotal().inflatedTotal,
      name: 'Bam Boo',
      token: (token: object) => {
        // console.log('sending token to server', token)
        return token
      },
    })
  }

  public render() {
    const { children } = this.props
    const { items } = this.state
    return (
      <CartContext.Provider
        value={{
          addToCart: this.addToCart,
          cartItems: items,
          cartTotal: this.cartTotal().prettyTotal,
          checkout: this.checkout,
          deleteFromCart: this.deleteFromCart,
          numberOfItemsInCart: this.state.items.reduce((total, item) => 1 * item.quantity + total, 0),
          replaceInCart: this.replaceInCart,
          subtractFromCart: this.subtractFromCart,
        }}
      >
        {children({ cartItems: items })}
      </CartContext.Provider>
    )
  }

  private loadCart = () => {
    const persistedItems = localStorage.getItem(LOCAL_STORAGE.KEY)
    if (!persistedItems) {
      return
    }
    this.setState({
      items: JSON.parse(persistedItems),
    })
  }

  private saveCart = () => {
    const persistedItems = JSON.stringify(this.state.items)
    localStorage.setItem(LOCAL_STORAGE.KEY, persistedItems)
  }

  private configureStripe = () => {
    this.stripeHandler = (window as any).StripeCheckout.configure({
      closed: (event: any) => {
        return event
      },
      key: 'pk_test_9L63TDVY2WFCZK16HMjpDGiB',
      locale: 'auto',
    })
  }
}
