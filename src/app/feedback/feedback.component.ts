import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackQuestions = ["Did you like our service?",
                       "Did you like our product?",
                       "Did you like our ambience?",
                       "How likely are you recommend your friend and family?",
                       "When do we hope to see you again?",
                       "Where else do you suggest us to serve you?",
                       "How do you come to know about us?",]

  feedbackform:FormGroup = new FormGroup({
   feedback: new FormControl('')
  })
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    
  }
  // submitFeedback(i:any){
  //   console.log(document.getElementById('qes_' + i)?.innerHTML) 
  // }
  onSubmit(){
    const reqData = this.feedbackform.value
    this.service.sendFeedback(reqData).subscribe(data=>{

    });
  }
  
}
