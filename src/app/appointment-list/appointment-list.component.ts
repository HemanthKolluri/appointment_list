import { Component } from '@angular/core';
import { Appointment } from '../model/appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl:'./appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit  {

  newAppointmentTitle:string="";
  newAppointmentDate:Date=new Date();
  appointments: Appointment[]=[]
  ngOnInit(): void {
    let save =localStorage.getItem("appointments")
    this.appointments=save ?JSON.parse(save):[]
  }

  addAppointment(){
    if(this.newAppointmentDate && this.newAppointmentTitle.trim().length){
      let newAppointment:Appointment={
        id:Date.now(),
        title:this.newAppointmentTitle,
        date:this.newAppointmentDate,
      }

      this.appointments.push(newAppointment);
      this.newAppointmentTitle="";
      this.newAppointmentDate=new Date();
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
    }
  }
  deleteAppointment(index:number){
    this.appointments.splice(index,1);
    localStorage.setItem("appointments",JSON.stringify(this.appointments))
  }
}
