/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject, Optional , Input} from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { apiservices } from 'app/sd-services/apiservices';
import {incident_tableComponent} from '../incident_tableComponent/incident_table.component'

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-updatetable',
    templateUrl: './updatetable.template.html'
})

export class updatetableComponent extends NBaseComponent implements OnInit {
incidentform
action:string;
incidentdata;
latestincident
  local_data:any;
    constructor(public dialog: MatDialog, public fb: FormBuilder,public service: apiservices, public dialogRef: MatDialogRef<updatetableComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any ) {
        super();
        console.log("-----",data);
        this.incidentdata= data
        
    }

   
    ngOnInit() {
        

         this.incidentform = this.fb.group({
            subject: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            description: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 \'\-]+$')]],
            priority: ['', [Validators.required, Validators.pattern('^[0-9 \'\-]+$')]],
            incident_date: [Date, [Validators.required]],
            incidentId:['']
        })


        this.incidentform.get("subject").patchValue(this.incidentdata.subject);
        this.incidentform.get("priority").patchValue(this.incidentdata.priority);
        this.incidentform.get("description").patchValue(this.incidentdata.description);
        this.incidentform.get("incident_date").patchValue(this.incidentdata.incident_date);
        this.incidentform.get("incidentId").patchValue(this.incidentdata._id);

    }
  

    async updateIncident(){
        this.data = (await this.service.updatencident(this.incidentform.value)).local.apiresult;
        console.log("update api result dataa", this.data)


         this.latestincident='closed';
        
    }

    //   async getincident() {
    //     let data = (await this.service.getIncList()).local.apiresult;
    //     console.log("get incident data",data)
    //     this.datasource = data
    //       this.datasource = new MatTableDataSource(data);
    //     console.log("this.datasource==",this.datasource)
    // }

   
}
