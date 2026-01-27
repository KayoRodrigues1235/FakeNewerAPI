# FakeNewerAPI

>[!IMPORTANT]
>Essa aplicação tem foco totalmente para fins de estudo e portfolio! Não é um portal de noticias veridico.


<div align="left">
 <img src="https://img.shields.io/badge/status-em desenvolvimento-green"></img>
</div>


## Sobre 

> FakeNewer é uma **API de notícias fictícias e absurdas**, criada com fins educacionais e experimentais.  
> O projeto simula um portal de notícias “quase confiável”, misturando tons realistas com conteúdos completamente inúteis, exagerados ou nonsense.


O foco principal é **aprendizado prático** de:
- Node.js 
- Express
- Arquitetura backend
- Consumo de API no frontend
- Organização de projeto

---

## Tecnologias Utilizadas

<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a> <a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" /></a>  <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  <a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  <a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  

---

Claro fique avontade para contribuir caso ache a ideia interessante 

## Instalação e Execução

```bash
# Clone
git clone https://github.com/seu-usuario/fakingnews.git
cd fakingnews

# instale as dependencias
npm install

#Rode
node src/index.js

```

## EndPoints atualmente
---

```bash
> GET health/ 

# resposta:
{
  "status": "ok",
  "service": "FakeNewer API",
  "uptime": 123.45
}
```
---
```bash
# Todas as noticias
> GET /news
```
---
```bash
# Buscar por ID
> GET /news/:id
```
