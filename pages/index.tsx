import { useState } from "react"
import { CardModey } from "../components/cardMoney"

export default function TodoList() {

  return (
    <>
      <h1>Converção de Moedas</h1>
      <CardModey de="USD" para="BRL"/>
      <CardModey de="BRL" para="USD"/>
    </>
  )
}
