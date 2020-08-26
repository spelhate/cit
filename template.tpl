
{{#epci}}
    <div class="card" data-filter="{{label}}">
        <div class="card-header collapsed" id="heading-{{dataid}}" data-toggle="collapse"
            data-target="#epci_{{dataid}}"
            aria-expanded="false" aria-controls="{{dataid}}">
            <h3 class="mb-0">{{label}}</h3>
        </div>

        <div id="epci_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}">
            <div class="card-body">
                <div class="card"><a class="card-header" target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_chiffres_cles/{{dataid}}">Les chiffres clés
                    du territoire</a></div>


                <div class="card">
                    <div class="card-header collapsed" id="heading-{{dataid}}@1" data-toggle="collapse"
                        data-target="#territory_{{dataid}}"
                        aria-expanded="false" aria-controls="{{dataid}}">
                        <h5 class="mb-0">Connaitre le territoire<span class="badge badge-dark">4</span></h5>
                    </div>

                    <div id="territory_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@1">
                        <div class="card-body">
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

                        </div>
                    </div>
                </div>




                <div class="card"><a class="card-header" target="_blank" href="https://kartenn.region-bretagne.fr/ws/breizhcop/engagements.php?siren={{dataid}}" >L’engagement du territoire dans la Breizh Cop </a></div></div>
            </div>
        </div>
    </div>
{{/epci}}