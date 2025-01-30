/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ['the', 'her', 'this'];
  let adj = ['amazing', 'tiny', 'beautiful'];
  let noun = ['motherfucker', 'revolver', 'machine'];
  let terms = ['.com.uk', '.com', '.agr', '.io']

pronoun.forEach((kiwi) => {
  adj.forEach((slack) => {
    noun.forEach((javi) => {
      terms.forEach((miguel) => {
        console.log(kiwi + slack + javi + miguel)
      })
    })
  })
})