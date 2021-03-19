import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboardComponent/dashboard.component';
//CORE_REFERENCE_IMPORT-shoppingcartComponent
import { shoppingcartComponent } from '../components/shoppingcartComponent/shoppingcart.component';
//CORE_REFERENCE_IMPORT-updatetableComponent
import { updatetableComponent } from '../components/updatetableComponent/updatetable.component';
//CORE_REFERENCE_IMPORT-incident_tableComponent
import { incident_tableComponent } from '../components/incident_tableComponent/incident_table.component';
//CORE_REFERENCE_IMPORT-mat_dialogueComponent
import { mat_dialogueComponent } from '../components/mat_dialogueComponent/mat_dialogue.component';
//CORE_REFERENCE_IMPORT-header_nav_barComponent
import { header_nav_barComponent } from '../components/header_nav_barComponent/header_nav_bar.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
dashboardComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-shoppingcartComponent
shoppingcartComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-updatetableComponent
updatetableComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-incident_tableComponent
incident_tableComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-mat_dialogueComponent
mat_dialogueComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-header_nav_barComponent
header_nav_barComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'header_nav_bar', component: header_nav_barComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'incident_table', component: incident_tableComponent},{path: 'updatetable', component: updatetableComponent},{path: 'shoppingcart', component: shoppingcartComponent},{path: 'dashboard', component: dashboardComponent},{path: '', redirectTo: 'header_nav_bar', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
