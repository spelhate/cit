# cit
Index carte d'identité du territoire

https://kartenn.region-bretagne.fr/kartoviz/apps/region/territoire/data/epci_simple.geojson

Pour générer la carte svg (map.svg), il faut à partir d'un fichier geojson utiliser cette ressource en ligne :

https://mapshaper.org/

puis dans l'onglet console, lancer cette commande:

``-each 'id = code_geo + "|" + nom_geo' -o id-field=id format=svg``

Le résultat est un fichier svg dont les "paths" conntiennent un identifiant (id) qui est la concaténation de 2 champs (code_geo + nom_geo)
