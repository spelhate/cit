
{{#epci}}
    <div class="card main-content" data-codegeo="{{dataid}}" data-filter="{{label}}">
        <div class="card-header" id="heading-{{dataid}}">
            <h4 class="mb-0">{{label}}</h4>
        </div>

        <div id="epci_{{dataid}}" class="content-list">
            <div class="card-body">

                <div class="card card-theme">
                    	<div class="link card-header collapsed" id="heading-{{dataid}}@1" data-toggle="collapse"
                        	data-target="#overview_{{dataid}}"
                        	aria-expanded="false" aria-controls="{{dataid}}">
                        	<h5 class="mb-0">Situation générale du territoire<span class="counter badge badge-dark">0</span></h5>
                    	</div>
	
			<div id="overview_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@1">
                        	<div class="fiche-list card-body">

				<a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_chiffres_cles/{{dataid}}">Les chiffres clés</a>

				<a class="fiche-level-2 disabled">Carte des capacités</a>

				</div>
			</div>
		</div>

                <div class="card card-theme">
                    <div class="link card-header collapsed" id="heading-{{dataid}}@1" data-toggle="collapse"
                        data-target="#territory_{{dataid}}"
                        aria-expanded="false" aria-controls="{{dataid}}">
                        <h5 class="mb-0">Connaître le territoire<span class="counter badge badge-dark">0</span></h5>
                    </div>

                    <div id="territory_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@1">
                        <div class="fiche-list card-body">

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_communes/{{dataid}}">L'EPCI et les
                                communes</a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_population/{{dataid}}">Population du
                                territoire</a>

                            {{#epci_qpv}}
                                <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_qpv/{{dataid}}">Fiche quartiers prioritaires de la ville</a>
                            {{/epci_qpv}}

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_jeunesse/{{dataid}}">Jeunesse</a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_patrimoine_contexte/{{dataid}}">Patrimoine</a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_sante/{{dataid}}">Santé</a>

			    <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_environnement_situation/{{dataid}}">Environnement</a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_situation_eco/{{dataid}}">Economie et emploi</a>

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

							{{#ports1}}
								<a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_port/{{dataid}}">Ports </a>
							{{/ports1}}

							{{#ports2}}
								<a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_port4041/{{dataid}}">Ports </a>
							{{/ports2}}

							{{#ports3}}
								<a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_port40414243/{{dataid}}">Ports </a>
							{{/ports3}}

							{{#ports4}}
								<a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_port404142/{{dataid}}">Ports </a>
							{{/ports4}}

							{{#ports5}}
								<a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_port40/{{dataid}}">Ports </a>
							{{/ports5}}

                            <a class="fiche-level-2 disabled">L'implantation de la région</a>

                            <a class="fiche-level-2 disabled">Mobilités</a>

                            {{#lycee}}
                                <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_lycee/{{dataid}}">Lycées - éducation</a>
                            {{/lycee}}

                            <!--<a class="fiche-level-2 disabled">Langues régionales - sports</a>-->

                            <a class="fiche-level-2 disabled">Culture</a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_patrimoine/{{dataid}}">Inventaire du patrimoine </a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_territoire/{{dataid}}">Politique territoriale - santé</a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_environnement_action_regionale/{{dataid}}">Environnement</a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_economie/{{dataid}}">Economie</a>

                            <a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_formation/{{dataid}}">Emploi – formation </a>

                            <!--<a class="fiche-level-2 disabled">Numérique</a>-->

                        </div>
                    </div>
                </div>

                <div class="card"><a class="fiche-level-1 card-header" target="_blank" href="https://kartenn.region-bretagne.fr/ws/breizhcop/engagements.php?siren={{dataid}}" >
                    L’engagement du territoire dans la Breizh Cop <span><i class="fas fa-chart-line"/></span></a>
                </div>

                <!--<div class="card card-theme">
                    <div class="link card-header collapsed" id="heading-{{dataid}}@4" data-toggle="collapse"
                        data-target="#feeds_{{dataid}}"
                        aria-expanded="false" aria-controls="{{dataid}}">
                        <h5 class="mb-0">Actualités<span class="counter badge badge-dark">0</span></h5>
                    </div>

                    <div id="feeds_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@4">
                        <div class="fiche-list card-body">

                        </div>
                    </div>
                </div>-->

                <div class="card card-theme">
                    <div class="link card-header collapsed" id="heading-{{dataid}}@3" data-toggle="collapse"
                        data-target="#feed_{{dataid}}"
                        aria-expanded="false" aria-controls="{{dataid}}">
                        <h5 class="mb-0">Actualités<span class="counter badge badge-dark">0</span></h5>
                    </div>

                    <div id="feed_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@3">
                        <div class="fiche-list card-body">

                            	<a class="fiche-level-2 enabled" target="_blank" href="http://prod-kartensig4.cr-bretagne.fr/ws/kentika/fiche-article.php?code_siren={{dataid}}&page=1">Revue de presse</a>

				<a class="fiche-level-2 enabled" target="_blank" href="https://kartenn.region-bretagne.fr/mreport/epci_actualites/{{dataid}}">Statistiques des articles </a>

                        </div>
                    </div>
                </div>

		{{#test_liamm}}
        		<div id="epci_{{dataid}}" class="content-list">
            		<div class="card-body">
                	<div class="card"><a class="fiche-level-1 card-header" target="_blank" href="{{liamm}}">Notes et suivis de dossiers (Espace Territorial)<span><i class="fas fa-chart-line"/></span></a>
                	</div>
		{{/test_liamm}}



            </div> <!-- main card body-->
        </div> <!-- main epci collapse-->
    </div> <!-- main card -->
{{/epci}}
