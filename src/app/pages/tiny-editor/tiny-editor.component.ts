import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ngx-tiny-editor',
  templateUrl: './tiny-editor.component.html',
})
export class TinyEditorComponent {
  showEditor = true;

  config = {
    height: 500,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount',
    ],
    toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help',
  };

  formGroup: FormGroup;

  constructor(
    protected formBuilder: FormBuilder,
  ) {
    this.formGroup = this.formBuilder.group({
      title: 'Something happened 🤠',
      text: `<h1>Hello World 👻</h1>`,
    });
  }

  toggleEditor() {
    this.showEditor = ! this.showEditor;
  }

  changeTab($event) {
    console.log('changeTab', $event);

    this.toggleEditor();
  }
}
