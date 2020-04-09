import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {KanasService} from '../../kanas/app.kanas.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private kanaService: KanasService) { }

  kana: string;
  exericeType: string;

  romajis = this.kanaService.getRomajis();
  hiraganas: {[key: string]: {[key: string]: string}};
  katakanas: {[key: string]: {[key: string]: string}};

  correctAnswer: {romaji: string, kana: string};
  answers: {romaji: string, kana: string}[];

  nbPoints = 0;

  correctionAnswer = {romaji: '', kana: ''};
  previousAnswer = {romaji: '', kana: ''};

  userInput: string;
  timeLeft = 120;

  ngOnInit(): void {
    // Get parameters
    this.route.params.subscribe(
        (params: Params) => {
          this.kana = params['kana'];
          this.exericeType = params['exerciceType'];
        }
    );

    // Get alphabets from service
    if (this.kana === 'hiragana'){
      this.hiraganas = this.kanaService.getHiraganas();
    } else if (this.kana === 'katakana'){
      this.katakanas = this.kanaService.getKatakanas();
    }

    // Create the first question
    this.setupQuestion();

    // If quizz, start the timer
    if (this.exericeType === 'quizz'){
      const timer = setInterval(() => {
        this.timeLeft--;
        if (this.timeLeft === 0){
          clearInterval(timer);
        }
      }, 1000);
    }
  }

  setupQuestion(){
    const randomKana = this.getRandomKana();
    let answersTemp;

    // Decide of a correct answer
    this.correctAnswer = {
      romaji: this.romajis[randomKana.consonant][randomKana.vowel],
      kana: this[this.kana + 's'][randomKana.consonant][randomKana.vowel]
    };

    // Generate 3 false responses
    answersTemp = [
      this.getRandomKana(),
      this.getRandomKana(),
      this.getRandomKana(),
    ];

    answersTemp = answersTemp.map(indexes => {
      console.log('indexes : ', indexes);
      return {
        romaji: this.romajis[indexes.consonant][indexes.vowel],
        kana: this[this.kana + 's'][indexes.consonant][indexes.vowel],
      };
    });

    answersTemp[this.randomIntFromInterval(0, 2)] = this.correctAnswer;
    this.answers = answersTemp;
  }

  randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomKana(kanaType?){
    const consonants = Object.keys(this.romajis);
    const consonant = consonants[this.randomIntFromInterval(0, consonants.length - 1)];
    const vowels = Object.keys(this.romajis[consonant]);
    const vowel = vowels[this.randomIntFromInterval(0, vowels.length - 1)];

    if (this.romajis[consonant][vowel] === ''){ // Check for empty data
      return this.getRandomKana(kanaType);
    }

    if (['romaji', 'hiragana', 'katakana'].indexOf(kanaType) > -1){
      return this[kanaType + 's'][consonant][vowel];
    } else {
      return {consonant, vowel};
    }
  }

  onAnswering(answer: {romaji: string, kana: string}){
    console.log(answer);
    if (answer === this.correctAnswer){
      this.nbPoints++;
      this.correctionAnswer = {romaji: '', kana: ''};
      this.previousAnswer = {romaji: '', kana: ''};
    } else {
      this.nbPoints--;
      this.correctionAnswer = this.correctAnswer;
      this.previousAnswer = answer;
    }
    this.setupQuestion();
  }

  onInputUp(event: Event){
    const answer = (event.target as HTMLInputElement).value;
    this.userInput = answer;
    if (answer === this.correctAnswer.romaji){
      console.log(event);
      this.nbPoints++;
      this.userInput = '';
      this.setupQuestion();
    }
  }
}
