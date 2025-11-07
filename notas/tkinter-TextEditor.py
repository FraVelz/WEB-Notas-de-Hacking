#!/usr/bin/env python3

import tkinter as tk
from tkinter import Text, Menu, filedialog, messagebox

class TextEditor:
    def __init__(self, root):
        self.root = root
        self.root.title("Simple Text Editor")
        
        self.text_area = Text(self.root, wrap='word')
        self.text_area.pack(expand=1, fill='both')

        self.menu = Menu(self.root)
        self.root.config(menu=self.menu)

        file_menu = Menu(self.menu, tearoff=0)
        self.menu.add_cascade(label="File", menu=file_menu)
        file_menu.add_command(label="New", command=self.new_file)
        file_menu.add_command(label="Open", command=self.open_file)
        file_menu.add_command(label="Save", command=self.save_file)
        file_menu.add_separator()
        file_menu.add_command(label="Exit", command=self.exit_editor)

    def new_file(self):
        self.text_area.delete(1.0, 'end')

    def open_file(self):
        file_path = filedialog.askopenfilename(defaultextension=".txt",
                                               filetypes=[("Text Documents", "*.txt"), ("All Files", "*.*")])
        if file_path:
            with open(file_path, 'r') as file:
                content = file.read()
                self.text_area.delete(1.0, 'end')
                self.text_area.insert('1.0', content)

    def save_file(self):
        file_path = filedialog.asksaveasfilename(defaultextension=".txt",
                                                 filetypes=[("Text Documents", "*.txt"), ("All Files", "*.*")])
        if file_path:
            with open(file_path, 'w') as file:
                content = self.text_area.get(1.0, 'end-1c')
                file.write(content)

    def exit_editor(self):
        if messagebox.askokcancel("Quit", "Do you really want to quit?"):
            self.root.destroy()

if __name__ == "__main__":
    root = tk.Tk()
    editor = TextEditor(root)
    root.mainloop()
