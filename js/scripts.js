function Key(majorScale, minorScale) {
  this.majorScale = majorScale
  this.minorScale = minorScale;
}
Key.prototype.findMinorScale = function () {
  var minorArray = []
  var minorSplice = this.majorScale.slice(5, 7)
  minorArray.push(minorSplice + "," + this.majorScale.slice(0, 5))
  var stringArray = minorArray.toString()
  this.minorScale = stringArray.split(',')
}
function makeChordChartsandAudio(x) {
  var array = x.split(',')
  var pictures = makePic(array)
  var sounds = makeAudio(array)
  var picturesAndSounds = pictures + sounds
  return picturesAndSounds
}

function jazz(x) {
  var progression = (x[1] + "," + x[4] + '7' + "," + x[0]);
  var soundAndVison = makeChordChartsandAudio(progression)
  return soundAndVison
}

function rock(x) {
  var progression = (x[0] + "," + x[3] + "," + x[4] + "," + x[0]);
  var soundAndVison = makeChordChartsandAudio(progression)
  return soundAndVison
}

function punk(x) {
  var progression = (x[0] + "," + x[3] + "," + x[4] + "," + x[0]);
  var soundAndVison = makeChordChartsandAudio(progression)
  return soundAndVison
}

function blues(x) {
  var progression = (x[0] + '7' + "," + x[3] + '7' + "," + x[4] + '7');
  var soundAndVison = makeChordChartsandAudio(progression)
  return soundAndVison
}

function pop(x) {
  var progression = (x[0] + "," + x[2] + "," + x[3] + "," + x[4]);
  var soundAndVison = makeChordChartsandAudio(progression)
  return soundAndVison
}

function metal(x) {
  var progression = (x[0] + "," + x[5] + "," + x[2] + "," + x[6]);
  var soundAndVison = makeChordChartsandAudio(progression)
  return soundAndVison
}
function makePic(x) {
  var pic = []
  for (var i = 0; i < x.length; i++) {
    pic.push('<img src="img/chords/' + x[i] + '.svg">');
  }
  var stringPic = pic.toString();
  var splitPic = stringPic.split(',')
  return splitPic;
}

function shiftPic(x) {
  var chord = x.shift()
  return chord
}
function buildMajorChords(key) {
  $('#jazzChords').html(jazz(key.majorScale))
  $('#rockChords').html(rock(key.majorScale))
  $('#bluesChords').html(blues(key.majorScale))
  $('#popChords').html(pop(key.majorScale))
  $('#metalChords').html(metal(key.majorScale))
  $('#punkChords').html(punk(key.majorScale))
}

function buildMinorChords(key) {
  $('#jazzChords').html(jazz(key.minorScale))
  $('#rockChords').html(rock(key.minorScale))
  $('#bluesChords').html(blues(key.minorScale))
  $('#popChords').html(pop(key.minorScale))
  $('#metalChords').html(metal(key.minorScale))
  $('#punkChords').html(punk(key.minorScale))
}
function makeAudio(x) {
  var pic = []
  for (var i = 0; i < x.length; i++) {
    pic.push('<audio controls>' + '<source src="newAudio/' + x[i] + '.mp3" type="audio/mp3">' + '</audio>');
  }
  var stringPic = pic.toString();
  var splitPic = stringPic.split(',')
  console.log(splitPic);
  return splitPic;
}

function hideAll() {
  $("#home").hide()
  $("#metal").hide()
  $("#jazz").hide()
  $("#blues").hide()
  $("#pop").hide()
  $("#punk").hide()
  $("#rock").hide()
}

