<form role="form">

	<div class="form-group">
		<label for="creatureInputName">Creature name</label>
		<input type="text" class="form-control" id="creatureInputName" placeholder="Enter a name for creature"
		value="<%= typeof(_id) !== "undefined" && typeof(name) !== "undefined" ? name : "" %>">
	</div>

	<div class="form-group">
		<label for="creatureInputElement">Element</label>
		<select class="form-control" id="creatureInputElement">
			<option <%= typeof(_id) !== "undefined" && element === "Nature" ? 'selected' : '' %> >Nature</option>
			<option <%= typeof(_id) !== "undefined" && element === "Water" ? 'selected' : '' %> >Water</option>
			<option <%= typeof(_id) !== "undefined" && element === "Fire" ? 'selected' : '' %> >Fire</option>
			<option <%= typeof(_id) !== "undefined" && element === "Air" ? 'selected' : '' %> >Air</option>
		</select>
	</div>

	<div class="form-group">
		<label for="creatureInputImageURL">Image URL</label>
		<input type="text" class="form-control" id="creatureInputImageURL" placeholder="Enter an image URL for creature"
		value="<%= typeof(_id) !== "undefined" && typeof(img) != "undefined" ? img : "" %>">
	</div>

	<div class="form-group">
		<label for="creatureInputAttack">Attack</label>
		<input type="text" class="form-control" id="creatureInputAttack" placeholder="Enter a name for creatures attack"
		value="<%= typeof(_id) !== "undefined" && typeof(attack) != "undefined" ? attack : "" %>">
	</div>

	<div class="form-group">
		<label for="creatureInputDefense">Defense</label>
		<input type="text" class="form-control" id="creatureInputDefense" placeholder="Enter a name for creatures defense"
		value="<%= typeof(_id) !== "undefined" && typeof(defense) != "undefined" ? defense : "" %>">
	</div>

	<button id="save-creature-button" class="btn btn-success"><%= typeof(_id) !== "undefined" ? "Save updates" : "Create new creature" %></button>

	<% if(typeof(_id) !== "undefined"){ %>
		<button id="delete-creature-button" class="btn btn-danger">Delete creature</button>
	<% } %>

	<button id="back-button" class="btn btn-default">Back</button>
</form>