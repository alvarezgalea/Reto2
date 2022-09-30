const ApiUrl = "https://g285736289b516c-reto1.adb.eu-frankfurt-1.oraclecloudapps.com/ords/admin/client/client";

class Client{
	static insert(client){
		$.ajax({
			url: ApiUrl,
			type: "POST",
			dataType:"json",
			crossDomain: true,
			data: JSON.stringify(client),
			contentType: "application/json",
			complete: function(response){
				if (response.status == 201) {
					alert("Client was added successfully");
				}else{
					alert("Client was not added");
				}
			}
		});
	}


	static findAll(){
		$.ajax({
			url: ApiUrl,
			type: "GET",
			dataType:"json",
			crossDomain: true,
			contentType: "application/json",
			complete: function(response, data){
				if (response.status == 201) {
					
					alert("Client was added successfully");
				}else{
					alert("Client was not added");
				}
			}
		});
	}

	static findById(id){
		
	}

	static update(client){
		$.ajax({
			url: ApiUrl,
			type: "PUT",
			dataType:"json",
			crossDomain: true,
			data: JSON.stringify(client),
			contentType: "application/json",
			complete: function(response){
				if (response.status == 200) {
					alert("Client was added successfully");
				}else{
					alert("Client was not added");
				}
			}
		});
	}

	static deleteById(id){
		$.ajax({
			url: ApiUrl,
			type: "DELETE",
			dataType:"json",
			crossDomain: true,
			data: JSON.stringify({id}),
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