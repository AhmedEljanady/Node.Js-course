// const fs = require("fs");

// fs.writeFileSync("notes.txt", "file created by ahmed");
// fs.appendFileSync("notes.txt", " other text appended");
const notes = require("./others.js");
// console.log(getNotes());

// var validator = require("validator");
// console.log(validator.isEmail("ahmed@mail.com"));
// import chalk from "chalk";
// console.log(chalk.black.inverse("sayed"));
const chalk = require("chalk");
const yargs = require("yargs");

// console.log(process.argv);
// console.log(yargs.argv);

// adding notes
yargs.command({
  command: "add",
  describe: "adding a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// removing a note
yargs.command({
  command: "remove",
  describe: "removing a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// listing the notes
yargs.command({
  command: "list",
  describe: "listing the notes",
  handler() {
    notes.listNotes();
  },
});

// reading the notes
yargs
  .command({
    command: "read",
    describe: "reading the notes",
    builder: {
      title: {
        describe: "read note",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.readNote(argv.title);
    },
  })
  .parse();
