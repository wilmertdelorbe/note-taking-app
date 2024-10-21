const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_FILE = path.join(__dirname, 'noteStorage.json');

class DataHandler {
  async readNotes() {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
  }

  async writeNotes(notes) {
    await fs.writeFile(DATA_FILE, JSON.stringify(notes, null, 2));
  }

  async getAllNotes() {
    return this.readNotes();
  }

  async createNote(note) {
    const { title, content } = note;
    if (!title || !content) {
      throw new Error("Note 'title' and 'content' are required");
    }
    const newNote = { id: uuidv4(), title, content };
    const notes = await this.readNotes();
    notes.push(newNote);
    await this.writeNotes(notes);
    return newNote;
  }

  async deleteNote(id) {
    const notes = await this.readNotes();
    const updatedNotes = notes.filter(note => note.id !== id);
    await this.writeNotes(updatedNotes);
  }
}

module.exports = new DataHandler();