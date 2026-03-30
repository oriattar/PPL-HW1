import { BlobOptions } from "node:buffer";
import { ChildProcess } from "node:child_process";
import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */

const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
const vowelFilter : (element : string)=>boolean  = (element : string):boolean => vowels.includes(element);
export const countVowels: (s: string) => number = (s:string):number => stringToArray(s.toLowerCase()).filter(vowelFilter).length;

/* Question 2.2 */
const isLetter :(s:string)=>boolean =(s:string):boolean => ((s >= "a" && s <="z") || (s>="0"&& s<="9"));
const polly = R.pipe((text:string):string=>text.toLowerCase(),stringToArray,(arr : string[]):string[]=>arr.filter(isLetter));

export const isPalindrome:(text:string)=>boolean = (text:string):boolean =>{
const chars:string[] = polly(text);
return chars.every((curr:string,i:number):boolean=>curr === chars[chars.length -i -1]);
}

  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

const flat:(arr :string[][])=>string[] =(arr :string[][]):string[] =>arr.reduce((acc:string[],curr:string[]):string[]=>acc.concat(curr),[]); 
const toArray:(t :WordTree) => string[] =(t :WordTree):string[] => ([t.root].concat(flat(t.children.map(toArray))));
export const treeToSentence:(t:WordTree)=>string = (t: WordTree): string => toArray(t).reduce((acc:string,curr:string):string => acc.concat(" ").concat(curr));
