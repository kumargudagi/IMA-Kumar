/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { apiservices } from 'app/sd-services/apiservices';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-dashboard',
    templateUrl: './dashboard.template.html'
})

export class dashboardComponent extends NBaseComponent implements OnInit {
arr1=[];
arr2=[];

arr3=[];
arr4=[];

pieChartData = [{
  data:[300, 500, 100]}
               ];

pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];

pieChartPriorityLabels:  string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];;
pieChartPriorityData =  [{
  data:[300, 500, 100]}
               ];;

pieChartOptions: any = {
  responsive: true
}
  mycharclick(){
    alert("chart clicked");
  }



    constructor(public service: apiservices) {
        super();
    }

    ngOnInit() {
          this.userpie()
          this.prioritypie()
    }

    async userpie(){
        let data = (await this.service.dashboardpicchart()).local.result;
        console.log("dd",data)
        for(let i=0; i<data.length;i++){
            this.arr1.push(data[i].count)
            this.arr2.push(data[i]._id)
        }


        this.pieChartData = [{data:this.arr1}];
        this.pieChartLabels = this.arr2;
    }

     async prioritypie(){
        let data = (await this.service.dashboardprioritychart()).local.result;
        console.log("ddpr",data)
        for(let i=0; i<data.length;i++){
            this.arr3.push(data[i].count)
            this.arr4.push(data[i]._id)
        }

        this.pieChartPriorityData = [{data:this.arr3}];
        this.pieChartPriorityLabels = this.arr4;
    }
}
