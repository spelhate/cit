
{{#epci}}
<div class="card main-content" data-filter="{{label}}">
    <div class="card-header collapsed" id="heading-{{dataid}}" data-toggle="collapse"
        data-target="#epci_{{dataid}}"
        aria-expanded="false" aria-controls="{{dataid}}">
        <h3 class="mb-0">{{label}}</h3>
    </div>

    <div id="epci_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}">
        <div class="card-body">
            <div class="card"><a class="fiche-level-1 card-header" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_chiffres_cles/{{dataid}}">Les chiffres clés
                du territoire<span><i class="fas fa-chart-line"/></span></a>
            </div>


            <div class="card card-theme">
                <div class="link card-header collapsed" id="heading-{{dataid}}@1" data-toggle="collapse"
                    data-target="#territory_{{dataid}}"
                    aria-expanded="false" aria-controls="{{dataid}}">
                    <h5 class="mb-0">Connaître le territoire<span class="counter badge badge-dark">0</span></h5>
                </div>

                <div id="territory_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@1">
                    <div class="fiche-list card-body">
                        <!--<a class="fiche-level-2 disabled">Carte</a>-->

                        <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_communes/{{dataid}}">L'EPCI et les
                            communes</a>

                        <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_population/{{dataid}}">La population du
                            territoire</a>

                        <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_jeunesse/{{dataid}}">Fiche jeunesse</a>

                        {{#epci_qpv}}
                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_qpv/{{dataid}}">Fiche quartiers prioritaires de la ville</a>
                        {{/epci_qpv}}



                        <a class="fiche-level-2 disabled">Les schémas</a>


                    </div>
                </div>
            </div>

             <div class="card card-theme">
                <div class="link card-header collapsed" id="heading-{{dataid}}@2" data-toggle="collapse"
                    data-target="#action_{{dataid}}"
                    aria-expanded="false" aria-controls="{{dataid}}">
                    <h5 class="mb-0">Connaître l'action régionale<span class="counter badge badge-dark">0</span></h5>
                </div>

                <div id="action_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@2">
                    <div class="fiche-list card-body">

                        <a class="fiche-level-2 disabled">L'implantation de la Région</a>

                        {{#lycee}}
                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_lycee/{{dataid}}">Fiche lycées - éducation</a>
                        {{/lycee}}

                        <a class="fiche-level-2 disabled">Culture – langues régionales – patrimoine - sports</a>

                        <a class="fiche-level-2 disabled">Mobilités</a>

                        <a class="fiche-level-2 disabled">Economie – emploi – formation </a>

                        <a class="fiche-level-2 disabled">Environnement</a>

                        <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_territoire/{{dataid}}">Politique territoriale</a>

                        <a class="fiche-level-2 disabled">Numérique</a>

                        <a class="fiche-level-2 disabled">Europe</a>


                    </div>
                </div>
            </div>

             <!--<div class="card card-theme">
                <div class="link card-header collapsed" id="heading-{{dataid}}@3" data-toggle="collapse"
                    data-target="#trajectory_{{dataid}}"
                    aria-expanded="false" aria-controls="{{dataid}}">
                    <h5 class="mb-0">L'engagement du territoire<span class="counter badge badge-dark">0</span></h5>
                </div>

                <div id="trajectory_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@3">
                    <div class="fiche-list card-body">
                        <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/ws/breizhcop/engagements.php?siren={{dataid}}" >L’engagement du territoire dans la Breizh Cop </a>
                    </div>
                </div>
            </div>-->

            <div class="card"><a class="fiche-level-1 card-header" target="_blank" href="https://kartenn.region-bretagne.fr/ws/breizhcop/engagements.php?siren={{dataid}}" >
                L’engagement du territoire dans la Breizh Cop <span><i class="fas fa-chart-line"/></span></a>
            </div>

            <div class="card card-theme">
                <div class="link card-header collapsed" id="heading-{{dataid}}@4" data-toggle="collapse"
                    data-target="#feeds_{{dataid}}"
                    aria-expanded="false" aria-controls="{{dataid}}">
                    <h5 class="mb-0">Actualités<span class="counter badge badge-dark">0</span></h5>
                </div>

                <div id="feeds_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@4">
                    <div class="fiche-list card-body">

                    </div>
                </div>
            </div>





        </div> <!-- main card body-->
    </div> <!-- main epci collapse-->
</div> <!-- main card -->
{{/epci}}