function removeSelectedClass() {
  $("#metalBtn").removeClass("selected")
  $("#jazzBtn").removeClass("selected")
  $("#bluesBtn").removeClass("selected")
  $("#popBtn").removeClass("selected")
  $("#punkBtn").removeClass("selected")
  $("#rockBtn").removeClass("selected")
}
$(document).ready(function () {
  var keyC = new Key(["C", "Dmin", "Emin", "F", "G", "Amin", "Bmin"])
  keyC.findMinorScale();
  var keyDb = new Key(["Db", "Ebmin", "Fmin", "Gb", "Ab", "Bb", "Cmin"])
  keyDb.findMinorScale();
  var keyD = new Key(["D", "Emin", "Fsharpmin", "G", "A", "Bmin", "Dbmin"])
  keyD.findMinorScale();
  var keyEb = new Key(["Eb", "Fmin", "Gmin", "Ab", "Bb", "Cmin", "Dmin"])
  keyEb.findMinorScale();
  var keyE = new Key(["E", "Fsharpmin", "Abmin", "A", "B", "Dbmin", "Ebmin"])
  keyE.findMinorScale();
  var keyF = new Key(["F", "Gmin", "Amin", "Bb", "C", "Dmin", "Emin"])
  keyF.findMinorScale();
  var keyFsharp = new Key(["Fsharp", "Abmin", "Bbmin", "B", "Db", "Ebmin", "Fmin"])
  keyFsharp.findMinorScale();
  var keyG = new Key(["G", "Amin", "Bmin", "C", "D", "Emin", "Fsharpmin"])
  keyG.findMinorScale();;
  var keyAb = new Key(["Ab", "Bbmin", "Cmin", "Db", "Eb", "Fmin", "Gmin"])
  keyAb.findMinorScale();
  var keyA = new Key(["A", "Bmin", "Dbmin", "D", "E", "Fsharpmin", "Abmin"])
  keyA.findMinorScale();
  var keyBb = new Key(["Bb", "Cmin", "Dmin", "Eb", "F", "Gmin", "Amin"])
  keyBb.findMinorScale();
  var keyB = new Key(["B", "Dbmin", "Ebmin", "E", "Fsharp", "Abmin", "Bbmin"])
  keyB.findMinorScale();
  $("#chordButton").click(function (event) {
    event.preventDefault();
    var key = $('#key').find(":selected").val();
    var scale = $('#major').find(":selected").val();
    if (key === 'keyC' && scale === 'Major') {
      buildMajorChords(keyC)
    } else if (key === 'keyDb' && scale === 'Major') {
      buildMajorChords(keyDb)
    } else if (key === 'keyD' && scale === 'Major') {
      buildMajorChords(keyD)
    } else if (key === 'keyEb' && scale === 'Major') {
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
    }
    if (key === 'keyC' && scale === 'Minor') {
      buildMinorChords(keyEb)
    } else if (key === 'keyDb' && scale === 'Minor') {
      buildMinorChords(keyE)
    } else if (key === 'keyD' && scale === 'Minor') {
      buildMinorChords(keyF)
    } else if (key === 'keyEb' && scale === 'Minor') {
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
  $("#metalBtn").click(function () {
    removeSelectedClass();
    $("#metalBtn").addClass("selected");
    hideAll();
    $("#metal").show();
  });
  $("#jazzBtn").click(function () {
    removeSelectedClass();
    $("#jazzBtn").addClass("selected");
    hideAll();
    $("#jazz").show();
  });
  $("#bluesBtn").click(function () {
    removeSelectedClass();
    $("#bluesBtn").addClass("selected");
    hideAll();
    $("#blues").show();
  });
  $("#popBtn").click(function () {
    removeSelectedClass();
    $("#popBtn").addClass("selected");
    hideAll();
    $("#pop").show();
  });
  $("#punkBtn").click(function () {
    removeSelectedClass();
    $("#punkBtn").addClass("selected");
    hideAll();
    $("#punk").show();
  });
  $("#rockBtn").click(function () {
    removeSelectedClass();
    $("#rockBtn").addClass("selected");
    hideAll();
    $("#rock").show();
  });
  $("#genres").click(function () {
    $("#generator").show();
  })
});
