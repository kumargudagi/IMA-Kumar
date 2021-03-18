/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Inject, Optional } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

import { apiservices } from 'app/sd-services/apiservices';
import { incident } from 'app/models';

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
    selector: 'bh-mat_dialogue',
    templateUrl: './mat_dialogue.template.html'
})

export class mat_dialogueComponent extends NBaseComponent implements OnInit {
    incidentform;
    isfrom_update:Boolean=false
    minDate = new Date();
    data
    latestincident
    incidentdata
    constructor(public fb: FormBuilder, public service: apiservices, public dialogRef: MatDialogRef<mat_dialogueComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data1: any) {
        super();
        console.log("-----",data1); 
        this.incidentdata= data1
        if(data1 != null){
            this.isfrom_update=true
            
       
        }
    }

    //   constructor(public fb: FormBuilder, public service: apiservices) {
    //     super();
    // }

    ngOnInit() {
        this.incidentform = this.fb.group({
            subject: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            description: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 \'\-]+$')]],
            priority: ['', [Validators.required, Validators.pattern('^[0-9 \'\-]+$')]],
            incident_date: [Date, [Validators.required]],
            incidentId:['']
        })

        if(this.isfrom_update){
 this.incidentform.get("subject").patchValue(this.incidentdata.subject);
        this.incidentform.get("priority").patchValue(this.incidentdata.priority);
        this.incidentform.get("description").patchValue(this.incidentdata.description);
        this.incidentform.get("incident_date").patchValue(this.incidentdata.incident_date);
        this.incidentform.get("incidentId").patchValue(this.incidentdata._id);
        }
        console.log("this.isfrom_update",this.isfrom_update)
    }

    async submit() {
       
        // this.incidentform.value.incident_date = JSON.parse(JSON.stringify(this.incidentform.value.incident_date))
        // console.log("form", this.incidentform.value)
        this.data = (await this.service.addincident(this.incidentform.value)).local.apiresult;
        console.log("api result dataa", this.data)
        if(this.data){
            this.service.snackbar({message:" incident Saved Successfully"})
        }


        // this.data = (await this.service.getIncList ()).local.apiresult;
        // console.log("api result dataa", this.data)

    }


     async updateIncident(){
        this.data = (await this.service.updatencident(this.incidentform.value)).local.apiresult;
        console.log("update api result dataa", this.data)
        if(this.data){
            this.service.snackbar({message:" incident Updated Successfully"})
        }


         this.latestincident='closed';
        
    }
}

