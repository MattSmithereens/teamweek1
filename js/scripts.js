function Key (majorScale, minorScale) {
  this.majorScale = majorScale
  this.minorScale = minorScale;
}

// function Chords (majorChords,minorchords) {
//   this.majorChords = ['I','ii','iii','IV','V','vii','viii']
//   this.minorChords = []
// }

Key.prototype.findMinorScale = function() {
  var minorArray = []
  var minorSplice = this.majorScale.slice(5,7)
  minorArray.push(minorSplice + "," + this.majorScale.slice(0,5))
  var stringArray = minorArray.toString()
  this.minorScale = stringArray.split(',')
}


function jazz(x) {
  var jazzProg = (x[1] + 'min' + "," +  x[4] + 'maj7' + "," + x[0] + 'maj');
  var jazzArray = jazzProg.split(',')
  var pictures = makePic(jazzArray)
  return pictures
};

function rock(x) {
  var progression = (x[0] + "," +  x[3] + "," + x[4]);
  var array = progression.split(',')
  var pictures = makePic(array)
  return pictures

}

function blues(x) {
  var progression = (x[0] + 'maj7' + ", " +  x[3] + 'maj7' + ", " + x[4] + 'maj7');
  var array = progression.split(',')
  var pictures = makePic(array)
  return pictures

}

function pop(x) {
  var progression = (x[0] + 'maj' + "," +  x[2] + 'min' + "," + x[3] + 'maj' + "," + x[4] + 'maj');
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  console.log(pictures);
  return pictures
}

function makePic(x) {
  var pic = []
  for (var i = 0; i < x.length; i++) {
  pic.push('<img src="img/' + x[i] +'.png">');
  }
  var stringPic = pic.toString();
  var splitPic = stringPic.split(',')
  return splitPic;
}

function shiftPic(x){
  var chord = x.shift()
  return chord
}

function buildMajorChords(key){
  $('#jazzChords').html(jazz(key.majorScale))
  $('#rockChords').html(rock(key.majorScale))
  $('#showChords').html(blues(key.majorScale))
  $('#showChords').html(pop(key.majorScale))
}


$(document).ready(function(){

    var keyC = new Key (["C","D","E","F","G","A","B"])
    keyC.findMinorScale();
    var keyDb = new Key (["Db","Eb","F","Gb","Ab","Bb","C"])
    keyDb.findMinorScale();
    var keyD = new Key (["D","E","F#","G","A","B","C#"])
    keyD.findMinorScale();
    var keyEb = new Key (["Eb","F","G","Ab","Bb","C","D"])
    keyEb.findMinorScale();
    var keyE = new Key (["E","F#","G#","A","B","C#","D#"])
    keyE.findMinorScale();
    var keyF = new Key (["F","G","A","Bb","C","D","E"])
    keyF.findMinorScale();
    var keyFsharp = new Key (["F#","G#","A#","B","C#","D#","F"])
    keyFsharp.findMinorScale();
    var keyG = new Key (["G","A","B","C","D","E","F#"])
    keyG.findMinorScale();;
    var keyAb = new Key (["Ab","Bb","C","Db","Eb","F","G"])
    keyAb.findMinorScale();
    var keyA = new Key (["A","B","C#","D","E","F#","G#"])
    keyA.findMinorScale();
    var keyBb = new Key (["Bb","C","D","Eb","F","G","A"])
    keyBb.findMinorScale();
    var keyB = new Key (["B","C#","D#","E","F#","G#","A#"])
    keyB.findMinorScale();


  $("#chordButton").click(function() {
    event.preventDefault();

      var key = $('#key').find(":selected").val();
      var scale = $('#major').find(":selected").val();

    if (key === 'keyC' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyDb' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyD' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'Eb' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyE' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyF' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyFsharp' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyG' && scale === 'Major') {
      $('#showChords').html(jazz(keyG.majorScale))
      $('#showChords').html(rock(keyG.majorScale))
      $('#showChords').html(blues(keyG.majorScale))
      $('#showChords').html(pop(keyG.majorScale))
    } if (key === 'keyC' && scale === 'Minor') {
      $('#jazzChords').html(jazz(keyEb.minorScale))
      $('#rockChords').html(rock(keyEb.minorScale))
      $('#showChords').html(blues(keyEb.minorScale))
      $('#showChords').html(pop(keyEb.minorScale))
    } else if (key === 'keyDb' && scale === 'Minor') {
      $('#showChords').html(jazz(keyDb.majorScale))
      $('#showChords').html(rock(keyDb.majorScale))
      $('#showChords').html(blues(keyDb.majorScale))
      $('#showChords').html(pop(keyDb.majorScale))
    } else if (key === 'keyD' && scale === 'Minor') {
      $('#showChords').html(jazz(keyD.majorScale))
      $('#showChords').html(rock(keyD.majorScale))
      $('#showChords').html(blues(keyD.majorScale))
      $('#showChords').html(pop(keyD.majorScale))
    } else if (key === 'Eb' && scale === 'Minor') {
      $('#showChords').html(jazz(Eb.majorScale))
      $('#showChords').html(rock(Eb.majorScale))
      $('#showChords').html(blues(Eb.majorScale))
      $('#showChords').html(pop(Eb.majorScale))
    } else if (key === 'keyE' && scale === 'Minor') {
      $('#showChords').html(jazz(keyE.majorScale))
      $('#showChords').html(rock(keyE.majorScale))
      $('#showChords').html(blues(keyE.majorScale))
      $('#showChords').html(pop(keyE.majorScale))
    } else if (key === 'keyF' && scale === 'Minor') {
      $('#showChords').html(jazz(keyF.majorScale))
      $('#showChords').html(rock(keyF.majorScale))
      $('#showChords').html(blues(keyF.majorScale))
      $('#showChords').html(pop(keyF.majorScale))
    } else if (key === 'keyFsharp' && scale === 'Minor') {
      $('#showChords').html(jazz(keyFsharp.majorScale))
      $('#showChords').html(rock(keyFsharp.majorScale))
      $('#showChords').html(blues(keyFsharp.majorScale))
      $('#showChords').html(pop(keyFsharp.majorScale))
    } else if (key === 'keyG' && scale === 'Minor') {
      $('#showChords').html(jazz(keyG.majorScale))
      $('#showChords').html(rock(keyG.majorScale))
      $('#showChords').html(blues(keyG.majorScale))
      $('#showChords').html(pop(keyG.majorScale))
    }



  });
});
