const cartasPersonalizadas = {
    "Goe": "FELIZ DIA DE LA AMISTAAAA, weon ya 5 años XD, realmente no espere que una amistad dure tanto y mas por internet, la unica que perduro por mucho, que puedo decirte, que esta amistad dure mucho mas y poder vernos cuando sea posible en persona xD  -Ren",
    "Joto": "Joto, que puedo decirte weon. a que esta epico esto, no? en fin mucha chachara gracias por ser mi amigo que la amistad dure por muchos años mas. -Ren",
    "Kiwi": "Feliz dia de la amistad :u, nunca espere hacer esto pero creo que esta epico XDDD, en fin muchas gracias por esta amistad causa, aunque seas bien frio y cerrado. espero que pronto seas mas abierto. gracias por ser directo al momento de hablar, eso es mucho de apreciar, en fin pasala epico y que te vaya bien :u -Ren",
    "Teil": "CAUSAAAAA, el poder del autismo XDDDDDDDDDD. pese que te conozco recien, no quise saltarte de esta lista xD, ere muy buena gente, espero que te recuperes de tu brazo y cuando te recuperes poder jugar eee, feliz dia de la amistad -Ren",
    "Otaku": "Feliz dia de la amista causa, pese a que te conozco recien (o bueno maomeno) me caiste super bien, aunque pareces algo fria pero igual w, por cierto no me cansare para que veas anime w (ni lo e intentado pero igual XDDD) ahora si w un roblos? xD -Ren",

  };
  
  document.getElementById("code-form").addEventListener("submit", (e) => {
    e.preventDefault();
    
    const code = document.getElementById("secret-code-input").value.trim();
    const mensaje = cartasPersonalizadas[code];
  
    if (mensaje) {

      document.getElementById("code-modal").style.display = "none";
      document.getElementById("text").innerHTML = `<p>${mensaje}</p>`;
    } else {
      alert("Código inválido. Por favor, inténtalo de nuevo.");
    }
  });