import { Component } from '@angular/core';

@Component({
  selector: 'ngx-tiny-editor',
  templateUrl: './tiny-editor.component.html',
})
export class TinyEditorComponent {
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
}
