# cit

##Création de la carte de fond

Index carte d'identité du territoire
Partir des géométries simples : EPCI, Département 44 et les 3 communes hors EPCI (Ouessant, Bréhat, Sein).
Faire un export GeoJson en Lambert 93.

Puis, charger le fichier geojson ici : 
https://mapshaper.org/

puis dans l'onglet console, lancer cette commande :
``-each 'id = code_geo + "|" + nom_geo' -o id-field=id format=svg``

Le résultat est un fichier svg dont les "paths" conntiennent un identifiant (id) qui est la concaténation de 2 champs (code_geo + nom_geo).

##Modification des thématiques
Le fichier template.tpl contient l'arborescence des thématiques lorsque l'on clique sur un EPCI.

##Modification de la liste des EPCI
Le fichier data.json contient la liste des EPCI et leur codes triés par ordre alphabétique ainsi que la correspondance entre certaines fiches n'étant pas présente sur tous les EPCI avec les codes EPCI.
