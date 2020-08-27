
{{#epci}}
    <div class="card main-content" data-filter="{{label}}">
        <div class="card-header collapsed" id="heading-{{dataid}}" data-toggle="collapse"
            data-target="#epci_{{dataid}}"
            aria-expanded="false" aria-controls="{{dataid}}">
            <h3 class="mb-0">{{label}}</h3>
        </div>

        <div id="epci_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}">
            <div class="card-body">
                <div class="card"><a class="fiche-level-1 card-header" target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_chiffres_cles/{{dataid}}">Les chiffres clés
                    du territoire<span><i class="fas fa-chart-line"/></span></a></div>


                <div class="card">
                    <div class="link card-header collapsed" id="heading-{{dataid}}@1" data-toggle="collapse"
                        data-target="#territory_{{dataid}}"
                        aria-expanded="false" aria-controls="{{dataid}}">
                        <h5 class="mb-0">Connaitre le territoire<span class="badge badge-dark">3</span></h5>
                    </div>

                    <div id="territory_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@1">
                        <div class="fiche-list card-body">
                            <a class="fiche-level-2" target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_population/{{dataid}}">La population du
                                territoire</a>
                            <a class="fiche-level-2" target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_communes/{{dataid}}">L'EPCI et les
                                communes</a>
                            <a class="fiche-level-2" target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_jeunesse/{{dataid}}">Fiche jeunesse</a>

                            {{#epci_qpv}}
                                <a class="fiche-level-2" target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci_qpv/{{dataid}}">Fiche quartiers prioritaires de la ville</a>
                            {{/epci_qpv}}

                        </div>
                    </div>
                </div>

                 <div class="card">
                    <div class="link card-header collapsed" id="heading-{{dataid}}@2" data-toggle="collapse"
                        data-target="#action_{{dataid}}"
                        aria-expanded="false" aria-controls="{{dataid}}">
                        <h5 class="mb-0">Connaitre l'action régionale<span class="badge badge-dark">1</span></h5>
                    </div>

                    <div id="action_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@2">
                        <div class="fiche-list card-body">
                            {{#lycee}}
                                <a class="fiche-level-2" target="_blank" href="https://kartenn.region-bretagne.fr/fichenn/epci/{{dataid}}">Fiche lycées</a>
                            {{/lycee}}
                        </div>
                    </div>
                </div>

                 <div class="card">
                    <div class="link card-header collapsed" id="heading-{{dataid}}@3" data-toggle="collapse"
                        data-target="#trajectory_{{dataid}}"
                        aria-expanded="false" aria-controls="{{dataid}}">
                        <h5 class="mb-0">L'engagement du territoire<span class="badge badge-dark">1</span></h5>
                    </div>

                    <div id="trajectory_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@3">
                        <div class="fiche-list card-body">
                            <a class="fiche-level-2" target="_blank" href="https://kartenn.region-bretagne.fr/ws/breizhcop/engagements.php?siren={{dataid}}" >L’engagement du territoire dans la Breizh Cop </a>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="link card-header collapsed" id="heading-{{dataid}}@4" data-toggle="collapse"
                        data-target="#feeds_{{dataid}}"
                        aria-expanded="false" aria-controls="{{dataid}}">
                        <h5 class="mb-0">Actualités<span class="badge badge-dark">0</span></h5>
                    </div>

                    <div id="feeds_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@4">
                        <div class="fiche-list card-body">

                        </div>
                    </div>
                </div>




                </div>
            </div>
        </div> <!-- main card body-->
    </div> <!-- main card -->
{{/epci}}