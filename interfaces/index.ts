export type User = {
  id: number
  name: string
}


export interface ItemType {
  id: number
  name: string
  image: string
  description: string
}

export interface CatsResultType<T> {
  messages: string
  result:{
    data:T[]
  } 
}