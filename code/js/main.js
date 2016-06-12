window.onload = function(){
	document.getElementById('new-project-button').onclick = function(){
		var name = document.getElementById('new-project-name').value;
				
		var project = document.createElement('TABLE');
		project.setAttribute("id", name);
		project.setAttribute("class", "project");
		document.body.appendChild(project);
		
		var header = project.createCaption(name);
		header.innerHTML = name;
		
		var x = document.getElementById("project-list");
		var y = document.createElement("OPTION");
		y.setAttribute("value", name);
		var t = document.createTextNode(name);
		y.appendChild(t);
		x.add(y);
		
		var row = document.createElement("TR");
		
		var cellSelect = document.createElement("TH");
		cellSelect.innerHTML = "Select";
		row.appendChild(cellSelect);
	
		var cellTask = document.createElement("TH");
		cellTask.innerHTML = "Task";
		row.appendChild(cellTask);
		
		var cellTime = document.createElement("TH");
		cellTime.innerHTML = "Time (ms)";
		row.appendChild(cellTime);
		
		var cellStartTime = document.createElement("TH");
		cellStartTime.innerHTML = "Start Time";
		row.appendChild(cellStartTime);
		
		var cellFinishTime = document.createElement("TH");
		cellFinishTime.innerHTML = "Finish Time";
		row.appendChild(cellFinishTime);
		
		var cellButton = document.createElement("TH");
		cellButton.innerHTML = "Start/Stop Timer";
		row.appendChild(cellButton);
		
		project.appendChild(row);
			
	}
	document.getElementById('new-task-button').onclick = function(){
	
		var selector = document.getElementById("project-list");
		var projectId = selector.value;
		var project = document.getElementById(projectId);
		var task = document.getElementById("new-task-name").value;

		
		var row = document.createElement("TR");
		var cellSelect = document.createElement("TD");
		
		var checkbox = document.createElement("INPUT");
		checkbox.setAttribute("type", "checkbox");
		checkbox.className= "task-delete-check";
		cellSelect.appendChild(checkbox);
		row.appendChild(cellSelect);			
		
		var cellTask = document.createElement("TD");
		cellTask.innerHTML = task;
		row.appendChild(cellTask);
		
		var cellTimeId = projectId + "-" + task + "-time";
		var cellTime = document.createElement("TD");
		cellTime.setAttribute("id", cellTimeId);
		var date = new Date();
		var n = date.getTime();
		cellTime.setAttribute("date", n);
		cellTime.setAttribute("time", 0);
		cellTime.innerHTML = 0;
		row.appendChild(cellTime);
		
		var cellStartTime = document.createElement("TD");		
		cellStartTime.innerHTML = date;
		row.appendChild(cellStartTime);
		
		var cellFinishTime = document.createElement("TD");
		var cellFinishId = projectId + "-" + task + "-finish";
		cellFinishTime.innherHTML = date;
		cellFinishTime.setAttribute("id", cellFinishId);
		row.appendChild(cellFinishTime);
		
		var cellButton = document.createElement("TD");
		var cellButtonObject = document.createElement("BUTTON");
		var t = document.createTextNode("Start/Stop Timer");
		cellButtonObject.appendChild(t);
		cellButtonObject.setAttribute("id", "start-timer-button");
		cellButtonObject.setAttribute("project",projectId);
		cellButtonObject.setAttribute("task", task);
		
		cellButtonObject.setAttribute("go", 0);
		
		cellButtonObject.onclick = function(){
			var thisproject = this.getAttributeNode("project").value;
			var thistask = this.getAttributeNode("task").value;
			var timeCellId = thisproject + "-" + thistask + "-time";
			var timeCell = document.getElementById(timeCellId);
			var finishCellId = thisproject + "-" + thistask + "-finish";
			var finishCell = document.getElementById(finishCellId);
			var date = new Date();
			var n = date.getTime();
			var check = this.getAttributeNode("go").value;
			if(check == 0){
				this.setAttribute("go", 1);
				timeCell.setAttribute("date", n);
			}else{
				this.setAttribute("go", 0);
				finishCell.innerHTML = date;
				var last = timeCell.getAttribute("date");
				var diff = n - last;
				d = diff + +timeCell.getAttributeNode("time").value;
				timeCell.setAttribute("time", d);
				timeCell.innerHTML = d;
				
			}
		}
		
		cellButton.appendChild(cellButtonObject);
		row.appendChild(cellButton);
		
		project.appendChild(row);
		
	}

	
	document.getElementById('delete-task-button').onclick = function(){

		var checks = document.getElementsByClassName('task-delete-check');

		for (var i = 0; i < checks.length; i++){
			if (checks[i].checked){
				
				checks[i].parentNode.parentNode.remove();
				i--;
			}
		}
	}

}	
