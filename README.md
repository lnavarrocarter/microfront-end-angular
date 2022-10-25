# Example microFront End


Use @angular-architects/module-federation to create a microFront End module proyect

cree un nuevo proyecto para 
```bash
ng add @nguniversal/common --project yourProject
ng add @angular-architects/module-federation --project yourProject
```
ajusta el archivo de configuracion de webpack

Luego inicia tu aplicacion:
```bash
ng build yourProject && ng run yourProject:server
node dist/yourProject/server/main.js
```
