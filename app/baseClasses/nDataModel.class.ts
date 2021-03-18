import { incident } from '../src/app/models/incident.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
incident: incident;
//DECLARE NEW VARIABLE

constructor() {
this.incident = new incident();
//CREATE NEW DM INSTANCE
    }
}