import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() searchValue: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
}
