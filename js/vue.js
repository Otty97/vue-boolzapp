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
        lastChat:'03/10/20',
        convertation:[
          {
            text:'compri il latte?',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'non posso sto a lavoro',
            date: '21 ott 2020',
            type:'sent'
          }
            ]
      },
      {
        name: 'fabio',
        image: 'img/avatar_2.jpg',
        lastChat:'03/10/20',
        convertation:[
          {
            text:'Allora Calcetto questa sera?',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'ok ricordati di portare le casacche',
            date: '21 ott 2020',
            type:'sent'
          }
            ]
      },
      {
        name: 'samuele',
        image: 'img/avatar_3.jpg',
        lastChat:'03/10/20',
        convertation:[
          {
            text:'hai sentito Fabio?',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'gli scrivo adesso',
            date: '21 ott 2020',
            type:'sent'
          }
            ]
      },
      {
        name: 'claudio',
        image: 'img/avatar_4.jpg',
        lastChat:'03/10/20',
        convertation:[
          {
            text:'ti ho linkato il progetto',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'lo guado qusta sera',
            date: '21 ott 2020',
            type:'sent'
          }
            ]
      },
      {
        name: 'arnaldo',
        image: 'img/avatar_5.jpg',
        lastChat:'03/10/20',
        convertation:[
          {
            text:'Ho aggiornato il portafoglio azionario. Ti aspetto domani in filiale.',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'perfetto conferma il transfer cosi domani procediamo',
            date: '21 ott 2020',
            type:'sent'
          }
            ]
      },
      {
        name: 'luisa',
        image: 'img/avatar_6.jpg',
        lastChat:'03/10/20',
        convertation:[
          {
            text:'amo questa sera shushi?',
            date:'20 ott 2020',
            type: 'received'
          },
          {
            text:'ok dopo le 21 perche abbiamo calcetto',
            date: '21 ott 2020',
            type:'sent'
          }
            ]
      }
    ],
    notificheStatus:[
      {
        icon: "fas fa-bell-slash",
        title:'Ricevi notifiche di nuovi messaggi',
        status: 'Attiva notifiche desktop',
      },
      {
        icon: "fas fa-bell",
        title:'Silenzia notifiche dei nuovi messaggi',
        status: 'disattiva notifiche desktop',
      },
    ],
    notificheActive:true,
    currentIndex:0,
    myInput:"",
    search:"",
  },

  methods:{
    selected: function(index){//funzione che seleziona la mex page in base al contatto selezionato
       this.currentIndex = index
    },
    receivedMessage: function(){//funzione che setta una risposta automatica
      this.contacts[this.currentIndex].convertation.push(
      {
        text: 'ok perfetto',
        type: 'received',
        date: '21 ott 2020'
      })
    },
    sendMessage: function(){//funzione per inviare l'input
          this.contacts[this.currentIndex].convertation.push(
            {
            text: this.myInput,
            type: 'sent',
            date: '21 ott 2020'
            });
      setTimeout(()=> {this.receivedMessage()} ,3000);
    },
    notificheOn: function(){
      this.notificheActive = false;
      alert('Le notifiche sono state attivate')
    },
    notificheOff: function(){
      this.notificheActive = true;
    }
  },

  computed:{
    filteredContacts() {//funzione che filtra i contatti
      return this.contacts.filter(contact => {
        return contact.name.toLocaleLowerCase().includes(this.search.toLowerCase());
      })
    },
   }
})
