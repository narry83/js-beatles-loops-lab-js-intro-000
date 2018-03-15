function theBeatlesPlay(musicians,instruments ){

  var musicstring=[]

  for (var i=0;i<musicians.length;i++){

      musicstring[i]=(musicians[i]+ " plays " +instruments[i]);
    }

    return musicstring

}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  var arrayfacts=[]
  var i=0
  while (i<facts.length) {

  arrayfacts[i]=facts[i]+"!!!"
  i++
  }

  return arrayfacts

}


function iLoveTheBeatles (number){
  var beatles=[]


      do {
        beatles.push("I love the Beatles!")
        number++
      } while (number<15 );

  return beatles
}
