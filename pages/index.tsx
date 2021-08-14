import { useState } from "react"
import { CardMoney } from "../components/cardMoney"

export default function TodoList() {

  return (
    <>
      <h1>Converção de Moedas</h1>
      <CardMoney de="USD" para="BRL"/>
      <CardMoney de="BRL" para="USD"/>
    </>
  )
}
