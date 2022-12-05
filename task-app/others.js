// console.log("ddd");
// let name = "ahmed";
// module.exports = name;
const fs = require("fs");
const chalk = require("chalk");

///---------MY stupid code------------///
const removeNote = (title) => {
  const notes = loadNotes();
  let found = notes.find((note) => note.title === title);
  if (found) {
    let index = notes.indexOf(found);
    notes.splice(index, 1);
    console.log(chalk.green.inverse("Note deleted!"));
    saveNotes(notes);
  } else {
    console.log(chalk.red.inverse("Note Not Found!"));
  }
};

///---------Instructor code------------///
// const removeNote = (title) => {
//   const notes = loadNotes();
//   const restNotes = notes.filter((note) => note.title !== title);
//   notes.length !== restNotes.length
//     ? console.log(chalk.green.inverse("Note deleted!"))
//     : console.log(chalk.red.inverse("Note Not Found!"));
//   saveNotes(restNotes);
// };

const addNote = (title, body) => {
  const notes = loadNotes();

  const dublicate = notes.find((note) => note.title === title);

  if (!dublicate) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title is already taken!"));
  }
};

const saveNotes = function (notes) {
  const datajson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", datajson);
};

const loadNotes = () => {
  try {
    const dataBuffre = fs.readFileSync("./notes.json");
    const datajson = dataBuffre.toString();
    return JSON.parse(datajson);
  } catch (e) {
    return [];
  }
};

const listNotes = () => {
  console.log(chalk.bgBlueBright.bold("Your Notes: "));
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const readNote = (title) => {
  const notes = loadNotes();
  const found = notes.find((note) => note.title === title);
  if (found) {
    // console.log(found);
    console.log(chalk.green.inverse(found.title) + "\n" + found.body);
  } else {
    console.log(chalk.red.inverse("Note Not Found!"));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
