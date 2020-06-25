
{{#epci}}
    <div class="card" data-filter="{{label}}">
        <div class="card-header collapsed" id="heading-{{dataid}}" data-toggle="collapse" data-target="#epci_{{dataid}}"
            aria-expanded="false" aria-controls="{{dataid}}">
            <h3 class="mb-0">{{label}}</h3>
        </div>

        <div id="epci_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}">
            <div class="card-body">
                <a target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_chiffres_cles/{{dataid}}">Les chiffres clés
                    du territoire</a>
                <a target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_population/{{dataid}}">La population du
                    territoire</a>
                <a target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_communes/{{dataid}}">L'EPCI et les
                    communes</a>
                <a target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_jeunesse/{{dataid}}">Fiche jeunesse</a>
                {{#lycee}}
                    <a target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci/{{dataid}}">Fiche lycées</a>
                {{/lycee}}
                {{#epci_qpv}}
                    <a target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_qpv/{{dataid}}">Fiche quartiers prioritaires de la ville</a>
                {{/epci_qpv}}
                <a target="_blank" href="https://kartenn.region-bretagne.fr/ws/breizhcop/engagements.php?siren={{dataid}}" >L’engagement du territoire dans la Breizh Cop </a></div>
            </div>
        </div>
    </div>
{{/epci}}