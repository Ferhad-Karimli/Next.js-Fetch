// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';
//User
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