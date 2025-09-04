import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MasterClass} from '../../pages/master-class/master-class';
import {JavaCore} from '../../pages/java-core/java-core';
import {Ocp21} from '../../pages/ocp21/ocp21';

@Component({
  selector: 'app-main-content',
  imports: [
    MatTabGroup,
    MatTab,
    MasterClass,
    JavaCore,
    Ocp21,
  ],
  templateUrl: './main-content.html',
  styleUrl: './main-content.scss'
})
export class MainContent {

}
