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
    link.href = 'cv/Banuka_Malshan_Resume.pdf';
    link.download = 'Banuka_Malshan_Resume.pdf';
    link.click();
  }
}
