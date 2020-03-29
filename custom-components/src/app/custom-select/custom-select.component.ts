import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css']
})
export class CustomSelectComponent implements OnInit {
  showDropdown: boolean = false;
  
  get selectedItem() : CustomSelectItem {
    let item = this.items.find(x=>x.selected == true);

    if(item) return item;
    else return this.items[0];
  }

  items: CustomSelectItem [] = [
    {id: 1, value: 'Javascript', selected: true},
    {id: 2, value: 'Python', selected: false},
    {id: 3, value: 'Java', selected: false},
    {id: 4, value: 'C#', selected: false},
    {id: 5, value: 'PHP', selected: false},
    {id: 6, value: 'Golang', selected: false},
    {id: 7, value: 'Typescript', selected: false},
    {id: 8, value: 'Ruby', selected: false},
  ];

  constructor() { }

  ngOnInit(): void { }

  toggleSelect() {
    this.showDropdown = !this.showDropdown;
  }

  onSelectItem(id: number) {
    this.items.forEach(x=>x.selected = false);
    let item = this.items.find(x=>x.id == id);
    
    if(item) item.selected = true;
  }
}

export class CustomSelectItem {
  id: number;
  value: string;
  selected: boolean;
}
