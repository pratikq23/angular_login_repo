import { Component, OnInit,Output, EventEmitter } from '@angular/core';

import { TeamService  } from '../../service/team.service';
import { Chart, ChartData, Point } from "chart.js";

@Component({
  selector: 'si-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent  {

	public ctx = document.getElementById("myChart");
	public myChart = new Chart(this.ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

	public teamData: any = [];
	public editable: boolean = true;
	public valueChangeFlag: boolean = false;
	public errorMessage: any = "";

	constructor(public teamService: TeamService) {
		this.teamService.getTeamInfo().subscribe(data => {
			this.teamData = data.teamData;
		});
	}

	public onEditClick() {
		
		if(this.valueChangeFlag) {
			this.teamService.updateTeam(this.teamData).subscribe(data => {
				this.valueChangeFlag = false;
				
				if(data.statusResponse != 'success') {
					this.errorMessage = "Cannot update";
				}
			});
		}
		this.editable = !this.editable;
	}

	onProjectChange(ev,i) {
		this.valueChangeFlag = true;
	}

	onTeamChange(ev,i) {
		this.valueChangeFlag = true;
	}
	
	

}
