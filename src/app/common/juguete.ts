export interface InterfaceJuguete {
    juguetes: Juguete[]
  }
  
  export interface Juguete {
    _id: string
    nombre: string
    imagen: string
    categoria: string
    edadMinima: number
    precio: number
  }
  