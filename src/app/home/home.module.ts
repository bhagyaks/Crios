import { NgModule } from '@angular/core';
import { AppSectionComponent } from './appSection/appSection.component';
import { HomeComponent } from './home.component';
import { ContentComponent } from './content/content.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    }
]
@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        UserComponent,
        AppSectionComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule{}