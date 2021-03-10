/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {mat_dialogueComponent} from '../mat_dialogueComponent/mat_dialogue.component'

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-header_nav_bar',
    templateUrl: './header_nav_bar.template.html'
})

export class header_nav_barComponent extends NBaseComponent implements OnInit {

    constructor(public dialog: MatDialog) {
        super();
    }

    ngOnInit() {

    }

      openDialog() {
        this.dialog.open(mat_dialogueComponent);
      }
}
