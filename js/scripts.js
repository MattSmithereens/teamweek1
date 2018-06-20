function Key (majorScale, minorScale) {
  this.majorScale = majorScale
  this.minorScale = minorScale;
}

Key.prototype.findMinorScale = function() {
  var minorArray = []
  var minorSplice = this.majorScale.slice(5,7)
  minorArray.push(minorSplice + "," + this.majorScale.slice(0,5))
  var stringArray = minorArray.toString()
  this.minorScale = stringArray.split(',')
}


// genre functions

function jazz(x) {
  var progression= (x[1] + "," +  x[4] + '7' + "," + x[0]);
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  return pictures
};

function rock(x) {
  var progression = (x[0] + "," +  x[3] + "," + x[4]);
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  return pictures

}

function blues(x) {
  var progression = (x[0] + '7' + "," +  x[3] + '7' + "," + x[4] + '7');
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  return pictures

}

function pop(x) {
  var progression = (x[0] + "," +  x[2] + "," + x[3] + "," + x[4]);
  var array = progression.split(',')
  console.log(array);
  var pictures = makePic(array)
  console.log(pictures);
  return pictures
}

// picture functions


function makePic(x) {
  var pic = []
  for (var i = 0; i < x.length; i++) {
    pic.push('<img src="img/chords/' + x[i] +'.svg">');
    }
  var stringPic = pic.toString();
  var splitPic = stringPic.split(',')
  return splitPic;
}

function shiftPic(x){
  var chord = x.shift()
  return chord
}
// chord functions
function buildMajorChords(key){
  $('#jazzChords').html(jazz(key.majorScale))
  $('#rockChords').html(rock(key.majorScale))
  $('#bluesChords').html(blues(key.majorScale))
  $('#popChords').html(pop(key.majorScale))
}

function buildMinorChords(key){
  $('#jazzChords').html(jazz(key.minorScale))
  $('#rockChords').html(rock(key.minorScale))
  $('#bluesChords').html(blues(key.minorScale))
  $('#popChords').html(pop(key.minorScale))
}

// front end
$(document).ready(function(){

    var keyC = new Key (["C","dmin","emin","F","G","amin","bmin"])
    keyC.findMinorScale();
    var keyDb = new Key (["Db","ebmin","fmin","Gb","Ab","bb","cmin"])
    keyDb.findMinorScale();
    var keyD = new Key (["D","emin","f#","G","A","bmin","c#min"])
    keyD.findMinorScale();
    var keyEb = new Key (["Eb","fmin","gmin","Ab","Bb","cmin","dmin"])
    keyEb.findMinorScale();
    var keyE = new Key (["E","f#min","g#min","A","B","c#min","d#min"])
    keyE.findMinorScale();
    var keyF = new Key (["F","gmin","amin","Bb","C","dmin","emin"])
    keyF.findMinorScale();
    var keyFsharp = new Key (["F#","g#min","a#min","B","C#","d#min","fmin"])
    keyFsharp.findMinorScale();
    var keyG = new Key (["G","amin","bmin","C","D","emin","f#min"])
    keyG.findMinorScale();;
    var keyAb = new Key (["Ab","bbmin","cmin","Db","Eb","fmin","gmin"])
    keyAb.findMinorScale();
    var keyA = new Key (["A","bmin","c#min","D","E","f#min","g#min"])
    keyA.findMinorScale();
    var keyBb = new Key (["Bb","cmin","dmin","Eb","F","gmin","amin"])
    keyBb.findMinorScale();
    var keyB = new Key (["B","c#min","d#min","E","F#","g#min","a#min"])
    keyB.findMinorScale();


  $("#chordButton").click(function() {
    event.preventDefault();

    var key = $('#key').find(":selected").val();
    var scale = $('#major').find(":selected").val();

    if (key === 'keyC' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyDb' && scale === 'Major') {
      buildMajorChords(keyDb)
    } else if (key === 'keyD' && scale === 'Major') {
      buildMajorChords(keyD)
    } else if (key === 'Eb' && scale === 'Major') {
      buildMajorChords(keyEb)
    } else if (key === 'keyE' && scale === 'Major') {
      buildMajorChords(keyE)
    } else if (key === 'keyF' && scale === 'Major') {
      buildMajorChords(keyF)
    } else if (key === 'keyFsharp' && scale === 'Major') {
      buildMajorChords(keyFsharp)
    } else if (key === 'keyG' && scale === 'Major') {
      buildMajorChords(keyG)
    } else if (key === 'keyAb' && scale === 'Major') {
      buildMajorChords(keyAb)
    } else if (key === 'keyA' && scale === 'Major') {
      buildMajorChords(keyA)
    } else if (key === 'keyBb' && scale === 'Major') {
      buildMajorChords(keyBb)
    } else if (key === 'keyB' && scale === 'Major') {
      buildMajorChords(keyB)
      // minor
    } if (key === 'keyC' && scale === 'Minor') {
      buildMinorChords(keyEb)
    } else if (key === 'keyDb' && scale === 'Minor') {
      buildMinorChords(keyE)
    } else if (key === 'keyD' && scale === 'Minor') {
      buildMinorChords(keyF)
    } else if (key === 'Eb' && scale === 'Minor') {
      buildMinorChords(keyFsharp)
    } else if (key === 'keyE' && scale === 'Minor') {
      buildMinorChords(keyG)
    } else if (key === 'keyF' && scale === 'Minor') {
      buildMinorChords(keyAb)
    } else if (key === 'keyFsharp' && scale === 'Minor') {
      buildMinorChords(keyA)
    } else if (key === 'keyG' && scale === 'Minor') {
      buildMinorChords(keyBb)
    } else if (key === 'keyAb' && scale === 'Minor') {
      buildMinorChords(keyB)
    } else if (key === 'keyA' && scale === 'Minor') {
      buildMinorChords(keyC)
    } else if (key === 'keyBb' && scale === 'Minor') {
      buildMinorChords(keyDb)
    } else if (key === 'keyB' && scale === 'Minor') {
      buildMinorChords(keyD)
    }


  });
});
