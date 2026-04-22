// Story data — text is preserved verbatim.
// Each page is an array of lines. Line types: 'direction', 'dialogue', 'gavel'.
// Pages can optionally mark an act transition with actBanner.

const STORY = [
  // ============ ACT I ============
  {
    actBanner: "Act I — The Objection",
    lines: [
      { type: "direction", text: "The courtroom is too quiet. The ceiling fans hum. A bailiff closes the side door with a firm click. The judge settles into his chair. At the defense table, the lawyer leans in, one hand over a yellow legal pad. The murderer sits beside him in county blues, expression controlled but not calm. In the front row, the son of the murdered man stands when he should be sitting, fingers locked around the back of the bench in front of him." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale, sit down." },
      { type: "dialogue", speaker: "SON", text: "I just want to look at him." },
      { type: "dialogue", speaker: "JUDGE", text: "Sit down now." },
      { type: "direction", text: "The son sits, but only barely, perched on the edge of the bench. His eyes stay fixed on the defendant." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "LAWYER", text: "Your Honor, before the jury is brought in, the defense renews its objection to the inclusion of the victim impact photographs. Their prejudicial effect is obvious." },
      { type: "dialogue", speaker: "JUDGE", text: "I ruled on that yesterday." },
      { type: "dialogue", speaker: "LAWYER", text: "And I am preserving the record today." },
      { type: "dialogue", speaker: "JUDGE", text: "Record preserved." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer nods once, then turns slightly toward his client." },
      { type: "dialogue", speaker: "LAWYER", text: "Don\u2019t react to anything. Not to him, not to the photographs, not to the testimony. Look at me or look down." },
      { type: "dialogue", speaker: "MURDERER", text: "I know how to sit in a chair." },
      { type: "dialogue", speaker: "LAWYER", text: "Then do it like your life depends on it." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The murderer lets out a breath through his nose. Across the aisle, the son laughs once, sharp and humorless." },
      { type: "dialogue", speaker: "SON", text: "That\u2019s the first true thing anybody\u2019s said in here." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale." },
      { type: "dialogue", speaker: "SON", text: "He\u2019s worried about how he sits? My father was found in a ditch." },
      { type: "dialogue", speaker: "LAWYER", text: "My client has the right to a fair trial." },
      { type: "dialogue", speaker: "SON", text: "Your client had my father begging on his knees." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "Silence. Even the hum of the fans seems to recede." },
      { type: "dialogue", speaker: "MURDERER", text: "That\u2019s not what happened." },
      { type: "direction", text: "The son rises so fast the bench creaks." },
      { type: "dialogue", speaker: "SON", text: "You don\u2019t get to tell me what happened." },
      { type: "dialogue", speaker: "JUDGE", text: "Sit down, or I will have you removed." },
      { type: "dialogue", speaker: "SON", text: "Then remove me." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale\u2014" },
      { type: "dialogue", speaker: "SON", text: "No, let him talk. Let him say it. He\u2019s been sitting there for four days pretending he\u2019s made of stone. Let him say what happened." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer stands now too, one palm pressed to the table." },
      { type: "dialogue", speaker: "LAWYER", text: "My client will not be baited into an outburst because the gallery cannot control itself." },
      { type: "dialogue", speaker: "SON", text: "The gallery?" },
      { type: "dialogue", speaker: "LAWYER", text: "You are not a party to this case." },
      { type: "dialogue", speaker: "SON", text: "He killed my father." },
      { type: "dialogue", speaker: "LAWYER", text: "Allegedly." },
      { type: "direction", text: "The son stares at the lawyer as if he may cross the aisle." },
      { type: "dialogue", speaker: "SON", text: "Say that again." },
      { type: "dialogue", speaker: "JUDGE", text: "Counselor." },
      { type: "dialogue", speaker: "LAWYER", text: "Withdrawn." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "MURDERER", text: "He was alive when I left." },
      { type: "direction", text: "The son goes still. The judge\u2019s face hardens. The lawyer slowly turns to look at his client." },
      { type: "dialogue", speaker: "LAWYER", text: "Don\u2019t say another word." },
      { type: "dialogue", speaker: "SON", text: "There. There. You hear that? You all hear that?" },
      { type: "dialogue", speaker: "JUDGE", text: "The statement will be stricken." },
      { type: "dialogue", speaker: "SON", text: "Stricken?" },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "LAWYER", text: "Your Honor, my client is under enormous pressure\u2014" },
      { type: "dialogue", speaker: "SON", text: "He just said it." },
      { type: "dialogue", speaker: "MURDERER", text: "I said he was alive." },
      { type: "dialogue", speaker: "SON", text: "And you know that because you were there." },
      { type: "dialogue", speaker: "LAWYER", text: "Stop talking." },
      { type: "dialogue", speaker: "MURDERER", text: "He was breathing." },
      { type: "dialogue", speaker: "LAWYER", text: "Stop." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The murderer looks past everyone now, directly at the son." },
      { type: "dialogue", speaker: "MURDERER", text: "Your father looked at me like he knew me." },
      { type: "direction", text: "The son\u2019s mouth opens, but nothing comes out at first." },
      { type: "dialogue", speaker: "SON", text: "What does that mean?" },
      { type: "dialogue", speaker: "LAWYER", text: "Your Honor, I need a recess." },
      { type: "dialogue", speaker: "JUDGE", text: "You needed control of your client five seconds ago." },
      { type: "dialogue", speaker: "SON", text: "What does that mean?" },
      { type: "dialogue", speaker: "MURDERER", text: "He said a name." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "SON", text: "My father said your name?" },
      { type: "dialogue", speaker: "MURDERER", text: "No." },
      { type: "dialogue", speaker: "SON", text: "Then whose?" },
      { type: "direction", text: "The murderer\u2019s jaw tightens. For the first time, he looks uncertain." },
      { type: "dialogue", speaker: "LAWYER", text: "Do not answer that." },
      { type: "dialogue", speaker: "JUDGE", text: "Bailiff, clear the courtroom except counsel, the defendant, and Mr. Vale." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "SON", text: "No. No, don\u2019t you dare send me out now." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale, if there is even a chance this concerns a matter not yet in evidence, I will control how it enters this courtroom." },
      { type: "dialogue", speaker: "SON", text: "That man put a bullet in my father and now we\u2019re protecting procedure?" },
      { type: "dialogue", speaker: "JUDGE", text: "We are protecting the trial. Sit down and keep your voice level." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The bailiff hesitates at the back doors, waiting." },
      { type: "dialogue", speaker: "LAWYER", text: "Your Honor, my client is not waiving anything. He is exhausted, he is frightened, and he is misspeaking." },
      { type: "dialogue", speaker: "MURDERER", text: "I\u2019m not frightened." },
      { type: "dialogue", speaker: "LAWYER", text: "You should be." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The judge folds his hands." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Cross, I am going to ask you one question, and your attorney may advise you whether to answer." },
      { type: "direction", text: "The murderer says nothing." },
      { type: "dialogue", speaker: "JUDGE", text: "Did the victim speak before his death?" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer leans in, whispering hard and fast. The murderer listens, eyes lowered. The son stands motionless, staring." },
      { type: "dialogue", speaker: "LAWYER", text: "Do not answer. Do you understand me? Do not answer." },
      { type: "direction", text: "The whispering stops." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Cross?" },
      { type: "direction", text: "A long beat." },
      { type: "dialogue", speaker: "MURDERER", text: "Yes." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The son takes one step forward into the aisle." },
      { type: "dialogue", speaker: "SON", text: "What did he say?" },
      { type: "dialogue", speaker: "LAWYER", text: "We are done here." },
      { type: "dialogue", speaker: "JUDGE", text: "What did he say, Mr. Cross?" },
      { type: "direction", text: "The murderer looks at the son again, and when he speaks, his voice is quieter than before." },
      { type: "dialogue", speaker: "MURDERER", text: "He said, \u201cTell Daniel it wasn\u2019t meant for me.\u201d" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The son goes pale." },
      { type: "dialogue", speaker: "JUDGE", text: "Daniel?" },
      { type: "dialogue", speaker: "SON", text: "That\u2019s me." },
      { type: "direction", text: "No one moves." },
      { type: "dialogue", speaker: "LAWYER", text: "Your Honor, recess. Now." },
      { type: "dialogue", speaker: "JUDGE", text: "Granted." },
      { type: "gavel", text: "The gavel comes down once. The crack echoes. But nobody immediately leaves." },
    ],
  },

  // ============ ACT II ============
  {
    actBanner: "Act II — The Name on His Lips",
    lines: [
      { type: "direction", text: "The gavel\u2019s echo lingers, but the room stays frozen. The bailiff looks to the judge for instruction and gets none. The son\u2014Daniel\u2014has one hand on the rail now, knuckles white. The lawyer is already gathering papers with shaking precision, as if neat stacks might restore control. The murderer sits very still." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "No." },
      { type: "direction", text: "It comes out barely above a whisper." },
      { type: "dialogue", speaker: "DANIEL", text: "No, he didn\u2019t." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale\u2014" },
      { type: "dialogue", speaker: "DANIEL", text: "He didn\u2019t call me Daniel." },
      { type: "direction", text: "The murderer\u2019s eyes narrow, studying him." },
      { type: "dialogue", speaker: "MURDERER", text: "He did." },
      { type: "dialogue", speaker: "DANIEL", text: "He called me Danny." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer closes his eyes for half a second." },
      { type: "dialogue", speaker: "LAWYER", text: "That is exactly why no one should be speaking right now." },
      { type: "dialogue", speaker: "DANIEL", text: "He called me Danny when he was happy, and \u201cson\u201d when he was angry, and \u201cDaniel\u201d only when\u2014" },
      { type: "direction", text: "He stops. His face changes." },
      { type: "dialogue", speaker: "JUDGE", text: "Only when what?" },
      { type: "dialogue", speaker: "DANIEL", text: "Only when he thought I was lying." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The judge watches him carefully." },
      { type: "dialogue", speaker: "JUDGE", text: "Sit down, Mr. Vale." },
      { type: "dialogue", speaker: "DANIEL", text: "No." },
      { type: "dialogue", speaker: "LAWYER", text: "Daniel\u2014" },
      { type: "dialogue", speaker: "DANIEL", text: "Don\u2019t say my name like you know me." },
      { type: "dialogue", speaker: "LAWYER", text: "Fine. Then listen to me, Mr. Vale. If there is some fact buried in what was just said, blurting it out in open court is the fastest way to poison it." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "Poison it for who?" },
      { type: "dialogue", speaker: "LAWYER", text: "For the truth." },
      { type: "dialogue", speaker: "DANIEL", text: "You don\u2019t care about the truth." },
      { type: "dialogue", speaker: "LAWYER", text: "I care about what can be proven." },
      { type: "dialogue", speaker: "DANIEL", text: "Same thing to you?" },
      { type: "dialogue", speaker: "LAWYER", text: "Never." },
      { type: "direction", text: "That lands harder than anyone expects. Even Daniel pauses." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "JUDGE", text: "Counsel, in chambers. Now." },
      { type: "dialogue", speaker: "DANIEL", text: "No. He says something like that and now everybody disappears behind a door?" },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale, you are here because I allowed it. Do not mistake that for authority." },
      { type: "dialogue", speaker: "DANIEL", text: "Then tell me why my father would say that." },
      { type: "dialogue", speaker: "MURDERER", text: "Because he thought you were next." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer slams a palm on the table." },
      { type: "dialogue", speaker: "LAWYER", text: "Enough!" },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Cross, one more outburst and I will have your attorney gag your side of this table with procedure if I have to." },
      { type: "dialogue", speaker: "MURDERER", text: "He asked." },
      { type: "dialogue", speaker: "LAWYER", text: "He is grieving. He is not examining you." },
      { type: "dialogue", speaker: "DANIEL", text: "Next for what?" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The murderer turns toward him fully now. His voice loses its earlier edge. It is flatter, more dangerous for how plain it is." },
      { type: "dialogue", speaker: "MURDERER", text: "Your father owed someone. I was there to send a message." },
      { type: "dialogue", speaker: "DANIEL", text: "You shot him." },
      { type: "dialogue", speaker: "MURDERER", text: "I said I was there to send a message." },
      { type: "dialogue", speaker: "DANIEL", text: "That is the message." },
      { type: "dialogue", speaker: "LAWYER", text: "Stop answering selectively as if that helps you." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Cross, answer this: are you claiming someone else ordered the killing?" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer points a finger at the bench." },
      { type: "dialogue", speaker: "LAWYER", text: "He invokes." },
      { type: "dialogue", speaker: "MURDERER", text: "Yes." },
      { type: "direction", text: "The lawyer\u2019s hand drops." },
      { type: "dialogue", speaker: "LAWYER", text: "You idiot." },
      { type: "dialogue", speaker: "JUDGE", text: "Name them." },
      { type: "dialogue", speaker: "LAWYER", text: "Do not." },
      { type: "dialogue", speaker: "DANIEL", text: "Name them." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The murderer looks at Daniel, not the judge." },
      { type: "dialogue", speaker: "MURDERER", text: "Your father said you took something." },
      { type: "dialogue", speaker: "DANIEL", text: "I don\u2019t know what you\u2019re talking about." },
      { type: "dialogue", speaker: "MURDERER", text: "Then he died for nothing." },
      { type: "direction", text: "Daniel lunges forward before he knows he\u2019s moving. The bailiff is between them in an instant, catching him across the chest. The bench screeches. Papers slide from the defense table." },
      { type: "dialogue", speaker: "BAILIFF", text: "Back! Back!" },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "You lying bastard!" },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale!" },
      { type: "dialogue", speaker: "LAWYER", text: "Sit him down or get him out." },
      { type: "dialogue", speaker: "DANIEL", text: "He\u2019s trying to bury this on me!" },
      { type: "dialogue", speaker: "MURDERER", text: "I\u2019m telling you what he said." },
      { type: "dialogue", speaker: "DANIEL", text: "You expect me to believe my father\u2019s last words were about me stealing something?" },
      { type: "dialogue", speaker: "MURDERER", text: "Not stealing." },
      { type: "dialogue", speaker: "DANIEL", text: "Then what?" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The murderer doesn\u2019t answer right away. The silence feels deliberate now." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Cross, if you are going to keep speaking, then finish a sentence for once in your life." },
      { type: "dialogue", speaker: "MURDERER", text: "He said you kept records." },
      { type: "direction", text: "Daniel\u2019s anger falters. That tiny hesitation is impossible to miss." },
      { type: "dialogue", speaker: "LAWYER", text: "Your Honor\u2014" },
      { type: "dialogue", speaker: "JUDGE", text: "I saw it." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "Records of what?" },
      { type: "dialogue", speaker: "MURDERER", text: "Payments. Names. Dates." },
      { type: "dialogue", speaker: "DANIEL", text: "My father sold auto parts." },
      { type: "dialogue", speaker: "MURDERER", text: "Your father sold whatever men needed him to sell." },
      { type: "dialogue", speaker: "DANIEL", text: "No." },
      { type: "dialogue", speaker: "MURDERER", text: "You really didn\u2019t know?" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer studies Daniel now with a new, colder interest. The judge sees it too." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale, is there anything you need to tell this court?" },
      { type: "dialogue", speaker: "DANIEL", text: "No." },
      { type: "dialogue", speaker: "JUDGE", text: "That answer came too fast." },
      { type: "dialogue", speaker: "DANIEL", text: "Because there\u2019s nothing to tell." },
      { type: "dialogue", speaker: "MURDERER", text: "He said the ledger would keep you alive." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "Daniel stops struggling against the bailiff." },
      { type: "dialogue", speaker: "DANIEL", text: "Ledger?" },
      { type: "dialogue", speaker: "MURDERER", text: "That\u2019s the word he used." },
      { type: "dialogue", speaker: "LAWYER", text: "This is worthless unless it\u2019s anchored to something real." },
      { type: "dialogue", speaker: "JUDGE", text: "Many things are real before they are admissible, counselor." },
      { type: "dialogue", speaker: "LAWYER", text: "And many lies become dangerous when spoken in the right tone." },
      { type: "dialogue", speaker: "JUDGE", text: "True." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The judge rises. Everyone straightens instinctively." },
      { type: "dialogue", speaker: "JUDGE", text: "Here is what will happen. Mr. Cross will say nothing further in this room outside the presence of a court reporter and, if necessary, under seal. Counsel will join me in chambers immediately. Mr. Vale\u2014" },
      { type: "direction", text: "Daniel looks up." },
      { type: "dialogue", speaker: "JUDGE", text: "You will remain seated and silent unless I call for you." },
      { type: "dialogue", speaker: "DANIEL", text: "And if I don\u2019t?" },
      { type: "dialogue", speaker: "JUDGE", text: "Then you spend the afternoon in a holding cell reflecting on the difference between pain and permission." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "Daniel gives a short, bitter laugh." },
      { type: "dialogue", speaker: "DANIEL", text: "You sound like my father." },
      { type: "direction", text: "The judge holds his gaze for a moment longer than expected." },
      { type: "dialogue", speaker: "JUDGE", text: "Then your father had some discipline in him." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The murderer stands as the bailiff moves to reposition him. As he does, he leans just slightly toward Daniel." },
      { type: "dialogue", speaker: "MURDERER", text: "Check the green toolbox." },
      { type: "direction", text: "The lawyer wheels on him." },
      { type: "dialogue", speaker: "LAWYER", text: "Stop talking!" },
      { type: "dialogue", speaker: "DANIEL", text: "What green toolbox?" },
      { type: "direction", text: "But the bailiff is already turning the murderer toward the side door. The judge has gone still again." },
      { type: "dialogue", speaker: "JUDGE", text: "What toolbox, Mr. Cross?" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The murderer glances back over his shoulder. This time, when he smiles, it is the first honest expression he has shown." },
      { type: "dialogue", speaker: "MURDERER", text: "Ask his mother." },
      { type: "direction", text: "The side door shuts behind him." },
    ],
  },

  // ============ ACT III ============
  {
    actBanner: "Act III — Ask His Mother",
    lines: [
      { type: "direction", text: "The side door shuts, and the sound seems to split the room in two. On one side: the judge, rigid behind the bench. On the other: Daniel, still half-held by the bailiff, breathing through his mouth like he\u2019s been running. The lawyer remains by the table, one hand flat on the scattered papers, staring at the door as if he could force the words back inside." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "My mother?" },
      { type: "direction", text: "No one answers immediately." },
      { type: "dialogue", speaker: "JUDGE", text: "Bailiff, release him." },
      { type: "dialogue", speaker: "BAILIFF", text: "Your Honor\u2014" },
      { type: "dialogue", speaker: "JUDGE", text: "He is not under arrest." },
      { type: "direction", text: "The bailiff lets go. Daniel doesn\u2019t move. He\u2019s looking at the empty doorway." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "LAWYER", text: "That was intentional." },
      { type: "dialogue", speaker: "DANIEL", text: "What was?" },
      { type: "dialogue", speaker: "LAWYER", text: "The toolbox. Your mother. The pause before each line. He\u2019s turning this into a maze because he has nothing solid to bargain with except confusion." },
      { type: "dialogue", speaker: "DANIEL", text: "You think he made that up?" },
      { type: "dialogue", speaker: "LAWYER", text: "I think men like him don\u2019t waste words unless they buy something." },
      { type: "dialogue", speaker: "JUDGE", text: "That applies to more than men like him." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer glances up at the bench, accepts the hit, says nothing." },
      { type: "dialogue", speaker: "DANIEL", text: "My mother\u2019s been dead six years." },
      { type: "direction", text: "That changes the air." },
      { type: "dialogue", speaker: "JUDGE", text: "I\u2019m sorry." },
      { type: "dialogue", speaker: "DANIEL", text: "Don\u2019t." },
      { type: "direction", text: "The judge\u2019s expression hardens again, less from offense than restraint." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "LAWYER", text: "Did your father keep old tools? Storage? Garage? A workshop?" },
      { type: "dialogue", speaker: "DANIEL", text: "Everybody keeps tools." },
      { type: "dialogue", speaker: "LAWYER", text: "Green toolbox, Daniel." },
      { type: "dialogue", speaker: "DANIEL", text: "Stop using my name like we\u2019re on the same side." },
      { type: "dialogue", speaker: "LAWYER", text: "At the moment, I\u2019m on the side of finding out whether my client just injected a dead woman into a murder trial to distract from his own exposure." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "Your client shot my father." },
      { type: "dialogue", speaker: "LAWYER", text: "Very possibly. And still, he may also be telling the truth about something else." },
      { type: "dialogue", speaker: "DANIEL", text: "You say that like it\u2019s normal." },
      { type: "dialogue", speaker: "LAWYER", text: "It is normal. That\u2019s the part people hate." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "Daniel turns away from him, up toward the bench." },
      { type: "dialogue", speaker: "DANIEL", text: "He said \u201cask his mother\u201d because he knew she was dead?" },
      { type: "dialogue", speaker: "JUDGE", text: "Maybe." },
      { type: "dialogue", speaker: "DANIEL", text: "How would he know that?" },
      { type: "dialogue", speaker: "JUDGE", text: "Maybe because someone told him. Maybe because he knew your father longer than you think. Maybe because he\u2019s lying and dead people make useful witnesses." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "Which one do you believe?" },
      { type: "dialogue", speaker: "JUDGE", text: "I don\u2019t believe. I sort." },
      { type: "direction", text: "The judge steps down from the bench now. It is not dramatic, but it is unusual enough that everyone notices." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "JUDGE", text: "Counsel, chambers can wait two minutes." },
      { type: "dialogue", speaker: "LAWYER", text: "Your Honor\u2014" },
      { type: "dialogue", speaker: "JUDGE", text: "Two minutes." },
      { type: "direction", text: "The lawyer nods once." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale. Look at me." },
      { type: "direction", text: "Daniel does." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "JUDGE", text: "When your father used \u201cDaniel,\u201d what kind of lie did he think you were telling?" },
      { type: "direction", text: "Daniel\u2019s eyes narrow. He knows this is not sympathy. It is precision." },
      { type: "dialogue", speaker: "DANIEL", text: "The kind where I already knew the answer." },
      { type: "dialogue", speaker: "JUDGE", text: "Good. So when Mr. Cross said your father used your formal name, what was your first thought?" },
      { type: "dialogue", speaker: "DANIEL", text: "That my father thought I was hiding something." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "JUDGE", text: "Were you?" },
      { type: "dialogue", speaker: "DANIEL", text: "No." },
      { type: "dialogue", speaker: "LAWYER", text: "That is not what your face said." },
      { type: "direction", text: "Daniel turns on him." },
      { type: "dialogue", speaker: "DANIEL", text: "My face?" },
      { type: "dialogue", speaker: "LAWYER", text: "When he said \u201crecords,\u201d you flinched. When he said \u201cledger,\u201d you stopped breathing for a full second." },
      { type: "dialogue", speaker: "DANIEL", text: "You don\u2019t know what you saw." },
      { type: "dialogue", speaker: "LAWYER", text: "I make a living on less." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "JUDGE", text: "Enough. Mr. Vale, answer carefully. Had you ever heard the word \u201cledger\u201d used in connection with your father before today?" },
      { type: "direction", text: "Daniel says nothing." },
      { type: "dialogue", speaker: "JUDGE", text: "That is not a difficult question." },
      { type: "dialogue", speaker: "DANIEL", text: "Once." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer straightens." },
      { type: "dialogue", speaker: "LAWYER", text: "From whom?" },
      { type: "dialogue", speaker: "DANIEL", text: "My mother." },
      { type: "direction", text: "The courtroom goes quiet again." },
      { type: "dialogue", speaker: "JUDGE", text: "When?" },
      { type: "dialogue", speaker: "DANIEL", text: "Years ago. I was maybe fifteen." },
      { type: "dialogue", speaker: "LAWYER", text: "In what context?" },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "She and my father were fighting in the kitchen. She said, \u201cOne day that ledger is going to bury us.\u201d He told her to lower her voice because I was upstairs." },
      { type: "dialogue", speaker: "JUDGE", text: "And were you upstairs?" },
      { type: "dialogue", speaker: "DANIEL", text: "I was on the stairs." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "LAWYER", text: "Did you ever ask him?" },
      { type: "dialogue", speaker: "DANIEL", text: "He said it was tax stuff." },
      { type: "dialogue", speaker: "LAWYER", text: "Did you believe him?" },
      { type: "dialogue", speaker: "DANIEL", text: "I was fifteen." },
      { type: "dialogue", speaker: "LAWYER", text: "That\u2019s not an answer." },
      { type: "dialogue", speaker: "DANIEL", text: "No." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The judge folds his arms." },
      { type: "dialogue", speaker: "JUDGE", text: "Why not?" },
      { type: "dialogue", speaker: "DANIEL", text: "Because my mother was scared." },
      { type: "dialogue", speaker: "JUDGE", text: "Of your father?" },
      { type: "dialogue", speaker: "DANIEL", text: "No." },
      { type: "dialogue", speaker: "LAWYER", text: "Of who, then?" },
      { type: "dialogue", speaker: "DANIEL", text: "Of the people my father was scared of." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer looks back toward the side door." },
      { type: "dialogue", speaker: "LAWYER", text: "Then Mr. Cross may not have been freelancing." },
      { type: "dialogue", speaker: "DANIEL", text: "You sound pleased." },
      { type: "dialogue", speaker: "LAWYER", text: "I sound interested." },
      { type: "dialogue", speaker: "DANIEL", text: "Same thing to you?" },
      { type: "dialogue", speaker: "LAWYER", text: "Often." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The judge cuts in before Daniel can answer." },
      { type: "dialogue", speaker: "JUDGE", text: "Did your mother ever mention a toolbox?" },
      { type: "dialogue", speaker: "DANIEL", text: "No." },
      { type: "dialogue", speaker: "JUDGE", text: "Did your father own one that was distinct enough to be referred to that way?" },
      { type: "dialogue", speaker: "DANIEL", text: "In the garage, there was an old metal one. Green. Rust on the corners. He never let me touch it." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "LAWYER", text: "There it is." },
      { type: "dialogue", speaker: "DANIEL", text: "That proves nothing." },
      { type: "dialogue", speaker: "LAWYER", text: "It proves your client\u2014 excuse me, the victim\u2014 kept exactly the kind of object Mr. Cross named without prompting." },
      { type: "dialogue", speaker: "DANIEL", text: "Or he\u2019d been to our house." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "That lands." },
      { type: "dialogue", speaker: "JUDGE", text: "Had he?" },
      { type: "dialogue", speaker: "DANIEL", text: "I don\u2019t know." },
      { type: "dialogue", speaker: "LAWYER", text: "Did your father know him?" },
      { type: "dialogue", speaker: "DANIEL", text: "I never saw them together." },
      { type: "dialogue", speaker: "LAWYER", text: "Not the question." },
      { type: "dialogue", speaker: "DANIEL", text: "Then I don\u2019t know." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The judge looks to the bailiff." },
      { type: "dialogue", speaker: "JUDGE", text: "Has the jury been kept out?" },
      { type: "dialogue", speaker: "BAILIFF", text: "Yes, Your Honor." },
      { type: "dialogue", speaker: "JUDGE", text: "Good." },
      { type: "direction", text: "He turns back." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale, where is this toolbox now?" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "Daniel swallows." },
      { type: "dialogue", speaker: "DANIEL", text: "I don\u2019t know." },
      { type: "dialogue", speaker: "LAWYER", text: "Another bad answer." },
      { type: "dialogue", speaker: "DANIEL", text: "We cleaned the garage after my father died." },
      { type: "dialogue", speaker: "JUDGE", text: "\u201cWe\u201d meaning?" },
      { type: "dialogue", speaker: "DANIEL", text: "Me and my uncle." },
      { type: "dialogue", speaker: "LAWYER", text: "Your father\u2019s brother?" },
      { type: "dialogue", speaker: "DANIEL", text: "My mother\u2019s." },
      { type: "dialogue", speaker: "LAWYER", text: "Name." },
      { type: "dialogue", speaker: "DANIEL", text: "Ray Donnelly." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer\u2019s eyes sharpen at once." },
      { type: "dialogue", speaker: "LAWYER", text: "Donnelly." },
      { type: "dialogue", speaker: "JUDGE", text: "You know it?" },
      { type: "dialogue", speaker: "LAWYER", text: "I know the name." },
      { type: "dialogue", speaker: "DANIEL", text: "From where?" },
      { type: "dialogue", speaker: "LAWYER", text: "I\u2019m not sure yet." },
      { type: "dialogue", speaker: "DANIEL", text: "That\u2019s convenient." },
      { type: "dialogue", speaker: "LAWYER", text: "It\u2019s accurate." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "JUDGE", text: "Save it. Mr. Vale, did this uncle take anything from the garage?" },
      { type: "direction", text: "Daniel hesitates." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale." },
      { type: "dialogue", speaker: "DANIEL", text: "He said he was taking paperwork so I wouldn\u2019t have to deal with it." },
      { type: "dialogue", speaker: "LAWYER", text: "What paperwork?" },
      { type: "dialogue", speaker: "DANIEL", text: "I didn\u2019t ask." },
      { type: "dialogue", speaker: "LAWYER", text: "Why not?" },
      { type: "dialogue", speaker: "DANIEL", text: "Because my father had just been murdered!" },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "LAWYER", text: "Yes, and people tend to hide things inside grief because no one wants to press them while they\u2019re bleeding." },
      { type: "dialogue", speaker: "JUDGE", text: "Counselor." },
      { type: "dialogue", speaker: "LAWYER", text: "That was not a metaphor I needed." },
      { type: "direction", text: "Daniel rubs his face hard with both hands." },
      { type: "dialogue", speaker: "DANIEL", text: "Are you saying my uncle knew?" },
      { type: "dialogue", speaker: "LAWYER", text: "I\u2019m saying someone might have cleaned the board before anyone else saw the pieces." },
      { type: "dialogue", speaker: "DANIEL", text: "Stop talking like it\u2019s a game." },
      { type: "dialogue", speaker: "LAWYER", text: "Then start treating it like it isn\u2019t." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The judge\u2019s tone drops." },
      { type: "dialogue", speaker: "JUDGE", text: "Mr. Vale. Is there any reason\u2014 any reason at all\u2014 that your uncle would know to remove a ledger from your father\u2019s garage immediately after the killing?" },
      { type: "direction", text: "Daniel looks from the judge to the lawyer, then back to the floor." },
      { type: "dialogue", speaker: "DANIEL", text: "He got to the house before I did." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "JUDGE", text: "Who called him?" },
      { type: "dialogue", speaker: "DANIEL", text: "I didn\u2019t." },
      { type: "dialogue", speaker: "LAWYER", text: "Who told you he took paperwork?" },
      { type: "dialogue", speaker: "DANIEL", text: "He did. Later. He said, \u201cI cleaned up some of your dad\u2019s mess.\u201d" },
      { type: "dialogue", speaker: "JUDGE", text: "Exact words?" },
      { type: "dialogue", speaker: "DANIEL", text: "\u201cSome of your dad\u2019s mess.\u201d Yes." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The lawyer lets out a slow breath." },
      { type: "dialogue", speaker: "LAWYER", text: "Your Honor, chambers is now urgent." },
      { type: "dialogue", speaker: "JUDGE", text: "I\u2019m aware." },
      { type: "dialogue", speaker: "DANIEL", text: "What happens now?" },
      { type: "dialogue", speaker: "JUDGE", text: "Now I find out whether your uncle Ray Donnelly is a grieving relative, a loose end, or the reason a defendant just blew up his own defense in open court." },
    ],
  },
  {
    lines: [
      { type: "dialogue", speaker: "DANIEL", text: "And me?" },
      { type: "dialogue", speaker: "JUDGE", text: "That depends." },
      { type: "dialogue", speaker: "DANIEL", text: "On what?" },
      { type: "direction", text: "The judge studies him carefully." },
      { type: "dialogue", speaker: "JUDGE", text: "On whether your father died trying to protect you, or because of you." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "Daniel recoils like he\u2019s been struck." },
      { type: "dialogue", speaker: "DANIEL", text: "I didn\u2019t do anything." },
      { type: "dialogue", speaker: "LAWYER", text: "Then this is the moment to remember what you did do." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "A knock sounds at the side door. The bailiff opens it a crack. A clerk leans in, pale, rattled." },
      { type: "dialogue", speaker: "CLERK", text: "Your Honor\u2014 sorry\u2014 there\u2019s a call for Mr. Vale. They said it couldn\u2019t wait." },
      { type: "dialogue", speaker: "JUDGE", text: "From whom?" },
      { type: "direction", text: "The clerk looks down at the note in her hand." },
      { type: "dialogue", speaker: "CLERK", text: "They only said, \u201cTell Daniel to stop opening old boxes.\u201d" },
    ],
  },
  {
    lines: [
      { type: "direction", text: "Daniel goes white." },
      { type: "dialogue", speaker: "LAWYER", text: "Do not take that call alone." },
      { type: "dialogue", speaker: "JUDGE", text: "Put it on speaker in chambers." },
      { type: "dialogue", speaker: "DANIEL", text: "No." },
      { type: "direction", text: "All three turn to him." },
      { type: "dialogue", speaker: "DANIEL", text: "If this is about my father, they want me scared. I\u2019m not giving them a room and an audience." },
      { type: "dialogue", speaker: "LAWYER", text: "This is not a performance choice." },
      { type: "dialogue", speaker: "DANIEL", text: "It\u2019s my call." },
      { type: "dialogue", speaker: "JUDGE", text: "In my courthouse, it is not." },
    ],
  },
  {
    lines: [
      { type: "direction", text: "The phone begins ringing again in the clerk\u2019s trembling hand." },
    ],
    isEnd: true,
  },
];

// ============ App logic ============

const cover = document.getElementById("cover");
const scriptEl = document.getElementById("script");
const startBtn = document.getElementById("startBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const autoBtn = document.getElementById("autoBtn");
const controls = document.querySelector(".controls");
const progressBar = document.getElementById("progressBar");
const progressCount = document.getElementById("progressCount");
const progressTotal = document.getElementById("progressTotal");
const actBanner = document.getElementById("actBanner");
const gavelFlash = document.getElementById("gavelFlash");

let currentPage = -1;
let autoplay = false;
let autoTimer = null;

progressTotal.textContent = STORY.length;

function speakerClass(speaker) {
  return speaker.toLowerCase();
}

function renderPage(index) {
  const page = STORY[index];
  scriptEl.innerHTML = "";
  scriptEl.classList.remove("active");
  // force reflow for re-animation
  void scriptEl.offsetWidth;
  scriptEl.classList.add("active");

  page.lines.forEach((line, i) => {
    const p = document.createElement("p");
    p.className = "line";
    p.style.animationDelay = (i * 0.12) + "s";

    if (line.type === "direction") {
      p.classList.add("direction");
      p.textContent = line.text;
    } else if (line.type === "gavel") {
      p.classList.add("direction", "gavel-hit");
      p.textContent = line.text;
      // trigger gavel effect after the line appears
      const delay = 300 + i * 120;
      setTimeout(triggerGavel, delay);
    } else if (line.type === "dialogue") {
      const speakerSpan = document.createElement("span");
      speakerSpan.className = "speaker " + speakerClass(line.speaker);
      speakerSpan.textContent = line.speaker + ":";
      p.appendChild(speakerSpan);
      const dlg = document.createElement("span");
      dlg.className = "dialogue";
      dlg.textContent = " " + line.text;
      p.appendChild(dlg);
    }
    scriptEl.appendChild(p);
  });

  if (page.actBanner) {
    showActBanner(page.actBanner);
  }

  if (page.isEnd) {
    const end = document.createElement("div");
    end.className = "end-slate";
    end.innerHTML = `
      <div class="curtain">⚖</div>
      <h3>END OF DAY FIVE</h3>
      <p>The jury never comes back in. The courtroom empties at its own pace.</p>
      <p>— Curtain —</p>
    `;
    scriptEl.appendChild(end);
  }

  // update progress
  const percent = ((index + 1) / STORY.length) * 100;
  progressBar.style.setProperty("--progress", percent + "%");
  progressCount.textContent = index + 1;

  // update buttons
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === STORY.length - 1;
  nextBtn.textContent = index === STORY.length - 1 ? "The End" : "Next ▶";

  // schedule autoplay next page
  if (autoplay && index < STORY.length - 1) {
    const lineCount = page.lines.length;
    const delay = 1500 + lineCount * 900;
    clearTimeout(autoTimer);
    autoTimer = setTimeout(() => next(), delay);
  }
}

function showActBanner(text) {
  actBanner.textContent = text;
  actBanner.classList.add("visible");
  setTimeout(() => {
    actBanner.classList.remove("visible");
  }, 2000);
}

function triggerGavel() {
  gavelFlash.classList.remove("flash");
  void gavelFlash.offsetWidth;
  gavelFlash.classList.add("flash");
  scriptEl.classList.add("shake");
  setTimeout(() => scriptEl.classList.remove("shake"), 450);
}

function start() {
  cover.classList.add("hidden");
  controls.classList.add("visible");
  goTo(0);
}

function goTo(index) {
  if (index < 0 || index >= STORY.length) return;
  currentPage = index;
  renderPage(index);
  scriptEl.scrollTop = 0;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function next() {
  if (currentPage < STORY.length - 1) goTo(currentPage + 1);
  else stopAutoplay();
}

function prev() {
  if (currentPage > 0) goTo(currentPage - 1);
}

function restart() {
  stopAutoplay();
  currentPage = -1;
  scriptEl.classList.remove("active");
  scriptEl.innerHTML = "";
  controls.classList.remove("visible");
  cover.classList.remove("hidden");
}

function toggleAutoplay() {
  autoplay = !autoplay;
  autoBtn.textContent = "Autoplay: " + (autoplay ? "On" : "Off");
  if (autoplay && currentPage >= 0 && currentPage < STORY.length - 1) {
    next();
  } else {
    clearTimeout(autoTimer);
  }
}

function stopAutoplay() {
  autoplay = false;
  autoBtn.textContent = "Autoplay: Off";
  clearTimeout(autoTimer);
}

// Event listeners
startBtn.addEventListener("click", start);
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
restartBtn.addEventListener("click", restart);
autoBtn.addEventListener("click", toggleAutoplay);

document.addEventListener("keydown", (e) => {
  if (currentPage < 0) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      start();
    }
    return;
  }
  if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
    e.preventDefault();
    next();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prev();
  } else if (e.key === "Escape") {
    restart();
  }
});

// Click anywhere on the script to advance
scriptEl.addEventListener("click", (e) => {
  if (e.target.closest("button")) return;
  next();
});
