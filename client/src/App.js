import React from 'react'

import AddBuyForm from './components/AddBuyForm'
import BuyList from './components/BuyList'
import BuyTotal from './components/BuyTotal'

import { AppProvider } from './context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <div>
        <AddBuyForm />
        <BuyList />
        <BuyTotal />
      </div>
    </AppProvider>
  )
}
