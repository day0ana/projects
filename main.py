'''
Final Project: MoMo <3

Description: A motivational program that provides the user for 
few options to select from 
(font color, background color, music on/off).
It hopes to bring a smile to people who need it, but 
specifically focuses on teenagers as in today's current age
mental healh among the youth is worrying.
Please enjoy!

*Shouout to Profe Nery & the Miracosta STEM center for 
helping and guiding me with the music/sound aspect of
my project

Developer Name(s): Dayana Pascual Sanchez

Date: 05/22/2023
'''

##########################################
# IMPORTS:
#   modules needed for program
##########################################

import tkinter as tk
from replit import audio
from tkinter import simpledialog
import random

##########################################
# FUNCTIONS:
#   functions useful to main program
##########################################

#plays the music
def play_music():
    source.paused = False

#pauses the music
def pause_music():
    source.paused = True

 #radiobutton backgroundcolor
def changeColor():
    color = choice.get()  
    canva.configure(bg=color)#where the text will go

#randomzing the motivaional texts
def randomize():
   motlabel["text"] = random.choice(messages)
   
#radio button FG-font color
def changeFontColor():
    colorFont = choice1.get()  
    motlabel.configure(bg=colorFont)

##########################################
# MAIN PROGRAM:
#   beginning of running program
##########################################

#list of motivational messages
messages = ["Love, live, laugh", "It's never too late", "Do it", "Don't give up", "Keep going", "Outrun the fears", "It's your life"]

#Beginning
root = tk.Tk()
#the title of my program
root.title('MoMo <3')

#mis dimensions
root.geometry("900x300")
root.grid_columnconfigure(0, weight=1)
#el strict --prevents the root's geometry from moving
root.resizable(False, False)


#greet
#asks for the user name
user_input = simpledialog.askstring(title="Hello!", prompt="What's your name?")

#returns a friendly message with user's input(name)
print("Hello "+user_input+ "! " + "Please enjoy your time here!")


#musicc
#music from pixabay https://pixabay.com/sound-effects/search/waves/
song_name = "smooth.mp3" #the only song
source = audio.play_file(song_name)#plays
source.paused = True#starting value


onButton = tk.Button(root, text="On", #If on-it plays
                     command=play_music,font=("Terminal")).place(x=440, y=170)
offButton = tk.Button(root, text="Off", #if off, it pauses
                      command=pause_music,font=("Terminal")).place(x=440, y=210)


#displaying the options in radiobuton for bg color
choice = tk.StringVar(root, "White")
#creates canva for motivation
canva = tk.Canvas(root, bg="white")
canva.place(x=-1, y=-1, width=400, height=300)
i=0
for option in ["Yellow", "Orange", "Pink"]:#options
    tk.Radiobutton(root, text="%s" % option, value=option,
                   variable=choice, padx=1, pady=1,font=("Terminal")).place(x=420, y=20+i)
    i=i+20#i is used to prevent squished
tk.Button(text="Change BG", command=changeColor,font=("Terminal"), bd=4).place(x=420, y=90)#button when clicked to change bg color



#displaying the options in radiobuton for font color
choice1 = tk.StringVar(root, "AliceBlue")
i=0
for option1 in ["CornflowerBlue", "AliceBlue", "DeepPink"]:
    tk.Radiobutton(root, text="%s" % option1, value=option1,
                   variable=choice1, padx=1, pady=1,font=("Terminal")).place(x=600, y=20+i)#three options
    i=i+20#prevents the options from being squished
    
tk.Button(text="Change FG", command=changeFontColor, font=("Terminal"), bd=4).place(x=600, y=90)#button when clicked changes fon color + location


# motivation text here 
motlabel = tk.Label(root, text="Click for Motivation", font=("Terminal", 18))
#where mot text appears
motlabel.pack(padx=0,pady=0)#organize
motlabel.place(x=70,y=120)#location

# buton 4 rNDOMIZE
randButton = tk.Button(root, text="Randomize", font=("Terminal"), command=randomize)#programs the buttton tot randomize a mot text when clicked
randButton.pack(pady=10) #organize
randButton.place(x=140, y=200) #location

#if-else statement for name
#Build connection with user-encourage them to continue
if len(user_input) == 6: #if same length of my name-try personal method of building conn
    greetL = tk.Label(root, text = "Hello " +user_input +"! We have the same length name! What a lovely name!", font=("Terminal", 5)).pack(padx=1, pady=1)
    #greetL.place(x=100, y=100)
    print("We have the same length name! What a lovely name!")
else:#still attempt to build a connection
    greetL = tk.Label(root, text = "Hello " +user_input +"! What a lovely name!", font=("Terminal", 5)).pack(padx=1, pady=1)
    #greetL.place(x=100, y=100)
    print("What a lovely name!")

#if statement for ending until all is done
if __name__ == "__main__":
    root.mainloop()
