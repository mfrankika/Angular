//export class OfertasService {

    /* // 1 - criação  do serviço p recuperar dados e tornar o site dinamico
         // neste momento mockar os dados  p/ incorporar/injetar dentro do comp home
     public getOfertas():Array<string>{
      let ofertas = ['oferta1', 'Oferta2', 'Oferta3']
      return ofertas 
    } */
  /* 
  
    //3 - melhorando os dados  Ofertas  visando construir um model  - ofertas.model.ts
     public ofertas: Array<any> [
     
      //6 - tipificando melhor o array ofertas   - em home criar var para usar este serv
      // public ofertas: Oferta[] [
          {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
              {url: "/assets/ofertas/1/img1.jpg"},
              {url: "/assets/ofertas/1/img2.jpg"},
              {url: "/assets/ofertas/1/img3.jpg"},
              {url: "/assets/ofertas/1/img4.jpg"}
            ]
          },
          {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
              {url: "/assets/ofertas/2/img1.jpg"},
              {url: "/assets/ofertas/2/img2.jpg"},
              {url: "/assets/ofertas/2/img3.jpg"},
              {url: "/assets/ofertas/2/img4.jpg"}
            ]        
          },
          {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
              {url: "/assets/ofertas/3/img1.jpg"},
              {url: "/assets/ofertas/3/img2.jpg"},
              {url: "/assets/ofertas/3/img3.jpg"},
              {url: "/assets/ofertas/3/img4.jpg"},
              {url: "/assets/ofertas/3/img5.jpg"},
              {url: "/assets/ofertas/3/img6.jpg"}
            ]
          }
      ]
  
     // public getOfertas():Array<string>{       
        //agora pode retornar um array tipificado 
        public getOfertas():Array<Oferta>{
          return this.ofertas 
      }    
   */
  
  /* 
  // 10 - usar o http para consumir os dados da API atraves do json-server
  getOfertas - vai efetuar  uma requisiao http 
  e retornar uma promessa contendo um array de Ofertas
  subir o servidor : npm  json-server --watch  banco_dados_json
  resultado da URI : http://localhost:3000/ofertas 
  a URI retorna um observable entao transformar p promisse - toPromise( ) biblioteca rxjs 
  
  10.1 
  public getOfertas( ):  Promise<Ofertas[ ]>{
  return  this.http.get(' http://localhost:3000/ofertas' )
    .toPromisse()
    .then ((resposta: any ) => resposta.json())
  }

  10.2 http com filtro usar? na URI  
  public getOfertas( ):  Promise<Ofertas[ ]>{
  return  this.http.get(' http://localhost:3000/ofertas?destaque=true' )
    .toPromisse()
    .then ((resposta: any ) => resposta.json())
  
   */   

   


//***********************************   
        /* ensino de trabalhar com promisse sem http      
        public getOfertasPromise(): Promise<Oferta[]> {
          return new Promise((resolve, reject) => {
            if(false == false) {
              setTimeout(() => resolve(this.ofertas), 3000)
            } else {
              reject({erro: 404, mensagem:'deu pt'})
            }
          })
        }*/
  
      /*  //9 - promisse 1 
        public getOfertas(): Promise<Oferta[]> {
        // return  new Promise( ()=> {} ) 
              return  new Promise( (resolve, reject)=> {
                // algum tipo de processamento q no fim chama func resolve ou rejetc
                // p teste usarei resolve - usar no home q n retorna um array + uma promessa
                // resolve pegar o param this.oferta e passa para o .then - ver home
                //resolve(this.ofertas)
  
                // ha tb o lado se aconteceu algum problema - supondo:
                let deu_certo = false
                if (deu_certo){
                  resolve( this.ofertas)
                }else{
                  reject ( { codigo_erro: 404, message_erro: "servidor nao ok "})
                
              } ) 
              //encadeamento de acções antes de eviar para o  then que vai receber a promessa
              .then (( ofertas: Oferta[ ])=> {
                // faça mais isso antes de enviar
                //exe uma nova consulta ao um bco de dados,
                return ofertas
              })
              //outro encadeamento/cascateando os then ... tudo é assicrono neste momento
              .then (( ofertas: Oferta[ ])=> {
                // outra tratativa 
                return ofertas //obs sempre q tem 1 return pode-se capturar esse  return p o then seguinte
              })
              // tb possivel return de uma nova promessa
              .then (( ofertas: Oferta[ ])=> {
                // outra tratativa 
                return new promisse( ( resolve2, reject2) => {
                  // fazer tratativa 
                })
              })
            }
          */
       