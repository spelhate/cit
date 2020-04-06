<div class="card" data-filter="{{label}}">
    <div class="card-header bg-white" id="heading-{{dataid}}">
        <h2 class="mb-0"><button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#epci_{{dataid}}" aria-expanded="true" aria-controls="{{dataid}}">{{label}}</button></h2></div>
    <div id="epci_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}" data-parent="#epci_list">
        <div class="card-body">
            <div class="list-group">
                <a target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/insee_2016/{{dataid}}" class="bg-dark fichen-link list-group-item list-group-action">La population du territoire</a>
                <a target="_blank" href="#" class="bg-dark fichen-link list-group-item list-group-action">L'EPCI et les communes</a></div>
                <a target="_blank" href="https://www.banatic.interieur.gouv.fr/V5/recherche-de-groupements/fiche-raison-sociale.php?siren={{dataid}}" class="bg-dark fichen-link list-group-item list-group-action">Fiche Banatic</a>
                <a target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci/{{dataid}}" class="bg-dark fichen-link list-group-item list-group-action">Fiche lycées</a>
                <!--<a target="_blank" href="#" class="bg-dark fichen-link list-group-item list-group-action">L’engagement du territoire dans la Breizh Cop </a></div>-->
        </div>
    </div>
</div>