import React, { useEffect } from 'react'
import "./citation.css"
import Navbar from '../navbar/Navbar'; 
import { useState } from 'react';


const Citation = () => {

   const [cita,setcit] = useState(1)
   const rand =()=>{
   setcit(Math.floor(Math.random() *21 ))
}


        var tab = [];
        tab[0] = "La motivation est ce qui vous met en route. L’habitude est ce qui vous fait continuer.💪";
        tab[1] = "L'echec n'est qu'une opportunité pour recommencer la même chose plus intelligemment.😉"
        tab[2] = "Si vous n’essayez jamais, vous ne réussirez jamais, mais si vous essayez, vous risquez de vous étonner vous-même. "
        tab[3] = " La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute .🤝"
        tab[4] = "La seule chose qui puisse empêcher un rêve d’aboutir c’est la peur d’échouer ."
        tab[5] = "Les espèces qui survivent ne sont pas les espèces les plus fortes, ni les plus intelligentes, mais celles qui s’adaptent le mieux aux changements."
        tab[6] = "La vie est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre 😉."
        tab[7] = "Souriez sans raison, la raison vas suivre.😁"
        tab[8] = "Le courage et la confiance en soi sont les meilleures des vertus.🫡"
        tab[9] = "La vie est drôle si on prends le temps de regarder."

        tab[10] = "Une star, c'est quelqu'un qui travaille dur pour être connu et qui, ensuite, porte des lunettes noires pour qu'on ne le reconnaisse pas 😂."
        tab[11] ="Si on travail pour gagner sa vie, pourquoi se tuer au travail.🤔"
        tab[12] = "La dernière fois que j'ai pénétré une femme, c'était en visitant la statue de la Liberté 😂."
        tab[13] = "Les hommes sont toujours sincères. Ils changent de sincérité voilà tout 😂."
        tab[14] = "Il y a deux manières de prendre une femme : par la taille et par les sentiments.😉"
        tab[15] = "Quand le christ ressuscita, il apparu d'abord à des femmes pour que la nouvelle se répande plus vite 😜."
        tab[16] =  "Des fois, j'ai pensé mettre fin à mes jours. Mais je ne savais jamais par lequel commencer 😂."
        tab[17] = "Chérie, serais-tu capable de former un 8 avec ta bouche ?Non. T’es nulle alors, car les poules sont capables de faire un neuf (un œuf) avec leur cul.😂"
        tab[18] = "Quel est le contraire de steak ?  Réponse : une pastèque.🤣"
        tab[19] = "C’est l’histoire de la maîtresse qui demande à Toto de lui citer dix animaux africains. Et Toto il répond « La girafe, l’éléphant et… 8 lions ! ». Ça pour sûr, il l’a bien eue."
        tab[20] = "Toto raconte à un copain : Mon prof est bizarre. L’autre jour, alors que je bavardais avec ma voisine, il a dit : « séparez-vous ou je vous colle » !"
        
       return (
    <div className='plus'>
        <Navbar></Navbar>
        <button onClick={rand}>citation</button>
        <h4>Citation du jour</h4>

        <div className='cit'>
        
        
        <h6 className='citation'>{tab[cita]}</h6>
        </div>
    </div>
  )
}

export default Citation
