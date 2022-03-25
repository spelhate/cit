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
						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/synthese/{{dataid}}">Synthèse</a>
						
						<a class="fiche-level-2 enabled" target="_blank" href="https://dataviz-preprod.megalis.bretagne.bzh/mpublisher/actes/{{dataid}}">Télétransmission des actes</a>
											
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