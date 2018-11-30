import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchoolComponent } from './school/school.component';
import { ManagementComponent } from './management.component';
import { InstitutionComponent } from './institution/institution.component';
import { SchoolManagementComponent } from './school-management/school-management.component';
import { FeeRuleListComponent } from './fee-rule/fee-rule-list/fee-rule-list.component';
import { FeeRuleInfoComponent } from './fee-rule/fee-rule-info/fee-rule-info.component';
import { FeeRuleComponent } from './fee-rule/fee-rule.component';

const managementRoutes: Routes = [
  {
    path: 'manage',
    component: ManagementComponent,
    children: [
      { path: '', component: SchoolComponent},
      { path: 'school', component: SchoolComponent},
      { path: 'institution', component: InstitutionComponent},
      { path: 'school-management', component: SchoolManagementComponent},
      { path: 'fee-rule', component: FeeRuleComponent },
      { path: 'fee-rule/list', component: FeeRuleListComponent },
      { path: 'fee-rule/create', component: FeeRuleInfoComponent },
      { path: 'fee-rule/edit/:fee_rule_key', component: FeeRuleInfoComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(managementRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ManagementRoutingModule { }
