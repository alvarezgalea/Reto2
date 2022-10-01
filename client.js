const ApiUrl = "https://g285736289b516c-reto1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client";

class client{
	static insert(){
		const Valor = {
			id: $("#id").val(),
			name: $("#name").val(),
			email: $("#email").val(),
			age: $("#age").val()
		};

		$.ajax({
			type: "POST",
			url: ApiUrl,
			dataType:"json",
			crossDomain: true,
			data: JSON.stringify(Valor),
			contentType: "application/json",
			complete: function(response){
				if (response.status == 201) {
					client.findAll();
					alert("Client was added successfully");
				}else{
					alert("Client was not added");
					console.log(response);
				}
			}
		});
		
	}


	static findAll(){
		$.ajax({
			type: "GET",
			url: ApiUrl,
			dataType: "json",
			crossDomain: true,
			contentType: "application/json",
			success: function(data){
				$("tbody").html("");//Para vaciar la tabla
					for(let index = 0;index < data.items.length;index++){
						//templates string - plantilla
						$("tbody").append(`<tr>
							<td>${data.items[index].id}</td>
							<td>${data.items[index].name}</td>
							<td>${data.items[index].email}</td>
							<td>${data.items[index].age}</td>
						</tr>`);	
					}
			},
			error: function(){		
				alert("Client was not loaded");
			}
		});		
	}

	static findById(id){
		
	}

	static update(){//revisar
		const actualizar = {id:$("#id").val(), name:"katy",email:"a.com",age:"25"}

		$.ajax({
			url: ApiUrl,
			type: "PUT",
			dataType:"json",
			crossDomain: true,
			data: JSON.stringify(actualizar),
			contentType: "application/json",
			complete: function(response){
				if (response.status == 200) {
					client.findAll();
					alert("Client was update successfully");
				}else{
					alert("Client was not update");
				}
			}
		});
	}

	static deleteById(){
		const borrar = {id:$("#id").val()}
		$.ajax({
			url: ApiUrl,
			type: "DELETE",
			dataType:"json",
			crossDomain: true,
			data: JSON.stringify(borrar),
			contentType: "application/json",
			complete: function(response){
				if (response.status == 204) {
					alert("Client was delete");
				}else{
					alert("Client was not delete");
				}
			}
		});
		
	}


}