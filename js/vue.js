//Input App Messagistica
 //MY_PROFIL -> foto, nome,
 //CONTATTI -> CONTATTO-1, CONTATTO-2, ..., CONTATTO-N
 //CONTATTO-N -> stesse proprieta di MY_PROFIL[] + ULTIMO ACCESSO

//Input -> Arrey di proprietà
 //const utentePrincipale = {
	 //foto: tipo stringa / url ,
	 //nome: tipo stringa / generica
//}

//var contatti = [contatto * contatto.length]

//const contatto  = {
  //foto: tipo stringa / url ,
	//nome: tipo stringa / generica,
	//ultimoAccesso: tipo stringa / rappresentazione di una data
 //}

const myApp = new Vue({
  el:'#myBoolzapp',
  data:{
      userName:{
      nome: 'Nome Utente',
      image: 'img/avatar_io.jpg'
    },
    contacts:[
      {
        name: 'michele',
        image: 'img/avatar_1.jpg',
        lastChat:'03/10/20'
      },
      {
        name: 'fabio',
        image: 'img/avatar_2.jpg',
        lastChat:'03/10/20'
      },
      {
        name: 'samuele',
        image: 'img/avatar_3.jpg',
        lastChat:'03/10/20'
      },
      {
        name: 'claudio',
        image: 'img/avatar_4.jpg',
        lastChat:'03/10/20'
      },
      {
        name: 'arnaldo',
        image: 'img/avatar_5.jpg',
        lastChat:'03/10/20'
      },
      {
        name: 'luisa',
        image: 'img/avatar_6.jpg',
        lastChat:'03/10/20'
      }
    ]
  },
})
