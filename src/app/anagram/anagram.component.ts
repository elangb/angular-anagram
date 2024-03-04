import { Component } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent {
  wordsInput: string = ''; // Input string berisi kata-kata yang dipisahkan oleh koma
  separatedAnagrams: string[][] = []; // Array untuk menyimpan hasil pemisahan anagram

  // Memisahkan anagram
  separateAnagrams() {
    const wordsArray: string[] = this.wordsInput.split(',').map(word => word.trim()); // Memisahkan kata-kata menjadi array
    const anagramMap: Map<string, string[]> = new Map();

    // Memisahkan kata-kata sesuai anagramnya
    for (const word of wordsArray) {
      // Mengurutkan huruf dalam kata untuk mendapatkan anagram yang sama
      const sortedWord = word.split('').sort().join('');
      // Menyimpan kata ke dalam Map berdasarkan anagramnya
      if (anagramMap.has(sortedWord)) {
        anagramMap.get(sortedWord)?.push(word);
      } else {
        anagramMap.set(sortedWord, [word]);
      }
    }

    // Mengisi array hasil anagram dari nilai Map
    this.separatedAnagrams = Array.from(anagramMap.values());
  }
}
