# Julien & Léo
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Début

Tout d'abord, modifiez le fichier `botconfig.json` et remplissez` OWNERID`, `PREFIX` et` TOKEN`.

La variable `OWNERID` doit être définie sur votre Discord ID, que vous pouvez obtenir en activant le mode développeur (qui doit se trouve dans l'onglet "apparence" dans les paramètres), en cliquant avec le bouton droit sur votre nom dans la liste en ligne de n'importe quel serveur, puis en cliquant sur "Copier ID".

La variable `PREFIX` est utilisée pour indiquer au bot quel préfixe vos commandes doivent utiliser. La plupart des bots utilisent «!».

La variable `TOKEN` est le jeton de votre bot Discord. Vous pouvez l'obtenir sur le portail des développeurs Discord.

Après les avoir remplis, installez la [version indev de discord.js](https://github.com/hydrabolt/discord.js/) à l'aide de NPM. Assurez-vous que vous avez node.js >= 6.0.0, puis exécutez `npm install`. 

## Ajout de commandes

Pour ajouter des commandes au bot, créez de nouveaux fichiers `.js` dans le répertoire `commands`. Après avoir écrit le code JavaScript nécessaire à votre commande, ajoutez les lignes suivantes au bas du fichier:

```javascript
module.exports = {
  main: (bot, msg, settings) => {
	//code ici
  },
  args: '<string>',
  help: 'sample help text',
  hide: false
}
```

La fonction `main` vous donne accès à tout dans le fichier `bot.js`. Ainsi, par exemple, pour envoyer une réponse, vous pouvez simplement ajouter `msg.reply("reply")` à l'intérieur de la fonction `main`, et elle s'exécutera à chaque appel de la commande.

Les trois autres lignes en bas aident à générer le texte d'aide. Si vous définissez `hide` sur true, il n'apparaîtra pas dans le menu d'aide, mais sinon, vous devez inclure `args` et `help`, et les remplir pour aider l'utilisateur à savoir l'utilité de cette commande.

`args` indique à l'utilisateur les arguments qu'il doit fournir, et `help` consiste simplement à fournir un texte d'aide générique.

## Fonctionnement

Enfin, pour exécuter le bot, un simple `node bot.js` fera généralement l'affaire. Cependant, si vous souhaitez continuer à faire fonctionner votre bot, je vous suggère d'utiliser [forever](https://github.com/foreverjs/forever). Installez-le avec `npm install forever -g`, puis exécutez simplement` forever start bot.js` dans le même dossier que le bot.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Celestarien"><img src="https://avatars2.githubusercontent.com/u/43401854?v=4" width="100px;" alt=""/><br /><sub><b>Celestarien</b></sub></a><br /><a href="https://github.com/Celestarien/bot_discord_projet_infra/commits?author=Celestarien" title="Tests">⚠️</a> <a href="https://github.com/Celestarien/bot_discord_projet_infra/commits?author=Celestarien" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Leoesb33"><img src="https://avatars1.githubusercontent.com/u/57182111?v=4" width="100px;" alt=""/><br /><sub><b>Leoesb33</b></sub></a><br /><a href="https://github.com/Celestarien/bot_discord_projet_infra/commits?author=Leoesb33" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
