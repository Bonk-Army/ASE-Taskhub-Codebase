import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {TeamService} from '../_services/team.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  teams: any[];

  constructor(private userService: UserService, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(data => this.teams = JSON.parse((data)));
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
