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
						<h5 class="mb-0">Les services numériques<span class="counter badge badge-dark">0</span></h5>
				</div>
				<div id="overview_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@1">
					<div class="fiche-list card-body">
						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/synthese/{{dataid}}/2022">Synthèse</a>
						
						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/actes/{{dataid}}/2022">Télétransmission des actes</a>

						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/marches/{{dataid}}/2022">Salle des marchés publics</a>

						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/idelibre/{{dataid}}/2022">Convocation électronique des élus</a>

						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/pes/{{dataid}}/2022">Télétransmission des flux PES</a>

						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/parapheur/{{dataid}}/2022">Parapheur électronique</a>

						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/sesf/{{dataid}}/2022">Service d'échanges sécurisés de fichiers (SESF)</a>

						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/ged/{{dataid}}/2022">Gestion électronique des documents</a>

						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/visio/{{dataid}}/2022">Visioconférence</a>
											
					</div>
				</div>
			</div>

			<div class="card card-theme">
				<div class="link card-header collapsed" id="heading-{{dataid}}@1" data-toggle="collapse"
					data-target="#territory_{{dataid}}"
					aria-expanded="false" aria-controls="{{dataid}}">
					<h5 class="mb-0">Opendata<span class="counter badge badge-dark">0</span></h5>
				</div>

				<div id="territory_{{dataid}}" class="collapse" aria-labelledby="heading-{{dataid}}@1">
					<div class="fiche-list card-body">						
					</div>
				</div>
			</div>
		
		</div> <!-- card-body -->
	</div> <!-- content-list -->
</div> <!-- card main-content -->
{{/epci}}