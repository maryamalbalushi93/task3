import { Component } from '@angular/core';

@Component({
  selector: 'app-button-navigation',
  templateUrl: './button-navigation.component.html',
  styleUrls: ['./button-navigation.component.css']
})
export class ButtonNavigationComponent {
  formSubmitted = false;

  users = ['maryam', 'reem','mohammed', 'usama']; // Add more users as needed
  selectedUser: string | undefined;
  userSelected = false;
  currentQuestionIndex = 0;
  showResults = false;
  score = 0;
  selectedOptions: any[] = [];

  questions = [
    {
      question: 'Which of these elements in HTML can be used for making a text bold?',
      options: ['<a>', '<pre>', '<br>', '<b>'],
      answer: '<b>'
    },
    {
      question: 'Which tag do we use in HTML for inserting a line-break?',
      options: ['<a>', '<br>', '<b>', '<pre>'],
      answer: '<br>'
    },
    {
      question: 'How to create a hyperlink in HTML?',
      options: [
        '<a link = “www.thinkandlearn.com”> thinkandlearn.com </a>',
        '<a> www.thinkandlearn.com <thinkandlearn.com /a>',
        '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>',
        '<a url = “www.thinkandlearn.com” thinkandlearn.com /a>'
      ],
      answer: '<a href = “www.thinkandlearn.com”> thinkandlearn.com </a>'
    },
    {
      question: 'In HTML, how do we insert an image?',
      options: [
        '<img src = “jtp.png” />',
        '<img href = “jtp.png” />',
        '<img link = “jtp.png” />',
        '<img url = “jtp.png” />'
      ],
      answer: '<img src = “jtp.png” />'
    },
    {
      question: 'Which tag do we use to define the options present in the drop-down selection lists?',
      options: ['<list>', '<option>', '<dropdown>', '<select>'],
      answer: '<option>'
    }
  ];

  selectUser() {
    this.userSelected = true;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  submit() {
    this.score = this.calculateScore();
    this.showResults = true;
      this.formSubmitted = true;
    }
  

  calculateScore() {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.selectedOptions[i] === this.questions[i].answer) {
        score++;
      }
    }
    return score;
  }

}