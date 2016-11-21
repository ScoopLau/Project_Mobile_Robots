import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ActionsPage } from '../pages/actions/actions';
import { SayPage } from '../pages/say/say';
import { ManualPage } from '../pages/manual/manual';
import { SettingsPage } from '../pages/settings/settings';

import { RobotService } from '../providers/robot-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionsPage,
    SayPage,
    ManualPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionsPage,
    SayPage,
    ManualPage,
    SettingsPage
  ],
  providers: [
     RobotService
  ]
})
export class AppModule {}