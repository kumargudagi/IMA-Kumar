/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Output, EventEmitter, Inject, ViewChild } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatTable } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { updatetableComponent } from '../updatetableComponent/updatetable.component'
import { mat_dialogueComponent } from '../mat_dialogueComponent/mat_dialogue.component'
import { apiservices } from 'app/sd-services/apiservices';
import { DatePipe } from '@angular/common';
import {MatSort} from '@angular/material/sort'; 


/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-incident_table',
    templateUrl: './incident_table.template.html'
})

export class incident_tableComponent extends NBaseComponent implements OnInit {
    clickedrow;
    editcliked: Boolean = false
    datasource;
    

    @ViewChild(MatTable, { static: true }) table: MatTable<any>;
    @ViewChild(MatSort) sort: MatSort;

   
    constructor(public service: apiservices, public dialog: MatDialog) {
        super(); 
    }

    ngOnInit() {
        this.getincident()
    }


    async getincident() {
        let data = (await this.service.getIncList()).local.apiresult;
        console.log("get incident data", data)
        this.datasource = new MatTableDataSource(data);
    }

    async edit(data) {
        let dialogref = this.dialog.open(mat_dialogueComponent, {
            data: data
        });

        dialogref.afterClosed().subscribe(result => {
            console.log('The dialog was closed', result);
            this.getincident()
            this.getincident()
        });
    }



    async deleteincident(data) {
        let data1 = (await this.service.deletencident(data._id)).local.apiresult;
        console.log("data", data1)
        this.getincident()
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.datasource.filter = filterValue.trim().toLowerCase();
    }



}


