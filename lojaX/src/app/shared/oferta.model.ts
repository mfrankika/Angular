//4- classe model para tipicar os atributos do array  oferta
// importa em ofertas.service  e tipificar o array <Oferta>

export class Oferta {
  public id: number
  public categoria: string
  public titulo: string
  public descricao_oferta: string
  public anunciante: string
  public valor: number
  public destaque: boolean
  public imagens: Array<Object>
}