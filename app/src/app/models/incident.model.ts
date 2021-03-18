import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class incident {
  @JsonProperty('subject', String, true)
  public subject: string = undefined;

  @JsonProperty('priority', Number, true)
  public priority: number = undefined;

  @JsonProperty('description', String, true)
  public description: string = undefined;

  @JsonProperty('incident_date', Date, true)
  public incident_date: Date = undefined;

}