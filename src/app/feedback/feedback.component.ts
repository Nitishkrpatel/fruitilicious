import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
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

  serviceForm:any = new FormGroup({
   answer: new FormControl('',Validators.required)
  });

  productForm:any = new FormGroup({
    answer: new FormControl('',Validators.required)
   });

   ambienceForm:any = new FormGroup({
    answer: new FormControl('',Validators.required)
   });

   recommendForm:any = new FormGroup({
    answer: new FormControl('',Validators.required)
   });

   revisitForm:any = new FormGroup({
    answer: new FormControl('',Validators.required)
   });

   suggestionForm:any = new FormGroup({
    answer: new FormControl('',Validators.required)
   });

   aboutForm:any = new FormGroup({
    answer: new FormControl('',Validators.required)
   });

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    
  }

  submitService(){
    const time:any = new Date();
    const reqData:any = {question: this.feedbackQuestions[0],
                         answer:this.serviceForm.get('answer').value,
                         timestamp: time.toLocaleString()}
    this.service.sendFeedback(reqData).subscribe(data=>{

    });
    this.serviceForm.setValue({answer:''})
  }

  submitProductForm(){
    const time:any = new Date();
    const reqData:any = {question: this.feedbackQuestions[1],
                         answer:this.productForm.get('answer').value,
                         timestamp: time.toLocaleString()}
    this.service.sendFeedback(reqData).subscribe(data=>{

    });
    this.productForm.setValue({answer:''})

  }
  
  submitAmbienceForm(){
    const time:any = new Date();
    const reqData:any = {question: this.feedbackQuestions[2],
                         answer:this.ambienceForm.get('answer').value,
                         timestamp: time.toLocaleString()}
    this.service.sendFeedback(reqData).subscribe(data=>{

    });
    this.ambienceForm.setValue({answer:''})
  }

  submitRecommendForm(){
    const time:any = new Date();
    const reqData:any = {question: this.feedbackQuestions[3],
                         answer:this.recommendForm.get('answer').value,
                         timestamp: time.toLocaleString()}
    this.service.sendFeedback(reqData).subscribe(data=>{

    });
    this.recommendForm.setValue({answer:''})
  }

  submitRevisitForm(){
    const time:any = new Date();
    const reqData:any = {question: this.feedbackQuestions[4],
                         answer:this.revisitForm.get('answer').value,
                         timestamp: time.toLocaleString()}
    this.service.sendFeedback(reqData).subscribe(data=>{

    });
    this.revisitForm.setValue({answer:''})
  }

  submitSuggestionForm(){
    const time:any = new Date();
    const reqData:any = {question: this.feedbackQuestions[5],
                         answer:this.suggestionForm.get('answer').value,
                         timestamp: time.toLocaleString()}
    this.service.sendFeedback(reqData).subscribe(data=>{

    });
    this.suggestionForm.setValue({answer:''})
  }

  submitAboutForm(){
    const time:any = new Date();
    const reqData:any = {question: this.feedbackQuestions[6],
                         answer:this.aboutForm.get('answer').value,
                         timestamp: time.toLocaleString()}
    this.service.sendFeedback(reqData).subscribe(data=>{

    });
    this.aboutForm.setValue({answer:''})
  }
  
}
