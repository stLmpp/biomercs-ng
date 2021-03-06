import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreApprovalComponent } from './score-approval/score-approval.component';
import { ParamsModule } from '@shared/params/params.module';
import { PaginationModule } from '@shared/components/pagination/pagination.module';
import { CardModule } from '@shared/components/card/card.module';
import { NgLetModule } from '@shared/let/ng-let.module';
import { SpinnerModule } from '@shared/components/spinner/spinner.module';
import { ArrayModule } from '@shared/array/array.module';
import { IconModule } from '@shared/components/icon/icon.module';
import { ButtonModule } from '@shared/components/button/button.module';
import { TooltipModule } from '@shared/components/tooltip/tooltip.module';
import { ScoreApprovalModalComponent } from './score-approval/score-approval-modal/score-approval-modal.component';
import { ModalModule } from '@shared/components/modal/modal.module';
import { AuthSharedModule } from '../../auth/shared/auth-shared.module';
import { FormModule } from '@shared/components/form/form.module';
import { SelectModule } from '@shared/components/select/select.module';
import { StControlModule } from '@stlmpp/control';
import { ScoreInfoComponent } from './score-info/score-info.component';
import { RouterModule } from '@angular/router';
import { ScoreInfoModalComponent } from './score-info/score-info-modal/score-info-modal.component';
import { UtilModule } from '@shared/util/util.module';

const DECLARATIONS = [ScoreApprovalComponent, ScoreApprovalModalComponent, ScoreInfoComponent, ScoreInfoModalComponent];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [
    CommonModule,
    ParamsModule,
    PaginationModule,
    CardModule,
    NgLetModule,
    SpinnerModule,
    ArrayModule,
    IconModule,
    ButtonModule,
    TooltipModule,
    ModalModule,
    AuthSharedModule,
    FormModule,
    SelectModule,
    StControlModule,
    RouterModule,
    UtilModule,
  ],
  exports: [...DECLARATIONS],
})
export class ScoreSharedModule {}
