import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';



@Component({
  selector: 'app-user-activity',
  templateUrl: './user-activity.component.html',
  styleUrls: ['./user-activity.component.css']
})
export class UserActivityComponent implements OnInit {
  panelOpenState: boolean = false;
  checked: boolean = false;
  toolTipPosition: string = "above";
  selected: string = 'All';
  disabled: boolean = false;
  color: string = "green";
  smileArray: string[] = ["sentiment_satisfied_alt","sentiment_satisfied_alt","sentiment_satisfied_alt"];
  selectable: boolean = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  // for Tags Section
  removableTags: boolean = true;
  tags = [
    { name: 'Tag 1' },
    { name: 'Tag 2' },
    { name: 'Tag 3' },
    { name: 'Tag 4' },
  ];

  // for Locations Section
  removableLocations: boolean = true;
  locations = [
    { name: 'Tel Aviv' },
    { name: 'Tel Aviv' },
    { name: 'Tel Aviv' },
    { name: 'Tel Aviv' },
  ];

  // for UserNames Section
  removableUserNames: boolean = true;
  userNames = [
    { name: 'Idan' },
    { name: 'Niv' },
    { name: 'Ariel' },
    { name: 'Idan' },
  ];

  // for BlackList Section
  removableTagsBlackList: boolean = true;
  tagBlackList = [
    { name: 'Idan' },
    { name: 'Niv' },
    { name: 'Ariel' },
    { name: 'Idan' },
  ];

  // for UserNameBlackList Section
  removableUserNameBlackList: boolean = true;
  userNameBlackList = [
    { name: 'Idan' },
    { name: 'Niv' },
    { name: 'Ariel' },
    { name: 'Idan' },
  ];

  // for KeywordBlackList Section
  removableKeywordBlackList: boolean = true;
  keywordBlackList = [
    { name: 'Idan' },
    { name: 'Niv' },
    { name: 'Ariel' },
    { name: 'Idan' },
  ];


  constructor() { }

  ngOnInit() {
  }

  addSmile() {
    this.smileArray.push("sentiment_satisfied_alt")
  }
  removeSmile() {
    this.smileArray.pop();
  }


  // for Tags Section
  addTags(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.tags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeTags(tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  // for Locations Section
  addLocation(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.locations.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeLocation(location): void {
    const index = this.locations.indexOf(location);

    if (index >= 0) {
      this.locations.splice(index, 1);
    }
  }


  // for UserNames Section
  addUserNames(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.userNames.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeUserNames(userName): void {
    const index = this.userNames.indexOf(userName);

    if (index >= 0) {
      this.userNames.splice(index, 1);
    }
  }


  // for BlackList Section  
  addBlackList(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.tagBlackList.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeBlackList(blacklist): void {
    const index = this.tagBlackList.indexOf(blacklist);

    if (index >= 0) {
      this.tagBlackList.splice(index, 1);
    }
  }


  // for UserNameBlackList Section    
  addUserNameBlackList(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.userNameBlackList.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeUserNameBlackList(userName): void {
    const index = this.userNameBlackList.indexOf(userName);

    if (index >= 0) {
      this.userNameBlackList.splice(index, 1);
    }
  }


  // for KeywordBlackList Section
  addKeywordBlackList(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our tags
    if ((value || '').trim()) {
      this.keywordBlackList.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeKeywordBlackList(keyword): void {
    const index = this.keywordBlackList.indexOf(keyword);

    if (index >= 0) {
      this.keywordBlackList.splice(index, 1);
    }
  }

}
