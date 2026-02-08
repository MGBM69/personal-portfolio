import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-form-com',
  imports: [],
  templateUrl: './resume-form-com.html',
  styleUrl: './resume-form-com.css',
})
export class ResumeFormCom {
  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'cv/My_CV.pdf';
    link.download = 'My_CV.pdf';
    link.click();
  }
}
