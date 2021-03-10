/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'

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
      minDate = new Date();
    constructor(public fb: FormBuilder) {
        super();
    }

    ngOnInit() {
 console.log("dialogue called")
     this.incidentform = this.fb.group({
            subject: ['',[Validators.required, Validators.pattern('[a-zA-Z ]*') ]],
            description: ['',[Validators.required, Validators.pattern('^[a-zA-Z0-9 \'\-]+$') ]],
            priority: ['',[Validators.required, Validators.pattern('^[0-9 \'\-]+$')]],
            incident_date: ['',[Validators.required]]
        })
    }

    async submit(){
        console.log("form",this.incidentform.value)
        
    }
}
