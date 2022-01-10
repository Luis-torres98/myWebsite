import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { InfoUserComponent } from './info-user/info-user.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { CtaContactMeComponent } from './cta-contact-me/cta-contact-me.component';

const LIST = [
    NavbarComponent,
    HeaderComponent,
    InfoUserComponent,
    OurClientsComponent,
    AbilitiesComponent,
    CtaContactMeComponent
];

@NgModule({
    declarations: [LIST],
    exports: [LIST],
    imports: [CommonModule]
})
export class ComponentesModule {}
