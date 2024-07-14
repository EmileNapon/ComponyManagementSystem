export interface Employee {
    id: number
    Nom: string
    idDep: number
    subordonnes:Employee[]
  }