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

## Server Git sous Centos7 (en root@localhost)
Pour la création du serveur git sous Centos7 (sans interface graphique) il faut commencer par installé `nano` afin de pouvoir modifier certain fichier : `yum -y install nano` .      
Un fois celà fait nous pouvons dès à présent installer git et par la même occasion le shell Git :      
`yum install -y git `        
`echo "/bin/git-shell" >> /etc/shells`     
Par la suite créez un nouveau groupe pour les utilisateurs Git et spécifiez l'authentification sans mot de passe pour ce groupe :  
`groupadd git_users`    
On va devoir donner l'accès au git à nos futurs users et pour celà il faut modifier le fichier de conf se situant ici `/etc/ssh/sshd_config` grace à `nano` installer au début et y rajouter ces lignes à la fin du fichier :    
`Match Group git_users`   
`PasswordAuthentication no`   
Redémarrer le service ssh : `service sshd restart`    
Créez un nouveau dossier pour contenir les futurs référentiels distants git: `mkdir / référentiels`   

On va pouvoir passer à la création des users git et d'un fichier contenant leurs clés publiques SSH qu'on le devra générer plus tard...  
```
useradd -g git_users git_user1
mkdir / home / git_user1 / .ssh
chmod 700 / home / git_user1 / .ssh
echo "" > / home / git_user1 / .ssh / authorized_keys
chmod 600 / home / git_user1 / .ssh / authorized_keys
chown -R git_user1 : git_users / home / git_user1 / .ssh
usermod --shell / bin / git-shell git_user1
```   

Pour le création d'un référentiel distant et le lancement du git tapez ces commandes :   
```
mkdir / repositories / git_repo1.git
cd / repositories / git_repo1.git
git init --bare --shared = group
sudo chgrp -R git_users.
```     

On peut maintenant fournir l'accès d'un `git_user1` au référentiel `git_repo1.git` créer juste avant :   
```
unlink / home / git_user1 / git_repo1.git
sudo ln -s / repositories / git_repo1.git / home / git_user1 /
chown -R git_user1: git_users / home / git_user1
```

Maintenant repasser sur votre coté client :       
- Pour Windows installer Git avec Git bash puis entrez dans le Git bash `ssh-keygen` pour générer une clé SSH afin de faire la connection avec le serveur. Ensuite tapez `~/.ssh/id_rsa.pub` pour voir votre clé publique et copié là !       

- Pour Linux faites `sudo apt install git` et c'est tout ! répétez les même commandes pour générer la clé SSH et la copier que sur Windows.   

Retourner sur Centos7 et il va falloir ajouter cette clé SSH à notre user1 créé précédement :  
```
usersPubKey = 'met_ici_ta_clé_ssh_publique'
echo $ usersPubKey > / home / git_user1 / .ssh / authorized_keys
```
(c'est ici qu'on a bloqué, impossible de collé la clé SSH dans la VM sans que ça la déforme).  
 Mais l'idée c'était de créer un nouveau dossier côté client, puis initialiser git et le pousser sur le serveur de référentiel git : 
 ```
mkdir test1 && cd test1
git init .
git config --global user.email "tonmaile@mail.com"
git config --global user.name "Votre nom"
echo test_content1 > test1.txt
echo test_content2 > test2.txt
git add .
git commit -m "initial commit"
git remote add origin git_user1 @ 192.168.70.136:git_repo1.git  //récupère l'ip sur centos avec : ip address
git push origin master
 ```
 Et pour tester le tout créer un dossier random et cloner le référentiel distant qu'on a créer dans ce dossier random :   
 ```
 mkdir random
cd random
git clone git_user1 @ 192.168.70.136:git_repo1.git.
ls  //le contenu devrait apparaitre
 ```


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
